const meal = {
  meal1: {
    OrderName: "Kebab",
    OrderId: "001",
    Price: 50,
    ListOfDrinks: { drk1: "Cola", drk2: "Tea", drk3: "Cofee" },
    OrderExtras: { ext1: "Frie potatos", ext2: "Salad" },
  },
  meal2: {
    OrderName: "Pizza",
    OrderId: "002",
    Price: 75,
    ListOfDrinks: { drk1: "Cola", drk2: "Tea", drk3: "Cofee" },
    OrderExtras: { ext1: "Sup", ext2: "Salad" },
  },
};

const mealJson = JSON.stringify(meal);
console.log(mealJson);
// (async () => {
//   // anonymous async function
// })();
async function astronautsInSpace() {
  try {
    const astronautsData = await fetch(
      "http://api.open-notify.org/astros.json"
    );
    const astronauts = await astronautsData.json();
    const astronaut = astronauts.people;
    const astrName = astronaut.name;
    const numberAstronauts = astronauts.number;
    const myParag = document.getElementById("mytext");
    const listAstronauts = document.createElement("p");
    listAstronauts.innerHTML = `There are ${numberAstronauts} astronauts in space, they are:`;
    myParag.appendChild(listAstronauts);
    var ulelement = document.createElement("ul");
    for (let i = 0; i < astronaut.length; i++) {
      ulelement.innerHTML += "<li>" + astronaut[i].name + "</li>";
    }
    myParag.appendChild(ulelement);
  } catch (err) {
    console.log(err);
  }
}
astronautsInSpace();

async function dogFanApp() {
  try {
    const dogList = await fetch("https://dog.ceo/api/breeds/image/random");
  } catch (error) {
    console.log(error);
  }
}
