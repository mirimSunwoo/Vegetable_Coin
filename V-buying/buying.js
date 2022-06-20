var mypoint = parseInt(localStorage.getItem("mypoint", 0));
var cnt = 0;

function buycnt(type, result){

	var local = document.getElementById(result);
	
	if (type === 'plus') {

		cnt = cnt + 1;

		local.innerHTML = cnt;
		
	} else if (type === 'minus' && cnt > 0) {
		
		cnt = cnt - 1;

		local.innerHTML = cnt;

	}
}

function buy(buyid) {
	var name = '';
	var buypoint = 0;

	if(buyid == 'buypotato'){
		name = '감자 1.5kg';
		buypoint = 60;

	} else if(buyid == 'buysweetpotato'){
		name = '고구마 1kg';
		buypoint = 60;

	} else if(buyid == 'buycarrot'){
		name = '당근 1kg';
		buypoint = 36;

	} else if(buyid == 'buyradish'){
		name = '무 1.5kg';
		buypoint = 23;
		
	} else if(buyid == 'buylettuce'){
		name = '상추 100g';
		buypoint = 18;

	} else if(buyid == 'buyspinach'){
		name = '시금치 200g';
		buypoint = 25;

	} else if(buyid == 'buyonion'){
		name = '양파 1kg';
		buypoint = 20;

	} else if(buyid == 'buycucumber'){
		name = '오이 150g';
		buypoint = 10;

	} else if(buyid == 'buybean'){
		name = '콩나물 360g';
		buypoint = 26;

	} else if(buyid == 'buytomato'){
		name = '토마토 1kg';
		buypoint = 50;

	}

	if(cnt != 0 && mypoint >= buypoint*cnt){
		var price = buypoint * cnt;
		localbuy = parseInt(localStorage.getItem(buyid));

		if (confirm(name + ' 상품 ' + cnt + '개를 ' + price + '포인트에 구매하시겠습니까?\n' + price + '포인트가 차감됩니다.') == true) {
			alert("주문이 완료 되었습니다. 마이페이지에서 확인해보세요.");

			point = mypoint - price;

			if(localStorage.getItem(buyid) != null){
				localbuy = localbuy + cnt;

				localStorage.removeItem(buyid);
				localStorage.setItem(buyid, localbuy);
				
			} else {
				localStorage.setItem(buyid, cnt);
			}
			
			localStorage.removeItem('mypoint');
			localStorage.setItem('mypoint', point);

			location.reload();

		} else {
			alert("상품 구매가 취소되었습니다.");
		}
	} else if(cnt == 0) {
		alert("수량을 선택해주세요.");
	} else {
		alert("포인트가 부족합니다. 나의 포인트 : " + mypoint);
	}

}