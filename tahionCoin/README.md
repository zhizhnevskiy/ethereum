```shell
# Add Contract with test
# create folder and package.json:
npm init
npm install
npm install --save ganache-cli mocha solc fs-extra
# Add react with next
npm install --save next react react-dom
# Add next-routes
npm install --save next-routes
# Add css library Semantic
npm install --save semantic-ui-react semantic-ui-css
# special for this project
npm install --save web3@1.3.5 solc@0.4.17 truffle-hdwallet-provider@0.0.3
npm install next-routes --legacy-peer-deps
# Changes in package.json  
  "scripts": {
    "test": "mocha",
    "dev": "node server.js"
  },
# start test (kickstart folder)
npm run test
# deploy contract in Rinkeby (ethereum folder)
node compile.js
node deploy.js  
# Run project with NextJS (tahionCoin folder)
npm run dev
```