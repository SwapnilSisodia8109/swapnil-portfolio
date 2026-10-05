import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swapnil Sisodia | React Native & Mobile App Developer",
  description:
    "Portfolio of Swapnil Sisodia - React Native & Mobile Application Developer with 3+ years experience building scalable Android and iOS apps, serving 30k+ active users.",
  keywords: [
    "Swapnil Sisodia",
    "React Native Developer",
    "Mobile Application Developer",
    "iOS Developer",
    "Android Developer",
    "Frontend Engineer",
    "Redux",
    "TypeScript",
  ],
  authors: [{ name: "Swapnil Sisodia" }],
  openGraph: {
    title: "Swapnil Sisodia | React Native Developer Portfolio",
    description:
      "Explore apps, architecture, and engineering impact of Swapnil Sisodia - React Native Developer with 3+ years experience.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#080c14] text-slate-100">
        {children}
      </body>
    </html>
  );
}
