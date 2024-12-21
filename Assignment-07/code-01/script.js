function checkState(){
    var userInput = document.getElementById('numberinput').value;
    var userOutput =  document.getElementById('outputstate');
    let message;
    if (userInput==='1') {
        message = 'Light Bulb is ON';
    } else if(userInput==='0'){
        message = 'Light Bulb is OFF';
    } else{
        message = 'Invalid Entry';
    }
    userOutput.textContent = message;
}