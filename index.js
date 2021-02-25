//Express-js server
const express = require("express");
require("dotenv").config();

const server = express();
const port = process.env.PORT || 5000;

server.get("/", (req, res) => {
    res.send("Daily Task Tracker App");
})

server.listen(port, () => {
    console.log(`Task-Tracker Server started on: http://127.0.0.1:${port}`);
});
