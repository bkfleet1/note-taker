const router = require("express").Router();
const { getNotes, newNote, validateNote } = require("../../lib/notes");
// const db = require("../../db/db");


router.get("/notes", (req, res) => {
  let results = getNotes();
  res.json(results);
});


router.post("/notes", (req, res) => {
  // x = db.length.toString()
  if (!validateNote(req.body)) {
    res.status(400).send('Opps! Something went wrong. The Note information you added was incomplete.');
  } else {
    const note = newNote(req.body);
    res.json(note);
  }
});


module.exports = router;