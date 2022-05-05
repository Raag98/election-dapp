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
          <Route path="/registration" component={Registration} />
          {/* <Route path="/voting" component={Voting} /> */}
          {/* <Route path="/results" component={Results} /> */}
        </Routes>
      </Router>
    </div>
  );
}
