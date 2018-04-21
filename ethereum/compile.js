const path = require('path');
const solc = require('solc');
// fs-extra community made module- similar to fs
// but some extra functions tied to it
// fs (file system)
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
// removing build folder/ build path/ deletes folder and everything inside of it
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;

// ensure directory checks to see if directory exists and if not creates it for us
fs.ensureDirSync(buildPath);

// loop over contract output and then write it to filename
// gets the campaing.json and campaignFactory.json
for (let contract in output) {
  fs.outputJsonSync(
    // need to replace colon with a empty character
    // building path and then putting the output of that contract
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  );
}
