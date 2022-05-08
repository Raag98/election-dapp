import React, { useEffect, useState } from 'react'
import { useAuth } from "../contexts/AuthContext";
import db from '../firebase/firebase';
import { collection, doc, updateDoc } from 'firebase/firestore';

export default function Registration() {
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
    }


    useEffect(() => {
      setName(currentUser.displayName);      
    }, []);


    return (
      <div className="registration">
        <h1>Register Yourself!</h1>
        {phase === "registration" ? (
          <div className="reg-form">
            <label>Enter your Aadhar</label>
            <input
              type="text"
              value={aadhar}
              onChange={(e) => setAadhar(e.target.value)}
            />

            <label>Enter your MetaMask Wallet Address</label>
            <input
              type="password"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
            />
            <button onClick={setValues}>Proceed</button>
          </div>
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
    );
}
