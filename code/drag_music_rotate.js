function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
function cssChange() {
    var x = document.getElementById("drag1");
}
function play() { 
    var audio = document.getElementById('audio_play'); 
    if (audio.paused) { 
        audio.play(); 
    }else{ 
        audio.pause(); 
        audio.currentTime = 0 
    }
}
function rotateL_1() {
    document.getElementById("drag1").style.transform += "rotate(90deg)";
}
function rotateL_2() {
    document.getElementById("drag2").style.transform += "rotate(90deg)";
}
function rotateL_3() {
    document.getElementById("drag3").style.transform += "rotate(90deg)";
}
function rotateL_4() {
    document.getElementById("drag4").style.transform += "rotate(90deg)";
}
function rotateL_5() {
    document.getElementById("drag5").style.transform += "rotate(90deg)";
}
function rotateL_6() {
    document.getElementById("drag6").style.transform += "rotate(90deg)";
}
function rotateL_7() {
    document.getElementById("drag7").style.transform += "rotate(90deg)";
}
var on = 0;
function darkmode() {
    if(on==0) {
    document.querySelector("body").style.background = "#222";
    document.getElementById("readytile").style.background = "#666";
    on=1;
    }
    else if(on==1) {
    document.querySelector("body").style.background = "#fff";
    document.getElementById("readytile").style.background = "#c6c6c6";
    on=0;
    }
}
