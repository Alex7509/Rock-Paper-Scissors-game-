function game(playerTurn, computerTurn) {
    const rock = 'Rock';
    const paper = 'Paper';
    const scissors = 'Scissors';

    if (playerTurn == 'rock') {
        playerTurn = rock;
    } else if (playerTurn == 'paper') {
        playerTurn = paper;
    } else if (playerTurn == 'scissors') {
        playerTurn = scissors;
    } else {
        console.log('Invalid input.Try again...');
        return;
    }
    console.log(`You choose ${playerTurn}`);

    let computerRandomNumber = Math.floor(Math.random() * 3) + 1;
    switch (computerRandomNumber) {
        case 1: computerTurn = rock; break;
        case 2: computerTurn = paper; break;
        case 3: computerTurn = scissors; break;
        default: console.log('Invalid input.Try again...'); break;
    }
    console.log(`The computer chooses ${computerTurn}`);

    if ((playerTurn === rock && computerTurn === scissors) ||
        (playerTurn === paper && computerTurn === rock) ||
        (playerTurn === scissors && computerTurn === paper)) {
        console.log('You win!');
    } else if ((playerTurn === rock && computerTurn === paper) ||
        (playerTurn === scissors && computerTurn === rock) ||
        (playerTurn === paper && computerTurn === scissors)) {
        console.log('You lose!');
    } else {
        console.log('Draw!');
    }

}
game('rock');