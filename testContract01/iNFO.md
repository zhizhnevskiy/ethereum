```shell
# Make dir project:
mkdir project

# Create package.json:
npm init

# Install solidity compile:
npm install --save solc

# For version in this lessons:
npm uninstall solc
npm install solc@0.4.17
npm install web3@1.3.5
npm install --save mocha ganache-cli web3@1.0.0-beta.26
npm install truffle-hdwallet-provider@0.0.3
npm install --save truffle-hdwallet-provider@0.0.3


# Update in package.json:
 "scripts": {
    "test": "mocha"
  },
```