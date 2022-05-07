let currAccount;

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
