// import Image from 'next/image';

// const transition_str = "transition transform hover:scale-110";

export default function Card({title, img_path, img_width, github_link, children}: Readonly<{title: string, img_path?: string, img_width?: string, github_link?: string,children: React.ReactNode}>) {
    return (
        <div className={`flex flex-col flex-[0_0_80%] md:flex-[0_0_33%] h-full max-h-[600px] md:max-h-[500px] justify-center items-center p-5 rounded-lg shadow-lg gap-4 md:gap-5`}>
            <div className="flex flex-col gap-0 justify-center items-center">
                <h1 className="text-2xl font-bold text-center">{title}</h1>
                {github_link && <a href={github_link} className="text-blue-500">Github</a>}
                {children}
            </div>
            <div className={`flex gap-2 justify-center items-center px-4`}>
                {img_path && <img src={img_path} alt={title} className={`flex flex-basis-2/3 border-2 border-black object-scale-down ${img_width || "w-full md:w-3/4"}`} />}
            </div>
        </div>
    );
}