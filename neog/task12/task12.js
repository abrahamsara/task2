const quizform = document.querySelector(".quiz");
const submitBtn = document.querySelector("#submit-answers-btn");
const outputEl = document.querySelector(".output");

var correctAnswers = [
  "90°","right angled","one right angle","12, 16, 20","Equilateral triangle","100°","30°","a + b + c","no","45°",
];

function calculatepoints() {
  const Results = new FormData(quiz-form);

  let score = 0,
    i = 0;

  for (let value of Results.values()) {
    if (value === correctAnswers[i]) {
      points = points + 1;
    }
    i = i + 1;
  }
  outputEl.innerText = "The point is " + points;
}

submitBtn.addEventListener("click", calculatepoints);
