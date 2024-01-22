const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testimonialsSchema = new Schema({
  author: { type: String},
  quote: { type: String},
  pictureURL: { type: String},
});

module.exports = mongoose.model(
  "Testimonials",
  testimonialsSchema,
  "testimonials"
);
