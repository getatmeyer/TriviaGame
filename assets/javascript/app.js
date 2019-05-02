// GLOBAL VARIABLES
var triviaContainer = document.getElementById('triviagame');
var choiceContainer = document.getElementById('choiceContainer')
var resultsContainer = document.getElementById('results');
// var submitButton = document.getElementById('submit');

var userAnswer;
var answerCorrect = 0;
var answerIncorrect = 0;
var time = 20;
var intervalId;
var clock = false;

var questions = [ {
    question: 'The line Houston, we had a problem was famously uttered aboard what spaceship?',
    choices: ["Skylab", "Apollo-11", "Gemini-12," , "Apollo-13"],
    correctAnswer: "Apollo-13",
}, 
{
    question: "On December 29, 1972 what famed weekely magazine ceased publication only to remerge as a monthly magazine in 1978?",
    choices: ["Look", "Life", "Focused", "The Saturday Evening Post"],
    correctAnswer: "Life",
}, 
{
    question: "Which 1979 flim co-starred a ginger-haired cat named Jones?",
    choices: ["Annie", "Alien", "Norma", "Coming Home"],
    correctAnswer: "Alien",
}, 
{
    question: "When copyrighted in 1972, what was the orginal phrase that accompained the smiley face logo?",
    choices: ["Have a nice day", "Have a great day", "Have-a-happy-day", "Oh happy day"],
    correctAnswer: "Have-a-happy day",
}

];  
///////// Click Button function ////////////
$(document).ready(function() {

    var vintageCar = $(".vintagecar");
    console.log(vintageCar);
    

    $("#Time-left").hide();
    $(".triviagame").hide();
    $("#results").hide();
    $("#start").on("click", start);
})
///////// Click Button function ////////////
$("#start").click(function() {
    $("#Time-left").show();
    $(".triviagame").show();
    $("#start").hide();
    $("#results").show();

})
/////////Time function///////////////////
function start() {
    if (clock === false) {
        intervalId = setInterval(count, 1000);
        clock = true;
    }
};
function count() {
    time--;
    $("#interval").text(time);
    if (time == 0 ) {
        alert("Time's over.")
        endCLock();
    };
};
$("#results").click(function() {
    clearInterval(intervalId);
});

function endCLock() {
    $("#interval").hide();
    $("button").hide();
    $("#Time-left").hide();

        
/////RenderScore /////////////

    if ($("input[name=question0]:checked").val() === questions[0].correctAnswer) {
        
        answerCorrect++;
    } else {
        answerIncorrect++;
    }
    if ($("input[name=question1]:checked").val() === questions[1].correctAnswer) {
        answerCorrect++;
    } else {
        answerIncorrect++;
    }
    if ($("input[name=question2]:checked").val() === questions[2].correctAnswer) {
        answerCorrect++;
    } else {
        answerIncorrect++;
    }
    if ($("input[name=question3]:checked").val() === questions[3].correctAnswer) {
        answerCorrect++;
    } else {
        answerIncorrect++;
    }
    
    /// display answers converted into HTML screen
    $("#displayResults").append("You got " + answerCorrect + " Correct and " + answerIncorrect + " incorrect.");

    };
  
// questions/choices converted into HTML screen
for (var i = 0; i < questions.length; i++){

    $(".triviagame").append( "<h5>" + questions[i].question + "</h5>" );

    for (var j = 0; j < questions[i].choices.length; j++) {
        
        $(".triviagame").append("<input type='radio' name='question" + i + "' value = " +  questions[i].choices[j] + " > " + questions[i].choices[j]);
    };
};
