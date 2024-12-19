// Write a js program to input month number and print number of days in that month.
function MonthFunc() {

const inputMonth = document.getElementById("textId").value;
const output = document.getElementById("output");
if (inputMonth >= 1 && inputMonth <= 12) {
  let days;
  switch (inputMonth) {
    case "1":output.textContent = "January = 31 days";
    break;
    case "3":output.textContent = "march = 31 days";
    break; 
    case "5":output.textContent = "may = 31 days"; 
    break;
    case "7":output.textContent = "july = 31 days";
    break; 
    case "8":output.textContent = "august = 31 days";
    break; 
    case "10":output.textContent = "october = 31 days"; 
    break;
    case "12":output.textContent = "december = 31 days"; 
      break;
    case "4":output.textContent = "april = 30";
    break;
    case "6":output.textContent = "june = 30";
    break;
    case "9":output.textContent = "september = 30";
    break;
    case "11":output.textContent = "november= 30";
    break;
      case "2":
        let year = parseInt(prompt("Please enter a year to check for leap year:"));
                if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                    output.textContent = 29; // Leap year
                } else {
                    output.textContent = 28; // Non-leap year
                }
                break;
  }
} 
else {
  output.textContent = `"${inputMonth}" is not a valid month.`;
  output.style.color = "red";
}
}