// Write a js program to check whether a number is even or odd.
function check() {
    const input = document.getElementById('num1').value;
    const result = document.getElementById('output');
    if (input % 2 == 0 ) {
        result.textContent = `${input} is an even number...`;
        result.style.color = 'green';
    }
    else
    {
        result.textContent = `${input} is an odd number...`;
        result.style.color = 'red';
    }
}