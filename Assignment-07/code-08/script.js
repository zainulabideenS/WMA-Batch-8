// Coin Toss Simulator
// Objective: Simulate a coin toss.
// Task:
// Ask the user to input 1 for "Heads" or 0 for "Tails."
// Use the random module to simulate a coin toss (random.randint(0, 1)).
// Compare the user’s input with the result and print "You Win!" or "You Lose!"
function TossCoin() {
  var userInput = document.getElementById("numberInput").value;
  var outputResult = document.getElementById("outputResult");
  if (userInput !== "0" && userInput !== "1") {
    outputResult.textContent =
      "Invalid input! Please enter 1 for Heads or 0 for Tails.";
    return;
  }
  const tossResult = Math.floor(Math.random() * 2);
  const resultText = tossResult === 1 ? "Heads" : "Tails";
  outputResult.textContent = `The coin shows ${resultText}`;
  if (userInput === tossResult) {
    outputResult.textContent += "\n & You win.";
  } else {
    outputResult.textContent += "\n & You loss.";
  }
}
