import { Project, Project_Section } from './objects/project';

export const portfolioProject = new Project(
  "Portfolio Project",
  "projects/portexample.png",
  "https://github.com/NH-Homelab/PortfolioSite",
  "Checkout the github page for this site! Self hosted on an nginx server.",
  ["React", "TypeScript", "NGINX"],
  [
    new Project_Section(
      "Project Goal", 
      `I created this website to showcase some of my projects and demonstrate that I could build a static site with Next.JS and deploy it publicly on the web. 
      Since the site is static, I chose to export the files and serve them using the nginx server running on my homelab. Check out
      my other projects to see the Nginx configuration project.`, 
      "projects/portexample.png",
      [],
      "w-full sm:w-3/4"),
  ]
);

export const portlandIndigenous = new Project(
  "Portland Indigenous Marketplace",
  "projects/pim/vendors.png",
  "https://github.com/Blueprint-Boulder/f23-PortlandIndigenousMarketplace",
  "Mobile focused event and vendor management suite for the Portland Indigenous Marketplace organization.",
  ["React", "Javascript", "Node.js", "Express.js", "PostgreSQL"],
  [
    new Project_Section(
      "Blueprint Boulder", 
      `Blueprint Boulder is a student organization at the University of Colorado Boulder. They pair non profit organizations with student developer teams
      to create projects that benefit the community. This project was created for the Portland Indigenous Marketplace organization.`,
      "",
      [],
      ""
    ),
    new Project_Section(
      "Description", 
      `The organization needed a way to manage vendors and events. Events looked like fairs where vendors would apply to have stalls at the capacity-constrained event. Vendors create profiles on the site, and the organization can
      manage their profiles for them if necessary. The organization also can apply strikes to profiles that do not follow the rules of the organization when at events. The site also serves as a directory of all vendors in the organization,
      and keeps track of what events they have requested to attend and events they are approved to attend.`,
      "",
      [],
      ""),
    new Project_Section(
      "Vendor Profile", 
      `Vendors create their profiles on the site. At the top, the vendor's contact information and profile picture are displayed. There's also links to their various social media accounts. 
      Then next section contains the events they're registered and approved to attend. The final section is the policy handbook for the organization that the vendors can reference at any time.`,
      'projects/pim/vendor.png',
      [],
      "w-3/4 sm:w-1/4"),
    new Project_Section(
      "Directory", 
      `The directory is a list of all vendors in the organization, with a search bar at the top. Basic contact information is visible at a glance, and the user can click on a vendor to view their profile.`,
      'projects/pim/vendors.png',
      [],
      "w-3/4 sm:w-1/4"),
    new Project_Section(
      "Events", 
      `The events page lists the events that the organization is hosting. You can see the most important information at a glance, and click on an event to view more details including the list of attending vendors. 
      The organization can also create new events and manage existing events.`,
      'projects/pim/events.png',
      [],
      "w-3/4 sm:w-1/4")
  ],
  "w-2/3 lg:w-1/3"
);

export const nginxConfig = new Project(
  "Homelab - Nginx Config",
  "projects/nginx.jpg",
  "https://github.com/NH-Homelab/NGinx-Config",
  "Homelab's nginx configuration. Configured to serve static files from /var/www/html and proxy requests to self hosted services.",
  ["NGINX"],
  [
    new Project_Section(
      "Project Goal", 
      `The goal of this project was to make hosting services on my homelab simpler and more secure. I didn't like having to open various ports for
      each service I was hosting or creating separate authentication methods for each service. With Nginx acting as a reverse proxy, I can host multiple
      services on the same port and use the same authentication method for all services.`, 
      "projects/nginx.jpg",
      [],
      "w-full sm:w-3/4"),
    new Project_Section(
      "Features",
      "",
      "",
      [
        new Project_Section(
          "Deployment", 
          `Using a github action, pushes to the main branch are automatically deployed on my homelab. This makes it simple for me to add new pages to my site. You can checkout the github repository to see how this works.`),
        new Project_Section(
          "Authentication", 
          `Most endpoints supported by the Nginx server require authentication with a backend. The backend is a Node.js + Express.js server that uses JWT tokens to
          authenticate users. The JWT tokens are stored in a cookie and are used to authenticate requests to the backend. Instead of using usernames and passwords,
          the backend uses Google OAuth to authenticate users. When a user tries to access a protected route and logs in, the backend creates a database entry for
          their google user. Later, I can manually allow or deny users access through a simple dashboard.`),
        new Project_Section(
          "Portfolio Site", 
          `Hosts the code for this portfolio site by serving files in the /var/www/html directory. The portfolio has its own deployment script which builds the site and copies the exported files to the correct directory on the server.`)
      ]
    )
    
  ]
);

