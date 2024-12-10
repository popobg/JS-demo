function startTimer(occurence) {
    let seconds = 1;
    const timer = setInterval( () => {
        console.log(`Chronomètre : ${seconds}sec.`);
        seconds++;

        if (seconds >= occurence + 1) {
            console.log("Temps écoulé !");
            // permet d'arrêter le timer
            clearInterval(timer);
        }
    }, 1000);
}

startTimer(10);