```shell
# Add Contract with test
# create folder and package.json:
npm init
npm install
npm install --save ganache-cli mocha solc fs-extra truffle-hdwallet-provider@0.0.3
# special for this project
npm install --save web3@1.3.5 solc@0.4.17 truffle-hdwallet-provider@0.0.3
# start test (kickstart folder)
npm run test
# deploy contract in Rinkeby (ethereum folder)
node deploy.js

# Add react with next
npm install --save next react react-dom
# Changes in package.json  
  "scripts": {
    "test": "mocha",
    "dev": "next dev"
  },
# Run project with NextJS (kickstart folder)
npm run dev
```

import Web3 from "web3";

window.ethereum.request({ method: "eth_requestAccounts" });

const web3 = new Web3(window.ethereum);

export default web3;