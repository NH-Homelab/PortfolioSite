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
        <Section className="relative overflow-x-clip">
          {/* <div className="absolute h-full w-full bg-no-repeat bg-bottom bg-contain opacity-90 z-10 -translate-y-1 translate-x-1" style={{ backgroundImage: "url('/mnt.svg')" }}></div> */}
          <div className="absolute h-full w-full bg-no-repeat bg-bottom bg-contain z-0" style={{ backgroundImage: "url('/mnt_cl.svg')" }}></div>
          <div className="relative w-screen h-screen">
            <div className="flex flex-col justify-center items-center md:flex-row pt-40 gap-5">
              <div className="flex flex-col gap-1 pb-5 border-b-2 border-black w-min justify-center md:w-1/2 md:pb-0 md:border-b-0 md:pr-5 md:border-r-2">
                <h1 className="text-center md:text-right text-6xl font-bold text-gray-800 text-nowrap">Nick Henley</h1>
                <h2 className="text-center md:text-right text-3xl text-gray-500">Software Engineer</h2>
                <div className="flex gap-3 w-full items-center justify-end h-min items-stretch">
                  <a target="_blank" href="mailto:nicholas.henley@colorado.edu" className="flex items-center text-indigo-400 pr-3 border-r-2 border-black"><img src="/icons/mail.png" alt="linkedin" className="w-10" /></a>
                  <a target="_blank" href="https://linkedin.com/in/nhenley" className="flex items-center pr-3 border-r-2 border-black">
                    <img src="/icons/linkedin.png" alt="linkedin" className="w-10" />
                  </a>
                  <a target="_blank" href="https://github.com/nh602" className="flex items-center pr-3">
                    <img src="/icons/github.png" alt="github" className="w-10" />
                  </a>
                </div>
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
        <div className="sticky top-0 flex flex-row w-screen justify-between items-center py-2 px-10">
          <div className="flex flex-col items-start w-full">
            <h1 className="text-right text-6xl font-bold text-gray-800 text-nowrap">Nick Henley</h1>
            <h2 className="text-right text-3xl text-gray-500">Software Engineer</h2>
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
        {/* <Section>
          <div className="w-screen h-screen flex flex-col gap-5 md:gap-10 pt-5 justify-center items-center">
            <h1 className="text-center text-4xl md:text-6xl font-bold text-gray-800 text-nowrap">About</h1>
            <div className="flex flex-row gap-5 md:gap-10 justify-center w-screen ">
              <img src="/headshot.png" alt="headshot" className="w-1/2 md:w-1/5"/>
              <div className="flex flex-col gap-4 border-l-2 border-black pl-5">
                <h1>Hobbies</h1>
              </div>
            </div>  
          </div>
        </Section> */}
        <Section>
          <div className="w-screen h-screen flex flex-col gap-5 md:gap-10 pt-5 justify-center items-center">
            <h1 className="text-center text-4xl md:text-6xl font-bold text-gray-800 text-nowrap">Projects</h1>
            <CardCarousel>
              <Card title="Portfolio Project" img_path="portexample.png" github_link="https://github.com/NH-Homelab/PortfolioSite">
                <p className="text-center">Checkout the github page for this site! Self hosted on an nginx server.</p>
              </Card>
              <Card title="Portland Indigenous Marketplace" img_path="pim_project/vendors.png" orientation={"md:flex-row flex-col"} img_width={"w-2/3 lg:w-1/3"} github_link="https://github.com/Blueprint-Boulder/f23-PortlandIndigenousMarketplace">
                <p className="text-center">Mobile focused event and vendor management suite for the Portland Indigenous Marketplace organization.</p>
              </Card>
              <Card title="Homelab - Nginx Config" img_path="nginx.jpg" github_link="https://github.com/NH-Homelab/NGinx-Config">
                <p className="text-center">Homelab&apos;s nginx configuration. Configured to serve static files from /var/www/html and proxy requests to self hosted services.</p>
              </Card>
              <Card title="Homelab" img_path="proxmox.png" github_link="https://github.com/NH-Homelab">
                <p className="text-center">Homelab for my projects. Repurposed a desktop PC running Proxmox OS to containerize self hosted services and to deploy personal projects.</p>
              </Card>
              <div className="flex-[0_0_1%]"></div> {/* Right Spacer */}
            </CardCarousel>
          </div>
        </Section>
      </div>
    </>
  );
}