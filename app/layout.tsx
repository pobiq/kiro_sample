import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
import "./globals.css";

const nanumGothic = Nanum_Gothic({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-nanum-gothic",
});

export const metadata: Metadata = {
  title: "KIROTHON",
  description: "원주 대학 연합 AI·클라우드 경진대회",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${nanumGothic.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${nanumGothic.className}`}>{children}</body>
    </html>
  );
}
