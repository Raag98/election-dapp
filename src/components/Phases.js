import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import "./Phases.css";

const Phases = () => {
  return (
    <div className="Phases">
      <h1>Select a phase</h1>
      <button>Registration</button>
      <button>Voting</button>
      <button>Results</button>
    </div>
  );
};

export default Phases;
