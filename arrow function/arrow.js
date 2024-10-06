// console.log(this);

// // Konsep This pada Arrow Function

class Mahasiswa {
  constructor() {
    this.nama = "riski";
    this.umur = 20;
    this.sayHello = () => {
      console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun`);
    };

    setInterval(function () {
      console.log(this.nama++);
    }, 500);
  }
}
let riski = new Mahasiswa();

let obj = {
  nama: "budi",
  umur: 20,
  sayHello: () => {
    console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun`);
  },
};
let obj2 = {
  nama: "budi",
  umur: 20,
  sayHello: () => {
    console.log(`Halo, nama saya ${nama}, umur saya ${umur} tahun`);
  },
};

const box = document.querySelector(".box");

box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains("size")) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu);

  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
