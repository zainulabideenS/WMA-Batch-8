// Write a js program to input all sides of a triangle and check whether triangle is valid or not.
function triangle() {
  const sideOne = parseFloat(document.getElementById("side1").value);
  const sideTwo = parseFloat(document.getElementById("side2").value);
  const sideThree = parseFloat(document.getElementById("side3").value);
  let sum = sideOne + sideTwo + sideThree;
  const result = document.getElementById("output");
  if (
    sideOne > 0 && sideTwo > 0 && sideThree > 0 &&
    sideOne + sideTwo >= sideThree &&
    sideTwo + sideThree >= sideOne &&
    sideOne + sideThree >= sideTwo &&
    sum === 180
  ) {
    result.textContent = "triangle is valid";
    result.style.color = "green";
  } else {
    result.textContent = "triangle is not valid";
    result.style.color = "red";
  }
}
