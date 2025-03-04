import { Project } from '../objects/project';

export default function Card({ img_width, project, onClick }: Readonly<{ project: Project, img_width?: string, onClick: (project: Project) => void }>) {
    return (
        <div
            className={`flex flex-col flex-[0_0_80%] md:flex-[0_0_33%] h-full max-h-[600px] md:max-h-[500px] justify-center items-center p-5 rounded-lg shadow-lg gap-4 md:gap-5`}
            onClick={() => onClick(project)}
        >
            <div className="flex flex-col gap-0 justify-center items-center">
                <h1 className="text-2xl font-bold text-center">{project.title}</h1>
                {project.github_link && (
                    <a href={project.github_link} className="text-blue-500">
                        Github
                    </a>
                )}
                <p className="text-center">{project.description}</p>{' '}
            </div>
            <div className={`flex gap-2 justify-center items-center px-4`}>
                {project.img_path != "" && (
                    <img src={project.img_path}
                        alt={project.title}
                        className={`flex flex-basis-2/3 border-2 border-black object-scale-down ${img_width || 'w-full md:w-3/4'}`} />
                )}
            </div>
        </div>
    );
}