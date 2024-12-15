// Coin Toss Simulator
// Objective: Simulate a coin toss.
// Task:
// Ask the user to input 1 for "Heads" or 0 for "Tails."
// Use the random module to simulate a coin toss (random.randint(0, 1)).
// Compare the user’s input with the result and print "You Win!" or "You Lose!"
function  TossCoin() {
  var userInput = document.getElementById('numberInput').value
  var outputResult = document.getElementById('outputResult');
  if (userInput !== '1' && userInput !== '0' ) {
    outputResult.textContent = 'Invalid Input!\nEnter "1" for Heads or "0" for Tails'
    return
  }
  var tossResult = Math.round(Math.random());
  var outputText = (tossResult === 1) ? 'Heads' : 'tails'
  if (userInput == tossResult) {
    outputResult.textContent = `The result is ${outputText} and you wins`
    return
  } 
  else
  {
    outputResult.textContent = `The result is ${outputText} and you lose`
    return
  }
}