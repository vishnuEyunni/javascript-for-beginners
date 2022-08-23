import fs from 'fs';
import chalk from 'chalk';

const getNotes = function () {
  return 'Your notes...'
}

export const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((x, i) => x.title === title);
  const duplicateNote = notes.find((note) => note.title === title)

  if (!duplicateNote) {
    notes.push({
      title,
      body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('New note added'));
  } else {
    console.log(chalk.red.inverse('Nope! Title taken !!'));
  }
}

export const removeNote = function (title) {
  const notes = loadNotes();

  const notesToKeep = notes.filter((x, i) => x.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed !'))
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse('No note found!'))
  }
}

export const listNotes = function () {
  const notes = loadNotes()
  console.log(notes)
}

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}


export default getNotes;