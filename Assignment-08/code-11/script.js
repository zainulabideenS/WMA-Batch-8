// Write a js program to input week number and print week day.
function weekFunc() {
  const inputWeek = document.getElementById("textId").value;
  const output = document.getElementById("output");
  if (inputWeek >= 1 && inputWeek <= 7) {
    switch (inputWeek) {
      case '1':
        output.textContent = `${inputWeek}st day is Monday.`;
        output.style.color = 'green';
        break;
      case '2':
        output.textContent = `${inputWeek}nd day is Tuesday.`;
        output.style.color = 'green';
        break;
      case '3':
        output.textContent = `${inputWeek}rd day is Wednesday.`;
        output.style.color = 'green';
        break;
      case '4':
        output.textContent = `${inputWeek}th day is Thursday.`;
        output.style.color = 'green';
        break;
      case '5':
        output.textContent = `${inputWeek}th day is Friday.`;
        output.style.color = 'green';
        break;
      case '6':
        output.textContent = `${inputWeek}th day is Saturday.`;
        output.style.color = 'green';
        break;
      case '7':
        output.textContent = `${inputWeek}th day is Sunday.`;
        output.style.color = 'green';
        break;
    }
  } else {
    output.textContent = `"${inputWeek}" is not a week number.`;
    output.style.color = 'red';
  }
}
