const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/catagories.json');

app.get('/', (req, res) => {
    res.send('Courses Api Running');
});

app.get('/courses-categories', (req, res) => {
    res.send(categories);
});

app.listen(port, () => {
    console.log('Sazz.Academy Courses Server Running on port', port);
})