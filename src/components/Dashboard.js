import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from "./Sidebar";
import Registration from "./Registration";
 

export default function Dashboard() {

  return (
    <div className="dashboard">
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/" element={<Registration />} />
          {/* <Route path="/voting" component={<Voting />} /> */}
          {/* <Route path="/results" component={<Results />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
