// Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle
function classicTriangle() {
    
const sideOne = parseFloat(document.getElementById('side1').value);
const sideTwo = parseFloat(document.getElementById('side2').value);
const sideThree = parseFloat(document.getElementById('side3').value);
const result = document.getElementById('output');
const sum = sideOne + sideTwo + sideThree;
if (sideOne > 0 && sideTwo > 0 && sideThree > 0 && sum === 180) {
    if (sideOne === sideTwo && sideTwo ===sideThree) {
        result.textContent = `we have a equilateral triangle.`;
        result.style.color = 'green';
    }
    else if (sideOne === sideTwo || sideTwo === sideThree || sideOne === sideThree) {
        result.textContent = `we have a isosceles triangle`;
        result.style.color = 'blue';
    }
    else
    {
        result.textContent = `we have a scalene triangle`;
        result.style.color = 'cyan';
    }
}
else 
{
    result.textContent = `it is not any triangle`;
    result.style.color = 'red';
}

}