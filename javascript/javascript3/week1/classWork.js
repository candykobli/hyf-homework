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
    for (let i = 0; i < astronaut.length; i++) {
      console.log(astronaut[i].name);
    }
  } catch (err) {
    console.log(err);
  }
}
astronautsInSpace();
