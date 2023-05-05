let myName;
let toDoArray = [];

function getReply(Message) {
  let myMessage = Message.toLocaleLowerCase();
  let myMessageArray = myMessage.split(" ");
  let answer;
  switch (Message) {
    case myMessage.includes("my name is") && myMessageArray[i] == "is":
      for (let i = 0; i < myMessageArray.length; i++) {
        // ---------------------Hello my name is...-----------------
        myName =
          myMessageArray[i + 1].charAt(0).toUpperCase() +
          myMessageArray[i + 1].slice(1);
        answer = `Nice to meet you ${myName}`;
      }
      break;
    // --------------------What is my name--------
    case myMessage.includes("What is my name?"):
      answer = `Your name is ${myName}`;

      break;

    // ---------------------add on my todo-------------------
    case myMessage.includes("Add"):
      let toAdd = myMessage.match("Add(.*)to ");
      toDoArray.push(toAdd[1]);
      answer = `${toAdd[1]} + "added to your todos`;
      break;

    // --------------------Remove fishing from my todo--------------------
    case myMessage.includes("Remove"):
      let toRemove = myMessage.match("Remove(.*)from")[1];
      for (rem = 0; rem < toDoArray.length; rem++) {
        if (toDoArray[rem] === toRemove) {
          delete toDoArray[rem];
          answer = `removed ${toRemove}from your todo`;
        }
      }
      break;
    // --------------- What is on my todo?--------------------
    case myMessage.includes("What is on my todo?"):
      answer = `You have ${toDoArray.length} todos
            ${toDoArray.slice(0, -1).join(", ")} +
            and ${toDoArray.slice(-1)}`;
      break;
    // -------------------------What day is it today?----
    case myMessage.includes("What day is it today?"):
      const today = Date();
      let day = today.getDate();
      let month = today.getMonth() + 1;
      let year = today.getFullYear();
      answer = `Today is ${day}. of ${month}  ${year}`;
      break;
    // -------------------what is calculation(+, -, *, /) ------------
    case myMessage.includes("+" || "-" || "*" || "/"):
      matches = myMessage.match(/\d+/g);

      const number1 = Number(matches[0]);
      const number2 = Number(matches[1]);

      if (myMessage.includes("+")) {
        let addition = number1 + number2;
        answer = `The result is: ${addition}`;
      } else if (myMessage.includes("-")) {
        let soustraction = number1 - number2;
        answer = `The result is: ${soustraction}`;
      } else if (myMessage.includes("*")) {
        let multiplication = number1 - number2;
        answer = `The result is: ${multiplication}`;
      } else if (myMessage.includes("/")) {
        let division = number1 - number2;
        answer = `The result is: ${division}`;
      }
      break;
    // ------------------Set a timer for 4 minutes-----------------------

    case myMessage.includes("Set a timer for"):
      matches = myMessage.match(/\d+/g);
      const timer = Number(matches[0]);
      answer = `Timer set for" ${timer} minutes`;
      var time = number1 * 60,
        count = document.getElementById("count"),
        tmp = time;

      setInterval(function () {
        var c = tmp--,
          m = (c / 60) >> 0,
          s = c - m * 60 + "";
        count.textContent =
          "Registration closes in " + m + ":" + (s.length > 1 ? "" : "0") + s;
        tmp !== 0 || (tmp = time);
      }, 1000);
      break;
    case myMessage.includes("I am hungry"):
      answer = `Just Eat your best friend`;
      window.open("https://www.justeat.dk");
      break;
  }
}

console.log(getReply("Hello my name is Candy")); // "Nice to meet you benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Add singing in the shower to my todo")); // "fishing added to your todo"
console.log(getReply("Remove fishing from my todo")); // "fishing added to your todo"
console.log(getReply("What is on my todo?")); // "fishing added to your todo"
console.log(getReply("What day is it today?")); // "fishing added to your todo"
console.log(getReply("what is 4*9")); // "fishing added to your todo"
console.log(getReply("Set a timer 4 for")); // "fishing added to your todo"
console.log(getReply("I am hungry")); // "fishing added to your todo"
