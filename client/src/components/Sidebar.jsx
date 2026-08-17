import {
  FaHome,
  FaCode,
  FaTrophy,
  FaFileAlt,
  FaRobot,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaChartLine,
} from "react-icons/fa";

import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

<div className="logo">
    <div className="logo-box">SF</div>
</div>
      <ul>

        <li><FaHome /> Dashboard</li>

        <li><FaCode /> Coding</li>

        <li><FaTrophy /> Hackathons</li>

        <li><FaFileAlt /> Resume</li>

        <li><FaRobot /> AI Mentor</li>

        <li><FaChartLine /> Progress</li>

        <li><FaUser /> Profile</li>

        <li><FaCog /> Settings</li>

        <li className="logout">
          <FaSignOutAlt /> Logout
        </li>

      </ul>

    </aside>
  );
}

export default Sidebar;