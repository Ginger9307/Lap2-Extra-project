const db = require('../dbConfig');

// Movie object
module.exports = class Movie {
    constuctor(data){
        this.id = data.it;
        this.title = data.title;
        this.actor = data.actor;
        this.yearOfProd = data.yearOfProd;
        this.IMDBrank = data.IMDBrank;
        this.about = data.about
    };
    // show all movies method

    // show movie by id method

    // create movie method

    // delete movie method


};

