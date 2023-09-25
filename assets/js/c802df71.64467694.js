"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[86847],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>k});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(o),m=a,k=u["".concat(c,".").concat(m)]||u[m]||h[m]||n;return o?r.createElement(k,i(i({ref:t},p),{},{components:o})):r.createElement(k,i({ref:t},p))}));function k(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<n;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},28299:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=o(87462),a=(o(67294),o(3905));const n={title:"Pull Requests with Forks",id:"pull_requests_with_forks",slug:"pull_requests_with_forks",hide_table_of_contents:!0,sidebar_position:12,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/pull_requests_with_forks.md"},i=void 0,s={unversionedId:"intermediate_javascript/team-week/pull_requests_with_forks",id:"intermediate_javascript/team-week/pull_requests_with_forks",title:"Pull Requests with Forks",description:"Many of the JavaScript libraries and tools we use at Epicodus are open source including webpack, React, and Jest, to name a few. Open source means the code is available publicly and that anyone can contribute to it.",source:"@site/docs/intermediate_javascript/6_team-week/pull_requests_with_forks.md",sourceDirName:"intermediate_javascript/6_team-week",slug:"/intermediate_javascript/team-week/pull_requests_with_forks",permalink:"/intermediate_javascript/team-week/pull_requests_with_forks",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Pull Requests with Forks",id:"pull_requests_with_forks",slug:"pull_requests_with_forks",hide_table_of_contents:!0,sidebar_position:12,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/pull_requests_with_forks.md"},sidebar:"intermediate_javascript",previous:{title:"Pull Requests with Branches",permalink:"/intermediate_javascript/team-week/pull_requests_with_branches"},next:{title:"Journal #7",permalink:"/intermediate_javascript/team-week/journal_7"}},c={},l=[{value:"Making a PR Request Via a Fork",id:"making-a-pr-request-via-a-fork",level:2},{value:"Contributing to Open Source Projects",id:"contributing-to-open-source-projects",level:2}],p={toc:l},u="wrapper";function h(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Many of the JavaScript libraries and tools we use at Epicodus are ",(0,a.kt)("strong",{parentName:"p"},"open source")," including webpack, React, and Jest, to name a few. ",(0,a.kt)("strong",{parentName:"p"},"Open source")," means the code is available publicly and that anyone can contribute to it."),(0,a.kt)("p",null,"In order to do that, maintainers of open source projects welcome pull requests from the community. However, it wouldn't be a good idea for maintainers to make everyone in the community collaborators. That would be difficult to manage and also lead to potential security risks."),(0,a.kt)("p",null,"Instead, it's possible to make a PR with only read access to a repository. Instead of cloning the repository and making a branch, contributors ",(0,a.kt)("strong",{parentName:"p"},"fork")," the project, make changes to a branch on the fork, and then submit the PR."),(0,a.kt)("p",null,"In this lesson, we'll walk through the necessary steps to make a PR via a fork. The steps for approving a PR are the same regardless of whether the PR comes from a branch or a branch on a fork so we won't cover that part."),(0,a.kt)("p",null,"Once you know how to submit a PR via a fork, you can start contributing to open source projects! There are many, many ways to do so \u2014 and you don't need to be an expert coder to contribute. We'll talk about contributing to open source more at the end of this lesson."),(0,a.kt)("h2",{id:"making-a-pr-request-via-a-fork"},"Making a PR Request Via a Fork"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We covered the basics of forking in ",(0,a.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/git-html-and-css/practice-github-remote-repositories"},"Practice: GitHub Remote Repositories"),". "),(0,a.kt)("p",null,"To fork a repository, we just need to click the ",(0,a.kt)("em",{parentName:"p"},"Fork")," button in the upper right corner of the repository we want to fork."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/making-pr-requests/fork-button.png",alt:"This is the fork button."})),(0,a.kt)("p",null,"There's even a little number by the button that shows how many times the repository has been forked. The above repository doesn't have any forks \u2014 but check out the ",(0,a.kt)("em",{parentName:"p"},"Fork")," button for React:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/making-pr-requests/react-fork-button.png",alt:"The React fork button shows nearly 31K forks."})),(0,a.kt)("p",null,"This one has nearly 31,000 forks at the time this screenshot was taken."),(0,a.kt)("p",null,"When you click the ",(0,a.kt)("em",{parentName:"p"},"Fork")," button, you'll be prompted to choose a GitHub account to fork the project to. Once you choose an account (you likely only have one at this point), GitHub will automatically create the fork."),(0,a.kt)("p",null,"Once the project is forked, we can clone that project to our desktop, make a branch, and then make any updates to the branch as needed. ",(0,a.kt)("em",{parentName:"p"},"Do not make changes directly to the main branch.")," We are really following almost the exact same process that we follow when making a PR without a fork."),(0,a.kt)("p",null,"Once the branch is updated, committed, and pushed back to our fork of the project, we can make a PR."),(0,a.kt)("p",null,"To do that, we can open a PR ",(0,a.kt)("em",{parentName:"p"},"in our fork of the project"),". We don't even need to navigate to the original repository."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/making-pr-requests/make-pr-request-from-a-fork.png",alt:"Making a PR from the fork."})),(0,a.kt)("p",null,"The image above shows the process of making a PR from a forked repository. GitHub automatically points at the original repository for the base repository while the compare repository is automatically the fork. Note that we should always verify that we are pointing at the correct repositories; we also need to make sure we are pointing at the right branches, too. In the example above, we can see that the compare branch is still on main \u2014 not what we want if we've just made changes to a branch on the fork! So even though GitHub should automatically point to the correct repositories, we still need to verify they are correct and update the branches as needed."),(0,a.kt)("p",null,"After that point, every other part of the PR process is the same as when we make a PR via a branch on the original repository itself."),(0,a.kt)("h2",{id:"contributing-to-open-source-projects"},"Contributing to Open Source Projects"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Open source projects are a huge part of the developer ecosystem. As we mentioned at the beginning of this lesson, many widely-used libraries are open source. By contributing to open source projects, we can get more involved in the developer community, improve our favorite libraries, and add great experience to our resume."),(0,a.kt)("p",null,"At this point, you might be thinking that you don't have enough experience to make an open source contribution. However, that is not the case. You don't need to be an expert coder to make a contribution. In fact, many open source projects have a pool of good first issues for people new to making contributions. Open source maintainers may need help on everything from updating READMEs to writing tests to updating the code itself. Updating a README for a library can be a great way to get to know the library better and get involved in an open source project."),(0,a.kt)("p",null,"We recommend taking the time to make a contribution. For more information on making open source contributions, see ",(0,a.kt)("a",{parentName:"p",href:"http://opensource.guide/how-to-contribute/"},"How to Contribute to Open Source"),", an excellent tutorial from Open Source Guides on making contributions."))}h.isMDXComponent=!0}}]);