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

const bookmark = document.querySelectorAll('[data-js="bookmark-button"]');
const bookmarkIcon = document.querySelectorAll('[data-js="bookmark-icon"]');

bookmark.forEach((button, index) => {
  button.addEventListener("click", () => {
    deleteBookmark(bookmarkIcon[index]);
  });
});

function deleteBookmark(bookmarkIcon) {
  const currentSrc = bookmarkIcon.src;
  if (currentSrc.includes("bookmark-fill-black.svg")) {
    bookmarkIcon.src = "/src/icons/bookmark-fill-white.svg";
  } else {
    bookmarkIcon.src = "/src/icons/bookmark-fill-black.svg";
  }
}
