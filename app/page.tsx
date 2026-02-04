"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: `
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-THRR59R" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<header>

  <div class="head_menu">
    <div class="header_img">
      <a href="/"><img src="/img/logo.png"></a>
    </div>

    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/room.html">Room & Price</a></li>
        <li><a href="/service.html">Service</a></li>
        <li><a href="/food.html">Food</a></li>
        <li><a href="/category/information/">Information</a></li>
        <li><a href="/faq.html">FAQ</a></li>
        <li><a href="/access.html">Access</a></li>
        <li><a href="/contact.html">Contact</a></li>
      </ul>
    </nav>
  </div>

  <div id="navArea">
    <menu>
      <div class="inner">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/room.html">Room & Price</a></li>
          <li><a href="/service.html">Service</a></li>
          <li><a href="/food.html">Food</a></li>
          <li><a href="/category/information/">Information</a></li>
          <li><a href="/faq.html">FAQ</a></li>
          <li><a href="/access.html">Access</a></li>
          <li><a href="/contact.html">Contact</a></li>
        </ul>
      </div>
    </menu>

    <div class="toggle_btn">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div id="m_mask"></div>
  </div>

</header>

<section id="top_view">
  <div class="video_hohoemi fadein_img">
    <video src="img/top_mov.mp4" type="video/mp4" playsinline loop autoplay muted></video>
  </div>
  <h1 class="mov_txt">ほほえみ天使</h1>
  <div class="mov_txt2">302号室から撮影</div>
</section>

<section class="season_info">
  <ul>
    <!-- <li>...</li> -->
  </ul>
</section>

<section class="section_head">
<h2 class="text_effect">ひと休み、一休み。</h2>
  <p>ちょっと寄り道、日常の心身の疲れを<span class="span_br">そっと癒せる場所。</span> </p>
  <p>「泊まる」ではなくて、いつでも帰ってこれる<span class="span_br">温かい場所。</span></p>
</section>

<section class="section_head">
 <h2 class="text_effect">開放的に。</h2> 
  <p>高台にあるので外からお部屋の中を<span class="span_br">見られる心配がございません。</span> </p>
  <p>窓、カーテンを全開にして<span class="span_br">開放的なご気分でご利用下さい。</span></p>
</section>

<section class="information animated">
  <h2>Information</h2>
  <ul>
    <!-- microCMS 挿入ポイント（旧WordPress記事一覧の置換位置） -->
  </ul>
  <span class="chart"><a href="/category/information/">Infomation一覧はこちら</a></span>
