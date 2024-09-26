
// initialize scores
let roundNumber = 1;
let humanScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

const maxRounds = 5;

// function that randomly returns rock, paper, or scissors (computer's choice)

function getComputerChoice() {
    let numChoice = Math.floor(Math.random() * 3);
    return numChoice
}

// function that prompts user for choice

// function getHumanChoice() {
//     let choice = prompt("akmens skeres papirits, viens divi tris!");
//     if (!choice) {
//         return 4;
//     }
//     // return numeric value of choice if input is rock paper or scissors
//     if (choice.toLowerCase() === choices[0]) {
//         return 0;
//     } else if (choice.toLowerCase() === choices[1]) {
//         return 1;
//     } else if (choice.toLowerCase() === choices[2]) {
//         return 2;
//     } else {
//         return 3;
//     }
// }
const choiceContainer = document.querySelector("#choiceContainer");
const choiceArray = choiceContainer.querySelectorAll("button");
const startButton = document.querySelector('#start');
const roundAnnouncer = document.querySelector("h2");
const choiceAnnouncer = document.querySelector("#choiceAnnouncer");

const runningScore = document.querySelector("#runningScore");
const finalResult = document.querySelector("#winner");


choiceArray.forEach(function(choice) {
    choice.addEventListener("click", function() {
        chosenWeapon = this.id;
        let humanChoice = getHumanChoice(chosenWeapon);
        let computerChoice = getComputerChoice();
        playRound(computerChoice, humanChoice);

    });
});

// based on the button pressed (i.e. id passed), return the choice number 
function getHumanChoice(chosenWeapon) {
    if (chosenWeapon === choices[0]) {
        return 0;
    } else if (chosenWeapon === choices[1]) {
        return 1;
    } else if (chosenWeapon === choices[0]) {
        return 2;
    }
}



// function that allows to play a single round

function playRound(computerChoice, humanChoice) {
    // if 0, 1, or 2 was not assigned, dont carry on
    // if (humanChoice === 3) {
    //     console.log("no cheating! choose rock, paper, or scissors!");
    //     return 1
    // }
    // if (humanChoice === 4) {
    //     return 1;
    // }
    console.log("computer chose " + choices[computerChoice])
    console.log("you chose " + choices[humanChoice]);
    choiceAnnouncer.textContent = "Computer chose " + choices[computerChoice] + ". You chose " + choices[humanChoice] + ". ";

    // roundAnnouncer.textContent = "Round" + roundNumber;
    // 1>0, 2>1, 0>2
    // could do this as choices[a] always beats choices[a-1]

    if (choices[humanChoice] === choices[computerChoice-1]) {
        computerScore++;
        console.log("You lose! " + choices[computerChoice] + " beats " + choices[humanChoice]);
        choiceAnnouncer.textContent += choices[computerChoice] + " beats " + choices[humanChoice] + "!";
    } else if (choices[humanChoice] === choices[computerChoice+1]) {
        humanScore++;
        console.log("You win! " + choices[humanChoice] + " beats " + choices[computerChoice]);
        choiceAnnouncer.textContent += choices[humanChoice] + " beats " + choices[computerChoice] + "!";
    } else {
        computerScore++;
        humanScore++;
        console.log("Tie!");
        choiceAnnouncer.textContent += "Tie!";
    }

    // update things
    runningScore.textContent = "You: " + humanScore + "; Computer: " + computerScore;

    if (roundNumber < maxRounds) {
        roundNumber ++;
    } else {
        endGame(computerScore, humanScore);
    }


    return 0;
}

function endGame(computerScore, humanScore) {
    let outcome = null;
    outcome = (humanScore === computerScore) ? 0
        : (humanScore > computerScore) ? 1
            : 2;
    if (outcome === 0) {
        console.log("gg, it's a tie!");
        finalResult.textContent = "Tie!";
    } else if (outcome === 1) {
        console.log("you win the game");
        finalResult.textContent = "You won!";
    } else if (outcome === 2) {
        console.log("ha! computer wins");
        finalResult.textContent = "Computer won!";
    }

    startButton.disabled = false;
    choiceArray.forEach(function(choice) {
        choice.disabled = true;
    })
}

// function playGame() {
//     const maxRounds = 5;
//     for (round=1; round<=maxRounds; round++) {
//         console.log("Round " + round + "!");


//         // round = round-playRound(getComputerChoice(), getHumanChoice()); // ._. preemptively unincrements if bad input
//     }
//     console.log("Final score: You - " + humanScore + ", Computer - " + computerScore)
//     let outcome = null;
//     outcome = (humanScore === computerScore) ? 0
//         : (humanScore > computerScore) ? 1
//             : 2;
//     if (outcome === 0) {
//         console.log("gg, it's a tie!");
//     } else if (outcome === 1) {
//         console.log("you win the game");
//     } else if (outcome === 2) {
//         console.log("ha! computer wins");
//     }
// }

// playRound(getComputerChoice(), getHumanChoice());
// playGame();

startButton.addEventListener("click", function() {
    startButton.disabled = true;
    choiceArray.forEach(function(choice) {
        choice.disabled = false;
    })


    // reset stuff
    humanScore = 0;
    computerScore = 0;
    roundNumber = 1;
    roundAnnouncer.textContent = "Round" + roundNumber;
    finalResult.textContent = "";
    runningScore.textContent= "";

}
)