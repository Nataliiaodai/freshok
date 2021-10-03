$(function () {

  $('.top-sales').slick({
    
    prevArrow: '<div class="slick-arrow slick-prev"> <svg width="19" height="32"><use xlink: href="images/images.svg#left"></use></svg></div>',
    nextArrow: '<div class="slick-arrow slick-next"> <svg width="19" height="32"><use xlink: href="images/images.svg#right"></use></svg><div>',

  });

 $('.catalog__button').on('click', function () {
   $('.catalog__item').toggleClass('catalog__active');
 });


 var mixer = mixitup('.product__select-list');
});