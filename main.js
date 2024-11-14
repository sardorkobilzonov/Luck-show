const telEl = document.querySelector(".tel");
const btnEl = document.querySelector(".btn");

console.log(telEl);

const TEL_MEMBERS = [
  "+998 71 203 12 12 Evos",
  "+998 78 129 70 00 KFC",
  "+998 78 150 00 30 Oqtepa lavash",
  "+998 71 200 54 00 Max Way",
  "+998 71 207 20 70 LOOOK",
  "+998 21 200 42 42 Les Ailes",
  "+998 71 200 22 11 Feed Up",
  "+998 95 979 01 11 Wendy's",
  "+998 99 382 47 07 BirZOOM",
  "+998 98 277 13 12 Yaponamama",
];

function getRandomNmber() {
  btnEl.setAttribute("disabled", true);

  const interval = setInterval(() => {
    let randomNumber = Math.floor(Math.random() * TEL_MEMBERS.length);
    telEl.innerHTML = TEL_MEMBERS[randomNumber];
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    btnEl.removeAttribute("disabled");
  }, 2500);
}

let hello = prompt("Assalomu aleykum");
let name = prompt("Ismingizni kiriting");
let good = alert(
  "Sizni tabriklaymiz siz bizning 10 tadan iborat bolgan FAST FOOD nomerlari oyinchisiga aylandingiz"
);
let ques = alert(
  "Bizning oyinimizda 10 FAST FOOD nomerlari random orqli aniqlanadi "
);
let telNum = prompt(
  "Bizning oyinimizda ishtrok etishni hohlasangiz nomeringizni kiritin. "
);

let welcome = alert("Rahmat");

//Ozim uchun yozib qaogandim uy vazifaga aloqasi yoq
// setInterval(() => {
//     //   console.log("setInterval");
//     // }, 1000);

//     // setTimeout(() => {
//     //   console.log("setTimeout");
//     // }, 1000);
