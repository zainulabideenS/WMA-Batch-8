// Write a js program to find all roots of a quadratic equation
function findQuadraticRoots() {
    const FirstValue =parseFloat(document.getElementById('value1').value);
    const SecondValue =parseFloat(document.getElementById('value2').value);
    const ThirdValue =parseFloat(document.getElementById('value1').value);
    const result = document.getElementById('output');
    if (FirstValue === 0) {
        result.textContent = "Not a quadratic equation";
    }
    const discriminant = SecondValue * SecondValue - 4 * FirstValue * ThirdValue;
    if (discriminant > 0) {
        // Two distinct real roots
        const root1 = (-SecondValue + Math.sqrt(discriminant)) / (2 * FirstValue);
        const root2 = (-SecondValue - Math.sqrt(discriminant)) / (2 * FirstValue);
        result.textContent = `Two distinct real roots: ${root1} and ${root2}`;
    }
    else if (discriminant === 0) {
        // One real root (double root)
        const root = -SecondValue / (2 * FirstValue);
        result.textContent = `One real root: ${root}`;
    }
    else {
        // No real roots (complex roots)
        const realPart = (-SecondValue / (2 * FirstValue)).toFixed(2);
        const imaginaryPart = (Math.sqrt(-discriminant) / (2 * FirstValue)).toFixed(2);
        result.textContent = `Complex roots: ${realPart} + ${imaginaryPart}i and ${realPart} - ${imaginaryPart}i`;
    }
}