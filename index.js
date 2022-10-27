const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Courses Api Running');
});


app.listen(port, () => {
    console.log('Sazz.Academy Courses Server Running on port', port);
});