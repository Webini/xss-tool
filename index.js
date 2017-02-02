const encoders   = require('./encoders.js');
const decoders   = require('./decoders.js');
const args       = require('yargs').argv;
const fs         = require('fs');

if (!args.input) {
    console.log('You must specify an input file with --input <input file>');
    process.exit(0);
}

if (!args.type || ![1, 2].includes(args.type)) {
    console.log("You must specify an output type : \n" + 
                "--type 1 will transform your js to an array of int4, it require a small bootstrap code\n" +
                "--type 2 will transform your js to an array of char, it will use only native methods to evaluate your code");
}

const content = fs.readFileSync(args.input).toString();

if (args.type == 1) {
    const data = encoders.int4(content).join(',');
    console.log(`var dcd=${decoders.int4.toString().replace(/[\s]{2,99}/g, '')};eval(dcd([${data}]));`);
} else if (args.type == 2) {
    const data = encoders.char(content).join(',');
    console.log(`eval(String.fromCharCode(${data}))`);
}
