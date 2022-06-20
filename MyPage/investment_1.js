var inpotato = localStorage.getItem('potato');
var insweetpotato = localStorage.getItem('sweetPotato');
var incarrot = localStorage.getItem('carrot');
var inradish = localStorage.getItem('radish');
var inlettuce = localStorage.getItem('lettuce');
var inspinach = localStorage.getItem('spinach');
var inonion = localStorage.getItem('onion');
var incucumber = localStorage.getItem('cucumber');
var inbean = localStorage.getItem('beanSprouts');
var intomato = localStorage.getItem('tomato');

var local = document.getElementById('label-container');
local.innerText = localStorage.getItem("mypoint", 0);
var mypoint = parseInt(localStorage.getItem("mypoint", 0));
var names = '';
var prices = 0;

function init(){

    document.getElementById('investment').style.display = 'none';
    document.getElementById('delivery').style.display = 'none';
    document.getElementById('my_inventory_title').style.display = 'none';
    document.getElementById('my_investment_title').style.display = 'block';
    document.getElementById("raise").style.display = "block";
    document.getElementById("purchase").style.display = "block";

    var name = '';
    var price = 0;

    if (inpotato != 0) {
        showVeg('potato');
        name = "감자";
        price = 5880;
    }
    if (insweetpotato != 0) {
        showVeg('sweetPotato');
        name = "고구마";
        price = 5880;
    }
    if (incarrot != 0) {
        showVeg('carrot');
        name = "당근";
        price = 5880;
    }
    if (inradish != 0) {
        showVeg('radish');
        name = "무";
        price = 5880;
    }
    if (inlettuce != 0) {
        showVeg('lettuce');
        name = "상추";
        price = 5880;
    }
    if (inspinach != 0) {
        showVeg('spinach');
        name = "시금치";
        price = 5880;
    }
    if (inonion != 0) {
        showVeg('onion');
        name = "양파";
        price = 5880;
    }
    if (incucumber != 0) {
        showVeg('cucumber');
        name = "오이";
        price = 5880;
    }
    if (inbean != 0) {
        showVeg('beanSprouts');
        name = "콩나물";
        price = 5880;
    }
    if (intomato && intomato != 0) {
        showVeg('tomato');
        name = "토마토";
        price = 5880;
    }

    names = name;
    prices = price;
    localStorage.setItem("sweetPotato", 0);
}

function showVeg(vegi){
    document.getElementById(vegi).style.display = "block";
}

function invesVeg(vegi){

    if (confirm("매수한 " + names + " 수(" + localStorage.getItem(vegi) + ") X 현재 시세(" + prices + "/100)= " + parseInt(parseInt(localStorage.getItem(vegi)) * (prices / 100)) + "포인트입니다.\n매도하시겠습니까?") == true) {
        alert("매도되었습니다.");

        localStorage.mypoint = parseInt(localStorage.mypoint) + parseInt(parseInt(localStorage.getItem(vegi)) * (prices / 100));
        localStorage.removeItem(vegi);
        localStorage.setItem(vegi, 0);
        
        document.getElementById(vegi).style.display = 'none';  

        local.innerHTML = mypoint;
    } else {
        return;
    }

}

function purchase(){
    document.getElementById('my_investment').style.display = 'none';
    document.getElementById('my_delivery').style.display = 'block';
}

function delivery(){
    document.getElementById('my_investment').style.display = 'none';
    document.getElementById('delivery').style.display = 'none';
    document.getElementById('my_delivery').style.display = 'block';
}

function inves(){
    document.getElementById('my_investment').style.display = 'block';
    document.getElementById('delivery').style.display = 'none';
    document.getElementById('my_delivery').style.display = 'none';
}