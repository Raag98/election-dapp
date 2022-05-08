import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./AdminLogin.css";

const AdminLogin = () => {
  
  const navigate = useNavigate();

  const [admin, setAdmin] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    console.log(`Admin: ${admin}`);
    // navigate("/admin-dashboard");
  }

  return (
    <div className="AdminLogin" id="AdminLogin">
      <div className="adminLoginAside" />
      <div className="adminLoginForm">
        <div className="adminLoginFormCenter">
          <p className="adminLoginFormTitle">Login</p>
          <form className="adminLoginFormFields">
            <div className="adminLoginFormField">
              <label className="adminLoginFormFieldLabel" htmlFor="email">
                E-Mail Address
              </label>
              <input
                type="email"
                id="email"
                className="adminLoginFormFieldInput"
                placeholder="Enter your Email"
                value={admin}
                onChange={(e) => setAdmin(e.target.value)}
              />
            </div>

            <div className="adminLoginFormField">
              <label className="adminLoginFormFieldLabel" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="adminLoginFormFieldInput"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="adminLoginFormField">
              <button className="adminLoginFormFieldButton" onClick={handleLogin}>Login</button>
              {/* <Link to="/" className="adminLoginFormFieldLink">
              Create an account
            </Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
