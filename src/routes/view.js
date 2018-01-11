//dependencies
const express = require("express");
const router = express.Router();

//public endpoints
router.use("/static", express.static("public"));

router.get("/", function(req,res,next) {
	res.sendFile("index.html", {root: "src/views"});
});
router.get("/index.html", function(req,res,next) {
	res.sendFile("index.html", {root: "src/views"});
});
router.get("/profile.html", function(req,res,next) {
	res.sendFile("profile.html", {root: "src/views"});
});
router.get("/profile/memes.html", function(req,res,next) {
	res.sendFile("memes.html", {root: "src/views"});
});
router.get("/home.html", function(req,res,next) {
	res.sendFile("home.html", {root: "src/views"});
});



module.exports = router;