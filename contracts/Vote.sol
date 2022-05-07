// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;
 
contract Vote {

    // Candidate
    struct Candidate {     
        uint id;
        string name;
        uint votes;
        string party;
        string qualification;
        string imageurl;
    }
    // Voter
    struct Voter {
        address voterAddr; 
    }
 
    uint public candidatesCount;
    address public manager;
    uint public votersCount;
 
    // Candidates Map
    mapping(uint => Candidate) public candidates;
 
    //checks if person has already voted
    mapping(address => bool) public hasVoted; 
 
    // Voters Map
    mapping(uint => Voter) public voters;
 
    // Election Update Event
    event electionUpdate (string name, string msg1, string party, string msg2, uint votes);
 
    // Constructor        
    constructor() {
        manager = msg.sender;
    }
 
    function addCandidate(string memory name, string memory party, string memory qual, string memory imgURL) public onlyManager {
        // Increment the total candidates count
        candidatesCount++;
        //storing in map with id as count
        candidates[candidatesCount] = Candidate(candidatesCount, name, 0, party, qual, imgURL); 
    }
 
    function vote(uint _id) public notManager {
        require(!hasVoted[msg.sender], "You have already voted");
 
        candidates[_id].votes++;
 
        hasVoted[msg.sender] = true;
        votersCount++;
        voters[votersCount] = Voter(msg.sender);
 
        emit electionUpdate(candidates[_id].name, " of the Party: ", candidates[_id].party, "has received ", candidates[_id].votes);
    }
    function electionResult() onlyManager public returns(Candidate memory) {
        uint  max = candidates[1].votes;
        uint winnerId = 1;
        for(uint j = 2; j <= candidatesCount; j++){
           if(max < candidates[j].votes) {
               max = candidates[j].votes;
               winnerId = j;
           }
        }
        emit electionUpdate(candidates[winnerId].name, "of the Party", candidates[winnerId].party, "has won and Votes Secured :", candidates[winnerId].votes);
    return candidates[winnerId];
    }
    // Only Manager can call this function
    modifier onlyManager {
        require(msg.sender == manager);
        _;
    }
 
    // Except Manager 
    modifier notManager {
        require(msg.sender != manager);
        _;
    } 
}