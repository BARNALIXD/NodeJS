const chalk = require('chalk');
const validators = require('validators');

console.log(chalk.red.underline.inverse("false"));

const res = validator.isEmailAddress("dasbarnali690@gcekbpatna.ac.in.com");
console.log(res ? chalk.yellow.underline(res) : chalk.yellow.underline(res));