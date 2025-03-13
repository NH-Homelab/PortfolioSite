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
          <div className="w-screen h-screen flex flex-col justify-center items-center p-4 sm:p-0">
            <div className="p-4 sm:p-6 shadow-lg flex flex-col sm:flex-row w-full sm:w-2/3 overflow-x-clip overflow-y-clip sm:justify-center items-center bg-[#E8ECEF] bg-opacity-65 border-t-2 border-black">
              <div className="flex flex-col basis-1/2 gap-2 sm:gap-10 p-2 sm:p-10 h-min">
                <div className="flex flex-col gap-2 items-center">
                  <h1 className="text-6xl text-center font-bold">Nick Henley</h1>
                  <h2 className="text-2xl text-center font-bold text-gray-500">Software Developer</h2>
                  <div className="flex gap-3 w-full sm:w-1/2 items-center justify-center h-min items-stretch border-t-[1px] border-b-[1px] sm:border-b-[0px] border-black py-2 sm:pt-5">
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
                <div>
                  <p className="text-wrap text-center sm:text-left">
                    I’m a programmer with a deep interest in cybersecurity, machine learning, and embedded systems. 
                    My approach is hands-on and practical — I like to understand how 
                    things work at a fundamental level and apply that knowledge to build better, more secure systems. 
                    I enjoy tackling real-world challenges in security and AI, and I’m eager to collaborate on projects that push the boundaries of 
                    what’s possible in these fields. If you’re working on something exciting in cybersecurity, AI, or embedded systems, let’s connect!
                  </p>
                </div>
              </div>
              <div className="collapse sm:visible">
                <div className="overflow-clip shadow-lg p-5 rounded-full h-[350px] w-[350px]">
                  <img src="headshot.png" className=""/>
                </div>
              </div>
            </div>
          </div>
        </Section>
        {/* Sticky header after first section */}
        <div className="collapse md:visible sticky top-0 flex flex-row w-screen justify-between items-center pl-10 pr-20 py-2">
            <div className="flex flex-col items-start w-min">
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