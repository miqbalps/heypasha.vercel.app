import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  TbBrandGithub,
  TbEye,
} from "@/components/MaterialTailwind";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/lib/data";

const ProjectPage = () => {
  return (
    <main className="flex max-w-screen-lg mx-auto justify-center grow flex-col p-6 lg:px-20 lg:py-10">
      <h1 className="text-center md:text-start text-4xl text-neutral-800 dark:text-neutral-100 font-bold mb-4">
        Featured Projects
      </h1>
      <h3 className="mb-6">
        Check out my github repository for my other works
      </h3>
      <div className="w-full items-center flex flex-col md:flex-row md:flex-wrap justify-center gap-6 lg:gap-12">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </main>
  );
};

export default ProjectPage;

function ProjectCard({
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
