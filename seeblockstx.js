const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider(`https://goerli.infura.io/v3/2baf96dbc430498f93cc9ab228eb3de1`));
console.log(web3.eth.accounts);

//2baf96dbc430498f93cc9ab228eb3de1 APIKEY

var myAddr = '0xFb562a84e3b2b4F00De2D23ce44B215169A7ee87';
var currentBlock = web3.eth.blockNumber;
var n = web3.eth.getTransactionCount(myAddr, currentBlock);
var bal = web3.eth.getBalance(myAddr, currentBlock);
for (var i = currentBlock; i >= 0 && (n > 0 || bal > 0); --i) {
	try {
		var block = eth.getBlock(i, true);
		if (block && block.transactions) {{
			block.transactions.forEach(function(e) {
				if (myAddr == e.from) {
					if (e.from != e.to) {
						bal = bal.plus(e.value);
						console.log(i, e.from, e.to, e.value.toString(10));
						--n;
					}
					if(myAddr = e.to) {
						if (e.from != e.to) 
							bal = bal.minus(e.value);
							console.log(i, e.from, e.to, e.value.toString(10));
					}
				}
			});
		}}
	} catch(e) {
		console.error("Error for block " + i, e);
	}
}