$(function () {

  $('.slider').slick({

    
    prevArrow: '<div class="slick-arrow slick-prev"> <svg width="19" height="32"><use xlink: href="images/images.svg#left"></use></svg></div>',
    nextArrow: '<div class="slick-arrow slick-next"> <svg width="19" height="32"><use xlink: href="images/images.svg#right"></use></svg><div>',

  });

 $('.header__catalog').on('click',function () {
   $('.header__dropdown--item').toggleClass('header__dropdown--active');
 });



});