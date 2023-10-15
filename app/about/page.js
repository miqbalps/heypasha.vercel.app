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
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@/components/MaterialTailwind";

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
        <WorkTimeline />
      </div>
      <div>
        <h1 className="text-center flex gap-2 lg:text-start text-4xl text-neutral-800 dark:text-neutral-100 font-bold mb-4">
          <TbSchool /> Education
        </h1>
        <EducationTimeline />
      </div>
    </main>
  );
}

export default AboutPage;

export function WorkTimeline() {
  return (
    <div className="w-[32rem]">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h5" color="blue-gray" className="leading-none">
              CV. Bilga Buana Technology
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8 pt-1">
            <Typography
              variant="paragraph"
              color="blue-gray"
              className="leading-none mb-1"
            >
              Web Developer (Full Time)
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="font-normal text-gray-600"
            >
              Aug 2023 - Sep 2023
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h5" color="blue-gray" className="leading-none">
              PT. Basicteknologi Intersolusi Tersinergi
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8 pt-1">
            <Typography
              variant="paragraph"
              color="blue-gray"
              className="leading-none mb-1"
            >
              Web Developer (Internship)
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="font-normal text-gray-600"
            >
              Oct 2022 - Mar 2023
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export function EducationTimeline() {
  return (
    <div className="w-[32rem]">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h5" color="blue-gray" className="leading-none">
              Institut Teknologi Nasional Bandung
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8 pt-1">
            <Typography
              variant="paragraph"
              color="gray"
              className="leading-none mb-1"
            >
              Informatics
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="font-normal text-gray-600"
            >
              Sep 2023 - Present
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h5" color="blue-gray" className="leading-none">
              SMK Negeri 13 Bandung
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8 pt-1">
            <Typography
              variant="paragraph"
              color="gray"
              className="leading-none mb-1"
            >
              Software Engineering
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="font-normal text-gray-600"
            >
              Jul 2020 - May 2023
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
