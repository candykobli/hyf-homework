const a = new Object();
const a1 = {};
console.log(
  new Promise((resolve, reject) => {
    resolve("Hello");
  })
);

async function myAsyncFunction() {
  return 5;
}
const myAsyncArrow = async () => {
  return 5;
};

function waitSeconds(n) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("null"), 1000 * n);
  });
}
async function myAsyncFunction() {
  try {
  } catch (err) {}
  const msg = await waitSeconds(5);
  console.log(msg);

  myAsyncFunction();
}

const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hello"), 4 * 1000);
});

async function newPromise1() {
  const result = await newPromise;
  console.log(result);
}
newPromise1();

const Promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Something is not right!")), 4 * 1000);
});

async function newPromise2() {
  const result = await Promise2;
  console.log(result);
}
newPromise2();

// -----------------------------------------------------------------------------
const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

function YesNoFail4Seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const number = randomNumber(0, 2);
      if (number === 1) {
        resolve("yes");
      } else if (number === 2) {
        resolve("no");
      } else {
        reject(new Error("Number is 0"));
      }
    }, 7 * 1000);
  });
}

YesNoFail4Seconds()
  .then((data) => {
    console.log(`The answer is ${data}`);
  })
  .catch((error) => {
    console.log(error);
  });

async function myPromise() {
  await waitSeconds(3);
  return Promise.resolve("yes");
}

async function handlePromise() {
  console.log(await myPromise());
}
handlePromise;
