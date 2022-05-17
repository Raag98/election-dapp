import { collection, doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext';
import db from '../firebase/firebase';
import "./Voting.css"
// import web3 from "../Web3Client";
// import instance from "./Vote";

const Candidate = ({name, party, qual, image, votes, id}) => {

    const [status, setStatus] = useState("not-voted");

    const vote = () => {
        if(status === "voted")
            alert("Already Voted!");
        else {
            // Update Firebase
            console.log("Voted!")
            setStatus("voted");
        }
    }

    return (
      <tr>
        <td>
          <img src={image} className="candidate-img" />
        </td>
        <td>{name.toUpperCase()}</td>
        <td>{party.toUpperCase()}</td>
        <td>
          <button onClick={vote} value={status} />
        </td>
      </tr>
    );
}


const Voting = () => {
    const [candList, setCandList] = useState([]);

    const [phase, setPhase] = useState();
    const [approved, setApproved] = useState(false);

    const { currentUser } = useAuth();

    const getCandidates = async () => {

      const candidates = await getDoc(collection(db, "candidates"));

      var temp = [];
      candidates.forEach(d => {
        temp.push(d.data());
      });

      setCandList(temp);

      console.log(candList);
    };

    const approvedStatus = async () => {
        // Fetch approved Status from Firebase
        const appr = await getDoc(doc(db, "voters", currentUser.email));

        if(appr.data().registraition === "registered")
          setApproved(true);

        console.log(approved);
    }

    const getPhase = async () => {
        // Fetch Phase from Firebase

        const phaseStat = await getDoc(doc(db, "phase", "current-phase"));

        setPhase(phaseStat.data().phase);

        console.log(phase);
    };

    const [account, setAccount] = useState();
    const [manager, setManager] = useState();
    const [count, setCount] = useState();
    const [list, setList] = ([]);

    // const getAccounts = async () => {
    //   const acc = await web3.eth.getAccounts();
    //   setAccount(acc[0]);

    //   const candCount = await instance.methods.candidatesCount();
    //   const mngr = await instance.methods.manager().call();

    //   setManager(mngr);
    //   setCount(candCount);

    //   const data = await Promise.all(Array(parseInt(candCount)).fill().map((element, index) => {
    //     return instance.methods.candidates(index + 1).call();
    //   }));

    //   setList(data);
    // }


    useEffect(() => {
        getPhase();
        approvedStatus();
        getCandidates();

        // getAccounts();
    }, []);


    return (
      <div className="voting">
        <h1 className="heading-text">Cast your Vote!</h1>
        { phase === "voting" && approved === true ? (
          <div className="candidates-list">
            <table>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Party</th>
                <th>Votes</th>
              </tr>
              {
                candList.map(d => 
                    <Candidate
                        name={d.name}
                        party={d.party}
                        qual={d.qual}
                        image={d.image}
                    />
                )
              }
            </table>
          </div>
        ) : (
          approved === false 
          ? ( <h2 className="unreg-text">You haven't Registered! You can't Vote</h2> )  
          : ( <h2 className="unreg-text">Voting Phase is yet to Start / is Over!</h2> )
        )}
      </div>
    );
}

export default Voting;