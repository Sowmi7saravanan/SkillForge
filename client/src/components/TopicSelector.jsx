import { useNavigate } from "react-router-dom";
import "./TopicSelector.css";

function TopicSelector() {

    const navigate = useNavigate();

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
        "Searching"
    ];


    function selectTopic(topic) {

        localStorage.setItem(
            "selectedTopic",
            topic
        );

        navigate(
            `/coding?topic=${encodeURIComponent(topic)}`
        );

    }


    return (

        <div className="topic-box">

            <h2>
                Select Your Learning Topic
            </h2>

            <p>
                Choose the topic you want to work on today.
            </p>


            <div className="topic-grid">

                {topics.map((topic) => (

                    <button
                        key={topic}
                        onClick={() => selectTopic(topic)}
                    >
                        {topic}
                    </button>

                ))}

            </div>

        </div>

    );
}

export default TopicSelector;