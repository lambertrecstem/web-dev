const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testimonialsSchema = new Schema({
  author: { type: String, required: true },
  quote: { type: String, required: true },
  picture: { type: String, required: true },
  id: { type: Number, required: true },
});

module.exports = mongoose.model(
  "Testimonials",
  testimonialsSchema,
  "testimonials"
);
