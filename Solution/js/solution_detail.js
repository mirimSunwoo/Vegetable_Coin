function show_item(){
    
    // console.log(item.imgsrc);
    console.log('ddd');
    let kname = document.getElementById('kname');
    let shortEx = document.getElementById('shortEx');
    let ename = document.getElementById('ename');
    let water = document.getElementById('water');
    let sun = document.getElementById('sun');
    let plant = document.getElementById('plant');
    let place = document.getElementById('place');
    let step1 = document.getElementById('step1');
    let step2 = document.getElementById('step2');
    let step3 = document.getElementById('step3');

    kname.innerHTML = localStorage.getItem('kname');
    shortEx.innerHTML = localStorage.getItem('shortEx');
    ename.innerHTML = localStorage.getItem('ename');
    water.innerHTML = localStorage.getItem('water');
    sun.innerHTML = localStorage.getItem('sun');
    plant.innerHTML = localStorage.getItem('plant');
    place.innerHTML = localStorage.getItem('place');
    step1.innerHTML = localStorage.getItem('step1');
    step2.innerHTML = localStorage.getItem('step2');
    step3.innerHTML = localStorage.getItem('step3');
    // intro_img.src = 'category_img/leaf/napa_cabbage.png';
    
}
show_item();