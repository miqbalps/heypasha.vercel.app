"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import { TbBrandGithub, TbEye } from "react-icons/tb";

export function ProjectCard({
  imgUrl,
  title,
  description,
  stack,
  gitUrl,
  previewUrl,
}) {
  return (
    <Card className="max-w-[22rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <Image src={imgUrl} alt="ui/ux review check" width={352} height={198} />
      </CardHeader>
      <CardBody className="py-2">
        <Typography variant="h5" color="blue-gray">
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          color="gray"
          className="mt-3 font-normal"
        >
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between py-2">
        <div className="flex items-center -space-x-3">
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="font-normal"
          >
            {stack}
          </Typography>
        </div>
        <div className="flex items-center space-x-2">
          <Link
            className="flex items-center text-2xl hover:text-teal-500 transition-colors"
            href={gitUrl}
          >
            <TbBrandGithub />
          </Link>
          <Link
            className="flex items-center text-2xl hover:text-teal-500 transition-colors"
            href={previewUrl}
          >
            <TbEye />
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
