const express = require("express");

const {
  getLogoutView,
  killApplication,
} = require("../controllers/logoutController");

const router = express.Router();

router.get("/", getLogoutView);
router.get("/kill", killApplication);

module.exports = router;
