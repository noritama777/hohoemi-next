export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        {/* meta */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <title>HOTEL ほほえみ天使</title>
        <meta
          name="description"
          content="愛知県西尾市にある海と夜景が見えるラブホテル。テラス付きのお部屋、サウナ付きのお部屋もあります！全部屋オーシャンビュー！蒲郡方面にも近くて三河観光の拠点に便利。全客室、明るく見晴らしも良いのでお昼のお茶会、女子会も楽しめます。"
        />
        <meta name="thumbnail" content="https://hohoemitenshi.net/img/hohoemi_thum.jpg" />

        {/* OGP */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HOTEL ほほえみ天使" />
        <meta
          property="og:description"
          content="愛知県西尾市にある海と夜景が見えるラブホテル。テラス付きのお部屋、サウナ付きのお部屋もあります！全部屋オーシャンビュー！蒲郡方面にも近くて三河観光の拠点に便利。全客室、明るく見晴らしも良いのでお昼のお茶会、女子会も楽しめます。"
        />
        <meta property="og:url" content="https://hohoemitenshi.net/" />
        <meta property="og:site_name" content="HOTEL ほほえみ天使" />
        <meta property="og:image" content="https://hohoemitenshi.net/img/hohoemi_thum.jpg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:alt" content="" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:text:title" content="HOTEL ほほえみ天使" />
        <meta name="twitter:image" content="https://hohoemitenshi.net/img/hohoemi_thum.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@hotel_hohoemi" />

        {/* ld+json */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "ほほえみ天使",
            "@id": "https://hohoemitenshi.net/",
            "url": "https://hohoemitenshi.net/",
            "description": "愛知県西尾市にある海と夜景が見えるラブホテル。テラス付きのお部屋、サウナ付きのお部屋もあります！全部屋オーシャンビュー！蒲郡方面にも近くて三河観光の拠点に便利。全客室、明るく見晴らしも良いのでお昼のお茶会、お昼のお茶会、女子会も楽しめます。",
            "telephone": "0563-62-7666",
            "priceRange": "¥5000",
            "image": [
                "https://hohoemitenshi.net/img/logo.png",
                "https://hohoemitenshi.net/img/hohoemi_thum.jpg",
                "https://hohoemitenshi.net/img/room/202/room202_7.jpg",
                "https://hohoemitenshi.net/img/room/203/room203_8.jpg"
            ],
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "鳥羽町八貫29-7",
                "addressLocality": "西尾市",
                "addressRegion": "愛知県",
                "postalCode": "444-0702",
                "addressCountry": "JP"
            },
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
            },
            "sameAs": [
                "https://www.facebook.com/%E3%83%9B%E3%83%86%E3%83%AB-%E3%81%BB%E3%81%BB%E3%81%88%E3%81%BF%E5%A4%A9%E4%BD%BF-138357133548628/",
                "https://twitter.com/hotel_hohoemi",
                "https://www.instagram.com/hotelhohoemitenshi/",
                "https://hohoemitenshi.net/"
            ]
        }`,
          }}
        />

        {/* style */}
        <link rel="stylesheet" href="/css/reset.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/icomoon/style.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanmp.min.css"
        />
        <link rel="stylesheet" type="text/css" href="css/loading.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&family=Noto+Serif+JP:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
        />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/simple-parallax-js@5.6.1/dist/simpleParallax.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/vivus/0.4.4/vivus.min.js"></script>

        <link rel="shortcut icon" href="https://hohoemitenshi.net/favicon.ico" />
        <link rel="shortcut icon" href="https://hohoemitenshi.net/hohoemiwp/favicon.ico" />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-THRR59R');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body>{children}</body>
    </html>
  );
}
