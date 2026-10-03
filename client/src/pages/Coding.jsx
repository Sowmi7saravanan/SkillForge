import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Coding.css";

const API_URL = "http://localhost:5000";

function Coding() {
  const [searchParams] = useSearchParams();

  const topic = searchParams.get("topic") || "Arrays";

  const [question, setQuestion] = useState(null);
  const [language, setLanguage] = useState("c");
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // 5 minute timer
  const [timeLeft, setTimeLeft] = useState(300);

  // --------------------------------------------------
  // LOAD QUESTION
  // --------------------------------------------------

  useEffect(() => {
    loadQuestion();
  }, [topic]);

  // --------------------------------------------------
  // TIMER
  // --------------------------------------------------

  useEffect(() => {
    if (timeLeft <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((previousTime) => previousTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // --------------------------------------------------
  // GET QUESTION FROM BACKEND
  // --------------------------------------------------

  const loadQuestion = async () => {
    try {
      setLoading(true);
      setResult(null);
      setCode("");

      // Reset timer for every new question
      setTimeLeft(300);

      const response = await fetch(
        `${API_URL}/api/code/question/${topic}`
      );

      if (!response.ok) {
        throw new Error("Failed to load question");
      }

      const data = await response.json();

      setQuestion(data.question);

    } catch (error) {
      console.error(error);
      setQuestion(null);

    } finally {
      setLoading(false);
    }
  };

  // --------------------------------------------------
  // SUBMIT CODE
  // --------------------------------------------------

  const submitCode = async () => {

    if (!code.trim()) {
      alert("Please write your solution first.");
      return;
    }

    try {

      setSubmitting(true);

      const response = await fetch(
        `${API_URL}/api/code/submit`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            topic: topic,
            questionId: question.id,
            language: language,
            code: code,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      const data = await response.json();

      setResult(data);

    } catch (error) {

      console.error(error);

      setResult({
        passed: false,
        score: 0,
        message:
          "Unable to connect to the coding server.",
      });

    } finally {

      setSubmitting(false);

    }
  };

  // --------------------------------------------------
  // FORMAT TIMER
  // --------------------------------------------------

  const minutes = Math.floor(timeLeft / 60);

  const seconds = timeLeft % 60;

  const formattedTime =
    `${minutes}:${seconds.toString().padStart(2, "0")}`;

  // --------------------------------------------------
  // LOADING
  // --------------------------------------------------

  if (loading) {

    return (
      <div className="coding-page">

        <h2>
          Loading question...
        </h2>

      </div>
    );

  }

  // --------------------------------------------------
  // QUESTION NOT FOUND
  // --------------------------------------------------

  if (!question) {

    return (
      <div className="coding-page">

        <h2>
          Question not found.
        </h2>

      </div>
    );

  }

  // --------------------------------------------------
  // PAGE
  // --------------------------------------------------

  return (

    <div className="coding-page">

      {/* ============================= */}
      {/* QUESTION CARD */}
      {/* ============================= */}

      <div className="question-card">

        <div className="topic-name">
          {topic}
        </div>

        <h1>
          {question.title}
        </h1>

        <p className="description">
          {question.description}
        </p>

        {/* TIMER */}

        <div
          className={`timer ${
            timeLeft <= 60 ? "warning" : ""
          }`}
        >
          ⏱️ Time Left: {formattedTime}
        </div>


        {/* EXAMPLE */}

        <div className="example-box">

          <strong>
            Example
          </strong>

          <pre>
{`Input: ${JSON.stringify(
  question.testCases?.[0]?.input
)}

Output: ${JSON.stringify(
  question.testCases?.[0]?.expectedOutput
)}`}
          </pre>

        </div>


        {/* HINT */}

        {question.hint && (

          <div className="hint-box">

            💡 <strong>Hint:</strong>{" "}

            {question.hint}

          </div>

        )}

      </div>


      {/* ============================= */}
      {/* CODE EDITOR */}
      {/* ============================= */}

      <div className="editor-card">

        <div className="editor-header">

          <h2>
            Your Solution
          </h2>

          <select
            value={language}
            onChange={(e) =>
              setLanguage(e.target.value)
            }
          >

            <option value="c">
              C
            </option>

            <option value="cpp">
              C++
            </option>

            <option value="python">
              Python
            </option>

          </select>

        </div>


        {/* CODE AREA */}

        <textarea
          className="code-editor"

          value={code}

          onChange={(e) =>
            setCode(e.target.value)
          }

          placeholder={
            `Write your ${
              language === "cpp"
                ? "C++"
                : language === "python"
                ? "Python"
                : "C"
            } solution here...`
          }

          spellCheck="false"
        />


        {/* SUBMIT */}

        <button
          className="submit-button"

          onClick={submitCode}

          disabled={submitting}
        >

          {submitting
            ? "Running..."
            : "Run & Submit"}

        </button>

      </div>


      {/* ============================= */}
      {/* RESULT */}
      {/* ============================= */}

      {result && (

        <div className="result-card">

          <h2>

            {result.passed
              ? "🎉 Good job!"
              : "Keep practicing!"}

          </h2>


          {/* SCORE */}

          {result.score !== undefined && (

            <div className="score">

              Score: {result.score}%

            </div>

          )}


          {/* MESSAGE */}

          {result.message && (

            <p>
              {result.message}
            </p>

          )}


          {/* PASSED */}

          {result.passed ? (

            <div className="next-question">

              <p>
                Your solution passed the
                test cases.
              </p>

              <button
                onClick={loadQuestion}
              >
                Try Next Question
              </button>

            </div>

          ) : (

            /* FAILED */

            <div className="learning-note">

              <h3>
                📝 Quick Note
              </h3>

              <p>
                Don't worry. Review the
                problem carefully, identify
                the required logic, and try
                again.
              </p>

              <button
                onClick={() =>
                  setResult(null)
                }
              >
                Try Again
              </button>

            </div>

          )}

        </div>

      )}

    </div>

  );
}

export default Coding;