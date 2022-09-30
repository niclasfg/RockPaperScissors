console.log("Lets play Rock Paper scissors!");

const results = ["Rock", "Paper", "Scissors"];
const playerChoiceText = "Choose your weapon: \n 1: Rock \n 2: Paper \n 3: Scissors\n";

function getComputerChoice() {
    var computerChoice = results[Math.floor(Math.random() * 3)];
    console.log("The computer choose: \t" + computerChoice);
    return computerChoice; 
}

function getPlayerChoice(){
    while (true) {       
        var playerChoice = prompt(playerChoiceText);
        switch (playerChoice) {
            case "1":
            case "2":
            case "3":
                console.log("The player choose: \t" + results[playerChoice - 1]);
                return results[playerChoice - 1];  
        }
    }
}

function playRound(){
    var playerChoice = results.indexOf(getPlayerChoice());
    var computerChoice = results.indexOf(getComputerChoice());

    var comparison = ((playerChoice - computerChoice)%3 + 3) %3;

    if (comparison == 0) {
        console.log("It's a tie!");
        return 0;
    }
    else if (comparison == 1) {
        console.log("You win!");
        return 1;
    }
    else {
        console.log("You lose...");
        return -1;
    }
}


function playGame(){    
    var playerScore = 0;
    var computerScore = 0;
    while(playerScore < 3 && computerScore < 3){
        var roundResult = playRound();
        if(roundResult == 1){
            playerScore += 1;
        }
        else if (roundResult == -1) {
            computerScore += 1;
        }
    }
    console.log(playerScore + " - " + computerScore);
}

playGame()