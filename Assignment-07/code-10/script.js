// 10. Simple Arithmetic Quiz
// Objective: Test arithmetic skills interactively.
// Task:
// Generate two random numbers and a random operator (+, -, *, /) using the random module.
// Ask the user to calculate the result.
// Compare the user's answer with the correct answer using an if condition and print "Correct!" or "Try Again!"



function calculate() {

const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;

    // Calculate the correct answer
    let correctAnswer;
    switch (operator) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '*':
            correctAnswer = num1 * num2;
            break;
        case '/':
            correctAnswer = num1 / num2;
            break;
        default:
            correctAnswer = null;
    }

    // Display the result
    const userAnswer = parseFloat(prompt(`What is ${num1} ${operator} ${num2}?`));
    const resultDiv = document.getElementById('result');

    if (userAnswer === correctAnswer) {
        resultDiv.textContent = "Correct!";
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = `Try Again! The correct answer is ${correctAnswer}.`;
        resultDiv.style.color = "red";
    }
}