import "@/assets/scss/style.scss";

export const metadata = {
  title: "포트폴리오 사이트_Next-Site",
  description: "한가지 사이트를 다양한 프레임워크를 통해 만들어 보는 연습용 포트폴리오 사이트입니다.",
  keywords: ["포트폴리오", "리액트", "뷰", "넥스트", "portfolio", "react.js", "vue.js", "next.js"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <body>{children}</body>
    </html>
  );
}