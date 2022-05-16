let currAccount;

const inbox = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "msg1",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "party",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "msg2",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "votes",
        type: "uint256",
      },
    ],
    name: "electionUpdate",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "party",
        type: "string",
      },
      {
        internalType: "string",
        name: "qual",
        type: "string",
      },
      {
        internalType: "string",
        name: "imgURL",
        type: "string",
      },
    ],
    name: "addCandidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "candidates",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "votes",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "party",
        type: "string",
      },
      {
        internalType: "string",
        name: "qualification",
        type: "string",
      },
      {
        internalType: "string",
        name: "imageurl",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "candidatesCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "electionResult",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "votes",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "party",
            type: "string",
          },
          {
            internalType: "string",
            name: "qualification",
            type: "string",
          },
          {
            internalType: "string",
            name: "imageurl",
            type: "string",
          },
        ],
        internalType: "struct Vote.Candidate",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "hasVoted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "voters",
    outputs: [
      {
        internalType: "address",
        name: "voterAddr",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "votersCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const init = () => {
  let provider = window.ethereum;

  if(typeof provider !== 'undefined') {
      // Metamask is installed!

      provider
      .request({ method: 'eth_requestAccounts'})
      .then(accounts => {
          currAccount = accounts[0];
          console.log(`Selected account is ${currAccount}`);
      })
      .catch(err => {
        console.log(err);
      });

      window.ethereum.on('accountsChanged', accounts => {
          currAccount = accounts[0];
          console.log('Selected account is changed to ${currAccount}');
      });
  }
  
  const web3 = new Web3(provider);
}
