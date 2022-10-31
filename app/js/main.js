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
});