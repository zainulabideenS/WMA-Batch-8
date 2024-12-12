// Objective: Simulate a simple game.
// Task:
// Accept inputs for two players (rock, paper, or scissors).
// Use if conditions to determine the winner:
// Rock beats Scissors
// Paper beats Rock
// Scissors beats Paper
// Print "Player 1 Wins," "Player 2 Wins," or "It's a Tie!"
function winnerFunction() {
    var playerOneInput = document.getElementById('p1input').value;
    var playerTwoInput = document.getElementById('p2input').value;
    var userOutput = document.getElementById('outputwinner');
    let message;
    if (playerOneInput === playerTwoInput) {
        message = 'its a tie!'
    }
    else if (playerOneInput === 'rock') {
        message = (playerTwoInput ==='paper') ? 'Player two wins!' : 'Player one wins!';
    }
    else if(playerOneInput === 'paper')
    {
        message = (playerTwoInput === 'scissors') ? 'Player two wins!' : 'Player one wins';
    }
    else if (playerOneInput === 'scissors') {
        message = (playerTwoInput === 'rock') ? 'Player two wins!' : 'player one wins';
    }
    else{
        message = 'Invalid Input';
    }
    userOutput.textContent = message;

}