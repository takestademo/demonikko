import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans-jp",
  display: "swap",
  preload: false,
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif-jp",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "日興産業株式会社 | 潤滑油・金属加工油のトータルソリューション",
    template: "%s | 日興産業株式会社",
  },
  description:
    "日興産業株式会社は、金属加工油・工業用潤滑油・自動車用潤滑油の企画・製造・販売を行っています。ODM・OEM対応、小ロットから大ロットまで柔軟に対応いたします。",
  keywords: [
    "日興産業",
    "潤滑油",
    "金属加工油",
    "工業用潤滑油",
    "自動車用潤滑油",
    "ODM",
    "OEM",
    "nks-ris",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://www.nks-ris.co.jp",
    siteName: "日興産業株式会社",
    title: "日興産業株式会社 | 潤滑油・金属加工油のトータルソリューション",
    description:
      "金属加工油・工業用潤滑油・自動車用潤滑油の企画・製造・販売。ODM・OEM対応。",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${notoSerifJP.variable}`}
    >
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
