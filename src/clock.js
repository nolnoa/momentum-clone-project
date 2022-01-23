const clock = document.querySelector("#clock");

function getCurrentTime() {
  const currentTime = new Date();
  const hours = String(currentTime.getHours()).padStart(2, "0");
  const minutes = String(currentTime.getMinutes()).padStart(2, "0");
  const seconds = String(currentTime.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getCurrentTime();
setInterval(getCurrentTime, 1000);
