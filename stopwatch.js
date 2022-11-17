//variables and fetching
//variables for buttons
const startStopBtn=document.querySelector("#startStopBtn")
const resetBtn=document.querySelector("#resetBtn")

//variables for time values
let milliseconds=0;
let seconds=0;
let minutes=0;
let hours=0;

//variables for the leading 0
let leadingMilliSeconds=0;
let leadingSeconds=0;
let leadingMinutes=0;
let leadingHour=0;

//stopwatch function. To increment minutes when seconds reach 60, while seconds themselves go back to zero, creating a loop

function stopWatch(){
   milliseconds++

  if(milliseconds/100===1){
    milliseconds=0;
    seconds++  
    if(seconds/60 ===1){
        seconds=0;
        minutes++
    
    if(minutes/60 ===1){
        minutes=0;
        hours++
    }}

  }

  if (milliseconds<10){
    leadingMilliSeconds="0"+milliseconds.toString()
      }
      else{
        leadingMilliSeconds=milliseconds
      }
if (seconds<10){
  leadingSeconds="0"+seconds.toString()
    }
    else{
      leadingSeconds=seconds
    }
if (minutes<10){
  leadingMinutes="0"+minutes.toString()
    }
    else{
      leadingMinutes=minutes
    }
if (hours<10){
  leadingHour="0"+hours.toString()
    }
    else{
      leadingHour=hours
    }
    let displayedTimer=
    document.getElementById('timer').innerText=leadingHour+ ":"+leadingMinutes+":"+leadingSeconds+":"+ leadingMilliSeconds;
//the variable will be displaying the time accomodating the seconds increment
}
//the setinterval method calls a function that increments the milliseconds to 100, from where the seocnds now increase to 60 and so forth. the leadinseconds posted in the displaytrimer is a zero that coagulates with the respective time value when the value is less than 10.when the value becomes above 10, the n the value is eaquoted to the leading value
//settimeout executes the function added after the specified time


//reset and start stop button
var timerInterval=null;
var timerStatus="stopped"
/* to make the start and stop button, i'll first assign the setintrval on window to the variable timerInterval, which will be initiated in some sort of loop, with an if condition
the condition changes the timerStaus to stopped, with a condition that clears the interval, returning the timertstatus to stopped, for continual see sawing*/


startStopBtn.addEventListener("click", function(){
if(timerStatus==="stopped"){
    timerInterval=window.setInterval(stopWatch, 10);
    document.getElementById("startStopBtn").innerHTML='<i class="material-icons">pause</i>'//when the interval is set, then the icon in the startstopbtn becomes this
    timerStatus="started"//on click the timerstatus changes to started. basically the click changes the timerstatus variable directly to else option
}
else{
    window.clearInterval(timerInterval);
    document.getElementById("startStopBtn").innerHTML='<i class="material-icons" id="play">play_arrow</i>'
    timerStatus="stopped"//returns the function back to the firts if condition

}
})

resetBtn.addEventListener("click", function(){
 window.clearInterval(timerInterval);
 milliseconds=0; 
 seconds=0;
 minutes=0;
 hours=0;

 document.getElementById("timer").innerHTML="00:00:00"
})