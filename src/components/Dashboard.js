import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from "./Sidebar";
import Registration from "./Registration";
 

export default function Dashboard() {

  return (
    <div className="dashboard">
      <Sidebar />
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/voting" element={<Voting />} />
          {/* <Route path="/results" element={<Results />} /> */}
        </Routes>
    </div>
  );
}
