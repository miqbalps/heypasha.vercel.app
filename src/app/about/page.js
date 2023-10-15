import {
  TbBriefcase,
  TbSchool,
  TbBrandLaravel,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandBootstrap,
  TbBrandTailwind,
  TbBrandMysql,
  TbBrandPhp,
  TbBrandReact,
  TbBrandNextjs,
} from "react-icons/tb";
import {
  EducationTimeline as Education,
  WorkTimeline as Work,
} from "@/app/components/TimelineComponent";

function AboutPage() {
  return (
    <main className="flex max-w-screen-lg mx-auto justify-center grow flex-col p-6 lg:px-20 lg:py-10">
      <div className="mb-8">
        <h1 className="text-center flex gap-2 lg:text-start text-4xl text-neutral-800 dark:text-neutral-100 font-bold mb-4">
          Tech Stack
        </h1>
        <div className="flex text-4xl ps-6">
          <TbBrandHtml5 />
          <TbBrandCss3 />
          <TbBrandBootstrap />
          <TbBrandTailwind />
          <TbBrandJavascript />
          <TbBrandReact />
          <TbBrandNextjs />
          <TbBrandPhp />
          <TbBrandLaravel />
          <TbBrandMysql />
        </div>
      </div>
      <div>
        <h1 className="text-center flex gap-2 lg:text-start text-4xl text-neutral-800 dark:text-neutral-100 font-bold mb-4">
          <TbBriefcase /> Work Experience
        </h1>
        <Work />
      </div>
      <div>
        <h1 className="text-center flex gap-2 lg:text-start text-4xl text-neutral-800 dark:text-neutral-100 font-bold mb-4">
          <TbSchool /> Education
        </h1>
        <Education />
      </div>
    </main>
  );
}

export default AboutPage;
