var express = require("express");
var router = express.Router();
var Card = require("./cardModel");

// GET data default
router.get("/", (req, res) => {
  Card.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET by id
router.get("/:_id", (req, res) => {
  Card.findById(req.params._id).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// POST (/add)
router.post("/add", (req, res) => {
  var obj = new Card(req.body);
  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Add! data already.");
  });
});

// PUT (update/(author)/<id>)
router.put("/edit/:_author/:_id", (req, res) => {
  Card.findByIdAndUpdate(req.params._author,req.params._id, req.body, (err, data) => {
    if (Card.author == req.params._author ){
      if (err) return res.status(400).send(err);
      res.status(200).send("Update! data already.");
    }
  });
});

//DELETE (delete/(author)/<id>)
router.delete("/delete/:_author/:_id", (req, res) => {
  Card.findByIdAndDelete(req.params._author,req.params._id, (err, data) => {
    if (Card.author == req.params._author ){
      if (err) return res.status(400).send(err);
      res.status(200).send("Delete! data already");
    }
  });
});

module.exports = router;