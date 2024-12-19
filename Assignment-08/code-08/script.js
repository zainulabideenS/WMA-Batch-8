// Write a js program to input any alphabet and check whether it is vowel or consonant.
function alphabet() {
  const userInput = document.getElementById("textId").value;
  const result = document.getElementById("output");
  if (userInput.length === 1 && userInput.match(/[a-z]/i)) {
    if (
      userInput === "a" ||
      userInput === "e" ||
      userInput === "i" ||
      userInput === "o" ||
      userInput === "u"
    ) {
      result.textContent = `${userInput} is a vowel...`;
      result.style.color = "green";
    } else {
      result.textContent = `${userInput} is a consonant...`;
      result.style.color = "red";
    }
  } else {
    result.textContent = `please Enter a single or valid alphabet.`;
    result.style.color = "red";
  }
}
