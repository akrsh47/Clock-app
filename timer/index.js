const h_doc = document.getElementById("h");
const m_doc = document.getElementById("m");
const s_doc = document.getElementById("s");

const timer_doc = document.getElementById("timer");
const save_btn_doc = document.getElementById("save_btn");


let t_hr = 0;
let t_min = 0;
let t_sec = 0;

let t_hr_bf = 0;
let t_min_bf = 0;
let t_sec_bf = 0;

/* t_hr = h_doc.value;
t_min = m_doc.value;
t_sec = s_doc.value; */

let saved_once = false;



const play_btn_doc = document.getElementById("play_btn");
const pause_btn_doc = document.getElementById("pause_btn");
const stop_btn_doc = document.getElementById("stop_btn");

time_status = "pause";
timeInterval = null;


year_doc = document.getElementById("year");
const time = new Date();

function startTimer(){
    

    t_sec--;
    

    if(t_sec<0){
        
        if(t_min!=0){
        t_min--;
        t_sec=59;
        }
        else{

            
            t_hr--;
            t_min=59;
            t_sec=59;
            
        }
    
    }
    if(t_min<0){
        if(t_hr!=0){
        t_hr--;
        t_min=59;
        }
        else{
            t_hr=0;
            t_min=0;
            t_sec=0;
        }
    }



    


  

    if(t_hr<10){
        t_hr_bf = "0" + t_hr.toString();
    }
    else{
        t_hr_bf=t_hr;
    }

    if(t_min<10){
        t_min_bf="0"+t_min.toString();
    }
    else{
        t_min_bf=t_min;
    }

    if(t_sec<10){
        t_sec_bf="0"+t_sec.toString();
    }
    else{
        t_sec_bf=t_sec;
    }


    if(t_hr<0){
        t_hr=0;
        t_min=0;
        t_sec=0;
        t_hr_bf=0;
        t_min_bf=0;
        t_sec_bf=0;
        timer_doc.innerText="00 : 00 : 00";
        window.clearInterval(timeInterval)                ;
        play_btn_doc.classList.remove("pressed");
        

        time_status="pause";
        alert("Times Up !!");
        
        

    }

    if(t_hr==0 && t_min==0 && t_sec<=5 && t_sec!=0){
        timer_doc.classList.add("blink_timer");
    }
    else{
        timer_doc.classList.remove("blink_timer");

    }

   if(t_hr==""){
        t_hr_bf="00";
    }
    if(t_min==""){
        t_min_bf="00";
    }
    if(t_sec==""){
        t_sec_bf="00";
    }

    

    timer_doc.innerText =`${t_hr_bf} : ${t_min_bf} : ${t_sec_bf}`;
    
}

    play_btn_doc.addEventListener("click",function(){
       play_btn_doc.classList.add("pressed");
    pause_btn_doc.classList.remove("pressed");
    stop_btn_doc.classList.remove("pressed_stp");

      
        if(time_status=="pause"){
            timeInterval=window.setInterval(startTimer,1000);
            timer_doc.innerText =`${t_hr_bf} : ${t_min_bf} : ${t_sec_bf}`;
            time_status="play";
            
            
        }
       
    })

    pause_btn_doc.addEventListener("click",function(){
         play_btn_doc.classList.remove("pressed");
    pause_btn_doc.classList.add("pressed");
    stop_btn_doc.classList.remove("pressed_stp");

        
        if(time_status="play"){
            window.clearInterval(timeInterval)                ;
            time_status="pause"
            timer_doc.innerText =`${t_hr_bf} : ${t_min_bf} : ${t_sec_bf}`;

        }
        
    })


    stop_btn_doc.addEventListener("click",function(){
        pause_btn_doc.classList.remove("pressed");
    play_btn_doc.classList.remove("pressed");
    stop_btn_doc.classList.add("pressed_stp") ;
    time_status="pause"
    h_doc.value="";   
    m_doc.value="";   
    s_doc.value="";   


        if(t_hr==0 && t_min==0 & t_sec==0){
            alert("! please save the value !");
        }
    else{
        time_status="pause";
        window.clearInterval(timeInterval);
        t_hr=0;
        t_min=0;
        t_sec=0;
    }

        timer_doc.innerText="00 : 00 : 00";
    })


  save_btn_doc.addEventListener("click",function(){
         play_btn_doc.classList.remove("pressed");
   
    

    time_status="pause";

    
    t_hr = h_doc.value;
    t_min = m_doc.value;
    t_sec = s_doc.value;
    


    if(t_hr ==0 && t_min==0 && t_sec==0){
        alert("please enter a value");
    }

    if(t_min>60){
        t_min=60;
    }
    if(t_sec>60){
        t_sec=60;
    }


    

    if(t_hr<10){

        

        t_hr_bf = "0" + t_hr.toString();

        }
        

    else{
        t_hr_bf=t_hr;
    }

    if(t_min<10){
        
        t_min_bf="0"+t_min.toString();
        }
        

    else{
        t_min_bf=t_min;
    }

    if(t_sec<10){
        t_sec_bf="0"+t_sec.toString();
    }
    else{
        t_sec_bf=t_sec;
    }

    if(t_hr==""){
        t_hr_bf="00";
    }
    if(t_min==""){
        t_min_bf="00";
    }
    if(t_sec==""){
        t_sec_bf="00";
    }

    timer_doc.innerText =`${t_hr_bf} : ${t_min_bf} : ${t_sec_bf}`;
})


year_doc.innerText = time.getFullYear()+" "



function openWin_stpwtch(){
    window.open("/stopwatch/index.html","_self");
}
function openWin_clock(){
    window.open("/index.html","_self");
}