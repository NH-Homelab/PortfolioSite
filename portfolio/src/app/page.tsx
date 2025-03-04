'use client';

// import { url } from "inspector";
// import Image from "next/image";
import { useState } from 'react';

import Section from "./components/section";

import Card from "./components/card"
import CardCarousel from "./components/CardCarousel";

import ProjectModal from "./components/project_modal";

// Project data
import { Project } from './objects/project';
import { portfolioProject, portlandIndigenous, nginxConfig, homelab } from './projectData';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const closeProjectModal = () => {
    setSelectedProject(null);
  }

  return (
    <>
      <div className="flex flex-col h-screen overflow-y-scroll gap-0 snap-y snap-mandatory">
        <Section className="relative overflow-x-clip">
          {/* <div className="absolute h-full w-full bg-no-repeat bg-bottom bg-contain opacity-90 z-10 -translate-y-1 translate-x-1" style={{ backgroundImage: "url('/mnt.svg')" }}></div> */}
          <div className="absolute h-full w-full bg-no-repeat bg-bottom bg-contain z-0" style={{ backgroundImage: "url('/mnt_cl.svg')" }}></div>
          <div className="relative w-screen h-screen">
            <div className="flex flex-col justify-center items-center md:flex-row pt-40 gap-5">
              <div className="flex flex-col pb-5 border-b-2 border-black w-min justify-center md:w-1/2 md:pb-0 md:border-b-0 md:pr-5 md:border-r-2">
                <h1 className="text-center md:text-right text-6xl font-bold text-gray-800 text-nowrap">Nick Henley</h1>
                <h2 className="text-center md:text-right text-3xl text-gray-500">Software Engineer</h2>
                <p className="text-center md:text-right text-indigo-400"><a href="https://linkedin.com/in/nhenley">Linkedin.com/in/nhenley</a></p>
              </div>     
              <div className="flex flex-col justify-center md:w-1/2">
                <p className="text-black text-center px-2 text-wrap md:text-left md:w-1/2">
                  Nick Henley is a Computer Science student with a Data Science minor at 
                  the University of Colorado Boulder, graduating in May 2025.
                </p>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          { selectedProject && <ProjectModal project={selectedProject} closeModal={closeProjectModal}/> }
          <div className="w-screen h-screen flex flex-col gap-5 md:gap-10 pt-5 justify-center items-center">
            <h1 className="text-center text-4xl md:text-6xl font-bold text-gray-800 text-nowrap">Projects</h1>
            <CardCarousel>
              <Card project={portfolioProject} onClick={setSelectedProject}/>
              <Card project={portlandIndigenous} onClick={setSelectedProject} img_width={"w-2/3 lg:w-1/3"}/>
              <Card project={nginxConfig} onClick={setSelectedProject}/>
              <Card project={homelab} onClick={setSelectedProject}/>
              <div className="flex-[0_0_1%]"></div> {/* Right Spacer */}
            </CardCarousel>
          </div>
        </Section>
      </div>
    </>
  );
}