console.log("Howdy");
var boxElem = document.querySelector("#color-flip-box");
// Javascript variables which references elements in the DOM go here
var contentContainer = document.getElementById('content-container');
var questionContainer = document.getElementById('question-container');
var choicesContainer = document.getElementById('choices-container');
console.log(choicesContainer);
var startBtn = document.getElementById('startBtn');
var choicesBtns = Array.from(document.querySelectorAll('.choices-container button'));
console.log(choicesBtns);

// store the value of the current question I'm on here
var currQuestion = 0;
                            // Question 1 answers present for all questions
var questionArray = [
    {
        title: "1. Which method outputs a message to the web console? ",
        choices: [ 'A. log', 'B. postMessage', 'C. alert', 'D. prompt'],
        correct: 'A. log'
    },
    {
        title: "2. Which is not a primitive data type in JavaScript?",
        choices: [ 'A. String', 'B. Array', 'C. Boolean', 'D. Number'],
        correct: 'B. Array'
    },
    {
        title: "3. Which expression shows strict equality?",
        choices: [ 'A. (b == c)', 'B. (b === c)', 'C. (b != c)', 'D. (b !== c)'],
        correct: 'B. (b === c)'
    },

    {
        title: "4. If expression1 and expressions2 are both true, what would (expression1 && expression2) evaluate to?",
        choices: [ 'A. Equal', 'B. Not equal', 'C. False', 'D. True'],
        correct: 'D. True'
    },

    {
        title: "5. If expression1 is true and expression2 is false, what would (expression1 || expression2) evauluate to?",
        choices: [ 'A. Equal', 'B. Not equal', 'C. False', 'D. True'],
        correct: 'D. True'
    },

    {
        title: "6. If expression1 is true and expression2 is false, which expression would evaluate to true?",
        choices: [ 'A. (expression1 && expression2)', 'B. (!expression1 || expression2)', 'C. (expression1 && !expression2)', 'D. (!expression1 && expression2)'],
        correct: 'C. (expression1 && !expression2)'
    },

    {
        title: "7. Which is not a conditional statement in JavaScript?",
        choices: [ 'A. When', 'B. If', 'C. Else', 'D. Else if'],
        correct: 'A. When'
    },

    {
        title: "8. To store groups of data in a single variable, we would use:",
        choices: [ 'A. An Index', 'B. A Property', 'C. An Array', 'D. An Element'],
        correct: 'C. An Array'
    },

    {
        title: "q9",
        choices: [ 'A', 'B', 'C', 'D'],
        correct: 'D'
    },

    {
        title: "q10",
        choices: [ 'A', 'B', 'C', 'D'],
        correct: 'B'
    },
];


// run this function when the start button is clicked
function startQuiz() {
    console.log('quiz started');
    // now what do we need to do?
    //let s unhide the main container
    contentContainer.classList.remove('hide');   //how is this targeting?
    showNextQuestion(currQuestion);
}



function checkAnswer(event) {
    console.log('click heard');
    // console.log('event is', event);
    if(event.target.matches('button')) {
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
}

function showNextQuestion(questionIndex) {
    questionContainer.textContent = questionArray[questionIndex]["title"];
    choicesBtns.forEach( function(button, index) {
        button.textContent = questionArray[0]["choices"][index];
        button.setAttribute('class', 'someValue');
        // button.addEventListener('click', checkAnswer);
    })
}

// create a function which starts the timer
// then, use that function as the callback to some event listener which you append to the start button too

startBtn.addEventListener('click', startQuiz);
// add event listener to this line
choicesContainer.addEventListener('click', checkAnswer);











