const choices = ["Rock", "Paper", "Scissor"];
const playerInput = document.getElementById("playerInput");
const computerInput = document.getElementById("computerInput");
const displayResult = document.getElementById("displayResult");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
let pScore = 0;
let cScore = 0;

function run(input){
    const computer = choices[Math.floor(Math.random()*3)];
    let result = "";

    if(input===computer){
        result = `It's a Tie!`;
        displayResult.classList.remove("win", "lose");
    }
    else{ 
        switch(input){
            case "Rock":
                result = (computer === "Scissor") ? "You Win!" : "You Lose!";
                break;
            case "Paper":
                result = (computer === "Rock") ? "You Win!" : "You Lose!";
                break;
            case "Scissor":
                result = (computer === "Paper") ? "You Win!" : "You Lose!";
                break;
        }
    }
    displayResult.textContent = result;
    playerInput.textContent = `PLAYER: ${input}`;
    computerInput.textContent = `COMPUTER: ${computer}`;

    if(result === "You Win!"){
        pScore++;
        displayResult.classList.remove("lose");
        displayResult.classList.add("win");
    }
    
    if(result === "You Lose!"){
        cScore++;
        displayResult.classList.remove("win");
        displayResult.classList.add("lose");
    }
    playerScore.textContent = `Player Score: ${pScore}`;
    computerScore.textContent = `Computer Score: ${cScore}`; 
    playerScore.classList.add("win");
    computerScore.classList.add("lose");

}

