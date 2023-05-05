/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings
 * @returns {array} Array containing the listing objects
 */
function generateListings(numberOfListings) {
  const listings = [];

  const listingType = ["House", "Apartment", "Shed", "Dorm", "Farm"];
  const listingFacilities = [
    "Parkering",
    "Elevator",
    "Altan",
    "Have",
    "Husdyr",
  ];

  for (let i = 0; i < numberOfListings; i++) {
    const listing = {};
    const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
    const numberOfFacilities = randomIntFromInterval(
      1,
      listingFacilities.length - 1
    );
    const facilities = [];
    for (let i = 0; i < numberOfFacilities; i++) {
      const randomIndexFacilities = randomIntFromInterval(
        0,
        listingFacilities.length - 1
      );
      const randomFacility = listingFacilities[randomIndexFacilities];

      if (!facilities.includes(randomFacility)) {
        facilities.push(randomFacility);
      }
    }

    listing.type = listingType[randomTypeIndex];
    listing.facilities = facilities;
    listing.price = randomIntFromInterval(1, 10000);
    listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
    listing.size = randomIntFromInterval(12, 1000);
    listing.img = `https://loremflickr.com/200/200/${listing.type}`;

    listings.push(listing);
  }

  return listings;
}

generateListings(20);
console.log(generateListings(37));
const listings = generateListings(37);
listings.forEach((item) => console.log(item.size));
const listOfPrices = listings.map((item) => item.price);
console.log(listOfPrices);
const cheapPrice = listings.filter((item) => item.price < 2000);
console.log(cheapPrice);
const expensive = listOfPrices.filter((item) => item > 7000);
console.log(expensive);
const haveParking = listings.filter((item) =>
  item.facilities.includes("Parkering")
);
console.log(haveParking);

const filter = {
  type: "Farm",
  minSize: 150,
};

const farmListings = filterListings(listings, filter);
function filterListings(listings, filter) {
  return listings.filter((item) => {
    if (item.type !== filter.type) {
      return false;
    }

    return true;
  });
}
console.log(farmListings);

const filter2 = {
  type: "farm",
  minPrize: 1500,
  houseFacility,
  hasGarden: true,
  size,
};

function filterListings1(listings, filter) {
  //   return listings.filter((item) => {
  //     if (item.type !== filter.type || item.price < filter.minPrize) {
  //       return false;
  //     }

  //     return true;
  //   });
  return listings.filter(
    (item) =>
      item.type.toLowerCase() === filter.type.toLowerCase() &&
      item.price >= filter.minPrize
  );
}

const cheapFarmListings = filterListings1(listings, filter2);
console.log(cheapFarmListings);
