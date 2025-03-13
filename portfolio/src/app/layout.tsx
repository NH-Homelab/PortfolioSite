import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // You can specify the weights you need
});

export const metadata: Metadata = {
  title: "Nick Henley",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins} antialiased w-screen h-screen overflow-clip bg-slate-100`}>
        <div className={"absolute inset-0 w-screen h-screen bg-no-repeat bg-cover bg-bottom bg-fixed"} style={{ backgroundImage: "url('bg5.png')"}}>
        {/* <div className={"absolute inset-0 bg-transparent w-0 h- border-b-[100vw] border-[#666f75] border-l-[115vw] border-l-transparent"}></div> */}
          {/* <div className="absolute bottom-0 translate-y-[100] w-1/2 h-1/2 rounded-t-full rotate-45 border-l-[5px] border-l-gray-200"></div>
          <div className="absolute top-0 -translate-y-[10vh] left-0 w-1/2 h-1/2 rounded-b-full -rotate-90 border-l-[5px] border-l-gray-200"></div>
          <div className="absolute -translate-y-[10vh] translate-x-[25vw] w-1/2 h-1/2 -rotate-[20deg] rounded-t-full border-l-[5px] border-l-gray-200"></div> */}
        </div>
        {children}
      </body>
    </html>
  );
}
