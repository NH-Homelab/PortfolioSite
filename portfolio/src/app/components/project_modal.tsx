import {Project} from '../objects/project';

export default function ProjectModal({project, closeModal}: Readonly<{project: Project, closeModal: () => void }>) {
  return <>
  {
    <>
      <div className="fixed z-10 w-screen h-screen inset-0 flex justify-center">
        <div className="absolute z-0 w-full h-full backdrop-blur-md" onClick={closeModal}></div>
        <div className="p-10 z-10 w-3/4 h-full overflow-y-scroll bg-slate-100 flex flex-col gap-5">
          <div className="flex flex-row justify-end">
            <button onClick={closeModal} className="text-4xl text-black p-2">X</button>
          </div>
          <h1 className="text-5xl font-bold text-center">{project.title}</h1>
          <a href={project.github_link} className="text-blue-500 text-center text-lg">github</a>
          {/* <div className="flex flex-row justify-between w-full px-10 gap-10">
            <img src={project.img_path} alt={project.title} className="w-1/2"/>
            <p className="w-1/2 text-left">{project.description}</p>
          </div> */}
          {
            project.sections.map((section) => {
              return (
                <div key={section.heading} className="flex flex-col justify-center gap-5 shadow-md p-10">
                  <h1 className="text-3xl font-bold text-center">{section.heading}</h1>
                  <div className="flex flex-row justify-center gap-20 px-10 items-center">
                    {section.img_path !== "" && (
                      <img src={section.img_path} alt={section.heading} className="w-1/3 border-2 border-black" />
                    )}
                    {section.body !== "" && <p className="w-1/2 h-full text-left text-lg shadow-md p-6">{section.body}</p>}
                  </div>
                  <div className="flex flex-row justify-center flex-wrap gap-10">
                    {
                      section.subsections.map((subsection) => {
                        return (
                          <div key={subsection.heading} className="flex flex-col w-1/3 justify-start items-center gap-3 shadow-md p-6 min-h-[300px]">
                            <h1 className="text-xl font-bold text-center">{subsection.heading}</h1>
                            <div className="flex flex-col gap-6">
                              {subsection.img_path !== "" && (
                                <img src={subsection.img_path} alt={subsection.heading} className="w-1/3 border-2 border-black" />
                              )}
                              {subsection.body !== "" && <p className="text-left text-lg">{subsection.body}</p>}
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  }
  </>
}
