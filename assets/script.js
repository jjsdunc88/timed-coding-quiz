
var boxElem = document.querySelector("#color-flip-box");
var contentContainer = document.getElementById('content-container');
var questionContainer = document.getElementById('question-container');
var choicesContainer = document.getElementById('choices-container');
var startBtn = document.getElementById('startBtn');
var choicesBtns = Array.from(document.querySelectorAll('.choices-container button'));
var quizTime = 100;
var timerContainer = document.getElementById("timer");
var currQuestion = 0;


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


// run this function when the start button is clicked
function startQuiz() {
    contentContainer.classList.remove('hide');
    showNextQuestion(currQuestion);
}


function checkAnswer(event) {
    console.log('click heard');
    // console.log('event is', event);
    if (event.target.matches('button')) {
        // check what the answer choice was that was clicked on and compare it to the current question's correct value property
        event.target.textContent == questionArray[currQuestion]['correct'] ? selectedRight() : selectedWrong();
    }
    // add one to the currQuestion variable
    currQuestion++ // currQuestion = currQuestion + 1;
    // progress to the next question
    showNextQuestion(currQuestion);
}

function selectedRight() {
    console.log('selected right!');
}

function selectedWrong() {
    console.log('selected wrong!');
    quizTime = quizTime - 10;
}


function beginTime() {
    timerContainer.textContent = "Time Left:100";

    var quizTimer = setInterval(function () {

        // if time left is less than or equal to zero, run showSaveUserScore
        if (quizTime <= 0) {
            timerContainer.textContent = 'Times up!';
            clearInterval(quizTimer);
            // now run the fuction
            saveUserScore();
            return null;
        }

        timerContainer.textContent = "Time Left:" + quizTime;
        quizTime--;

    }, 1000);


}

function showNextQuestion(questionIndex) {
    console.log(('choicesBtn before forEach', choicesBtns));
    questionContainer.textContent = questionArray[questionIndex]["title"];
    choicesBtns.forEach(function (button, index) {
        button.textContent = questionArray[questionIndex]["choices"][index];
        button.setAttribute('class', 'someValue');
        // button.addEventListener('click', checkAnswer);
    })
    console.log('choicesBtn after forEach', choicesBtns);
}

function saveUserScore() {
    console.log(('function ran'));
    contentContainer.replaceChildren();
    var scoreBox = document.createElement("div");
    var userInput = document.createElement("input");
    userInput.setAttribute("Placeholder", "Enter initials here");
    // also set style attributes here later, for everything
    // .setattribute("class", "yourClassName")
    var scoreButton = document.createElement("button");
    scoreButton.textContent = "Submit Initials";
    scoreBox.append(userInput, scoreButton);
    contentContainer.append(scoreBox);
}

// create a function which starts the timer
// then, use that function as the callback to some event listener which you append to the start button too

startBtn.addEventListener('click', startQuiz);
startBtn.addEventListener('click', beginTime);
// add event listener to this line
choicesContainer.addEventListener('click', checkAnswer);











