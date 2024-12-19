// Write a js program to check whether a number is divisible by 5 and 11 or not
function check() {
    const input = document.getElementById('num1').value;
    const result = document.getElementById('output');
    if (input  % 5 ===0 && input % 11 ===0) {
        result.textContent = `${input} is divisible by 5 and 11`;
        result.style.color = 'green';
    }
    else{
     result.textContent = `${input} is not divisible by 5 and 11`
     result.style.color = 'red';   
    }
}