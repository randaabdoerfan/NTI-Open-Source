export default class Exam {
  constructor() {
    this.questions = [];
    this.answers = {};
  }

  addQuestion(question) {
    this.questions.push(question);
  }

  saveAnswer(questionId, answer) {
    this.answers[questionId] = answer;
  }

  calculateScore() {
    let total = 0;

    this.questions.forEach((q) => {
      const userAnswer = this.answers[q.id] || "";

      if (q.checkAnswer(userAnswer)) {
        total += q.grade;
      }
    });

    return total;
  }

  getResults() {
    return this.questions.map((q) => {
      const userAnswer = this.answers[q.id] || "";
      const correct = q.checkAnswer(userAnswer);

      return {
        question: q.text,
        userAnswer,
        correctAnswer: q.correctAnswer,
        correct,
        grade: correct ? q.grade : 0,
      };
    });
  }

  restart() {
    this.answers = {};
  }
}