function kalkulasi(a, b) {
  return [a + b, a * b, a - b, a / b];
}

const [jumlah1, kali1, kurang1, bagi1] = kalkulasi(2, 3);
console.log(jumlah1, kali1, kurang1, bagi1);

function kalkulasiObj(a, b) {
  return {
    tambah: a + b,
    kurang: a - b,
    kali: a * b,
    bagi: a / b,
  };
}

const { bagi, tambah, kali, kurang } = kalkulasiObj(2, 3);
console.log(bagi, tambah, kurang);

const mhs = {
  nama: "rizky ardiansyah",
  umur: 20,
  email: "riski@gmail.com",
  alamat: {
    kota: "pekanbaru",
    provinsi: "riau",
    negara: "indonesia",
  },
};

// function cetakMhs(mhs) {
//   return `hello, nama saya ${mhs.nama}, umur saya ${mhs.umur} tahun`;
// }
function cetakMhs({ nama, umur, alamat: { kota, negara, provinsi } }) {
  return `hello, nama saya ${nama}, umur saya ${umur} tahun, tingggal di kota ${kota} provinsi ${provinsi}, ${negara}`;
}

console.log(cetakMhs(mhs));
