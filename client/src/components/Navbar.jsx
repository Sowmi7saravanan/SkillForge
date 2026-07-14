import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>

      <div className="brand">

        <div className="logo">
          SF
        </div>

      </div>

      <div className="running-text">
        <marquee>
          An integrated platform that turns your practice into valuable skills.
        </marquee>
      </div>

      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>About</li>
      </ul>

    </nav>
  );
}

export default Navbar;