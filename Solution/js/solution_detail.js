function show_item(){
    
    // console.log(item.imgsrc);
    console.log('ddd');
    let kname = document.getElementById('kname');
    let shortEx = document.getElementById('shortEx');
    let intro_img = document.getElementById('intro_img');
    let ename = document.getElementById('ename');
    let water = document.getElementById('water');
    let sun = document.getElementById('sun');
    let plant = document.getElementById('plant');
    let place = document.getElementById('place');
    let step1 = document.getElementById('step1');
    let step2 = document.getElementById('step2');
    let step3 = document.getElementById('step3');
    let level = document.getElementById('level');

    kname.innerHTML = localStorage.getItem('kname');
    shortEx.innerHTML = localStorage.getItem('shortEx');
    // intro_img.src = localStorage.getItem('imgsrc');
    ename.innerHTML = localStorage.getItem('ename');
    water.innerHTML = localStorage.getItem('water');
    sun.innerHTML = localStorage.getItem('sun');
    plant.innerHTML = localStorage.getItem('plant');
    place.innerHTML = localStorage.getItem('place');
    step1.innerHTML = localStorage.getItem('step1');
    step2.innerHTML = localStorage.getItem('step2');
    step3.innerHTML = localStorage.getItem('step3');
    // intro_img.src = 'category_img/leaf/napa_cabbage.png';

    // 채소 난이도
    let getLevel = localStorage.getItem('level');
    if(getLevel == 1){
        level.src = './image/level/level1.png';
    }else if(getLevel == 2){
        level.src = './image/level/level2.png';
    }else if(getLevel == 3){
        level.src = './image/level/level3.png';
    }else if(getLevel == 4){
        level.src = './image/level/level4.png';
    }else if(getLevel == 5){
        level.src = './image/level/level5.png';
    }
    console.log(level.src);
}
show_item();