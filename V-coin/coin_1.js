var mypoint = parseInt(localStorage.getItem("mypoint", 0));
var cnt = 0;

var infopoint = document.getElementById('myInfoPointNum');
infopoint.innerHTML = localStorage.getItem("mypoint", 0);

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
        vprice = 감자;

    } else if (investid == 'sweetPotato') {
        name = '고구마';
        vprice = 고구마;

    } else if (investid == 'carrot') {
        name = '당근';
        vprice = 당근;

    } else if (investid == 'radish') {
        name = '무';
        vprice = 무;

    } else if (investid == 'lettuce') {
        name = '상추';
        vprice = 상추;

    } else if (investid == 'spinach') {
        name = '시금치';
        vprice = 시금치;

    } else if (investid == 'onion') {
        name = '양파';
        vprice = 양파;

    } else if (investid == 'cucumber') {
        name = '오이';
        vprice = 오이;

    } else if (investid == 'beanSprouts') {
        name = '콩나물';
        vprice = 콩나물;

    } else if (investid == 'tomato') {
        name = '토마토';
        vprice = 토마토;

    }

    // console.log(typeof(investid));
    // console.log(localStorage.getItem(investid, 0));


    // var price = vprice/100;
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

    if (cnt != 0 && mypoint >= parseInt(cnt * (vprice / 100))) {
        Swal.fire({
            title: parseInt(cnt * (vprice / 100)) + '포인트에 매수할까요?',
            text: name+' 수 총 ' + cnt + '개 X (현재 시세 '+ vprice +'원÷100)',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#6A9258',
            cancelButtonColor: '#AAAAAA',
            confirmButtonText: '매수',
            cancelButtonText: '취소'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title:'매수가 완료되었습니다.',
                    text:'마이페이지에서 확인할 수 있습니다',
                    icon:'success',
                    confirmButtonColor: '#6A9258'
                })
                setTimeout(function(){
                    location.reload();
                },1500);
                // location.reload();
            }
        })
    } else if (cnt == 0) {
        Swal.fire(
            '수량을 선택해주세요',
            '',
            'warning'
        )
    } else {
        Swal.fire(
            '포인트가 부족합니다',
            '나의 포인트' + mypoint,
            'warning'
        )
    }
    localStorage.mypoint = parseInt(localStorage.mypoint) - parseInt(cnt * (vprice / 100));
    

}

var totalcnt = Number(localStorage.potato) + Number(localStorage.sweetPotato) + Number(localStorage.carrot) +
    Number(localStorage.radish) + Number(localStorage.lettuce) + Number(localStorage.spinach) +
    Number(localStorage.onion) + Number(localStorage.cucumber) + Number(localStorage.beanSprouts) + Number(localStorage.tomato);
    
var infocnt = document.getElementById('myInfoInveCnt');
infocnt.innerHTML = totalcnt;