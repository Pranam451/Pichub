const input = document.getElementById("input");
const grid = document.getElementsByClassName("grid")[0];

window.addEventListener("load", dayNightMoade);

input.addEventListener("keydowm", function (event) {
  if (event.key === "enter") loadImg();
});
