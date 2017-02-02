const string2hex = require('./string2hex.js');
const hex2string = require('./hex2string.js');
const args       = require('yargs').argv;
const fs         = require('fs');

if (!args.input) {
    console.log('You must specify an input file with --input <input file>');
    process.exit(0);
}

const content = fs.readFileSync(args.input).toString();
const data    = string2hex(content).join(',');

console.log(`var dcd=${hex2string.toString().replace(/[\s]{2,99}/g, '')};eval(dcd([${data}]));`);