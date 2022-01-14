// start 
showAll();

// event lisneners
document.querySelector('.btnAddMovie').addEventListener("click", postMovie);

document.addEventListener("click", function (e) {
    console.log(e.target);
  console.log(e.target.className);
    if (e.target && e.target.className == "fas fa-trash-alt bin") {
        let movieID = e.target.getAttribute('data-id');
        deleteMovie(movieID);
    }
});

//---------------- functions------------------

// show all movies
async function showAll() {
    const response = await fetch('http://localhost:3000/movies');
    const movies = await response.json();
    console.log(movies);
    appendMovies(movies);
};
// helping function for show all movies
function appendMovies(movies) {
    const movieGrid = document.querySelector(".mdb");
    movies.forEach(movie => appendMovie(movie, movieGrid));
};

// helping function for show all movies - create card for movie
function appendMovie(movie, movieGrid) {
    console.log(movie);
    // const movieGrid = document.querySelector(".mdb");

    const newMovieCard = document.createElement('div');
    newMovieCard.classList.add('card');
    newMovieCard.setAttribute('data-id', movie.id);
    movieGrid.append(newMovieCard);

    const newCardBody = document.createElement('div');
    newCardBody.classList.add('card-body');
    newCardBody.setAttribute('data-id', movie.id);
    newMovieCard.append(newCardBody);

    const newMovieTitle = document.createElement('h5');
    newMovieTitle.classList.add('card-title');
    newMovieTitle.setAttribute('data-id', movie.id);
    newMovieTitle.innerHTML = movie.title;
    newCardBody.append(newMovieTitle);

    const newYearProd = document.createElement('h6');
    newYearProd.classList.add('card-subtitle');
    newYearProd.classList.add('text-muted');
    newYearProd.setAttribute('data-id', movie.id);
    newYearProd.innerHTML = movie.yearOfProd;
    newCardBody.append(newYearProd);

    const newImdbRating = document.createElement('p');
    newImdbRating.classList.add('card-text');
    newImdbRating.setAttribute('data-id', movie.id);
    newImdbRating.innerHTML = movie.IMDBrank;
    newCardBody.append(newImdbRating);

    const newSinopsys = document.createElement('p');
    newSinopsys.classList.add('card-text');
    newSinopsys.classList.add('about');
    newSinopsys.setAttribute('data-id', movie.id);
    newSinopsys.innerHTML = movie.about;
    newCardBody.append(newSinopsys);

    const newPBin = document.createElement('p');
    newPBin.classList.add('bin');
    newPBin.setAttribute('data-id', movie.id);
    newCardBody.append(newPBin);

    const newBin = document.createElement('i');
    newBin.classList.add('fas');
    newBin.classList.add('fa-trash-alt');
    newBin.classList.add('bin');
    newBin.setAttribute('data-id', movie.id);
    newPBin.append(newBin);

}

function postMovie() {
    // e.preventDefault();

  const movieData = {
    title : document.querySelector("#inputTitle").value,
    actor  : document.querySelector("#inputActor").value,
    yearOfProd: document.querySelector("#inputYear").value,
    IMDBrank: document.querySelector("#inputRating").value, 
    about: document.querySelector("#inputMovieAbout").value,
  };
  console.log(movieData)

  const options = { 
    method: 'POST',
    body: JSON.stringify(movieData),
    headers: {
        "Content-Type": "application/json"
    }
  };
  console.log(options)

  fetch('http://localhost:3000/movies', options)
  // .then(r => r.json())
  // .then(appendPosts)
  .catch(console.warn);
  window.location.reload();
}

// delete Movie
async function deleteMovie(movieID) {
    try {
        const options = { method: 'DELETE' };
        console.log(options);
        await fetch(`http://localhost:3000/movies/${movieID}`, options);
    } catch (err) {
        console.warn(err);
    }
    window.location.reload();
};

