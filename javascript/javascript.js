let humanChoice = "";
let humanScore = 0;
let computerScore = 0;

let rockBtn = document.createElement('button');
rockBtn.textContent = "Rock";
document.body.append(rockBtn);

let paperBtn = document.createElement('button');
paperBtn.textContent = "Paper";
document.body.append(paperBtn);

let scissorsBtn = document.createElement('button');
scissorsBtn.textContent = "Scissors";
document.body.append(scissorsBtn);

let div = document.createElement('div');
div.style.backgroundColor = "pink";
div.style.margin = "20px";
div.style.whiteSpace = "pre-wrap";
document.body.append(div);

function getComputerChoice() {
   const random = Math.floor(Math.random() * 3);
   if (random === 0)      { return "rock"; } 
   else if (random === 1) { return "paper"; }
   else                   { return "scissors"; }
}
 
 function playRound(humanChoice) {
   const computerChoice = getComputerChoice();

   if (humanChoice === computerChoice) {
     div.textContent = `Tie! You both chose ${humanChoice}\n`;
     div.textContent += `Score: You ${humanScore} - ${computerScore} Computer\n`
     return;
   }
 
   const humanWins =
     (humanChoice === "rock" && computerChoice === "scissors") ||
     (humanChoice === "paper" && computerChoice === "rock") ||
     (humanChoice === "scissors" && computerChoice === "paper");
 
   if (humanWins) {
     humanScore++;
     div.textContent = `You win! ${humanChoice} beats ${computerChoice}\n`;
   } else {
     computerScore++;
     div.textContent = `You lose! ${computerChoice} beats ${humanChoice}\n`;
   }

   div.textContent += `Score: You ${humanScore} - ${computerScore} Computer\n`;
   checkWinner();
 }
 
function checkWinner() {
   if (humanScore == 5) {
      div.textContent += "\nyou win!!";
      disableButtons();
   }
   else if (computerScore == 5) { 
      div.textContent += "\n you lose.."
      disableButtons();
   }
}

function disableButtons() {
   rockBtn.disabled = true;
   paperBtn.disabled = true;
   scissorsBtn.disabled = true;
}
 
 rockBtn.addEventListener("click", function() {
   playRound("rock");
});

paperBtn.addEventListener("click", function() {
   playRound("paper");
});

scissorsBtn.addEventListener("click", function() {
   playRound("scissors");
});