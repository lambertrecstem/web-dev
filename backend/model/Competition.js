const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const competitionSchema = new Schema({
  title: { type: String },
  date: { type: String },
  subject: { type: String },
  slug: { type: String },
  cardDescription: { type: String },
  redirectURL: { type: String },
  accent: { type: String },
  type: {type: String}
});

module.exports = mongoose.model(
  "Competitions",
  competitionSchema,
  "competitions"
);
