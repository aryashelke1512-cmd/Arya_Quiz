// Track answered state and score
let score = 0
let answeredQuestions = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false };

function checkAnswer(questionNum, chosenOption, isCorrect) {
  // Prevent duplicate scoring if the student clicks multiple buttons for the same question
  if (answeredQuestions[questionNum]) {
    alert("You have already answer this question!");
    return;
  }

  let cardBox = document.getElementById("q" + questionNum + "-box")
  let feedbackText = document.getElementById("feedback-1");

  if (questionNum === 2) feedbackText = document.getElementById("feedback-2");
  if (questionNum === 3) feedbackText = document.getElementById("feedback-3");
  if (questionNum === 4) feedbackText = document.getElementById("feedback-4");
  if (questionNum === 5) feedbackText = document.getElementById("feedback-5");
  if (questionNum === 6) feedbackText = document.getElementById("feedback-6");
  if (questionNum === 7) feedbackText = document.getElementById("feedback-7");
  if (questionNum === 8) feedbackText = document.getElementById("feedback-8");
  if (questionNum === 9) feedbackText = document.getElementById("feedback-9");
  if (questionNum === 10) feedbackText = document.getElementById("feedback-10");

  // Mark question as answered
  answeredQuestions[questionNum] = true;

  if (isCorrect) {
    score++;
    // DOM dynamic styling: Light green for correct answer
    cardBox.style.backgroundColor = "#e8f8f5";
    cardBox.style.borderColor = "2ecc71";
    feedbackText.style.color = "#27ae60";
    feedbackText.innerText = "Correct! Great job!";
  } else {
    // DOM dynamic styling: Light red for incorrect answer
    cardBox.style.backgroundColor = "#ffdada";
    cardBox.style.borderColor = "#e74c3c";
    feedbackText.style.color = "#c0392b";
    feedbackText.innerText = "Incorrect. Keep trying!";

  }

}

function showFinalScore() {
  let scoreDisplay = document.getElementById("final-score-display");
  scoreDisplay.innerHTML = "Your Final Score: " + score + "/10";
}