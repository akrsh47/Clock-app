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


const hrbtn1_doc = document.getElementById("hrbtn1")
const hrbtn2_doc = document.getElementById("hrbtn2")

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



hrbtn1_doc.addEventListener("click",function(){
    if(hours/12>1){
        hours-=12
    }
})

hrbtn2_doc.addEventListener("click",function(){
    if(hours/12<1){
        hours=time.getHours()
    }
})





window.setInterval(startClock,1000);

function openWin_stpwtch(){
    window.open("stopwatch/index.html","_self");
}

/* console.log(time.getHours())
console.log(time.getMinutes())
console.log(time.getSeconds()) */