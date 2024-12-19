// Write a js program to check whether a character is alphabet or not.
function check() {
    const character = document.getElementById('textId').value;
    const charResult = document.getElementById('output2');
    if (character.length === 1 && /^[A-Za-z]$/.test(character)) {
        charResult.textContent =`${character} is an alphabet.`;
        charResult.style.color = 'green';
    }
    else
    {
        charResult.textContent = `${character} is not an alphabet`;
        charResult.style.color = 'red';
    }
}