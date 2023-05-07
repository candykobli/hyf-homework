// Flight booking fullname function----------------

function getFullname(firstname, surname, useFormalName) {
  if (firstname === "") {
    return "Please enter your firstname";
  }
  if (surname === "") {
    return "Please enter your surname";
  }

  if (useFormalName === true) {
    return "Lord " + firstname + " " + surname;
  } else {
    return firstname + " " + surname;
  }
}
const fullname1 = getFullname("Joachim", "Kobli", true);
const fullname2 = getFullname("Loddie", "Kobli", false);
console.log(fullname1);
console.log(fullname2);

/* Normally useFormalName  is a checkbox. So the full name will appear without anything.
If we have to make a difference between men and women, I think i will add one more parameter: sex. 
If sex = woman, and useFormalName = true, so the formal name will start with Lady,
if it is a man, the formal name will start with lord*/

// Event application--------------------------------------------

function getEventWeekday(weekday) {
  let eventDate = new Date();
  eventDate.setDate(eventDate.getDate() + weekday);
  return eventDate;
}
console.log(getEventWeekday(15).toLocaleString("en-us", { weekday: "long" }));

// Weather wear---------------------------------------

function weatherWear(temparture) {
  if (temparture < 15) {
    return "You should wear a sweater, a fleece jacket, gloves, a benny and a warm scarf!";
  }
  if (temparture >= 15 && temparture <= 20) {
    return "You should wear a raincoat and wellies and always have an umbrella with you!";
  }
  if (temparture < 20) {
    return "Yesssss! It is summer!!! Everyone in shorts and bikinis. We are going to the beach!!!";
  }
}
const clothesToWear = weatherWear(18);
console.log(clothesToWear);

// Student manager------------------------------------

const class07Students = [];
function addStudentToClass(studentName) {
  // You write code here

  if (class07Students.length === 7 && studentName !== "Queen") {
    class07Students.pop;
    return "Cannot add more students to class 07";
  } else if (class07Students.includes(studentName)) {
    return "Student" + studentName + " is already in the class";
  } else if (studentName === "Queen" && class07Students.length === 6) {
    class07Students.pop;
    class07Students.push(studentName);
  } else if (studentName === "") {
    class07Students.pop;
    return "Please, write the student name.";
  } else class07Students.push(studentName);
}
addStudentToClass("Candy");
addStudentToClass("Ruth");
addStudentToClass("Didi");
addStudentToClass("Loddie");
addStudentToClass("Marie");
addStudentToClass("Jonas");
addStudentToClass("Queen");
addStudentToClass("Candy");

console.log(class07Students);
function getNumberOfStudents() {
  // You write code here
  return class07Students.length;
}

// Candy helper--------------------

const boughtCandyPrices = [];
function addCandy(candyType, weight, price) {
  boughtCandyPrices.push(candyType, weight * price);
}
addCandy("Sweet", 20 * 0.5);
addCandy("Chocolate", 10 * 0.7);
addCandy("Toffee", 15 * 1.1);
addCandy("Chewing-gum", 10 * 0.03);

console.log(boughtCandyPrices);
var ttlCandyPrice = 0;
// for (i = 0; i < boughtCandyPrices.length; i++) {
//   ttlCandyPrice += boughtCandyPrices;
// }
// return ttlCandyPrice;

const amountToSpend = Math.random() * 100;

function canBuyMoreCandy() {}
