const express = require("express");
const router = express.Router();

// define the home page route
router.get("/", (req, res) => {
    let students = ["Student1", "Student2", "Student3"];
    res.render("students", { students: students });
});

router.get("/about", (req, res) => {
    res.render("about", { about: "Students" });
});

module.exports = router;
