function scrollUp(top) {
    const vheight = $('.test').height();
    const margin_top = parseInt($('#survey').css('margin-top'), 25);
    $('html, body').animate({
        scrollTop: top - vheight - margin_top
    }, 500);
};

function scrollDown(top) {
    const vheight = $('.test').height();
    const margin_top = parseInt($('#survey').css('margin-top'), 6);
    $('html, body').animate({
        scrollTop: vheight + top - margin_top
    }, 500);
}

$('.next_btn').click(function(e){
    let divs = $(this).parent().prev().children();
    let present_top = $(this).parent().parent()[0].offsetTop;
    let inputs = divs.find('input:checked');
    e.preventDefault();
    scrollDown(present_top);
});

// if(inputs.length < 1) {
    //     alert('문항이 선택되지 않았습니다.');
    //     return false;
    // }


$('.prev_btn').click(function(e){
    let present_top = $(this).parent().parent()[0].offsetTop;
    e.preventDefault();
    scrollUp(present_top);
});
