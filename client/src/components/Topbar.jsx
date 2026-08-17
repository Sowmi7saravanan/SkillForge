import { FaBell, FaUserCircle } from "react-icons/fa";
import "../styles/Topbar.css";

function Topbar() {

  return (

    <header className="topbar">

      <div>

        <h2>Welcome Back 👋</h2>

        <p>Continue your learning journey.</p>

      </div>

      <div className="top-icons">

        <FaBell className="icon"/>

        <FaUserCircle className="icon"/>

      </div>

    </header>

  );

}

export default Topbar;