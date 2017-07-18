// Computer generates random selection

var compPick = ["rock", "paper", "scissors"];

var compChoice = function () {
    var finalPick = compPick[Math.floor(Math.random() * 3)];
    console.log(finalPick);  
}

compChoice();

// User clicks buttons to select rock, paper, or scissors

var x = getElementById("Rock");
var y = getElementById("Paper");
var z = getElementById("Scissors");

function userPick(x,y,z){

}