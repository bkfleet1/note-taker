const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const path = require("path");
const db = require("../db/db");



function getNotes() {
    let results = db;
    return results
};

function getNoteById(id) {
    const results = db.filter((el) => el.id === id)
    return results
}

function newNote(note) {
    const Id = {id: uuidv4()}
    const Note = {...Id, ...note}
    db.push(Note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(db)
    );
    return Note;
};

function validateNote(note) {
    if (!note.title || note.title === '' || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || note.text === '' || typeof note.text !== 'string') {
        return false;
    }
    return true;
}





module.exports = { getNotes, newNote, validateNote, getNoteById };