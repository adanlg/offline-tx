import Web3 from "web3";

// create a connection to an Ethereum node
const web3 = new Web3("https://goerli.infura.io/v3/2baf96dbc430498f93cc9ab228eb3de1");

// load the contract

const signedTransaction = await
 web3.eth.accounts.signTransaction({ nonce: 94,
    gasPrice: '239',
    gasLimit: 210000,
    to: '0x713b8a1695e5dfa583e9a9ca5febfb779b6497c8',
    value: 0,
    data: '0x3db2fdef' }, "0e17bd8033b709f50bdd8be0e809ed51e58d73405491fc5aa5960781ec751179");

console.log(signedTransaction);