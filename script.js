function startTimer(){
    const timeInput = document.getElementById('time');
    let seconds = 0;
    setInterval(() => {
        seconds++;
        timeInput.value = `Time elapsed: ${seconds} seconds`;
    }, 1000);
}

function stopTimer(){
    const timeInput = document.getElementById('time');
    timeInput.value = '';
}

