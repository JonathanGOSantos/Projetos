const type = prompt("Qual o tipo de matriz?");

const numbers = type.split("x");

let l = numbers[0];
let c = numbers[1];

function populaLinhas(linhas = null) {
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let lines = linhas || 2;

  const arr = [];

  for (let l = 1; l <= lines; l++) {
    const tempArr = [];

    for (let i = 0; i < values.length; i++) {
      tempArr.push(`a${l}${values[i]}`);
      // tempArr.push(`*`);
    }

    arr.push(tempArr.slice(0, c));
  }
  console.log(arr)
  return arr;
}

function renderizaLinhas() {
  const lines = populaLinhas(l);

  lines.forEach((line) => {
    document.write(line.toString().replaceAll(",", " ") + "</br>");
  });
}

renderizaLinhas();

/* Método primitivo
let linha1 = ["a11", "a12", "a13", "a14", "a15", "a16", "a17", "a18", "a19"];
let linha2 = ["a21", "a22", "a23", "a24", "a25", "a26", "a27", "a28", "a29"];
let linha3 = ["a31", "a32", "a33", "a34", "a35", "a36", "a37", "a38", "a39"];
let linha4 = ["a41", "a42", "a43", "a44", "a45", "a46", "a47", "a48", "a49"];
let linha5 = ["a51", "a52", "a53", "a54", "a55", "a56", "a57", "a58", "a59"];
let linha6 = ["a61", "a62", "a63", "a64", "a65", "a66", "a67", "a68", "a69"];
let linha7 = ["a71", "a72", "a73", "a74", "a75", "a76", "a77", "a78", "a79"];
let linha8 = ["a81", "a82", "a83", "a84", "a85", "a86", "a87", "a88", "a89"];
let linha9 = ["a91", "a92", "a93", "a94", "a95", "a96", "a97", "a98", "a99"];

if (l >= 1) {
  console.log(linha1.slice(0, c));
  for(var i = 1; i <= c; i++) {
    console.log(linha1.join(" ").slice(0, c))
  }
}
if (l >= 2) {
  console.log(linha2.slice(0, c));
}
if (l >= 3) {
  console.log(linha3.slice(0, c));
}
if (l >= 4) {
  console.log(linha4.slice(0, c));
}
if (l >= 5) {
  console.log(linha5.slice(0, c));
}
if (l >= 6) {
  console.log(linha6.slice(0, c));
}
if (l >= 7) {
  console.log(linha7.slice(0, c));
}
if (l >= 8) {
  console.log(linha8.slice(0, c));
}
if (l >= 9) {
  console.log(linha9.slice(0, c));
}
*/