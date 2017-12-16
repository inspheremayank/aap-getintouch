/***********************************/
/* Sidebar Slide in on top */
/**********************************/
$('.navigation__main-menu').children().clone().appendTo('.standalone-menu');
$('.menu-bar').on('click', function (event) {
    event.preventDefault();
    $('body').addClass('noscroll');
    $('.responsive-standalone').addClass('navigation-active');
    $('.responsive-standalone-close').addClass('open');
    $(".responsive-standalone-overlay").animate({
        "opacity": "toggle"
    }, {
        duration: 500
    }, function () {
        $(".responsive-standalone-overlay").fadeIn();
    });
    return false;
});
$('.responsive-standalone-close').on('click', function (event) {
    event.preventDefault();
    $('body').removeClass('noscroll');
    $(this).removeClass('open');
    $('.responsive-standalone').removeClass('navigation-active');
    $(".responsive-standalone-overlay").hide();
    return false;
});
$(".responsive-standalone-overlay").on('click', function () {
    $('.responsive-standalone-close').removeClass('open');
    $('.responsive-standalone').removeClass('navigation-active');
    $(".responsive-standalone-overlay").hide();
    $('body').removeClass('noscroll');
});
$('.responsive-standalone li.dropdown').on('click', function () {
    $(this).addClass('active').children('.sub-menu').slideToggle();
});
/***********************************/
/* card favourite toggle class */
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

$(".desktop-search .button").on('click', function () {
    var searchActive = $(this).parent(".desktop-search");
    var data = $(this).parent(".desktop-search").find('input').val();
    if (searchActive.hasClass('active') && data === "") {
        searchActive.removeClass("active");
        $(this).find('.customIcons').addClass('customIcons-search').removeClass('customIcons-close');
    } else {
        searchActive.addClass("active");
        $(this).find('.customIcons').removeClass('customIcons-search').addClass('customIcons-close');
    }
    return false;
});

$(".desktopSearch").on('keypress', function (e) {
    if (e.which === 13) {
        $('.headerSearchForm').submit();
    }
});

$(document).ready(function() {
    var videoTag = $('.card__view-full.single').find('.autoplay-video');        
    var articleVideoTag = $('.article__slide').find('.autoplay-video');
    
    function videoPlay(elem) {
        if(typeof elem.get(0) !== "undefined") {
            $(elem).get(0).play(); // play the video
            // Check if video is playing
            $(elem).get(0).onplay = function() {
                $(elem).prev().css('display', 'none');
            };
        }
    }
    
    videoPlay(videoTag);
    videoPlay(articleVideoTag);
});

$('.owl-carousel').owlCarousel({
    items: 1,
    responsiveClass: true,
    mouseDrag: false,
    autoPlay: false,
    video: true
});

$(".regular").slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 880,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
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

var slider = $('.mainSlide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    infinite: true,
    arrows: false,
    dots: true
});


$('#socialFix').Stickyfill();


// End Card truncate according to classes

$(".followers__grid-follow").on('click', function () {
    $(this).toggleClass('following');
});

$('.republishBtn').on('click', function (event) {
    event.preventDefault();
    $('body').addClass('noscroll');
    $('.republish__slideWindow').addClass('active');
    $(".republish__slideWindow .overlay-layer").animate({
        "opacity": "toggle"
    }, {
        duration: 500
    }, function () {
        $(".republish__slideWindow .overlay-layer").fadeIn();
    });
    return false;
});
$('.republish__slideWindow .close-button').on('click', function (event) {
    event.preventDefault();
    $('body').removeClass('noscroll');
    $('.republish__slideWindow').removeClass('active');
    $(".republish__slideWindow .overlay-layer").hide();
    return false;
});
$(".republish__slideWindow .overlay-layer").on('click', function () {
    $('body').removeClass('noscroll');
    $('.republish__slideWindow').removeClass('active');
    $(".republish__slideWindow .overlay-layer").hide();
});





