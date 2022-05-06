import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./SignUp.css";

const Signup = () => {
  return (
    <div className="SignUp" id="Signup">
      <div className="signUpAside" />
      <div className="signUpForm">
        <div className="signUpFormCenter">
          <p className="signUpFormTitle">Sign Up</p>
          <form className="signUpFormFields">
            <div className="signUpFormField">
              <label className="signUpFormFieldLabel" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="signUpFormFieldInput"
                placeholder="Enter your name"
              />
            </div>

            <div className="signUpFormField">
              <label className="signUpFormFieldLabel" htmlFor="email">
                E-Mail Address
              </label>
              <input
                type="email"
                id="email"
                className="signUpFormFieldInput"
                placeholder="Enter your Email"
              />
            </div>

            <div className="signUpFormField">
              <label className="signUpFormFieldLabel" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="signUpFormFieldInput"
                placeholder="Enter your password"
              />
            </div>

            <div className="signUpFormField">
              <button className="signUpFormFieldButton">Sign Up</button>
              {/* <Link to="/" className="signUpFormFieldLink">
              Create an account
            </Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
