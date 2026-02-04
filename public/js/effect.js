// span設定　エフェクト

$(document).ready(function () {

  // 文字列へのspan設定
  $(".text_effect").each(function () {
    var content = $(this).html();
    var trimText = $.trim(content);
    var newText = "";

    trimText.split("").forEach(function (e) {
      if (e == ' ') {
        // 空白対策
        newText += '<span> </span>';
      } else {
        newText += '<span>' + e + '</span>';
      }
    });
    $(this).html(newText);
  });

});


jQuery(window).on('scroll', function () {
  if (300 < jQuery(this).scrollTop()) {
    jQuery('.text_effect').addClass('show');
  } else {
    jQuery('').removeClass('show');
  }
});


// ビデオフェードイン設定
setInterval(() => {
  $(".video_hohoemi").addClass('fadein_img');
}, 1000);

// フェードイン設定

//アニメーション属性を持つ要素を非表示、animated属性を追加
$('.animated').addClass('invisible');


$(window).on('load scroll', function(){

  //animatedのclassを持った要素をセレクタに指定
  var elem = $('.animated');

  elem.each(function () {

    //data属性からアニメーション名を取得
    // var isAnimate = $(this).data('animate');
    //animated要素に位置を取得
    var elemOffset = $(this).offset().top;
    //現在のスクロールポジションを取得
    var scrollPos = $(window).scrollTop();
    //ウィンドウの高さを取得
    var wh = $(window).height();

    //animated要素がウィンドウ内にきたら処理
    if(scrollPos > elemOffset - wh + (wh / 8)){
      $(this).removeClass('invisible').addClass('fadeUp');
    }
  });

});