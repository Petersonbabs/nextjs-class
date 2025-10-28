"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/UI/NavBar";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Bryant Clothing | Best Ecommerce Store in Nigerian",
//   description: "Get the best outfit for different ocassions"
// }
// metadata: Controls what shows up in the browser tab, search result, social preview

// <Image>
// Cache Components
// Suspense:  
// Proxy
// Link
// Font Optimization

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <p>Generally shared compoent</p>
        <SessionProvider>
          <ThemeProvider attribute="class"  >
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
