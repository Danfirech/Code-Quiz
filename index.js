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

document.querySelector('#letsPlay').addEventListener('click', function (allQuestions[0].choices[0]); {
  alert('hello')
})

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

  {
    title: 'what is my favorite name',
    choices: ['pizza', 'burrito', 'mango'],
    answer: 'pizza',
  },
]

var lastQuestionIndex = question.length - 1
var runningQuestionIndex = 0

function renderQuestion() {
  let q = allQuestions[runningQuestionIndex]
  if (letsPlay === true) {
    return allQuestions(title[0].title)
  }

  // Trying to go from start button

  //put title on page
}

function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + '></div>'
  }
}

// start.addEventListener('click', startQuiz)
