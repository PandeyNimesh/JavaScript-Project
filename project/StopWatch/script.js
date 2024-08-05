let timehDisplay =document.querySelector('watch');
let startBtn=document.getElementById('st');
let stopBtn=document.getElementById('stp');
let restBtn=document.getElementById('re');

let mesc = 0;
let sec = 0;
let min = 0;

let timerId=null;

startBtn.addEventListener('click',function(){
    if(timerId !==null){
  clearInterval(timerId);
    }
    timerId=setInterval(start,10);
});

stop.addEventListener('click',function(){
   
  clearInterval(timerId);
});

resetBtn.addEventListener('click',function(){
   clearInterval(timerId);
   watch.innerHTML=`00: 00: 00`;
});

function start(){
    mesc++;
    if(mesc==100){
        mesc=0;
        sec++;
        if(sec==60){
            sec=0;
            min++;
        }
    }
    let mescString=mesc<10?`0${mesc}`:mesc;
let secString=sec<10?`0${sec}`:sec;
let minString=min<10?`0${min}`:min;
 
watch.innerHTML=`${minString}: ${secString}: ${mescString}`;
}


