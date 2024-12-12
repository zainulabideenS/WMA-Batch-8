// 7. Password Strength Checker
// Objective: Check the strength of a password.
// Task:
// Take a password as input and check conditions:
// Length >= 8: Print "Strong Password"
// Length between 5 and 7: Print "Moderate Password"
// Length < 5: Print "Weak Password"
// Extension: Check if the password contains numbers or special characters for more detailed feedback.

function passwordChecker() {
  const password = document.getElementById("passwordIn").value;
  let strengthMessag = "";
  if (password.length >= 8) {
    strengthMessag = "Password is strong! ";
  } 
  else if (password.length >= 5 && password.length <= 7) {
    strengthMessag = 'Moderate password!';
  }
  else if (password.length <= 4) {
    strengthMessag = 'weak password!'
  }  
let strengthMessage = ""
const hasNumber = /\d/.test(password);
const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      if (hasNumber && hasSpecialChar) {
          strengthMessage = "Password contains numbers and special characters.";
      } else if (hasNumber) {
          strengthMessage = "Password contains numbers but no special characters.";
      } else if (hasSpecialChar) {
          strengthMessage = "Password contains special characters but no numbers.";
      } else {
          strengthMessage = "Password does not contain numbers or special characters.";
      }
  alert(`${strengthMessag} and ${strengthMessage}`);
}

