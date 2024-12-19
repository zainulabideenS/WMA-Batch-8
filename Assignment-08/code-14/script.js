// Write a js program to input angles of a triangle and check whether triangle is valid or not.
function triangle() {
  const angleOne = parseFloat(document.getElementById("angle1").value);
  const angleTwo = parseFloat(document.getElementById("angle2").value);
  const angleThree = parseFloat(document.getElementById("angle3").value);
  const finalResult = document.getElementById("output");
  const sumis = angleOne + angleTwo + angleThree;
  if (angleOne > 0 && angleTwo > 0 && angleThree > 0 && sumis === 180) {
    finalResult.textContent = `This is a valid Triangle...`;
    finalResult.style.color = 'green';
  } else {
    finalResult.textContent = `This is not a valid Triangle...`;
    finalResult.style.color = 'red';
  }
}
