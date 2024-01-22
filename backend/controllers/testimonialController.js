const Testimonial = require("../model/Testimonial");

const getTestimonial = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({});
    return res.json(testimonials);
  } catch (err) {
    res.status(500).send("Trouble fetching the testimonial...");
  }
};

const editTestimonial = async (req, res) => {
  try {
    const testimonialID = req.params.id;
    const updatedTestimonial = req.body;
    const saveTestimonial = await Testimonial.updateOne(
      { _id: testimonialID },
      updatedTestimonial
    );

    res.send(saveTestimonial);
  } catch (err) {
    res.send(err);
  }
};

const deleteTestimonial = async (req, res) => {
  try {
    const testimonialID = req.params.id;
    const saveTestimonial = await Testimonial.deleteOne({ _id: testimonialID });
    res.send(saveTestimonial);
  } catch (err) {
    res.send(err);
  }
};

const postTestimonial = async (req, res) => {
  const newTestimonial = new Testimonial(req.body);
  const saveTestimonial = newTestimonial.save();
  if (saveTestimonial) res.send("Testimonial saved!");
  res.end();
};

module.exports = {
  getTestimonial,
  postTestimonial,
  editTestimonial,
  deleteTestimonial,
};
