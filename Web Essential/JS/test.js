var colourchanger = document.getElementById('colour-changer');
var colours = ['red','blue','green','pink'];
var counter = 0;

function changeColor(){
    if(counter> colours.length){
        counter =0;
    }
    colourchanger.style.background = colours[counter];
    counter++;
}

var my_timer = setInterval(changeColor, 1000);
my_timer
colourchanger.onclick = function(){
    clearInterval(my_timer);
    colourchanger.innerHTML = "Timer stopped";
}
