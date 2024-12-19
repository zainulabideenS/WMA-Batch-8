// 20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
function CalculateSalary()
{
    const salary = parseInt(document.getElementById('salary').value);
    const calculation = document.getElementById('output');
    let hra,da;
    if (salary >= 5000 && salary <= 10000  ) {
        hra = 0.20 * salary;
        da = 0.80 * salary;
        const grossSalary = salary + hra + da;
        calculation.textContent = `Your gross salary is ${grossSalary} \n HRA = ${hra}% \n DA = ${da}%`;
        calculation.style.color = 'blue';
    } else if(salary > 10000 && salary <= 20000){
        hra = 0.25 * salary;
        da = 0.90 * salary;
        const grossSalary = salary + hra + da;
        calculation.textContent = `Your gross salary is ${grossSalary} \n HRA = ${hra}% \n DA = ${da}%`;
        calculation.style.color = 'brown';
    }
    else if( salary > 20000)
    {
        hra = 0.30 * salary;
        da = 0.95 * salary;
        const grossSalary = salary + hra + da;
        calculation.textContent = `Your gross salary is ${grossSalary} \n HRA = ${hra}% \n DA = ${da}%`;
        calculation.style.color = 'green';
    }
    else
    {
        calculation.textContent =`salary should be more than 5000.`;
        calculation.style.color = `red`;
    }
}