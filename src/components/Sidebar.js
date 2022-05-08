import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'

export default function Sidebar() {

    const { currentUser, logOut } = useAuth();
    const [manager, setManager] = useState("No Idea!")
    const history = useNavigate();

    const logout = () => {
      logOut();
      Navigate("/");
    }


    return (
      <div className="sidebar">
        <h3>Welcome {currentUser.displayName}</h3>
        <hr />

        <ul>
          <Link to="/">
            <li>Registration</li>
          </Link>
          <Link to="/voting">
            <li>Voting</li>
          </Link>
          <Link to="/results">
            <li>Results</li>
          </Link>
          <li onClick={logout}>Logout</li>
        </ul>

        <h4>Managed By: {manager}</h4>
      </div>
    );
}