$(".chzn-select").chosen({width: '100%', disable_search: true});
$(".chzn-search").chosen({width: '100%'});


$('[data-fancybox]').fancybox({
    toolbar: true,
    smallBtn: true,
    media : {
        youtube : {
            params : {
                autoplay: 1
            }
        }
    },
    buttons : [
        'slideShow',
        //'fullScreen',
        'thumbs',
        'close'
    ],
    afterClose: function() {
        $('.slick-video').trigger('pause');
    },
    afterShow: function (instance, current) {
        //console.log(instance);
        //console.log(current.$content['0']);
        $(current.$content['0']).trigger('play');
    },
    onUpdate : function( instance, current ) {
        var width,
            height,
            ratio = 16 / 9,
            video = current.$content;

        if ( video ) {
            video.hide();

            width  = current.$slide.width();
            height = current.$slide.height() - 100;

            if ( height * ratio > width ) {
                height = width / ratio;
            } 
            else {
                width = height * ratio;
            }

            video.css({
                width  : width,
                height : height
            }).show();
        }
    }
});
$('.content__section-Share ul li').on('click', function (event) {
    event.preventDefault();
});
$('.article__main-content figure').each(function () {
    if ($(this).attr('style') !== undefined) {
        
    } else {
        $(this).after('<div class="clearfix"></div>');
    }
});

$('.article__main-content figure figcaption').each(function(){
    if (!$(this).text().trim().length > 0) {
        $(this).addClass("d-none");
    }
});


$('.copyToClipboard').on('click', function () {
    var element = $(this);
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('#articleContentCopy').text()).select();
    document.execCommand("copy");
    $temp.remove();
    noty({
        type: "success",
        text: "Content Copied successfully!",
        layout: 'topRight',
        timeout: 2000,
        dismissQueue: true,
        animation: {
            open: 'animated bounceInRight', // jQuery animate function property object
            close: 'animated bounceOutRight', // jQuery animate function property object
            easing: 'swing', // easing
            speed: 500 // opening & closing animation speed
        }
    });
});


//$(".article").each(function(index, element){
//    var element = $(this).find('h1,h2,h3,h4,h5,h6,p');
//   console.info($(element).html());
//});
$('#subForm > button[type=submit]').on('click', function(e){
    e.preventDefault();
    
    var obj = $(this);
    var emailAddress = $('#subForm > input[name=Email]').val();
    var formAction = $('#subForm').attr('action');
    
    var regEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var validEmail = regEx.test(emailAddress);
    if(!validEmail) {
        alert("Please provide a valid email address");
        return;
    }
        
    $.ajax({
        url: formAction,
        type: 'post',
        data: $("#subForm").serialize(),
        dataType: 'json',
        success: function (data, textStatus,jqXHR ) {
        },
        error: function (jqXHR, textStatus, errorThrown) {
        },
        beforeSend: function (jqXHR, settings) {
            $(obj).html('Please Wait...');
        },
        complete: function (jqXHR, textStatus) {
            switch(jqXHR.status) {
                case 301: case 404: case 403:                    
                    $('#subscribed-success div').html('<p>Thank you. You have been successfully subscribed.</p>');
                    break;
            }
        }
    });
    
    return false;
});

$(document).ready(function() {
    var articleTitle = $('.article__userInfo-title').text();
    
    if(articleTitle !== undefined) {
        $('.republish__slideWindow').find('.article-title').text(articleTitle);
    }
    
    var articleHTMLString = '';
    
    var articleHTML = $('.article__userInfo-title');
    
    if($(articleHTML)[0] !== undefined) {
        articleHTML = $(articleHTML)[0].outerHTML;
        articleHTMLString = articleHTML;
    };
    
    $('.article__main-content p').each(function() {
        articleHTMLString += $(this)[0].outerHTML;
        if (articleHTMLString !== undefined) {
            $('.republish__slideWindow').find('.article-content-here').text(articleHTMLString);
        }
    });
});
