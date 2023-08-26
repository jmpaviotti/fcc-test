let express = require('express');
let app = express();

console.log("Hello World");

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/index.html');
})































module.exports = app;
