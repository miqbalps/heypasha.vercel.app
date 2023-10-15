"use client";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";

export default function SimpleFooter() {
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
