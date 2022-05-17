import React, { useEffect, useState } from "react";
import { getDocs, collection, setDoc, doc, getDoc } from "firebase/firestore";
import db from "../firebase/firebase";
import "./VoterList.css";

const VoterListRow = ({ vName, vEmail, aadhar, address, registered }) => {

  const [reg, setReg] = useState((registered === "unregistered") ? true : false);

  const handleClick = async (e) => {
    e.preventDefault();

    if(reg) {
      await setDoc(doc(db, "voters", vEmail), {
        aadhar: aadhar,
        email: vEmail,
        name: vName,
        walletAddr: address,
        registraition: "registered",
      });
      console.log(`${vName} registered!`);
      setReg(false);
    }
    else {
      await setDoc(doc(db, "voters", vEmail), {
        aadhar: aadhar,
        email: vEmail,
        name: vName,
        walletAddr: address,
        registraition: "unregistered",
      });
      console.log(`${vName} unregistered!`);
      setReg(true);
    }
  }
  function maskInfo (text) {
    var string = String(text);
    var replaced= string.slice(0, 2) + string.slice(2).replace(/.(?=...)/g, '*');
    console.log("Replaced:" + replaced);
    return replaced;
  }
  return (
    <div className="VoterListRow">
      <div>{vName}</div>
      <div>{vEmail}</div>
<<<<<<< HEAD
      <div>{maskInfo(aadhaar)}</div>
      <div>{maskInfo(address)}</div>
=======
      <div>{aadhar}</div>
      <div>{address}</div>
>>>>>>> 97376a31e677a84a8dc0a99f00e19e45f2f2f419
      <div>
        {reg ? (
          <button onClick={handleClick}>
            Register
          </button>
        ) : (
          <button onClick={handleClick}>
            Unregister
          </button>
        )}
      </div>
    </div>
  );
}

const VoterList = () => {
  
  const [voters, setVoters] = useState([]);
  
  const getVoters = async () => {
    var querySnapshot = await getDocs(collection(db, "voters"));

    var temp = [];
    querySnapshot.forEach((d) => {
      temp.push(d.data());
    });

    console.log(temp);
    setVoters(temp);
  }

  useEffect(() => {
    getVoters();
  }, []);

  return (
    <div className="VoterListTable">
      <h1>Voter's List</h1>
      <div className="VoterListHeader">
        <div>Name</div>
        <div>Email</div>
        <div>Aadhaar</div>
        <div>Wallet Address</div>
        <div>Register</div>
      </div>
      <div className="VoterListBody">
        { voters.map((rowData) => {
          return (
            <VoterListRow 
              vName={rowData.name}
              vEmail={rowData.email}
              aadhar={rowData.aadhar}
              address={rowData.walletAddr}
              registered={rowData.registraition}
            />            
          )})
        }
      </div>
    </div>
  );
}

export default VoterList;
