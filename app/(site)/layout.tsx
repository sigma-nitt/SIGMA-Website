"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
import Background from "@/components/Background"
import ToasterContext from "../context/ToastContext";
import CustomCursor from "@/components/AnimatedCursor";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-background ${inter.className}`}>
        <CustomCursor />
          <Background />
          <Header />
          <ToasterContext />
          {children}
          <Footer />
          <ScrollToTop />
      </body>
    </html>
  );
}
