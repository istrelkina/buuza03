$(function(){
	$('.slider__items').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  autoplay: true,
	  asNavFor: '.slider__nav'
	});
	$('.slider__nav').slick({
	  slidesToShow: $(window).width() > 1366 ? 4 : 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider__items',
	  vertical: true,
	  infinite: true,
	  verticalSwiping: true,
	  dots: false,
	  arrows:true,
	  
	  	  
	});


	$('.menu-burger').on('click',function(){
        $('.nav').slideToggle();
    });
    $('.menu-burger').on('click',function(){
    	$('.menu-burger').toggleClass('active');
    });
});