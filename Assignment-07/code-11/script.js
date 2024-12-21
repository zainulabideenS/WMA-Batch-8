// Eligibility for Voting
// Write a program that checks if a person is eligible to vote based on their age (age >= 18).
function ageFunc() {
    var numberInput = document.getElementById('numberInput').value;
    var result = document.getElementById('outputResult');
    if (numberInput >= 18) {
        result.textContent = 'You are elegible to vote';
        result.style.color = 'Green'
    }
    else{
        result.textContent = 'You are not elegible to vote'
        result.style.color = 'red'
    }
}
