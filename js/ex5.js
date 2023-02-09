let tries = 0;
const myPassword = "secret";

function submitForm() {
  tries = 0;
  checkPassword();
}

function checkPassword() {
  let msg = "";
  const result = document.getElementById("form-result");
  while (tries < 3) {
    const input = prompt("Insert your password");
    if (input === myPassword) break;
    tries += 1;
  }
  if (tries === 3)
    msg = `Your account is locked!  You failed to enter the correct password ${tries} times`;
  else msg = `You entered the correct password after ${tries} attempt(s)`;
  tries === 3 ? console.error(msg) : console.log(msg);
  result.style.color = tries !== 3 ? "#00FF00" : "#FF0000";
  result.textContent = msg;
}

checkPassword();
