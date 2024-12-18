import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import 'font-awesome/css/font-awesome.min.css';


const poppins = Poppins({
   weight: ['300', '400', '700'],
   subsets: ['latin'],
   style: ['normal', 'italic']
  })


export const metadata: Metadata = {
  title: "Net-Trix Data Protection",
  description: "Generated by Net-Trix Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased overflow-x-hidden`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
