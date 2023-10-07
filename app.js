const img = document.getElementById("nature-img");
const button = document.getElementById("show__button");
const show = document.querySelector(".show-item");

button.addEventListener("click", () => {
  button.classList.add("hidden");
  show.classList.remove("hidden");
});

img.addEventListener("click", () => {
  show.classList.add("hidden");
  button.classList.remove("hidden");
});
