import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate, Link } from "react-router-dom";
import { collection, doc, updateDoc } from "firebase/firestore";
import db from "../firebase/firebase";

import "./Registration.css";

const Registration = () => {
  const [phase, setPhase] = useState("registration");
  const [name, setName] = useState();
  const [aadhar, setAadhar] = useState();
  const [wallet, setWallet] = useState();
  const [approved, setApproved] = useState(false);

  const { currentUser } = useAuth();

  const setValues = async () => {
    // Update values in Firebase

    const docRef = doc(db, "voters", currentUser.uid);

    await updateDoc(docRef, {
      aadhar: aadhar,
      walletAddr: wallet,
    });

    console.log("Update Values!");
  };

  useEffect(() => {
    setName(currentUser.displayName);
  }, []);

  return (
    <div className="Registration">
      <div className="registrationForm">
        <div className="registrationFormCenter">
          <p className="registrationFormTitle">Register Yourself</p>
          {phase === "registration" ? (
            <form className="registrationFormFields">
              <div className="registrationFormField">
                <label className="registrationFormFieldLabel" htmlFor="aadhaar">
                  Enter your Aadhaar
                </label>
                <input
                  type="text"
                  id="aadhaar"
                  className="registrationFormFieldInput"
                  placeholder="Enter aadhaar number"
                  value={aadhar}
                  onChange={(e) => setAadhar(e.target.value)}
                />
              </div>

              <div className="registrationFormField">
                <label
                  className="registrationFormFieldLabel"
                  htmlFor="metamask"
                >
                  Enter your MetaMask Wallet Address
                </label>
                <input
                  type="password"
                  id="metamask"
                  className="registrationFormFieldInput"
                  placeholder="Enter candidate party"
                  value={wallet}
                  onChange={(e) => setWallet(e.target.value)}
                />
              </div>

              <div className="registrationFormField">
                <button
                  className="registrationFormFieldButton"
                  onClick={setValues}
                >
                  Proceed
                </button>
              </div>
            </form>
          ) : (
            <h2>Registrations Phase Over! You can't register now.</h2>
          )}

          <table id="voters">
            <tr>
              <th>Name</th>
              <th>Aadhar</th>
              <th>Wallet Address</th>
              <th>Registration Status</th>
            </tr>
            <tr>
              <td>{name}</td>
              <td>{aadhar}</td>
              <td>{wallet}</td>
              {approved ? (
                <td>
                  <button className="reg-btn">Registered</button>
                </td>
              ) : (
                <td>
                  <button className="unreg-btn">Unregistered</button>
                </td>
              )}
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Registration;
