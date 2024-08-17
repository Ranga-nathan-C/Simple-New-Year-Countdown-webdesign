function countdownToNewYear() {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const messageElement = document.getElementById('message');

    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const newYear = new Date(`January 1, ${nextYear} 00:00:00`).getTime();

    const timeRemaining = newYear - now.getTime();

    if (timeRemaining <= 0) {
        messageElement.innerText = "Happy New Year!";
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    daysElement.innerText = days.toString().padStart(2, '0');
    hoursElement.innerText = hours.toString().padStart(2, '0');
    minutesElement.innerText = minutes.toString().padStart(2, '0');
    secondsElement.innerText = seconds.toString().padStart(2, '0');

    setTimeout(countdownToNewYear, 1000);
}

countdownToNewYear();
