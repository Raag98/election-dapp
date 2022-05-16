import React, { useEffect, useState } from 'react'

var voted = false;

const Candidate = ({name, party, qual, image, votes, id}) => {

    const [status, setStatus] = useState("Vote");

    const vote = () => {
        if(voted)
            alert("Already Voted!");
        else {
            voted = true;
            // Update Firebase
            setStatus("Voted");
        }
    }

    return (
        <tr>
            <td>
                <img src={image} className="candidate-img" />
            </td>
            <td>{ name.toUpperCase() }</td>
            <td>{ party.toUpperCase() }</td>
            <td><button onClick={vote} value={status} /></td>
        </tr>
    );
}


const Voting = () => {
    const [candList, setCandList] = useState([]);

    const [phase, setPhase] = useState();
    const [approved, setApproved] = useState(false);

    // const approvedStatus = async () => {
    //     // Fetch approved Status from Firebase
    // }

    // const getPhase = async () => {
    //     // Fetch Phase from Firebase
    // };

    // useEffect(() => {
    //     getPhase();
    //     approvedStatus();

    // }, []);


    return (
      <div className="voting">
        <h1 className="heading-text">Cast your Vote!</h1>
        {phase === "voting" && approved === true ? (
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
                        votes={d.votes}
                        id={d.id}
                    />
                )
              }
            </table>
          </div>
        ) : approved === "false" ? (
          <h2 className="unreg-text">You haven't Registered! You cna't Vote</h2>
        ) : (
          <h2 className="unreg-text">Voting Phase is yet to Start / is Over!</h2>
        )}
      </div>
    );
}

export default Voting;