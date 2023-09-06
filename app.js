const express = require("express");
const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.sendFile("./public/index.html", { root: __dirname });
});

const studentRouter = require("./routes/students");
const instructorRouter = require("./routes/instructors");

app.use("/students", studentRouter);
app.use("/instructors", instructorRouter);

app.listen(3000, () => console.log("Server running at 3000."));
