# PortfolioSite
A public site that hosts information about myself and my projects. [Check it out!](https://www.nicholashenley.com)

## Structure
Created a static site using Next.JS and tailwind for styling.

## Hosting
I've hosted the site in a container on my Proxmox homelab. The static files are served using an nginx server running in a container. 

I chose to register the domain with Cloudflare to take advantage of their proxy and improve the security of my site. This also made it simple to setup TLS/SSL connections.

## Deployment
I've setup a self-hosted runner for github actions in the container on my server. When a commit is merged into the main branch, it automatically pulls the updated code, runs `npm run build`, and copies the files into `/var/www/html` to be served.