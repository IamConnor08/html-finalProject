// waits for the conet to fully load before executing. without this causes error and wont show 
//quiz results
document.addEventListener('DOMContentLoaded', function() {
// looks for id in html page. onsubmit is ran when user submits quiz
document.getElementById('quiz').onsubmit = function(event) {
    //prevents the function to submit by default making it reload the page
    event.preventDefault();

    //gets users values from sumbitted quiz
    const userAnswers = {
        question1: document.getElementById('question1').value,
        question2: document.getElementById('question2').value,
        question3: document.getElementById('question3').value,
        question4: document.getElementById('question4').value,
    };

    //correct answers for the quiz
    const answers = {
        question1: 'Stephen Curry',
        question2: 'Buffalo Wings',
        question3: 'Toyota Tocoma',
        question4: 'Connecting with friends'
    };

    //set score to zero by default
    let score = 0;

    //displasy quiz resutls header
    let results = '<h3>Quiz Results:</h3>';

    //loops through each question and checks if users answer matches the correct answer
    for (let i in answers) {
        let correct = userAnswers[i] === answers[i];
        if (correct) {
            //if user ansers correct score is increased by 1 after each loop
            score++;
            }
        }
    //adds score to string
    results += `<h4>Your Score: ${score} out of 4</h4>`;

    //displays quiz results using ID 
    //user innterHTML to get HTML inside element allowing styling
    document.getElementById('quizResults').innerHTML = results;
    };
});
