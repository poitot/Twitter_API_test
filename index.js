const host = 'localhost';
const port = 3000;

const path = require('path');

const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(port, () => {
    console.log("Listen on the port 3000...");
});

