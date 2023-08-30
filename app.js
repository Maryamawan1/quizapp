const questions = [
  {
    question: "How is a code block indicated in Python??",
    a: "brackets",
    b: "identation",
    c: "key",
    d: "None",
    correct: "c",
  },
  {
    question: "Which of the following concepts is not a part of Python??",
    a: "pointers",
    b: "loops",
    c: "dynamics",
    d: "Server Side Scripting",
    correct: "a",
  },
  {
    question: "What is PHP?",
    a: "Client Side Scripting",
    b: "Styling Language",
    c: "Server Side Scripting",
    d: "None",
    correct: "c",
  },
];

let currentQuestionIndex = 0;
let score = 0;

loadQuestion(currentQuestionIndex);

const btnSubmitElement = document.getElementById("btn-submit");
btnSubmitElement.addEventListener("click", function () {
  let result = validateInputs();
  if (result) {
    let singleQuestion = questions[currentQuestionIndex];
    if (singleQuestion.correct == result) {
      score++;
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      loadQuestion(currentQuestionIndex);
    } else {
      const quizSectionElement = document.getElementById('quiz-section');
      const resultSectionElement = document.getElementById('result-section');
      const scoreElement = document.getElementById('score');

      quizSectionElement.classList.toggle('display');
      resultSectionElement.classList.toggle('display');
      scoreElement.innerText = `Score is: ${score}`;
    }
    
    const selectedChoiceElement = document.getElementById(result);
    selectedChoiceElement.checked = false;

  } else {
    alert("Please select an option!");
  }
});

function loadQuestion(currentQuestionIndex) {
  const singleQuestion = questions[currentQuestionIndex];

  

  const questionTextElement = document.getElementById("question-text");
  const choiceATextElement = document.getElementById("a_text");
  const choiceBTextElement = document.getElementById("b_text");
  const choiceCTextElement = document.getElementById("c_text");
  const choiceDTextElement = document.getElementById("d_text");

  questionTextElement.innerText = singleQuestion.question;

  choiceATextElement.innerText = singleQuestion.a;
  choiceBTextElement.innerText = singleQuestion.b;
  choiceCTextElement.innerText = singleQuestion.c;
  choiceDTextElement.innerText = singleQuestion.d;
}

function validateInputs() {
  let result = false;
  const answersElement = document.querySelectorAll(".answer");

  answersElement.forEach(function (element) {
    if (element.checked) {
      result = element.id;
    }
  });
  return result;
}

const btnRestartElement = document.getElementById("btn-restart");

btnRestartElement.addEventListener('click', function () {
  location.reload();
});