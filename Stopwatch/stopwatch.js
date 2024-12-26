var intervalRef = null;
var counter = 0;
document.getElementById("startBtn").addEventListener("click", () => {
  intervalRef = setInterval(() => {
    counter++;
    document.getElementById("heading").innerHTML = `${counter}`;
  }, 1000);
});

document.getElementById("stopBtn").addEventListener("click", () => {
  clearInterval(intervalRef);
});
