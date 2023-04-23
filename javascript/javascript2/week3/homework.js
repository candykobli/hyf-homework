setTimeout(function littletext() {
  console.log("Called after 2.5 seconds");
}, 2500);

function textToLog(delay, stringToLog) {
  setTimeout(function littletext() {
    console.log(stringToLog);
  }, delay * 1000);
}
textToLog(3, "Bonjour");
textToLog(5, "Comment ca va?");

const earthLogger = function earthFunction() {
  console.log("Earth");
};

const saturnLogger = function saturnFunction() {
  console.log("Saturn");
};
function planetLogFunction(callFunction) {
  callFunction();
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.querySelector("#find-me").addEventListener("click", geoFindMe);

function runAfterDelay(delay, callback) {
  setTimeout(callback, delay * 1000);
}
runAfterDelay(4, function () {
  console.log("should be logged after 4 seconds");
});

window.addEventListener("dblclick", (event) => {
  console.log("Double click");
  // Double-click detected
});

function jokecreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) {
    console.log(logFunnyJoke);
  } else {
    console.log(logBadJoke);
  }
}
jokecreator(true, "hahahahahahah", "grrrrrrrrr");

function jokecreator2(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  return shouldTellFunnyJoke ? logFunnyJoke : logBadJoke;
}

console.log(jokecreator2(true, "hahahahahahah", "grrrrrrrrr"));
console.log(jokecreator2(false, "hahahahahahah", "grrrrrrrrr"));
console.log(jokecreator2(null, "hahahahahahah", "grrrrrrrrr"));

const myArray = [
  function add() {
    const a = 3;
    const b = 4;
    return a + b;
  },
  function () {
    return "My name is Candy";
  },
  function jokecreator(shouldTellFunnyJoke) {
    return shouldTellFunnyJoke ? "hahahahahahah" : "grrrrrrrrr";
  },
];
console.log(myArray[2](true));

// --------------------------------------Function as a variable--------------

var myFunction = function myText(element) {
  console.log(element);
};
myFunction("Hello friends");

function myText(element) {
  console.log(element);
}
myFunction("Hello friends");
myText("Hello Didi");

var myObject = {
  property: function myText(element) {
    console.log(element);
  },
};
myObject.property("Good morning");

// ----------------------------------The fastest presser in this realm------------------
function getInput() {
  document.getElementById("inputId").value;
}
var gameTime = document.getElementById("inputId").value;
setTimeout(function () {
  console.log("Hello");
}, gameTime);
