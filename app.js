// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route:
app.get('/', (request, response, next) => response.sendFile(__dirname + './views/home.html'));
// our sec Route:
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));
// our third Route:
app.get('/gallery', (request, response, next) => response.sendFile(__dirname + '/views/gallery.html'));
// our fourth Route:
app.get('/work', (request, response, next) => response.sendFile(__dirname + '/views/work.html'));

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000!'));