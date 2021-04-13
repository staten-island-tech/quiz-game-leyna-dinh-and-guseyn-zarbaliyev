import { DOMSelectors } from "./DOM";

//Removed

// just. completely ignore everything above this
//also everything in the html except for the add name input and questions container
// those are the only things that need to be taken from the HTML
// ignore game.html too, just me messing around with different pages

//          woohoo im doing things backwards. what else is new.
//next TWO consts are fillers. REPLACE WHEN THEY ARE PROPERLY MADE
//note to self to remove all of the 'console.log's  I added lmao

const questions = [
  {
    question:
      "The Cuban Missile Crisis was started in response the the United States deploying missiles in...",
    answers: [
      { text: "Turkey", correct: true },
      { text: "Ukriane ", correct: false },
      { text: "Italy", correct: false },
      { text: "Cuba", correct: false },
    ],
  },
  {
    question: "The most downloaded game of all time is...",
    answers: [
      { text: "Fornite", correct: false },
      { text: "Tetris", correct: false },
      { text: "Minecraft", correct: true },
      { text: "Call of Duty: Warzone / Modern Warfare 2019", correct: false },
    ],
  },
  {
    question: "How many hairs does Mr. Whalen have on his head?",
    answers: [
      { text: "2", correct: false },
      { text: "9,007,199,254,740,991", correct: false },
      { text: "3.1415", correct: false },
      { text: "NONE LMAO", correct: true },
    ],
  },

  {
    question: "Who refuses to get into the robot?",
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

// replace questions too
const players = [
  { name: "Steve Steve", score: 1 },
  { name: "Walter White", score: 6 },
  { name: "Macross 82-99", score: 2 },
  { name: "Polish Government", score: 4 },
];
//feel free to add more ppl in the arrays lol
//also make the scores make sense bc of question length. rn nolife scored 6/5 lmao

//NOTE (to self): SINCE IM DOING THIS BACKWARDS
//LINK UP NEXT FUNCTION TO RUN WHEN QUESTIONS END
//NOT to run on submission of name
// idk if itll still work after that lmao. does form data save?

// OK maybe make the whole quiz a form so the leaderboard runs on a submission button click
// (That will be rlly easy)

// okay so you can use variables/ the ${} thingy for inputting classes and id
// lets see how that goes????
// how can i use this tho
const buttonLabels = [
  { tag: ["A1", "A2", "A3", "A4"] },
  { tag: ["B1", "B2", "B3", "B4"] },
  { tag: ["C1", "C2", "C3", "C4"] },
  { tag: ["D1", "D2", "D3", "D4"] },
  { tag: ["E1", "E2", "E3", "E4"] },
];

// is there a better way of doing the answer choice index thingys so that its more fluid?
// or nah since there will only ever be four choices
// also i dont like working with radio buttons lmao.
// ohhh boy theres so many variables
// AGH I just realized that the number of Qs generated depends on the amount of tags I have. idk how to automate the tagging system instead of just writing the whole damn alpabet
//    OK SO. should i just make an array with the alphabet letters and be like ${answerBtnTags[questions.indexOf(question)] + 1} ${answerBtnTags[questions.indexOf(question)] + 2}, etc. where answerBtnTags is just letters and the numbers are the 4 answer choice tags
// will that make it work??
// idk I'm too lazy rn lmao. it works rn but its a little inefficient bc adding those letter and number combos into the array is a pain

//         Revealing Questions Upon Entering Name
DOMSelectors.addName.addEventListener("submit", function (e) {
  e.preventDefault();
  DOMSelectors.questionContainer.innerHTML = ``;
  DOMSelectors.submitButton.classList.remove("hide");
  DOMSelectors.addName.classList.add("hide");
  //clear out name input and anything else where the questions will be
  // coming up : way too many variables for no reason. I have no idea if all of them are gonna be used
  // but hey its flexible so thats a plus. less effort later.

  questions.forEach((question) => {
    const answerBtnTags = buttonLabels[questions.indexOf(question)];
    const questionNumber = questions.indexOf(question) + 1;
    DOMSelectors.questionContainer.innerHTML += `<div class="entries ${
      "entry" + questionNumber
    }">
    <p class="questions">Question ${questionNumber}
      <p class="term ${"term" + questionNumber}">${question.question}</p>
      <div class="answers ${"answer" + questionNumber}">
          <label for="${answerBtnTags.tag[0]}" class="answer-btn ${
      answerBtnTags.tag[0]
    }">
              <input type="radio" id="${answerBtnTags.tag[0]}" name="${
      "Q" + questionNumber
    }" value="${answerBtnTags.tag[0]}" class="btn-input">
              <div class="radio-btn"></div>
              ${question.answers[0].text}
          </label>
          <label for="${answerBtnTags.tag[1]}" class="answer-btn ${
      answerBtnTags.tag[1]
    }">
              <input type="radio" id="${answerBtnTags.tag[1]}" name="${
      "Q" + questionNumber
    }" value="${answerBtnTags.tag[1]}" class="btn-input">
              <div class="radio-btn"></div>
              ${question.answers[1].text}
          </label>
          <label for="${answerBtnTags.tag[2]}" class="answer-btn ${
      answerBtnTags.tag[2]
    }">
              <input type="radio" id="${answerBtnTags.tag[2]}" name="${
      "Q" + questionNumber
    }" value="${answerBtnTags.tag[2]}" class="btn-input">
              <div class="radio-btn"></div>
              ${question.answers[2].text}
          </label>
          <label for="${answerBtnTags.tag[3]}" class="answer-btn ${
      answerBtnTags.tag[3]
    }">
              <input type="radio" id="${answerBtnTags.tag[3]}" name="${
      "Q" + questionNumber
    }" value="${answerBtnTags.tag[3]}" class="btn-input">
              <div class="radio-btn"></div>
              ${question.answers[3].text}
          </label>
      </div>
    </p>
  </div>`;
  });
});

DOMSelectors.submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  //prevent default page refresh of submitted forms
  let score = 0;
  questions.forEach((question) => {
    const answerBtnTags = buttonLabels[questions.indexOf(question)];
    const questionNumber = questions.indexOf(question) + 1;

    if (
      document.getElementById(answerBtnTags.tag[0]).checked &&
      question.answers[0].correct === true
    ) {
      ++score;
    } else if (
      document.getElementById(answerBtnTags.tag[1]).checked &&
      question.answers[1].correct === true
    ) {
      ++score;
    } else if (
      document.getElementById(answerBtnTags.tag[2]).checked &&
      question.answers[2].correct === true
    ) {
      ++score;
    } else if (
      document.getElementById(answerBtnTags.tag[3]).checked &&
      question.answers[3].correct === true
    ) {
      ++score;
    }
    console.log(score);
  });
  const player = DOMSelectors.addName.querySelector('input[type="text"]').value;
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
});
//how tf do i check if its correct

// i still dont know how to check if something is correct. man.

//like this technically works when live buuuuuuuut how do i do anything else
// also it only logs when i put it into console as a live expresson
// yea no i kinda wanna just make the whole thing a form with a submit button. EZ

// totallllllyy not making these variables completely different ways for the same result
// wtf is up with prettier and not keeping the ${} on the same line. it looks wack
