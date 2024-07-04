import type { Metadata } from "next";
import localFont from "next/font/local";
import "./global.css";
import Layout from "../components/templates/layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "엔카 차량목록",
  description: "엔카 국산 차량 검색 리스트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
