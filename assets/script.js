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

var questionArray = [
    {
        title: "q1",
        choices: [ 'A', 'B', 'C', 'D'],
        correct: 'B'
    },
    {
        title: "q2",
        choices: [ 'A', 'B', 'C', 'D'],
        correct: 'D'
    },
    // {
    //     name: "q2answer"
    // },

    // {
    //     name: "q3answer"
    // },

    // {
    //     name: "q4answer"
    // },

    // {
    //     name: "q5answer"
    // },
];


// run this function when the start button is clicked
function startQuiz() {
    console.log('quiz started');
    // now what do we need to do?
    //let s unhide the main container
    contentContainer.classList.remove('hide');
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




boxElem.style.backgroundColor = "green";
var boxIsGreen = true;
var boxIndex = 0;

// on every click
boxElem.addEventListener("click", function () {
    // if box is green
    if (boxIsGreen) {
        boxElem.style.backgroundColor = "yellow";
        boxIsGreen = false;
    }
    else{
        boxElem.style.backgroundColor = "aquamarine";
        boxIsGreen = true;
    }
    
    //boxElem.innerHTML = quizBoxes[boxIndex].name;
    boxElem.textContent = questionArray[boxIndex].name;
    boxIndex++;
    if(boxIndex >= questionArray.length)
        boxIndex = 0;
});






