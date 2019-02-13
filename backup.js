$(document).ready(function () {
   
    // Define Variables 
    const blueScore = 3;
    const greenScore = 7;
    const purpleScore = 4;
    const redScore = 6;

    var counter = 0;
    var gameScore= 0;
    var winsCounter = 0;
    var lossesCounter = 0;
    var currentScore = 0;

    randomNumber();


    function randomNumber() {
        gameScore = Math.floor((Math.random() * 100)+ 1);
        $("#theGameScore").val(gameScore); 
    }
    $('#purple').click(function () {
        console.log("purple")
        // document.textContent("Purple")
        currentScore += purpleScore;
        $("#currentScore").val(currentScore);
        evalScore();
    });
    $('#green').click(function () {
        console.log("green")
        counter += 1;
        alert("You clicked " + counter + " Times")
    });
    $('#blue').click(function () {
        console.log("blue")
        counter += 1;
        alert("You clicked " + counter + " Times")
    });
    $('#red').click(function () {
        console.log("red")
        counter += 1;
        alert("You clicked " + counter + " Times")
    });

function evalScore(){
    if (currentScore === evalScore ) {
        winsCounter++; 
        alert("You Win!") 
        currentScore = 0;
        randomNumber();
    }
    else if (currentscore>evalScore) {
        lossesCounter++;
        alert("You Lose!")
        currentScore = 0;
        randomNumber();
    } 
}
    // $('#crystalImages').click(function () {
    //     counter = i++;
    //     alert("You clicked" + counter + "Times")
    // });
    // // var newScore = ;
    // var scoreInitial = (Math.floor(Math.Random * 1000) + 1);
    // $('#score').click(function() {
    //     console.log(scoreInitial)
    // };




});