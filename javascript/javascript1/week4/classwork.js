let i;
let fib = [0, 1];
function fibonacci(number) {
  for (i = 2; i < number; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    fib.push(fib[i]);
  }
  fib.pop();
  console.log(fib);
  console.log(fib[number - 1]);
}
fibonacci(5);
// -------------------------------------------------

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz();

// -----------------------------------------------
const text = prompt("Enter your text, please");
positiveWords = ["good", "super", "happy", "awesome"];
negativeWords = ["bad", "boring", "unhappy", "sad"];

function getSentimentScore(myText) {
  myText = text.split(" ");
  console.log(myText);
}
