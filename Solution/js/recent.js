// let array= ['abc'];
// let img_collection = localStorage.setItem("img_collection", JSON.stringify(array));
// localStorage.clear();
function addItem(_src){
    // localStorage 저장
    
    console.log(_src);
    let a = JSON.parse(localStorage.getItem('img_collection'));
    a.push(_src);
    console.log(a);
    console.log(localStorage.getItem('img_collection'));
    console.log(typeof(a));//['','']
    let b = JSON.stringify(JSON.parse(localStorage.getItem('img_collection')));
    // console.log(b);

    let n = JSON.parse(localStorage.getItem('img_collection'));
    console.log(n.length);
    if(n.length == 6){
        n.splice(1);
    }
    for(let i = 1; i< n.length; i++){
        if(_src == n[i]){
            return;
        }
    }
    localStorage.setItem('img_collection',JSON.stringify(a));
    show_recent();
}

function show_recent(){

    let n = JSON.parse(localStorage.getItem('img_collection'));
    console.log(n.length);
    if(n.length > 1){
        for(let i = 1; i< n.length; i++){
            


        let li = document.createElement("li"); //li element 추가
        let recent_items = document.createElement('div'); //item div element 추가
        let recent_img = document.createElement("img"); //item img element 추가
        recent_img.src = n[i]; //추가할 이미지 주소 넣음
        let delete_btn = document.createElement('input');
        delete_btn.src = './image/recent_img/button.png';
        console.log(delete_btn.src);
        delete_btn.onclick = removeItem;

        //add css
        li.classList.add('recent_li');
        li.id = 'recent_li';
        // recent_img.id = 'recent_img';
        recent_items.classList.add('recent-items');
        recent_img.classList.add('recent-img');
        recent_img.id = 'recent-img';
        delete_btn.classList.add('delete');

        //add appendChild
        document.getElementById('recent-box').appendChild(li);
        li.appendChild(recent_items);
        recent_items.appendChild(recent_img);
        recent_items.appendChild(delete_btn);

        // console.log(1);
        // console.log(li.className);
        // console.log(recent_img.src);
        // console.log(delete_btn.src);
        }
    }
    
}
function removeItem(){
    let li = document.getElementById('recent_li');
    let recent_img = document.getElementById('recent-img');
    let img_src = recent_img.src;

    let img_collection = JSON.parse(localStorage.getItem('img_collection'));
    console.log(img_collection);
    for(let i = 0; i < img_collection.length; i++ ){
        if(img_src == img_collection[i]){
            img_collection.splice(i,1);
            localStorage.setItem('img_collection',JSON.stringify(img_collection));
        }
    }
    li.remove();

}


show_recent();


