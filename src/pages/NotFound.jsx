import React from "react";
import { NavLink } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-box">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <NavLink to="/login" className="back-btn">
          Go to Login
        </NavLink>
      </div>
    </div>
  );
}

export default NotFound;
