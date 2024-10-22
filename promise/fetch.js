// fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=avengers")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// MEMBUAT PROMISE SEDERHANA

// const janji = new Promise((resolve, rejected) => {
//   let ditepati = true;

//   if (ditepati) {
//     resolve("janji ditepati");
//   } else {
//     rejected("janji di ingkari");
//   }
// });

// console.log("mulai");
// console.log(
//   janji.then((hasil) => console.log(hasil)).catch((error) => console.log(error))
// );
// console.log("selesai");

// const janji2 = new Promise((resolve, rejected) => {
//   let ditepati = true;
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("janji ditepati");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       rejected("janji tidak ditepati");
//     }),
//       2000;
//   }
// });

// console.log("mulai");
// console.log(
//   janji2
//     .finally(() => console.log("selesai meunggu"))
//     .then((response) => console.log("OK : " + response))
//     .catch((response) => console.log("NOT OK : " + response))
// );
// console.log("selesai");

const film = new Promise((resolve, rejected) => {
  let berhasil = true;
  if (berhasil) {
    setTimeout(() => {
      resolve([
        {
          judul: "mentari",
          sutradara: "riski",
          tahun: 2024,
        },
      ]);
    }, 3000);
  } else {
    setTimeout(() => {
      console.log("data tidak di temukan");
    }, 3000);
  }
});

const cuaca = new Promise((resolve, rejected) => {
  let berhasil = true;
  if (berhasil) {
    setTimeout(() => {
      resolve([
        {
          kota: "pekanbaru",
          temp: 20,
        },
      ]);
    }, 2000);
  } else {
    setTimeout(() => {
      console.log("data tidak di temukan");
    }, 2000);
  }
});

// console.log(
//   film
//     .then((response) => console.log(response))
//     .catch((response) => console.log(response))
// );

// console.log(
//   cuaca
//     .then((response) => console.log(response))
//     .catch((response) => console.log(response))
// );

Promise.all([film, cuaca])
  .then((response) => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  })
  .catch((response) => {
    console.log(response);
  });
