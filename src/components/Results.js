import React, { useEffect, useState } from 'react'
import { getDoc, doc, collection } from 'firebase/firestore';
import db from '../firebase/firebase';
import './Results.css';
const ResultsRow = ({name, party, photo, votes}) => {

  return (
    <div className="ResultsListRow">
      <div>{name}</div>
      <div>{party}</div>
      <div>{photo}</div>
      <div>{votes}</div>
    </div>
  );
}

export default function Results() {
  const [phase, setPhase] = useState();

  const getPhase = async () => {
    // Fetch Phase from Firebase
    const phaseStat = await getDoc(doc(db, "phase", "current-phase"));

    setPhase(phaseStat.data().phase);

    console.log(phase);
  };

  const [results, setResults] = useState([]);

  const getResults = async () => {

    const resList = await getDoc(collection(db, "candidates"));

    var temp = [];
    resList.forEach(d => {
      temp.push(d.data());
    })

    setResults(temp);
    console.log(results);
  };

  useEffect(() => {
    getPhase();
    getResults();
  }, []);

  return (
    <div className="ResultTable">
      <div className="ResultListHeader">
        <div>Name</div>
        <div>Party</div>
        <div>Photo</div>
        <div>Votes</div>
      </div>
      <div className="ResultListBody">
        {results.map((d) => {
          return (
            <ResultsRow
              name={d.name}
              party={d.email}
              photo={d.photo}
              votes={d.votes}
            />
          );
        })}
      </div>
    </div>
  );
}
