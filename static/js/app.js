
/***********************************/
/* Sidebar Slide in on top */
/**********************************/
var start = $('.header').offset().top;

$.event.add(window, "scroll", function () {
    var p = $(window).scrollTop();
    if (p > start) {
        $('.header').addClass('header__fixed');
    } else {
        $('.header').removeClass('header__fixed');
    }
});
$(".navigation-section .open-menu").on('click', function() {
   $(this).toggleClass('active');
   $(this).next('ul').toggleClass('active');
});
//$(document).ready(function() {
//    var path = window.location.href;
//    $('.navigation-section ul li a').each(function () {
//        if (this.href === path) {
//            $(this).parent().addClass('active');
//        }
//    });
//});
$(".regular").slick({
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5
            }
        },
        {
            breakpoint: 880,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 585,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('[data-fancybox]').fancybox({
    youtube: {
        controls: 0,
        showinfo: 0
    },
    vimeo: {
        color: 'f00'
    }
});