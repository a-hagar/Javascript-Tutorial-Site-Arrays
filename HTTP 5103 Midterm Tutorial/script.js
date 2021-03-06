//refreshes window to top
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// a function to match user inputs with answers
function results(){
 
   // the user's score for the quiz
    var userScore= 0;

    var q1 =document.quiz.q1.value;
    if (q1=="3"){
        userScore++;
    }
    var q2 =document.quiz.q2.value;
    if (q2=="4"){
        userScore++;
    }
    var q3 =document.quiz.q3.value;
    if (q3=="4"){
        userScore++;
    }
    var q4 =document.quiz.q4.value;
    if (q4=="2"){
        userScore++;
    }
    var q5 =document.quiz.q5.value;
    if (q5=="1"){
        userScore++;
    }
    var q6 =document.quiz.q6.value;
    if (q6=="2"){
        userScore++;
    }
    var q7 =document.quiz.q7.value;
    if (q7=="2"){
        userScore++;
    }
    var q8 =document.quiz.q8.value;
    if (q8=="1"){
        userScore++;
    }



    // If statements with alerts for different scores
    if (userScore == 0){
        alert("You got " + userScore + " out of 8");
        alert("You really should review the tutorial to get a better understanding of arrays!");
        window.location.reload()
    }

    if (userScore ==1 || userScore == 2|| userScore ==3){
        alert("You got " + userScore + " out of 8");
        alert("You really should review the tutorial to get a better understanding of arrays!");
        window.location.reload()
    }
    if(userScore == 4|| userScore ==5 || userScore ==6){
        alert("You got " + userScore + " out of 8");
        alert("You got some answers right, but missed also missed some. Remember, the tutorial is your best friend.");
        window.location.reload()
    }
    if (userScore ==7 || userScore ==8){
        alert("You got " + userScore + " out of 8");
        alert("You did great! You now understand arrays!");
        window.location.reload()

    }

}