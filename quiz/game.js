const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "Financing decision determines",
    choice1: "Current asset",
    choice2: "Fix asset",
    choice3: "Equity",
    choice4: "Mix of Finance",
    answer: 4,
  },
  {
    question: "Which of the following is the activity which finance people are involved",
    choice1: "investing decision",
    choice2: "marketing decision",
    choice3: "Promotion decision",
    choice4: "Non of above",
    answer: 1,
  },
  {
    question: "In finance,we refer to the market where new securities are bought and sold for the first time?",
    choice1: "Money market",
    choice2: "Capital market",
    choice3: "primary market",
    choice4: "Secondary market",
    answer: 3,
  },
  {
    question: "Who has been appointed as the 1st chairman of the international Financial services Centre Authority for a 3 years term?",
    choice1: "Sumanta Chaudhury",
    choice2: "Injeti Srinivas",
    choice3: "Anant Narayan Nanda",
    choice4: "Arun Goe",
    answer: 2,
  },
  {
    question: "The Finance Minister Nirmala Sitharaman has launched which app?",
    choice1: "Pay Commision Mobile App",
    choice2: "National Budget App",
    choice3: "Budget App",
    choice4: "Union Budget Mobile App",
    answer: 4,
  },
  {
    question: "What are the three interrelated areas of finance?",
    choice1: "Financial markets,option and forwards",
    choice2: "Banking,financial institutions and swap currency",
    choice3: "Investment, Financial management and Financial market and Financial institution",
    choice4: "All of Above",
    answer: 3,
  },
  {
    question: "An investment is said to be risky because",
    choice1: "It is dangerous",
    choice2: "It has low returns",
    choice3: "Its returns are uncertain",
    choice4: "Its raw material is unavailable ",
    answer: 3,
  },
  {
    question: "If you were able to earn interest at 3% and you started with $100,how much would you have after 3 years?",
    choice1: "$91.51",
    choice2: "$109.27",
    choice3: "$291.26",
    choice4: "$103.00",
    answer: 2,
  },
  {
    question: "The concept of time value of money is that",
    choice1: "The cash flows that occur earlier are more valuable than cash flows that occur later",
    choice2: "The cash flows that occur earlier are less valuable than cash flows that occur late",
    choice3: "The longer the time cash flows are invested, the more valuable they are in the future",
    choice4: "The future value of cash flows are always higher than the present value of cash flows",
    answer: 1,
  },
  {
    question: "Which of the following professions deals with finance?",
    choice1: "Doctors",
    choice2: "Engineers",
    choice3: "Sports",
    choice4: "Chartered Accountants",
    answer: 4,
  },
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 10;

let startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("end.html");
  }

  questionCounter++;
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionsIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) {
      return;
    }

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    if (classToApply === "correct") {
      incrementScore(SCORE_POINTS);
    }
    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();
