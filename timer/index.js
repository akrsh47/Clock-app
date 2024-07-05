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

    

    timer_doc.innerText =`${t_hr_bf} : ${t_min_bf} : ${t_sec_bf}`;
    
}

    play_btn_doc.addEventListener("click",function(){
       

      
        if(time_status=="pause"){
            timeInterval=window.setInterval(startTimer,1000);
            timer_doc.innerText =`${t_hr_bf} : ${t_min_bf} : ${t_sec_bf}`;
            time_status="play";
            
            
        }
       
    })

    pause_btn_doc.addEventListener("click",function(){

        
        if(time_status="play"){
            window.clearInterval(timeInterval)                ;
            time_status="pause"
        }
        
    })


    stop_btn_doc.addEventListener("click",function(){

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
    

    
    t_hr = h_doc.value;
    t_min = m_doc.value;
    t_sec = s_doc.value;
    


    if(t_hr ==0 && t_min==0 && t_sec==0){
        alert("please enter a value");
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
    timer_doc.innerText =`${t_hr_bf} : ${t_min_bf} : ${t_sec_bf}`;
})




