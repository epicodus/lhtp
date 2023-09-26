"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[567],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={title:"Bundling JavaScript",id:"bundling-javascript",slug:"bundling-javascript",hide_table_of_contents:!0,sidebar_position:12,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0l_bundling_javascript.md"},o=void 0,l={unversionedId:"intermediate-javascript-part-time/test-driven-development/bundling-javascript",id:"intermediate-javascript-part-time/test-driven-development/bundling-javascript",title:"Bundling JavaScript",description:"Let's update our shape tracker application to use import and export statements. By the end of this lesson, we will be using webpack to bundle all of our JavaScript files for us.",source:"@site/docs/intermediate-javascript-part-time/5_test-driven-development/0l-bundling-javascript.md",sourceDirName:"intermediate-javascript-part-time/5_test-driven-development",slug:"/intermediate-javascript-part-time/test-driven-development/bundling-javascript",permalink:"/intermediate-javascript-part-time/test-driven-development/bundling-javascript",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Bundling JavaScript",id:"bundling-javascript",slug:"bundling-javascript",hide_table_of_contents:!0,sidebar_position:12,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0l_bundling_javascript.md"},sidebar:"intermediate-javascript-part-time",previous:{title:"ES6 Imports and Exports",permalink:"/intermediate-javascript-part-time/test-driven-development/es6-imports-and-exports"},next:{title:"Bundling CSS with webpack Loaders",permalink:"/intermediate-javascript-part-time/test-driven-development/bundling-css-with-webpack-loaders"}},s={},p=[{value:"Bundling JavaScript",id:"bundling-javascript",level:2},{value:"Adding <code>import</code> and <code>export</code> Statements",id:"adding-import-and-export-statements",level:3},{value:"Updating <code>index.html</code>",id:"updating-indexhtml",level:3},{value:"Running webpack",id:"running-webpack",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Let's update our shape tracker application to use ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"export")," statements. By the end of this lesson, we will be using webpack to bundle all of our JavaScript files for us."),(0,a.kt)("p",null,"Remember, bundling JavaScript is webpack's core functionality. Bundling other modules like CSS, images, and other assets is made possible through loaders, which we'll begin to incorporate in the next lesson!"),(0,a.kt)("h2",{id:"bundling-javascript"},"Bundling JavaScript"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"First, let's start by adding a ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," directory. Next, move ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," directory. If you already have a ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," directory in your project, simply move ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," inside of it."),(0,a.kt)("p",null,"Locating your HTML file within the ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," directory is ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/getting-started/#basic-setup"},"the basic setup for a project that uses webpack"),". However, for us this will be a temporary change. We will be moving ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," back to the ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," directory in a few lessons when we implement a plugin that directs webpack to create an output HTML file based on a template we provide."),(0,a.kt)("p",null,"By the way, don't forget that we've added ",(0,a.kt)("inlineCode",{parentName:"p"},"dist/")," to our ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," file. If we were to push our updated code, changes to ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," wouldn't get pushed. This is fine because this change is temporary \u2014 and there is no need to commit our code just yet. However, if you did want to explore using a basic webpack setup in the future, you'd want to update your ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," file to only ignore ",(0,a.kt)("inlineCode",{parentName:"p"},"dist/bundle.js")," and not the entire directory and HTML."),(0,a.kt)("p",null,"Here's our current project structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"shape-tracker/\n\u251c\u2500\u2500 dist\n\u2502   \u251c\u2500\u2500 index.html\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 triangle.js\n\u251c\u2500\u2500 css\n\u2502   \u2514\u2500\u2500 styles.css\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 .gitignore\n")),(0,a.kt)("p",null,"Note that we aren't including automatically generated files and directories like ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"package-lock.json")," in the structure above. We're only including the files and directories that we need to add manually."),(0,a.kt)("h3",{id:"adding-import-and-export-statements"},"Adding ",(0,a.kt)("inlineCode",{parentName:"h3"},"import")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"export")," Statements"),(0,a.kt)("p",null,"Next, let's update our JavaScript files to use ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"export")," statements. We'll use a default export for ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," because it's the only thing we'll export from the file."),(0,a.kt)("div",{class:"filename"},"src/triangle.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default function Triangle(side1, side2, side3) {\n  ...\n}\n\n...\n")),(0,a.kt)("p",null,"Now we need to make sure we import our ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," constructor at the top of ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js"),":"),(0,a.kt)("div",{class:"filename"},"src/index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import Triangle from './triangle.js';\n...\n")),(0,a.kt)("h3",{id:"updating-indexhtml"},"Updating ",(0,a.kt)("inlineCode",{parentName:"h3"},"index.html")),(0,a.kt)("p",null,"Finally, we'll make some small updates to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'...\n<head>\n  <script type="text/javascript" src="bundle.js"><\/script>\n  <link rel="stylesheet" href="./../css/styles.css">\n  <title>Shape Tracker</title>\n</head>\n...\n')),(0,a.kt)("p",null,"Now we only have one JavaScript tag \u2014 for ",(0,a.kt)("inlineCode",{parentName:"p"},"bundle.js"),". That file doesn't exist yet, and that's because webpack creates it for us."),(0,a.kt)("p",null,"We've also updated the ",(0,a.kt)("strong",{parentName:"p"},"relative path")," to our stylesheet to ",(0,a.kt)("inlineCode",{parentName:"p"},"./../css/styles.css"),". That's because we've moved ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," to our ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," folder, and we now have to go out of the ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," folder in order to get to the ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," directory to access ",(0,a.kt)("inlineCode",{parentName:"p"},"styles.css"),". Take note of a few things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Two dots ",(0,a.kt)("inlineCode",{parentName:"li"},"/../")," in a path indicates that we are moving up a level from the directory we are in, while one dot ",(0,a.kt)("inlineCode",{parentName:"li"},"./")," in path indicates our current working directory."),(0,a.kt)("li",{parentName:"ul"},"So the full path ",(0,a.kt)("inlineCode",{parentName:"li"},"./../css/styles.css")," says, to load the CSS in ",(0,a.kt)("inlineCode",{parentName:"li"},"styles.css"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Start in this directory ",(0,a.kt)("inlineCode",{parentName:"li"},"./")),(0,a.kt)("li",{parentName:"ul"},"Then move up a directory ",(0,a.kt)("inlineCode",{parentName:"li"},"/../")," \u2014 this is the project's root"),(0,a.kt)("li",{parentName:"ul"},"Then go into the ",(0,a.kt)("inlineCode",{parentName:"li"},"/css/")," directory"),(0,a.kt)("li",{parentName:"ul"},"Then locate ",(0,a.kt)("inlineCode",{parentName:"li"},"styles.css"))))),(0,a.kt)("p",null,"Note that this path will change again in the next lesson when we use webpack to bundle our CSS."),(0,a.kt)("h3",{id:"running-webpack"},"Running webpack"),(0,a.kt)("p",null,"Now run ",(0,a.kt)("inlineCode",{parentName:"p"},"$ npm run build")," in the root directory of the project to invoke webpack to do its job and bundle our JavaScript files. "),(0,a.kt)("p",null,"webpack will start by accessing the entry point at ",(0,a.kt)("inlineCode",{parentName:"p"},"src/index.js"),". Then, webpack will recursively add any dependencies (anything that needs to be imported from elsewhere). Since ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," only imports ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"triangle.js")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"triangle.js")," has no imports of its own, our project currently only has one dependency."),(0,a.kt)("p",null,"If all goes well, your output will look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> shape-tracker@1.0.0 build /Users/staff/Desktop/shape-tracker\n> webpack\n\nHash: 7d88ba320f665950d074\nVersion: webpack 4.46.0\nTime: 70ms\nBuilt at: 06/01/2022 9:33:20 AM\n    Asset      Size  Chunks             Chunk Names\nbundle.js  1.27 KiB       0  [emitted]  main\nEntrypoint main = bundle.js\n[0] ./src/index.js + 1 modules 650 bytes {0} [built]\n    | ./src/index.js 443 bytes [built]\n    | ./src/triangle.js 207 bytes [built]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," If you get errors, you probably missed a step from previous lessons. Make sure you've actually added a ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," file with a configuration and updated the scripts section of ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," to include ",(0,a.kt)("inlineCode",{parentName:"p"},'"build": "webpack --mode=development"'),"."),(0,a.kt)("p",null,"Just like with before, we we'll see that webpack creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"bundle.js")," file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," folder. If we look inside of it, we'll see the code from both ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"triangle.js"),". This means that webpack has done it's job to concatenate our files together. "),(0,a.kt)("p",null,"The code inside of ",(0,a.kt)("inlineCode",{parentName:"p"},"bundle.js")," is NOT minified. That's because we've configured webpack to build its bundle in development mode. Minifying code is not as important for development as being able to look through the bundle and debug any code within. We'll revisit the topic of debugging in an upcoming lesson."),(0,a.kt)("p",null,"Now we can open our ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," file in the browser and our code will work. Woo-hoo!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"One important detail to note")," is that if we go to the console and check the ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," object, we'll no longer see ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," just hanging out in the global scope. We can also verify this by typing in the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"> window.Triangle;\nundefined\n")),(0,a.kt)("p",null,"Our JavaScript code is now modularized and code is scoped where it is needed. This is particularly important as our projects get larger."),(0,a.kt)("p",null,"So far, we haven't reduced our code much \u2014 all we've done is remove a single script tag from our code. However, it's a big deal when a project has hundreds of dependencies. More importantly, our JavaScript logic is separated in different files \u2014 which is great for human organization \u2014 but then bundled into one file \u2014 which is great for speed and efficiency."),(0,a.kt)("p",null,"We've barely scratched the surface of what webpack can do. In the next several lessons, we'll bundle our CSS, customize webpack for linting, and set up a live development server."))}u.isMDXComponent=!0}}]);