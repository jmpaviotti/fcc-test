require('dotenv').config();
let bodyparser = require('body-parser');

let express = require('express');
let app = express();

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})

app.use(bodyparser.urlencoded({ extended: false }));

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/json', (req, res) => {
    let obj = { "message": "Hello json" };

    if (process.env.MESSAGE_STYLE == "uppercase") {
        obj.message = obj.message.toUpperCase();
    }

    res.json(obj);
})

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({ "time": req.time });
})

app.get('/:word/echo', (req, res) => {
    res.json({ "echo": req.params.word });
})

app.get('/name', (req, res) => {
    res.json({ "name": `${req.query.first} ${req.query.last}` });
}).post()





module.exports = app;
