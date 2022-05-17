import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext';
import db from '../firebase/firebase';
import "./Voting.css"
// import web3 from "../Web3Client";
// import instance from "./Vote";

const Candidate = ({name, party, image}) => {

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
          <img src={image} className="candidate-img" alt={name} />
        </td>
        <td>{name.toUpperCase()}</td>
        <td>{party.toUpperCase()}</td>
        <td>
         {
            status === "not-voted"
            ? <button onClick={vote}> Vote </button>
            : <button disabled> Vote </button>
         }
        </td>
      </tr>
    );
}


const Voting = () => {
    const [candList, setCandList] = useState([]);

    const [phase, setPhase] = useState();
    const [approved, setApproved] = useState(false);

    const { currentUser } = useAuth();

    const getCandidates = async (e) => {

      const candidatesList = await getDocs(collection(db, "candidates"));

      const temp = [];
      candidatesList.forEach((d) => {
        console.log(d.data());
        temp.push(d.data());
      });

      setCandList(temp);
    };

    const approvedStatus = async () => {
        // Fetch approved Status from Firebase
        const appr = await getDoc(doc(db, "voters", currentUser.email));

        if(appr.data().registraition === "registered")
          setApproved(true);

        // console.log(approved);
    }

    const getPhase = async () => {
        // Fetch Phase from Firebase

        const phaseStat = await getDoc(doc(db, "phase", "current-phase"));

        setPhase(phaseStat.data().phase);
    };

    // const [account, setAccount] = useState();
    // const [manager, setManager] = useState();
    // const [count, setCount] = useState();
    // const [list, setList] = ([]);

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
        getCandidates();
        getPhase();
        approvedStatus();

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