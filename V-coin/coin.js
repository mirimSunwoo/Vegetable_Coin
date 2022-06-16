function poatatocount(type) {
	if (typeof (Storage) !== "undefined") {
		if (type === 'plus') {
			if (localStorage.potato) {
				localStorage.potato = Number(localStorage.potato) + 1;

			} else {
				localStorage.potato = 1;
			}
		} else if (type === 'minus') {
			if (localStorage.potato) {
				if (localStorage.potato > 0) {
					localStorage.potato = Number(localStorage.potato) - 1;
				}
			} else {
				localStorage.potato = 1;
			}
		} else if (type === 'save'){
			alert('감자를 총 ' + localStorage.potato + '개 매수하시겠습니까?');
		}

		document.getElementById("result1").innerHTML = localStorage.potato;
	} else {
		document.getElementById("result").innerHTML = "web storage 지원 X.";
	}

}

function sweetpotatocount(type) {
	if (typeof (Storage) !== "undefined") {
		if (type === 'plus') {
			if (localStorage.sweetpotato) {
				localStorage.sweetpotato = Number(localStorage.sweetpotato) + 1;

			} else {
				localStorage.sweetpotato = 1;
			}
		} else if (type === 'minus') {
			if (localStorage.sweetpotato) {
				if (localStorage.sweetpotato > 0) {
					localStorage.sweetpotato = Number(localStorage.sweetpotato) - 1;
				}
			} else {
				localStorage.sweetpotato = 1;
			}
		} else if (type === 'save'){
			alert('고구마를 총 ' + localStorage.sweetpotato + '개 매수하시겠습니까?');
		}

		document.getElementById("result2").innerHTML = localStorage.sweetpotato;
	} else {
		document.getElementById("result2").innerHTML = "web storage 지원 X.";
	}
}

function carrotcount(type) {
	if (typeof (Storage) !== "undefined") {
		if (type === 'plus') {
			if (localStorage.carrot) {
				localStorage.carrot = Number(localStorage.carrot) + 1;

			} else {
				localStorage.carrot = 1;
			}
		} else if (type === 'minus') {
			if (localStorage.carrot) {
				if (localStorage.carrot > 0) {
					localStorage.carrot = Number(localStorage.carrot) - 1;
				}
			} else {
				localStorage.carrot = 1;
			}
		} else if (type === 'save'){
			alert('당근을 총 ' + localStorage.carrot + '개 매수하시겠습니까?');
		}

		document.getElementById("result3").innerHTML = localStorage.carrot;
	} else {
		document.getElementById("result3").innerHTML = "web storage 지원 X.";
	}
}

function radishcount(type) {
	if (typeof (Storage) !== "undefined") {
		if (type === 'plus') {
			if (localStorage.radish) {
				localStorage.radish = Number(localStorage.radish) + 1;

			} else {
				localStorage.radish = 1;
			}
		} else if (type === 'minus') {
			if (localStorage.radish) {
				if (localStorage.radish > 0) {
					localStorage.radish = Number(localStorage.radish) - 1;
				}
			} else {
				localStorage.potato = 1;
			}
		} else if (type === 'save'){
			alert('무를 총 ' + localStorage.radish + '개 매수하시겠습니까?');
		}

		document.getElementById("result4").innerHTML = localStorage.radish;
	} else {
		document.getElementById("resul4").innerHTML = "web storage 지원 X.";
	}
}

function lettucecount(type) {
	if (typeof (Storage) !== "undefined") {
		if (type === 'plus') {
			if (localStorage.lettuce) {
				localStorage.lettuce = Number(localStorage.lettuce) + 1;

			} else {
				localStorage.lettuce = 1;
			}
		} else if (type === 'minus') {
			if (localStorage.lettuce) {
				if (localStorage.lettuce > 0) {
					localStorage.lettuce = Number(localStorage.lettuce) - 1;
				}
			} else {
				localStorage.lettuce = 1;
			}
		} else if (type === 'save'){
			alert('상추를 총 ' + localStorage.lettuce + '개 매수하시겠습니까?');
		}

		document.getElementById("result5").innerHTML = localStorage.lettuce;
	} else {
		document.getElementById("result5").innerHTML = "web storage 지원 X.";
	}
}

