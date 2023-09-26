"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[18588],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r=a.createContext({}),p=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(r.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),h=i,u=d["".concat(r,".").concat(h)]||d[h]||m[h]||l;return t?a.createElement(u,o(o({ref:n},c),{},{components:t})):a.createElement(u,o({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=h;var s={};for(var r in n)hasOwnProperty.call(n,r)&&(s[r]=n[r]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},68087:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const l={title:"Installing Dependencies with npm: webpack and webpack-cli",id:"installing-dependencies-with-npm-webpack-and-webpack-cli",slug:"installing-dependencies-with-npm-webpack-and-webpack-cli",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0h_installing_dependencies_with_npm.md"},o=void 0,s={unversionedId:"intermediate-javascript-classic/test-driven-development-and-environments-with-javascript/installing-dependencies-with-npm-webpack-and-webpack-cli",id:"intermediate-javascript-classic/test-driven-development-and-environments-with-javascript/installing-dependencies-with-npm-webpack-and-webpack-cli",title:"Installing Dependencies with npm: webpack and webpack-cli",description:"We're now ready to start installing the packages we'll work with. We can install any npm package with the $ npm install [PACKAGE-NAME] command where [PACKAGE-NAME] is the package we want to install.",source:"@site/docs/intermediate-javascript-classic/4_test-driven-development-and-environments-with-javascript/0h-installing-dependencies-with-npm.md",sourceDirName:"intermediate-javascript-classic/4_test-driven-development-and-environments-with-javascript",slug:"/intermediate-javascript-classic/test-driven-development-and-environments-with-javascript/installing-dependencies-with-npm-webpack-and-webpack-cli",permalink:"/intermediate-javascript-classic/test-driven-development-and-environments-with-javascript/installing-dependencies-with-npm-webpack-and-webpack-cli",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Installing Dependencies with npm: webpack and webpack-cli",id:"installing-dependencies-with-npm-webpack-and-webpack-cli",slug:"installing-dependencies-with-npm-webpack-and-webpack-cli",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0h_installing_dependencies_with_npm.md"},sidebar:"intermediate-javascript-classic",previous:{title:"Semantic Versioning",permalink:"/intermediate-javascript-classic/test-driven-development-and-environments-with-javascript/semantic-versioning"},next:{title:"Introduction to webpack",permalink:"/intermediate-javascript-classic/test-driven-development-and-environments-with-javascript/introduction-to-webpack"}},r={},p=[{value:"Version Pinning",id:"version-pinning",level:2},{value:"Installing npm Packages",id:"installing-npm-packages",level:2},{value:"Additional <code>npm install</code> Commands",id:"additional-npm-install-commands",level:3},{value:"How npm Installs the Package to our Project",id:"how-npm-installs-the-package-to-our-project",level:3},{value:"Install Flags <code>--save-exact</code> and <code>--save-dev</code>",id:"install-flags---save-exact-and---save-dev",level:3},{value:"Installing <code>webpack-cli</code> and Version Ranges",id:"installing-webpack-cli-and-version-ranges",level:3},{value:"Removing Dependencies",id:"removing-dependencies",level:3}],c={toc:p},d="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We're now ready to start installing the packages we'll work with. We can install any npm package with the ",(0,i.kt)("inlineCode",{parentName:"p"},"$ npm install [PACKAGE-NAME]")," command where ",(0,i.kt)("inlineCode",{parentName:"p"},"[PACKAGE-NAME]")," is the package we want to install. "),(0,i.kt)("p",null,"As we learn how to use npm to install packages, we'll also learn about:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Version pinning and version ranges."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"package-lock.json"),"."),(0,i.kt)("li",{parentName:"ul"},"Uninstalling packages."),(0,i.kt)("li",{parentName:"ul"},"The difference between ",(0,i.kt)("inlineCode",{parentName:"li"},"dependencies")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"devDependencies"),"."),(0,i.kt)("li",{parentName:"ul"},"Using the ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install")," to direct npm to install packages listed in a ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," file.")),(0,i.kt)("p",null,"As you work through this lesson, make sure you actually install the two packages to your Shape Tracker project: webpack and webpack-cli."),(0,i.kt)("h2",{id:"version-pinning"},"Version Pinning"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Most of the packages we'll install specify a version of the package. This is called ",(0,i.kt)("strong",{parentName:"p"},"version pinning"),". When a package is updated, it won't necessarily play nicely with all the other packages in our environment. This is exactly what we were talking about in the last lesson! For that reason, it's more important to create a stable environment where all packages work together instead of a potentially chaotic environment where we are always installing the latest version of a package without fully testing whether it works with other packages we're using. The latter is a recipe for breaking our code \u2014 and a very frustrating debugging situation."),(0,i.kt)("p",null,"Version pinning is commonly used throughout the industry. As stated in the last lesson, companies generally do not automatically upgrade to latest releases, especially if the version they are already using is reliable and they don't need any new features that more recent versions offer."),(0,i.kt)("p",null,"While you are welcome to explore JavaScript packages further on your own, you are expected to use the pinned versions for independent projects. After all, if you were working at a tech company, you'd be expected to use the company's environment (which would likely be consistent across teams) instead of the other way around!"),(0,i.kt)("h2",{id:"installing-npm-packages"},"Installing npm Packages"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Now we're ready to install our first package: webpack. We'll cover webpack itself further in the next lesson. For now, we are just learning how to install packages with npm. In the root of the Shape Tracker project, go ahead and run this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install webpack@5.87.0 --save-dev --save-exact\n")),(0,i.kt)("p",null,"We specify a version with ",(0,i.kt)("inlineCode",{parentName:"p"},"@"),". The version itself is ",(0,i.kt)("inlineCode",{parentName:"p"},"5.87.0"),". That's major version 5, minor version 87, and patch 0. We also have two flags ",(0,i.kt)("inlineCode",{parentName:"p"},"--save-dev")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--save-exact")," \u2014 which we will explain in more detail below."),(0,i.kt)("h3",{id:"additional-npm-install-commands"},"Additional ",(0,i.kt)("inlineCode",{parentName:"h3"},"npm install")," Commands"),(0,i.kt)("p",null,"We could also install webpack without a specified version number with the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install webpack --save-dev --save-exact\n")),(0,i.kt)("p",null,"However, we want to pin the version of webpack that we're using so we don't run into versioning issues between our dependencies, where one dependency can't work with another dependency."),(0,i.kt)("p",null,"Finally, we can also run the following command, where we don't specify any package:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install\n")),(0,i.kt)("p",null,"What npm will do is look inside of ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," and install any dependencies listed. We'll use ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install")," anytime we clone down our project and need to install all of our project's dependencies. For the next few lessons, we'll focus on installing specific packages. "),(0,i.kt)("h3",{id:"how-npm-installs-the-package-to-our-project"},"How npm Installs the Package to our Project"),(0,i.kt)("p",null,"When we run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install")," (with or without a package), three things will happen for us automatically:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"npm will add the package to a directory named ",(0,i.kt)("inlineCode",{parentName:"strong"},"node_modules"),".")," If the directory doesn't exist yet, npm will create it for us. Note that you should never create the ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," directory yourself, and we recommend against editing it. Editing ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," directly is a less common practice that some experienced developers occasionally do. "),(0,i.kt)("p",null,"After running the command to install webpack, go ahead look inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," directory. You'll see a lot of packages have been installed, not just webpack! These are all the packages that webpack itself depends on \u2014 and they've been added for us automatically by npm."),(0,i.kt)("p",null,"Remember that we add ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," to our ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," directory can get very big and it would really bloat our repository to include this code. And because ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," is automatically created there's just no reason to add it to our remote repo. All that we need to install these packages locally in our project is listed in our ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"npm will add the name and version number of the package to our ",(0,i.kt)("inlineCode",{parentName:"strong"},"package.json")," file.")," As we mentioned previously, if there is no package specified when we run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install"),", npm will install all of the packages listed in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". "),(0,i.kt)("p",null,"After we install webpack, if we take a look at ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", we'll see the following has been added automatically for us:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'"devDependencies": {\n    "webpack": "5.87.0"\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Finally, npm will add our new dependencies to a file called ",(0,i.kt)("inlineCode",{parentName:"strong"},"package-lock.json"),".")," This file should never be edited either \u2014 that's why part of the file name is ",(0,i.kt)("inlineCode",{parentName:"p"},"lock"),". If we open it up, we will see that it already has thousands of lines in it. This is the tree of our project's current dependencies all at their exact versions. Again, it's not just webpack, but also all the dependencies that webpack depends on. "),(0,i.kt)("p",null,"The purpose of ",(0,i.kt)("inlineCode",{parentName:"p"},"package-lock.json")," is to list the exact versions of all dependencies in our project. While we'll manage the packages we need in our projects via ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", just like we did with webpack, npm handles listing all of webpack's dependencies at their exact versions in ",(0,i.kt)("inlineCode",{parentName:"p"},"package-lock.json"),". "),(0,i.kt)("p",null,"So, every time we add a new package with npm, the ",(0,i.kt)("inlineCode",{parentName:"p"},"package-lock.json")," will get updated with that package's dependencies and the exact versions they were installed with. "),(0,i.kt)("p",null,"One big thing to note is that ",(0,i.kt)("strong",{parentName:"p"},"we do not add ",(0,i.kt)("inlineCode",{parentName:"strong"},"package-lock.json")," to the ",(0,i.kt)("inlineCode",{parentName:"strong"},".gitignore")),", even though it is an auto-generated file. This is because the results of installing packages can vary over time. This means that even though we're installing webpack at version ",(0,i.kt)("inlineCode",{parentName:"p"},"5.87.0"),", some of webpack's dependencies may not be installed at specific version numbers, which of course can lead to bugs. ",(0,i.kt)("inlineCode",{parentName:"p"},"package-lock.json")," solves this issue by listing exact (and working) versions of all dependencies, and npm knows to use this file to install dependencies when it is present in a repo. That's why we always save ",(0,i.kt)("inlineCode",{parentName:"p"},"package-lock.json")," in our remote repos. "),(0,i.kt)("h3",{id:"install-flags---save-exact-and---save-dev"},"Install Flags ",(0,i.kt)("inlineCode",{parentName:"h3"},"--save-exact")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"--save-dev")),(0,i.kt)("p",null,"Now let's take a look at the flags we added to our ",(0,i.kt)("inlineCode",{parentName:"p"},"$ npm install")," command."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--save-exact"),": This flag ensures that we save the ",(0,i.kt)("em",{parentName:"p"},"exact")," version of webpack to our list of dependencies in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". This is very important and we'll discuss this further in a moment.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--save-dev"),": This flag specifies that we want the package to be a development dependency. It will be added to ",(0,i.kt)("inlineCode",{parentName:"p"},'"devDependencies"')," in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". If we don't add this flag, it will automatically be added as a dependency that's available for production and development. While everything will still work correctly if we add webpack as a production dependency, we don't need webpack in production \u2014 and having unnecessary dependencies would just bloat our production code."))),(0,i.kt)("h3",{id:"installing-webpack-cli-and-version-ranges"},"Installing ",(0,i.kt)("inlineCode",{parentName:"h3"},"webpack-cli")," and Version Ranges"),(0,i.kt)("p",null,"We also need to install a package to have access to the ",(0,i.kt)("strong",{parentName:"p"},"CLI (command line interface)")," for webpack. This package will allow us to use webpack from the command line. In the root of the Shape Tracker project, go ahead and enter this command now:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install webpack-cli@5.1.4 --save-dev\n")),(0,i.kt)("p",null,"This time, we have not included the ",(0,i.kt)("inlineCode",{parentName:"p"},"--save-exact")," flag, which we'll discuss below. "),(0,i.kt)("p",null,"Let's take a look at ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," again to see how these commands have changed the contents of the file:"),(0,i.kt)("div",{class:"filename"},"package.json"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "shape-tracker",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC",\n  "devDependencies": {\n    "webpack": "5.87.0",\n    "webpack-cli": "^5.1.4",\n  }\n}\n')),(0,i.kt)("p",null,"Note the difference in the package numbers between webpack and webpack-cli. The latter has a caret symbol ",(0,i.kt)("inlineCode",{parentName:"p"},"^")," before the version number. Well, this symbol and the tilde symbol ",(0,i.kt)("inlineCode",{parentName:"p"},"~")," can really mess us up, because they specify an acceptable ",(0,i.kt)("strong",{parentName:"p"},"version range")," within the version we specify in the installation command. Here's how this works."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The caret ",(0,i.kt)("inlineCode",{parentName:"li"},"^")," symbol tells npm to install the package at the version we specify, or a later minor version. This means that npm could install webpack-cli at version 5.1.4 or 5.2.4."),(0,i.kt)("li",{parentName:"ul"},"The tilde ",(0,i.kt)("inlineCode",{parentName:"li"},"~")," symbol tells npm to install the package at the version we specify, or a later patch version. This means that npm could install webpack-cli at version 5.1.4 or 5.1.5.")),(0,i.kt)("p",null,"For the webpack-cli package, if npm installs the latest minor version of a package and it isn't compatible with one of our other packages, it will cause errors. We see it happen all the time to students."),(0,i.kt)("p",null,"When we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--save-exact")," flag, the ",(0,i.kt)("inlineCode",{parentName:"p"},"^")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"~")," symbols will not precede the version number \u2014 so we won't have this issue. This begs the question \u2014 why would we not always use ",(0,i.kt)("inlineCode",{parentName:"p"},"--save-exact")," to pin dependencies to their exact version? Well, when we specify a version range for a package, we can get updates for it, which can include fixes to security vulnerabilities, ones that we may not learn about for a while. So, always pinning exact version numbers is not always the best approach. "),(0,i.kt)("p",null,"If you do find yourself having version incompatibilities in your project, this is the first thing you should check \u2014 are there any ",(0,i.kt)("inlineCode",{parentName:"p"},"^")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"~")," that result in slightly different packages being installed? (You may have forgotten to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"save-exact")," flag originally \u2014 or you may be working off a ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file that didn't use them.) This is the most common issue students run into when packages that should be playing nicely together are not working correctly. "),(0,i.kt)("p",null,"If this happens, remove the caret ",(0,i.kt)("inlineCode",{parentName:"p"},"^")," and tilde ",(0,i.kt)("inlineCode",{parentName:"p"},"~")," from version numbers and then follow the steps in the next section of this lesson."),(0,i.kt)("h3",{id:"removing-dependencies"},"Removing Dependencies"),(0,i.kt)("p",null,"Sometimes, you may want to remove a dependency from your project \u2014 or you may want to install a different version of the dependency. We'll cover a couple ways to do this now, but don't actually uninstall any dependencies."),(0,i.kt)("p",null,"To remove a dependency, we can use npm's ",(0,i.kt)("inlineCode",{parentName:"p"},"npm uninstall")," command. To use it, we can specify the name of the package we want to remove, like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm uninstall webpack-cli\n")),(0,i.kt)("p",null,"We can also adjust and remove packages manually. "),(0,i.kt)("p",null,"If you want to completely remove a dependency manually, first remove the reference to the dependency you want to remove from ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". For instance, if we wanted to remove webpack, we'd actually delete the line from the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file."),(0,i.kt)("p",null,"If you just want to just change the version number, or remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"^")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"~"),", you can also do so manually by editing ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". "),(0,i.kt)("p",null,"Anytime you change a dependency in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", you need to make sure that npm applies the changes with the command ",(0,i.kt)("inlineCode",{parentName:"p"},"$ npm prune"),". This command ensures only dependencies listed in the manifest are actually installed and at the correct versions (while others are removed)."),(0,i.kt)("p",null,"However, we've found that ",(0,i.kt)("inlineCode",{parentName:"p"},"$ npm prune")," doesn't always get the job done. Fortunately, there's a more foolproof way to reinstall dependencies: trash the ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," folder altogether. Then run ",(0,i.kt)("inlineCode",{parentName:"p"},"$ npm install")," again. npm will automatically repopulate the folder and all its dependencies."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Whenever you are having a problem with your development environment and you are trying to reinstall dependencies, make sure you follow these troubleshooting steps!")))}m.isMDXComponent=!0}}]);