// Write a js program to input any character and check whether it is alphabet, digit or special character.
function alphabet() {
    const userInput = document.getElementById('textId').value;
const result = document.getElementById('output');
if (userInput.length === 1) {
     if (userInput.match(/[a-z]/i)) {
        result.textContent = `"${userInput}" is an alphabet...`;
        result.style.color = 'green';
    }
    else if (userInput.match(/[0-9]/i)) {
        result.textContent = `"${userInput}" is a digit...`;
        result.style.color = 'green';
    }
    else
    {
        result.textContent = `"${userInput}" is a special character`;
        result.style.color = 'green';
    }
}
else
{
    result.textContent = `"${userInput}" is not an alphabet , digit or special character`;
    result.style.color = 'red';
}
}


