var mongoose = require("mongoose");

var cardSchema = mongoose.Schema(
  {
    
    name: {
      type: String
    },
    status: {
      type: String
    },
    content:{
      type: String
    },
    category:{
      type: String
    },
    author:{
      type: String
    }
  },
  {
    
    collection: "CARD"
  }
);


var Card = mongoose.model("CARD",cardSchema);
module.exports = Card;