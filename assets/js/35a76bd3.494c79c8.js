"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[91684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const s={title:"Setting Up Jest",id:"setting-up-jest",slug:"setting-up-jest",hide_table_of_contents:!0,sidebar_position:27,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1d_setting_up_jest.md"},o=void 0,i={unversionedId:"intermediate-javascript-part-time-evening/test-driven-development/setting-up-jest",id:"intermediate-javascript-part-time-evening/test-driven-development/setting-up-jest",title:"Setting Up Jest",description:"There are many JavaScript testing frameworks. Some of the most popular include Jest, Jasmine, and Mocha. These libraries have many similarities, and after learning one, you can quickly learn others. We use Jest because it is the testing framework of choice for React. It's also a popular testing framework for JavaScript in general.",source:"@site/docs/intermediate-javascript-part-time-evening/5_test-driven-development/1d-setting-up-jest.md",sourceDirName:"intermediate-javascript-part-time-evening/5_test-driven-development",slug:"/intermediate-javascript-part-time-evening/test-driven-development/setting-up-jest",permalink:"/intermediate-javascript-part-time-evening/test-driven-development/setting-up-jest",draft:!1,tags:[],version:"current",sidebarPosition:27,frontMatter:{title:"Setting Up Jest",id:"setting-up-jest",slug:"setting-up-jest",hide_table_of_contents:!0,sidebar_position:27,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1d_setting_up_jest.md"},sidebar:"intermediate-javascript-part-time-evening",previous:{title:"Red Green Refactor Workflow",permalink:"/intermediate-javascript-part-time-evening/test-driven-development/red-green-refactor-workflow"},next:{title:"Setting Up Babel",permalink:"/intermediate-javascript-part-time-evening/test-driven-development/setting-up-babel"}},l={},p=[{value:"Jest Installation and Setup",id:"jest-installation-and-setup",level:2},{value:"Adding A New Test Directory",id:"adding-a-new-test-directory",level:2},{value:"Another Way to Run Jest",id:"another-way-to-run-jest",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are many JavaScript testing frameworks. Some of the most popular include ",(0,r.kt)("strong",{parentName:"p"},"Jest"),", ",(0,r.kt)("strong",{parentName:"p"},"Jasmine"),", and ",(0,r.kt)("strong",{parentName:"p"},"Mocha"),". These libraries have many similarities, and after learning one, you can quickly learn others. We use Jest because it is the testing framework of choice for React. It's also a popular testing framework for JavaScript in general."),(0,r.kt)("p",null,"We'll continue building out our shape tracker application. Here's the project so far:"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-5-shape-tracker"},(0,r.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for Shape Tracker"))),(0,r.kt)("p",null,"Make sure that you are referencing the code from the branch called ",(0,r.kt)("inlineCode",{parentName:"p"},"1_functioning_environment"),". This is the default branch, so running ",(0,r.kt)("inlineCode",{parentName:"p"},"git clone...")," with the URL of the repo homepage will automatically clone down the branch called ",(0,r.kt)("inlineCode",{parentName:"p"},"1_functioning_environment"),". If you need a review on how to navigate between branches, review the lesson on ",(0,r.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/lessons/accessing-code-from-different-branches"},"accessing code from different branches"),". "),(0,r.kt)("p",null,"At this point, our application has a fully functioning environment along with user interface logic. However, there's hardly any business logic other than a ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," constructor function and a ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle.prototype.checkType*()")," method that returns ",(0,r.kt)("inlineCode",{parentName:"p"},'"I can\'t answer that yet!"'),". Now we're ready to use Jest and TDD to build out our business logic."),(0,r.kt)("h2",{id:"jest-installation-and-setup"},"Jest Installation and Setup"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"First, we'll need to add Jest to our project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install jest@29.5.0 --save-dev\n")),(0,r.kt)("p",null,"Once again, we are pinning the version so it will play nicely with our configuration. This is a development dependency because testing is part of the development process."),(0,r.kt)("p",null,"Next, we need to add a new npm script called ",(0,r.kt)("inlineCode",{parentName:"p"},'"test"')," to run Jest in our ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "build": "webpack --mode=development",\n  "start": "npm run build && webpack-dev-server --open --mode=development",\n  "lint": "eslint src --ext .js",\n  "test": "jest" \n}\n')),(0,r.kt)("p",null,"Note that we could call our script something other than ",(0,r.kt)("inlineCode",{parentName:"p"},'"test"'),", but ",(0,r.kt)("inlineCode",{parentName:"p"},'"test"')," makes sense here, because we're invoking our test runner, Jest."),(0,r.kt)("p",null,"At this point, we'll get an error if we run ",(0,r.kt)("inlineCode",{parentName:"p"},"$ npm run test"),". That's because we haven't added any tests yet. Before we can add tests, we need to set up a folder and file for tests that Jest can recognize."),(0,r.kt)("h2",{id:"adding-a-new-test-directory"},"Adding A New Test Directory"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"All Jest tests must live inside of a directory called ",(0,r.kt)("inlineCode",{parentName:"p"},"__tests__")," in the root directory of our project. Go ahead and create that directory now in the Shape Tracker project. The files and folders in the root should now look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"shape-tracker/\n\u251c\u2500\u2500 __tests__/\n\u251c\u2500\u2500 dist/\n\u251c\u2500\u2500 node_modules/\n\u251c\u2500\u2500 src/\n\u251c\u2500\u2500 .eslintrc\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 webpack.config.js\n")),(0,r.kt)("p",null,"It is common convention to add a double underscore ",(0,r.kt)("inlineCode",{parentName:"p"},"__")," at the beginning and end of ",(0,r.kt)("inlineCode",{parentName:"p"},"__tests__")," with Jest. We will store all our test files in this directory. For now, we just need one: ",(0,r.kt)("inlineCode",{parentName:"p"},"triangle.test.js"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"shape-tracker/\n\u251c\u2500\u2500 __tests__/\n\u2502   \u2514\u2500\u2500 triangle.test.js\n")),(0,r.kt)("p",null,"With the name of the test file, we follow another common naming convention, which looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// This is pseudocode.\nnameOfFileToBeTested.test.js\n")),(0,r.kt)("p",null,"In other words, the test file name should match the name of the file that has the code we are testing \u2014 the difference in the file naming structure is that we add ",(0,r.kt)("inlineCode",{parentName:"p"},".test")," to the name as well."),(0,r.kt)("p",null,"Now if we run our tests with ",(0,r.kt)("inlineCode",{parentName:"p"},"$ npm run test"),", Jest will automatically look in the ",(0,r.kt)("inlineCode",{parentName:"p"},"triangle.test.js")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm run test\n\n> shape-tracker@1.0.0 test\n> jest\n\n FAIL  __tests__/triangle.test.js\n  \u25cf Test suite failed to run\n\n    Your test suite must contain at least one test.\n\n      at node_modules/@jest/core/build/TestScheduler.js:242:24   \n      at asyncGeneratorStep (node_modules/@jest/core/build/TestScheduler.js:131:24)\n      at _next (node_modules/@jest/core/build/TestScheduler.js:151:9)\n      at node_modules/@jest/core/build/TestScheduler.js:156:7    \n      at node_modules/@jest/core/build/TestScheduler.js:148:12   \n      at onResult (node_modules/@jest/core/build/TestScheduler.js:271:25)\n\nTest Suites: 1 failed, 1 total\nTests:       0 total\nSnapshots:   0 total\nTime:        2.909s\nRan all test suites.\n")),(0,r.kt)("p",null,"As you might guess, this is a bad fail because we aren't testing anything yet. Jest states the following: ",(0,r.kt)("inlineCode",{parentName:"p"},"Your test suite must contain at least one test.")),(0,r.kt)("h3",{id:"another-way-to-run-jest"},"Another Way to Run Jest"),(0,r.kt)("p",null,"Note that we can also run ",(0,r.kt)("inlineCode",{parentName:"p"},"jest")," directly in the terminal to run our tests. To do this, we'll use ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.dev/learn/the-npx-nodejs-package-runner"},"npx, which is node's package runner"),". In the root of any directory that has a ",(0,r.kt)("inlineCode",{parentName:"p"},"__tests__")," folder with a test file within, we can run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ npx jest@29.5.0\n")),(0,r.kt)("p",null,"When we enter this command, node package runner does three things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Accesses the internet to look in its registry of all node packages."),(0,r.kt)("li",{parentName:"ul"},"Locates the package called ",(0,r.kt)("inlineCode",{parentName:"li"},"jest")," at version 29.5.0. "),(0,r.kt)("li",{parentName:"ul"},"Then invokes Jest in our project, which leads to the same effect as calling ",(0,r.kt)("inlineCode",{parentName:"li"},"$ npm run test"))),(0,r.kt)("p",null,"We can also use npx to run other packages like webpack and ESLint, as long as our project has the correct configuration files in place. For example, instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"$ npm run test"),", we could run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ npx eslint src/*.js\n")),(0,r.kt)("p",null,"However, we can just as easily use npm scripts to invoke the packages installed locally to our project, and we don't even need the internet to use them (as long as the packages are already installed)! Because of this, it's not necessary to use npx."),(0,r.kt)("p",null,"We are almost ready to start writing our tests. However, before we do, we'll need to set up another tool called Babel. We'll do that in the next lesson."))}d.isMDXComponent=!0}}]);