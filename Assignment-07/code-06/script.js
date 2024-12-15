// 6. Simple Temperature Conversion
// Objective: Convert Celsius to Fahrenheit or vice versa.
// Task:
// Ask the user to choose a conversion type: 1 for Celsius to Fahrenheit, 2 for Fahrenheit to Celsius.
// Take the temperature as input and use the formulas:
// C to F: F=(C×9/5)+32F = (C \times 9/5) + 32F=(C×9/5)+32
// F to C: C=(F−32)×5/9C = (F - 32) \times 5/9C=(F−32)×5/9
// Print the result using if conditions to ensure the correct formula is applied
function convertionTemprature() {
    var convertionType =  document.getElementById('conversiontype').value;
    var temperature = document.getElementById('numberInput').value;
    var outputTemp =  document.getElementById('outputTemp');
    let result;
    if (convertionType == '1') {
        result = (temperature * 9/5) + 32;
        outputTemp.textContent = `${temperature}°C is equal to ${result}°F`
        
    } else if (convertionType == '2') {
        result = (temperature - 32) * 5/9; 
        outputTemp.textContent = `${temperature}°F is equal to ${result}°C`
    }
    else
    {
        outputTemp.textContent = 'Invalid input'
    }
}