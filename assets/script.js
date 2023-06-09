
var boxElem = document.querySelector("#color-flip-box");
var contentContainer = document.getElementById('content-container');
var questionContainer = document.getElementById('question-container');
var choicesContainer = document.getElementById('choices-container');
var startBtn = document.getElementById('startBtn');
var choicesBtns = Array.from(document.querySelectorAll('.choices-container button'));
var quizTime = 100;
var timerContainer = document.getElementById("timer");
var currQuestion = 0;
var timeScore = 0;
var quizTimer = setInterval;
var userScores = [];
var initials;


// QUESTION BANK -------------------------->

var questionArray = [
    {
        title: "1. Which method outputs a message to the web console? ",
        choices: ['A. log', 'B. postMessage', 'C. alert', 'D. prompt'],
        correct: 'A. log'
    },
    {
        title: "2. Which is not a primitive data type in JavaScript?",
        choices: ['A. String', 'B. Array', 'C. Boolean', 'D. Number'],
        correct: 'B. Array'
    },
    {
        title: "3. Which expression shows strict equality?",
        choices: ['A. (b == c)', 'B. (b === c)', 'C. (b != c)', 'D. (b !== c)'],
        correct: 'B. (b === c)'
    },

    {
        title: "4. If expression1 and expressions2 are both true, what would (expression1 && expression2) evaluate to?",
        choices: ['A. Equal', 'B. Not equal', 'C. False', 'D. True'],
        correct: 'D. True'
    },

    {
        title: "5. If expression1 is true and expression2 is false, what would (expression1 || expression2) evaluate to?",
        choices: ['A. Equal', 'B. Not equal', 'C. False', 'D. True'],
        correct: 'D. True'
    },

    {
        title: "6. If expression1 is true and expression2 is false, which expression would evaluate to true?",
        choices: ['A. (expression1 && expression2)', 'B. (!expression1 || expression2)', 'C. (expression1 && !expression2)', 'D. (!expression1 && expression2)'],
        correct: 'C. (expression1 && !expression2)'
    },

    {
        title: "7. Which is not a conditional statement in JavaScript?",
        choices: ['A. When', 'B. If', 'C. Else', 'D. Else if'],
        correct: 'A. When'
    },

    {
        title: "8. To store groups of data in a single variable, we would use:",
        choices: ['A. An Index', 'B. A Property', 'C. An Array', 'D. An Element'],
        correct: 'C. An Array'
    },

    {
        title: "9. Using a 'for' loop to execute code for each item in a collection is:",
        choices: ['A. Object Methods', 'B. Scope', 'C. Parameter', 'D. Iteration'],
        correct: 'D. Iteration'
    },

    {
        title: "10. Reusable blocks of code that perform specific tasks are known as:",
        choices: ['A. Algorithms', 'B. Functions', 'C. Loops', 'D. Variables'],
        correct: 'B. Functions'
    },
];


// Starts the Quiz ------------------->

function startQuiz() {
    contentContainer.classList.remove('hide');
    showNextQuestion(currQuestion);
}

// Shows Questions -------------------->

function showNextQuestion(questionIndex) {
    questionContainer.textContent = questionArray[questionIndex]["title"];
    choicesBtns.forEach(function (button, index) {
        button.textContent = questionArray[questionIndex]["choices"][index];
        button.setAttribute('class', 'someValue');
    })
}

// Checks Answers, deducts time for wrong answers, cycles questions ------------------->

function checkAnswer(event) {

    if (event.target.matches('button')) {
        event.target.textContent == questionArray[currQuestion]['correct'] ? selectedRight() : selectedWrong();
    }
    currQuestion++

    if (currQuestion === 10) {
        saveUserScore();
        clearInterval(quizTimer);
        timeScore = quizTime;
        timerContainer.textContent = 'Times up!'
    }
    else (showNextQuestion(currQuestion));

}


function selectedRight() {
    console.log('selected right!');
}


function selectedWrong() {
    console.log('selected wrong!');
    quizTime = quizTime - 10;
}


// Quiz Timer --------------------->

function beginTime() {
    timerContainer.textContent = "Time Left:100";

    quizTimer = setInterval(function () {


        if (quizTime <= 0) {
            timerContainer.textContent = 'Times up!';
            clearInterval(quizTimer);
            saveUserScore();
            return null;
        }

        timerContainer.textContent = "Time Left:" + quizTime;
        quizTime--;

    }, 1000);

}

// Saves and displays user scores and initials ------------------>

function saveUserScore() {
    contentContainer.replaceChildren();
    var scoreBox = document.createElement("div");
    scoreBox.id = "scoreBox";
    var userInput = document.createElement("input");
    userInput.id = "initials"
    userInput.setAttribute("Placeholder", "Enter initials here");
    var scoreButton = document.createElement("button");
    scoreButton.addEventListener("click", getinitials);
    scoreButton.textContent = "Submit Initials";
    scoreBox.append(userInput, scoreButton);
    contentContainer.append(scoreBox);
}


function getinitials() {
    initials = document.getElementById("initials").value;
    console.log(initials);
    displayUserScore();
}


function displayUserScore() {
    var tempVar = { initials: initials, score: timeScore };
    console.log(tempVar);
    if (localStorage.length === 0) {
        userScores.push(tempVar);
        localStorage.setItem("scoreKey", JSON.stringify(userScores));
    } else {
        userScores = JSON.parse(localStorage.getItem("scoreKey"));
        userScores.push(tempVar);
        localStorage.setItem("scoreKey", JSON.stringify(userScores));
    }

    for (var i = 0; i < userScores.length; i++) {
        var x = document.createElement("p");
        x.setAttribute("color", "black");
        timerContainer.appendChild(x);
        x.textContent = `${userScores[i].initials}: ${userScores[i].score}`;
    }

}


startBtn.addEventListener('click', startQuiz);
startBtn.addEventListener('click', beginTime);
choicesContainer.addEventListener('click', checkAnswer);











