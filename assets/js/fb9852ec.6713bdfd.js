"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[82334],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?i.createElement(k,r(r({ref:n},c),{},{components:t})):i.createElement(k,r({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85303:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const o={title:"Configuring webpack and Using npm Scripts",id:"configuring-webpack-and-using-npm-scripts",slug:"configuring-webpack-and-using-npm-scripts",hide_table_of_contents:!0,sidebar_position:10,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0j_configuring_webpack.md"},r=void 0,l={unversionedId:"intermediate-javascript-part-time-evening/test-driven-development/configuring-webpack-and-using-npm-scripts",id:"intermediate-javascript-part-time-evening/test-driven-development/configuring-webpack-and-using-npm-scripts",title:"Configuring webpack and Using npm Scripts",description:"Before we get started with configuring webpack, let's take a look at our shape tracker application so far. It should have the following:",source:"@site/docs/intermediate-javascript-part-time-evening/5_test-driven-development/0j-configuring-webpack.md",sourceDirName:"intermediate-javascript-part-time-evening/5_test-driven-development",slug:"/intermediate-javascript-part-time-evening/test-driven-development/configuring-webpack-and-using-npm-scripts",permalink:"/intermediate-javascript-part-time-evening/test-driven-development/configuring-webpack-and-using-npm-scripts",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Configuring webpack and Using npm Scripts",id:"configuring-webpack-and-using-npm-scripts",slug:"configuring-webpack-and-using-npm-scripts",hide_table_of_contents:!0,sidebar_position:10,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0j_configuring_webpack.md"},sidebar:"intermediate-javascript-part-time-evening",previous:{title:"Introduction to webpack",permalink:"/intermediate-javascript-part-time-evening/test-driven-development/introduction-to-webpack"},next:{title:"ES6 Imports and Exports",permalink:"/intermediate-javascript-part-time-evening/test-driven-development/es6-imports-and-exports"}},s={},p=[{value:"Creating an npm Script",id:"creating-an-npm-script",level:2},{value:"Bundling JavaScript with webpack",id:"bundling-javascript-with-webpack",level:2},{value:"Development and Production Modes",id:"development-and-production-modes",level:3},{value:"Configuring webpack",id:"configuring-webpack",level:2}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Before we get started with configuring webpack, let's take a look at our shape tracker application so far. It should have the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The basic project files of html, JS, and CSS."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},".gitignore")," file."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"package-lock.json"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules"),"."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," should show two dev dependencies installed: webpack and webpack-cli. ")),(0,a.kt)("p",null,"If you haven't already created a repo on GitHub, do so now and push your local project to your remote repo."),(0,a.kt)("p",null,"Then, follow along with this lesson to create an npm script and ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," file in your project."),(0,a.kt)("h2",{id:"creating-an-npm-script"},"Creating an npm Script"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Remember that ",(0,a.kt)("inlineCode",{parentName:"p"},'"scripts"')," field in our ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"? It's time to add our first script. npm scripts let us use the ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run [NAME-OF-SCRIPT]")," command to run routine processes related to development. In many cases, we'll create a script that calls on a package that's been downloaded to our project."),(0,a.kt)("p",null,"Since we're using webpack to build our applications, we'll write a ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," script. What does it mean to build our code? Generally speaking, building a project's code means to compile it so that it is prepared to run. With webpack, it specifically means to take all the different files in our ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," directory, which are easy for humans to read and organize, and then bundle them into a single file that's much leaner and more efficient for browsers. "),(0,a.kt)("p",null,"Let's get rid of the ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," script for now (we'll add one back later when we start writing tests). The ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," section of our ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file should look like this:"),(0,a.kt)("div",{class:"filename"},"package.json"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'...\n\n"scripts": {\n    "build": "webpack"\n  },\n...\n')),(0,a.kt)("h2",{id:"bundling-javascript-with-webpack"},"Bundling JavaScript with webpack"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Now that we have a ",(0,a.kt)("inlineCode",{parentName:"p"},'"build"')," script defined, we can invoke it in our terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm run build\n")),(0,a.kt)("p",null,"What this npm script does is find webpack amongst our project's dependencies, and then run webpack so it bundles our code."),(0,a.kt)("p",null,"When we do this, we should get output similar to what follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm run build\n\n> shape-tracker@1.0.0 build\n> webpack\n\nHash: eefb8d2c5f73122ea6b3\nVersion: webpack 4.46.0\nTime: 338ms\nBuilt at: 06/01/2022 7:44:46 PM\n  Asset      Size  Chunks             Chunk Names\nmain.js  1.31 KiB       0  [emitted]  main\nEntrypoint main = main.js\n[0] ./src/index.js 677 bytes {0} [built]\n\nWARNING in configuration\nThe 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.\nYou can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/\n")),(0,a.kt)("p",null,"This output contains information about webpack's bundling process, including what files it has found to bundle (in this case just ",(0,a.kt)("inlineCode",{parentName:"p"},"./src/index.js"),"), and the name of the bundle it has created (",(0,a.kt)("inlineCode",{parentName:"p"},"main.js"),"). If we look in our project's file tree, we'll see a new folder called ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," with a file inside called ",(0,a.kt)("inlineCode",{parentName:"p"},"main.js"),". And if we look inside ",(0,a.kt)("inlineCode",{parentName:"p"},"main.js"),", we'll see minified JavaScript! This is the essence of what webpack does: bundle and optimize code."),(0,a.kt)("p",null,"Stop and take a look at the minified JavaScript in ",(0,a.kt)("inlineCode",{parentName:"p"},"main.js")," now \u2014 we'll be comparing it to other code in just a second."),(0,a.kt)("p",null,"You might be thinking, great, this is webpack at work \u2014 so what? Well, what's notable about this is that webpack will bundle our JavaScript without any configuration as long as we have one JS file called ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js"),". That's because without a configuration file, webpack assumes our project's entry point is called ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," and the bundled code should be output to ",(0,a.kt)("inlineCode",{parentName:"p"},"dist/main.js"),"."),(0,a.kt)("p",null,"However, webpack has just bundled one single file in our project \u2014 ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js"),", but not ",(0,a.kt)("inlineCode",{parentName:"p"},"triangle.js"),", and that's just not going to cut it for us. So, if we want webpack to include all of our JS files, and other dependencies, we're going to have to configure webpack and learn a new way of connecting files to each other."),(0,a.kt)("p",null,"As for the warning, let's resolve that next."),(0,a.kt)("h3",{id:"development-and-production-modes"},"Development and Production Modes"),(0,a.kt)("p",null,"The warning message is decently clear: we need to set whether we're building our code for development or production. We can set the mode by altering the npm script for ",(0,a.kt)("inlineCode",{parentName:"p"},'"build"')," in ",(0,a.kt)("inlineCode",{parentName:"p"},'"scripts"'),":\ns"),(0,a.kt)("div",{class:"filename"},"package.json"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'  "scripts": {\n    "build": "webpack --mode=development"\n  },\n')),(0,a.kt)("p",null,"As we can see, the ",(0,a.kt)("inlineCode",{parentName:"p"},"--mode")," flag lets us specify a development environment. We could instead set ",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=production")," to specify a production environment, but we're in development, so we don't want that right now."),(0,a.kt)("p",null,"However, setting webpack to bundle code in development mode changes how webpack bundles our code. Let's see how this works. Run ",(0,a.kt)("inlineCode",{parentName:"p"},"$ npm run build")," again in the command line. Now there's no warning and that's because we've set a value for mode. "),(0,a.kt)("p",null,"Next, look inside ",(0,a.kt)("inlineCode",{parentName:"p"},"dist/main.js")," \u2014 the bundled JavaScript now looks radically different! It has NOT been minified. Well, minification provides optimization benefits for production websites but it's not a priority for development, because we want to be able to look inside the bundle and debug it if necessary.  "),(0,a.kt)("p",null,"In the coming lessons, we'll revisit the topic of production versus development code."),(0,a.kt)("h2",{id:"configuring-webpack"},"Configuring webpack"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We configure webpack through a configuration file. This file should go in the top level (or 'root') of our project directory. In order for webpack to find this configuration file, it must be named ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),". Let's create it now."),(0,a.kt)("p",null,"First create a new file called ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," in the root of the Shape Tracker directory. With this addition, your Shape Tracker project structure should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"shape-tracker/\n\u251c\u2500\u2500 dist\n\u2502\xa0\xa0 \u2514\u2500\u2500 main.js\n\u251c\u2500\u2500 node_modules\n\u251c\u2500\u2500 index.html\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 triangle.js\n\u251c\u2500\u2500 css\n\u2502   \u2514\u2500\u2500 styles.css\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 webpack.config.js\n")),(0,a.kt)("p",null,"Then, add the following contents to ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),":"),(0,a.kt)("div",{class:"filename"},"webpack.config.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\n\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    filename: 'bundle.js',\n    path: path.resolve(__dirname, 'dist')\n  }\n};\n")),(0,a.kt)("p",null,"This is a very basic configuration, and we'll continue to add to it in coming lessons. The syntax may seem confusing at first, but we can break this down a bit. For instance, we can see that ",(0,a.kt)("inlineCode",{parentName:"p"},"module.exports")," is a property that holds an object with key-value pairs. When we come across code that looks different, don't forget that we can always apply our basic understanding of JavaScript to make it a bit less overwhelming."),(0,a.kt)("p",null,"When webpack creates the bundled code, it will use the instructions in ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," to do so. This is just like how npm uses the instructions in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," to install a project's dependencies. "),(0,a.kt)("p",null,"Let's go over the main points of this new code:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Anything webpack requires to run goes at the top of our configuration file. For now, we only have ",(0,a.kt)("inlineCode",{parentName:"p"},"require('path')"),", which we add to configure the path where our output files will be saved. We save this in a ",(0,a.kt)("inlineCode",{parentName:"p"},"const")," variable. We'll soon be adding more ",(0,a.kt)("inlineCode",{parentName:"p"},"require")," statements, which we will cover further in the next lesson.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"We specify an ",(0,a.kt)("strong",{parentName:"p"},"entry point"),". This is the JS file where webpack will enter our application and then use a dependency graph to load all other required JS files. That just means webpack is going to gather all the files that our entry point depends on, then gather all the files that those files depend on, and so on \u2014 until all the dependencies have been gathered. As we can see, webpack will enter through the file where we store our user interface logic: ",(0,a.kt)("inlineCode",{parentName:"p"},"'./src/index.js'"),". The file name ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," is a default entry point for webpack.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"We also specify an ",(0,a.kt)("strong",{parentName:"p"},"output"),". This is where all our code will go after it's been processed and bundled. Instead of relying on the default file name of ",(0,a.kt)("inlineCode",{parentName:"p"},"main.js"),", we'll use ",(0,a.kt)("inlineCode",{parentName:"p"},"bundle.js"),".  Every time we run ",(0,a.kt)("inlineCode",{parentName:"p"},"$ npm run build"),", webpack will follow the instructions in ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," and create a ",(0,a.kt)("inlineCode",{parentName:"p"},"dist/bundle.js")," file."))),(0,a.kt)("p",null,"Note that we only have access to ",(0,a.kt)("inlineCode",{parentName:"p"},"path.resolve()")," because we required it at the top of our configuration file. ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," is a part of webpack's internal tooling."),(0,a.kt)("p",null,"In short, the instructions above tell webpack to go into our entry point file ",(0,a.kt)("inlineCode",{parentName:"p"},"src/index.js"),', gather all its dependencies (and its dependencies\' dependencies...), "webpackify" them (concatenate them into one file), call the concatenated file ',(0,a.kt)("inlineCode",{parentName:"p"},"bundle.js")," and store them in the ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," directory."),(0,a.kt)("p",null,"Now that we have a very basic configuration file in place, we're almost ready to process and concatenate some JavaScript code. Next, we need to learn about ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"export")," statements in order to connect our files together."))}u.isMDXComponent=!0}}]);