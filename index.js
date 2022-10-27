const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/catagories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Courses Api Running');
});

app.get('/courses-categories', (req, res) => {
    res.send(categories);
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourses = courses.find(n => n._id === id);
    res.send(selectedCourses);
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '07') {
        res.send(courses);
    }
    else {
        const category_courses = courses.filter(n => n.category_id === id);
        res.send(category_courses);
    }
});

app.listen(port, () => {
    console.log('Sazz.Academy Courses Server Running on port', port);
})