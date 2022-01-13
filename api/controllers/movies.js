const router = require('express').Router();
const Movie = require('../models/Movie');

// get all movies route
router.get('/', (req, res) => {
    res.send('Get all movies')
});

// get movie by id route
router.get('/:id', (req, res) => {
    res.send('Get movie by id');
});

// post new movie route 
router.post('/', (req, res) => {
    res.send('Post new Movie')
});

// delete movie route
router.delete('/:id', (req, res) => {
    res.send('Delete Movie');
});

module.exports = router;