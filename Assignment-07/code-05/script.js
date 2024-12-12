// 5. Simple Alarm System
// Objective:
//  Simulate an alarm trigger based on conditions.
// Task:
// Ask the user two yes/no questions:
// Is the door open? (yes or no)
// Is motion detected? (yes or no)
// Use if conditions to print:
// "Alarm Triggered" if either condition is yes.
// "All Safe" if both conditions are no.
function AlarmSystem() {
    var inputOne =  document.getElementById('optionOneInput').value
    var inputTwo = document.getElementById('optionTwoInput').value
    var output = document.getElementById('resultOutput');
    let message;
    if (inputOne === 'yes' && inputTwo==='yes') {
        message = 'Alarm is triggered';
    } else if (inputOne === 'no' && inputTwo ==='no') {
        message = 'All safe'
    }
    else
    {
        message = 'condition does not match the criteria'
    }
    output.textContent = message;
}