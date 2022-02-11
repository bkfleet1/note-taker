const router = require('express').Router();
const { getNotes, getNote, validateNote, saveNote, deleteNote } = require("../../lib/notes");
const db = require("../../db/db.json");


router.get("/notes", (req, res) => {
  let results = getNotes();
  res.json(results);
});

router.get("/notes/:id", (req, res) => {
  let results = getNote(req.params.id);
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
    const note = saveNote(req.body);
    res.json(note);
  }
});

// DELETE route to remove note by id.
router.delete('/notes/:id', (req, res) => {
  let results = deleteNote(req.params.id);
  if (results) {
  res.json(results);
  } else {
    res.status(404).send('Opps! Something went wrong.');
  }
});  

module.exports = router;