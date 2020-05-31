var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
const bodyParser = require("body-parser");
//setup server express
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//connect mongodb cloud
var mongo_uri = "mongodb+srv://user1:ionay999@cluster0-ridux.mongodb.net/test?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(mongo_uri, { useNewUrlParser: true }).then(
  () => {
    console.log("[success] task 2 : connected to the database ");
  },
  error => {
    console.log("[failed] task 2 " + error);
    process.exit();
  }
);

var port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("[success] task 1 : listening on port " + port);
});


app.get("/", (req, res) => {
  res.status(200).send("home");
});

var Card = require("./cardRouter");
app.use("/api/addCard", Card);

app.use((req, res, next) => {
  var err = new Error("404 not found");
  err.status = 404;
  next(err);
});
