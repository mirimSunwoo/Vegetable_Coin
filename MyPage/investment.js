var inpotato = localStorage.getItem('potato');
var insweetpotato = localStorage.getItem('sweetpotato');
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

function init() {
    document.getElementById('investment').style.display = 'none';
    document.getElementById('delivery').style.display = 'none';
    document.getElementById('my_inventory_title').style.display = 'none';
    document.getElementById('my_investment_title').style.display = 'block';

    if (inpotato && inpotato != 0) {
        potato();
    }
    if (insweetpotato && insweetpotato != 0) {
        sweetpotato();
    }
    if (incarrot && incarrot != 0) {
        carrot();
    }
    if (inradish && inradish != 0) {
        radish();
    }
    if (inlettuce && inlettuce != 0) {
        lettuce();
    }
    if (inspinach && inspinach != 0) {
        spinach();
    }
    if (inonion && inonion != 0) {
        onion();
    }
    if (incucumber && incucumber != 0) {
        cucumber();
    }
    if (inbean && inbean != 0) {
        bean();
    }
    if (intomato && intomato != 0) {
        tomato();
    }
}

function potato() {
    document.getElementById("potato").style.display = "block";
    document.getElementById("raise").style.display = "block";
    document.getElementById("purchase").style.display = "block";
}

function investpotato() {
    
    var point = mypoint + parseInt(parseInt(inpotato) * (5880 / 100));
    

    if (confirm("매수한 감자 수(" + parseInt(inpotato) + ") X 현재 시세(5880/100)= " + parseInt(parseInt(inpotato) * (5880 / 100)) + "포인트입니다.\n매도하시겠습니까?") == true) {
        alert("매도되었습니다.");
        localStorage.removeItem('potato');
        document.getElementById('potato').style.display = 'none';   

        localStorage.removeItem('mypoint');
        localStorage.setItem('mypoint', point);

        local.innerHTML = point;
    } else {
        return;
    }

}

function sweetpotato() {
    document.getElementById("sweetpotato").style.display = "block";
    document.getElementById("raise").style.display = "block";
    document.getElementById("purchase").style.display = "block";
}

function investsweetpotato() {
    var point = mypoint + parseInt(parseInt(insweetpotato) * (5880 / 100));

    if (confirm("매수한 고구마 수(" + parseInt(insweetpotato) + ") X 현재 시세(5880/100)= " + parseInt(parseInt(insweetpotato) * (5880 / 100)) + "포인트입니다.\n매도하시겠습니까?") == true) {
        alert("매도되었습니다.");
        localStorage.removeItem('sweetpotato');
        document.getElementById('sweetpotato').style.display = 'none';

        localStorage.removeItem('mypoint');
        localStorage.setItem('mypoint', point);

        local.innerHTML = point;
    } else {
        return;
    }

}

function carrot() {
    document.getElementById("carrot").style.display = "block";
    document.getElementById("raise").style.display = "block";
    document.getElementById("purchase").style.display = "block";
}

function investcarrot() {
    point = mypoint + parseInt(parseInt(incarrot) * (3480 / 100));

    if (confirm("매수한 당근 수(" + parseInt(incarrot) + ") X 현재 시세(3480/100)= " + parseInt(parseInt(incarrot) * (3480 / 100)) + "포인트입니다.\n매도하시겠습니까?") == true) {
        alert("매도되었습니다.");
        localStorage.removeItem('carrot');
        document.getElementById('carrot').style.display = 'none';

        localStorage.removeItem('mypoint');
        localStorage.setItem('mypoint', point);

        local.innerHTML = point;
    } else {
        return;
    }

}

function radish() {
    document.getElementById("radish").style.display = "block";
    document.getElementById("raise").style.display = "block";
    document.getElementById("purchase").style.display = "block";
}

function investradish() {
    point = mypoint + parseInt(parseInt(inradish) * (1980 / 100));

    if (confirm("매수한 무 수(" + parseInt(inradish) + ") X 현재 시세(1980/100)= " + parseInt(parseInt(inradish) * (1980 / 100)) + "포인트입니다.\n매도하시겠습니까?") == true) {
        alert("매도되었습니다.");
        localStorage.removeItem('radish');
        document.getElementById('radish').style.display = 'none';

        localStorage.removeItem('mypoint');
        localStorage.setItem('mypoint', point);

        local.innerHTML = point;
    } else {
        return;
    }

}

function lettuce() {
    document.getElementById("lettuce").style.display = "block";
    document.getElementById("raise").style.display = "block";
    document.getElementById("purchase").style.display = "block";
}

