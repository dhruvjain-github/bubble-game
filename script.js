var timer=60
var score=0
var newhit=0

function getnewhit()
{
    newhit=Math.floor(Math.random()*10)
    document.querySelector("#hitvar").textContent=newhit
}
getnewhit()
function makeBubble() {
  var cultter=""
  for (i = 0; i <= 101; i++) {
    rn = Math.floor(Math.random() * 10);

    cultter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector(".pannelbtm").innerHTML = cultter;
}
makeBubble()

function runtimer(){
    
    setInterval(function(){
        if(timer>0)
        {
            timer--;
            document.querySelector("#timerid").textContent=timer
        }
        else{
            clearInterval(timerint)
        }
    },1000)
}
runtimer()

function increasescore()
{
    score+=10
    document.querySelector("#scoreid").textContent=score
}

document.querySelector(".pannelbtm").addEventListener("click",function(dets){
    
    var clickednum=Number(dets.target.textContent)
    if(clickednum===newhit)
    {
        increasescore()
        makeBubble()
        getnewhit()
    }

})