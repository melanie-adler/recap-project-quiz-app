console.clear();

const form = document.querySelector('[data-js="new-question-form"]');
const submitButton = document.querySelector('[data-js="submit-button"]');

const charactersLeft = document.querySelectorAll(
  '[data-js="remaining-characters"]'
);
const textInput = document.querySelectorAll('[data-js="input-field"]');

textInput.forEach((textarea, index) => {
  textarea.addEventListener("input", (event) => {
    characterCount(event.target, charactersLeft[index]);
  });
});

function characterCount(textarea, charactersLeft) {
  const charactersLeftValue = textarea.getAttribute("maxlength");
  const lengthOfInput = textarea.value.length;
  charactersLeft.textContent = charactersLeftValue - lengthOfInput;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newCard = document.createElement("li");
  const newArticle = document.createElement("article");
  const newBookmarkButton = document.createElement("button");
  const newBookmarkIcon = document.createElement("img");
  const newQuestion = document.createElement("h2");
  const newAnswerButton = document.createElement("button");
  const newAnswer = document.createElement("p");
  const newTagContainer = document.createElement("ul");
  const newTag = document.createElement("li");

  const main = document.querySelector("main");

  main.append(newCard);
  newCard.append(newArticle);
  newArticle.append(
    newBookmarkButton,
    newQuestion,
    newAnswerButton,
    newAnswer,
    newTagContainer
  );
  newBookmarkButton.append(newBookmarkIcon);
  newTagContainer.append(newTag);

  newCard.classList.add("question-card");
  newBookmarkButton.classList.add("bookmark");
  newBookmarkButton.setAttribute("aria-label", "Bookmark question");
  newBookmarkIcon.setAttribute("src", "/src/icons/bookmark-fill-white.svg");
  newBookmarkIcon.setAttribute("alt", "Bookmark button");
  newBookmarkIcon.setAttribute("data-js", "bookmark-button");
  newQuestion.classList.add("question");
  newQuestion.textContent = data.questionField;
  newAnswerButton.classList.add("answer-button");
  newAnswerButton.textContent = "Show Answer";
  newAnswerButton.setAttribute("aria-label", "Bookmark question");
  newAnswerButton.setAttribute("data-js", "bookmark-button");
  newAnswer.classList.add("answer");
  newAnswer.setAttribute("hidden", "");
  newAnswer.textContent = data.answerField;
  newTagContainer.classList.add("tag-container");
  newTag.classList.add("tag");
  newTag.textContent = `#${data.tagField}`;

  event.target.reset();
  event.target.elements.questionField.focus();

  newAnswerButton.addEventListener("click", () => {
    showAnswer();
  });

  function showAnswer() {
    newAnswer.classList.toggle("show-answer");
    newAnswerButton.textContent =
      newAnswerButton.textContent === "Hide Answer"
        ? "Show Answer"
        : "Hide Answer";
  }

  textInput.forEach((textarea, index) => {
    textarea.value = "";
    const charactersLeftValue = textarea.getAttribute("maxlength");
    charactersLeft[index].textContent = charactersLeftValue;
  });
});

// const questionCardCreator = {
//   get form() {
//     return document.querySelector('[data-js="new-question-form"]');
//   },
//   get textareas() {
//     return document.querySelectorAll("textarea");
//   },
//   count(el) {
//     let max = el.getAttribute("maxlength");
//     let contains = el.value.length;
//     let output = el.nextElementSibling.querySelector(
//       '[data-js="remaining-characters"]'
//     );
//     output.innerHTML = max - contains;
//   },
//   watch(el) {
//     el.addEventListener("input", (e) => {
//       this.count(e.target);
//     });
//   },
//   setup() {
//     for (const textarea of this.textareas) {
//       this.count(textarea);
//       this.watch(textarea);
//     }
//   },
//   submit() {},
//   init() {
//     this.setup();
//   },
// };

// questionCardCreator.init();
