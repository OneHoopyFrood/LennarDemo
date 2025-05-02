import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";
import "./globals.css";
import illustration from "./public/illustration.svg";
import mark from "./public/mark.svg";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lennar Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-gray-900 text-white`}>
        <main className="flex flex-col items-center justify-center px-4">
          <header className="w-full max-w-md flex justify-between items-center py-4">
            <Image
              src={mark}
              alt="Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <div>
              <button className="text-sm font-medium mr-4">Log in</button>
              <button className="text-sm font-medium bg-blue-600 px-4 py-2 rounded">
                Start free trial
              </button>
            </div>
          </header>
          <section className="w-full max-w-md text-left mt-8">
            {children}
          </section>
          <footer className="w-full max-w-md mt-8">
            <Image
              src={illustration}
              alt="Illustration"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </footer>
        </main>
      </body>
    </html>
  );
}
