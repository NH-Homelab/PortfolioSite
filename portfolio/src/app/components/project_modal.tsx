import { Project } from '../objects/project';

export default function ProjectModal({ project, closeModal }: Readonly<{ project: Project, closeModal: () => void }>) {
  return (
    <>
      <div className="fixed z-10 w-screen h-screen inset-0 flex justify-center">
        <div className="absolute z-0 inset-0 w-screen h-screen backdrop-blur-sm cursor-pointer" onClick={closeModal}></div>
        <div className="flex flex-col px-4 pt-5 z-10 w-full sm:w-3/4 sm:pt-10">
          <div className="sticky top-0 flex flex-col bg-slate-100 border-t-2 border-black gap-2 sm:gap-4 w-full py-2 rounded-sm shadow-md z-20">
            <div className="flex flex-row justify-between items-center w-full px-6">
              <div className="flex-1 text-center">
                <h1 className="text-3xl sm:text-5xl font-bold">{project.title}</h1>
              </div>
              <button onClick={closeModal} className="text-4xl text-black">x</button>
            </div>
            <a href={project.github_link} className="text-blue-500 text-center text-lg">github</a>
          </div>
          <div className="flex flex-col overflow-y-scroll no-scrollbar h-full">
            {
              project.sections.map((section) => {
                return (
                  <div key={section.heading} className={`flex flex-col mt-5 sm:justify-center bg-slate-100 border-t-2 border-black gap-5 ${section.subsections.length > 0 ? "sm:shadow-sm" : "sm:shadow-md"} px-4 pt-10 sm:pb-20 rounded-sm`}>
                    <h1 className="text-3xl font-bold text-center">{section.heading}</h1>
                    <div className="flex flex-col items-center gap-4 w-full sm:flex-row sm:justify-center sm:gap-20 sm:px-10">
                      {section.img_path !== "" && (
                        <img src={section.img_path} alt={section.heading} className={`${section.img_width} border-2 border-black`} />
                      )}
                      {section.body !== "" && <p className="w-full sm:w-1/2 h-full text-left text-lg shadow-md p-6 border-t-2 border-black">{section.body}</p>}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-center gap-5">
                      {
                        section.subsections.map((subsection) => {
                          return (
                            <div key={subsection.heading} className="flex flex-col sm:basis-1/2 justify-start items-center gap-3 shadow-lg p-6 min-h-[300px] border-t-2 border-black">
                              <h1 className="text-xl font-bold text-center w-full">{subsection.heading}</h1>
                              <div className="flex flex-col gap-6 w-full">
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
      </div>
    </>
  );
}
