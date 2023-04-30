let personName;
const toDoArray = [];
let response;

function getReply(myComand) {
  let myMessage = myComand;
  let myMessageArray = myMessage.split(" ");
  for (let i = 0; i < myMessageArray.length; i++) {
    if (myMessage.includes("my name is") && myMessageArray[i] === "is") {
      personName =
        myMessageArray[i + 1].charAt(0).toUpperCase() +
        myMessageArray[i + 1].slice(1);
      console.log(personName);
      console.log("Nice to meet you " + personName);
    }
    if (myMessage.includes("What is my name")) {
      console.log(personName);
      console.log("Your name is " + personName);
    }
  }
  if (myMessage.includes("Add to")) {
    let toAdd = myMessage.match("Add(.*)to");
    console.log(toAdd);
    toDoArray.push(toAdd);
    console.log(toAdd + " added to your todos");
  }

  if (myMessage.includes("Remove from my todo")) {
    let toRemove = myMessage.match("Remove(.*)from");
    for (rem = 0; rem < toDoArray.length; rem++) {
      if (toDoArray[rem] === toRemove) {
        delete toDoArray[rem];
        console.log("Removed " + toRemove + " from your todo");
      }
    }
  }
}

// getReply("Hello my name is Candy");
// getReply("What is my name");
getReply("Add fishing to my todo");
