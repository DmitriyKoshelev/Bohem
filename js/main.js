$(function(){
    $('.j-banner__sliders').slick({
  		infinite: true,
  		speed: 1000,
  		fade: true,
  		cssEase: 'linear',
  		arrows: false,
  		autoplay: true,
  		autoplaySpeed: 4000,
  		dots: true
	  });

    $(".lines").on("click",function(){
        $(".header__menu").stop().slideToggle();
    });

    $(".searchIcon").on("click",function(){
        $(".header__form").stop().slideToggle();
    });
});