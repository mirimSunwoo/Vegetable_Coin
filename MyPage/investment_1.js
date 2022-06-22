// 매수
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

// 구매
var buypotato = localStorage.getItem('buypotato');
var buysweetpotato = localStorage.getItem('buysweetpotato');
var buycarrot = localStorage.getItem('buycarrot');
var buyradish = localStorage.getItem('buyradish');
var buylettuce = localStorage.getItem('buylettuce');
var buyspinach = localStorage.getItem('buyspinach');
var buyonion = localStorage.getItem('buyonion');
var buycucumber = localStorage.getItem('buycucumber');
var buybean = localStorage.getItem('buybean');
var buytomato = localStorage.getItem('buytomato');

var local = document.getElementById('label-container');
local.innerText = localStorage.getItem("mypoint", 0);
var mypoint = parseInt(localStorage.getItem("mypoint", 0));
var names = '';
var prices = 0;

function init(){
    document.getElementById('my_delivery').style.display = 'none';
    document.getElementById('investment').style.display = 'none';
    document.getElementById('delivery').style.display = 'none';
    document.getElementById('my_inventory_title').style.display = 'none';
    document.getElementById('my_investment_title').style.display = 'block';
    document.getElementById("raise").style.display = "block";
    document.getElementById("purchase").style.display = "block";

    오이 = live_price.오이;
    양파 = live_price.양파;
    감자 = live_price.감자;
    고구마 = live_price.고구마;
    당근 = live_price.당근;
    콩나물 = live_price.콩나물;
    토마토 = live_price.토마토;
    무 = live_price.무;
    상추 = live_price.상추;
    시금치 = live_price.시금치;

    var name = '';
    var price = 0;

    if (inpotato != 0) {
        showVeg('potato');
        name = "감자";
        price = 감자;
    }
    if (insweetpotato != 0) {
        showVeg('sweetPotato');
        name = "고구마";
        price = 고구마;
    }
    if (incarrot != 0) {
        showVeg('carrot');
        name = "당근";
        price = 당근;
    }
    if (inradish != 0) {
        showVeg('radish');
        name = "무";
        price = 무;
    }
    if (inlettuce != 0) {
        showVeg('lettuce');
        name = "상추";
        price = 상추;
    }
    if (inspinach != 0) {
        showVeg('spinach');
        name = "시금치";
        price = 시금치;
    }
    if (inonion != 0) {
        showVeg('onion');
        name = "양파";
        price = 양파;
    }
    if (incucumber != 0) {
        showVeg('cucumber');
        name = "오이";
        price = 오이;
    }
    if (inbean != 0) {
        showVeg('beanSprouts');
        name = "콩나물";
        price = 콩나물;
    }
    if (intomato && intomato != 0) {
        showVeg('tomato');
        name = "토마토";
        price = 토마토;
    }

    names = name;
    prices = price;
}

function showVeg(vegi,price){
    document.getElementById(vegi).style.display = "block";
    // Swal.fire({
        
    //     title:'시가총액',
    //     text:names+'의 시가 총액은 '+localStorage.getItem(vegi)*price+' Point 입니다',
    //     icon:'info'
    // })
}

function invesVeg(vegi,price){

    // if (confirm("매수한 " + names + " 수(" + localStorage.getItem(vegi) + ") X 현재 시세(" + prices + "/100)= " + parseInt(parseInt(localStorage.getItem(vegi)) * (prices / 100)) + "포인트입니다.\n매도하시겠습니까?") == true) {
    //     alert("매도되었습니다.");

    Swal.fire({
        title: parseInt(parseInt(localStorage.getItem(vegi)) * (prices / 100))+'포인트에 매도할까요?',
        text: "매수한 " + names + " 수(" + localStorage.getItem(vegi) + ") X 현재 시세(" + prices + "/100)",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#6A9258',
        cancelButtonColor: '#AAAAAA',
        confirmButtonText: '매도',
        cancelButtonText: '취소'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title:'매도가 완료되었습니다.',
                text:'마이페이지에서 확인할 수 있습니다',
                icon:'success',
                confirmButtonColor: '#6A9258'
            })
            // location.reload();
            localStorage.mypoint = parseInt(localStorage.mypoint) + parseInt(parseInt(localStorage.getItem(vegi)) * (prices / 100));
            localStorage.removeItem(vegi);
            localStorage.setItem(vegi, 0);
            
            document.getElementById(vegi).style.display = 'none';  
    
            local.innerHTML = mypoint;
        }
       
    })

}

function delivery(){
    document.getElementById('my_investment').style.display = 'none';
    document.getElementById('delivery').style.display = 'none';
    document.getElementById('my_delivery').style.display = 'block';

    document.getElementById("raise_1").style.display = "block";
    document.getElementById("purchase_1").style.display = "block";

    if(buypotato != 0 && buypotato !== null){
        document.getElementById('one').style.display = 'block';
    }
    if(buysweetpotato != 0 && buysweetpotato !== null){
        document.getElementById('two').style.display = 'block';
    }
    if(buycarrot != 0 && buycarrot !== null){
        document.getElementById('three').style.display = 'block';
    }
    if(buyradish != 0 && buyradish !== null){
        document.getElementById('four').style.display = 'block';
    }if(buylettuce != 0 && buylettuce !== null){
        document.getElementById('five').style.display = 'block';
    }if(buyspinach != 0 && buyspinach !== null){
        document.getElementById('six').style.display = 'block';
    }if(buyonion != 0 && buyonion !== null){
        document.getElementById('seven').style.display = 'block';
    }if(buycucumber != 0 && buycucumber !== null){
        document.getElementById('eight').style.display = 'block';
    }if(buybean != 0 && buybean !== null){
        document.getElementById('nine').style.display = 'block';
    }if(buytomato != 0 && buytomato !== null){
        document.getElementById('ten').style.display = 'block';
    }
}

function inves(){
    document.getElementById('my_investment').style.display = 'block';
    document.getElementById('delivery').style.display = 'none';
    document.getElementById('my_delivery').style.display = 'none';
    document.getElementById('my_investment_title').style.display = 'block';
    document.getElementById("raise").style.display = "block";
    document.getElementById("purchase").style.display = "block";
    init();
}