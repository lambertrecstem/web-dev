const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const publicationSchema = new Schema({
  id: { type: Number },
  author: { type: String },
  title: { type: String },
  date: { type: String },
  subject: { type: String },
  slug: { type: String },
  cardDescription: { type: String },
  publicationContent: { type: String },
  picture: { type: String },
  accent: { type: String },
});

module.exports = mongoose.model(
  "Publications",
  publicationSchema,
  "publications"
);
