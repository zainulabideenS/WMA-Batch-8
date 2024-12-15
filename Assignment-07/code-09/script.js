// 9. Weather Suggestion Experiment
// Objective: Give outfit suggestions based on weather conditions.
// Task:
// Take weather input (Sunny, Rainy, Cold) from the user.
// Print:
// "Wear sunglasses" for Sunny
// "Take an umbrella" for Rainy
// "Wear a jacket" for Cold
function checkWeather() {
    var selection = document.getElementById('WeatherId').value;
var weatherOutput =  document.getElementById('output');
let message;
if (selection === '1') {
   message  = "Wear sunglasses. Weather is sunny...."
}
else if (selection === '2') {
    message = "Take an umbrella. Weather is Rainy...."
}else{
    message = "Wear a jacket. Weather is Cold...."
}
weatherOutput.textContent =  message;
}
