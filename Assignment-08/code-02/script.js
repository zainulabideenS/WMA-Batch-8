function check() {
  var numberOne = document.getElementById("num1").value;
  var numberTwo = document.getElementById("num2").value;
  var numberThree = document.getElementById("num3").value;
  var result = document.getElementById("result");

  let message;
  if (numberOne > numberTwo && numberOne > numberThree) {
    message = `NumberOne = ${numberOne} is greater than NumberTwo and NumberThree....`
  } else if (numberTwo > numberOne && numberTwo > numberThree) {
    message = `NumberTwo = ${numberTwo} is greater than NumberOne and NumberThree...`
  } else if (numberThree > numberTwo && numberThree > numberOne) {
    message = `NumberThree = ${numberThree} is greater than NumberOne and NumberTwo...`
  }
  else if (numberOne == numberTwo && numberOne == numberThree) {
    message = `equal values...`
  }
  else if (numberOne == numberTwo) {
    message = `NumberOne and NumberTwo are equals.`
  }
  else if (numberOne == numberThree) {
    message = `NumberOne and NumberThree are equals.`
  }
  else if (numberTwo == numberThree) {
    message = `NumberTwo and NumberThree are equals.`
  }
  else{
    message = `Invalid`;
  }
  result.textContent = message;
  result.style.color = "green";
}