function investlettuce() {
    point = mypoint + parseInt(parseInt(inlettuce) * (890 / 100));

    if (confirm("매수한 상추 수(" + parseInt(inlettuce) + ") X 현재 시세(890/100)= " + parseInt(parseInt(inlettuce) * (890 / 100)) + "포인트입니다.\n매도하시겠습니까?") == true) {
        alert("매도되었습니다.");
        localStorage.removeItem('lettuce');
        document.getElementById('lettuce').style.display = 'none';

        localStorage.removeItem('mypoint');
        localStorage.setItem('mypoint', point);

        local.innerHTML = point;
    } else {
        return;
    }

}

function spinach() {
    document.getElementById("spinach").style.display = "block";
    document.getElementById("raise").style.display = "block";
    document.getElementById("purchase").style.display = "block";
}

function investspinach() {
    point = mypoint + parseInt(parseInt(inspinach) * (2480 / 100));

    if (confirm("매수한 시금치 수(" + parseInt(inspinach) + ") X 현재 시세(2480/100)= " + parseInt(parseInt(inspinach) * (2480 / 100)) + "포인트입니다.\n매도하시겠습니까?") == true) {
        alert("매도되었습니다.");
        localStorage.removeItem('spinach');
        document.getElementById('spinach').style.display = 'none';

        localStorage.removeItem('mypoint');
        localStorage.setItem('mypoint', point);

        local.innerHTML = point;
    } else {
        return;
    }

}

function onion() {
    document.getElementById("onion").style.display = "block";
    document.getElementById("raise").style.display = "block";
    document.getElementById("purchase").style.display = "block";
}

function investonion() {
    point = mypoint + parseInt(parseInt(inonion) * (2220 / 100));

    if (confirm("매수한 양파 수(" + parseInt(inonion) + ") X 현재 시세(2220/100)= " + parseInt(parseInt(inonion) * (2220 / 100)) + "포인트입니다.\n매도하시겠습니까?") == true) {
        alert("매도되었습니다.");
        localStorage.removeItem('onion');
        document.getElementById('onion').style.display = 'none';

        localStorage.removeItem('mypoint');
        localStorage.setItem('mypoint', point);

        local.innerHTML = point;
    } else {
        return;
    }

}

function cucumber() {
    document.getElementById("cucumber").style.display = "block";
    document.getElementById("raise").style.display = "block";
    document.getElementById("purchase").style.display = "block";
}

function investcucumber() {
    point = mypoint + parseInt(parseInt(incucumber) * (1090 / 100));

    if (confirm("매수한 오이 수(" + parseInt(incucumber) + ") X 현재 시세(1090/100)= " + parseInt(parseInt(incucumber) * (1090 / 100)) + "포인트입니다.\n매도하시겠습니까?") == true) {
        alert("매도되었습니다.");
        localStorage.removeItem('cucumber');
        document.getElementById('cucumber').style.display = 'none';

        localStorage.removeItem('mypoint');
        localStorage.setItem('mypoint', point);

        local.innerHTML = point;
    } else {
        return;
    }

}

function bean() {
    document.getElementById("bean").style.display = "block";
    document.getElementById("raise").style.display = "block";
    document.getElementById("purchase").style.display = "block";
}

function investbean() {
    point = mypoint + parseInt(parseInt(inbean) * (2590 / 100));

    if (confirm("매수한 콩나물 수(" + parseInt(inbean) + ") X 현재 시세(2590/100)= " + parseInt(parseInt(inbean) * (2590 / 100)) + "포인트입니다.\n매도하시겠습니까?") == true) {
        alert("매도되었습니다.");
        localStorage.removeItem('bean');
        document.getElementById('bean').style.display = 'none';

        localStorage.removeItem('mypoint');
        localStorage.setItem('mypoint', point);

        local.innerHTML = point;
    } else {
        return;
    }

}

function tomato() {
    document.getElementById("tomato").style.display = "block";
    document.getElementById("raise").style.display = "block";
    document.getElementById("purchase").style.display = "block";
}

function investtomato() {
    point = mypoint + parseInt(parseInt(intomato) * (4920 / 100));

    if (confirm("매수한 토마토 수(" + parseInt(intomato) + ") X 현재 시세(4920/100)= " + parseInt(parseInt(intomato) * (4920 / 100)) + "포인트입니다.\n매도하시겠습니까?") == true) {
        alert("매도되었습니다.");
        localStorage.removeItem('tomato');
        document.getElementById('tomato').style.display = 'none';

        localStorage.removeItem('mypoint');
        localStorage.setItem('mypoint', point);

        local.innerHTML = point;
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