export const homelab = new Project(
  "Homelab",
  "projects/proxmox.png",
  "https://github.com/NH-Homelab",
  "Homelab for my projects. Repurposed a desktop PC running Proxmox OS to containerize self hosted services and to deploy projects.",
  ["Proxmox", "NGINX", "PostgreSQL", "React", "Node.js", "Express.js", "Docker"],
  [
    new Project_Section(
    "Project Motivation", 
    `Using a cloud service provider like AWS to host services could be expensive for small projects. Early in learning to program, I setup a linux machine on my home network
    to host my projects. I wanted to use a different operating system and containerize my projects for easier deployment. In this environment, I learned the basics of operating a linux
    machine, using docker, and managing a remote server.`, 
    "projects/proxmox.png",
    [],
    "w-full sm:w-3/4"),
    new Project_Section(
      "System Specs", 
      `My homelab has evolved over time, starting from an old workstation running Ubuntu Server. I later repurposed my custom built PC to host my server, which unlocked more storage space, RAM, and
      a faster processor. In Summer of 2024, I upgraded the system's memory to 32GB and switched to Proxmox OS, which is a virtualization environment that allows me to run multiple operating systems
      and containers on a single machine. The benefits of Proxmox OS are that it is free, open source, and has a web interface for managing the system. Proxmox gave me more flexibility to 
      manage the server remotely, isolate containers with complex networking, and improve the uptime of my services.`),
    new Project_Section(
      "Service - PiHole",
      `I use Pihole to block ads for my VPN clients. This is useful for devices that cannot install ad blocking software, like phones and tablets. Pihole also has DNS and DHCP services which
      I use for my internal network. I can setup ".local" domains and use the DNS service to resolve them to the internal network. Initially I manually managed IP addresses, but now new containers
      and VM's are automatically assigned an IP address by the DHCP service.`,
      "projects/pihole.png",
      [],
      "w-full sm:w-3/4"
    ),
    new Project_Section(
      "Service - Open WebUI",
      `Open WebUI is a web interface for local LLM's. Using an Ollama backend, I can install small models on my server and chat with them through the web interface.
      My server has 1050 TI 4gb and 1060 6gb graphics cards for a combined 10gb of VRAM. This allows me to run small models around 7B parameters in size fully on GPU.
      This gives me the flexibility to test and create AI-Powered applications without paying for API keys to ChatGPT or other large language model providers.`,
      "projects/openwebui.png",
      [],
      "w-full sm:w-3/4"
    ),
    new Project_Section(
      "Other Self-Hosted Services", 
      "",
      "",
      [
        new Project_Section(
          "OpenVPN",
          `A staple of my server has always been an OpenVPN server. In highschool, I wanted to circumvent my school's firewall so I could access sites like Youtube on campus. This experience
          taught me about network security and ports. I learned about commonly used ports for different services, and how network admins would block traffic over specific ports to prevent connections like 
          SSH and VPN's on the network. By using ports 80/443, I was able to hide my VPN traffic and bypass the firewall.`),
        new Project_Section(
          "Development Containers",
          `A common use case for my containers is hosting development environments that I can connect to remotely. Many of my courses use Jupyter Notebooks for assignments, so I host
          jupyterlabs behind my reverse proxy to use from anywhere. I also have a general purpose development container, which is just a debian base with all the tools I need for
          application development in C/C++, Rust, or other languages. This container runs a VS Code tunnel server which makes developing remotely simple. The main motivation for this was 
          having my development environment the same whenever I switched machines. I'd often be halfway through a feature and want to develop on my laptop on the go, but the code
          was on my desktop at home. Instead of pushing an incomplete feature to github, I can just connect to my development container from anywhere with wifi.`),
      ])
  ],
  "w-full sm:w-3/4"
);

export const projects: Project[] = [
  portfolioProject,
  portlandIndigenous,
  nginxConfig,
  homelab,
];