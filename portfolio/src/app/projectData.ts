import { Project } from './objects/project';

export const portfolioProject = new Project(
  "Portfolio Project",
  "projects/portexample.png",
  "https://github.com/NH-Homelab/PortfolioSite",
  "Checkout the github page for this site! Self hosted on an nginx server.",
  ["React", "TypeScript", "NGINX"] 
);

export const portlandIndigenous = new Project(
  "Portland Indigenous Marketplace",
  "projects/pim/vendors.png",
  "https://github.com/Blueprint-Boulder/f23-PortlandIndigenousMarketplace",
  "Mobile focused event and vendor management suite for the Portland Indigenous Marketplace organization.",
  ["React", "Javascript", "Node.js", "Express.js", "PostgreSQL"] 
);

export const nginxConfig = new Project(
  "Homelab - Nginx Config",
  "projects/nginx.jpg",
  "https://github.com/NH-Homelab/NGinx-Config",
  "Homelab's nginx configuration. Configured to serve static files from /var/www/html and proxy requests to self hosted services.",
  ["NGINX"] 
);

export const homelab = new Project(
  "Homelab",
  "projects/proxmox.png",
  "https://github.com/NH-Homelab",
  "Homelab for my projects. Repurposed a desktop PC running Proxmox OS to containerize self hosted services and to deploy personal projects.",
  ["Proxmox", "NGINX", "PostgreSQL", "React", "Node.js", "Express.js", "Docker"]
);

export const projects: Project[] = [
  portfolioProject,
  portlandIndigenous,
  nginxConfig,
  homelab,
];