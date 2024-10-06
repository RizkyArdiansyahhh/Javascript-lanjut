function init() {
  //   let nama = "rizky";
  return function (nama) {
    console.log(nama);
  };
}

let panggilNama = init();
panggilNama("riski");

function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`halo ${nama}, selamat ${waktu}`);
  };
}
let selamatPagi = ucapkanSalam("pagi");
let selamatSiang = ucapkanSalam("siang");
let selamatMalam = ucapkanSalam("malam");
selamatPagi("riski");

console.dir(selamatPagi);

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

counter = 10;

console.log(add());
console.log(add());
console.log(add());
