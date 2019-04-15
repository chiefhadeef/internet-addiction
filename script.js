function score() {
    let question1 = document.quiz.question1.value;
    let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;

    let addictiveness = 0;

    let answers = [];

    let levels = ["You are very addicted", "You are moderately addicted", "You are not addicted"]



    answers.push(question1);
    answers.push(question2);
    answers.push(question3);
    
    for (var i = 0; i < answers.length; i++) {
        if (answers[i]) {

        }
    }

    for (let answer of answers) {
        if (answer === "Strongly Disagree") {
            addictiveness -= 1.5; 
        } else if (answer === "Disagree") {
            addictiveness -= 1; 
        } else if (answer === "No Opinion") {
            addictiveness += 0; 
        } else if (answer === "Agree") {
            addictiveness += 1; 
        } else if (answer === "Strongly Agree") {
            addictiveness += 1.5; 
        }
    }

    let range;

    if (addictiveness < 1) {
        range = 0;
    }

    if (addictiveness === 0) {
        range = 1;
    }

    if (addictiveness > 1) {
        range = 2;
    } 

    

    document.querySelector("#after-submit").style.visibility = "visibile";

    document.querySelector("#message").innerHTML = levels[range];
    document.getElementById("number-correct").innerHTML = "You score a " + addictiveness + " on the addicted scale";
}

document.querySelector("#submit-button").addEventListener("click", score);