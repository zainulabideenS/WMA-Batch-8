// Write a js program to calculate profit or loss.
function CalculateProfit() {
    const selling = parseFloat(document.getElementById('sell').value);
    const cost = parseFloat(document.getElementById('cost').value);
    const result = document.getElementById('output');
    if (selling > cost) {
        const income = selling - cost;
        result.textContent = `we have a profit of = ${income}$.`;
        result.style.color = 'green';
    } else if (cost > selling) {
        const loss = cost - selling;
        result.textContent = `we got loss that is  ${loss}$.`;
        result.style.color = 'red' 
    }
    else{
        result.textContent = `NO PROFIT , NO LOSS`;
        result.style.color = 'blue';
    }
}