export default function Card({title, img_path, github_link, children}: Readonly<{title: string, img_path?: string, github_link?: string, children: React.ReactNode}>) {
    return (
        <div className="flex flex-col items-center w-3/4 h-1/2 p-5 rounded-lg shadow-2xl md:gap-5 md:w-1/4">
            <div className="flex flex-col gap-0 justify-center items-center">
                <h1 className="text-2xl font-bold">{title}</h1>
                {github_link && <a href={github_link} className="text-blue-500">Github</a>}
            </div>
            {img_path && <img src={img_path} alt={title} className="border-2 border-black" />}
            {children}
        </div>
    );
}