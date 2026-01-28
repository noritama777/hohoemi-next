import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HOTEL ほほえみ天使",
};

const COMMON_STYLES: string[] = [
  "/css/reset.css",
  "/css/style.css",
  "/icomoon/style.css",
  "https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanmp.min.css",
  "/css/loading.css",
  "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
{COMMON_STYLES.map((h) => (
  <link key={h} rel="stylesheet" href={h} />
))}

      </head>
      <body>{children}</body>
    </html>
  );
}
