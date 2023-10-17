const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;

// Set the view engine to Handlebars
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

// Serve static files from the 'public' directory
app.use(express.static(__dirname + '/public'));

// Import route files
const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about');
const projectsRoute = require('./routes/projects');
const contactRoute = require('./routes/contact');

// Use route files
app.use('/', homeRoute);
app.use('/about', aboutRoute);
app.use('/projects', projectsRoute);
app.use('/contact', contactRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});