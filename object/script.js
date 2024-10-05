// MEMBUAT OBJECT

// Object Literal

// let mahasiswa = {
//   nama: "rizky ardiansyah",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Haloo ${this.nama}, Selamat makan`);
//   },
// };
// let mahasiswa2 = {
//   nama: "Budi",
//   energi: 20,
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Haloo ${this.nama}, Selamat makan`);
//   },
// };

// Function declaration
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Haloo ${this.nama}, Selamat makan`);
//   };

//   return mahasiswa;
// }

// function Mahasiswa(nama, energi) {
//   return {
//     nama,
//     energi,
//     makan: function (porsi) {
//       this.energi += porsi;
//       console.log(`Haloo ${this.nama}, Selamat makan`);
//     },
//   };
// }

// const riski = Mahasiswa("riski", 10);

// Constractor function
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Haloo ${this.nama}, Selamat makann`);
  };
}

const riski = new Mahasiswa("riski", 20);
