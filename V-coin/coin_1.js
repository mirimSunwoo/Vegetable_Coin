var mypoint = parseInt(localStorage.getItem("mypoint", 0));
var cnt = 0;

var infopoint = document.getElementById('myInfoPointNum');
infopoint.innerHTML = localStorage.getItem("mypoint", 0);

function investcnt(type, result) {

    var local = document.getElementById(result);
    var localcnt = Number(local.innerHTML);

    // console.log(local.innerHTML);

    if (type === 'plus') {

        cnt = localcnt + 1;

    } else if (type === 'minus' && localcnt > 0) {

        cnt = localcnt - 1;
    }

    local.innerHTML = cnt;
}

function investment(investid) {
    var name = '';
    // 텍스트에서 불러와서 담아야 됨
    var vprice = 0;

    if (investid == 'potato') {
        name = '감자';
        vprice = 5880;

    } else if (investid == 'sweetPotato') {
        name = '고구마';
        vprice = 5880;

    } else if (investid == 'carrot') {
        name = '당근';
        vprice = 5880;

    } else if (investid == 'radish') {
        name = '무';
        vprice = 5880;

    } else if (investid == 'lettuce') {
        name = '상추';
        vprice = 5880;

    } else if (investid == 'spinach') {
        name = '시금치';
        vprice = 5880;

    } else if (investid == 'onion') {
        name = '양파';
        vprice = 5880;

    } else if (investid == 'cucumber') {
        name = '오이';
        vprice = 5880;

    } else if (investid == 'beanSprouts') {
        name = '콩나물';
        vprice = 5880;

    } else if (investid == 'tomato') {
        name = '토마토';
        vprice = 5880;

    }

    // console.log(typeof(investid));
    // console.log(localStorage.getItem(investid, 0));


    // var price = vprice/100;

    if (cnt != 0 && mypoint >= parseInt(cnt * (vprice / 100))) {
        if (confirm(name + ' 수 총 (' + cnt + ')개 X 현재 시세(' + vprice + '/100) = ' + parseInt(cnt * (vprice / 100)) + '포인트에 매수하시겠습니까?') == true) {
            alert("매수되었습니다.");

            if (investid == 'potato') {
                localStorage.potato = Number(localStorage.potato) + Number(cnt);

            } else if (investid == 'sweetPotato') {
                localStorage.sweetPotato = Number(localStorage.sweetPotato) + Number(cnt);

            } else if (investid == 'carrot') {
                localStorage.carrot = Number(localStorage.carrot) + Number(cnt);

            } else if (investid == 'radish') {
                localStorage.radish = Number(localStorage.radish) + Number(cnt);

            } else if (investid == 'lettuce') {
                localStorage.lettuce = Number(localStorage.lettuce) + Number(cnt);

            } else if (investid == 'spinach') {
                localStorage.spinach = Number(localStorage.spinach) + Number(cnt);

            } else if (investid == 'onion') {
                localStorage.onion = Number(localStorage.onion) + Number(cnt);

            } else if (investid == 'cucumber') {
                localStorage.cucumber = Number(localStorage.cucumber) + Number(cnt);

            } else if (investid == 'beanSprouts') {
                localStorage.beanSprouts = Number(localStorage.beanSprouts) + Number(cnt);

            } else if (investid == 'tomato') {
                localStorage.tomato = Number(localStorage.tomato) + Number(cnt);

            }

            localStorage.mypoint = parseInt(localStorage.mypoint) - parseInt(cnt * (vprice / 100));
            location.reload();

        }
    } else if (cnt == 0) {
        alert("수량을 선택해주세요.");
    } else {
        alert("포인트가 부족합니다. 나의 포인트 : " + mypoint);
    }

}

var totalcnt = Number(localStorage.potato) + Number(localStorage.sweetPotato) + Number(localStorage.carrot) +
    Number(localStorage.radish) + Number(localStorage.lettuce) + Number(localStorage.spinach) +
    Number(localStorage.onion) + Number(localStorage.cucumber) + Number(localStorage.beanSprouts) + Number(localStorage.tomato);
    
var infocnt = document.getElementById('myInfoInveCnt');
infocnt.innerHTML = totalcnt;