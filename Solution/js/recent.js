function addItem(_src){
    // localStorage 저장
    if(localStorage.getItem('img_collection')== null){
        console.log("없어");
        let img_collection = ['abc'];
        localStorage.setItem('img_collection',JSON.stringify(img_collection));
    }
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
            

            let create_id = 'recent_li'+i;
            let img_id = 'recent-img'+i;
            let btn_id = 'delete_btn'+i;
            let li = document.createElement("li"); //li element 추가
            let recent_items = document.createElement('div'); //item div element 추가
            let recent_img = document.createElement("img"); //item img element 추가
            recent_img.src = n[i]; //추가할 이미지 주소 넣음
            let delete_btn = document.createElement('img');
            delete_btn.src = './image/recent_img/button.png';
            console.log(delete_btn.src);
            delete_btn.addEventListener('click',function(delete_btn){
                removeItem(delete_btn);
            })

            //add id, class
            li.id = create_id;
            recent_img.id = img_id;
            delete_btn.id = btn_id;
            li.classList.add('recent_li');
            recent_items.classList.add('recent-items');
            recent_img.classList.add('recent-img');
            delete_btn.classList.add('delete');
            
            

            //add appendChild
            document.getElementById('recent-box').appendChild(li);
            li.appendChild(recent_items);
            recent_items.appendChild(recent_img);
            recent_items.appendChild(delete_btn);
        }

        if(n.length >= 7){
            let img_collection = JSON.parse(localStorage.getItem('img_collection'));
            img_collection.splice(1,1);
            console.log(img_collection);
            localStorage.setItem('img_collection',JSON.stringify(img_collection));
        }
        
    }
    
}
function removeItem(btn){
    
    console.log(btn.target);
    let delete_btn = btn.target;


    //형제 요소
    let bro= delete_btn.previousElementSibling;
    console.log(bro.src);

    //부모요소 li 지우기
    var parent = delete_btn.parentNode;
    var max_parent = parent.parentNode;
    console.log(max_parent);
    max_parent.remove();

    let img_collection = JSON.parse(localStorage.getItem('img_collection'));
    for(let i = 0; i < img_collection.length; i++ ){
        if(bro.src == img_collection[i]){
            img_collection.splice(i,1);
            console.log(img_collection);
            localStorage.setItem('img_collection',JSON.stringify(img_collection));
        }
    }
    console.log(img_collection);

}
show_recent();


