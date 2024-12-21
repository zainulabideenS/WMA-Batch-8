// Maximum of Two Numbers
// Write a program that accepts two numbers and prints the larger number using if conditions.
function checkLargerNum(){
    var inputNum1 = document.getElementById('num1').value;
var inputNum2 = document.getElementById('num2').value;
var result = document.getElementById('output');
let message;
if (inputNum1 > inputNum2 ) {
    message = `Number one is larger which is = ${inputNum1}`
}
else if (inputNum2 > inputNum1) {
    message = `Number two is larger which is = ${inputNum2}`
}
else
{
    message = 'numbers are equal'
}
result.textContent = message;
result.style.color = 'green'
}
