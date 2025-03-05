class Project_Section {
  heading: string;
  body: string;
  img_path: string;
  subsections: Project_Section[] = [];
  img_width: string;

  constructor(heading: string, body:string, img_path: string = "", subsections: Project_Section[] = [], img_width: string = "w-1/2") {
    this.heading = heading;
    this.body = body;
    this.img_path = img_path;
    this.subsections = subsections;
    this.img_width = img_width;
  }
}

class Project {
  title: string;
  img_path: string;
  github_link: string;
  description: string;
  stack: string[];
  sections: Project_Section[];
  img_width: string;

  constructor(title: string, img_path: string, github_link: string, description: string, stack: string[], sections: Project_Section[] = [], img_width: string = 'w-full md:w-3/4') {
    this.title = title;
    this.img_path = img_path;
    this.github_link = github_link;
    this.description = description;
    this.stack = stack;
    this.sections = sections;
    this.img_width = img_width;
  }
}

export { Project, Project_Section };