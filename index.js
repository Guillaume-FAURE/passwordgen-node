const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');
//Import function from utils
const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');

//Documentation for the terminal
program.version('1.0.0').description('Simple password generator for terminal');
program
    .option('-l, --length <number>', 'number: length of the password', '15')
    .option('-s, --save', 'boolean: save the password in a file password.txt')
    .option('-nn, --no-numbers', 'boolean: no possibility of numbers in the password')
    .option('-ns, --no-symbols', 'boolean: no possibility of symbols in the password')
    .parse();

const {length, save, numbers, symbols} = program.opts();

//Get generated password
const generatedPassword = createPassword(length, numbers, symbols);

//Save the password to the clipboard
clipboardy.writeSync(generatedPassword);

console.log(`Your password : ${chalk.bold(generatedPassword)}`);
console.log(`Password copied to the clipboard!`)
//Save password to a file password.txt if save option wrote
if(save){
    savePassword(generatedPassword);
}