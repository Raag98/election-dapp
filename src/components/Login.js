import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="loginAside" />
        <div className="loginForm">
          <div className="loginFormCenter">
            <p className="loginFormTitle">Log In </p>
            <form className="loginFormFields">
              <div className="loginFormField">
                <label className="loginFormFieldLabel" htmlFor="email">
                  E-Mail Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="loginFormFieldInput"
                  placeholder="Enter your email"
                  name="email"
                />
              </div>

              <div className="loginFormField">
                <label className="loginFormFieldLabel" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="loginFormFieldInput"
                  placeholder="Enter your password"
                  name="password"
                />
              </div>

              <div className="loginFormField">
                <button className="loginFormFieldButton">Log In</button>
                {/* <Link to="/" className="loginFormFieldLink">
              Create an account
            </Link> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
