import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'

export default function Sidebar() {

    const { currentUser, logOut } = useAuth();
    const [name, setName] = useState("Members");
    const [manager, setManager] = useState("No Idea!")
    const history = useNavigate();

    return (
      <div className="sidebar">
        <h3>Welcome {name}</h3>
        <hr />

        <ul>
          <Link to="">
            <li>Registration</li>
          </Link>
          <Link to="">
            <li>Voting</li>
          </Link>
          <Link to="">
            <li>Results</li>
          </Link>
          <li onClick={logOut}>Logout</li>
        </ul>

        <h4>Managed By: {manager}</h4>
      </div>
    );
}
