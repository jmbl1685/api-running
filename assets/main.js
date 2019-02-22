function startTime() {
  document.querySelector('#current_hour').innerHTML = GetHour();
  setTimeout(startTime, 500);
}

function GetHour() {
  const currentDay = new Date();
  let hours = currentDay.getHours() > 12 ? currentDay.getHours() - 12 : currentDay.getHours();
  let minutes = currentDay.getMinutes();
  let seconds = currentDay.getSeconds();
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);
  return `${hours}:${minutes}:${seconds + clockType(currentDay)}`;
}

function checkTime(index) {
  if (index < 10) index = '0' + index;
  return index;
}

function clockType(currentDay) {
  return currentDay.getHours() > 12 ? ' p.m.' : ' a.m.';
}
