//  ----------------------- get full name in boarding pass-

function getFullname(firstname, surname, useFormalName) {
  if (firstname === "") {
    return "Please write your name";
  }

  if (surname === "") {
    return "Please write your surname";
  }

  if (useFormalName) {
    return "Lord" + " " + firstname + " " + surname;
  } else {
    return firstname + " " + surname;
  }
}
const fullname1 = getFullname("candy ", "kobli", false);
const fullname2 = getFullname("kobli ", "candy", true);

console.log(fullname1);
console.log(fullname2);

//  ------------------------get an event date------------------------

const wday = ["sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getEventWeekday(day) {
  const todaydate = new Date().getDay();
  const twday = wday[todaydate];
  const evday = (todaydate + day) % 7;
  return wday[evday];
}

console.log(getEventWeekday(5));
console.log(getEventWeekday(4));

// --------------------------choose the right outfit for the right weaver--------

function weatherWear(temperature) {
  if (temperature <= 7) {
    return "Winter time! Please wear a puffy jacket";
  } else if (temperature < 18) {
    return "Just wear a coat that will keep you warm";
  } else if (temperature < 25) {
    return "A t-shirt will be ok";
  } else {
    return "You decide!";
  }
}
console.log(weatherWear(12));

// -----------------------------------------
