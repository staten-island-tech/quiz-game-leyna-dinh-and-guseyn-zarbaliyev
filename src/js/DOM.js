const DOMSelectors = {
  displayContainer: document.querySelector(".container"),
  startButton: document.querySelector("#start-btn"),
  questionContainer: document.querySelector(".questions-container"),
  questionElement: document.querySelector(".question"),
  answerButtons: document.querySelector(".answer-buttons"),
  leaderboard: document.querySelector(".results"),
  choices: document.querySelectorAll('input[type="radio"]:checked'),
  addName: document.forms["add-name"],
};

export { DOMSelectors };
