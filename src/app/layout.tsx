import type { Metadata } from "next";
import localFont from "next/font/local";

// 스타일 SASS
import "@/styles/base/_reset.scss";
import "@/styles/abstracts/_variables.scss";
import "@/styles/abstracts/_responsive.scss";
import styles from "./main.module.scss";

// 공통 레이아웃
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// 웹폰트 설정
const alexandria = localFont({
  src: "../../public/fonts/Alexandria/Alexandria-Variable.ttf",
  display: "swap",
  weight: "300 400 500 600 700",
  variable: "--font-alexandria",
});
const aneklatin = localFont({
  src: "../../public/fonts/Anek_Latin/AnekLatin-Variable.ttf",
  display: "swap",
  weight: "300 400 500 600 700",
  variable: "--font-anek-latin",
});
const notosanscjkkr = localFont({
  src: [
    {
      path: "../../public/fonts/Noto_Sans_CJK_KR/NotoSansCJKKR-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Noto_Sans_CJK_KR/NotoSansCJKKR-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Noto_Sans_CJK_KR/NotoSansCJKKR-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Noto_Sans_CJK_KR/NotoSansCJKKR-Bold.ttf",
      weight: "700",
    },
  ],
  display: "swap",
  weight: "300 400 500 700",
  variable: "--font-noto-sans",
});

// 메타데이터 :: 페이지의 타이틀, 설명, 키워드, 작성자, 뷰포트 설정 등 SEO와 관련된 정보를 정의
export const metadata: Metadata = {
  icons: {
    icon: "/icons/favicon.png",
  },
  title: "디지털 마케팅 대행사 리시드",
  authors: [{ name: "Ressed :: ㈜리시드" }],
  description: "디지털 마케팅 에이전시, 온라인 캠페인, SNS 전략, 인터랙티브 웹 구축, 유튜브 영상 제작, 퍼포먼스 마케팅",
  keywords: ["디지털 마케팅", "온라인 캠페인", "SNS 전략", "인터랙티브 웹 구축", "유튜브 영상 제작", "퍼포먼스 마케팅"],
  openGraph: {
    title: "리시드 End To End 마케팅 서비스 에이전시 :: 창의적 생각의 즐거움",
    description: "디지털 마케팅 에이전시, 온라인 캠페인, SNS 전략, 인터랙티브 웹 구축, 유튜브 영상 제작, 퍼포먼스 마케팅",
    url: "http://www.reseedcorp.com/",
    images: [
      {
        url: "/images/og_image.jpg",
        width: 1200,
        height: 628,
        alt: "디지털 마케팅 대행사 리시드",
      },
    ],
    type: "website",
    siteName: "디지털 마케팅 대행사 리시드",
  },
  twitter: {
    title: "리시드 End To End 마케팅 서비스 에이전시 :: 창의적 생각의 즐거움",
    description: "디지털 마케팅 에이전시, 온라인 캠페인, SNS 전략, 인터랙티브 웹 구축, 유튜브 영상 제작, 퍼포먼스 마케팅",
    images: [
      {
        url: "/images/og_image.jpg",
      },
    ],
  },
};

// 클래스
const { wrap } = styles;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className={`${wrap} ${notosanscjkkr.variable} ${alexandria.variable} ${aneklatin.variable}`}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
