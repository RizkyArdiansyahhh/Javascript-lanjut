// // DESTRUCTURING

// // DESTRUCTURING ARRAY

// const perkenalan = ["hello", "nama", "saya", "umur"];

// const hello = perkenalan[0];
// const umur = perkenalan[3];
// console.log(hello);
// console.log(umur);

// const perkenalan2 = ["hello", "nama", "saya", "umur"];

// const [hello2, umur2] = perkenalan2;
// console.log(hello2);
// console.log(umur2);

// let a = 20;
// let b = 30;

// const c = a;
// a = b;
// b = c;
// console.log(a);
// console.log(b);

// let x = 1;
// let y = 2;

// console.log(x);
// console.log(y);
// [x, y] = [y, x];
// console.log(x);
// console.log(y);

function coba() {
  return [1, 2, 3];
}

const [arr1, arr2, arr3] = coba();
console.log(arr3);

// REST PARAMETER

const array = [1, 2, 3, 4, 5, 6, 7];
const [first, ...mores] = array;
console.log(first);
console.log(mores);

// DESTRUCTURING OBJECT

// const mhs = {
//   nama: "rizky ardiansyag",
//   umur: 20,
// };

// const { nama, umur } = mhs;
// console.log(nama);

// ASSIGNMENT TANPA DEKLARASI OBJECT

// const { nama, umur } = {
//   nama: "rizky ardiansyag",
//   umur: 20,
// };
// console.log(umur);

// const mhs = {
//   nama: "rizky ardiansyag",
//   umur: 20,
// };

// const { nama: a, umur: b } = mhs;
// console.log(a);

// const mhs = {
//   nama: "rizky ardiansyag",
//   umur: 20,
// };

// const { nama: a, umur: b, email: c = "riski@gmail.com" } = mhs;
// console.log(c);

// MENGAMBIL FIELD DALAM OBJECT

const mhs = {
  id: 123,
  nama: "rizky ardiansyag",
  umur: 20,
};

function getIdMhs(mhs) {
  return mhs.id;
}

console.log(getIdMhs(mhs));

const mhs2 = {
  id: 123,
  nama: "rizky ardiansyag",
  umur: 20,
};

function getIdMhs({ id }) {
  return id;
}

console.log(getIdMhs(mhs2));
