// $(".search-button").on("click", function () {
//   $.ajax({
//     url: "http://www.omdbapi.com/?apikey=6de01f2b&s=" + $(".input-film").val(),
//     success: (response) => {
//       const { Search: films } = response;
//       let cards = ``;
//       console.log(films);
//       films.forEach((film) => {
//         cards += showFilms(film);
//       });
//       $(".movie-list").html(cards);
//       $(".movie-detail-button").on("click", function () {
//         $.ajax({
//           url:
//             "http://www.omdbapi.com/?apikey=6de01f2b&i=" +
//             $(this).data("imdbid"),
//           success: (details) => {
//             const movieDetails = showDetailsFilm(details);
//             $(".modal-detail-movie").html(movieDetails);
//           },
//           error: (e) => {
//             console.log(e.responseText);
//           },
//         });
//       });
//     },
//     error: (e) => {
//       console.log(e.responseText);
//     },
//   });
// });

// Menggunakan vanilla javascript

const searchBtn = document.querySelector(".search-button");
searchBtn.addEventListener("click", function () {
  const inputFilm = document.querySelector(".input-film");
  console.log("mulai");

  fetch("http://www.omdbapi.com/?apikey=6de01f2b&s=" + inputFilm.value)
    .then((response) => response.json())
    .then((data) => {
      const dataFilm = data.Search;
      let cards = ``;
      if (dataFilm != undefined) {
        dataFilm.forEach((film) => (cards += showFilms(film)));
        const movieList = document.querySelector(".movie-list");
        movieList.innerHTML = cards;

        // KETIKA TOMBOL SHOW DETAIL DI KLIK
        const movieDetailButton = document.querySelectorAll(
          ".movie-detail-button"
        );
        movieDetailButton.forEach((btn) => {
          btn.addEventListener("click", function () {
            const imdbid = this.dataset.imdbid;
            fetch("http://www.omdbapi.com/?apikey=6de01f2b&i=" + imdbid)
              .then((response) => response.json())
              .then((data) => {
                const movieDetails = showDetailsFilm(data);
                const modalDetailMovie = document.querySelector(
                  ".modal-detail-movie"
                );
                modalDetailMovie.innerHTML = movieDetails;
              });
          });
        });
      }
    });

  console.log("selesai");
});

function showFilms(film) {
  return `<div class="col-md-3 my-5">
                    <div class="card">
                        <img src="${film.Poster}" class="card-img-top img-fluid"  />
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
