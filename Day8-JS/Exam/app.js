import Question from "./question.js";
import Exam from "./exam.js";

const exam = new Exam();

exam.addQuestion(
  new Question(1, "Is JavaScript fun?", "true", 5)
);

exam.addQuestion(
  new Question(2, "2 + 2 ?", "4", 10)
);

exam.addQuestion(
  new Question(3, "What is ES6?", "ecmascript 2015", 10)
);

exam.addQuestion(
  new Question(4, "Classes are sugar?", "true", 5)
);

exam.addQuestion(
  new Question(5, "Modules keyword?", "import", 15)
);

let currentQuestion = 0;

const questionBox = document.getElementById("question");
const answerInput = document.getElementById("answer");
const progress = document.getElementById("progress");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const resultBox = document.getElementById("result");
const restartBtn = document.getElementById("restart");

function showQuestion() {
  const q = exam.questions[currentQuestion];

  questionBox.textContent = q.text;

  progress.textContent = `Question ${
    currentQuestion + 1
  } of ${exam.questions.length}`;

  answerInput.value = exam.answers[q.id] || "";

  prevBtn.disabled = currentQuestion === 0;
}

function saveCurrentAnswer() {
  const q = exam.questions[currentQuestion];

  exam.saveAnswer(q.id, answerInput.value);
}

nextBtn.addEventListener("click", () => {
  saveCurrentAnswer();

  if (currentQuestion < exam.questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    showResults();
  }
});

prevBtn.addEventListener("click", () => {
  saveCurrentAnswer();

  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
});

function showResults() {
  const score = exam.calculateScore();

  let html = `
    <h2>Your Score: ${score}</h2>
  `;

  exam.getResults().forEach((r) => {
    html += `
      <div class="result-item">
        <h3>${r.question}</h3>
        <p>Your Answer: ${r.userAnswer}</p>
        <p>Correct Answer: ${r.correctAnswer}</p>
        <p class="${r.correct ? "correct" : "wrong"}">
          ${r.correct ? "Correct" : "Wrong"}
        </p>
      </div>
    `;
  });

  resultBox.innerHTML = html;

  document.querySelector(".exam-card").style.display =
    "none";

  resultBox.style.display = "block";
  restartBtn.style.display = "inline-block";
}

restartBtn.addEventListener("click", () => {
  exam.restart();

  currentQuestion = 0;

  resultBox.style.display = "none";

  document.querySelector(".exam-card").style.display =
    "block";

  restartBtn.style.display = "none";

  showQuestion();
});

showQuestion();