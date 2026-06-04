function getComputerChoice() {
   const random = Math.floor(Math.random() * 3);
 
   if (random === 0) {
     return "rock";
   } else if (random === 1) {
     return "paper";
   } else {
     return "scissors";
   }
 }
 
 function getHumanChoice() {
   const input = prompt("Rock, Paper, or Scissors?");
   return input.toLowerCase();
 }
 
 let humanScore = 0;
 let computerScore = 0;
 
 function playRound(humanChoice, computerChoice) {
   humanChoice = humanChoice.toLowerCase();
 
   if (humanChoice === computerChoice) {
     console.log(`Tie! You both chose ${humanChoice}`);
     return;
   }
 
   const humanWins =
     (humanChoice === "rock" && computerChoice === "scissors") ||
     (humanChoice === "paper" && computerChoice === "rock") ||
     (humanChoice === "scissors" && computerChoice === "paper");
 
   if (humanWins) {
     humanScore++;
     console.log(`You win! ${humanChoice} beats ${computerChoice}`);
   } else {
     computerScore++;
     console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
   }
 }
 
 function playGame() {
   humanScore = 0;
   computerScore = 0;
 
   for (let i = 1; i <= 5; i++) {
     console.log(`Round ${i}`);
     const humanChoice = getHumanChoice();
     const computerChoice = getComputerChoice();
     playRound(humanChoice, computerChoice);
     console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
   }
 
   if (humanScore > computerScore) {
     console.log(`Final Result: You win the game!`);
   } else if (computerScore > humanScore) {
     console.log(`Final Result: You lose the game!`);
   } else {
     console.log(`Final Result: It's a tie!`);
   }
 }
 
 playGame();