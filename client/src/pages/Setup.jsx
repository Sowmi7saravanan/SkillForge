import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Setup.css";

function Setup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    college: "",
    year: "",
    language: "",
    goal: "",
    topics: [],
  });

  const topicList = [
    "Arrays",
    "Strings",
    "Linked List",
    "Stack",
    "Queue",
    "Trees",
    "Graphs",
    "Sorting",
    "Searching",
    "Recursion",
    "Greedy",
    "Dynamic Programming",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleTopic = (topic) => {

    if (formData.topics.includes(topic)) {

      setFormData({
        ...formData,
        topics: formData.topics.filter((t) => t !== topic),
      });

    } else {

      setFormData({
        ...formData,
        topics: [...formData.topics, topic],
      });

    }
  };

  const handleSubmit = () => {

    console.log(formData);

    // Later this will save to MongoDB

    navigate("/dashboard");

  };

  return (

    <div className="setup-container">

      <div className="setup-card">

        <h1>Welcome to SkillForge 🚀</h1>

        <p>
          Let's personalize your learning journey.
        </p>

        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="College Name"
          name="college"
          value={formData.college}
          onChange={handleChange}
        />

        <select
          name="year"
          value={formData.year}
          onChange={handleChange}
        >
          <option value="">Select Year</option>
          <option>1st Year</option>
          <option>2nd Year</option>
          <option>3rd Year</option>
          <option>4th Year</option>
        </select>

        <select
          name="language"
          value={formData.language}
          onChange={handleChange}
        >
          <option value="">Preferred Language</option>
          <option>C</option>
          <option>C++</option>
          <option>Java</option>
          <option>Python</option>
        </select>

        <select
          name="goal"
          value={formData.goal}
          onChange={handleChange}
        >
          <option value="">Career Goal</option>
          <option>Placements</option>
          <option>DSA</option>
          <option>Competitive Programming</option>
          <option>Hackathons</option>
          <option>Full Stack Development</option>
        </select>

        <h3>Topics You Already Know</h3>

        <div className="topics">

          {topicList.map((topic) => (

            <button
              key={topic}
              type="button"
              className={
                formData.topics.includes(topic)
                  ? "selected"
                  : ""
              }
              onClick={() => toggleTopic(topic)}
            >
              {topic}
            </button>

          ))}

        </div>

        <button
          className="save-btn"
          onClick={handleSubmit}
        >
          Save & Continue
        </button>

      </div>

    </div>

  );
}

export default Setup;