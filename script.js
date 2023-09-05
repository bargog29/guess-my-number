'use strict';

// console.log(document.querySelector('.message').textContent);



// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 13;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scor = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = 'No number';
    }
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (scor > highscore) {
            highscore = scor;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if (guess > secretNumber) {
        if (scor > 1) {
            document.querySelector('.message').textContent = 'Too high';
            scor--;
            document.querySelector('.score').textContent = scor;
        }
        else {
            document.querySelector('.message').textContent = 'You lost';
            document.querySelector('.score').textContent = 0;
        }
    }
    else if (guess < secretNumber) {
        if (scor > 1) {
            document.querySelector('.message').textContent = 'Too low';
            scor--;
            document.querySelector('.score').textContent = scor;
        }
        else {
            document.querySelector('.message').textContent = 'You lost';
            document.querySelector('.score').textContent = 0;
        }
    }
});



document.querySelector('.again').addEventListener('click', function () {
    scor = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = scor;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})