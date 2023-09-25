"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[81447],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,g=u["".concat(l,".").concat(d)]||u[d]||h[d]||i;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={title:"Hosting a Webpack Project with GH-Pages",id:"hosting_a_webpack_project_with_gh_pages",slug:"hosting_a_webpack_project_with_gh_pages",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/6_team-week/webpack-hosting.md"},r=void 0,s={unversionedId:"intermediate_javascript_classic/team-week/hosting_a_webpack_project_with_gh_pages",id:"intermediate_javascript_classic/team-week/hosting_a_webpack_project_with_gh_pages",title:"Hosting a Webpack Project with GH-Pages",description:"In this lesson we'll learn how to host our webpack project on GitHub Pages, also referred to as gh-pages. GitHub Pages is free, and lets us host our HTML, CSS, and Javascript right from the repository. It's a great way to quickly host a web app, and since it's integrated into GitHub, it's a nice option for developers. You may have hosted some projects this way by creating a gh-pages branch in your project, and while we'll end up with the same result here, the process for setting it up is slightly different. We'll make some edits to our package.json, and run some new commands from our terminal. In this lesson we'll also cover how to deploy a React app built with webpack for students in the React course.",source:"@site/docs/intermediate_javascript_classic/6_team-week/webpack-hosting.md",sourceDirName:"intermediate_javascript_classic/6_team-week",slug:"/intermediate_javascript_classic/team-week/hosting_a_webpack_project_with_gh_pages",permalink:"/lhtp/intermediate_javascript_classic/team-week/hosting_a_webpack_project_with_gh_pages",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Hosting a Webpack Project with GH-Pages",id:"hosting_a_webpack_project_with_gh_pages",slug:"hosting_a_webpack_project_with_gh_pages",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/6_team-week/webpack-hosting.md"},sidebar:"intermediate_javascript_classic",previous:{title:"Practicing the Git Workflow",permalink:"/lhtp/intermediate_javascript_classic/team-week/practicing_the_git_workflow"},next:{title:"Backend Course Preparation: Software Installation",permalink:"/lhtp/intermediate_javascript_classic/team-week/backend_course_preparation_software_installation"}},l={},p=[{value:"Update the <code>package.json</code>",id:"update-the-packagejson",level:2},{value:"Install gh-pages Package",id:"install-gh-pages-package",level:2},{value:"Deploy the site",id:"deploy-the-site",level:2},{value:"For React Projects",id:"for-react-projects",level:2},{value:"Further Exploration",id:"further-exploration",level:2},{value:"Configure a Publishing Source",id:"configure-a-publishing-source",level:3},{value:"Enforce HTTPS",id:"enforce-https",level:3},{value:"Un-Publish the Website",id:"un-publish-the-website",level:3}],c={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson we'll learn how to host our webpack project on ",(0,o.kt)("strong",{parentName:"p"},"GitHub Pages"),", also referred to as ",(0,o.kt)("strong",{parentName:"p"},"gh-pages"),". GitHub Pages is free, and lets us host our HTML, CSS, and Javascript right from the repository. It's a great way to quickly host a web app, and since it's integrated into GitHub, it's a nice option for developers. You may have hosted some projects this way by creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch in your project, and while we'll end up with the same result here, the process for setting it up is slightly different. We'll make some edits to our ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", and run some new commands from our terminal. In this lesson we'll also cover how to deploy a React app built with webpack for students in the React course. "),(0,o.kt)("p",null,"Before we start, one important note about GitHub Pages is that it is ",(0,o.kt)("strong",{parentName:"p"},"not meant")," to host sensitive information, like API keys. The GitHub docs explain more:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"GitHub Pages is not intended for or allowed to be used as a free web-hosting service to run your online business, e-commerce site, or any other website that is primarily directed at either facilitating commercial transactions or providing commercial software as a service (SaaS). GitHub Pages sites shouldn't be used for sensitive transactions like sending passwords or credit card numbers.")),(0,o.kt)("p",null,"In other words, any information we put in our code will be available to someone visiting our site. If we want to host a site with sensitive information we would need some kind of backend, or server-side code, to store our sensitive information. For now, that is beyond the scope of what we'll do. "),(0,o.kt)("p",null,"To read more about prohibited uses for gh-pages, visit the following documentation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("span",{class:"glyphicon glyphicon-link"})," ",(0,o.kt)("a",{parentName:"strong",href:"https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#prohibited-uses"},"Link to GitHub Pages Docs")))),(0,o.kt)("h2",{id:"update-the-packagejson"},"Update the ",(0,o.kt)("inlineCode",{parentName:"h2"},"package.json")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"First, we'll add a ",(0,o.kt)("inlineCode",{parentName:"p"},"repository")," key to our ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),". We're adding it under the ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," key but the order doesn't matter as long as it is in the top-most level of our package object, the same level as ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"version"),". After we add that, let's set it equal to an object with a ",(0,o.kt)("inlineCode",{parentName:"p"},"url")," key. Use the following code snippet as an example, replacing {REPONAME} with your repo and {USERNAME} with your GitHub username respectively."),(0,o.kt)("div",{class:"filename"},"./package.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n "name": "project name",\n "version": "1.0.0",\n "repository": {\n   "url": "git+https://github.com/{USERNAME}/{REPONAME}.git"\n },\n...\n}\n')),(0,o.kt)("p",null,"Next we'll add two new commands to our ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts")," object: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"predeploy")," builds our site and bundles it in the ",(0,o.kt)("inlineCode",{parentName:"li"},"dist")," folder. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deploy")," pushes the contents of that folder to a new commit on the ",(0,o.kt)("inlineCode",{parentName:"li"},"gh-pages")," branch, creating that branch if it doesn't already exist.")),(0,o.kt)("div",{class:"filename"},"./package.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n...\n "scripts": {\n   "build": "webpack --mode=development",\n   ...\n   "predeploy": "npm run build",\n   "deploy": "gh-pages -d dist"\n },\n...\n}\n')),(0,o.kt)("h2",{id:"install-gh-pages-package"},"Install gh-pages Package"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Install the ",(0,o.kt)("inlineCode",{parentName:"p"},"gh-pages")," package via the terminal by running the following command in the root of your project's folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ npm install --save-dev gh-pages\n")),(0,o.kt)("p",null,"You should see ",(0,o.kt)("inlineCode",{parentName:"p"},"gh-pages")," listed in your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," under ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,o.kt)("h2",{id:"deploy-the-site"},"Deploy the site"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"At this point we can run the following command to deploy our site. Make sure to run this command in the root of your project's folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ npm run deploy\n")),(0,o.kt)("p",null,"This will build our project and then publish it to GitHub Pages. You may be curious where the ",(0,o.kt)("inlineCode",{parentName:"p"},"predeploy")," script gets used if we aren't using it ourselves. Well, gh-pages runs the ",(0,o.kt)("inlineCode",{parentName:"p"},"predeploy")," script automatically before deploying the site to ensure there's an up-to-date build of our project. We can look in our terminal to see exactly which scripts are executed and in what order. Our terminal should show us that the ",(0,o.kt)("inlineCode",{parentName:"p"},"predeploy")," script is run, which itself calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," script, all  before the ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," script executes. Check out the code snippet below that shows an example of the terminal output for deploying. Note that \u2018PROJECTNAME' will be the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," of your project as listed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ npm run deploy\n \n>PROJECTNAME@1.0.0 predeploy\n> npm run build\n \n> PROJECTNAME@1.0.0 build\n> webpack --mode=development\n \nHash: e6e0a675ea138d2edcd8\nVersion: webpack 4.46.0\nTime: 2553ms\n...\n \n> PROJECTNAME@1.0.0 deploy\n> gh-pages -d dist\n")),(0,o.kt)("p",null,"After we've successfully deployed our site, it will be hosted at a URL like this, where ",(0,o.kt)("inlineCode",{parentName:"p"},"{USERNAME}")," is your github username and ",(0,o.kt)("inlineCode",{parentName:"p"},"{REPONAME}")," is the name of your repository : "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://{USERNAME}.github.io/{REPONAME}\n")),(0,o.kt)("p",null,"If we want to update our live site with some changes, we'll need to ",(0,o.kt)("inlineCode",{parentName:"p"},"git checkout")," to the branch that has the most up to date code, then run our deploy script. Typically we deploy from the ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),' branch but it\'s possible to deploy from any branch. Each time we deploy, another commit gets made on our gh-pages branch. The commit message will be "Updates" by default, if you want a custom commit message you can specify it by using the ',(0,o.kt)("inlineCode",{parentName:"p"},"-m")," option."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ npm run deploy -- -m "Deploy site with new colors"\n')),(0,o.kt)("p",null,"Finally, note that ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," can take a minute or two to update, so be mindful of that when checking the live site."),(0,o.kt)("h2",{id:"for-react-projects"},"For React Projects"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The process is almost identical for deploying a React site to GitHub Pages. We'll still update our ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", install gh-pages, and add our new scripts. The difference between this and basic webpack hosting is in the ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," script. We need to configure GitHub Pages to deploy the contents of the folder that contains our bundled code, and in a React project that folder is called ",(0,o.kt)("inlineCode",{parentName:"p"},"build"),", as opposed to ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," in our basic webpack projects. Check out the code snippet below that shows how we've updated the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," script to point to the ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," folder. "),(0,o.kt)("div",{class:"filename"},"./package.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n "scripts": {\n   ...\n   "predeploy": "npm run build",\n   "deploy": "gh-pages -d build"\n },\n...\n}\n')),(0,o.kt)("p",null,"Outside of that the steps are exactly the same. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gitname/react-gh-pages"},"Optionally, see this repo for a walkthrough of deploying a React project.")," "),(0,o.kt)("h2",{id:"further-exploration"},"Further Exploration"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"configure-a-publishing-source"},"Configure a Publishing Source"),(0,o.kt)("p",null,"It's possible to configure our GitHub Pages site to publish when changes are pushed to a specific branch, or we can write a GitHub Actions workflow to publish our site. So for instance we could set our ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch as the publishing source and have GitHub automatically deploy any time changes are pushed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site"},"See this page in the GitHub docs for how to set a custom publishing source.")),(0,o.kt)("h3",{id:"enforce-https"},"Enforce HTTPS"),(0,o.kt)("p",null,"By default GitHub enforces HTTPS protocol (not HTTP), so you may get errors if your links use HTTP. For the deployed site you'll need to remove any HTTP content. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https#resolving-problems-with-mixed-content"},"See this page on enforcing HTTPS in GitHub")," for more information."),(0,o.kt)("h3",{id:"un-publish-the-website"},"Un-Publish the Website"),(0,o.kt)("p",null,"If you want to remove a site from GitHub Pages so it is no longer hosted, ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pages/getting-started-with-github-pages/unpublishing-a-github-pages-site"},"you can find instructions for un-publishing here.")),(0,o.kt)("p",null,"And that's it! Our site should be live on GitHub Pages for the whole world to visit."))}h.isMDXComponent=!0}}]);