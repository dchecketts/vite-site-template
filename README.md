# README

This is a template. It uses vite to bundle and build the site based on files in the src directory, and then creates a dist directory that is then pushed to GitHub Pages. It also has several features to aid in rapid development and work with multiple developers. If a developer so wishes, they can use TailwindCSS. It will build a CSS file that other developers can read and reference. Additionally, this template uses tree shaking to prune unused JavaScript and CSS from the production build, while keeping them in the development environment.

## Features

- Vite
- Husky (See Fixes if you have issues with GitHub Desktop)
- Prettier
- Lint-staged
- Development environment commands (See Basic Commands)
- GitHub Action to deploy to GitHub Pages

## Basic Commands

- `npm run dev`: Run an instance that updates live to see what your changes to HTML, CSS, and JS do to the site.
- `npm run tidy`: Format the code with Prettier.
- `npm run build`: Bundle and build the site.

- `npm run dev-tailwind`: Same as the `dev` version, but for working with TailwindCSS.
- `npm run tidy-tailwind`: Same as `tidy`, but for TailwindCSS.

## File Organization

- CSS files are stored in src/styles.
- JS is stored in src/scripts.
- Except for the homepage, each page is a folder.
- Main page folders such as "About" or "FAQ" are folders within src. Inside each folder is an index.html to create a clean URL. (i.e. example.com/about/ instead of example.com/about.html)

## Fixes

I personally like to use GitHub Desktop on Windows to manage commits instead of the terminal. As such, there's a few differences when it comes to pre-commits such as Husky. If you encounter errors as I did, below is how to fix it.

1. Confirm that Node.JS is installed correctly. It should be found at C:/"Program Files"/nodejs
2. Navigate to C:/Users/[username] and find a directory named .config.
3. Create a directory named husky.
4. Create a file named init.sh, containing the line `export PATH="$PATH:/c/Program Files/Git/bin:/c/Program Files/nodejs"`. I used VS Code to do so. This helps GitHub Desktop to find where Git and Node.JS are located.
5. That's it! GitHub Desktop should now be able to create and push your commits without issue now.
