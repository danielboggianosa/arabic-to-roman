const readline = require("readline");
const transform = require("./index");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Enter an integer number from 1 to 3999 or 0 to exit:\n",
});
rl.prompt();
rl.on("line", (line) => {
  if (line == 0) rl.close();
  console.log("result: ", transform(line));
  console.log("\nEnter another integer number from 1 to 3999 or 0 to exit:");
}).on("close", () => {
  console.log("Have a great day!");
  process.exit(0);
});
