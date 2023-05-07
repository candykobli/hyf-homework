const myFile = {
  car: "RangeRover",
  country: "Mexico",
  music: "Zouglou",
  pets: "Labrador",
  movie: "Scandal",
};

var myJsonFile = JSON.stringify(myFile);
console.log(myJsonFile);

async function bankHolidaysInUK() {
  try {
    const bankHolidaysApi = await fetch(
      "https://www.gov.uk/bank-holidays.json"
    );
    const bankHolidays = await bankHolidaysApi.json();
    console.log(bankHolidays);
  } catch (err) {
    console.log(err);
  }
}
bankHolidaysInUK();
/* This API is about Bank holidays in UK. It is structured by states: England and Wales, North Ireland and Scotland
These holidays are between 2018 and 2025. It is an object with keys and values. And one of the keys has a value which is an array of objects
 */
