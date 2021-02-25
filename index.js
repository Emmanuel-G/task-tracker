//Express-js server
const express = require("express");
const exphbs = require("express-handlebars");
require("dotenv").config();

const server = express();
const port = process.env.PORT || 5000;

server.engine('.hbs', exphbs({extname: '.hbs'}));
server.set('view engine', '.hbs');

server.get("/", (req, res) => {
    res.render("home");
})

server.listen(port, () => {
    console.log(`Task-Tracker Server started on: http://127.0.0.1:${port}`);
});
