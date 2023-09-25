"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[32390],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=r,g=p["".concat(c,".").concat(u)]||p[u]||d[u]||o;return n?i.createElement(g,a(a({ref:t},m),{},{components:n})):i.createElement(g,a({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const o={title:"Practice: Git Commands",id:"practice_git_commands",slug:"practice_git_commands",hide_table_of_contents:!0,sidebar_position:19,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1_git-html-and-css/2_1_practice_git_commands.md"},a=void 0,s={unversionedId:"introduction_to_programming_part_time_evening/git-html-and-css/practice_git_commands",id:"introduction_to_programming_part_time_evening/git-html-and-css/practice_git_commands",title:"Practice: Git Commands",description:"In the previous lesson, we initialized git in our project and walked through the status lifecycle of files. That was a lengthy walkthrough so let's now practice the most relevant points.",source:"@site/docs/introduction_to_programming_part_time_evening/1_git-html-and-css/2_1_practice_git_commands.md",sourceDirName:"introduction_to_programming_part_time_evening/1_git-html-and-css",slug:"/introduction_to_programming_part_time_evening/git-html-and-css/practice_git_commands",permalink:"/lhtp/introduction_to_programming_part_time_evening/git-html-and-css/practice_git_commands",draft:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"Practice: Git Commands",id:"practice_git_commands",slug:"practice_git_commands",hide_table_of_contents:!0,sidebar_position:19,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1_git-html-and-css/2_1_practice_git_commands.md"},sidebar:"introduction_to_programming_part_time_evening",previous:{title:"Git",permalink:"/lhtp/introduction_to_programming_part_time_evening/git-html-and-css/git"},next:{title:"GitHub and Remote Repositories",permalink:"/lhtp/introduction_to_programming_part_time_evening/git-html-and-css/github_and_remote_repositories"}},c={},l=[],m={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the previous lesson, we initialized git in our project and walked through the status lifecycle of files. That was a lengthy walkthrough so let's now practice the most relevant points."),(0,r.kt)("p",null,"When you make changes in your project, you have the option to make a commit which will preserve a snapshot of your project at that moment. The steps are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make a change in your project. Such as, add a new line of code or delete lines of code.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add those changes to be committed using: ",(0,r.kt)("inlineCode",{parentName:"p"},"git add name-of-file")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Additionally, you can include multiple file names in the ",(0,r.kt)("inlineCode",{parentName:"li"},"git add")," command. Separate file names using a space. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git add .")," adds all modified files without having to name all files."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Commit staged changes using: ",(0,r.kt)("inlineCode",{parentName:"p"},"git commit -m \u201cbrief message\u201d")),(0,r.kt)("p",{parentName:"li"},"Repeat these steps as necessary. Recommend using ",(0,r.kt)("inlineCode",{parentName:"p"},"git status")," after every step to check file status as you are learning. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"git diff")," often to see changes of modified files. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"git log")," to view your commit history."))),(0,r.kt)("p",null,"    For this practice lesson, the goal is to start building good muscle memory. These git commands are the ones you will use most frequently in your workflow. Make a commit for every minor change and commit messages should be a single sentence description of the change."))}d.isMDXComponent=!0}}]);