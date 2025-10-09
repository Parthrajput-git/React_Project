import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [showForgot, setShowForgot] = useState(false);
  const [forgotMsg, setForgotMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleForgotChange = (e) => {
    setForgotEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    navigate("/profile", { state: formData });
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    if (!forgotEmail) {
      setForgotMsg("Please enter your email!");
      return;
    }
    // Simulate sending email
    setForgotMsg(`Password reset link sent to ${forgotEmail}`);
    setForgotEmail("");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Please log in to continue</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>

          <button type="submit">Login</button>
        </form>

        <p className="forgot-text" onClick={() => setShowForgot(!showForgot)}>
          Forgot Password?
        </p>

        {showForgot && (
          <form className="forgot-form" onSubmit={handleForgotSubmit}>
            <input
              type="email"
              value={forgotEmail}
              onChange={handleForgotChange}
              placeholder="Enter your email"
              required
            />
            <button type="submit">Send Reset Link</button>
            {forgotMsg && <p className="forgot-msg">{forgotMsg}</p>}
          </form>
        )}

        <p className="login-footer">
          Don’t have an account? <Link to="/signup">singup</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
