import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CodingQuestion.css";

function CodingQuestion() {
  const location = useLocation();
  const navigate = useNavigate();

  const question = location.state?.question;
  const topic = location.state?.topic;

  const [code, setCode] = useState(
`def solution():
    # Write your solution here
    pass`
  );

  const [time, setTime] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // If user directly opens the URL
  if (!question) {
    return (
      <div className="question-error">
        <h2>Question not found</h2>

        <button onClick={() => navigate("/dashboard")}>
          Back to Dashboard
        </button>
      </div>
    );
  }

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const handleSubmit = () => {
    setSubmitted(true);

    // For now we only store the result locally.
    // Later this will go to MongoDB.
    const performance = {
      topic: topic,
      questionId: question.id,
      questionTitle: question.title,
      timeTaken: time,
      submittedAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "lastPerformance",
      JSON.stringify(performance)
    );

    console.log("Performance:", performance);
  };

  return (
    <div className="coding-question-page">

      {/* Header */}

      <div className="question-header">

        <button
          className="back-button"
          onClick={() => navigate("/coding", {
            state: { topic: topic }
          })}
        >
          ← Back to Questions
        </button>

        <div className="timer">
          ⏱ {String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </div>

      </div>


      {/* Question */}

      <div className="question-layout">

        <div className="problem-section">

          <span className="topic-label">
            {topic}
          </span>

          <h1>
            {question.title}
          </h1>

          <div className="problem-description">

            <h3>Problem</h3>

            <p>
              {question.description}
            </p>

          </div>

          <div className="time-info">
            ⏱ Target solving time: {question.time} minutes
          </div>

        </div>


        {/* Code Editor */}

        <div className="editor-section">

          <div className="editor-header">
            <span>Python</span>

            <span>
              {minutes}:{String(seconds).padStart(2, "0")}
            </span>
          </div>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="code-editor"
            spellCheck="false"
          />

          <button
            className="submit-button"
            onClick={handleSubmit}
          >
            Submit Solution
          </button>

        </div>

      </div>


      {/* Submission result */}

      {submitted && (

        <div className="submission-result">

          <h2>Solution Submitted ✓</h2>

          <p>
            Your attempt has been recorded.
          </p>

          <p>
            Time taken:{" "}
            <strong>
              {minutes} min {seconds} sec
            </strong>
          </p>

          <button
            onClick={() => navigate("/coding", {
              state: { topic: topic }
            })}
          >
            Continue
          </button>

        </div>

      )}

    </div>
  );
}

export default CodingQuestion;