const express = require("express");
const verifyJWT = require("../middleware/verifyJWT");
const verifyRoles = require("../middleware/verifyRoles");
const router = express.Router();
const {
  getCompetitions,
  postCompetitions,
  editCompetitions,
  deleteCompetitions,
} = require("../controllers/competitionController");

router.get("", getCompetitions);
router.post("", verifyJWT, verifyRoles(5150), postCompetitions);
router.patch("/:id", verifyJWT, verifyRoles(5150), editCompetitions);
router.delete("/:id", verifyJWT, verifyRoles(5150), deleteCompetitions);


module.exports = router;
