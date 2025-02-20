// import { url } from "inspector";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="fixed h-screen w-screen bg-stone-100 bg-no-repeat bg-bottom bg-contain" style={{ backgroundImage: "url('/mnt.svg')" }}></div>
      <div className="w-screen h-screen">
        <div className="relative flex flex-row pt-40 justify-center">
          <div className="relative w-1/2">
            <div className="flex flex-col h-min pr-10 border-r-2 border-black">
              <h1 className="text-right text-6xl font-bold text-gray-800">Nick Henley</h1>
              <h2 className="text-right text-3xl text-gray-500">Software Engineer</h2>
              <p className="text-indigo-400 text-right"><a href="https://linkedin.com/in/nhenley">Linkedin.com/in/nhenley</a></p>
            </div>     
          </div>
          <div className="relative flex flex-col w-1/2 justify-center pl-10">
            <p className="text-black text-left w-2/3">
              Nick Henley is a Computer Science student with a Data Science minor at 
              the University of Colorado Boulder, graduating in May 2025.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}