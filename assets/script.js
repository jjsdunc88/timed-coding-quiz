console.log("Howdy");

var boxElem = document.querySelector("#color-flip-box");

var quizBoxes = [
    {
        name: "q1answer"
    },

    {
        name: "q2answer"
    },

    {
        name: "q3answer"
    },

    {
        name: "q4answer"
    },

    {
        name: "q5answer"
    },
];

for (var i = 0; i < quizBoxes.length; i++) {
    console.log(quizBoxes[i]);
    //will create boxes after class
}

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
        boxElem.style.backgroundColor = "green";
        boxIsGreen = true;
    }
    
    console.log(quizBoxes[boxIndex].name);
    boxIndex++;
    if(boxIndex >= quizBoxes.length)
        boxIndex = 0;
});