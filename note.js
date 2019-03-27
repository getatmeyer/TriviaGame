ar quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var seventiesQuestion = [
    {
        question: "The line Houston, we've had a problem was famously uttered aboard what spaceship?",
        choices: ["Skylab", "Apollo 11", "Gemini 12,", "Apollo 13"],
        correctAnswer: 3
    },
    {
        question: "On December 29, 1972 what famed weekely magazine ceased publication only to remerge as a monthly magazine in 1978",
        choices: ["Look", "Life", "Focused", "The Saturday Evening Post"],
        correctAnswer: 1
    },
    {
        question: "Which horse won the 1973 Kentucky Debry, Preakness, and Belmont Stakes becoming the 9th horse to take home the Triple Crown?",
        choices: ["Citation", "Affirmed", "Seattle Slew", "Secertariat"],
        correctAnswer: 3
    },
    {
        question: "The 70's catchpharse Dyn-O-mite was made popular by the sitcom Good Times, which was a spin off of what other Norman  Lear Project?",
        choices: ["Muade", "The Jeffersons", "All in the Family", "Stanford and Son"],
        correctAnswer: 1
    },
    {
        question: "When copyrighted in 1972, what was the orginal phrase that accompained the smiley face logo?",
        choices: ["Have a nice day", "Have a great day", "Have a happy day", "Oh happy day"],
        correctAnswer: 2
    }
]; //end questions section
//function section
function seventiesTrivia() {
    // code will go here
    function showQuestions() {
        output = [];
        correctAnswer;
        // What is question in this loop? Where is it coming from? 
        // loop through each question...
        for (var i = 0; i < question.length; i++) {
            // reset the list of answers
            correctAnswers = [];
            // all html radio button
            answers.push(
                //What is this plus sign for? Looks like it is meant to concatenate but there is nothing on the other side. If you just want to push, remove the plus. 
                //Also, where is this 'questions' defined? 
                questions[i].answers[letter]
            )
        }
    }// closes showQuestions function
    function showResults(questionsInput, quizContainer, resultContainer) {
        // code will go here
        // gather answers from trivia
        answercontainers = quizContainer.quertySelectorAll('.answers')
        // keep track of user's answers
        userAnswer = '';
        numCorrect = 0;
        //same thing here - where is this 'questions' coming from? 
        // loop for each question
        for (var i = 0; i < questions.length; i++) {
            // if answer is correct
            if (userAnswer === questions[i].correctAnswer) {
                numCorrect++;
                //find matched answer
                userAnswer = (answercontainers[i].quertySelector())
            }
            showQuestions(questions, quizContainer);
            // when user click sumbit, show results
            sumbitButton.onclick = function () {
                // showResults(questions, quizContainer, resultContainer);
            }
        }
    }// closes showResults function
    //This code below does not have anything invoking it while it is locked in brackets. If you want it to be a function, you need to declare it as such. If you just want to call them, remove the brackets on lines 75 and 80.
    {
        quizContainer.innerHTML = output.join('');
        showQuestions(questions, quizContainer);
        seventiesTrivia();
        showResults(questions, quizContainer, resultContainer);
    }
} //closes seventiesTrivia function
// So right now, everything is encased inside the seventiesTrivia function, including the call to that function (line85). It isn't currently being called in this file, since it is nested in the brackets on 70  - so it isn't being called at all unless you have built it into another File. 
// Check out your variables too - in your loops you are referring to 'question.length' and 'questions' but I don't see where they are defined. 
// For showResults, if you are giving it arguments(questions, quizContainer, resultContainer) like on line 86, you need to tell it to expect those arguments in the function declaration - something like: 
// function showResults(questionsInput, quizContainer, resultContainer) {
    // so it knows it is expecting information. Then use that as you need inside.
Collapse



Message Input


Message TA_Star