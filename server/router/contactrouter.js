const express = require("express");
const router = new express.Router();
const contactController = require("../controllers/contactController");  //controller


router.route("/contact").post(contactController);

module.exports = router;