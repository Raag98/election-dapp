import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <h1>Voting Dapp</h1>
      <Link to="/login">
        <button>Voter Login</button>
      </Link>
      <Link to="/admin-login">
        <button>Admin Login</button>
      </Link>
    </div>
  );
};

export default WelcomePage;
