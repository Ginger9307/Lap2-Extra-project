const db = require('../dbConfig');

// Movie object
module.exports = class Movie {
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.actor = data.lead_actor;
        this.yearOfProd = data.year_of_production;
        this.IMDBrank = data.imdb_rank;
        this.about = data.about;
    };

    // show all movies method
    static get all(){
        return new Promise (async(resolve, reject) => {
            try {
                let moviesData = await db.query('SELECT * FROM movies;');
                console.log("1", moviesData);
                let movies = moviesData.rows.map(m => new Movie(m));
                console.log("2", movies);
                resolve(movies);
            } catch (error) {
                reject('Movies can not be found');
            };
        });
    };

    // show movie by id method
    static findOne(id) {
        return new Promise (async(resolve, reject) => {
            try {
                let movieData = await db.query('SELECT * FROM movies WHERE movies.id = $1;', [id]);
                console.log(movieData);
                let movie = new Movie(movieData.rows[0]);
                resolve(movie);
            } catch (error) {
                reject('Movie was not found');
            };
        });
    };

    // create movie method
    static create(movieData) {
        return new Promise (async(resolve, reject) => {
            try {
                const {title, actor, yearOfProd, IMDBrank, about} = movieData;
                const newMovie = await db.query('INSERT INTO movies (title, lead_actor, year_of_production, imdb_rank, about) VALUES ($1,$2,$3,$4,$5) RETURNING *', [title, actor, yearOfProd, IMDBrank, about]);
                resolve(newMovie.rows[0]);
            } catch (error) {
                reject('Movie was not created')
            }
        });
    };


    // delete movie method
    static async delete(id){
        return new Promise(async(resolve, reject) => {
            try {
                const result = await db.query('DELETE FROM movies WHERE id = $1', [ id ]);
                resolve('Movie was deleted')
            } catch (err) {
                reject('Movie could not be deleted')
            }
        })
    };

};

