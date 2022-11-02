$(function(){
  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "16px",
    readOnly: true,
    ratedFill: "#FF6633"
  });
  $('.product__wrapper-favorite').on('click', function(){
    $(this).toggleClass('product__wrapper-favorite--active')
  });
  $('.tab').on('click', function(e){
    e.preventDefault();
    
    $($(this).siblings()).removeClass('map__box-item--active');
    $($(this).parent().siblings().find('div')).removeClass('max__box-map__item--active');

    $(this).addClass('map__box-item--active');
    $($(this).attr('href')).addClass('max__box-map__item--active');
  });
});