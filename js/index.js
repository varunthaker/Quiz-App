console.clear();

const bookmarkButton = document.querySelector('[data-js="bookmark"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer"]');

bookmarkButton.addEventListener("click", (e) => {
  e.preventDefault();
  bookmarkButton.classList.toggle("fa-solid");
});

answerButton.addEventListener("click", (e) => {
  e.preventDefault();

  let buttonText = e.target.innerText;

  console.log(answer);

  if (buttonText === "Show Answer") {
    answer.classList.remove("answer");
    answer.classList.add("show");
    e.target.innerText = "Hide Answer";
  } else {
    answer.classList.add("answer");
    e.target.innerText = "Show Answer";
  }
});
