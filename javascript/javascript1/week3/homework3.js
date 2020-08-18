const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';
let i
let j=names.length

for (i = 0; i<j; i++){
    if (nameToRemove === names[i]){
        names.splice(i, 1);
        break;
    }
}
console.log(names);


//Write a function where you speficy your speed in km/h and how far you have to go in km. 
// The function has to return the time it will take to arrive at your destination. 
// The time should be formatted like this: 3 hours and 34 minutes. 
// Hint: For formatting your best friend is Google!-----------------

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
 };

 const time=(travelInformation.destinationDistance/travelInformation.speed);
console.log(time)


function travelTime(){
 
  return Math.floor(time) + " hour(s) and " + Math.round((time - Math.floor(time))*60) + " minute(s).";

 }
console.log(`the travel time is ${travelTime(time)}`); // 4 hours and 42 minutes

// --------------Series duration of my life------------------------


const seriesDurations = [
  {
    title: 'Scandal',
    days: 3,
    hours: 16,
    minutes: 52,  
  },

  {
    title: 'Greanleaf',
    days: 5,
    hours: 10,
    minutes: 52,
  },
  {
    title: 'Trollhunters',
    days: 6,
    hours: 8,
    minutes: 32,
  }
]
const myAge=37
let myAgeInMinut=37*365*24*60
let timeserie1=(seriesDurations[0].days*24*60)+(seriesDurations[0].hours*60)+seriesDurations[0].minutes
let timeserie2=(seriesDurations[1].days*24*60)+(seriesDurations[1].hours*60)+seriesDurations[1].minutes
let timeserie3=(seriesDurations[2].days*24*60)+(seriesDurations[2].hours*60)+seriesDurations[2].minutes

console.log(seriesDurations[0].title)

console.log(myAgeInMinut)

function timeInLife(timeSerie,myAge){
    percentage = (timeSerie/myAgeInMinut).toFixed(4) *100;
    return percentage;
}

const durationSerie1=timeInLife(timeserie1,myAge);
console.log(`${seriesDurations[0].title} took ${durationSerie1}% of my life.`);
const durationSerie2=timeInLife(timeserie2,myAge);
console.log(`${seriesDurations[1].title} took ${durationSerie2}% of my life.`);
const durationSerie3=timeInLife(timeserie3,myAge);
console.log(`${seriesDurations[2].title} took ${durationSerie3}% of my life.`);



// -----------------------------------------------
const notes=[]
function saveNote(content, id) {
  notes.push({
      content ,
      id,
  })
}

saveNote('Pick up groceries', 1);
saveNote('Do laundry', 2);

console.log(notes);

function getNote(id) {
for(let i=0; i < notes.length; i++){
    if(notes[i].id === id){
    return  notes[i]
  }
  else {
     return `error: id is not found`
  }
}
}
const firstNote = getNote(1); 
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

function logOutNotesFormatted() {
for(let i=0; i < notes.length; i++){
    console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`)
  }
  }

logOutNotesFormatted(); 


// -----------------------------------------------------------------------------------------


const activities = [];
function addActivity(date, activity, duration)
{
    let action = 
    {
     date :  date,
     activity : activity,
     duration : duration,
    };

    if(typeof(date) === "string" && typeof(activity) === "string" && typeof(duration) === "number"){
    activities.push(action);
    }
    else{
          console.log("types doesn't match");
    }
}
addActivity('14/8-20', 'Youtube', 30);
console.log(activities);

function showStatus(activities){
    let num = activities.length;
    let totalDuration = 0;
    let totaldurationlimit = 100;
    for(let i=0;i<num;i++)
        {
            totalDuration += activities[i].duration; 

        }
        console.log(`You have added ${activities.length} activites.They amount ${totalDuration} min. of usage.`)
    if(totalDuration=0){
      console.log('Add some activities before calling showStatus')
    }else if(totalDuration > totaldurationlimit){
        console.log('You have reached your limit, no more smartphoning for you!');
    }
    else{
        console.log('You can watch for a while more');
    }
  }
  showStatus(activities)


