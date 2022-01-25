const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {

    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360 ) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // important to note that back ticks are used for template literals in JS

    const min = now.getMinutes();
    const minsDegrees = ((min / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)` // important to note that back ticks are used for template literals in JS

    const hour = now.getHours();
    const hoursDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000); // Set to log every second (1000 milliseconds)
