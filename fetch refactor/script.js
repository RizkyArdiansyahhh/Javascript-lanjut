document.addEventListener("DOMContentLoaded", function () {
  // ketika tombol search di klik
  const btnSearch = document.querySelector(".search-button");
  btnSearch.addEventListener("click", async function () {
    const keywordSearch = document.querySelector(".input-film");
    const dataFilm = await getMovies(keywordSearch.value);
    updateUi(dataFilm);
  });

  document.addEventListener("click", async function (e) {
    if (e.target.classList.contains("movie-detail-button")) {
      const imdbID = e.target.dataset.imdbid;
      const detailsMovie = await getMovieDetail(imdbID);
      updateUiDetails(detailsMovie);
    }
  });
});

async function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=6de01f2b&s=" + keyword)
    .then((response) => response.json())
    .then((data) => data.Search);
}

function updateUi(data) {
  let cards = ``;
  data.forEach((film) => (cards += showFilms(film)));
  const movieList = document.querySelector(".movie-list");
  movieList.innerHTML = "";
  movieList.innerHTML = cards;
}

async function getMovieDetail(id) {
  return fetch("http://www.omdbapi.com/?apikey=6de01f2b&i=" + id)
    .then((response) => response.json())
    .then((data) => data);
}

function updateUiDetails(data) {
  const modal = document.querySelector(".modal-detail-movie");
  modal.innerHTML = "";
  const details = showDetailsFilm(data);
  modal.innerHTML = details;
}

function showFilms(film) {
  return `<div class="col-md-3 my-4">
            <div class="card">
                <img src="${film.Poster}" class="card-img-top img-fluid poster" />
                <div class="card-body">
                <h5 class="card-title">${film.Title}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${film.Year}</h6>
                <a href="#" class="btn btn-primary movie-detail-button"  data-bs-toggle="modal"
                data-bs-target="#movieDetails" data-imdbid="${film.imdbID}">Show detail</a>
                </div>
            </div>
        </div>`;
}

function showDetailsFilm(details) {
  return `<div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                <img src="${details.Poster}" class=" img-fluid"  /></div>
                <div class="col-md">
                <ul class="list-group">
                    <li class="list-group-item"><strong>Title : ${details.Title}</strong></li>
                    <li class="list-group-item"><strong>Year : ${details.Year}</strong></li>
                    <li class="list-group-item"><strong>Released : ${details.Released}</strong></li>
                    <li class="list-group-item"><strong>Writer : ${details.Writer}</strong></li>
                    <li class="list-group-item"><strong>Actors : ${details.Actors}</strong></li>
                    <li class="list-group-item"><strong>Plot : ${details.Plot}</strong></li>
                </ul>
                </div>
            </div>
        </div>`;
}
