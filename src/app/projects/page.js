import React from "react";
import ProjectCard from "@/app/components/ProjectCard";
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
