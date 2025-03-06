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
      <div className="flex flex-col h-screen overflow-y-scroll gap-0 snap-y snap-mandatory no-scrollbar">
        <Section className="relative overflow-x-clip">
          <div className="w-screen h-screen flex flex-col justify-center items-center">
            <div className="p-10 shadow-lg flex flex-row gap-60 justify-center items-center bg-slate-100 border-t-2 border-black">
              <div className="flex flex-col gap-5 p-10 h-min">
                <div className="flex flex-col gap-2">
                  <h1 className="text-6xl text-center font-bold">Nick Henley</h1>
                  <h2 className="text-2xl text-center font-bold text-gray-500">Software Developer</h2>
                </div>
                <div className="flex gap-3 w-full items-center justify-center h-min items-stretch border-t-[1px] border-black pt-5">
                  <a target="_blank" href="mailto:nicholas.henley@colorado.edu" className="flex items-center text-indigo-400 pr-3 border-r-2 border-black"><img src="/icons/mail.png" alt="linkedin" className="w-10" /></a>
                  <a target="_blank" href="https://linkedin.com/in/nhenley" className="flex items-center pr-3 border-r-2 border-black">
                    <img src="/icons/linkedin.png" alt="linkedin" className="w-10" />
                  </a>
                  <a target="_blank" href="https://github.com/nh602" className="flex items-center pr-3">
                    <img src="/icons/github.png" alt="github" className="w-10" />
                  </a>
                </div>
              </div>
              <div className="overflow-clip shadow-2xl border-slate-300 border-[1px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-sky-100 to-slate-50 p-5 rounded-full h-[450px] w-[450px]">
                <img src="headshot.png" className=""/>
              </div>
            </div>
          </div>
        </Section>
        {/* Sticky header after first section */}
        <div className="sticky top-0 flex flex-row w-screen justify-between items-center pl-10 pr-20">
            <div className="flex flex-col items-start bg-slate-100 w-min">
              <h1 className="text-right text-4xl font-bold text-gray-800 text-nowrap">Nick Henley</h1>
              <h2 className="text-right text-1xl text-gray-500">Software Developer</h2>
              <p className="text-right">Broomfield, CO</p>
            </div>
            <div className="flex gap-3 md:w-1/2 items-center justify-end h-min items-stretch">
              <a target="_blank" href="mailto:nicholas.henley@colorado.edu" className="flex items-center text-indigo-400 pr-3 border-r-2 border-black">
                <img src="/icons/mail.png" alt="linkedin" className="w-10" />
              </a>
              <a target="_blank" href="https://linkedin.com/in/nhenley" className="flex items-center pr-3 border-r-2 border-black">
                <img src="/icons/linkedin.png" alt="linkedin" className="w-10" />
              </a>
              <a target="_blank" href="https://github.com/nh602" className="flex items-center pr-3">
                <img src="/icons/github.png" alt="github" className="w-10" />
              </a>
            </div>
          </div>
        <Section>
          { selectedProject && <ProjectModal project={selectedProject} closeModal={closeProjectModal}/> }
          <div className="w-screen h-screen flex flex-col gap-5 md:gap-10 pt-5 justify-center items-center">
            <h1 className="text-center text-4xl md:text-6xl font-bold text-gray-800 text-nowrap z-10">Projects</h1>
            <CardCarousel>
              <Card project={homelab} onClick={setSelectedProject}/>
              <Card project={portfolioProject} onClick={setSelectedProject}/>
              <Card project={portlandIndigenous} onClick={setSelectedProject}/>
              <Card project={nginxConfig} onClick={setSelectedProject}/>
              <div className="flex-[0_0_1%]"></div> {/* Right Spacer */}
            </CardCarousel>
          </div>
        </Section>
        
      </div>
    </>
  );
}