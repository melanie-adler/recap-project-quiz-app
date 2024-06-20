const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer"]');

answerButton.addEventListener("click", () => {
  answer.classList.toggle("show-answer");
  answerButton.textContent === "Hide Answer"
    ? (answerButton.textContent = "Show Answer")
    : (answerButton.textContent = "Hide Answer");
  console.log("Button");
});
