$(document).ready(function () {

  $(window).on("scroll", function () {
    var scro = $(window).scrollTop();
    var scr = 0; // начало страницы меню студия
    var scr2 = 200; // начало меню услуги
    /*      положение  скрола относительно пункта Студия    */
    if ($(window).scrollTop() >= scr && scro <= scr2) {
      $('.menu-box__logo').removeClass('active');
      $('.menu-box__text li a').removeClass('active');
      $('.menu__links').removeClass('menu__links_act');
    } else {
      $('.menu-box__logo').addClass('active');
      $('.menu-box__text li a').addClass('active');
      $('.menu__links').addClass('menu__links_act');

      $('.menu-box__logo').css({
        'transition': '500ms'
      });
      $('.menu-menu__links_act').css({
        'transition': '100ms'
      });
      $('.menu-box__text li a').css({
        'transition': '500ms'
      });
    }
  });

  $(".menu-box").on("click","a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();
      //забираем идентификатор бока с атрибута href
      var id  = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
          top = $(id).offset().top;
      //анимируем переход на расстояние - top за 1000 мс
      $('body,html').animate({scrollTop: top}, 1000);
  });
    


  $('.fade').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });



  var burger = "";
  document.addEventListener("DOMContentLoaded", function () {
    burger = document.getElementById('burger')
    burger.onclick = toggleBurger
  });

  function toggleBurger() {
    if (burger.classList.contains("active")) {
      burger.classList.remove("active");
    } else {
      burger.classList += " active";
    }
  }


  $('main').click(function () {
    $('.menu__links').fadeToggle()
  })


})