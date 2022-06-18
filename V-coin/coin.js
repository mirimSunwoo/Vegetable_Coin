function poatatocount(type) {
	if (typeof (Storage) !== "undefined") {

		const result = document.getElementById("result1");
		let cnt = result.innerHTML;

		if (type === 'plus') {

			if(localStorage.potato){
				cnt = parseInt(cnt) + 1;
			} else {
				localStorage.potato = 0;
			}
		} else if (type === 'minus') {
			if(cnt > 0){
				cnt = parseInt(cnt) - 1;
			}
		} else if (type === 'save'){

			if(cnt != 0){
				if(confirm('감자 수 총 (' + cnt + ')개 X 현재 시세(5880/100) = ' + parseInt(cnt * (5880/100)) + '포인트에 매수하시겠습니까?') == true){
					alert("매수되었습니다.");
					localStorage.potato = Number(localStorage.potato) + Number(cnt);
					cnt = 0;
				}else{
					alert("취소되었습니다.");
				}
			} else{
				alert("수량을 선택해주세요.");
			}

		}
		result.innerHTML = cnt;
		
	} else {
		document.getElementById("result").innerHTML = "web storage 지원 X.";
	}

}

function sweetpotatocount(type) {
	if (typeof (Storage) !== "undefined") {

		const result = document.getElementById("result2");
		let cnt = result.innerHTML;

		if (type === 'plus') {

			if(localStorage.sweetpotato){
				cnt = parseInt(cnt) + 1;
			} else {
				localStorage.sweetpotato = 0;
			}
		} else if (type === 'minus') {
			if(cnt > 0){
				cnt = parseInt(cnt) - 1;
			}
		} else if (type === 'save'){

			if(cnt != 0){
				if(confirm('고구마 수 총 (' + cnt + ')개 X 현재 시세(5880/100) = ' + parseInt(cnt * (5880/100)) + '포인트에 매수하시겠습니까?') == true){
					alert("매수되었습니다.");
					localStorage.sweetpotato = Number(localStorage.sweetpotato) + Number(cnt);
					cnt = 0;
				}else{
					alert("취소되었습니다.");
				}
			} else{
				alert("수량을 선택해주세요.");
			}

		}
		result.innerHTML = cnt;
		
	} else {
		document.getElementById("result").innerHTML = "web storage 지원 X.";
	}
}

function carrotcount(type) {
	if (typeof (Storage) !== "undefined") {

		const result = document.getElementById("result3");
		let cnt = result.innerHTML;

		if (type === 'plus') {

			if(localStorage.carrot){
				cnt = parseInt(cnt) + 1;
			} else {
				localStorage.carrot = 0;
			}
		} else if (type === 'minus') {
			if(cnt > 0){
				cnt = parseInt(cnt) - 1;
			}
		} else if (type === 'save'){

			if(cnt != 0){
				if(confirm('당근 수 총 (' + cnt + ')개 X 현재 시세(5880/100) = ' + parseInt(cnt * (5880/100)) + '포인트에 매수하시겠습니까?') == true){
					alert("매수되었습니다.");
					localStorage.carrot = Number(localStorage.carrot) + Number(cnt);
					cnt = 0;
				}else{
					alert("취소되었습니다.");
				}
			} else{
				alert("수량을 선택해주세요.");
			}

		}
		result.innerHTML = cnt;
		
	} else {
		document.getElementById("result").innerHTML = "web storage 지원 X.";
	}
}

function radishcount(type) {
	if (typeof (Storage) !== "undefined") {

		const result = document.getElementById("result4");
		let cnt = result.innerHTML;

		if (type === 'plus') {

			if(localStorage.radish){
				cnt = parseInt(cnt) + 1;
			} else {
				localStorage.radish = 0;
			}
		} else if (type === 'minus') {
			if(cnt > 0){
				cnt = parseInt(cnt) - 1;
			}
		} else if (type === 'save'){

			if(cnt != 0){
				if(confirm('무 수 총 (' + cnt + ')개 X 현재 시세(5880/100) = ' + parseInt(cnt * (5880/100)) + '포인트에 매수하시겠습니까?') == true){
					alert("매수되었습니다.");
					localStorage.radish = Number(localStorage.radish) + Number(cnt);
					cnt = 0;
				}else{
					alert("취소되었습니다.");
				}
			} else{
				alert("수량을 선택해주세요.");
			}

		}
		result.innerHTML = cnt;
		
	} else {
		document.getElementById("result").innerHTML = "web storage 지원 X.";
	}
}

function lettucecount(type) {
	if (typeof (Storage) !== "undefined") {

		const result = document.getElementById("result5");
		let cnt = result.innerHTML;

		if (type === 'plus') {

			if(localStorage.lettuce){
				cnt = parseInt(cnt) + 1;
			} else {
				localStorage.lettuce = 0;
			}
		} else if (type === 'minus') {
			if(cnt > 0){
				cnt = parseInt(cnt) - 1;
			}
		} else if (type === 'save'){

			if(cnt != 0){
				if(confirm('상추 수 총 (' + cnt + ')개 X 현재 시세(5880/100) = ' + parseInt(cnt * (5880/100)) + '포인트에 매수하시겠습니까?') == true){
					alert("매수되었습니다.");
					localStorage.lettuce = Number(localStorage.lettuce) + Number(cnt);
					cnt = 0;
				}else{
					alert("취소되었습니다.");
				}
			} else{
				alert("수량을 선택해주세요.");
			}

		}
		result.innerHTML = cnt;
		
	} else {
		document.getElementById("result").innerHTML = "web storage 지원 X.";
	}
}

