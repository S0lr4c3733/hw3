function getGrade(nbr) {
  if (nbr <= 30) return "Freshman";
  if (nbr >= 31 && nbr <= 60) return "Sophomore";
  if (nbr >= 61 && nbr <= 90) return "Junior";
  return "Senior";
}

function isValid(nbr) {
  if (nbr == "") return false;
  nbr = Number(nbr);
  if (isNaN(nbr) || !Number.isInteger(nbr)) return false;
  if (nbr < 0) return false;
  return true;
}

function classStanding(name, nbr) {
  const check = isValid(nbr);
  const msg = check
    ? `Hello ${name}\nYou grade standing is ${getGrade(nbr)}`
    : `Sorry, ${nbr} is not a valid entry`;
  const result = document.getElementById("form-result");
  check ? console.log(msg) : console.error(msg);
  result.style.color = check ? "#00FF00" : "#FF0000";
  result.textContent = msg;
}

function submitForm(event) {
  console.log("here");
  event.preventDefault();
  const name = document.getElementById("form-2")["f-name"].value;
  const units = document.getElementById("form-2")["f-units"].value;
  classStanding(name, units.trim());
}

const user = prompt("Name");
const units = prompt("Units completed");
classStanding(user, units.trim());
