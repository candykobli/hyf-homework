const spAnimals = [
  "Emotional Bear",
  "Curious Cat",
  "Sentive Deer",
  "Optimistic Dove",
  "Wise Dolphin",
  "Spiritual Elephant",
  "Goal-Oriented Horse",
  "Emphatic Hawk",
  "Leading Lion",
  "Intuitive Tiger",
];

let nameUser = [];
function getInput() {
  let userName = document.getElementById("fname").value;
  const randomElement = spAnimals[Math.floor(Math.random() * spAnimals.length)];
  const randomElement2 =
    spAnimals[Math.floor(Math.random() * spAnimals.length)];

  if (userName === "" || userName === " ") {
    alert("Please, enter your name");
  } else {
    alert(userName + " - The " + randomElement);
  }
  nameUser.push(document.getElementById("fname").value);
}

function tryAgain() {
  const randomElement = spAnimals[Math.floor(Math.random() * spAnimals.length)];
  const randomElement2 =
    spAnimals[Math.floor(Math.random() * spAnimals.length)];
  alert(nameUser + " - The " + randomElement2) ? "" : location.reload();
}
