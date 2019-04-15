//YaY Fun
console.log('Welcome to the world of Rock, Paper, Sissors! Enjoy ;)');

//Setting up scores
let userScores = 0;
let computerScores = 0;

//Updating scores 
let userScoreEl = document.getElementById('user-score');
let computerScoreEl = document.getElementById('computer-score');

//Updating the outcome message
const scoreBoardEl = document.querySelector('.score-board');
const resultEl = document.querySelector('.result > h2');

//RPS
const rockEl = document.getElementById('rock');
const paperEl = document.getElementById('paper');
const scissorsEl = document.getElementById('sissors');

//Reset game but reset btn at bottom of page
document.getElementById('action-button').addEventListener('click', function (e) {
    alert('😂 Your Game Is About To Be Reset 😂');
    //Updating Scores to a big fat 0 in memory
    userScores = 0;
    computerScores = 0;

    //Same on the front-end scoreboard    
    userScoreEl.textContent = userScores;
    computerScoreEl.textContent = computerScores;
});

//Computer Choices 
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randNum = Math.floor(Math.random() * 3);
    return choices[randNum];
}

function convertWord(letter){
    if(letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    return 'Scissors'
}

//Win func
function win(a, b){
    userScores++;
    userScoreEl.textContent = userScores;
    computerScoreEl.textContent = computerScores;
    resultEl.innerHTML = `💯 ${convertWord(a)} beats ${convertWord(b)}, so you win! 💯`;
    //console.log('win');
}
//Lose Func
function lose(a, b) {
    computerScores++;
    userScoreEl.textContent = userScores;
    computerScoreEl.textContent = computerScores;
    resultEl.innerHTML = `😥 ${convertWord(a)} lost to ${convertWord(b)}, so you lose! 😥`;
    //console.log('Loser');
}

//Draw Func
function draw(a, b) {    
    userScoreEl.textContent = userScores;
    computerScoreEl.textContent = computerScores;
    resultEl.innerHTML = ` 🔫 ${convertWord(a)} draws with ${convertWord(b)} - No One 🔫`;
    //console.log('Draw');
}

//User clicked
function game(userChoice){
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;    
    }   
}





//Main Game
function mainGame(){
    rockEl.addEventListener('click', function(){
        game('r');
    });

    paperEl.addEventListener('click', function () {
        game('p');
    });

    scissorsEl.addEventListener('click', function () {
        game('s');
    });
}
mainGame();