function spinachcount(type) {
	if (typeof (Storage) !== "undefined") {

		const result = document.getElementById("result6");
		let cnt = result.innerHTML;

		if (type === 'plus') {

			if(localStorage.spinach){
				cnt = parseInt(cnt) + 1;
			} else {
				localStorage.spinach = 0;
			}
		} else if (type === 'minus') {
			if(cnt > 0){
				cnt = parseInt(cnt) - 1;
			}
		} else if (type === 'save'){

			if(cnt != 0){
				if(confirm('시금치 수 총 (' + cnt + ')개 X 현재 시세(5880/100) = ' + parseInt(cnt * (5880/100)) + '포인트에 매수하시겠습니까?') == true){
					alert("매수되었습니다.");
					localStorage.spinach = Number(localStorage.spinach) + Number(cnt);
					cnt = 0;
				}else{
					alert("취소되었습니다.");
				}
			} else{
				alert("수량을 선택해주세요.");
			}

		}
		result.innerHTML = cnt;
		
	} else {
		document.getElementById("result").innerHTML = "web storage 지원 X.";
	}
}

function onioncount(type) {
	if (typeof (Storage) !== "undefined") {

		const result = document.getElementById("result7");
		let cnt = result.innerHTML;

		if (type === 'plus') {

			if(localStorage.onion){
				cnt = parseInt(cnt) + 1;
			} else {
				localStorage.onion = 0;
			}
		} else if (type === 'minus') {
			if(cnt > 0){
				cnt = parseInt(cnt) - 1;
			}
		} else if (type === 'save'){

			if(cnt != 0){
				if(confirm('양파 수 총 (' + cnt + ')개 X 현재 시세(5880/100) = ' + parseInt(cnt * (5880/100)) + '포인트에 매수하시겠습니까?') == true){
					alert("매수되었습니다.");
					localStorage.onion = Number(localStorage.onion) + Number(cnt);
					cnt = 0;
				}else{
					alert("취소되었습니다.");
				}
			} else{
				alert("수량을 선택해주세요.");
			}

		}
		result.innerHTML = cnt;
		
	} else {
		document.getElementById("result").innerHTML = "web storage 지원 X.";
	}
}

function cucumbercount(type) {
	if (typeof (Storage) !== "undefined") {

		const result = document.getElementById("result8");
		let cnt = result.innerHTML;

		if (type === 'plus') {

			if(localStorage.cucumber){
				cnt = parseInt(cnt) + 1;
			} else {
				localStorage.cucumber = 0;
			}
		} else if (type === 'minus') {
			if(cnt > 0){
				cnt = parseInt(cnt) - 1;
			}
		} else if (type === 'save'){

			if(cnt != 0){
				if(confirm('오이 수 총 (' + cnt + ')개 X 현재 시세(5880/100) = ' + parseInt(cnt * (5880/100)) + '포인트에 매수하시겠습니까?') == true){
					alert("매수되었습니다.");
					localStorage.cucumber = Number(localStorage.cucumber) + Number(cnt);
					cnt = 0;
				}else{
					alert("취소되었습니다.");
				}
			} else{
				alert("수량을 선택해주세요.");
			}

		}
		result.innerHTML = cnt;
		
	} else {
		document.getElementById("result").innerHTML = "web storage 지원 X.";
	}
}

function beancount(type) {
	if (typeof (Storage) !== "undefined") {

		const result = document.getElementById("result9");
		let cnt = result.innerHTML;

		if (type === 'plus') {

			if(localStorage.bean){
				cnt = parseInt(cnt) + 1;
			} else {
				localStorage.bean = 0;
			}
		} else if (type === 'minus') {
			if(cnt > 0){
				cnt = parseInt(cnt) - 1;
			}
		} else if (type === 'save'){

			if(cnt != 0){
				if(confirm('콩나물 수 총 (' + cnt + ')개 X 현재 시세(5880/100) = ' + parseInt(cnt * (5880/100)) + '포인트에 매수하시겠습니까?') == true){
					alert("매수되었습니다.");
					localStorage.bean = Number(localStorage.bean) + Number(cnt);
					cnt = 0;
				}else{
					alert("취소되었습니다.");
				}
			} else{
				alert("수량을 선택해주세요.");
			}

		}
		result.innerHTML = cnt;
		
	} else {
		document.getElementById("result").innerHTML = "web storage 지원 X.";
	}
}

function tomatocount(type) {
	if (typeof (Storage) !== "undefined") {

		const result = document.getElementById("result10");
		let cnt = result.innerHTML;

		if (type === 'plus') {

			if(localStorage.tomato){
				cnt = parseInt(cnt) + 1;
			} else {
				localStorage.tomato = 0;
			}
		} else if (type === 'minus') {
			if(cnt > 0){
				cnt = parseInt(cnt) - 1;
			}
		} else if (type === 'save'){

			if(cnt != 0){
				if(confirm('토마토 수 총 (' + cnt + ')개 X 현재 시세(5880/100) = ' + parseInt(cnt * (5880/100)) + '포인트에 매수하시겠습니까?') == true){
					alert("매수되었습니다.");
					localStorage.tomato = Number(localStorage.tomato) + Number(cnt);
					cnt = 0;
				}else{
					alert("취소되었습니다.");
				}
			} else{
				alert("수량을 선택해주세요.");
			}

		}
		result.innerHTML = cnt;
		
	} else {
		document.getElementById("result").innerHTML = "web storage 지원 X.";
	}
}
