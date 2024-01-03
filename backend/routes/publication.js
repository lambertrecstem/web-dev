const express = require("express");
const verifyJWT = require("../middleware/verifyJWT");
const verifyRoles = require("../middleware/verifyRoles");
const router = express.Router();
const {
  getPublications,
  postPublications,
  editPublications,
  deletePublications,
} = require("../controllers/publicationController");

router.get("", getPublications);

router.post("", verifyJWT, verifyRoles(5150), postPublications);
router.patch("/:id", verifyJWT, verifyRoles(5150), editPublications);
router.delete("/:id", verifyJWT, verifyRoles(5150), deletePublications);

module.exports = router;
