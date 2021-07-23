'use strict';

/**
 * Création du monde
 */
let compteArebours = 3;
let timelapse = 1000; // ms
let intervalId = 0;
let numberOfStars = 150;
let ramp = document.querySelector('#lauching-ramp');
let rocket = document.querySelector('#rocket');
const affichageSecondes = document.querySelector('#billboard span');
const startBtn = document.querySelector('#firing-button');
const cancelBtn = document.querySelector('#cancel-button');

document.addEventListener('DOMContentLoaded', main);

function main() {
    affichageSecondes.innerText = compteArebours;

    startBtn.addEventListener('click', startTimer);

    cancelBtn.addEventListener('click', cancelTimer);

    generateStars();
}

function startTimer() {
    rocket.src = './images/rocket2.gif';

    intervalId = setInterval(compteARebours, timelapse);
}

function compteARebours() {
    compteArebours--;
    affichageSecondes.innerText = compteArebours;

    if (compteArebours <= 0) {
        clearInterval(intervalId);
        rocketTakeOff();
    }
}

function rocketTakeOff() {
    rocket.src = './images/rocket3.gif';
    rocket.classList.add('tookOff');
}

function cancelTimer() {
    rocket.src = './images/rocket1.png';
    rocket.classList.remove('tookOff');
    clearInterval(intervalId);
    affichageSecondes.innerText = compteArebours = 3;
}

function generateStars() {
    for (let i = 0; i < numberOfStars; i++) {
        let div = document.createElement('div');
        div.classList.add('star');

        const randomClass = generateRandomNumber(); // Génère un nombre aléatoire compris entre 1 et 3
        const classes = ['tiny', 'normal', 'big']; // Lookup Table
        div.classList.add(classes[randomClass]);

        // On doit contenir les étoiles dans innerWidth et innerHeight
        const positionX = generateRandomNumber(window.innerWidth);
        const positionY = generateRandomNumber(window.innerHeight);

        div.style.top = `${positionY}px`;
        div.style.left = `${positionX}px`;

        document.body.appendChild(div);
    }
}

function generateRandomNumber(max = 3) {
    return Math.floor(Math.random() * max);
}
