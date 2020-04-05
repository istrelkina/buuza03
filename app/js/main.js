$(function(){
	$('.slider__items').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  
	  asNavFor: '.slider__nav'
	});
	$('.slider__nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider__items',
	  vertical: true,
	  infinite: true,
	  verticalSwiping: true,
	  dots: false,
	  arrows:true,
	  /*responsive: [
	    {
	      breakpoint: 1400,
	      settings: {
	          slidesToShow: 3,
	          slidesToScroll: 1,
          
	      }
	    }
	    ]*/
	  
	});

});