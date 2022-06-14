function addItem(_src){
    let item_img = document.getElementById("item_img").src; //선택한 채소 이미지
    let li = document.createElement("li"); //li element 추가
    let recent_items = document.createElement('div'); //item div element 추가
    let recent_img = document.createElement("img"); //item img element 추가
    recent_img.src = _src; //추가할 이미지 주소 넣음
    let delete_btn = document.createElement('input');
    delete_btn.src = 'image/recent_img/button.png';


    li.classList.add('recent_li');
    recent_items.classList.add('recent-items');
    recent_img.classList.add('recent-img');
    delete_btn.classList.add('delete');

    document.getElementById('recent-box').appendChild(li);
    li.appendChild(recent_items);
    recent_items.appendChild(recent_img);
    recent_items.appendChild(delete_btn);
    // save(item_img);
    console.log(1);
    console.log(li.className);
    console.log(recent_img.src);
    console.log(delete_btn.src);
}
