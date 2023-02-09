function isValid(nbr) {
  if (nbr == "") return false;
  nbr = Number(nbr);
  if (isNaN(nbr) || !Number.isInteger(nbr)) return false;
  return true;
}

function submitForm(event) {
  event.preventDefault();
  const first = document.getElementById("form-3")["f-first"].value.trim();
  const second = document.getElementById("form-3")["f-second"].value.trim();
  simpleCalculation(first, second);
}

function simpleCalculation(nbr1, nbr2) {
  const result = document.getElementById("form-result");
  const check = isValid(nbr1) && isValid(nbr2);
  nbr1 = Number(nbr1);
  nbr2 = Number(nbr2);
  const msg = check
    ? `Addition: ${nbr1} + ${nbr2} = ${
        nbr1 + nbr2
      }\nSubtraction: ${nbr1} - ${nbr2} = ${
        nbr1 - nbr2
      }\nMultiplication: ${nbr1} * ${nbr2} = ${
        nbr1 * nbr2
      }\nDivision: ${nbr1} / ${nbr2} = ${
        nbr1 / nbr2
      }\nModulo: ${nbr1} % ${nbr2} = ${nbr1 % nbr2}`
    : "Invalid input !";
  check ? console.log(msg) : console.error(msg);
  result.style.color = check ? "#00FF00" : "#FF0000";
  result.textContent = msg;
}

const nbr1 = prompt("Insert first number");
const nbr2 = prompt("Insert second number");
simpleCalculation(nbr1.trim(), nbr2.trim());
