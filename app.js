// Computer generates random selection

var compPick = ["rock", "paper", "scissors"];

var compChoice = function () {
    var finalPick = compPick[Math.floor(Math.random() * 3)];
    console.log(finalPick);  

}

compChoice();

