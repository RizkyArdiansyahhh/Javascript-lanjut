const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
console.log(angka);

// Mencari angka > 3;
const newAngka1 = [];
// for loop
for (let i = 0; i < angka.length; i++) {
  if (angka[i] > 3) {
    newAngka1.push(angka[i]);
  }
}
console.log(newAngka1);

// for of
const newAngka2 = [];
for (const a of angka) {
  if (a > 3) {
    newAngka2.push(a);
  }
}
console.log(newAngka2);

// menggunakan higher order function (filter)

const newAngka3 = angka.filter((a) => a > 3);
console.log(newAngka3);

// mengalikan semua elemen array angka dengan 2
// bisa menggunakan higher order function (map)
// map => memetakan array dan membuat array baru hasil pemetaan

const newAngka4 = angka.map((a) => a * 2);
console.log(newAngka4);

// menjumlahkan semua elemen dalam array angka
// bisa menggunakan reduce

const newAngka5 = angka.reduce(
  (acumulator, currentValue) => acumulator + currentValue,
  5
);
console.log(newAngka5);

// Method chaining => method berantai
// contoh:
// mencari elemen > 3
// lalu mengalikan dengan 3
// lelu menjumlahkan semuanya

const hasil = angka
  .filter((a) => a > 3) // 8, 9, 4, 9
  .map((a) => a * 3) // 24, 27, 12, 27
  .reduce((acumulator, currentValue) => acumulator + currentValue); // 90

console.log(hasil);

const mahasiswa = [
  {
    nama: "riski",
    umur: 20,
  },
  {
    nama: "budi",
    umur: 20,
  },
  {
    nama: "ardiansyah",
    umur: 20,
  },
];

//Mencari nama mahasiswa dengan nama riski di array mahasiswa
const riski = mahasiswa.filter(
  (mhs) => mhs.nama.includes("riski") && mhs.umur === 20
);
console.log(riski);

// Studi Kasus:
// Anda memiliki data tentang sekelompok siswa yang berisi nama, usia, dan nilai mereka dalam sebuah ujian. Anda ingin melakukan beberapa operasi seperti:

// Mengubah format nama siswa menjadi huruf besar.
// Menyaring siswa yang lulus ujian (nilai lebih besar atau sama dengan 75).
// Menghitung rata-rata nilai siswa yang lulus.

const siswa = [
  { nama: "Andi", usia: 17, nilai: 85 },
  { nama: "Budi", usia: 18, nilai: 65 },
  { nama: "Cici", usia: 17, nilai: 95 },
  { nama: "Dewi", usia: 18, nilai: 70 },
  { nama: "Eko", usia: 17, nilai: 80 },
];

const task1 = siswa.map((a) => a.nama.toUpperCase());
console.log(task1);
const task2 = siswa.filter((a) => a.nilai >= 75);
console.log(task2);
let task3 = task2.reduce(
  (acumulator, currentValue) => acumulator + currentValue.nilai,
  0
);
// task3 = task3 / task2.length;
const rata = task3 / task2.length;
console.log(task3);
console.log(rata);
