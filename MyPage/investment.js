var inpotato = localStorage.getItem('potato');
var insweetpotato = localStorage.getItem('sweetpotato');
var incarrot = localStorage.getItem('carrot');
var inradish = localStorage.getItem('radish');
var inlettuce = localStorage.getItem('lettuce');
var inspinach = localStorage.getItem('spinach');
var inonion = localStorage.getItem('onion');
var incucumber = localStorage.getItem('cucumber');
var inbean = localStorage.getItem('bean');
var intomato = localStorage.getItem('tomato');

function init(){

    document.getElementById('investment').style.display = 'none';
    
    if(inpotato && inpotato != 0){
        potato();
    }
    if(insweetpotato && insweetpotato != 0){
        sweetpotato();
    }
    if(incarrot && incarrot != 0){
        carrot();
    }
    if(inradish && inradish != 0){
        radish();
    }
    if(inlettuce && inlettuce != 0){
        lettuce();
    }
    if(inspinach && inspinach != 0){
        spinach();
    }
    if(inonion && inonion != 0){
        onion();
    }
    if(incucumber && incucumber != 0){
        cucumber();
    }
    if(inbean && inbean != 0){
        bean();
    }
    if(intomato && intomato != 0){
        tomato();
    }
}

var ppp = 0;

function potato() {
    document.getElementById("potato").style.display = "block";
}

function sweetpotato() {
    document.getElementById("sweetpotato").style.display = "block";
}

function carrot() {
    document.getElementById("carrot").style.display = "block";
}

function radish() {
    document.getElementById("radish").style.display = "block";
}

function lettuce() {
    document.getElementById("lettuce").style.display = "block";
}

function spinach() {
    document.getElementById("spinach").style.display = "block";
}

function onion() {
    document.getElementById("onion").style.display = "block";
}

function cucumber() {
    document.getElementById("cucumber").style.display = "block";
}

function bean() {
    document.getElementById("bean").style.display = "block";
}

function tomato() {
    document.getElementById("tomato").style.display = "block";
}
