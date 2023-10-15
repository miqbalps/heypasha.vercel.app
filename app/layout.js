import "./globals.css";
import { Inter } from "next/font/google";
import { Typography } from "@/components/MaterialTailwind";
// import { NavbarSimple } from "@/components/NavbarComponent";
import Link from "next/link";

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
        {/* <NavbarSimple /> */}
        {children}
        <SimpleFooter />
      </body>
    </html>
  );
}

function SimpleFooter() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between max-w-screen-lg px-6 mx-auto">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 Mikuah. All Right Reserved.
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <Typography
          as="li"
          color="blue-gray"
          className="font-normal transition-colors hover:text-teal-500 focus:text-teal-500"
        >
          <Link href="/">/home</Link>
        </Typography>
        <Typography
          as="li"
          color="blue-gray"
          className="font-normal transition-colors hover:text-teal-500 focus:text-teal-500"
        >
          <Link href="/about">/about</Link>
        </Typography>
        <Typography
          as="li"
          color="blue-gray"
          className="font-normal transition-colors hover:text-teal-500 focus:text-teal-500"
        >
          <Link href="/projects">/projects</Link>
        </Typography>
        <Typography
          as="li"
          color="blue-gray"
          className="font-normal transition-colors hover:text-teal-500 focus:text-teal-500"
        >
          <Link href="#">/contact</Link>
        </Typography>
      </ul>
    </footer>
  );
}
