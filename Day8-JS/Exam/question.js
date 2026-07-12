export default class Question {
  constructor(id, text, correctAnswer, grade) {
    this.id = id;
    this.text = text;
    this.correctAnswer = correctAnswer;
    this.grade = grade;
  }

  checkAnswer(answer) {
    return (
      answer.trim().toLowerCase() ===
      this.correctAnswer.toLowerCase()
    );
  }
}