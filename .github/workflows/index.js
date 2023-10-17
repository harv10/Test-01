const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set the view engine to Handlebars
app.set('view engine', 'hbs');

// Serve static files from the 'public' directory
app.use(express.static(__dirname + '/public'));

// Define routes for each page
app.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Me' });
});

app.get('/projects', (req, res) => {
    res.render('projects', { title: 'Projects' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Me' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});