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
  title: "Sandip's Portfolio",
  description:
    "Portfolio of Sandip Kumar Behera — a full-stack developer specializing in MERN stack, React Native, and Next.js. Explore projects, skills, and experience in building scalable, performant applications across web and mobile platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  vsc-initialized antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
