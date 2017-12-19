
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

$(".regular").slick({
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 7,
    slidesToScroll: 7,
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
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('[data-fancybox]').fancybox({
	youtube : {
		controls : 0,
		showinfo : 0
	},
	vimeo : {
		color : 'f00'
	}
});