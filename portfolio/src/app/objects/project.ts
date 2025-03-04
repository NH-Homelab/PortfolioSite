class Project_Section {
  heading: string;
  body: string;
  img_path: string;
  subsections: Project_Section[] = [];

  constructor(heading: string, body:string, img_path: string = "", subsections: Project_Section[] = []) {
    this.heading = heading;
    this.body = body;
    this.img_path = img_path;
    this.subsections = subsections;
  }
}

class Project {
  title: string;
  img_path: string;
  github_link: string;
  description: string;
  stack: string[];
  sections: Project_Section[];

  constructor(title: string, img_path: string, github_link: string, description: string, stack: string[], sections: Project_Section[] = []) {
    this.title = title;
    this.img_path = img_path;
    this.github_link = github_link;
    this.description = description;
    this.stack = stack;
    this.sections = sections;
  }
}

export { Project, Project_Section };