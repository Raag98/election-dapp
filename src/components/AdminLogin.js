import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./AdminLogin.css";

const AdminLogin = () => {
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
              />
            </div>

            <div className="adminLoginFormField">
              <button className="adminLoginFormFieldButton">Login</button>
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
