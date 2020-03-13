$(function(){
    $('.rooms__slider').slick({
        dots: true,
        slidesToShow: 1,
        infinite: true,
      });
      $('.testimonial__inner').slick({
        dots: true,
        slidesToShow: 2,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              arrows: true,
              slidesToShow: 1
            }
          }
        ]
      });
      $('.description__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.description__slider-nav',
      });
      $('.description__slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.description__slider',
        dots: false,
        centerMode: false,
        vertical: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              vertical: false
            }
          }
        ]
      });
var wow = new WOW(
  {
    boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
    animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
    offset:       0,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
    mobile:       false,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
    live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
    callback:     function(box) {
      // функция срабатывает каждый раз при старте анимации
      // аргумент box — элемент, для которого была запущена анимация
    },
    scrollContainer: null // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
  }
);
wow.init();
});