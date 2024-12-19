// Write a js program to check whether a year is leap year or not.

function isLeap() {
  const year = document.getElementById("num1").value;
  const result = document.getElementById("output");
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    result.textContent = `${year} is a leap year`;
    result.style.color = "green";
  } else {
    result.textContent = `${year} is not a leap year`;
    result.style.color = "red";
  }
}
