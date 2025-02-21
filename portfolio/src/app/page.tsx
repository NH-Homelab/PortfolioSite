'use client';

// import { url } from "inspector";
// import Image from "next/image";
import Section from "./components/section";
import Card from "./components/card"
import CardCarousel from "./components/CardCarousel";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen overflow-y-scroll gap-0 snap-y snap-mandatory">
        <Section className="snap-start relative">
          <div className="absolute h-full w-full bg-no-repeat bg-bottom bg-contain" style={{ backgroundImage: "url('/mnt.svg')" }}></div>
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
        <Section className="snap-start">
          <div className="w-screen h-screen flex flex-col flex-wrap gap-10 p-30 justify-center items-center">
            <h1 className="text-center md:text-right text-6xl font-bold text-gray-800 text-nowrap">Projects</h1>
            <CardCarousel>
              <div className="flex-[0_0_80%] md:flex-[0_0_33%]">
                <Card title="Portfolio Project" img_path="portexample.png" github_link="https://github.com/NH-Homelab/PortfolioSite">
                  <p className="text-center">Checkout the github page for this site! Self hosted on an nginx server.</p>
                </Card>
              </div>
              <div className="flex-[0_0_80%] md:flex-[0_0_33%]">
                <Card title="Portfolio Project" img_path="portexample.png" github_link="https://github.com/NH-Homelab/PortfolioSite">
                  <p className="text-center">Checkout the github page for this site! Self hosted on an nginx server.</p>
                </Card>
              </div>
              <div className="flex-[0_0_80%] md:flex-[0_0_33%]">
                <Card title="Portfolio Project" img_path="portexample.png" github_link="https://github.com/NH-Homelab/PortfolioSite">
                  <p className="text-center">Checkout the github page for this site! Self hosted on an nginx server.</p>
                </Card>
              </div>
              <div className="flex-[0_0_80%] md:flex-[0_0_33%]">
                <Card title="Portfolio Project" img_path="portexample.png" github_link="https://github.com/NH-Homelab/PortfolioSite">
                  <p className="text-center">Checkout the github page for this site! Self hosted on an nginx server.</p>
                </Card>
              </div>
              <div className="flex-[0_0_1%]"></div> {/* Right Spacer */}
            </CardCarousel>
          </div>
        </Section>  
      </div>
    </>
  );
}