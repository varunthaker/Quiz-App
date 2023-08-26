console.clear();
const toggleButton = document.querySelector('[data-js="toggle-switch"]');
const mainContainer = document.querySelector("body");
console.log(toggleButton);
console.log(mainContainer);

toggleButton.addEventListener("click", () => {
  mainContainer.classList.toggle("toggle-class");
});
