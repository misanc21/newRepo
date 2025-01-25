'use client'
import { Job } from "./Job";
import { SideProjects } from "./SideProjects";
import { Subtitle } from "./Subtitle";

export const Experience = () => {

  return (
    <div className="flex flex-col justify-center items-center mb-48">
      <Subtitle text="Jobs Experience" />
      <Job />
      <Subtitle text="Freelance & Side projects" />
      <SideProjects />
    </div>
  )
}