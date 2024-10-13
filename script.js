function makebubble(){
var clutter="";
for(var i=1;i<=168;i++){
    var random = Math.floor(Math.random()*10+1 )
    clutter+=`<div class="bubble"><h3>${random}</h3></div>`;
}
document.querySelector("#panelbottom").innerHTML=clutter;
}
makebubble();

var timer=60;
function runtimer(){
   var initialtimer= setInterval(function(){
        if(timer>0){
            timer--;
        }
        else{
            document.querySelector("#panelbottom").innerHTML=`<h1>Game over<\h1>`;
            clearInterval(initialtimer);
        }

     document.querySelector("#timerval").textContent=timer;
    },1000);
}
runtimer();

var newhit=0;
function getnewhit(){
     newhit = Math.floor(Math.random()*10+1)
    document.querySelector("#hitinterval").textContent= newhit;
}
getnewhit();

var score =0;
function increasescore(){
  score += 10;
  document.querySelector("#scoreval").textContent= score;
}

//  increasescore();
document.querySelector("#panelbottom")
.addEventListener("click",function(details){
var clickednum=Number(details.target.textContent);
if(clickednum==newhit){
    increasescore();
    makebubble();
    getnewhit();

}
})
