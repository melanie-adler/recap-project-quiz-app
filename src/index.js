const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer"]');
const bookmark = document.querySelector('[data-js="bookmark-button"]');
console.log(bookmark);
const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');
console.log(bookmarkIcon);

answerButton.addEventListener("click", () => {
  showAnswer();
});

function showAnswer() {
  answer.classList.toggle("show-answer");
  answerButton.textContent === "Hide Answer"
    ? (answerButton.textContent = "Show Answer")
    : (answerButton.textContent = "Hide Answer");
}

bookmark.addEventListener("click", () => {
  bookmarkQuestion();
});

function bookmarkQuestion() {
  bookmarkIcon.src === "/src/icons/bookmark-fill-black.svg"
    ? (bookmarkIcon.src = "/src/icons/bookmark-fill-white.svg")
    : (bookmarkIcon.src = "/src/icons/bookmark-fill-black.svg");
}

// apply to all buttons

// const answerButton = document.querySelectorAll('[data-js="answer-button"]');
// const answer = document.querySelectorAll('[data-js="answer"]');

// answerButton.forEach((answerButton) => {
//   answerButton.addEventListener("click", () => {
//     console.log("Hello");

//     answerButton.textContent === "Hide Answer"
//       ? (answerButton.textContent = "Show Answer")
//       : (answerButton.textContent = "Hide Answer");

//     // answer.forEach((answer) => {
//     //   answer.classList.toggle("show-answer");
//     //   answerButton.textContent === "Hide Answer"
//     //     ? (answerButton.textContent = "Show Answer")
//     //     : (answerButton.textContent = "Hide Answer");
//     // });
//   });
// });

// const bookmark = document.querySelector('[data-js="bookmark-button"]');
// console.log(bookmark);
// const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');
// console.log(bookmarkIcon);

// answerButton.addEventListener("click", () => {
//   showAnswer();
// });

// function showAnswer() {
//   answer.classList.toggle("show-answer");
//   answerButton.textContent === "Hide Answer"
//     ? (answerButton.textContent = "Show Answer")
//     : (answerButton.textContent = "Hide Answer");
// }

// bookmark.addEventListener("click", () => {
//   bookmarkQuestion();
// });

// function bookmarkQuestion() {
//   bookmarkIcon.src === "./src/icons/bookmark-fill-black.svg"
//     ? (bookmarkIcon.src = "./src/icons/bookmark-fill-white.svg")
//     : (bookmarkIcon.src = "./src/icons/bookmark-fill-black.svg");
// }
