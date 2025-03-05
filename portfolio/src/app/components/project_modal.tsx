import { Project } from '../objects/project';

export default function ProjectModal({ project, closeModal }: Readonly<{ project: Project, closeModal: () => void }>) {
  return (
    <>
      <div className="fixed z-10 w-screen h-screen inset-0 flex justify-center">
        <div className="absolute z-0 inset-0 w-screen h-screen backdrop-blur-md cursor-pointer" onClick={closeModal}></div>
        <div className="pt-10 z-10 w-3/4 overflow-y-scroll no-scrollbar flex flex-col gap-5 bg-stone-100 px-4">
          <div className="flex flex-col gap-0 bg-stone-100 w-full py-2 rounded-sm shadow-md">
            <div className="flex flex-row justify-between items-center w-full px-6">
              <div className="flex-1 text-center">
                <h1 className="text-5xl font-bold">{project.title}</h1>
              </div>
              <button onClick={closeModal} className="text-4xl text-black">x</button>
            </div>
            <a href={project.github_link} className="text-blue-500 text-center text-lg">github</a>
          </div>
          {
            project.sections.map((section) => {
              return (
                <div key={section.heading} className={`flex flex-col justify-center bg-stone-100 border-t-2 border-black max-h-[800px] gap-5 ${section.subsections.length > 0 ? "shadow-sm" : "shadow-md"} px-4 pt-10 pb-20 rounded-sm`}>
                  <h1 className="text-3xl font-bold text-center">{section.heading}</h1>
                  <div className="flex flex-row justify-center gap-20 px-10 items-center">
                    {section.img_path !== "" && (
                      <img src={section.img_path} alt={section.heading} className={`${section.img_width} border-2 border-black`} />
                    )}
                    {section.body !== "" && <p className="w-1/2 h-full text-left text-lg shadow-md p-6 border-t-2 border-black">{section.body}</p>}
                  </div>
                  <div className="flex flex-row justify-center gap-5 w-full">
                    {
                      section.subsections.map((subsection) => {
                        return (
                          <div key={subsection.heading} className="flex flex-col basis-1/3 justify-start items-center gap-3 shadow-lg p-6 min-h-[300px] border-t-2 border-black">
                            <h1 className="text-xl font-bold text-center">{subsection.heading}</h1>
                            <div className="flex flex-col gap-6">
                              {subsection.img_path !== "" && (
                                <img src={subsection.img_path} alt={subsection.heading} className={`${subsection.img_width} border-2 border-black`} />
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
  );
}
