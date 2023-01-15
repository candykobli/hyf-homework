// Calculate the human age

const humanYearOfBirth = document.getElementById("humanYearOfBirth");
const humanYearFuture = document.getElementById("humanYearFuture");
const showTheYear = document.getElementById("showTheYear");
const calculateAgeButton = document.getElementById("calculateAgeButton");

function calculateAge() {
  const humanAge = humanYearFuture.value - humanYearOfBirth.value;
  showTheYear.classList.add("show");
  showTheYear.innerHTML = "You will Be " + humanAge + " years old in " + humanYearFuture.value;
  return humanAge;
}

// Calculate the dog age

const dogBirthYear = document.getElementById("dogBirthYear");
const dogYearFuture = document.getElementById("dogYearFuture");
const dogYears = document.getElementById("dogYears");
const humanYears = document.getElementById("humanYears");
const calcHumanDogAge = document.getElementById("calcHumanDogAgeButton");
const showAge = document.getElementById("showAge");

function calculateAgeofDog() {
  const age = dogYears.checked
    ? (dogYearFuture.value - dogBirthYear.value) * 7 + " Dogs Year"
    : dogYearFuture.value - dogBirthYear.value + " Human Years";
  showAge.innerHTML = "Your dog's old is : " + age;
  showAge.classList.add("show");
  return age;
}

// the house price

const width = document.getElementById("width");
const depth = document.getElementById("depth");
const height = document.getElementById("height");
const gardenSize = document.getElementById("gardenSize");
const priceButton = document.getElementById("priceButton");

const rightPrice = document.getElementById("rightPrice");

priceHouseButton.addEventListener("click", rightPriceForHouse);

function rightPriceForHouse() {
  // the price for the house without garden:
  const houseprice =

    width.value * depth.value * height.value * 2.5 * 1000 +
    gardenSize.value * 300;
  rightPrice.innerHTML =
    "The right price for the house is : " + houseprice;

  rightPrice.classList.add("show");

  return houseprice;
}

// Ez Namey (Startup name generator) Optional

let firstNamesArray = ["honey", "love", "sweet", "Yammmmiy", "lolo"];
let secondNamesArray = ["Gary", "ismailo", "Nana", "inyea", "soso"];

const randomNumber = Math.floor(Math.random() * 10) + 0;

// write down the output from the console, then check if you are right or not by putting them in the console
console.log(typeof 3);
console.log(typeof -33);
console.log(typeof "3");
const threeConst = 3;
console.log(threeConst);
let threeLet = 3;
console.log(threeLet);
console.log(typeof 'console.log("console.log(console.log(""))")');
console.log(typeof typeof 45);
const names = ["benjamin", "Christopher"];
console.log(typeof names[0]);
console.log(typeof [3][0]);
console.log(typeof true);
