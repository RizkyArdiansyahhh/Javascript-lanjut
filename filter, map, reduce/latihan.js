// mengambil semua video dan jadikan array
const videos = [...document.querySelectorAll("[data-duration]")];

// filter video ynag hanya javascrip lanjutan
const jsLnjut = videos
  .filter((video) => video.innerText.includes("JAVASCRIPT LANJUTAN"))

  // ambil durasi masing masing video
  .map((item) => item.dataset.duration)

  // ubah durasi mejadi int, ubah menit menjadi detik
  .map((waktu) => {
    // 10 : 30 -> [10, 30] menggunkan split
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  // jumlah kan semua detik
  .reduce((total, detik) => total + detik);

// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLnjut / 3600);
const menit = Math.floor((jsLnjut % 3600) / 60);
const detik = jsLnjut % 60;

// simpan di dom

//jumlah video
const jumlahVideo = document.querySelector(".jumlah-video");
const jumlahVideoJsLanjut = videos.filter((video) =>
  video.innerText.includes("JAVASCRIPT LANJUTAN")
);
jumlahVideo.innerText = jumlahVideoJsLanjut.length;

// total durasi
const totalDurasi = document.querySelector(".total-durasi");
totalDurasi.innerText = `${jam} jam, ${menit} menit, ${detik} detik`;
