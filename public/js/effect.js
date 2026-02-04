/* ================================
 *  span設定 / エフェクト（修正版）
 *  - text_effect を「テキスト前提」で span 化（<span>文字列化事故を防止）
 *  - 二重実行ガード
 *  - scroll の removeClass バグ修正（jQuery('') → $('.text_effect')）
 *  - video フェードは setTimeout（無限 setInterval をやめる）
 *  - animated 初期 invisible 付与を ready で確実に
 *  - load + scroll で fadeUp 発火
 * ================================ */

(function ($) {
  "use strict";

  // ----------------------------
  // 1) 文字列への span 設定
  // ----------------------------
  function setupTextEffectSpans() {
    $(".text_effect").each(function () {
      var $el = $(this);

      // 二重実行防止（Next / mounted / 再読み込み対策）
      if ($el.data("textEffectSpanned")) return;
      $el.data("textEffectSpanned", true);

      // ★重要：html()ではなく text() を使う（タグ文字列化事故を防ぐ）
      var contentText = $el.text();
      var trimText = $.trim(contentText);
      var newText = "";

      trimText.split("").forEach(function (ch) {
        if (ch === " ") {
          newText += "<span> </span>"; // 空白対策
        } else {
          newText += "<span>" + ch + "</span>";
        }
      });

      // span をDOMとして反映
      $el.html(newText);
    });
  }

  // ----------------------------
  // 2) text_effect の show 付与（スクロール）
  // ----------------------------
  function bindTextEffectScroll() {
    $(window).on("scroll.textEffect", function () {
      if (300 < $(this).scrollTop()) {
        $(".text_effect").addClass("show");
      } else {
        $(".text_effect").removeClass("show"); // ★バグ修正：jQuery('') → $('.text_effect')
      }
    });

    // 初期位置でも判定
    $(window).triggerHandler("scroll.textEffect");
  }

  // ----------------------------
  // 3) ビデオフェードイン設定
  // ----------------------------
  function setupVideoFadeIn() {
    // 1回だけでOK（無限にaddClassしない）
    setTimeout(function () {
      $(".video_hohoemi").addClass("fadein_img");
    }, 1000);
  }

  // ----------------------------
  // 4) animated フェードイン（invisible → fadeUp）
  // ----------------------------
  function setupAnimatedInit() {
    $(".animated").addClass("invisible");
  }

  function runAnimatedInView() {
    var $elems = $(".animated");
    if (!$elems.length) return;

    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    $elems.each(function () {
      var $el = $(this);

      // すでに表示済みなら何もしない（無駄なDOM操作回避）
      if (!$el.hasClass("invisible")) return;

      var elemOffset = $el.offset().top;

      // 要素がウィンドウ内に入ったら
      if (scrollPos > elemOffset - wh + wh / 8) {
        $el.removeClass("invisible").addClass("fadeUp");
      }
    });
  }

  function bindAnimatedLoadScroll() {
    $(window).on("load.animated scroll.animated", function () {
      runAnimatedInView();
    });
  }

  // ----------------------------
  // 起動
  // ----------------------------
  $(document).ready(function () {
    setupTextEffectSpans();
    bindTextEffectScroll();

    setupVideoFadeIn();

    setupAnimatedInit();
    bindAnimatedLoadScroll();

    // ready の時点でも一度走らせる（load前でも見える範囲は出す）
    runAnimatedInView();
  });
})(jQuery);
