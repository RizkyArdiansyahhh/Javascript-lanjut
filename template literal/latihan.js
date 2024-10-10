const mhs = {
  nama: "rizky ardiansyah",
  umur: 20,
  nim: "2203110502",
};

const el1 = `
<div class="mhs">
<ul>
<li>Nama : ${mhs.nama}</li>
<li>Umur : ${mhs.umur}</li>
<li>NIM : ${mhs.nim}</li>
</ul>
</div>
`;

const mahasiswa = [
  {
    nama: "rizky ardiansyah",
    umur: 20,
  },
  {
    nama: "rizky ardiansyah",
    umur: 20,
  },
  {
    nama: "rizky ardiansyah",
    umur: 20,
  },
  {
    nama: "rizky ardiansyah",
    umur: 20,
  },
];

const el2 = `
<div class="mahasiswa">
<h1>Daftar Mahasiswa</h1>
${mahasiswa
  .map((mhs) => {
    return `<ul>
    <li>Nama : ${mhs.nama}</li>
    <li>Umur : ${mhs.umur}</li>
    </ul>`;
  })
  .join("")}
</div>
`;

const lagu = {
  judul: "wide awake",
  penyanyi: "bilie elish",
  feat: "abcde",
};

const el3 = `
<div class="penyanyi">
<ul>
<li>Judul : ${lagu.judul}</li>
<li>Penyanyi : ${lagu.penyanyi} ${lagu.feat ? ` feat ${lagu.feat}` : ""}</li>
</ul>
</div>
`;

const mhsIlkom = {
  nama: "rizky ardiansyah",
  semester: 5,
  mataKuliah: ["Data Mining", "Metopel", "TKSI"],
};

function cetakMataKuliah(mataKuliah) {
  return `
    <ul>
    ${mataKuliah
      .map((a) => {
        return `
        <li>${a}</li>
        `;
      })
      .join("")}
    </ul>
    `;
}

const el4 = `
<div class="mahasiswa-ilkom">
<h3>${mhsIlkom.nama}</h3>
<p>Semester : ${mhsIlkom.semester}</p>
<h5>Mata Kuliah : </h5>
${cetakMataKuliah(mhsIlkom.mataKuliah)}
</div>
`;

document.body.innerHTML = el4;
