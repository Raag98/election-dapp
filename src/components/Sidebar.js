import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function Sidebar() {

    const { currentUser, logOut } = useAuth();
    const [name, setName] = useState("Members");
    const [manager, setManager] = useState("No Idea!")
    const history = useHistory();

    return (
      <div className="sidebar">
        <h3>Welcome {name}</h3>
        <hr />

        <ul>
          <Link to="">
            <li>Registration</li>
          </Link>
          <li>Voting</li>
          <li>Results</li>
          <li onClick={logOut}>Logout</li>
        </ul>

        <h4>Managed By: {manager}</h4>
      </div>
    );
}
