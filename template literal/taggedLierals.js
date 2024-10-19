const nama = "Rizky ardiansyah";
const umur = 20;

function coba(strings, ...values) {
  //   let result = "";

  //   strings.forEach((str, i) => {
  //     result += `${str}${values[i] !== undefined ? values[i] : ""}`;
  //   });
  //   return result;

  return strings.reduce((result, str, i) => {
    return `${result}${str}${values[i] || ""}`;
  });
}

const str = coba`Haloo, nama saya ${nama}, umur saya ${umur} tahun`;
console.log(str);

const nama2 = "Rizky ardiansyah";
const umur2 = 20;
const email = "rizky@gmail.com";

function Highlight(strings, ...values) {
  //   let result = "";

  //   strings.forEach((str, i) => {
  //     result += `${str}${values[i] !== undefined ? values[i] : ""}`;
  //   });
  //   return result;

  return strings.reduce((result, str, i) => {
    return `${result}${str}<span class = hl> ${values[i] || ""}</span>`;
  }, "");
}

const str2 = Highlight`Haloo, nama saya ${nama2}, umur saya ${umur2} tahun, email saya ${email}`;

document.body.innerHTML = str2;
