import Yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import chalk from 'chalk';
import { addNote, removeNote, listNotes } from './notes.js';
import fs from 'fs';

let yargs = Yargs(hideBin(process.argv));

yargs.version('8.2.0')
// yargs(hideBin(process.argv)).version('1.1.0');

yargs.command({
  command: 'add',
  describe: 'Add a new note!',
  builder: {
    title: {
      describe: 'Title for your note',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Body of note',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {

    addNote(argv.title, argv.body)
  }
})

yargs.command({
  command: 'remove',
  describe: 'removing the note',
  builder: {
    title: {
      describe: 'Title to remove from your notes',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    removeNote(argv.title)
  }
})

yargs.command({
  command: 'read',
  describe: 'read a note',
  handler: () => {
    console.log('read a note!')
  }
})

yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler() {
    console.log(chalk.inverse('Your notes'))
    listNotes()
  }
})


yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler() {

  }
})

// console.log(yargs.argv)

yargs.parse();