// const coba = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(resolve("selesai"));
//   }, 2000);
// });
// console.log("start");
// coba.then((coba) => console.log(coba));
// console.log("end");

function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 5000;
    if (waktu < 5000) {
      setTimeout(() => {
        console.log(resolve("selesai"));
      }, waktu);
    } else {
      console.log(reject("kelamaan!"));
    }
  });
}

// const coba = cobaPromise();
// coba.then((coba) => console.log(coba)).catch((coba) => console.log(coba));

async function coba() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (e) {
    console.log(e);
  }
}

coba();
