// 21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill
function GenerateBill(){
    const units = parseFloat(document.getElementById('units').value);
    const output = document.getElementById('output');
    let billAmount 
    if (units >= 1 && units <= 50) {
        billAmount = 0.50 * units;
        output.textContent = `Total Bill Amout of your ${units}-Units is = ${billAmount}`;
        output.style.color = 'blue';
    } else if (units > 50 && units <=150){
        billAmount = 0.75 * units;
        output.textContent = `Total Bill Amout of your ${units}-Units is = ${billAmount}`;
        output.style.color = 'brown';
    }
    else if (units > 150 && units <=250) {
        billAmount = 1.20 * units;
        output.textContent = `Total Bill Amout of your ${units}-Units is = ${billAmount}`;
        output.style.color = 'green';
    }
    else if (units > 250)
    {
        billAmount = 1.50 * units;
        output.textContent = `Total Bill Amout of your ${units}-Units is = ${billAmount}`;
        output.style.color = 'Crimson';
    }   
    else
    {
        output.textContent = `There is no Amount to generate any Bill`;
        output.style.color ='red';
    }
}