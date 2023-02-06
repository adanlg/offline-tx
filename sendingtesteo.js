import Web3 from "web3";

const web3 = new Web3("https://goerli.infura.io/v3/2baf96dbc430498f93cc9ab228eb3de1");

const signedTransaction = { messageHash: '0xf891229f56a094bcc50d4ad2b6ce0c8cc84764b7328e20054d106ba9d145a4ef',
  v: '0x2d',
  r: '0xdb2ec1b5f322aee3b6a494049e5b1d5fb3627b48074b7650f3a9873ce9b56dc0',
  s: '0x3e475e8c930a49d32428dd063efa59009fd05880a6ce7f96031620a546c1dc0d',
  rawTransaction: '0xf8655e81ef8303345094713b8a1695e5dfa583e9a9ca5febfb779b6497c880843db2fdef2da0db2ec1b5f322aee3b6a494049e5b1d5fb3627b48074b7650f3a9873ce9b56dc0a03e475e8c930a49d32428dd063efa59009fd05880a6ce7f96031620a546c1dc0d',
  transactionHash: '0xff07d0e255e0ee74e86e5dba18043ff1114e2f9e498b2b89bd265a54be1435dd' };

// send the signed transaction
const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);

console.log(receipt); // check the receipt to see if the transaction was successful
