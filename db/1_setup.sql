DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
    id serial PRIMARY KEY,
    title varchar(255),
    lead_actor varchar(255) NOT NULL,
    year_of_production smallint NOT NULL,
    IMDB_rank smallint,
    about varchar(500) 

);

