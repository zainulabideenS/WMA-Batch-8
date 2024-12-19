// Write a js program to check whether a character is uppercase or lowercase alphabet
function checkCharacter() {
  const userInput = document.getElementById("textId").value;
  const result = document.getElementById("output");
  if (userInput === userInput.toLowerCase() && /^[a-zA-Z]+$/.test(userInput)) {
    result.textContent = `"${userInput}" has Lowercase alphabets.`;
    result.style.color = 'green';
  } else if (userInput === userInput.toUpperCase() && /^[a-zA-Z]+$/.test(userInput)){
    result.textContent = `"${userInput}" has Uppercase alphabets.`;
    result.style.color = 'green';
  }
  else
  {
    result.textContent = `"${userInput}" is not a applicable on out condition.`;
    result.style.color = 'red';
  }
}
