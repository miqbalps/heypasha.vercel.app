"use client";

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

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
