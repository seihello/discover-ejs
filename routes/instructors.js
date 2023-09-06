const express = require("express");
const router = express.Router();

// define the home page route
router.get("/", (req, res) => {
    let instructors = ["Instructor1", "Instructor2", "Instructor3"];
    res.render("instructors", { instructors: instructors });
});

router.get("/about", (req, res) => {
    res.render("about", { about: "Instructors" });
});

module.exports = router;