function spinachcount(type) {
	if (typeof (Storage) !== "undefined") {
		if (type === 'plus') {
			if (localStorage.spinach) {
				localStorage.spinach = Number(localStorage.spinach) + 1;

			} else {
				localStorage.potspinachato = 1;
			}
		} else if (type === 'minus') {
			if (localStorage.spinach) {
				if (localStorage.spinach > 0) {
					localStorage.spinach = Number(localStorage.spinach) - 1;
				}
			} else {
				localStorage.spinach = 1;
			}
		} else if (type === 'save'){
			alert('시금치를 총 ' + localStorage.spinach + '개 매수하시겠습니까?');
		}

		document.getElementById("result6").innerHTML = localStorage.spinach;
	} else {
		document.getElementById("result6").innerHTML = "web storage 지원 X.";
	}
}

function onioncount(type) {
	if (typeof (Storage) !== "undefined") {
		if (type === 'plus') {
			if (localStorage.onion) {
				localStorage.onion = Number(localStorage.onion) + 1;

			} else {
				localStorage.onion = 1;
			}
		} else if (type === 'minus') {
			if (localStorage.onion) {
				if (localStorage.onion > 0) {
					localStorage.onion = Number(localStorage.onion) - 1;
				}
			} else {
				localStorage.onion = 1;
			}
		} else if (type === 'save'){
			alert('양파를 총 ' + localStorage.onion + '개 매수하시겠습니까?');
		}

		document.getElementById("result7").innerHTML = localStorage.onion;
	} else {
		document.getElementById("result7").innerHTML = "web storage 지원 X.";
	}
}

function cucumbercount(type) {
	if (typeof (Storage) !== "undefined") {
		if (type === 'plus') {
			if (localStorage.cucumber) {
				localStorage.cucumber = Number(localStorage.cucumber) + 1;

			} else {
				localStorage.cucumber = 1;
			}
		} else if (type === 'minus') {
			if (localStorage.cucumber) {
				if (localStorage.cucumber > 0) {
					localStorage.cucumber = Number(localStorage.cucumber) - 1;
				}
			} else {
				localStorage.cucumber = 1;
			}
		} else if (type === 'save'){
			alert('오이를 총 ' + localStorage.cucumber + '개 매수하시겠습니까?');
		}

		document.getElementById("result8").innerHTML = localStorage.cucumber;
	} else {
		document.getElementById("result8").innerHTML = "web storage 지원 X.";
	}
}

function beancount(type) {
	if (typeof (Storage) !== "undefined") {
		if (type === 'plus') {
			if (localStorage.bean) {
				localStorage.bean = Number(localStorage.bean) + 1;

			} else {
				localStorage.bean = 1;
			}
		} else if (type === 'minus') {
			if (localStorage.bean) {
				if (localStorage.bean > 0) {
					localStorage.bean = Number(localStorage.bean) - 1;
				}
			} else {
				localStorage.bean = 1;
			}
		} else if (type === 'save'){
			alert('콩나물을 총 ' + localStorage.bean + '개 매수하시겠습니까?');
		}

		document.getElementById("result9").innerHTML = localStorage.bean;
	} else {
		document.getElementById("result9").innerHTML = "web storage 지원 X.";
	}
}

function tomatocount(type) {
	if (typeof (Storage) !== "undefined") {
		if (type === 'plus') {
			if (localStorage.tomato) {
				localStorage.tomato = Number(localStorage.tomato) + 1;

			} else {
				localStorage.potato = 1;
			}
		} else if (type === 'minus') {
			if (localStorage.tomato) {
				if (localStorage.tomato > 0) {
					localStorage.tomato = Number(localStorage.tomato) - 1;
				}
			} else {
				localStorage.tomato = 1;
			}
		} else if (type === 'save'){
			alert('토마토를 총 ' + localStorage.tomato + '개 매수하시겠습니까?');
		}

		document.getElementById("result10").innerHTML = localStorage.tomato;
	} else {
		document.getElementById("result10").innerHTML = "web storage 지원 X.";
	}
}
