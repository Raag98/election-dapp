import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import db from '../firebase/firebase';

const TableRow = ({name, party, qual, aadh, photo}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{party}</td>
            <td>{qual}</td>
            <td>{aadh}</td>
            <td><img className="photo" src={photo} alt={name} /></td>
        </tr>
    );
}

export default function CandidatesList() {

    const [candid, setCandid] = useState([]);

    const getCandidates = async (e) => { 
        var querySnapshot = await getDocs(collection(db, "candidates"));

        var temp = [];

        querySnapshot.forEach(d => {
            // console.log(d.data());
            temp.push(d.data());
        })
        console.log(temp);
        setCandid(temp);
        
        console.log(candid);
    };

    useEffect(() => {
        getCandidates();
    }, []);

    return (
        <div className="CandidateList">
            <div className="addCandidateFormCenter">
                <p className="addCandidateFormTitle">Candidates List </p>
                <table id="candidates">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Party</th>
                            <th>Qualifications</th>
                            <th>Aadhar</th>
                            <th>Photo</th>
                        </tr>
                        {candid.map(d => {
                            return (
                                <TableRow
                                name={d.name}
                                party={d.party}
                                qual={d.qualification}
                                aadh={d.aadhar}
                                photo={d.photo}
                                />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
