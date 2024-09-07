let time = document.getElementById('time')
let stop = document.getElementById('stop')
let start = document.getElementById('start')
let reset = document.getElementById('reset')

let msec = 0;
let sec = 0;
let mins = 0;

let timerid = null;

start.addEventListener('click' ,function(){
    if(timerid !== null){
       clearInterval(timerid) 
    }
    timerid = setInterval(starttimer,10);
});


stop.addEventListener('click' ,function(){
    clearInterval(timerid) 
});

reset.addEventListener('click' ,function(){
    clearInterval(timerid) 
    time.innerHTML = `00:00:00`
    msec = sec = mins = 0

    
});


function starttimer(){
    msec++
    if(msec==10){
        sec++
        msec = 0;
    
    if(sec==60){
        mins++
        sec = 0;

    }
}

let msecstring = msec < 10 ? `0${msec}` : msec;
let secstring = sec < 10 ? `0${sec}` : sec;
let minsstring = mins < 10 ? `0${mins}` : mins;

time.innerHTML =` ${minsstring} : ${secstring} : ${msecstring}`
}

