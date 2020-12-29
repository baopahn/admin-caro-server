const { Schema, model } = require("mongoose");

const move = new Schema({
  idRoom: String,
  idGame: String,
  board: Array,
  order: Number,
  created_at: Date,
});

module.exports = model("move", move);