</section>

    <section id="section_about">

        <ul>

            <li class="about_inner">
                <a href="/service.html#service_others">
                    <div class="item_container hover_num1">
                        <div class="item_img about_bg1">

                            <img src="/img/shampoo.jpg" class="thumbnail">

                            <div class="item_box_label1">
                                どうぞお好きなものを・・・。
                            </div>
                        </div>

                        <div class="item_txt">
                            <p>色々なボディーソープ、シャンプー</p>
                            <p>コンディショナーをご用意致しました。</p>
                            <p>お気に入り、または気になっていた</p>
                            <p>シャンプーをご自由にご利用下さい。</p>
                        </div>
                    </div>
                </a>
            </li>

            <li class="about_inner">
                <a href="/room.html#modal-09">
                    <div class="item_container hover_num2">
                        <div class="item_img about_bg2">

                            <img src="/img/about_img2.jpg" class="thumbnail2">

                            <div class="item_box_label2">
                                海を見ながら・・・。
                            </div>
                        </div>
                        <div class="item_txt">
                            <p>海が見えるテラスでお酒なんか</p>
                            <p>どうですか？</p>
                            <p>お飲み物もご用意していますが</p>
                            <p>お好きなお酒の持込も可能です。</p>
                        </div>
                    </div>
                </a>
            </li>

            <li class="about_inner">
                <a href="/service.html#vod">
                    <div class="item_container hover_num3">
                        <div class="item_img about_bg3">

                            <img src="/img/about_img3.jpg" class="thumbnail">

                            <div class="item_box_label3">
                                のんびりと・・・。
                            </div>
                        </div>
                        <div class="item_txt">
                            <p>全客室Free Wi-Fi完備。</p>
                            <p>最新VODシステムで映画・ドラマ・アニメ</p>
                            <p>アダルトが無料で楽しめます。</p>
                            <p>リーズナブルな料金とシンプルで清潔な</p>
                            <p>室内でのんびりしていただけます。</p>
                        </div>
                    </div>
                </a>
            </li>

            <li class="about_inner">
                <div class="item_container hover_num4">
                    <div class="item_img about_bg4">

                        <img src="/img/covid.jpg" class="thumbnail">

                        <div class="item_box_label4">
                            安心の環境・・・。
                        </div>
                    </div>
                    <div class="item_txt">
                        <p>信頼できるパートナーだけで</p>
                        <p>ご利用できます。</p>
                        <p>お互いの健康状態を</p>
                        <p>知っているから安心。</p>
                    </div>
                </div>
            </li>

            <li class="about_inner">
                <a href="/service.html">
                    <div class="item_container hover_num5">
                        <div class="item_img about_bg5">

                            <img src="/img/bass.jpg" class="thumbnail2">

                            <div class="item_box_label5">
                                色々なサービス・・・。
                            </div>
                        </div>
                        <div class="item_txt">
                            <p>色々なアメニティーも</p>
                            <p>ご用意しております。</p>
                            <p>パジャマ、スエットの無料貸出しも</p>
                            <p>ございますので急な宿泊も可能です。</p>
                        </div>
                    </div>
                </a>
            </li>

            <li class="about_inner">
                <a href="/food.html">
                    <div class="item_container hover_num6">
                        <div class="item_img about_bg6">

                            <img src="/img/food.jpg" class="thumbnail">

                            <div class="item_box_label6">
                                ゆっくりと・・・。
                            </div>
                        </div>
                        <div class="item_txt">
                            <p>24時間ルームサービス。</p>
                            <p>24時間ご注文を受け付けておりますので</p>
                            <p>手ぶらでのご来店も大丈夫です。</p>
                            <p>冷蔵庫、電子レンジもございますので</p>
                            <p>持ち込みも可能です。</p>
                        </div>
                    </div>
                </a>
            </li>
        </ul>

    </section>

    <section id="image">

        <div class="swiper-container fadein_img">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="slide-img">
                        <img src="/img/second_view2.jpg" alt="ホテル　ほほえみ天使　西尾">
                    </div>
                </div>

                <div class="swiper-slide">
                    <div class="slide-img">
                        <img src="/img/second_view4.jpg" alt="テラス 西尾市　夜景">
                    </div>
                </div>

                <div class="swiper-slide">
                    <div class="slide-img">
                        <img src="/img/second_view3.jpg" alt="テラス　西尾　景色">
                    </div>
                </div>

                <div class="swiper-slide">
                    <div class="slide-img">
                        <img src="/img/second_view1.jpg" alt="吉良ワイキキビーチ">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="image_txt">

        <h3>「小休止」できる空間作りを<span class="span_br">大切にしています。</span></h3>
        <h3>お二人だけの「小休止」できる空間に<span class="span_br">包まれてみませんか？</span></h3>
        <p>ちょっとだけ「小休止」を。</p>
        <p>現代社会は、昔に比べて便利で快適な生活が<span class="span_br">送れる時代です。</span></p>
        <p>しかし、時間に追われ、激しい競争など<span class="span_br">ストレスにさらされ、これが原因で「心の病」を</span><span class="span_br">患う人も少なくありません。</span></p>
        <p>この「ストレス社会」の生活の中で「小休止」を<span class="span_br">通じて「ほっとする瞬間」「小さな幸せ」を</span><span class="span_br">発見できる空間を提供します。</span></p>

    </section>

    <section id="intro_room">
        <a href="/room.html">お部屋のご紹介</a>
    </section>


    <section id="access">
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.767442796031!2d137.09897031465962!3d34.78662938612007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004ead419efe785%3A0xe2152196e4d8d2d6!2z44G744G744GI44G_5aSp5L2_!5e0!3m2!1sja!2sjp!4v1645369464439!5m2!1sja!2sjp"
                width="100%" height="350px" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>

        <div class="pr">
            <h2>三河湾を望める高台にある<span class="span_br">「HOTELほほえみ天使」。</span></h2>
            <p>自然を感じられ非日常な景色を堪能でき<span class="span_br">「小休止」できる空間のホテル。</span></p>
            <p>シンプルなデザインとアジアンモダンの<span class="span_br">「小休止」できる空間のホテル。</span></p>
            <p>三ヶ根山あじさいまつり、潮干狩り、<span class="span_br">鳥羽の火祭り、蒲郡の三谷祭り、</span><span class="span_br">ラグーナテンボスなど</span><span class="span_br">三河の観光拠点としてもご利用できます。</span>
                <span class="span_br">三河観光の際に、是非ご利用ください。</span>
            </p>
        </div>

        <section id="intro_room">
            <a href="/access.html#spot">観光のご案内</a>

        </section>

        <div class="sight">
            <p>
                西尾市、愛知県の心地よい港町は、その豊かな歴史と自然の美しさで知られています。この地域は、訪れる人々に多様な観光アクティビティを提供しており、日本の伝統と現代の魅力が融合したユニークな体験を楽しむことができます。
            </p>

            <p>一番の注目は、佐久島です。この島は、三河湾の中央に位置し、豊かな自然とアートが共存する場所として知られています。佐久島アートピクニックでは、島内に点在するアート作品を巡りながら、自然とアートの両方を満喫することができます。
            </p>

            <p>
                また、西尾市歴史公園では、江戸時代の城跡を探索したり、西尾名産のお抹茶を楽しむこともできます。この公園は、かつての西尾城の一部を再建・復元したもので、歴史愛好家には特におすすめのスポットです。
            </p>

            <p>
                さらに、西尾市では陶芸体験や茶摘み体験など、日本の伝統文化に触れることができるアクティビティも豊富です。堀井陶芸では、陶芸作家の指導のもと、本格的な陶芸体験が楽しめます。一般社団法人西尾市観光協会では、抹茶のルーツを探る工場見学や、一番茶の手摘み体験が可能です。
            </p>

            <p>西尾市は、歴史と自然、そして文化が織りなす魅力的なアクティビティで訪れる人々を魅了し続けています。次の旅行先として、西尾市の豊かな観光体験をぜひご検討ください。</p>
        </div>

        <div class="address">

            <div class="item_box">
                <h3><i class="icon-home"></i>ホテル ほほえみ天使</h3>
                <!-- <a href="/"><img src="/img/logo.png"></a> -->
                <p><i class="icon-location"></i>愛知県西尾市鳥羽町八貫29-7</p>
                <p>名鉄蒲郡線三河鳥羽駅を<span class="span_br">南へ約500m。</span></p>
                <p><i class="icon-phone"></i><a href="tel:0563-62-7666">0563-62-7666</a></p>

                <p>
                    <a href="https://www.instagram.com/hotelhohoemitenshi/" class="flowbtn instagram" rel="noopener"><i class="icon-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/%E3%83%9B%E3%83%86%E3%83%AB-%E3%81%BB%E3%81%BB%E3%81%88%E3%81%BF%E5%A4%A9%E4%BD%BF-138357133548628/" class="flowbtn facebook" rel="noopener">
                        <i class="icon-facebook"></i>
                    </a>
                    <a href="https://twitter.com/hotel_hohoemi" class="flowbtn twitter" rel="noopener">
                        <i class="icon-twitter"></i>
                    </a>
                </p>
            </div>

            <div class="item_box">
                <img src="/img/gaikan.jpg" alt="西尾市　ほほえみ天使" class="coupon_img">
            </div>

            <!-- <div class="item_box">
                <img src="/img/coupon.png" alt="ほほえみ天使　クーポン" class="coupon_img">
            </div> -->

            <!-- <div class="item_box">
                <a href="https://hohoemitenshi.net/2022/09/16/%e3%83%91%e3%83%bc%e3%83%88%e3%83%bb%e3%82%a2%e3%83%ab%e3%83%90%e3%82%a4%e3%83%88%e5%8b%9f%e9%9b%86%e4%b8%ad%ef%bc%81/">
                <img src="https://hohoemitenshi.net/img/work/募集.png" alt="ほほえみ天使　パート・アルバイト募集" class="coupon_img">
                </a>
            </div> -->

