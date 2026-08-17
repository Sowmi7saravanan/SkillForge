import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import TopicSelector from "../components/TopicSelector";

import "../styles/Dashboard.css";

function Dashboard() {

  // This data will come from MongoDB later
  const [userStats, setUserStats] = useState({
    problemsSolved: 0,
    resumeScore: null,
    hackathonsJoined: 0,
    streak: 0,
    selectedTopic: "",
  });

  // Called when user selects a topic
  const chooseTopic = (topic) => {
    setUserStats({
      ...userStats,
      selectedTopic: topic,
    });
  };

  return (
    <>
      <Sidebar />
      <Topbar />

      <div className="dashboard">

        <div className="dashboard-header">
          <h1>Welcome to SkillForge 👋</h1>

          <p>
            Build your coding journey one problem at a time.
          </p>
        </div>

        {/* Dashboard Cards */}

        <div className="cards">

          <div className="card">
            <h2>{userStats.problemsSolved}</h2>
            <p>Problems Solved</p>
          </div>

          <div className="card">
            <h2>
              {userStats.resumeScore === null
                ? "Not Generated"
                : `${userStats.resumeScore}%`}
            </h2>

            <p>Resume Score</p>
          </div>

          <div className="card">
            <h2>{userStats.hackathonsJoined}</h2>
            <p>Hackathons Joined</p>
          </div>

          <div className="card">
            <h2>{userStats.streak} Days</h2>
            <p>Current Streak</p>
          </div>

        </div>

        {/* Recommendation */}

        {userStats.selectedTopic === "" ? (

          <TopicSelector setTopic={chooseTopic} />

        ) : (

          <div className="recommendation">

            <h2>Today's Recommendation</h2>

            <p>

              Continue learning

              <strong>
                {" "}
                {userStats.selectedTopic}
              </strong>

              .

            </p>

            <button>
              Start Learning
            </button>

          </div>

        )}

      </div>

    </>
  );
}

export default Dashboard;