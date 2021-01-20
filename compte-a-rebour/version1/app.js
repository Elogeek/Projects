// DOM
const txtBox = document.querySelector('.txt');
const timeBox = document.querySelector('.time');
const daysBox = document.getElementById('days');
const hoursBox = document.getElementById('hours');
const minutesBox = document.getElementById('minutes');
const secondsBox = document.getElementById('seconds');

// Fonction qui affiche le temps restant jusqu'à endDate qu'on lance à intervalles réguliers
let getRemainingTime = setInterval(() => {
    // Date de fin
    let endDate = new Date('1 January 2022 00:00:00');
    // Date actuelle
    let now = new Date();
    // Différence date de fin - date actuelle
    let timeRemaining = endDate - now;

    // Calculs du temps pour les jours, heures, minutes, secondes
    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Affichage
    daysBox.innerText = `Days: ${days}`;
    hoursBox.innerText = `Hours: ${hours}`;
    minutesBox.innerText = `Minutes: ${minutes}`;
    secondsBox.innerText = `Seconds: ${seconds}`;

    // Si le compte à rebours est inférieur ou égal à 0...
    if (timeRemaining <= 0) {
        clearInterval(getRemainingTime);
        txtBox.innerText = 'Happy New Year 2022 !';
        timeBox.style.display = 'none';
    }

}, 100);
