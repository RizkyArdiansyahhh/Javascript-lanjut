// PROTOTYPE
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  console.log(`Haloo ${this.nama} Selamat makan`);
};
Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  console.log(`Haloo ${this.nama} Selamat main`);
};

const riski = new Mahasiswa("riski", 20);

// Jika menggunkana class

class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }
  makan(porsi) {
    this.energi += porsi;
    console.log(`Haloo ${this.nama} Selamat makan`);
  }
  main(jam) {
    this.energi -= jam;
    console.log(`Haloo ${this.nama} Selamat main`);
  }
}

const budi = new Mahasiswa("budi", 20);
