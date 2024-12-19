    function countNotes() {
        // Get the amount from the input field
        const amountInput = document.getElementById('amount');
        const amount = parseInt(amountInput.value, 10);
        
        // Available denominations
        const denominations = [5000, 1000, 500, 100, 50, 20, 10];
        
        // Validate the input
        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid positive amount.");
            return;
        }

        // Call the function to calculate notes
        const result = calculateNotes(amount, denominations);
        
        // Display the result
        displayResult(result, amount);
    }

    function calculateNotes(amount, denominations) {
        // Sort denominations in descending order
        denominations.sort((a, b) => b - a);
        
        let noteCount = {};
        
        for (let i = 0; i < denominations.length; i++) {
            if (amount >= denominations[i]) {
                // Calculate the number of notes of this denomination
                const count = Math.floor(amount / denominations[i]);
                noteCount[denominations[i]] = count;
                // Reduce the amount by the total value of these notes
                amount -= count * denominations[i];
            }
        }
        
        return noteCount;
    }

    function displayResult(result, amount) {
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = ''; // Clear previous output

        let output = `Total number of amount is = ${amount}:<br>`;
        for (const [denom, count] of Object.entries(result)) {
            output += `Denomination ${denom}: ${count} notes<br>`;
        }
        
        outputDiv.innerHTML = output;
    }
  