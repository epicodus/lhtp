"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[13068],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=i,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},12116:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(87462),i=(t(67294),t(3905));const r={title:"6. Creating a package.json with npm",id:"creating_a_packagejson_with_npm",slug:"creating_a_packagejson_with_npm",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/4_test-driven-development-and-environments-with-javascript/0f_building_a_manifest_file_with_npm.md"},o=void 0,s={unversionedId:"intermediate_javascript/test-driven-development-and-environments-with-javascript/creating_a_packagejson_with_npm",id:"intermediate_javascript/test-driven-development-and-environments-with-javascript/creating_a_packagejson_with_npm",title:"6. Creating a package.json with npm",description:"Our first step in creating our project's development environment is to set up Node Package Manager (npm) by creating a package.json file. This file lists metadata about a project \u2014 its name, version, dependencies (packages used in the project), scripts, and more. In short, we use package.json to manage a project's dependencies.",source:"@site/docs/intermediate_javascript/4_test-driven-development-and-environments-with-javascript/0f_building_a_manifest_file_with_npm.md",sourceDirName:"intermediate_javascript/4_test-driven-development-and-environments-with-javascript",slug:"/intermediate_javascript/test-driven-development-and-environments-with-javascript/creating_a_packagejson_with_npm",permalink:"/lhtp/intermediate_javascript/test-driven-development-and-environments-with-javascript/creating_a_packagejson_with_npm",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"6. Creating a package.json with npm",id:"creating_a_packagejson_with_npm",slug:"creating_a_packagejson_with_npm",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/4_test-driven-development-and-environments-with-javascript/0f_building_a_manifest_file_with_npm.md"},sidebar:"intermediate_javascript",previous:{title:"5. Git Best Practices and Adding a .gitignore File",permalink:"/lhtp/intermediate_javascript/test-driven-development-and-environments-with-javascript/git_best_practices_and_adding_a_gitignore_file"},next:{title:"7. Semantic Versioning",permalink:"/lhtp/intermediate_javascript/test-driven-development-and-environments-with-javascript/semantic_versioning"}},p={},l=[{value:"Setting Up <code>package.json</code>",id:"setting-up-packagejson",level:2},{value:"Why Do We Need This File?",id:"why-do-we-need-this-file",level:3}],c={toc:l},d="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Our first step in creating our project's development environment is to set up Node Package Manager (npm) by creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file. This file lists metadata about a project \u2014 its name, version, dependencies (packages used in the project), scripts, and more. In short, we use ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," to manage a project's dependencies. "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," is a package manager for adding open-source JavaScript libraries and packages to our applications via the command line. And yes, that's not a typo \u2014 neither npm and webpack are capitalized. A ",(0,i.kt)("strong",{parentName:"p"},"package manager")," is exactly what it sounds like: a tool to help manage (install, upgrade, and configure) all the outside tools and libraries (also known as packages or dependencies) a project requires. "),(0,i.kt)("p",null,'npm originally started as a package manager for Node.js (used for server-side or "back-end" JavaScript), but now it\'s also commonly used for front-end (client-side JavaScript that uses the browser) projects as well. Our projects are entirely front-end because all of our code will be loaded in the browser. We will not cover server-side JavaScript (Node) in this course.'),(0,i.kt)("p",null,"There's another very popular package manager called ",(0,i.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"Yarn"),". You'll likely see many references to both yarn and npm when you are looking through online resources. In some ways, yarn improves on npm, but npm is the older, more established standard."),(0,i.kt)("p",null,"You should already have ",(0,i.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/intermediate-javascript/setting-up-javascript/installing-node-js"},"Node installed")," on your computer, which comes with npm. If not, install Node now, as we will need it to use npm. To check if you have node and npm installed, run these commands in the terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ node -v\nv16.14.0\n$ npm -v\n8.3.1\n")),(0,i.kt)("p",null,"Note: you don't have to have the same versions listed in the code snippet."),(0,i.kt)("p",null,"As you work through this lesson, make sure you run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm init -y")," to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file in your Shape Tracker project."),(0,i.kt)("h2",{id:"setting-up-packagejson"},"Setting Up ",(0,i.kt)("inlineCode",{parentName:"h2"},"package.json")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We will need a ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file for ",(0,i.kt)("em",{parentName:"p"},"every")," project going forward. Over the coming lessons, we will manually add all the packages we need in our ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file. However, once we have our ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file all set up, we can reuse it for other projects, tinkering with it and customizing it as necessary."),(0,i.kt)("p",null,"Open the command line, then navigate to the root directory of ",(0,i.kt)("inlineCode",{parentName:"p"},"shape-tracker"),". Then type in the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shel"},"$ npm init -y\n")),(0,i.kt)("p",null,"This automatically creates a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," in our project's root directory."),(0,i.kt)("p",null,"We can also run ",(0,i.kt)("inlineCode",{parentName:"p"},"$ npm init")," without the ",(0,i.kt)("inlineCode",{parentName:"p"},"-y")," flag; this creates a command line prompt with questions that you answer to create a basic ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," configuration. However, it's just as easy to edit configurations in the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file directly. All ",(0,i.kt)("inlineCode",{parentName:"p"},"$ npm init -y")," is doing is automatically initializing this file for us \u2014 without us doing any custom configuration first."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A quick note:")," we won't always use ",(0,i.kt)("inlineCode",{parentName:"p"},"$ npm init")," to set up our ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file. In the future, we'll reuse the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file from project to project, changing small details like the project name. This effectively means we can copy/paste a ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file from another project instead of initializing a new ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file and manually adding packages. This will become clearer as we get more familiar with the process."),(0,i.kt)("p",null,"Let's open the created ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," and take a look:"),(0,i.kt)("div",{class:"filename"},"shape-tracker/package.json"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "shape-tracker",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC"\n}\n')),(0,i.kt)("p",null,"So far, the file is very basic and only includes information like the ",(0,i.kt)("inlineCode",{parentName:"p"},'"name"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"version"')," of our project. There are no outside packages yet and we can update any of these values if we wish. However, we won't make any changes to this file just yet."),(0,i.kt)("p",null,"Note that when we use ",(0,i.kt)("inlineCode",{parentName:"p"},"npm init -y")," the ",(0,i.kt)("inlineCode",{parentName:"p"},'"name"')," of the project is set to the name of the directory we are in. When we reuse a ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file in another project, you'll need to update the ",(0,i.kt)("inlineCode",{parentName:"p"},'"name"')," to reflect your project's name. "),(0,i.kt)("h3",{id:"why-do-we-need-this-file"},"Why Do We Need This File?"),(0,i.kt)("p",null,"Before we move on, let's briefly cover the ",(0,i.kt)("em",{parentName:"p"},"why")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". As we install packages to our project with npm, the name and version number of each package we install will be added to ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". Let's look at an example of this. By the end of the section our Shape Tracker's ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file will look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "shape-tracker",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "build": "webpack --mode=development",\n    "start": "npm run build && webpack-dev-server --open --mode=development",\n    "lint": "eslint src --ext .js",\n    "test": "jest --coverage"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC",\n  "devDependencies": {\n    "@babel/core": "^7.18.6",\n    "@babel/plugin-transform-modules-commonjs": "^7.18.6",\n    "clean-webpack-plugin": "^3.0.0",\n    "css-loader": "^3.6.0",\n    "eslint": "^8.18.0",\n    "eslint-webpack-plugin": "^2.7.0",\n    "html-webpack-plugin": "^4.5.2",\n    "jest": "^24.9.0",\n    "style-loader": "^1.3.0",\n    "webpack": "4.46.0",\n    "webpack-cli": "^3.3.12",\n    "webpack-dev-server": "3.11.3"\n  },\n  "dependencies": {\n    "bootstrap": "^5.2.3",\n  }\n}\n')),(0,i.kt)("p",null,"Soon, we'll cover all of the details in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". For now, notice the ",(0,i.kt)("inlineCode",{parentName:"p"},'"devDependencies"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"dependencies"')," keys \u2014 these locations are where all of our packages are listed!"),(0,i.kt)("p",null,"This list of packages provides a set of instructions for anyone that wants to replicate our project (including our future selves). We simply need to clone the project and tell npm to install all of the packages listed in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," using a single command (we'll learn about this in the next lesson), and npm will handle installing all of the packages. This means that there's no need for us to install each package manually! This is a huge deal, especially when a project has dozens or even hundreds of packages."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file also provides some other very helpful functionality \u2014 the ability to add our own ",(0,i.kt)("inlineCode",{parentName:"p"},'"scripts"'),". This allows us to run custom commands in the terminal through npm, like serving our project and running tests. This can make our lives much easier as developers. We'll cover this in depth in future lessons."),(0,i.kt)("p",null,"Now that we have a sense of why this file is important, we're ready to start using npm to install our first dependencies. First, though, we'll learn about the basics of versioning in the next lesson. Versioning is a really important part of setting up a stable JavaScript environment."))}m.isMDXComponent=!0}}]);