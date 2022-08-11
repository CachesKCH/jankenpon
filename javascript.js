function getComputerChoice()
{
    let randInt = Math.floor(Math.random() * 3);

    switch (randInt) 
    {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function getPlayerChoice(userChoice)
{
    userChoice = Number(userChoice);
    switch (userChoice) 
    {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function game(computerChoice, userChoice) 
{
    switch (true) 
    {
        case computerChoice === "Rock" && userChoice === "Scissors":
        case computerChoice === "Paper" && userChoice === "Rock":
        case computerChoice === "Scissors" && userChoice === "Paper":
            console.log(`Computer wins! Computer: ${computerChoice} You: ${userChoice}`);
            break;

        case userChoice === "Rock" && computerChoice === "Scissors":
        case userChoice === "Paper" && computerChoice === "Rock":
        case userChoice === "Scissors" && computerChoice === "Paper":
            console.log(`Computer wins! Computer: ${computerChoice} You: ${userChoice}`);
            break;

        case computerChoice === userChoice:
            console.log(`It's a tie! Computer: ${computerChoice} You: ${userChoice}`);
            break;
    
        default:
            console.log(`You can only input 1, 2 or 3. Try again`);
            break;
    }
}

game(getComputerChoice(), getPlayerChoice(prompt("Choose a number: \n1-Rock \n2-Paper \n3-Scissors")));