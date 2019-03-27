
var triviaContainer = document.getElementById('triviagame');
console.log(triviaContainer); // PASSED>
var resultsContainer = document.getElementById('results');
console.log(resultsContainer); // PASSED>
var submitButton = document.getElementById('submit');
console.log(submitButton); //PASED
var question = 0;
console.log(question + "question"); //PASSED
var choices;
console.log(choices = "choices"); // PASSED
var correctAnswer;
console.log(correctAnswer = "correctAnswer"); // PASSED
var answers;
console.log(answer = "answer"); //PASSED>

var userAnswer;
console.log(userAnswer = "userAnswer"); // PASSED>

var numCorrect;
console.log(numCorrect = "++"); //PASSED>

var answerContainers;
console.log(answerContainer = "answerContainer"); //PASSED

var output = [];
console.log(output = "output"); //PASSED>
var holder = []; // 

// $(document).ready(function() {
//     $("#quiz").hide()







var seventiesQuestion = [{
    question: "The line Houston, we've had a problem was famously uttered aboard what spaceship?",
    choices: ["Skylab", "Apollo 11", "Gemini 12," , "Apollo 13"],
    correctAnswer: 3
    
}, 
{
    question: "On December 29, 1972 what famed weekely magazine ceased publication only to remerge as a monthly magazine in 1978",
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
    correctAnswer: "2" 
}

]; //end questions section
    // function section
    function seventiesTrivia (triviaContainer, resultsContainer, submitButton) {
    // code will go here
    console.log("seventiesTrivia"); // printed to screen, PASSED
    
        function showQuestions( seventiessQuestion) {
        console.log("showQuestions");
        
        output = [];
        correctAnswer;
        
        // define output
        output.join(
        triviaContainer + output
    )

        // loop through each question...
        for (var i = 0; i < seventiesQuestion.length; i++) {
        console.log("seventiesQuestion" + i ); // printed to screen, PASSED>
        
        // reset the list of answers
        correctAnswers = [];

        
        }
    } showQuestions(); //invoke showQuestion function
    //showQuestion section ends
    
    function showResults ( seventiesQuestion, ) {
    // code will go here
    console.log("showResults");
    

    // gather answers from trivia
    output = [];
    answerContainesers = correctAnswer.quertySelectorAll('.answers') //FAILED>

    // keep track of user's answers
    userAnswer = '';
    numCorrect = 0;

    // loop for each question
    for (var i=0; i< seventiesQuestion.length; i++) {
    

     // if answer is correct
    if(userAnswer === question[i].correctAnswer) {
       numCorrect++;
    
    //find matched answer
    userAnswer = (answerContainers[i].quertySelector()) //FAILED>

    }
    showQuestions(question, triviaContainer);
    // when user click sumbit, show results
    sumbitButton.onclick = function() {
        // showResults (questions, quizContainer, resultContainer);
    }
  }

} showResults(); // invoke showResults function, PASSED>
//  close showResult function
    // invoke these functions
}
seventiesTrivia(); // invoke seventiesTrivia call, PASSED>
// showQuestions();
    // invoke these functions 
    triviaContainer.innerHTML = output.join(''); 
    // showQuestions(); //FAILED>
    // seventiesTrivia(); // FAILED>
    showResults(questions, quizContainer, resultsContainer); //FAILED>

