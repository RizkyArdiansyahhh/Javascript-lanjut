// Template literal / Template String

const nama = "rizky";
const umur = 20;

const sayHello = `Hallo, nama saya ${nama}, umur saya ${umur} tahun`;
console.log(sayHello);

console.log("haloo, nama saya " + nama + ", umur saya + " + umur + " tahun");

console.log(`String 1
String 2`);

console.log(`${nama == "rizky" ? "hallo rizky ardiansyah" : "hallo unknown"}`);

console.log(`${alert("hello")}`);

// HTML Fragments;

const p = `
<div class="paragraph">
<h1 class="judul">Judul 1</h1>
</div>`;

document.body.innerHTML = p;

const mahasiswa = {
  nama: "rizky",
  umur: 20,
  jurusan: "ilmu komputer",
};

const mahasiswaHtml = `
<div class="daftar-mahasiswa">
<h2>Daftar Mahasiswa FMIPA</h2>
<ol>
<li>Nama : ${mahasiswa.nama}</li>
<li>Umur : ${mahasiswa.umur}</li>
<li>Jurusan : ${mahasiswa.jurusan}</li>
</ol>
</div>`;

document.body.innerHTML = mahasiswaHtml;
