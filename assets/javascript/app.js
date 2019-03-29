
var triviaContainer = document.getElementById('triviagame');
var choiceContainer = document.getElementById('choiceContainer')
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var question = 0;
var choices;
var correctAnswer;
var answers;
var userAnswer;
var numCorrect;
var answerContainers;
var output = [];
var holder = []; // 

// $(document).ready(function() {
//     $("#quiz").hide()

var seventiesQuestion = [{
    question: "The line Houston, we've had a problem was famously uttered aboard what spaceship?",
    choices: ["Skylab", "Apollo 11", "Gemini 12," , "Apollo 13"],
    correctAnswer: 3
    
}, 
{
    question: "On December 29, 1972 what famed weekely magazine ceased publication only to remerge as a monthly magazine in 1978?",
    choices: ["Look", "Life", "Focused", "The Saturday Evening Post"],
    correctAnswer: 1
}, 
{
    question: "Which 1979 flim co-starred a ginger-haired cat named Jones?",
    choices: ["Annie", "Alien", "Norma", "Coming Home"],
    correctAnswer: 1
},
{
    question: "Which horse won the 1973 Kentucky Debry, Preakness, and Belmont Stakes becoming the 9th horse to take home the Triple Crown?",
    choices: ["Citation", "Affirmed", "Seattle Slew", "Secertariat"],
    correctAnswer: 3
}, 
{
    question: "The 70's catchpharse Dyn-O-mite was made popular by the sitcom Good Times, which was a spin off of what other Norman  Lear Project?",
    choices: ["Muade", "The Jeffersons", "All in the Family", "Standord and Son"],
    correctAnswer: 1
},
{
    question: "When copyrighted in 1972, what was the orginal phrase that accompained the smiley face logo?",
    choices: ["Have a nice day", "Have a great day", "Have a happy day", "Oh happy day"],
    correctAnswer: 2
}

];  
        function showQuestions( questionHolder ) {
        console.log("showQuestions : loop questions below");
        
        output = [];
        choices;
        
        // define output
        output.join(triviaContainer + output)
        // loop through each question..

        for (var i = 0; i < questionHolder.length; i++) {
            
        console.log(questionHolder[i] ); // printed to screen, PASSED>
        
        // reset the list of question to HTML
        $("#triviagame").prepend("<p>" + questionHolder[i].question + "</p>")
        correctAnswers = [];
        for (var j =0; j < seventiesQuestion[i].choices.length; j++){
        $("#choices").append( "<p>" + questionHolder[i].choices[j] + "</p>")
        } 
}
}showQuestions(seventiesQuestion,);

function showResults () {

    // gather answers from triviaContainer
    answerContainers = triviaContainer.querySelectorAll('answers')

    // keep track of user's answers
    userAnswer = '';
    numCorrect = 0;

    // loop for each answer
    for (var a = 0; a < seventiesQuestion[a].correctAnswer.length; index++) {

        // if answer is correct
        if (uswerAnswer === questions[i]. correctAnswer) {
            numCorrect ++;
            alert("Correct!");

            userAnswer = (answerContainers[a].querySelector())

        }

    }




}showResults();
