// Create my Variables

var timer = document.getElementById('timer')
var scoreEL = document.getElementById('score')
var start = document.getElementById('start')
var letsPlay = document.getElementById('letsPlay')
var quiz = document.getElementById('quiz')
var questionEL = document.getElementById('question')
var choices = document.getElementById('choices')
var highScorePage = document.getElementById('highScorePage')
var initials = document.getElementById('initials')
var submit = document.getElementById('submit')

//I NEED A TIMER!!!

var timeLeft = 70
var downTimer = setInterval(function () {
  timeLeft--
  document.getElementById('timer').textContent = timeLeft
  if (timeLeft <= 0) clearInterval(downTimer)
}, 1000)

//I NEED THE SCORE!!!

var score = 0
// var scoreInterval = setInterval(function () {
//   scoreUp++
//   document.getElementById('score').textContent = scoreUp
// }, 1000)

//Create my questions

// document.querySelector('#letsPlay').addEventListener('click', function () {
// //     letsPlay(allQuestions[0].title[0])
// //   }

letsPlay.addEventListener('click', function () {
  renderQuestion()
  start.setAttribute('style', 'display: none')
  quiz.removeAttribute('style')
})

// allQuestions[0].choices[0]

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

// Trying to go from start button

//put title on page

var lastQuestionIndex = allQuestions.length - 1
var runningQuestionIndex = 0
// var goTime = allQuestions[runningQuestionIndex]

function renderQuestion() {
  var thisQuestion = allQuestions[runningQuestionIndex]
  questionEL.textContent = thisQuestion.title

  //clears answers
  choices.innerHTML = ''
  thisQuestion.choices.forEach(function (choice) {
    var button = document.createElement('button')
    button.textContent = choice
    button.addEventListener('click', function () {
      checkAnswer(event)
      if (runningQuestionIndex === lastQuestionIndex) {
        //display results 1. create function
        alert(`You scored ${score}`)
      } else {
        runningQuestionIndex++
        renderQuestion()
      }
    })
    choices.appendChild(button)
  })
}
console.log(choices)

function checkAnswer(event) {
  // console.log(
  //   event.target.textContent,
  //   allQuestions[runningQuestionIndex].answer,
  // )
  if (event.target.textContent === allQuestions[runningQuestionIndex].answer) {
    score++
  } else {
    timeLeft -= 5
  }
}
// Trying to go from start button

//put title on page

// function renderProgress() {
//   for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
//     progress.innerHTML += "<div class='prog' id=" + qIndex + '></div>'
//   }

// start.addEventListener('click', startQuiz)
