import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import "./VoterList.css";

const VoterListRow = ({ vName, vEnail, aadhaar, address, status, register}) => (
  <div className="VoterListRow">
    <div>{vName}</div>
    <div>{vEnail}</div>
    <div>{aadhaar}</div>
    <div>{address}</div>
    <div>{status}</div>
    <div>{register}</div>
  </div>
);

class VoterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          vName: "Anurag Rai",
          vEnail: "raianurag@gmail.com",
          aadhaar: "012456478953",
          address: "fgds gsdge grs ",
          status: true, 
          register: "Hdfh"
        },
        {
            vName: "Riya Jain",
            vEnail: "ricelime@gmail.com",
            aadhaar: "gfh rtfht h",
            address: "thy tedhrh",
            status: false, 
            register: "Hdfh"
          },
      ],
    };
  }

  render() {
    const rows = this.state.data.map((rowData) => <VoterListRow {...rowData} />);

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
}
export default VoterList;
