import React from 'react'
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <div className="welcome-page">
      <nav className="navbar">
        <h1>Voting Dapp</h1>

        <ul>
          <Link to="/login">
            <li>Voters Login</li>
          </Link>
          <Link to="/admin-login">
            <li>Admin Login</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
