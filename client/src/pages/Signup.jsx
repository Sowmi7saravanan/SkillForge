import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function Signup() {

  const navigate = useNavigate();

  const handleSignup = () => {

    // Later we will save the user in MongoDB

    navigate("/setup");

  };

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h1>Create Account</h1>

        <p>Join SkillForge and begin your learning journey.</p>

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button
          className="auth-btn"
          onClick={handleSignup}
        >
          Sign Up
        </button>

        <div className="divider">
          <span>OR</span>
        </div>

        <button className="google-btn">
          Continue with Google
        </button>

        <p className="switch-page">

          Already have an account?

          <span onClick={() => navigate("/login")}>
            Login
          </span>

        </p>

      </div>

    </div>

  );

}

export default Signup;