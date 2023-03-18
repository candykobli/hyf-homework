// Item array removal-----------------------

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";
for (i = 0; i < names.length; i++) {
  if (nameToRemove === names[i]) {
    delete names[i];
  }
}
console.log(names);

// When will we be there??--------------------------

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function mySpeed(Information) {
  // v=d/t, t=d/v
  return (
    Math.trunc(
      travelInformation.destinationDistance / travelInformation.speed
    ) +
    " hours and " +
    Math.round(
      60 *
        (travelInformation.destinationDistance / travelInformation.speed -
          Math.trunc(
            travelInformation.destinationDistance / travelInformation.speed
          ))
    ) +
    " minutes"
  );
}

const travelTime = mySpeed(travelInformation);
console.log(travelTime);

// Series duration of my life---------------------------

const seriesDurations = [
  {
    title: "24h Chrono",
    days: 10,
    hours: 1,
    minutes: 52,
  },
  {
    title: "Scandal",
    days: 3,
    hours: 16,
    minutes: 51,
  },
  {
    title: "The Good Doctor",
    days: 13,
    hours: 10,
    minutes: 8,
  },
];
const lifespan = 80; // lifespan in days
let perAverageLifespanInDays = 100 / (lifespan * 365);
let perTimeSerie1 =
  (Object.values(seriesDurations[0])[1] +
    Object.values(seriesDurations[0])[2] / 24 +
    Object.values(seriesDurations[0])[3] / (24 * 60)) *
  perAverageLifespanInDays;
let perTimeSerie2 =
  (Object.values(seriesDurations[1])[1] +
    Object.values(seriesDurations[1])[2] / 24 +
    Object.values(seriesDurations[1])[3] / (24 * 60)) *
  perAverageLifespanInDays;
let perTimeSerie3 =
  (Object.values(seriesDurations[2])[1] +
    Object.values(seriesDurations[2])[2] / 24 +
    Object.values(seriesDurations[2])[3] / (24 * 60)) *
  perAverageLifespanInDays;

function logOutSeriesText() {
  // write code here

  console.log(
    Object.values(seriesDurations[0])[0] +
      " took " +
      perTimeSerie1.toFixed(3) +
      "% of my life."
  );
  console.log(
    Object.values(seriesDurations[1])[0] +
      " took " +
      perTimeSerie2.toFixed(3) +
      "% of my life."
  );
  console.log(
    Object.values(seriesDurations[2])[0] +
      " took " +
      perTimeSerie3.toFixed(3) +
      "% of my life."
  );
  console.log(
    "In total that is " +
      (perTimeSerie1 + perTimeSerie2 + perTimeSerie3).toFixed(3) +
      " % of my life"
  );
}

logOutSeriesText();

// NOnoN0nOYes (Note taking app)------------------------------

const notes = [];

function saveNotes(content, id) {
  notes.push({ content, id });
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);

function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }
}
const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      "The note with id:" +
        notes[i].id +
        " has the following note text: " +
        notes[i].content
    );
  }
}
logOutNotesFormatted();

// Unique feature------------------------------------

function seeTime(activityDate) {
  for (let i = 0; i < notes.length; i++) {
    date = new Date();
    const todaydate = new Date(date.getTime());
    if (notes[i].id === activityDate && activityDate === 1) {
      const nextWednesday = new Date(
        todaydate.setDate(
          todaydate.getDate() + ((7 - todaydate.getDay() + 3) % 7 || 7)
        )
      );

      console.log("Next activty (", notes[i].content, ") on ", nextWednesday);
    }
    if (notes[i].id === activityDate && activityDate === 2) {
      const nextFriday = new Date(
        todaydate.setDate(
          todaydate.getDate() + ((7 - todaydate.getDay() + 5) % 7 || 7)
        )
      );

      console.log("Next activty (", notes[i].content, ") on ", nextFriday);
    }
  }
}
seeTime(2);

// Adding an activity-----------------------------------------------

const activities = [];
function addActivity(date, activity, duration) {
  activities.push({ date, activity, duration });
}
addActivity("18/03-23", "Youtube", 30);
addActivity("18/03-23", "Facebook", 50);
addActivity("18/03-23", "Linkedin", 40);

// Show my status------------------------------------------

function showStatus(activities) {
  const usageLimit = 120;
  const numActivities = activities.length;
  let totalDuration = 0;
  for (let i = 0; i < numActivities; i++) {
    totalDuration += activities[i].duration;
  }
  if (numActivities === 0) {
    console.log("Add some activities before calling showStatus");
  } else if (totalDuration > usageLimt) {
    console.log(
      "You have added " +
        numActivities +
        " activities. They amount to " +
        totalDuration +
        " min. of usage"
    );
    console.log("You have reached your limit, no more smartphoning for you!");
  } else {
    console.log(
      "You have added " +
        numActivities +
        " activities. They amount to " +
        totalDuration +
        " min. of usage"
    );
  }
}
showStatus(activities);
