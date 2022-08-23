import chalk from 'chalk';
import validator from 'validator';
import { something } from './checkUtils.js';

console.log(validator.isURL('https://www.google.com'))
something();

console.log(chalk.green('Hello'))