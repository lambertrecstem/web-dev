const express = require("express");
const router = express.Router();
const verifyJWT = require("../middleware/verifyJWT");
const verifyRoles = require("../middleware/verifyRoles");
const {
  getOfficers,
  deleteOfficer,
  postOfficer,
  editOfficer,
} = require("../controllers/officerController");

router.get("", getOfficers);
router.post("", verifyJWT, verifyRoles(5150), postOfficer);
router.delete("/:id", verifyJWT, verifyRoles(5150), deleteOfficer);
router.patch("/:id", verifyJWT, verifyRoles(5150), editOfficer);

module.exports = router;
