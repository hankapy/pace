// Laskee keskivauhdin (min/km) nopeuden (km/h) perusteella
function calculatePace() {
    const speed = document.getElementById('speedInput').value;
    if (speed > 0) {
        const pace = 60 / speed;
        const minutes = Math.floor(pace);
        const seconds = Math.round((pace - minutes) * 60);
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
        document.getElementById('resultPace').textContent = `Keskivauhti: ${minutes}:${formattedSeconds} min/km`;
    } else {
        document.getElementById('resultPace').textContent = "Anna positiivinen nopeus.";
    }
}

// Laskee nopeuden (km/h) keskivauhdin (min/km) perusteella
function calculateSpeed() {
    const minutes = parseInt(document.getElementById('minutesInput').value);
    const seconds = parseInt(document.getElementById('secondsInput').value);
    if (minutes >= 0 && seconds >= 0) {
        const totalMinutes = minutes + (seconds / 60);
        const speed = 60 / totalMinutes;
        document.getElementById('resultSpeed').textContent = `Nopeus: ${speed.toFixed(2)} km/h`;
    } else {
        document.getElementById('resultSpeed').textContent = "Anna oikeat minuutit ja sekunnit.";
    }
}

// Laskee ajan (tunneissa ja minuuteissa) annetun keskivauhdin (min/km) ja matkan (km) perusteella
function calculateTime() {
    const paceMinutes = parseInt(document.getElementById('paceMinutesInput').value);
    const paceSeconds = parseInt(document.getElementById('paceSecondsInput').value);
    const distance = parseFloat(document.getElementById('distanceInput').value);

    if (paceMinutes >= 0 && paceSeconds >= 0 && distance > 0) {
        const totalPaceMinutes = paceMinutes + (paceSeconds / 60);
        const totalMinutes = totalPaceMinutes * distance;
        const hours = Math.floor(totalMinutes / 60);
        const minutes = Math.floor(totalMinutes % 60);
        const seconds = Math.floor((totalMinutes % 1) * 60);
        document.getElementById('resultTime').textContent = `Aika: ${hours}h ${minutes}min ${seconds}s`;
    } else {
        document.getElementById('resultTime').textContent = "Anna oikeat keskivauhti ja matka.";
    }
}

// Laskee tarvittavan keskivauhdin (min/km) annetun matkan ja ajan perusteella
function calculateRequiredPace() {
    const distance = parseFloat(document.getElementById('timeDistanceInput').value);
    const hours = parseInt(document.getElementById('timeHoursInput').value);
    const minutes = parseInt(document.getElementById('timeMinutesInput').value);
    
    if (distance > 0 && hours >= 0 && minutes >= 0) {
        const totalMinutes = hours * 60 + minutes;
        const pace = totalMinutes / distance;
        const paceMinutes = Math.floor(pace);
        const paceSeconds = Math.round((pace - paceMinutes) * 60);
        const formattedSeconds = paceSeconds < 10 ? '0' + paceSeconds : paceSeconds;
        document.getElementById('resultRequiredPace').textContent = `Tarvittava keskivauhti: ${paceMinutes}:${formattedSeconds} min/km`;
    } else {
        document.getElementById('resultRequiredPace').textContent = "Anna oikeat matka ja aika.";
    }
}
