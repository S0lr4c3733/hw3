function isValid(day) {
  if (day == "") return false;
  if (!["sun", "mon", "tue", "wed", "thu", "fri", "sat"].includes(day))
    return false;
  return true;
}

function followingDay(day) {
  const check = isValid(day);
  const result = document.getElementById("form-result");
  let nextDay = "";
  switch (day) {
    case "sun":
      nextDay = "mon";
      break;
    case "mon":
      nextDay = "tue";
      break;
    case "tue":
      nextDay = "wed";
      break;
    case "wed":
      nextDay = "thu";
      break;
    case "thu":
      nextDay = "fri";
      break;
    case "fri":
      nextDay = "sat";
      break;
    case "sat":
      nextDay = "sun";
      break;
  }
  const msg = check
    ? `You entered: ${day}\nThe following day is ${nextDay}`
    : `Sorry, ${day} is not a valid entry. Allowed entries [sun, mon, tue, wed, thu, fri, sat]`;
  check ? console.log(msg) : console.error(msg);
  result.style.color = check ? "#00FF00" : "#FF0000";
  result.textContent = msg;
}

function submitForm(event) {
  event.preventDefault();
  const day = document.getElementById("form-3")["f-day"].value.trim();
  followingDay(day);
}

const inputDay = prompt(
  "Insert a day of the week [sun, mon, tue, wed, thu, fri, sat]"
);
followingDay(inputDay);
