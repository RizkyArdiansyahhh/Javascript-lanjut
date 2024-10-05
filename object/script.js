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

const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Haloo ${this.nama}, Selamat makan`);
  },
  main: function (jam) {
    this.energi -= jam;
    console.log(`Haloo ${this.nama}, Selamat Main`);
  },
  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`Haloo ${this.nama} Selamat Tidur`);
  },
};

function Mahasiswa(nama, energi) {
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  return mahasiswa;
}
const riski = Mahasiswa("riski", 10);
const budi = Mahasiswa("budi", 10);

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

// // Constractor function
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Haloo ${this.nama}, Selamat makann`);
//   };
// }

// const riski = new Mahasiswa("riski", 20);
