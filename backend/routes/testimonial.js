const express = require("express");
const verifyJWT = require("../middleware/verifyJWT");
const verifyRoles = require("../middleware/verifyRoles");
const router = express.Router();
const {
  getTestimonial,
  postTestimonial,
  editTestimonial,
  deleteTestimonial,
} = require("../controllers/testimonialController");

router.get("", getTestimonial);
// router.post("", verifyJWT, verifyRoles(5150), postTestimonial);
// router.patch("/:id", verifyJWT, verifyRoles(5150), editTestimonial);
// router.delete("/:id", verifyJWT, verifyRoles(5150), deleteTestimonial);

router.post("",  postTestimonial);
router.patch("/:id",  editTestimonial);
router.delete("/:id",  deleteTestimonial);

module.exports = router;
