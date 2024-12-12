
function checkTemperature()
{
    const userInput = document.getElementById('celciusinput').value;
    const userOutput = document.getElementById('celciusoutput');
    let message;
    if (userInput > 0 && userInput <= 15) {
        message = 'COLD'
    } else if (userInput > 15 && userInput <= 30) {
        message = 'WARM'
    } else if (userInput > 30) {
        message = 'HOT'
    }else{
        message = 'INVALID INPUT'
    }
    userOutput.textContent = message;
}