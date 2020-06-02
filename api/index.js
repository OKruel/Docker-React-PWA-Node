const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/test', (req, res, next) => {
    res.send('Test Route working!');
});

app.listen(9000, () => console.log('Api listening on port 9000'));