console.clear();

const form = document.querySelector("form");
const questionTextArea = document.querySelector(
  '[data-js="question-textarea"]'
);
const answerTextArea = document.querySelector('[data-js="answer-textarea"]');
const questionElement = document.querySelector('[data-js="question-text"]');
const answerElement = document.querySelector('[data-js="answer-text"]');

//Eventlistner for complete form
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  const question = data.question;
  const answer = data.answer;
  const tag = data.tag;

  addCard(question, answer, tag);
  formReset();
});

//Eventlistner to trace number of Char on Question
questionTextArea.addEventListener("input", (e) => {
  e.preventDefault();

  const maxQuestionLength = e.target.maxLength;
  const questionLength = e.target.value.length;

  const questionString = numberOfCharecters(maxQuestionLength, questionLength);
  questionElement.textContent = questionString;
});

//Eventlistner to trace number of Char on Question
answerTextArea.addEventListener("input", (e) => {
  e.preventDefault();

  const maxAnswerLength = e.target.maxLength;
  const answerLength = e.target.value.length;

  const answerString = numberOfCharecters(maxAnswerLength, answerLength);
  answerElement.textContent = answerString;
});

const formReset = () => {
  form.reset();
  form.elements.question.focus();
};

const addCard = (question, answer, tag) => {
  const cardsDiv = document.querySelector('[data-js="cards"]');
  //   const cardBody = document.createElement("div");
  //   cardBody.classList.add("card-body");
  //   const questionElement = document.createElement("h3");
  //   questionElement.classList.add("question");
  //   questionElement.innerText = question;
  //   const answerElement = document.createElement("h5");
  //   answerElement.classList.add("answer");
  //   answerElement.innerText = answer;
  //   const tagElement = document.createElement("p");
  //   tagElement.classList.add("tag");
  //   tagElement.innerText = tag;

  //   cardDiv.append(cardBody);
  //   cardBody.append(questionElement);
  //   cardBody.append(answerElement);
  //   cardBody.append(tagElement);

  const card = `<section class="card-section">
  <section class="question">
    <h3>${question}</h3>
  </section>
  <section class="bookmark-plain">
    <button
      ><i class="fa-regular fa-bookmark fa-2xl" data-js="bookmark"></i
    ></button>
  </section>
  <div class="button-class" data-js="button">
    <button type="button" class="show-button" data-js="answer">
      Show Answer
    </button>
    <p>${answer}</p>
  </div>

  <div class="categories">
    <button type="button" id="html">#${tag}</button>
  </div>
</section>`;

  cardsDiv.innerHTML = card;
};

const numberOfCharecters = (maxLength, length) => {
  const remainingCharacters = Number(maxLength) - Number(length);
  return `${remainingCharacters} characters left`;
};
