window.onload = function () {
  let minutes = 0;
  let seconds = 0;
  let tens = 0;

  const appendMinutes = document.querySelector("#minutes");
  const appendSeconds = document.querySelector("#seconds");
  const appendTens = document.querySelector("#tens");

  const startBtn = document.querySelector("#start");
  const stopBtn = document.querySelector("#stop");
  const resetBtn = document.querySelector("#reset");

  let interval = null;

  function startTimer() {
    tens++;

    appendTens.innerHTML = tens <= 9 ? "0" + tens : tens;

    if (tens > 99) {
      seconds++;
      tens = 0;
      appendTens.innerHTML = "00";
      appendSeconds.innerHTML = seconds <= 9 ? "0" + seconds : seconds;
    }

    if (seconds > 59) {
      minutes++;
      seconds = 0;
      appendSeconds.innerHTML = "00";
      appendMinutes.innerHTML = minutes <= 9 ? "0" + minutes : minutes;
    }
  }

  startBtn.onclick = function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };

  stopBtn.onclick = function () {
    clearInterval(interval);
  };

  resetBtn.onclick = function () {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    tens = 0;

    appendMinutes.innerHTML = "00";
    appendSeconds.innerHTML = "00";
    appendTens.innerHTML = "00";
  };
};
