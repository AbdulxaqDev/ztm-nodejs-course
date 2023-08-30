const EventEmitter = require("events");
const celebrity = new EventEmitter();

celebrity.on("win", (city) => {
  console.log("Won the race at", city);
});

celebrity.on("lose", (city) => {
  console.log("Lose the race at", city);
});

celebrity.emit("win", "Madrod");
celebrity.emit("lose", "Amsterdam");
celebrity.emit("win", "Istanbul");
celebrity.emit("lose", "Moscow");

const readLine = require("readline");
const { stdin: input, stdout: output } = process;
const readLineInterface = readLine.createInterface({ input, output });

readLineInterface.question("What is your name?", (name) => {
  console.log("Welcome", name);
  readLineInterface.close();
});
