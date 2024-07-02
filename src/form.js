console.clear();

const form = document.querySelector('[data-js="new-question-form"]');
const submitButton = document.querySelector('[data-js="submit-button"]');

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

  // newBookmarkButton.addEventListener("click", () => {
  //   bookmarkQuestion();
  // });

  // function bookmarkQuestion() {
  //   newBookmarkIcon.src === "/src/icons/bookmark-fill-black.svg"
  //     ? (newBookmarkIcon.src = "/src/icons/bookmark-fill-white.svg")
  //     : (newBookmarkIcon.src = "/src/icons/bookmark-fill-black.svg");
  // }
});
