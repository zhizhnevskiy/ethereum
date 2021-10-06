const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
    "grape large balcony cage spray grab coyote road viable end angle fetch",
    // remember to change this to your own phrase!
    "https://rinkeby.infura.io/v3/5966f6cabc04491098efb6d410b2eda0"
    // remember to change this to your own endpoint!
); nb
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log("Attempting to deploy from account", accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ["Hi there!"] })
        .send({ gas: '1000000', gasPrice: '50000000000', from: accounts[0] });

    console.log("Contract deployed to", result.options.address);
};
deploy();