import React, { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import "./Phases.css";

const Phases = () => {

  const [currPhase, setCurrPhase] = useState("Registration");

  useEffect(async () => {
    
  }, [currPhase]);

  return (
    <div className="Phases">
      <h1>Select a phase</h1>
      <button onClick={e => setCurrPhase("Registration")}>Registration</button>
      <button onClick={e => setCurrPhase("Voting")}>Voting</button>
      <button onClick={e => setCurrPhase("Results")}>Results</button>
    </div>
  );
};

export default Phases;
