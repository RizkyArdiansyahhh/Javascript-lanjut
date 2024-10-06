// EXECUTION CONTEXT, HOISTING, SCOPE

console.log(nama);
var nama = "riski";

// CREATION PHASE
// 1. ngecek terlebih dahulu variable dan function, jika ada masukkan ke atas
// variabel = undefined;
// function = fn()
// Artinya di hoisting
// window = object global
// this = window

// EXECUTION PHASE

console.log(nama);
console.log(umur);
console.log(sayHello("rizky"));

var nama = "rizky";
var umur = 20;

function sayHello() {
  console.log(arguments);
  return `Haloo nama saya ${arguments[0]}, umur saya ${umur}`;
}

function a() {
  console.log("ini a");

  function b() {
    console.log("ini b");

    function c() {
      console.log("ini c");
    }
    c();
  }
  b();
}
a();
