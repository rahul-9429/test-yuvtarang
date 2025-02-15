import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";
import Footer from "@/components/Navigations/Footer";
import Header from "@/components/Navigations/Header";
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="relative">
       <div className="fixed top-0 w-full h-screen bg-gradient-to-b from-primary-light to-primary -z-10"></div>
      <div className="z-50">
        <Header />
        <Component className={inter.className} {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}
