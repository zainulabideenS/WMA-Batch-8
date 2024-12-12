
function checkInput() {

const userInput = document.getElementById('signalinput').value;
const userOutput = document.getElementById('signalOutput');
let message;
if (userInput === 'red') {
    message = 'STOP';
} else if(userInput === 'yellow'){
    message = 'SLOW DOWN';
}
else if (userInput === 'green') {
    message = 'GO'
}
else{
    message = 'Invalid entry'
}
userOutput.textContent = message;

}
