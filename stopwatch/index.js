function openWin_clock(){
    window.open("/index.html","_self");
}
function openWin_timer(){
    window.open("/timer/index.html","_self");
}

const stp_clock_doc = document.getElementById("stp_clock");

const play_btn_doc = document.getElementById("play_btn");
const pause_btn_doc = document.getElementById("pause_btn");
const stop_btn_doc = document.getElementById("stop_btn");

let milli_s = 0;
let seconds =0;
let minutes =0;

let beforeZeroMilliSec=0;
let beforeZeroSec = 0;
let beforeZeroMin = 0;

let timeInterval = null;
let time_status = "pause"

const time = new Date();

const year_doc = document.getElementById("year");


function startStopWatch(){

    milli_s++;
    
    if(milli_s/100===1){
        milli_s=0;
        seconds++;
    }
    if(seconds/60===1){
        seconds=0;
        minutes++;
    }



    if(milli_s<10){
        beforeZeroMilliSec = "0" + milli_s.toString()
    }
    else{
        beforeZeroMilliSec=milli_s.toString()
    }

    if(seconds<10){
        beforeZeroSec ="0"+seconds.toString()
    }
    else{
        beforeZeroSec= seconds.toString()
    }

    if(minutes<10){
        beforeZeroMin = "0"+minutes.toString()
    }
    else{
        beforeZeroMin=minutes.toString()
    }
    

    stp_clock_doc.innerText=`${beforeZeroMin} : ${beforeZeroSec} : ${beforeZeroMilliSec}`;


}

play_btn_doc.addEventListener("click",function(){
    
    play_btn_doc.classList.add("pressed");
    pause_btn_doc.classList.remove("pressed");
    stop_btn_doc.classList.remove("pressed_stp")


    if(time_status=="pause"){
        timeInterval = window.setInterval(startStopWatch,10);
        time_status="play";

    }
    
})

pause_btn_doc.addEventListener("click",function(){
    play_btn_doc.classList.remove("pressed");
    pause_btn_doc.classList.add("pressed");
    stop_btn_doc.classList.remove("pressed_stp")


    if(time_status=="play"){
        window.clearInterval(timeInterval);
        time_status="pause";
    }
})


stop_btn_doc.addEventListener("click",function(){
    pause_btn_doc.classList.remove("pressed");
    play_btn_doc.classList.remove("pressed");

    stop_btn_doc.classList.add("pressed_stp")


    time_status="pause";
    window.clearInterval(timeInterval);
    milli_s=0;
    seconds=0;
    minutes=0;

    stp_clock_doc.innerText = "00 : 00 : 00";
})


year_doc.innerText = time.getFullYear()+" "

// styling buttons using js



//window.setInterval(startStopWatch,10)
