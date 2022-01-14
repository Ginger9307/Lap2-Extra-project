const router = require('express').Router();
const Movie = require('../models/Movie');
const { rawListeners } = require('../server');

// get all movies route
router.get('/', async(req, res) => {
    // res.send('Get all movies')
    try {
        const movies = await Movie.all;
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json(error);
    };
});

// get movie by id route
router.get('/:id', async (req, res) => {
    // res.send('Get movie by id');
    try {
        const movie = await Movie.findOne(req.params.id);
        res.status(200).json(movie);
    } catch (error) {
        res.status(404).json(error);
    };
});

// post new movie route 
router.post('/',async (req, res) => {
    // res.send('Post new Movie')
    try {
        const movie = await Movie.create(req.body);
        res.status(201).json(movie);
    } catch (error) {
        res.status(422).json(error);
    }
});

// delete movie route
router.delete('/:id', async (req, res) => {
    // res.send('Delete Movie');
    try {
        const movie = await Movie.delete(req.params.id);
        res.status(204).json(movie);
    } catch (error) {
        res.status(404).json(error);
    }
});

module.exports = router;