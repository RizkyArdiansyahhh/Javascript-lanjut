// Spread operator

// MENGGABUNGKAN ARRAY ATAU PUN OBJECT

// const arr = ["riski", "budi", "iki"];
// const arr2 = ["bude", "budu"];
// console.log(...arr);
// const arr3 = [...arr, "hello", ...arr2];
// console.log(arr3);

// // MENYALIN ARRAY ATAU OBJECT

// const nama = ["riski", "budi", "iki"];
// const namaCopy = [...nama];
// namaCopy[0] = "bubu";
// nama[1] = "bude";
// console.log(namaCopy);

// const li = document.querySelectorAll("li");
// // const mhs = [];

// // for (let i = 0; i < li.length; i++) {
// //   mhs.push(li[i].textContent);
// // }
// // console.log(mhs);

// // const mhs = [...li].map((m) => m.textContent);
// // console.log(mhs);

// const mhs = [...li];
// console.log(mhs);

const h1 = document.querySelector("h1");

const huruf = [...h1.textContent].map((h) => `<span>${h}</span>`);
h1.innerHTML = "";
let i = 0;

const interval = setInterval(() => {
  h1.innerHTML += huruf[i];
  i++;

  if (i == huruf.length + 1) {
    i = 0;
    h1.innerHTML = "";
  }
}, 150);
