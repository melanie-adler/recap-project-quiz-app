const answerButton = document.querySelectorAll('[data-js="answer-button"]');
const answer = document.querySelectorAll('[data-js="answer"]');

answerButton.forEach((button, index) => {
  button.addEventListener("click", () => {
    showAnswer(button, answer[index]);
  });
});

function showAnswer(button, answer) {
  answer.classList.toggle("show-answer");
  answerButton.forEach((p) => {
    button.textContent =
      button.textContent === "Hide Answer" ? "Show Answer" : "Hide Answer";
  });
}

const bookmark = document.querySelector('[data-js="bookmark-button"]');
const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');

bookmark.addEventListener("click", () => {
  bookmarkQuestion();
});

function bookmarkQuestion() {
  const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');
  bookmarkIcon.src === "/src/icons/bookmark-fill-black.svg"
    ? (bookmarkIcon.src = "/src/icons/bookmark-fill-white.svg")
    : (bookmarkIcon.src = "/src/icons/bookmark-fill-black.svg");
}
