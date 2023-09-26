"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[53494],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={title:"Configuration Reference, Suggested Workflows, and Optional Review",id:"configuration-reference-suggested-workflows-and-optional-review",slug:"configuration-reference-suggested-workflows-and-optional-review",hide_table_of_contents:!0,sidebar_position:20,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0t_config_reference_workflow_and_review.md"},r=void 0,l={unversionedId:"intermediate-javascript-part-time/test-driven-development/configuration-reference-suggested-workflows-and-optional-review",id:"intermediate-javascript-part-time/test-driven-development/configuration-reference-suggested-workflows-and-optional-review",title:"Configuration Reference, Suggested Workflows, and Optional Review",description:"We've learned about a lot of new concepts and tools over the weekend homework, so it's time to explain a typical workflow with the new tools we've learned, and share a configuration reference.",source:"@site/docs/intermediate-javascript-part-time/5_test-driven-development/0t-config-reference-workflow-and-review.md",sourceDirName:"intermediate-javascript-part-time/5_test-driven-development",slug:"/intermediate-javascript-part-time/test-driven-development/configuration-reference-suggested-workflows-and-optional-review",permalink:"/intermediate-javascript-part-time/test-driven-development/configuration-reference-suggested-workflows-and-optional-review",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Configuration Reference, Suggested Workflows, and Optional Review",id:"configuration-reference-suggested-workflows-and-optional-review",slug:"configuration-reference-suggested-workflows-and-optional-review",hide_table_of_contents:!0,sidebar_position:20,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0t_config_reference_workflow_and_review.md"},sidebar:"intermediate-javascript-part-time",previous:{title:"Adding A Production Dependency: Bootstrap",permalink:"/intermediate-javascript-part-time/test-driven-development/adding-a-production-dependency-bootstrap"},next:{title:"Journal #5",permalink:"/intermediate-javascript-part-time/test-driven-development/journal-5"}},s={},p=[{value:"Configuration Reference for the Shape-Tracker Repo",id:"configuration-reference-for-the-shape-tracker-repo",level:2},{value:"Applying Our New Tools to a New Project",id:"applying-our-new-tools-to-a-new-project",level:2},{value:"Creating a Project from Scratch",id:"creating-a-project-from-scratch",level:2},{value:"Optional: npm Overview",id:"optional-npm-overview",level:2},{value:"Workflow and Commands",id:"workflow-and-commands",level:3},{value:"Optional: webpack Overview",id:"optional-webpack-overview",level:2},{value:"Optional: ESLint Overview",id:"optional-eslint-overview",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We've learned about a lot of new concepts and tools over the weekend homework, so it's time to explain a typical workflow with the new tools we've learned, and share a configuration reference. "),(0,o.kt)("p",null,"In this lesson we'll cover the following topics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How to set up the Shape Tracker project from the example repo."),(0,o.kt)("li",{parentName:"ul"},"How to use the tools we implemented in Shape Tracker in a new project."),(0,o.kt)("li",{parentName:"ul"},"Direction for creating a project from scratch with a brand new ",(0,o.kt)("inlineCode",{parentName:"li"},".gitignore"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"webpack.config.js"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},".eslintrc"),"."),(0,o.kt)("li",{parentName:"ul"},"An overview of concepts and terminology for npm, webpack, and eslint.")),(0,o.kt)("p",null,"It's ",(0,o.kt)("strong",{parentName:"p"},"optional")," to read the overview on npm, webpack, and eslint! It's meant to provide a high-level review of important concepts and terminology. However, you very well may already have reached your capacity for ingesting information and a review may not be helpful now. "),(0,o.kt)("p",null,"If that's the case, we recommend revisiting the overview of npm, webpack, and eslint at the end of this course section to (hopefully) reinforce the concepts behind the new tools you are using this week."),(0,o.kt)("h2",{id:"configuration-reference-for-the-shape-tracker-repo"},"Configuration Reference for the Shape-Tracker Repo"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We're providing a reference repository for the Shape Tracker project, which also serves as a configuration reference for npm, webpack, and ESLint. Here's the link:"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-5-shape-tracker"},(0,o.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for Shape Tracker"))),(0,o.kt)("p",null,"Make sure that you are referencing the code from the branch called ",(0,o.kt)("inlineCode",{parentName:"p"},"1_functioning_environment"),". This is the default branch, so running ",(0,o.kt)("inlineCode",{parentName:"p"},"git clone...")," with the URL of the repo homepage will automatically clone down the branch called ",(0,o.kt)("inlineCode",{parentName:"p"},"1_functioning_environment"),". If you need a review on how to navigate between branches, review the lesson on ",(0,o.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/lessons/accessing-code-from-different-branches"},"accessing code from different branches"),". "),(0,o.kt)("p",null,"Once the repo is downloaded to your computer, you simply need to install packages in order to set it up. In the root of the Shape Tracker directory, run this command to install all packages listed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"$ npm install\n")),(0,o.kt)("p",null,"With this command, npm fetches all of the packages listed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," and any dependencies those packages rely on and install all of the source code to your project in the ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," directory. "),(0,o.kt)("p",null,"Since the Shape Tracker repo includes a ",(0,o.kt)("inlineCode",{parentName:"p"},"package-lock.json"),", npm will install all packages and their dependencies at their exact versions listed therein."),(0,o.kt)("p",null,"Typically we need to run ",(0,o.kt)("inlineCode",{parentName:"p"},"$ npm install")," just once to set up your project. However, if you run into installation issues and need to delete ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," to start the installation process over again, you'll have to re-run ",(0,o.kt)("inlineCode",{parentName:"p"},"$ npm install"),". "),(0,o.kt)("p",null,"Later on, if you wanted to add a new dependency, you'd use npm to install the specific package only: ",(0,o.kt)("inlineCode",{parentName:"p"},"$ npm install [package-name]"),". There's a couple things to note:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We can include the flag ",(0,o.kt)("inlineCode",{parentName:"li"},"--save-dev")," to save the dependency specifically as a development dependency like so: ",(0,o.kt)("inlineCode",{parentName:"li"},"$ npm install [package-name] --save-dev"),". "),(0,o.kt)("li",{parentName:"ul"},"Optionally we can list a version number with the package name, like this example with webpack: ",(0,o.kt)("inlineCode",{parentName:"li"},"$ npm install webpack@5.87.0 --save-dev")," If we don't include a version number, the most recent version of the package will be installed. "),(0,o.kt)("li",{parentName:"ul"},"We can include the flag ",(0,o.kt)("inlineCode",{parentName:"li"},"--save-exact")," to direct npm to save the exact version listed for the package and not a different minor or patch version number. We would do so like this: ",(0,o.kt)("inlineCode",{parentName:"li"},"$ npm install webpack@5.87.0 --save-dev --save-exact"),". ")),(0,o.kt)("p",null,"After we've installed all packages, we're ready to use the npm scripts that we created and defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),": "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ npm run build")," to build our project in development mode, including bundling our JS and CSS, generating HTML, and linting our code. We build a project when we want to verify that webpack is bundling our code correctly and there are no errors, but we don't actually want to start a development server."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ npm run start")," to build our project and then open the webpack development server, which will live re-bundle and reload our project when we make changes to the code in the ",(0,o.kt)("inlineCode",{parentName:"li"},"src")," folder. You'll be using this command the most to start and stop your project's server, which we've also configured to build the project."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ npm run lint")," to lint all JS files in the ",(0,o.kt)("inlineCode",{parentName:"li"},"src")," folder. We use this command whenever we want to lint our code. We should do this after we've written new code. Since we've configured webpack to use ESLint, webpack will be linting our code every time it builds it (meaning to bundle and process our source code), so you may find that you don't use this command as often.")),(0,o.kt)("p",null,"Everything in this configuration is reusable for future projects. We'll describe what files to reuse in the next section of this lesson. However, we recommend setting up your configuration from scratch for at least a few projects. This will give you more experience with setting up a development environment."),(0,o.kt)("h2",{id:"applying-our-new-tools-to-a-new-project"},"Applying Our New Tools to a New Project"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"While it's important to practice installing dependencies with npm, and manually setting up a ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file, ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," file, and ",(0,o.kt)("inlineCode",{parentName:"p"},".eslintrc")," file, it would be painful to have to do this for every project."),(0,o.kt)("p",null,"To use the same tools we used in the Shape Tracker project in a new project, you'll need to have all of the configuration files for npm, webpack, and ESLint. The only files that will change are those in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," folder, as long as the naming convention stays the same."),(0,o.kt)("p",null,"If we wanted to create a template repository that contained the basic configuration (which we'll learn how to do later in this section), we'd include the files and folders that are listed in the example below for a repo called ",(0,o.kt)("inlineCode",{parentName:"p"},"template-repo"),". The file structure shows only the completed configuration files you must include in your project, and NO auto-generated files, or files that should change from project to project. As you review the example, pay attention to the comments. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'template-repo/\n\u251c\u2500\u2500 src/\n\u2502   \u251c\u2500\u2500 // Our source code goes in src/\n\u2502   \u251c\u2500\u2500 // The JS, CSS, and HTML files in here change from project to project\n\u2502   \u251c\u2500\u2500 index.js // We always need to include the entrypoint JS file called index.js\n\u2502   \u2514\u2500\u2500 index.html // We always need to include a template HTML file called index.html\n\u251c\u2500\u2500 package.json  // In this file we need to update the "name" key to the name of the project\n\u251c\u2500\u2500 webpack.config.js\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 .eslintrc\n\u2514\u2500\u2500 README.md\n')),(0,o.kt)("p",null,"As long as our project contains the above folder and file structure, including the completed configuration files, we are ready to go to use npm and webpack:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To set up the project, we'll need to run ",(0,o.kt)("inlineCode",{parentName:"li"},"$ npm install")," to install all packages. We'll do this once unless we run into errors and have to delete the ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules")," folder and reinstall dependencies."),(0,o.kt)("li",{parentName:"ul"},"To instruct webpack to build the bundle, generate the HTML, and lint our JS, we'll run ",(0,o.kt)("inlineCode",{parentName:"li"},"$ npm run build"),"."),(0,o.kt)("li",{parentName:"ul"},"To build our project (as described in the last bullet point) and serve it with the webpack dev server, we'll run ",(0,o.kt)("inlineCode",{parentName:"li"},"$ npm run start"),".")),(0,o.kt)("p",null,"After completing this setup, we're ready to write code in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," folder."),(0,o.kt)("p",null,"A few notes about the example ",(0,o.kt)("inlineCode",{parentName:"p"},"template-repo/")," file and folder structure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"src")," file, you'll still need a template HTML file, and a JS file called ",(0,o.kt)("inlineCode",{parentName:"li"},"index.js")," to serve as the entry point for webpack to make a bundle. You'll also still need to import other JS and CSS files into ",(0,o.kt)("inlineCode",{parentName:"li"},"index.js"),"."),(0,o.kt)("li",{parentName:"ul"},"What's NOT included in the file tree above are all of the auto-generated files and folders:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"dist/")," folder with the generated HTML and bundled code"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules/")," folder with the source code for the packages installed by npm"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"package-lock.json"),", which is created by npm to list the exact versions of all dependencies installed to our project with npm.  "))),(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),", you'll need to update the ",(0,o.kt)("inlineCode",{parentName:"li"},'"name"')," of your project.")),(0,o.kt)("h2",{id:"creating-a-project-from-scratch"},"Creating a Project from Scratch"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"If you are creating a project from scratch, including a ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},".eslintrc"),", remember to create your ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," and commit it to your Git history as the very first step! Your ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," should include these files:"),(0,o.kt)("div",{class:"filename"},".gitignore"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"node_modules/\n.DS_Store // only include this if you are on a Mac\ndist/\n")),(0,o.kt)("p",null,"It will be easiest to follow the weekend homework in order to recreate a project setup that uses npm, webpack, and eslint. Here's the basic steps to follow:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},".gitignore")," with all files or folders that should be ignored."),(0,o.kt)("li",{parentName:"ul"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),", whether you copy one or use ",(0,o.kt)("inlineCode",{parentName:"li"},"$ npm init -y")," to generate a new one via the command line.")),(0,o.kt)("p",null,"From here on, it doesn't matter whether you install and configure webpack, ESLint, or Bootstrap first."),(0,o.kt)("p",null,"As far as webpack goes, it really doesn't matter what order you follow to install the plugins and loaders, but they individually do have an effect on the location, naming, and contents of your source code, so you'll likely find it easiest to follow along with the weekend homework."),(0,o.kt)("p",null,"Also note that while you could install and configure ESLint before webpack, you can't configure the ESLintPlugin for webpack until webpack itself is installed and configured."),(0,o.kt)("h2",{id:"optional-npm-overview"},"Optional: npm Overview"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"npm stands for node package manager, which comes installed with Node. With npm we can install, modify, and uninstall packages that we want to use in a project. At its most simple, a ",(0,o.kt)("strong",{parentName:"p"},"package")," is simply an external JavaScript library \u2014 a set of code that we can download and use in our project. In technical terms, a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/about-packages-and-modules#about-packages"},"package")," is a file or folder that's described by a ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file contains all of the information about our project's metadata: its name, version, entry point, dependencies, scripts, and more. We can use a ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," like a manifest that describes everything about the project and everything that we need to run the project. "),(0,o.kt)("p",null,"When a package is installed with npm, the source code of the package, and any dependencies that package relies on, gets added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," folder. This reminds us of two terms:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.dev/learn/npm-dependencies-and-devdependencies"},(0,o.kt)("strong",{parentName:"a"},"dependency"))," is any code that other code relies on for its functionality. We can install a package as a dependency in the projects we create, and those packages can have dependencies or their own."),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/about-packages-and-modules#about-modules"},(0,o.kt)("strong",{parentName:"a"},"module"))," is any JS file or folder in the ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules")," directory that can be loaded by npm into our projects. In simpler terms, a module is a unit of functionality.")),(0,o.kt)("h3",{id:"workflow-and-commands"},"Workflow and Commands"),(0,o.kt)("p",null,"We use npm scripts to run packages installed in our project."),(0,o.kt)("p",null,"To run packages installed in our project, we can write an npm script. For example, we've set up a ",(0,o.kt)("inlineCode",{parentName:"p"},'"lint"')," script that calls on ESLint to lint our JS files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," folder. "),(0,o.kt)("div",{class:"filename"},"package.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'...\n  "scripts": {\n    ...\n    "lint": "eslint src --ext .js"\n  },\n...\n')),(0,o.kt)("p",null,"When we enter ",(0,o.kt)("inlineCode",{parentName:"p"},"$ npm run lint")," in the root of our directory, npm runs ",(0,o.kt)("inlineCode",{parentName:"p"},"eslint src --ext .js")," in the terminal, which invokes the ESLint package from within the ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," folder to only lint JS files that are in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," folder, including subdirectories within ",(0,o.kt)("inlineCode",{parentName:"p"},"src"),". "),(0,o.kt)("p",null,"The npm script for ESLint is just one example \u2014 we can set npm scripts to invoke other libraries or tasks."),(0,o.kt)("p",null,"We also use npm commands to install project dependencies."),(0,o.kt)("p",null,"As long as you have a completed ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file, to set up your project and install all packages, simply run the following command in the root of your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install\n")),(0,o.kt)("p",null,"If you are building a project from the ground up, or managing individual packages, you'll use commands to install and uninstall packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install [PACKAGE-NAME]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm uninstall [PACKAGE-NAME]\n")),(0,o.kt)("p",null,"When installing packages, we often include a version number. npm packages use ",(0,o.kt)("strong",{parentName:"p"},"semantic versioning"),". Review the lesson on ",(0,o.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/lessons/semantic-versioning"},"semantic versioning")," if you need a refresher."),(0,o.kt)("p",null,"You can also manually remove or add a package to the list of dependencies in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", and then ensure that your ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"package-lock.json")," are updated by running this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm prune\n")),(0,o.kt)("h2",{id:"optional-webpack-overview"},"Optional: webpack Overview"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"webpack is a module bundler. A ",(0,o.kt)("strong",{parentName:"p"},"module")," is a JavaScript file, CSS file, image, or other asset. As a ",(0,o.kt)("strong",{parentName:"p"},"bundler"),", webpack takes multiple files and concatenates them into a single bundled file. In the process, webpack optimizes the bundle for speed and efficiency. "),(0,o.kt)("p",null,"When webpack bundles modules, it creates a dependency graph, which is a representation of all of the files in our source code and how they are connected. webpack starts by loading the entry point ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js"),", then webpack loads any files that are imported into ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," (listed at the top of the file), and then webpack loads any files that are imported into those files, and so on and so forth. "),(0,o.kt)("p",null,"For webpack's dependency graph, a ",(0,o.kt)("strong",{parentName:"p"},"dependency")," is a file or package that is used in the  source code of our project, in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," folder. The dependencies in the Shape Tracker project include ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"triangle.js"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"css/styles.css"),', and the two Bootstrap files and anything that Bootstrap relies on. (If you are wondering, "what about the HTML?", remember that HTML is not bundled with webpack.)'),(0,o.kt)("p",null,"This is in contrast to an npm dependencies, which include a larger list of packages that we've downloaded to our project, like webpack. "),(0,o.kt)("p",null,"webpack's core functionality is to concatenate and minify JavaScript files. However with the help of plugins, loaders, and additional built-in webpack configurations, webpack can handle much more:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bundling CSS with our JS. For this we use the loaders ",(0,o.kt)("inlineCode",{parentName:"li"},"css-loader")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"style-loader"),". "),(0,o.kt)("li",{parentName:"ul"},"Generating HTML files. For this we use ",(0,o.kt)("inlineCode",{parentName:"li"},"HtmlWebpackPlugin"),"."),(0,o.kt)("li",{parentName:"ul"},"Linting our code, and clearing out old files. For this we use ",(0,o.kt)("inlineCode",{parentName:"li"},"ESLintPlugin")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"CleanWebpackPlugin"),"."),(0,o.kt)("li",{parentName:"ul"},"Improving our developer experience with source maps and a developer server. For source maps we use our browser's DevTools and a built-in webpack configuration for ",(0,o.kt)("inlineCode",{parentName:"li"},"devtool"),". For the developer server we use ",(0,o.kt)("inlineCode",{parentName:"li"},"webpack-dev-server"),", which is not a plugin, but an npm package that we can configure webpack to use."),(0,o.kt)("li",{parentName:"ul"},"And so much more that we did not learn about.")),(0,o.kt)("p",null,"We install loaders and plugins with npm, and we configure them in ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),"."),(0,o.kt)("p",null,"To enable webpack to bundle our code, we specify an entry point in our source code (",(0,o.kt)("inlineCode",{parentName:"p"},"index.js"),"), and we connect any files into that entry point that we want bundled. To connect files together we export a file and import it into another file. If you need a review on importing and exporting files, revisit the lesson ",(0,o.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/lessons/es6-imports-and-exports"},"ES6 Imports and Exports"),"."),(0,o.kt)("p",null,"In order to invoke the functionality of webpack and webpack's dev server, we've set up npm scripts in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," that run commands in the terminal to bundle our code and server it all in development mode."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Students who previously used Live Serve to serve their projects should now use webpack development server via the ",(0,o.kt)("inlineCode",{parentName:"strong"},'"start"')," npm script: ",(0,o.kt)("inlineCode",{parentName:"strong"},"$ npm run start"),".")),(0,o.kt)("h2",{id:"optional-eslint-overview"},"Optional: ESLint Overview"),(0,o.kt)("p",null,"ESLint is called a ",(0,o.kt)("strong",{parentName:"p"},"linter")," that looks for errors in our code, as well as poorly written code that doesn't meet conventions. ESLint is specifically for JavaScript, and it can vastly improve our development experience by pointing out issues that we otherwise might easily miss, like a missing semicolon. "),(0,o.kt)("p",null,"With webpack's ESLintPlugin, we've configured webpack to run eslint on our JavaScript files, every time we build our project. This is super helpful, because it fully automates and integrates the tool!"),(0,o.kt)("p",null,"However, we've also set up an npm script called ",(0,o.kt)("inlineCode",{parentName:"p"},'"lint"')," in order to invoke ESLint whenever we need to, with ",(0,o.kt)("inlineCode",{parentName:"p"},"$ npm run lint"),"."))}u.isMDXComponent=!0}}]);