let computerWins = 0;
let playerWins = 0;

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

function grantPoint(winner)
{
    switch (winner) {
        case 0:
            document.querySelector('#computerWins').textContent = `Computer: ${++computerWins}`;
            break;
        case 1:
            document.querySelector('#playerWins').textContent = `Player: ${++playerWins}`;
            break;
        case 2:
            document.querySelector('#computerWins').textContent = `Computer: ${++computerWins}`;
            document.querySelector('#playerWins').textContent = `Player: ${++playerWins}`;
            break;
        default:
            break;
    }
}

function game(computerChoice, userChoice) 
{
    switch (true) 
    {   // if player wins return 1
        case computerChoice === "Rock" && userChoice === "Scissors":
        case computerChoice === "Paper" && userChoice === "Rock":
        case computerChoice === "Scissors" && userChoice === "Paper":
            return 1;

        case userChoice === "Rock" && computerChoice === "Scissors":
        case userChoice === "Paper" && computerChoice === "Rock":
        case userChoice === "Scissors" && computerChoice === "Paper":
            return 0;
        // tie
        case computerChoice === userChoice:
            return 2;
    }
}


const picker = document.querySelectorAll('.picker > p');
for (let item of picker) 
{
    item.addEventListener('click', () =>
    {
        const userChoice = item.textContent.charAt(0).toUpperCase() + item.textContent.slice(1);
        const gameResult = game(getComputerChoice(), userChoice);
        
        switch (gameResult) 
        {
            case 0:
                document.querySelector('#result').textContent = 'You lost!';
                grantPoint(gameResult);
                break;
            case 1:
                document.querySelector('#result').textContent = 'You won!';
                grantPoint(gameResult);
                break;
            case 2:
                document.querySelector('#result').textContent = 'You tied!';
                grantPoint(gameResult);
                break;
        }
    });
}





//DEBUGGER CODE
const debug = document.querySelector('#title');
    debug.addEventListener('click', () => {
        console.log(picker.length)
    });

