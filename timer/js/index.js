var session,work,rest;
document.getElementById('start').addEventListener('click',function(e){
document.getElementById('timer').style.display="block";
session=document.getElementById('noOfExercise').value;
work=document.getElementById('timeOfEachExercise').value;
rest=document.getElementById('timeBetweenTwoSet').value;

    document.getElementById('exe').innerHTML=session;
    document.getElementById('tim').innerHTML=work;
    document.getElementById('rest').innerHTML=60-work;
    document.getElementById('interval').innerHTML=rest;
    document.getElementById('first').style.display="none";
});
var minute=0;
var second=0;
var stopped=0;
var rush1=0;
var exc=0;

function setzero(){
    second=0;
    minute=0;
}

function write(){
    var s,m;
    if(second<10)
    {
        s="0"+second;
    }else{
        s=second;
    }
    if(minute<10){
        m="0"+minute;
    }else{
        m=minute;
    }
    document.getElementById('time').innerHTML=m+':'+s;
}

function stopwatch(){
    second++;
    if(second/60==1){
        second=0;
        minute++;
    }
    if(rush1==0){
        document.getElementById('title').innerHTML="Enjoy The Pain";
        write();
        if(second==work){
            work=60-work;
            exc+=0.5;
            setzero();
        }
        if((exc+0.5)==session){
            work=60-work;
            setzero();
            rush1=1;
            exc=0;
        }
    }else{
        document.getElementById("title").innerHTML="Keep Going";
        write();
        if(minute==rest){
            setzero();
            rush1=0;
        }
    }
}

function start(){
    if(stopped==0){
        interval=window.setInterval(stopwatch,100);
        document.getElementById('but').innerHTML="Pause";
        stopped=1;
    }else{
        window.clearInterval(interval);
        document.getElementById('but').innerHTML="Start";
        stopped=0;
    }
}

function reset(){
    window.clearInterval(interval);
    setzero();
    document.getElementById('but').innerHTML="Start";
    write();
    document.getElementById('timer').style.display="none";
    window.location.href="#first";
    document.getElementById('first').style.display="block";
}