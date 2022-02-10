const router = require('express').Router();
const { getNotes, newNote, validateNote, getNoteById, deleteNoteById } = require("../../lib/notes");
// const db = require("../db/db");


router.get("/notes", (req, res) => {
  let results = getNotes();
  res.json(results);
});

router.get("/notes/:id", (req, res) => {
  let results = getNoteById(req.params.id);
  if (results) {
  res.json(results);
  } else {
    res.send(404);
  }
});


router.post("/notes", (req, res) => {
  if (!validateNote(req.body)) {
    res.status(400).send('Opps! Something went wrong. The Note information you added was incomplete.');
  } else {
    const note = newNote(req.body);
    res.json(note);
  }
});

// DELETE route to remove note by id.
router.delete('/voter/:id', (req, res) => {
  let results = deleteNoteById(req.params.id);
  if (results) {
  res.json(results);
  } else {
    res.send(404);
  }
});  

module.exports = router;