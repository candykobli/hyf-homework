//Global scope
const globalVar = "I am a global variable";
function myFunction() {
  const localVar = "I am a local variable";
  console.log(globalVar);
}

const normalArray = [1, 2, 3, 4, 5, 6];
const oddArray = [3, 7, 9, 1, 5];
function sumofEvenNumbers(numbers) {
  let sum = 0;
  function checkIfEven(number) {
    return number % 2 === 0;
  }
  for (let i = 0; i < numbers.length; i++) {
    if (checkIfEven(numbers[i])) {
      sumEven += numbers[i];
    } else {
      sumOdd += numbers[i];
    }
  }
  return [sumEven, sumOdd];
  return {
    sumEven: sumEven,
    sumOdd: sumOdd,
  };
}

function displayNumber(even, odd) {
  return `My even number ${even}, My odd number ${odd}`;
}
const result = sumofEvenNumbers(normalArray);
const oddResults = sumofEvenNumbers(oddArray);
console.log(displayNumber(result.sumEven, result.sumOdd));
console.log(displayNumber(oddResults.sumEven, oddResults.sumOdd));
console.log(sumofEvenNumbers(oddArray));

// arrays - it is an ordered list
const array = [4, 5, 8, 2, 5];
console.log(array[array.length - 1]);
array.push("yes");
array.pop();
array.shift();
array.unshift();
const isInArray = array.includes(3);
const cutArray = array.slice(0, 2);
const spliceArray = array.splice(0, 2);
const joinedArray = array.join(",");
const nested = [
  ["name", "candy"],
  ["name", "Rene"],
  ["name", "Sara"],
];
for (item of nested) {
  console.log(item);
}

// for (let x of nested) {
//   const x = nested[i];
//   console.log(x[1]);
// }
// for (leti = 0; i < nested.length; i++) {
//   const x = nested[i];
//   console.log(x);
// }

// objects: collection (library) ----------------------
const obj = {
  name: "Colinperson",
  age: 25,

  gender: "male",
  isMale: true,
  friends: ["Marie", "Candy", "Aya"],
  secretId: "4728",
  description: {
    face: "round",
    height: 195.5,
  },
  dateOfBirth: 12 - 03 - 1999,
  address: {
    city: "Copenhagen",
    street: "Bagsværd",
    house: 12,
  },
  "some-property": "I am confusing",
  personSays: function () {
    console.log("I say HI!");
  },
};
for (let item in person) {
  console.log(item);
}

person.hasAPat = true;
delete person.secretId;
console.log(person["dateOfBirth"]);
console.log(person["some-property"]);
// console.log(person.name);
// console.log(person.description.height);
// console.log(person.friends[2]);
// person.personSays();

// Math.random();
// Math.floor();
// Math.round();
// console.log(new Date().getDate());
// console.log();
// console.error("I am an error");

// const arrayOfObjects=[person, person, person, person]
const wiredObject = {
  0: "I am first",
  1: "I am second",
  2: "I am third",
  length: 3,
};
const justAnArray = ["I am first", "I am second", "I am third"];
for (let i = 0; i < wiredObject.length; i++) {
  console.log(wiredObject[i]);
}

const str1 = "string";
const str2 = "string";

const obj1 = {
  name: "Tom",
};
const obj2 = {
  name: "Tom",
};
const obj3 = obj1;
const arr1 = ["value"];
const arr2 = ["value"];

console.log(str1 === str2);
console.log(obj1 === obj2);
console.log((obj1 = obj3));
