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
    // ★バグ修正：空セレクタをやめる
    jQuery('.text_effect').removeClass('show');
  }
});


// ビデオフェードイン設定（付け直しで確実に発火）
(function () {
  var $v = jQuery(".video_hohoemi");

  // すでに付いてるなら一旦外す
  $v.removeClass("fadein_img");

  // reflow を挟んで transition を確実に発火させる
  if ($v[0]) void $v[0].offsetHeight;

  setTimeout(function () {
    $v.addClass("fadein_img");
  }, 1000); // 好みで調整
})();

// フェードイン設定

//アニメーション属性を持つ要素を非表示、animated属性を追加
$('.animated').addClass('invisible');
(function () {
  var wh = jQuery(window).height();
  jQuery('.animated').each(function () {
    var elemOffset = jQuery(this).offset().top;
    if (elemOffset < wh) {
      jQuery(this).removeClass('invisible').addClass('fadeUp');
    }
  });
})();

$(window).on('load scroll', function () {

  //animatedのclassを持った要素をセレクタに指定
  var elem = $('.animated');

  elem.each(function () {

    //animated要素に位置を取得
    var elemOffset = $(this).offset().top;
    //現在のスクロールポジションを取得
    var scrollPos = $(window).scrollTop();
    //ウィンドウの高さを取得
    var wh = $(window).height();

    //animated要素がウィンドウ内にきたら処理
    if (scrollPos > elemOffset - wh + (wh / 8)) {
      $(this).removeClass('invisible').addClass('fadeUp');
    }
  });

}); // ← ★これが無いと壊れる


// ===== Next環境対策：初回判定を強制実行 =====
jQuery(function () {
  // load を取り逃しても、初回に一度だけ判定を走らせる
  jQuery(window).trigger("scroll");
});
