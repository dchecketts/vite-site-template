# [TITLE]

This is a template project for a website using vite. It also has several additional features to aid in rapid development and work with other developers. Additionally, developers and optionally use Tailwind, and a GitHub action is included to build the site using tree shaking, generating individual CSS and JS files for each HTML file, so you don't have to worry about unused code bogging down load time.

## Basic Commands
- `npm run dev`: Type this command into the terminal to see changes live while working in your development environment.
- `npm run dev-tailwind`: Same as above, but to be used if you are using TailwindCSS.
- `npm run tidy`: Standardize file formatting throughout the project to minimize merge conflicts.
- `npm run build`: Used to build the site into what would be served via your chosen web-hosting service.

## File Organization
- You can make your own CSS files to reference in src/styles.
- You can store scripts in src/scripts.
- Except for the homepage, each page is a folder. Main page folders such as about and faq are in src. Within each folder is a index.html to create a clean URL. (example.com/about.html -> example.com/about/)
