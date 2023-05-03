let buttonStart = document.getElementById('start');
let buttonStop = document.getElementById('stop');
let buttonReset = document.getElementById('reset');
let timer = document.getElementById('timer');
let seg = 0;
let min = 0;
let hour = 0;

function tempo() {
    timerHTML();
    seg += 1;
    if(seg == 60) {
        min += 1;
        seg = 0;
    } else if(min == 60) {
        hour += 1;
        min = 0;
    }
}

function timerHTML() {
    let segS = seg.toString().padStart(2, '0');
    let minS = min.toString().padStart(2, '0');
    let hourS = hour.toString().padStart(2, '0');
    timer.innerHTML = `${hourS}:${minS}:${segS}`;
}

function comecarTimer(){
    timer.style.color = 'white';
    var comecar = setInterval(tempo, 1000);
    buttonStop.addEventListener('click', function(){
        clearInterval(comecar);
        timer.style.color = 'red';
    })
    buttonReset.addEventListener('click', function(){
        timer.style.color = 'white';
        clearInterval(comecar);
        seg = 0;
        min = 0;
        hour = 0;
        timerHTML();
    })
}

buttonStart.onclick = comecarTimer;
