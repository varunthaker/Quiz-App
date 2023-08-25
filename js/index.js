console.clear();

const bookmarkButton = document.querySelector('[data-js="bookmark"]');
const answerButton = document.querySelector('[data-js="answer"]');
const buttonDiv = document.querySelector('[data-js="button"]');
const pElement = document.createElement("p");

bookmarkButton.addEventListener("click", (e) => {
  e.preventDefault();
  bookmarkButton.classList.toggle("fa-solid");
});

const showAnswer = () => {
  pElement.classList.add("answer");
  pElement.textContent = "Mr. Olaf Scholz";
  buttonDiv.append(pElement);
};

const hideAnswer = () => {
  pElement.remove();
};

answerButton.addEventListener("click", (e) => {
  e.preventDefault();

  let buttonText = e.target.innerText;

  if (buttonText === "Show Answer") {
    showAnswer();
    e.target.innerText = "Hide Answer";
  } else {
    hideAnswer();
    e.target.innerText = "Show Answer";
  }
});
