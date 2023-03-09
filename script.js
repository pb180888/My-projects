const movie1 = document.querySelector("#media1");
const movie2 = document.querySelector("#media2");
const turnOff1 = document.querySelector("#media3");
const turnOff2 = document.querySelector("#media4");
const openMovie1 = movie1.addEventListener("click", function () {
  document.querySelector("#video1").classList.remove("hidden");
  turnOff1.classList.remove("hidden");
  movie1.classList.add("hidden");
});
const openMovie2 = movie2.addEventListener("click", function () {
  document.querySelector("#video2").classList.remove("hidden");
  turnOff2.classList.remove("hidden");
  movie2.classList.add("hidden");
});

turnOff1.addEventListener("click", function () {
  document.querySelector("#video1").classList.add("hidden");
  turnOff1.classList.add("hidden");
  movie1.classList.remove("hidden");
});
turnOff2.addEventListener("click", function () {
  document.querySelector("#video2").classList.add("hidden");
  turnOff2.classList.add("hidden");
  movie2.classList.remove("hidden");
});
