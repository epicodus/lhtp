"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[8886],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),g=o,d=h["".concat(p,".").concat(g)]||h[g]||c[g]||r;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[h]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={title:"14. GitHub Pages",id:"github_pages",slug:"github_pages",hide_table_of_contents:!0,sidebar_position:33,day:"tuesday",type:"lesson"},i=void 0,s={unversionedId:"git_html_and_css/github_pages",id:"git_html_and_css/github_pages",title:"14. GitHub Pages",description:"It's more fun to make web pages when we can show them off to our friends. There are a lot of ways to put our pages online. One of the easiest is to utilize GitHub Pages to automatically deploy our projects online for free.",source:"@site/docs/1_git_html_and_css/2e_github_pages.md",sourceDirName:"1_git_html_and_css",slug:"/git_html_and_css/github_pages",permalink:"/lhtp/git_html_and_css/github_pages",draft:!1,tags:[],version:"current",sidebarPosition:33,frontMatter:{title:"14. GitHub Pages",id:"github_pages",slug:"github_pages",hide_table_of_contents:!0,sidebar_position:33,day:"tuesday",type:"lesson"},sidebar:"docs",previous:{title:"13. PRACTICE: Markdown by writing READMEs",permalink:"/lhtp/git_html_and_css/practice_markdown_by_writing_readmes"},next:{title:"15. PRACTICE: GitHub Pages",permalink:"/lhtp/git_html_and_css/practice_github_pages"}},p={},l=[{value:"Project Structure",id:"project-structure",level:2},{value:"Adding a Branch for <code>gh-pages</code>",id:"adding-a-branch-for-gh-pages",level:2},{value:"Pushing Branches to Github",id:"pushing-branches-to-github",level:2},{value:"Accessing our Web Page",id:"accessing-our-web-page",level:2},{value:"Updating GitHub Pages",id:"updating-github-pages",level:2}],u={toc:l},h="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It's more fun to make web pages when we can show them off to our friends. There are a lot of ways to put our pages online. One of the easiest is to utilize GitHub Pages to automatically deploy our projects online for free."),(0,o.kt)("p",null,"First, make sure to have a GitHub account set up. The awesome thing about GitHub pages is that you get one main site per account and as many project pages as you would like. That means that when you are ready to create a portfolio of all of your coding work, you can have a main page all about you and a page for each of your coding projects that you do here at Epicodus or at home!"),(0,o.kt)("h2",{id:"project-structure"},"Project Structure"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"A quick note about structuring projects before we begin. When we start a new project, it is a good idea to create a folder to hold the HTML file and the ",(0,o.kt)("inlineCode",{parentName:"p"},"css")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"img")," folders. So far, we have been using a descriptive name for our HTML file, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"favorite-things.html")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"my-first-webpage.html"),". Often, though, you'll want to give the descriptive name for your folder, and name the web page's main HTML file ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html"),". As we start to add pages to our web site, the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," file will serve as the home page of our site."),(0,o.kt)("p",null,"For this lesson, we will be putting our ",(0,o.kt)("inlineCode",{parentName:"p"},"favorite-things.html")," file on GitHub Pages. Let\u2019s go in the Terminal to our ",(0,o.kt)("inlineCode",{parentName:"p"},"my-first-webpage")," project folder. ",(0,o.kt)("span",{style:{color:"red"}},(0,o.kt)("strong",{parentName:"p"},"Since we want ",(0,o.kt)("inlineCode",{parentName:"strong"},"favorite-things.html")," to be the home page of our site, we need to rename it ",(0,o.kt)("inlineCode",{parentName:"strong"},"index.html"),". GitHub Pages won't recognize it as the main page if we don't."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ mv favorite-things.html index.html\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"mv")," command in the Terminal moves the content of the ",(0,o.kt)("inlineCode",{parentName:"p"},"favorite-things.html")," file into a new file called ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html"),"."),(0,o.kt)("p",null,"Now that we've made this change, let's commit this new change and push it to GitHub."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ git status\n$ git add .\n$ git commit -m "Change name of favorite-things.html file to index.html."\n$ git push origin main\n')),(0,o.kt)("h2",{id:"adding-a-branch-for-gh-pages"},"Adding a Branch for ",(0,o.kt)("inlineCode",{parentName:"h2"},"gh-pages")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In order for GitHub Pages to work, we need to create a branch called ",(0,o.kt)("inlineCode",{parentName:"p"},"gh-pages"),"."),(0,o.kt)("p",null,"First we will create the new branch and switch into it by running the commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ git branch gh-pages\n$ git checkout gh-pages\n")),(0,o.kt)("h2",{id:"pushing-branches-to-github"},"Pushing Branches to Github"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Now that we are in the ",(0,o.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch, let's push this new branch to GitHub:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ git push origin gh-pages\n")),(0,o.kt)("h2",{id:"accessing-our-web-page"},"Accessing our Web Page"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Now our project should be available for viewing at ",(0,o.kt)("em",{parentName:"p"},"my-github-username.github.io/repository-name"),". So, for instance, if our GitHub username was ",(0,o.kt)("em",{parentName:"p"},"sample-epicodus-student"),", and our repository was named ",(0,o.kt)("inlineCode",{parentName:"p"},"my-first-webpage")," we would navigate to ",(0,o.kt)("em",{parentName:"p"},"sample-epicodus-student.github.io/my-first-webpage"),". Check out the URL that corresponds with your GitHub username and repository name (",(0,o.kt)("strong",{parentName:"p"},"Note:")," Repository names are case-sensitive, use the same capitalization pattern as you did when naming the repo!)"),(0,o.kt)("p",null,"You can also set up the GitHub Pages webpage for your project in the browser by going to your project's repository, clicking the branch drop down on the left, typing ",(0,o.kt)("inlineCode",{parentName:"p"},"gh-pages")," and selecting ",(0,o.kt)("inlineCode",{parentName:"p"},"Create branch: gh-pages"),". Done!"),(0,o.kt)("h2",{id:"updating-github-pages"},"Updating GitHub Pages"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Note that if you make further changes to your project, you should do so on your ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch rather than on your ",(0,o.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch. To get back to your main branch, ",(0,o.kt)("inlineCode",{parentName:"p"},"git checkout main"),".  We'll learn in the future about merging branches, but for now the easiest way to update your ",(0,o.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch is to delete it on GitHub and then recreate it based on the updated main branch."),(0,o.kt)("p",null,"You can also check out GitHub's ",(0,o.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"documentation")," on deploying to GitHub pages. You'll see it's very simple."),(0,o.kt)("p",null,"Alternatively, there is an option to deploy to GitHub Pages through a repository's ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site"},"settings"),". We recommend sticking with the approach covered in this lesson, which also gives you additional practice working with the terminal and pushing and committing code."))}c.isMDXComponent=!0}}]);