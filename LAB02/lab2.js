const prompt = require('prompt');

// Function to get user input for their choice
function getUserSelection(callback) {
    prompt.get(['choice'], (err, result) => {
        if (err) {
            console.error('Error getting user input:', err.message);
            return;
        }

        const userChoice = result.choice.toUpperCase();
        if (userChoice === 'ROCK' || userChoice === 'PAPER' || userChoice === 'SCISSORS') {
            callback(userChoice);
        } else {
            console.error('Invalid choice. Please choose ROCK, PAPER, or SCISSORS.');
            getUserSelection(callback);
        }
    });
}

// Function to generate a random choice for the computer
function generateComputerSelection() {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return 'ROCK';
    } else if (randomValue < 0.67) {
        return 'PAPER';
    } else {
        return 'SCISSORS';
    }
}

// Function to determine the game outcome
function determineOutcome(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie";
    } else if (
        (userChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
        (userChoice === 'SCISSORS' && computerChoice === 'PAPER') ||
        (userChoice === 'PAPER' && computerChoice === 'ROCK')
    ) {
        return 'User Wins';
    } else {
        return 'Computer Wins';
    }
}

// Start the game
console.log('Welcome to Rock-Paper-Scissors!');
console.log('Enter your choice (ROCK, PAPER, or SCISSORS):');

prompt.start();
getUserSelection((userSelection) => {
    const computerSelection = generateComputerSelection();
    console.log('User selected:', userSelection);
    console.log('Computer selected:', computerSelection);

    const result = determineOutcome(userSelection, computerSelection);
    console.log(result);

    prompt.stop();
});