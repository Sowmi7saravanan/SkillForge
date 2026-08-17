import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Register() {

  const navigate = useNavigate();

  const handleRegister = (e) => {

    e.preventDefault();

    // Save user later

    navigate("/dashboard");
  };

  return (

    <div className="auth-page">

      <div className="auth-card">

        <h1>Create Account</h1>

        <p>Join SkillForge today.</p>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            placeholder="Email"
            required
          />

          <input
            type="password"
            placeholder="Password"
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            required
          />

          <button className="login-btn">
            Register
          </button>

        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <button
          className="google-btn"
          onClick={() => alert("Google Signup will be connected later")}
        >
          Continue with Google
        </button>

        <p className="bottom-text">

          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </p>

      </div>

    </div>

  );
}

export default Register;