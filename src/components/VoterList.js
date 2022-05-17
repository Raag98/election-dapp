import React, { useState } from "react";
import "./VoterList.css";

const VoterListRow = ({ vName, vEmail, aadhaar, address, status, register}) => (
  <div className="VoterListRow">
    <div>{vName}</div>
    <div>{vEmail}</div>
    <div>{aadhaar}</div>
    <div>{address}</div>
    <div>{status}</div>
    <div>{register}</div>
  </div>
);

const VoterList = () => {
  const data = [
    {
      vName: "Anurag Rai",
      vEmail: "raianurag@gmail.com",
      aadhaar: "012456478953",
      address: "fgds gsdge grs ",
      status: true, 
      register: "Hdfh"
    }, {
      vName: "Riya Jain",
      vEmail: "ricelime@gmail.com",
      aadhaar: "gfh rtfht h",
      address: "thy tedhrh",
      status: false, 
      register: "Hdfh"
    },
  ];


  const rows = data.map((rowData) => <VoterListRow {...rowData} />);

  return (
    <div className="VoterListTable">
      <div className="VoterListHeader">
        <div>Name</div>
        <div>Email</div>
        <div>Aadhaar</div>
        <div>Address</div>
        <div>Status</div>
        <div>Register</div>
      </div>
      <div className="VoterListBody">{rows}</div>
    </div>
  );
}

export default VoterList;
