function isValid(nbr) {
  if (nbr == "") return false;
  nbr = Number(nbr);
  if (isNaN(nbr) || !Number.isInteger(nbr)) return false;
  if (nbr < 1 || nbr > 100) return false;
  return true;
}

function validateInput(nbr) {
  const check = isValid(nbr);
  const msg = check
    ? `Thank you! You entered ${nbr}, a valid number`
    : `Sorry, ${nbr} is not a valid entry`;
  const result = document.getElementById("form-result");
  check ? console.log(msg) : console.error(msg);
  result.style.color = check ? "#00FF00" : "#FF0000";
  result.textContent = msg;
}

const input = prompt("Insert a number between 1 and 100");
validateInput(input.trim());

function submitForm(event) {
  event.preventDefault();
  const nbr = document.getElementById("form-1")["form-input"].value;
  validateInput(nbr.trim());
}
