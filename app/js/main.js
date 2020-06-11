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

    $('.nav__menu-link').on('click', function() {

	    let href = $(this).attr('href');

	    $('html, body').animate({
	        scrollTop: $(href).offset().top
	    }, {
	        duration: 470,   // по умолчанию «400»
	        easing: "linear" // по умолчанию «swing»
	    });
	     
	    return false;
	});
});