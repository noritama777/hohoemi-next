// head_menuをスクロールすると、色が変わる
jQuery(window).on('scroll', function () {
    if (100 < jQuery(this).scrollTop()) {
        jQuery('.head_menu, .top_view').addClass('change-color');
    } else {
        jQuery('.head_menu, .top_view').removeClass('change-color');
    }
});

// toggle_btnをスクロールすると、色が変わる
jQuery(window).on('scroll', function () {
    if (500 < jQuery(this).scrollTop()) {
        jQuery('.toggle_btn').addClass('change-color');
    } else {
        jQuery('.toggle_btn').removeClass('change-color');
    }
});

// swiper
let swipeOption = {
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    speed: 2000,
}
new Swiper('.swiper-container', swipeOption);

// ハンバーガー
(function ($) {
    var $nav = $('#navArea');
    var $btn = $('.toggle_btn');
    var $mask = $('#mask');
    var open = 'open'; // class
    // menu open close
    $btn.on('click', function () {
        if (!$nav.hasClass(open)) {
            $nav.addClass(open);
        } else {
            $nav.removeClass(open);
        }
    });
    // mask close
    $mask.on('click', function () {
        $nav.removeClass(open);
    });
})(jQuery);

// マウスオーバーエフェクト

$(function () {
    $('.hover_num1').mouseover(function (e) {
        $('.about_bg1, .item_box_label1').addClass("hover_effect");
    })
    $('.hover_num1').mouseout(function (e) {
        $('.about_bg1, .item_box_label1').removeClass("hover_effect");
    })
});

$(function () {
    $('.hover_num2').mouseover(function (e) {
        $('.about_bg2, .item_box_label2').addClass("hover_effect");
    })
    $('.hover_num2').mouseout(function (e) {
        $('.about_bg2, .item_box_label2').removeClass("hover_effect");
    })
});

$(function () {
    $('.hover_num3').mouseover(function (e) {
        $('.about_bg3, .item_box_label3').addClass("hover_effect");
    })
    $('.hover_num3').mouseout(function (e) {
        $('.about_bg3, .item_box_label3').removeClass("hover_effect");
    })
});

$(function () {
    $('.hover_num4').mouseover(function (e) {
        $('.about_bg4, .item_box_label4').addClass("hover_effect");
    })
    $('.hover_num4').mouseout(function (e) {
        $('.about_bg4, .item_box_label4').removeClass("hover_effect");
    })
});

$(function () {
    $('.hover_num5').mouseover(function (e) {
        $('.about_bg5, .item_box_label5').addClass("hover_effect");
    })
    $('.hover_num5').mouseout(function (e) {
        $('.about_bg5, .item_box_label5').removeClass("hover_effect");
    })
});

$(function () {
    $('.hover_num6').mouseover(function (e) {
        $('.about_bg6, .item_box_label6').addClass("hover_effect");
    })
    $('.hover_num6').mouseout(function (e) {
        $('.about_bg6, .item_box_label6').removeClass("hover_effect");
    })
});

// parallax
var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
    delay: .5,
    transition: 'cubic-bezier(0,0,0,0.01)'
});


var image = document.getElementsByClassName('thumbnail2');
new simpleParallax(image, {
    delay: .9,
    transition: 'cubic-bezier(0,0,0,0.01)'
});






