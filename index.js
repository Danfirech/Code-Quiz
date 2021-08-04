// Create my Variables

var timer = document.getElementById('timer')
var score = document.getElementById('score')
var start = document.getElementById('start')
var letsPlay = document.getElementById('letsPlay')
var quiz = document.getElementById('quiz')
var question = document.getElementById('question')
var choices = document.getElementById('choices')
var highScorePage = document.getElementById('highScorePage')
var initials = document.getElementById('initials')
var submit = document.getElementById('submit')

//Create my questions

var allQuestions = [
  {
    title: 'what is my name?',
    choices: ['Dan', 'Can', 'Fan'],
    answer: 'Dan',
  },

  {
    title: 'what is my dogs name',
    choices: ['Shari', 'little girl joji', 'lucy'],
    answer: 'lucy',
  },
]

// var questions = {
//   question: 'where am I from',
//   choiceA: 'Denmark',
//   choicB: 'Michigan',
//   choiceC: 'Arizona',
//   correct: 'C',
// }

var lastQuestionIndex = question.length - 1
var runningQuestionIndex = 0

function renderQuestion() {
  let q = allQuestions[runningQuestionIndex]
  if (submit === true) {
    return title[1]
  }

  //put title on page
}

function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + '></div>'
  }
}

start.addEventListener('click', startQuiz)
