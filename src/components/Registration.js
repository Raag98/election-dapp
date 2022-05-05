import React, { useState } from 'react'

export default function Registration() {
    const [phase, setPhase] = useState();
    const [name, setName] = useState();
    const [aadhar, setAadhar] = useState();
    const [wallet, setWallet] = useState();
    const [approved, setApproved] = useState(false);

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
            <button value="Proceed" onClick={update} />
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
            <td>
              {approved ? (
                <td>
                  <button value="Registered" className="reg-btn" />
                </td>
              ) : (
                <td>
                  <button value="Unregistered" className="unreg-btn" />
                </td>
              )}
            </td>
          </tr>
        </table>
      </div>
    );
}
