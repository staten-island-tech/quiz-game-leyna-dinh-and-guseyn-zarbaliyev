import { DOMSelectors } from "./DOM";
(function () {
  console.log("connected");
  console.log(DOMSelectors);
  //   const shuffledQuestions, currentQuestionIndex;
  const startButton = document.getElementById("start-btn");
  startButton.addEventListener("click", startGame);
  function startGame() {
    console.log("started");
    // shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    // currentQuestionIndex = 0;
  }
  const questions = [
    {
      question: "What is 2 + 2",
      answers: [
        { text: "4", correct: true },
        { text: "2", correct: false },
        { text: "6", correct: false },
        { text: "10", correct: false },
      ],
    },
    {
      question: "What is 1 + 2",
      answers: [
        { text: "4", correct: false },
        { text: "2", correct: false },
        { text: "3", correct: true },
        { text: "10", correct: false },
      ],
    },
    {
      question: "What is 3 + 2",
      answers: [
        { text: "5", correct: true },
        { text: "2", correct: false },
        { text: "6", correct: false },
        { text: "10", correct: false },
      ],
    },
    {
      question: "What is 6 + 2",
      answers: [
        { text: "4", correct: false },
        { text: "2", correct: false },
        { text: "6", correct: false },
        { text: "8", correct: true },
      ],
    },
    {
      question: "What is 2 + 9",
      answers: [
        { text: "4", correct: false },
        { text: "2", correct: false },
        { text: "11", correct: true },
        { text: "10", correct: false },
      ],
    },
  ];
})();
//          woohoo im doing things backwards. what else is new.
//next TWO consts are fillers. REPLACE WHEN THEY ARE PROPERLY MADE
//note to self to remove all of the 'console.log's  I added lmao
const score = 2;
const questions = [2, 3, 5];
// REPLACE ABOVE WITH FUNCTIONING VARIABLES. please
const players = [
  {
    name: "fool",
    score: 1,
  },
  { name: "nolife", score: 5 },
];
//feel free to add more ppl in the array lol
//also make the scores make sense bc of question length. rn nolife scored 5/3 lmao
const addName = document.forms["add-name"];
//NOTE (to self): SINCE IM DOING THIS BACKWARDS
//LINK UP NEXT FUNCTION TO RUN WHEN QUESTIONS END
//NOT to run on submission of name
// idk if itll still work after that lmao. does form data save?
addName.addEventListener("submit", function (e) {
  e.preventDefault();
  //prevent default page refresh of submitted forms
  const player = addName.querySelector('input[type="text"]').value;
  console.log(player);
  const allPlayers = [...players, { name: player, score: score }];
  const leaderboardPlayers = allPlayers.sort((a, b) =>
    a.score < b.score ? 1 : -1
  );
  //sorting by score, so highest at top
  console.log(leaderboardPlayers);
  DOMSelectors.displayContainer.innerHTML = `<h1 class="leaderboard">Leaderboard</h1>`;
  leaderboardPlayers.forEach((individual) => {
    DOMSelectors.displayContainer.insertAdjacentHTML(
      "beforeend",
      `
    <div class="individual-results">
        <div class="individual">${individual.name}</div>
        <div class="individual-score ">${individual.score} of ${questions.length}</div>
    </div>`
    );
  });
  //replaces everything on page with leaderboard
  //          why did i spend so much time on this
});
console.log(DOMSelectors.choices);
