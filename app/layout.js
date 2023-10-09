import "./globals.css";
import { Inter } from "next/font/google";
import { NavbarSimple } from "@/components/NavbarComponent";
import { SimpleFooter } from "@/components/FooterComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "heypasha | Personal Portofolio",
  description:
    "A passionate full-stack web developer based in Bandung, Indonesia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-gray-50 text-gray-950`}
      >
        <div className="bg-[#fbe2e3] -z-50 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.2rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] -z-50 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[31.2rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <NavbarSimple />
        {children}
        <SimpleFooter />
      </body>
    </html>
  );
}
