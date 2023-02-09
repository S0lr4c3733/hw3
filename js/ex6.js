function isValid(nbr) {
  if (nbr == "") return false;
  nbr = Number(nbr);
  if (isNaN(nbr)) return false;
  return true;
}

function submitForm(event) {
  event.preventDefault();
  const nbr = document.getElementById("form-6")["f-number"].value.trim();
  multiplicationTable(nbr);
}

function multiplicationTable(nbr) {
  const check = isValid(nbr);
  if (!check) return console.error(`Sorry, ${nbr} is not a valid entry`);
  nbr = Number(nbr);
  for (let idx = 0; idx <= 10; idx += 1)
    console.log(`${nbr} x ${idx} =`, nbr * idx);
}

const nbr = prompt("Insert a number");
multiplicationTable(nbr.trim());
