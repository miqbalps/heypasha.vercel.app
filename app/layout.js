import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Bars3Icon,
  XMarkIcon,
} from "@/components/MaterialTailwind";
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
        <NavbarSimple />
        {children}
        <SimpleFooter />
      </body>
    </html>
  );
}

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-md"
      >
        <Link
          href="/"
          className="flex items-center hover:text-teal-500 transition-colors"
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-md"
      >
        <Link
          href="/about"
          className="flex items-center hover:text-teal-500 transition-colors"
        >
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-md"
      >
        <Link
          href="/projects"
          className="flex items-center hover:text-teal-500 transition-colors"
        >
          Projects
        </Link>
      </Typography>
    </ul>
  );
}

function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-lg px-6 my-3 z-10 relative">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 text-xl"
        >
          Mikuah
        </Typography>
        <div className="hidden md:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

export function SimpleFooter() {
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
