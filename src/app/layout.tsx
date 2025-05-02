import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";
import TrialButton from "./components/TrialButton";
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
          <header className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl flex justify-between items-center py-4">
            <Image
              src={mark}
              alt="Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <div>
              <button className="text-sm font-medium mr-4">Log in</button>
              <TrialButton className="text-sm font-medium" />
            </div>
          </header>
          <div className="md:flex md:flex-row md:justify-between md:max-w-4xl w-full">
            <section className="w-full text-left mt-8">{children}</section>
            <footer className="w-full mt-8">
              {/* I need to do a bit more fiddling around to make this image overhand the other 
              content the way it should, but I'm going to skip that in interest of time.*/}
              <Image
                src={illustration}
                alt="Illustration"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </footer>
          </div>
        </main>
      </body>
    </html>
  );
}
