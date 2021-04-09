/* -------------------------
ドロワーメニュー
------------------------- */
$(function () {
    $('#js-drawer__btn').on('click', function () {
        $(this).toggleClass('open');
        $('#js-drawer__overlay, #js-drawer').toggleClass('open');
    });
    $('#js-drawer__overlay').on('click', function () {
        $(this).removeClass('open');
        $('#js-drawer__btn, #js-drawer').removeClass('open');
    });
    $('.drawer__link').on('click', function () {
        $('#js-drawer__btn, #js-drawer__overlay, #js-drawer').removeClass('open');
    });
});

/* -------------------------
スライダー
------------------------- */
var slider1 = new Swiper('.swiper-container', {
    effect: 'fade',
    speed: 2000,
    loop: true,

    autoplay: {
        delay: 3000,
    },

    // pagination: {
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    //     clickable: true,
    // },
})

/* -------------------------
スムーススクロール
------------------------- */
$(function () {
    $('a[href ^= "#"]').on('click', function () {
        var header = $('.header').innerHeight();
        var speed = 500;
        var id = $(this).attr('href');
        var target = $("#" === id ? 'html' : id);
        var position = $(target).offset().top - header;
        $('html, body').animate({scrollTop:position}, speed);
        return false;
    });
});

// $(function(){
//     var headerHeight = $('header').outerHeight();
//     var urlHash = location.hash;
//     if(urlHash) {
//         $('body,html').stop().scrollTop(0);
//         setTimeout(function(){
//             var target = $(urlHash);
//             var position = target.offset().top - headerHeight;
//             $('body,html').stop().animate({scrollTop:position}, 500);
//         }, 100);
//     }
//     $('a[href^=#]').click(function(){
//         var href= $(this).attr("href");
//         var target = $(href);
//         var position = target.offset().top - headerHeight;
//         $('body,html').stop().animate({scrollTop:position}, 500);
//         return false;
//     });
// });

/* -------------------------
FVタイトルのフェードイン
------------------------- */
$(window).on('load', function() {
    $('.fadeIn-fv').addClass('is-active');
});

/* -------------------------
フェードイン｜上下左右
------------------------- */
$(function () {
    $(window).on('scroll', function () {
        $(".fadeIn, .fadeIn-top, .fadeIn-under, .fadeIn-right, .fadeIn-left").each(function () {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 100) {
                $(this).addClass('is-active');
            }
        });
    });
});

/* -------------------------
Googleフォームの非同期処理
------------------------- */
var $form = $('#js-form');
$form.submit(function (e) {
    $.ajax({
        url: $form.attr('action'),
        data: $form.serialize(),
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function () {
                // 送信に成功した時の処理
                $form.slideUp();
                $('#js-success, #js-backBtn').slideDown();
            },
            200: function () {
                // 送信に失敗した時の処理
                $form.slideUp();
                $('#js-error, #js-backBtn').slideDown();
            }
        }
    });
    e.preventDefault();
});

/* -------------------------
必須項目入力後に送信ボタン反転
------------------------- */
var $submit = $('#js-submit');
$submit.prop('disabled', true);
$('#js-form input, #js-form textarea').on('change', function () {
    if(
        $('input:checked').length > 0 &&
        $('#js-form input[type="text"]').val() !== "" &&
        $('#js-form input[type="email"]').val() !== "" &&
        $('#js-form textarea').val() !== ""
    ) {
        $submit.prop('disabled', false);
        $submit.addClass('is-active');
    } else {
        $submit.prop('disabled', true);
        $submit.removeClass('is-active');
    }
});

/* -------------------------
TOPのフローティング
------------------------- */
$(function () {
    $('#js-floating-toTop, #js-floating-reserve').hide();
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 400) {
            $('#js-floating-toTop, #js-floating-reserve').fadeIn();
        } else {
            $('#js-floating-toTop, #js-floating-reserve').fadeOut();
        }
    });

    $('#js-floating-toTop').on('click', function () {
        $('body, html').animate({scrollTop: 0}, 500);
    });
    return false;
});

/* -------------------------
モーダル1｜感染症対策について
------------------------- */
$(function () {
    $('#js-infoCovid').on('click', function (e) {
        e.preventDefault();
        $('#js-modal-covid').addClass('is-open');
        $('#js-modal-covid').hide().fadeIn(400);
        return false;
    });

    $('#js-modal-covid__overlay, #js-modal-covid__btn').on('click', function (e) {
        e.preventDefault();
        $('#js-modal-covid').fadeOut(function () {
            $('#js-modal-covid').removeClass('is-open');
        });
        return false;
    });
});

/* -------------------------
モーダル2｜プライバシーポリシー
------------------------- */
$(function () {
    $('#js-contact__footer-link').on('click', function (e) {
        e.preventDefault();
        $('#js-modal-privacy').addClass('is-open');
        $('#js-modal-privacy').hide().fadeIn(400);
        return false;
    });

    $('#js-modal-privacy__overlay, #js-modal-privacy__btn').on('click', function (e) {
        e.preventDefault();
        $('#js-modal-privacy').fadeOut(function () {
            $('#js-modal-privacy').removeClass('is-open');
        });
        return false;
    });
});
