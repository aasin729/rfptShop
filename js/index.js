$('.slide-group').slick({
    autoplay:true,
    autoplaySpeed:3000,
    arrows:true,
    dots:true,
    prevArrow:'<button class="slick-arrow slick-prev"><i class="fa-solid fa-angles-left"></i></button>',
    nextArrow:'<button class="slick-arrow slick-next"><i class="fa-solid fa-angles-right"></i></button>',
    
})


// 슬라이드 화면 정지,시작 버튼 효과 
$('.article1 .plpa i').on('click', function(){
    if($(this).hasClass('fa-pause')){
        $('.article1 .slide_group').slick('slickPause')
        $(this).removeClass('fa-pause').addClass('fa-play')
    }else{
        $('.article1 .slide_group').slick('slickPlay')
        $(this).removeClass('fa-play').addClass('fa-pause')
    }
})
