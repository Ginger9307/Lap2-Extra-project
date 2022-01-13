const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

// import route
const movieRoute = require('./controllers/movies');

// route middleware
server.use('/movies', movieRoute);

// root route
server.get('/', (req, res) => res.send('I am all ears'))

module.exports = server
