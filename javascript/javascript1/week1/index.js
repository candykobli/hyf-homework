// Goodboy-Oldboy (A dog age calculator)
let dogYearOfBirth = parseInt(
  prompt("Enter the dog year of birth, please:"),
  10
);
let dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears) {
  console.log("Your dog will be " + (dogYear *= 7) + " dog years old in 2027");
} else {
  console.log("Your dog will be " + dogYear + " human years old in 2027");
}

// Housey pricey (A house price estimator)
let houseWidth = 8;
let houseHeight = 10;
let houseDepth = 10;
const gardenSizeInM2 = 100;
let volumeInMeters = houseWidth * houseHeight * houseDepth;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if (housePrice < 2500000) {
  console.log(
    "The house price is " +
      housePrice +
      ". You should normally pay less than 2 500 000 for this house"
  );
} else {
  console.log(
    "The house price is " +
      housePrice +
      ". You are paying the normal price for this house"
  );
}

let houseWidth1 = 5;
let houseHeight1 = 8;
let houseDepth1 = 11;
const gardenSizeInM2_1 = 70;

if (housePrice < 1000000) {
  console.log(
    "The house price is " +
      housePrice +
      ". You should normally pay less than 1 000 000 for this house"
  );
} else {
  console.log(
    "The house price is " +
      housePrice +
      ". You are paying the normal price for this house"
  );
}

// Ez Namey (Startup name generator) Optional

let firstWords = [
  "Mug",
  "MCA",
  "Jupiter",
  "Mamie",
  "Mummies",
  "Candy",
  "Ivoire",
  "Tutti",
  "Make-Up we",
  "Your good",
];
let secondWords = [
  "Startup",
  "Consulting",
  "Advisory",
  "Take Away",
  "Catering",
  "Fastfood",
  "Corporation",
  "Frutti",
  "Artist",
  "Dresser",
];

function random_item(items) {
  return items[Math.floor(Math.random() * items.length)];
}

startupName = random_item(firstWords) + " " + random_item(secondWords);

console.log(
  "The startup: " +
    startupName +
    " contains " +
    startupName.length +
    " characters"
);
