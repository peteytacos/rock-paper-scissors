// let rps = ['rock', 'paper', 'scissors'];  
// let computerInput = rps[Math.floor(Math.random() * rps.length)];  
  
// console.log(computerInput);  

// // get computer choice - above

// // get player choice
// let userInput = prompt("Rock, paper, scissors?");

// // function playRound(playerChoice, computerChoice) {
// //     if (playerChoice == 'rock' | 'Rock' | 'ROCK' && computerChoice == 'rock') {
// //         return ("You both picked rock, it's a tie!");
// //     } else if (playerChoice == 'rock' | 'Rock' | 'ROCK' && computerChoice == 'paper'); {
// //         console.log("You lose, paper beats rock");
// //     }
// // }

// function declareWinner(userInput, computerInput) {
//     if(userInput === "rock" && computerInput === 'paper') {
//         console.log ('You win! Rock beats paper!');     
//     } else if (userInput === 'rock' && computerInput === 'rock') {
//         console.log ('Its a tie!');     
//     } else if (userInput === 'rock' && computerInput === 'scissors') {
//         console.log ('You win! Rock beats scissors!');     
// // User Chooses Paper
//     } else if(userInput === "paper" && computerInput === 'rock') {
//         console.log ('You win! Rock beats paper!');     
//     } else if (userInput === 'paper' && computerInput === 'paper') {
//         console.log ('Its a tie!');     
//     } else if (userInput === 'paper' && computerInput === 'scissors') { 
//         console.log ('You lose! Scissors beats paper!');  
// // User Chooses Scissors
//     } else if(userInput === "scissors" && computerInput === 'rock') {
//         console.log ('You lose! Rock beats scissors!');     
//     } else if (userInput === 'scissors' && computerInput === 'paper') {
//         console.log ('You win! Scissors beats paper!');     
//     } else  { 
//         console.log ('It is a tie!');  
//     }  
// }

// console.log(declareWinner());










// // rock beats scissors
// // paper beats rock
// // scissors beats paper

// // if player has rock and computer has scissors > "You win! Rock beats scissors"
// // if player has scissors and computer has rock > "You lose! Rock beats scissors"

// // if player has paper and computer has rock > "You win! Paper beats rock"
// // if player has rock and computer has paper > "You lose! Paper beats rock"

// // if player has scissors and computer has paper > "You win! Scissors beats paper"
// // if player has paper and computer has scissors > "You lose! Rock beats scissors"

// Function to get the computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer wins!';
        } else {
            return 'You win!';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer wins!';
        } else {
            return 'You win!';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer wins!';
        } else {
            return 'You win!';
        }
    }
}

// Function to play the game
function playGame() {
    // Prompt user for their choice
    const userChoice = prompt("Choose rock, paper, or scissors").toLowerCase();
    const computerChoice = getComputerChoice();
    console.log(`You chose ${userChoice}`);
    console.log(`The computer chose ${computerChoice}`);

    // Determine the winner
    console.log(determineWinner(userChoice, computerChoice));
}

// Call playGame function to start the game
playGame();
