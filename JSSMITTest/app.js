let body = document.querySelector("body");
let time = document.querySelector("#time");
let x = document.querySelector("#x-axis");
let y = document.querySelector("#y-axis");

body.addEventListener("click", (e) => {
  getCurrentDate();
  x.innerText = "X-Axis:" + e.clientX;
  y.innerText = "X-Axis:" + e.clientY;
});

function getCurrentDate() {
  let date = new Date();

  time.textContent = 
    date.getHours() +
    "hours " +
    date.getMinutes() +
    "minutes " +
    date.getSeconds() + " seconds";
}
