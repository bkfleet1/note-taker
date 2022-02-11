const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const path = require("path");
const db = require("../db/db.json");
const res = require("express/lib/response");



function getNotes() {
    let results = db
    return results
};

function getNote(id) {
    let results = db.filter((el) => el.id === id)
    return results
};

function saveNote(note) {
    let Id = { id: uuidv4() }
    let Note = { ...Id, ...note }
    db.push(Note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(db)
    )
    return Note
};

function validateNote(note) {
    if (!note.title || note.title === '' || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || note.text === '' || typeof note.text !== 'string') {
        return false;
    }
    return true
};

function deleteNote(id) {
    fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
        if (err) throw err
        let notes = JSON.parse(data)
        let delNote = notes.filter((el) => { return el.id !== id })
        fs.writeFileSync(
            path.join(__dirname, '../db/db.json'), JSON.stringify(delNote)
        )
        results = JSON.stringify(delNote)
return results
    }
    )
};


module.exports = { getNotes, getNote, validateNote, saveNote, deleteNote };