// FOR OF

// ARRAY

const arr1 = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr1.length; i++) {
//   console.log(arr1[i]);
// }

// arr1.forEach((a, i) => console.log(a, i));

// for (const [i, a] of arr1.entries()) {
//   console.log(a, i);
// }

// STRING

// const nama = "rizky ardiansyah";

// for (const n of nama) {
//   console.log(n);
// }

// NODE LIST

// const namaLi = document.querySelectorAll(".nama");

// // namaLi.forEach((n) => console.log(n));
// for (const n of namaLi) {
//   console.log(n.textContent);
// }

// ARGUMENTS

function functionAngka() {
  for (const a of arguments) {
    console.log(a);
  }
}

functionAngka(1, 2, 3, 4, 5, 6, 7);
