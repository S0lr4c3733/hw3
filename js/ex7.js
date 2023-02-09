function isValid(nbr) {
  if (nbr == "") return false;
  nbr = Number(nbr);
  if (isNaN(nbr) || !Number.isInteger(nbr)) return false;
  if (nbr < 0) return false;
  return true;
}

function checkRange(nbr, minValue, maxValue) {
  if (nbr >= minValue && nbr <= maxValue) return true;
  return false;
}

function submitForm(event) {
  event.preventDefault();
  const hours = document.getElementById("form-7")["f-hours"].value.trim();
  const minutes = document.getElementById("form-7")["f-minutes"].value.trim();
  const seconds = document.getElementById("form-7")["f-seconds"].value.trim();
  followingSecond(hours, minutes, seconds);
}

function followingSecond(hours, minutes, seconds) {
  let msg = "";
  const result = document.getElementById("form-result");
  const check = isValid(hours) && isValid(minutes) && isValid(seconds);
  if (!check) {
    msg = `Sorry, there is an invalid entry`;
    result.style.color = "#FF0000";
    result.textContent = msg;
    return console.error(msg);
  }
  hours = Number(hours);
  const range =
    checkRange(hours, 0, 23) &&
    checkRange(minutes, 0, 59) &&
    checkRange(seconds, 0, 59);
  if (!range) {
    msg = `Sorry, there is an invalid entry`;
    result.style.color = "#FF0000";
    result.textContent = msg;
    return console.error(msg);
  }
  minutes = Number(minutes);
  seconds = Number(seconds);
  const save = `Time input: ${hours}h${minutes}m${seconds}s`;
  seconds += 1;
  if (seconds == 60) {
    seconds = 0;
    minutes += 1;
  }
  if (minutes === 60) {
    minutes = 0;
    hours += 1;
  }
  if (hours === 24) hours = 0;
  msg = `${save}\nOne second later: ${hours}h${minutes}m${seconds}s`;
  console.log(msg);
  result.style.color = "#00FF00";
  result.textContent = msg;
}

const hours = prompt("Insert hours");
const minutes = prompt("Insert minutes");
const seconds = prompt("Insert seconds");
followingSecond(hours, minutes, seconds);
