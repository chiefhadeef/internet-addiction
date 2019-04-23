function score() {

    let question1 = document.quiz.question1.value;
    let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;
    let question4 = document.quiz.question4.value;
    let question5 = document.quiz.question5.value;
    let question6 = document.quiz.question6.value;
    let question7 = document.quiz.question7.value;
    let question8 = document.quiz.question8.value;
    let question9 = document.quiz.question9.value;
    let question10 = document.quiz.question10.value;
    let question11 = document.quiz.question11.value;
    let question12 = document.quiz.question12.value;

    let addictiveness = 0;

    let answers = [];

    let levels = ["You are addicted", "You are not addicted"]


    answers.push(question1);
    answers.push(question2);
    answers.push(question3);
    answers.push(question4);
    answers.push(question5);
    answers.push(question6);
    answers.push(question7);
    answers.push(question8);
    answers.push(question9);
    answers.push(question10);
    answers.push(question11);
    answers.push(question12);


    for (let answer of answers) {
        if (answer === "Strongly Disagree") {
            addictiveness += 0;
        } else if (answer === "Disagree") {
            addictiveness += 0;
        } else if (answer === "Neutral") {
            addictiveness += 0;
        } else if (answer === "Agree") {
            addictiveness += 1;
        } else if (answer === "Strongly Agree") {
            addictiveness += 1;
        }
    }

    let range;



    if (addictiveness < 5) {
        range = 1;
    }

    if (addictiveness >= 5) {
        range = 0;
    }

    
    document.querySelector("#after-submit").style.visibility = "visibile";
    if (range === 0) {
        document.getElementById("number-correct").innerHTML = `This quiz suggests that you may be  exhibiting
        symptoms of internet addiction. Below are some resources if you feel like internet addiction may be affecting your life. ` + `<p><br>For intensive care consider <a href="https://www.netaddictionrecovery.com/">reSTART</a>, an internet rehab center which can help patients suffering with more severe types of addiction.
    <br><br>Addiction is impossible to overcome alone. Consider finding a therapist at sites like <a href="https://www.psychologytoday.com/us">Psychology Today</a>
  <br><br>If you are suffering from depression or suicidal thoughts, please visit and call the <a href="https://suicidepreventionlifeline.org/">Suicide Hotline,</a></p>`;
    } else {
        document.getElementById("number-correct").innerHTML = `This quiz suggests that you may not be exhibiting symtpoms of internet addiction.`;
        
    }
}

document.querySelector("#submit-button").addEventListener("click", score);