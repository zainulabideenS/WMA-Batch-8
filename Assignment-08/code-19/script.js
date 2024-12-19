// Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
function Result() {
  const phy = parseFloat(document.getElementById("Physics").value);
  const chem = parseFloat(document.getElementById("Chemist").value);
  const bio = parseFloat(document.getElementById("Biology").value);
  const math = parseFloat(document.getElementById("Math").value);
  const computer = parseFloat(document.getElementById("Computer").value);
  const output = document.getElementById("output");
  const marks = phy + chem + bio + math + computer;
  const totalMarks = 500;
  const percentage = (marks / totalMarks) * 100;
  let grade;
  if (marks <= 500 && phy <=100 && chem <= 100 && bio <= 100 & math <= 100 && computer <= 100) {
    if (percentage >= 90) {
        grade = "A";
        output.textContent = `Total Marks = ${totalMarks} , Your Marks = ${marks},  Grade = ${grade} `;
        output.style.color = 'green';
      } else if (percentage >= 80) {
        grade = "B";
        output.textContent = `Total Marks = ${totalMarks} , Your Marks = ${marks}, Grade = ${grade} `;
        output.style.color = 'green';
      } else if (percentage >= 70) {
        grade = "C";
        output.textContent = `Total Marks = ${totalMarks}, Your Marks = ${marks}, Grade = ${grade} `;
        output.style.color = 'green';
      } else if (percentage >= 60) {
        grade = "D";
        output.textContent = `Total Marks = ${totalMarks}, Your Marks = ${marks}, Grade = ${grade} `;
        output.style.color = 'green';
      } else if (percentage >= 40) {
        grade = "E";
        output.textContent = `Total Marks = ${totalMarks}, Your Marks = ${marks}, Grade = ${grade} `;
        output.style.color = 'green';
      } else {
        grade = "F";
        output.textContent = `Total Marks = ${totalMarks}, Your Marks = ${marks}, Grade = ${grade} `;
        output.style.color = 'green';
      }
  }
  else
  {
    output.textContent =`Invalid...`;
    output.style.color = 'green';
  }
  
}
