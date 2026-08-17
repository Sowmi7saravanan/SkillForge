import Navbar from "../components/Navbar";
import "../styles/LandingPage.css";
import studyImg from "../assets/study.jpeg";
import { useNavigate } from "react-router-dom";

function LandingPage() {

  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* HOME */}
      <section
        id="home"
        className="hero"
        style={{ backgroundImage: `url(${studyImg})` }}
      >
        <div className="overlay"></div>

        <div className="hero-content">
          <h1 className="title">SkillForge</h1>

          <h2 className="heading">
            Forge Your Coding Confidence
          </h2>

          <h3 className="tagline">
            Practice smarter, not harder.
          </h3>

          <p className="description">
            AI-powered platform for coding practice,
            hackathons, interview preparation,
            resumes and career growth in one place.
          </p>

          <div className="hero-buttons">

  <button
    className="primary-btn"
    onClick={() => navigate("/signup")}
  >
    Get Started
  </button>

  <button
    className="secondary-btn"
    onClick={() => navigate("/login")}
  >
    Login
  </button>

</div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="section">
        <h2>Features</h2>

        <p>
          Our platform provides coding practice,
          hackathons, resume builder,
          interview preparation and AI guidance.
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About</h2>

        <p>
          SkillForge is an AI-powered career development platform
          designed to help students improve coding skills,
          participate in hackathons,
          prepare for interviews,
          and build professional resumes—all in one place.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact</h2>

        <p>Email : support@skillforge.com</p>
      </section>
    </>
  );
}

export default LandingPage;