// Write a js program to find maximum between two numbers.
function check() {
var numberOne = document.getElementById('num1').value;
var numberTwo = document.getElementById('num2').value;
var result = document.getElementById('result');

let message;
if (numberOne > numberTwo) {
message = `NumberOne is greater which is = ${numberOne}`
}
else if (numberTwo > numberOne) {
    message = `NumberTwo is greater which is = ${numberTwo}`;
}
else if (numberOne == numberTwo)
{
    message = `both values are equal`;
}
result.textContent = message;
result.style.color = 'green';
}