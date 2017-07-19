$("#endgame").click(function(event){
    event.preventDefault();
    playRPS();
}); 

function playRPS() {
    
       
    var rndmPick = Math.random();
    var threePick = Math.floor(rndmPick * 3);
    var userChoice = document.getElementsByName("user-choices");
    var compPick = ["Rock", "Paper", "Scissors"];
    var outcome = "";

    for (var i = 0; i < userChoice.length; i++) {
        userPick = userChoice[i];

        if (userPick.checked) {
            var userCheck = userPick.value;
        }
    }

    if (threePick === 0) {
        if (userCheck === "Rock") {
            outcome = "Game is a tie.";
        }
        else if (userCheck === "Paper") {
            outcome = "Paper covers Rock, you are the winner!";
        }
        else if (userCheck === "Scissors") {
            outcome = "Rock crushes Scissors, you lose.";
        }
        else {
            outcome = "Please make a selection.";
        }
    }
    else if (threePick === 1) {
        if (userCheck === "Rock") {
            outcome = "Paper covers Rock, you lose.";
        }
        else if (userCheck === "Paper") {
            outcome = "Game is a tie.";
        }
        else if (userCheck === "Scissors") {
            outcome = "Scissors slice Paper, you are the winner!";
        }
        else {
            outcome = "Please make a selection.";
        }
    }
    else if (threePick === 2) {
        if (userCheck === "Rock") {
            outcome = "Rock crushes Scissors, you are the winner!";
        }
        else if (userCheck === "Paper") {
            outcome = "Scissors slice Paper, you lose.";
        }
        else if (userCheck === "Scissors") {
            outcome = "Game is a tie.";
        }
        else {
            outcome = "Please make a selection.";
        }
    }
    else {
        outcome = "Play the game";
    }

    var output = document.getElementById("output");
    var reply = `You chose ${userCheck} and the computer chose ${compPick[threePick]}. ${outcome}`;
    output.innerHTML = reply;
    

}