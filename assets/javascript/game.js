$(document).ready(function () {

    // Define Variables 
    const blueScore = 3;
    const greenScore = 7;
    const purpleScore = 4;
    const redScore = 6;

    var counter = 0;
    var gameScore = 0;
    var winsCounter = 0;
    var lossesCounter = 0;
    var currentScore = 0;

    randomNumber()

    function randomNumber() {
        gameScore = Math.floor((Math.random() * 100) + 1);
        $("#theGameScore").val(gameScore);
        document.createElement("h1");

    }
    $('#purple').click(function () {
        console.log("purple")
        // document.textContent("Purple")
        currentScore += purpleScore;
        $("#currentScore").val(currentScore);
        $("theGameScore").append(gameScore);
        evalScore();
    });
    $('#green').click(function () {
        console.log("green")
        currentScore += greenScore;
        $("#currentScore").val(currentScore);
        $("theGameScore").append(gameScore);
        evalScore();
    });
    $('#blue').click(function () {
        console.log("blue")
        currentScore += blueScore;
        $("#currentScore").val(currentScore);
        $("theGameScore").append(gameScore);
        evalScore();
    });
    $('#red').click(function () {
        console.log("red")
        currentScore += redScore;
        $("#currentScore").val(currentScore);
        $("theGameScore").append(gameScore);
        evalScore();
    });

    function evalScore() {
        if (currentScore === gameScore) {
            // borrowed
            winsCounter++;
            // $("#winn").html("<h2>Winner!</h2>");
            $("#winner").html("<h3>" + winsCounter + "</h3>");
            // borrowed end
            alert("You Win!")
            // currentScore = 1;
            // // winsCounter="";
            // $('#winner').append(winsCounter++);


            randomNumber();
        }
        else if (currentScore > gameScore) {

            lossesCounter++;
            $("#loser").html("<h3>" + lossesCounter + "</h3>");
            alert("You Lose!")
            // currentScore = 1;
            // //    var currentLosses = currentScore++;
            // // lossesCounter="";
            // $('#loser').append(currentLosses);
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