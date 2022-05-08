import React, { useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from "./Sidebar";
import Registration from "./Registration";
import { useAuth } from '../contexts/AuthContext';
import { setDoc, doc } from 'firebase/firestore';
import db from '../firebase/firebase';
// import Voting from "./Voting"; 

export default function Dashboard() {

  const { currentUser } = useAuth();

  const addVoter = async () => {
    console.log(`Voter Added ${currentUser.displayName}`);
    
    try {
      await setDoc(doc(db, "voters", currentUser.uid), {
        name: currentUser.displayName,
        email: currentUser.email,
        aadhar: "",
        walletAddr: "",
        registraition: "unregistered",
      });
      console.log("Document written with ID: ", currentUser.uid);
    } catch (e) {
      console.log("Error adding document: ", e);
    }
  };


  useEffect(() => {
    addVoter();
  }, [currentUser]);

  return (
    <div className="dashboard">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Registration />} />
        {/* <Route path="/voting" element={<Voting />} /> */}
        {/* <Route path="/results" element={<Results />} /> */}
      </Routes>
    </div>
  );
}
