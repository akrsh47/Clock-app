const time = new Date();


let get_seconds = time.getSeconds();
let get_minutes = time.getMinutes();
let get_hours = time.getHours();

let seconds= get_seconds;
let hours = get_hours;
let minutes = get_minutes;

 let beforeZeroSec = 0;
let beforeZeroMin =0;
let beforeZeroHour = 0;

const clock_doc = document.getElementById("clock");

function startClock(){
    seconds++;

    if(seconds/60===1){
        minutes++;
        seconds=0;
    }
    if(minutes/60===1){
        hours++;
        minutes=0;
    }
    if(hours/24==1){
        hours=0;
    }

    if(seconds<10){
        beforeZeroSec="0"+seconds.toString();
    }
    else{
        beforeZeroSec=seconds;
    }
    if(minutes<10){
        beforeZeroMin = "0"+minutes.toString();
    }
    else{
        beforeZeroMin = minutes;
    }
    if(hours<10){
        beforeZeroHour = "0"+hours.toString();
    }
    else{
        beforeZeroHour=hours;
    }

    


    clock_doc.innerText =`${beforeZeroHour} : ${beforeZeroMin} : ${beforeZeroSec}`;


}



window.setInterval(startClock,1000);

/* console.log(time.getHours())
console.log(time.getMinutes())
console.log(time.getSeconds()) */