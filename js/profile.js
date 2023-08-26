console.clear();
const toggleButton = document.querySelector('[data-js="toggle-switch"]');
const mainContainer = document.querySelector("body");

toggleButton.addEventListener("click", () => {
  mainContainer.classList.toggle("toggle-class");
});
