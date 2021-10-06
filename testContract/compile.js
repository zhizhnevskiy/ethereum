const path = require('path');
const fs = require('fs');
const solc = require('solc');

const ethereumPath = path.resolve(__dirname, 'contracts', 'inbox.sol');
const source = fs.readFileSync(ethereumPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Inbox'];
// console.log(module.exports);