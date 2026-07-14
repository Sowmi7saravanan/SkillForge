import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <h2>SkillForge</h2>

      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>About</li>
      </ul>

      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Get Started</button>
      </div>
    </nav>
  );
}

export default Navbar;