<div class="item_box">
  <p>
    &lt;満室の時は姉妹店へ&gt;
  </p>
  <h3>ホテル プチエンゼル</h3>
  <a href="https://ptangel.net"><img src="/img/angellogo.png"></a>
</div>
        </div>
    </section>



<footer>
  <div class="foot_menu">
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/room.html">Room & Price</a></li>
        <li><a href="/service.html">Service</a></li>
        <li><a href="/food.html">Food</a></li>
        <li><a href="/category/information/">Information</a></li>
        <li><a href="/faq.html">FAQ</a></li>
        <li><a href="/access.html">Access</a></li>
        <li><a href="/contact.html">Contact</a></li>
      </ul>
    </nav>
  </div>

  <div class="agree">
    <div class="item_box"><a href="/agreement.html">宿泊約款</a></div>
    <div class="item_box">HOTEL ほほえみ天使　<span class="span_br"><i class="icon-phone"></i><a href="tel:0563-62-7666">0563-62-7666</a></span>　<span class="span_br"><i class="icon-location"></i>愛知県西尾市鳥羽町八貫29-7</span></div>
  </div>

  <div class="copy_right">
    Copyright © 2022 ホテル ほほえみ天使 <span class="span_br"> Rights Reserved.</span>
  </div>
</footer>
`,
        }}
      />

      {/* ===== 旧HTMLと同じ順序でJSを実行 ===== */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/simple-parallax-js@5.6.1/dist/simpleParallax.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/vivus/0.4.4/vivus.min.js"
        strategy="afterInteractive"
      />

      {/* 旧サイト独自JS */}
      <Script src="/js/script.js" strategy="afterInteractive" />
      <Script src="/js/effect.js" strategy="afterInteractive" />
    </>
  );
}
