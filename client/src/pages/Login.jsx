import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {

    // Later check MongoDB

    navigate("/dashboard");

  };

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h1>Welcome Back</h1>

        <p>Login to continue learning.</p>

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
          onClick={handleLogin}
        >
          Login
        </button>

        <div className="divider">
          <span>OR</span>
        </div>

        <button className="google-btn">
          Continue with Google
        </button>

        <p className="switch-page">

          Don't have an account?

          <span onClick={() => navigate("/signup")}>
            Sign Up
          </span>

        </p>

      </div>

    </div>

  );

}

export default Login;