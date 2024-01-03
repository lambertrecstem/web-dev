const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const officerSchema = new Schema({
  position: { type: String },
  fname: { type: String },
  lname: { type: String },
  bio: { type: String },
  picture: { type: String },
  color: { type: String },
});

module.exports = mongoose.model("Officer", officerSchema, "officer");
