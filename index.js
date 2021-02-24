//Express-js server
const express = require("express");

const server = express();
const PORT = 5000;

server.get("/", (req, res) => {
    res.send("Daily Task Tracker App");
})

server.listen(PORT, () => {
    console.log(`Task-Tracker Server started on: http://127.0.0.1:${PORT}`);
});
