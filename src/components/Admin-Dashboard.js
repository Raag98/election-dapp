import React from 'react'
import { Routes, Route } from 'react-router-dom'

export default AdminDashboard = () => {
  return (
    <div className="dashboard">
        <AdminSidebar />
        <Routes>
            {/* <Route path="/register-voter" element={<RegisterVoter />} />
            <Route path="/add" element={<AddCandidate />} />
            <Route path="/phase" element={<Phase />} />
            <Route path="/vote-tally" element={<VoteTally />} /> */}
        </Routes>
    </div>
  )
}
