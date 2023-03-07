const movie1 = document.querySelector("#media1");
const movie2 = document.querySelector("#media2");
const turnOff = document.querySelector("#media3");
const openMovie1 = movie1.addEventListener("click", function () {
  document.querySelector("#video1").classList.remove("hidden");
  turnOff.classList.remove("hidden");
});
const openMovie2 = movie2.addEventListener("click", function () {
  document.querySelector("#video2").classList.remove("hidden");
  turnOff.classList.remove("hidden");
});

turnOff.addEventListener("click", function () {
  document.querySelector("#video1").classList.add("hidden");
  document.querySelector("#video2").classList.add("hidden");
  turnOff.classList.add("hidden");
});
