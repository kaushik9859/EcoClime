import Home from "@/component/home/desktop";
import Home2 from "@/component/home/mobile";
import Head from "next/head";
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

export const metadata = {
  title: "EcoClime",
  description: "Empowering Your Farm, Nurturing Our Earth",
};

export default function Page() {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}
      >
        <Head>
          <title>EcoClime</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        {/* Show Home on desktop, Home2 on mobile */}
        <div>
          <div className="hidden sm:block">
            <Home />
          </div>
          <div className="block sm:hidden">
            <Home2 />
          </div>
        </div>
      </body>
    </html>
  );
}
