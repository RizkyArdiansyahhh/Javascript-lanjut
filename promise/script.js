function getFilm(url, succes, error) {
  const xhr = new XMLHttpRequest();

  console.log(xhr);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        succes(xhr.responseText);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };
  xhr.open("get", url);
  xhr.send();
}

getFilm(
  "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers",
  (hasil) => {
    const newHasil = JSON.parse(hasil);
    newHasil.Search.map((f) => console.log(f));
  },
  () => {
    console.log("film tidak di temukan");
  }
);
