// REST PARAMETER
// Menjumlahkan argument

function jumlahkan(...angka) {
  const total = angka.reduce(
    (acumulator, currentValue) => acumulator + currentValue,
    0
  );
  return total;
}

console.log(jumlahkan(1, 2, 3, 2, 3, 1, 2, 4, 2, 8));

const team = ["riski", "iki", "budi", "budo", "ardi"];

const [pm, ...otherTeam] = team;

console.log(pm);
console.log(otherTeam);

// Menfilter
function filterkan(...values) {
  return values.filter((v) => typeof v === "string");
}
console.log(filterkan("riski", 1, 3, 5, true, "haii", 30, false, 28));
