import Navbar from "../components/Navbar";
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <>
      <Navbar />

      <section className="hero">

        <div className="overlay"></div>

        <div className="hero-content">

          <h1 className="logo-name">SkillForge</h1>

          <h3>
            Forge Your Coding Confidence
          </h3>

          <h2>
            Practice smarter, not harder.
          </h2>

          <p>
            AI-powered platform for coding practice, hackathons,
            resumes, interview preparation and career growth
            in one place.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Get Started
            </button>

            <button className="secondary-btn">
              Login
            </button>
          </div>

        </div>

      </section>
    </>
  );
}

export default LandingPage;