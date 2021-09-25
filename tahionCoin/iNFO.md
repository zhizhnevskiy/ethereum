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
# Add css library Semantic
npm install --save semantic-ui-react
npm install --save semantic-ui-css
# Changes in package.json  
  "scripts": {
    "test": "mocha",
    "dev": "next dev"
  },
# Run project with NextJS (kickstart folder)
npm run dev
```

Instead of an unnamed default export:
import React from "react";
export default (props) => {
...
};

You can refactor to give your component a name:
import React from "react";
const Layout = (props) => {
...
};
export default Layout;

This will come up a few times throughout 
the rest of the course and can be handled similarly.
import React from "react";
const someComponent = () => {
...
};
export default someComponent;