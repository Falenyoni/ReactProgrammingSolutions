##REDUX
> mkdir reduxtoolkitpractice

> cd reduxtoolkitpractice

> npx create-react-app .

##Install Tailwind CSS

> npm install -D tailwindcss

> npx tailwindcss init


## Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.
``````
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
``````
** Inside the tailwind.config.js file replace the content attribute with below:
> content: ["./src/**/*.{html,js}"],


## Add the Tailwind directives to your CSS (index.css)
** Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.

@tailwind base;
@tailwind components;
@tailwind utilities;


## Start the Tailwind CLI build process
Run the CLI tool to scan your template files for classes and build your CSS.
> npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch



## Install Redux Toolkit and react redux
>  npm install @reduxjs/toolkit

> npm install react-redux