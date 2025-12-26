const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')


function setTime() {

    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();

    const secondDegree = ((seconds / 60) * 360) + 90;
    const minDegree = ((mins / 60) * 360) + 90;
    const hourDegree = ((hours / 60) * 360) + 90;



    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    if (seconds === 0) {
        secondHand.style.transition = 'none';
    }

    minuteHand.style.transform = `rotate(${minDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;


}


setInterval(setTime, 1000)