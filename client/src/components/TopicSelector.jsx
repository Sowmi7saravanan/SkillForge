import "./TopicSelector.css";

function TopicSelector({ setSelectedTopic }) {

  const topics = [
    "Arrays",
    "Strings",
    "Linked List",
    "Stack",
    "Queue",
    "Trees",
    "Graphs",
    "Dynamic Programming",
    "Recursion",
    "Greedy",
    "Sorting",
    "Searching",
  ];

  return (
    <div className="topic-box">

      <h2>Select Your Learning Topic</h2>

      <p>
        Choose the topic you want to master today.
      </p>

      <div className="topic-grid">

        {topics.map((topic) => (

          <button
            key={topic}
            onClick={() => setSelectedTopic(topic)}
          >
            {topic}
          </button>

        ))}

      </div>

    </div>
  );
}

export default TopicSelector;