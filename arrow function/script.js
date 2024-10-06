function sayHello(nama) {
  return `Haloo ${nama}`;
}

console.log(sayHello("riski"));

// Function exspression
let sayHello2 = function (nama) {
  return `Haloo ${nama}`;
};
console.log(sayHello2("budi"));

let sayHello3 = (nama) => {
  return `Haloo ${nama}`;
};
console.log(sayHello3("budo"));

let sayHello4 = (nama) => `Haloo ${nama}`;
console.log(sayHello4("bude"));

let mahasiswa = ["riski", "ardiansyah", "iki"];
let hitungJumlah = mahasiswa.map(function (nama) {
  return nama.length;
});

console.log(hitungJumlah);

let hitungJumlah2 = mahasiswa.map((nama) => nama.length);
console.log(hitungJumlah2);

let objectMahasiswa = mahasiswa.map((nama) => ({
  nama: nama,
  panjang: nama.length,
}));
console.log(objectMahasiswa);
