// Write a js program to check whether a number is negative, positive or zero
function check(){
    var number = document.getElementById('num1').value;
    let result = document.getElementById('output');
    let message;
    if (number < 0) {
        message = `"${number}" is a Negative number...`;
    } else if(number > 0){
        message = `"${number}" is a positive number...`
    }
    else {
        number = 0;
        message = `"${number}" is equal to zero...`
    }
    result.textContent = message;
    result.style.color = 'green'; 
}
