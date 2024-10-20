// CALLBACK
// function sayHello(nama) {
//   alert(`helllo ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt("masukkan nama anda : ");
//   callback(nama);
// }

// tampilkanPesan((nama) => {
//   alert(`hello ${nama}`);
// });

const mhs = [
  {
    nama: "rizky ardiansyah",
    nim: "2203110502",
    email: "riski@gmail.com",
    jurusan: "ilmu komputer",
    idDoseWali: 1,
  },
  {
    nama: "ardiansyah",
    nim: "2203110502",
    email: "riski@gmail.com",
    jurusan: "ilmu komputer",
    idDoseWali: 2,
  },
  {
    nama: "Budi",
    nim: "2203110502",
    email: "riski@gmail.com",
    jurusan: "ilmu komputer",
    idDoseWali: 3,
  },
  {
    nama: "Eddy",
    nim: "2203110502",
    email: "riski@gmail.com",
    jurusan: "ilmu komputer",
    idDoseWali: 4,
  },
];

// SYNCRONOUS CALLBACK
// console.log("mulai");
// mhs.forEach((m) => {
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });
// console.log("selesai");

// ASYNCRONOUS CALLBACK

function getNamaMahasiswa(url, succes, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        succes(xhr.responseText);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };
  xhr.open("get", url);
  xhr.send();
}

console.log("mulai");
getNamaMahasiswa(
  "mahasiswa.json",
  (result) => {
    const mhs = JSON.parse(result);
    mhs.forEach((m) => console.log(m.nama));
  },
  () => {}
);
console.log("selesai");

console.log("mulai");
$.ajax({
  url: "mahasiswa.json",
  success: (mhs) => {
    mhs.forEach((m) => console.log(m.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log("selesai");
