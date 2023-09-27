"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[78739],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const i={title:"Git",id:"git",slug:"git",hide_table_of_contents:!0,sidebar_position:18,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_0_git.md"},r=void 0,s={unversionedId:"introduction-to-programming-part-time-evening/git-html-and-css/git",id:"introduction-to-programming-part-time-evening/git-html-and-css/git",title:"Git",description:"Git is a version control system for tracking changes in our code. We have to use tools like Git while we code to periodically take snapshots of our projects. By taking a snapshot of our project we can preserve the state of the project in that particular point in time. We continue to take snapshots as we work. Older snapshots are kept and the collection of snapshots represents our project history. The benefits of doing this include but are not limited to:",source:"@site/docs/introduction-to-programming-part-time-evening/1_git-html-and-css/2-0-git.md",sourceDirName:"introduction-to-programming-part-time-evening/1_git-html-and-css",slug:"/introduction-to-programming-part-time-evening/git-html-and-css/git",permalink:"/introduction-to-programming-part-time-evening/git-html-and-css/git",draft:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"Git",id:"git",slug:"git",hide_table_of_contents:!0,sidebar_position:18,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_0_git.md"},sidebar:"introduction-to-programming-part-time-evening",previous:{title:"Wednesday Schedule and Expectations",permalink:"/introduction-to-programming-part-time-evening/git-html-and-css/wednesday-schedule-and-expectations"},next:{title:"Practice: Git Commands",permalink:"/introduction-to-programming-part-time-evening/git-html-and-css/practice-git-commands"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Git commands you will practice:",id:"git-commands-you-will-practice",level:3},{value:"Important new terminology:",id:"important-new-terminology",level:3},{value:"Exercise",id:"exercise",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Project Setup:",id:"project-setup",level:3},{value:"Initialize Git",id:"initialize-git",level:2},{value:"Git Status",id:"git-status",level:2},{value:"Wrap-up",id:"wrap-up",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Git")," is a ",(0,a.kt)("strong",{parentName:"p"},"version control system")," for tracking changes in our code. We have to use tools like ",(0,a.kt)("strong",{parentName:"p"},"Git")," while we code to periodically take snapshots of our projects. By taking a snapshot of our project we can preserve the state of the project in that particular point in time. We continue to take snapshots as we work. Older snapshots are kept and the collection of snapshots represents our project history. The benefits of doing this include but are not limited to: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If we really mess something up in our code, we can revert back to a previous snapshot when the project was working."),(0,a.kt)("li",{parentName:"ol"},"We can demonstrate we are making progress on a project. Our project's history is proof of work."),(0,a.kt)("li",{parentName:"ol"},"Each snapshot can be authored meaning we retain credit for past work even if someone else takes over the project."),(0,a.kt)("li",{parentName:"ol"},"We can preserve unused code we may want later. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Git")," also works with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub"),", which will be your coding portfolio when job seeking. The work you do now while learning how to code will be tracked by ",(0,a.kt)("strong",{parentName:"p"},"Git "),"and all your hard work will be reflected in your GitHub account.   "),(0,a.kt)("p",null,"For these reasons, we need to take a pause from learning about code and shift to learning about ",(0,a.kt)("strong",{parentName:"p"},"Git"),". Afterwards, we will integrate Git into our regular workflow. "),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Learning ",(0,a.kt)("strong",{parentName:"p"},"Git")," is difficult and it likely will feel very convoluted at first. We want to give you context for what is happening with ",(0,a.kt)("strong",{parentName:"p"},"Git")," while doing our best to not weigh you down with unnecessary details. "),(0,a.kt)("p",null,"Don\u2019t worry if you don\u2019t feel 100% with ",(0,a.kt)("strong",{parentName:"p"},"Git")," after the exercise. We will continue to use ",(0,a.kt)("strong",{parentName:"p"},"Git")," for the remainder of the program so you will get plenty of practice. After this lesson, we\u2019ll include a concise step-by-step practical use guide for how to use ",(0,a.kt)("strong",{parentName:"p"},"Git")," in your workflow. "),(0,a.kt)("h3",{id:"git-commands-you-will-practice"},"Git commands you will practice:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"git init"),(0,a.kt)("li",{parentName:"ul"},"git status"),(0,a.kt)("li",{parentName:"ul"},"git add"),(0,a.kt)("li",{parentName:"ul"},"git commit -m"),(0,a.kt)("li",{parentName:"ul"},"git diff"),(0,a.kt)("li",{parentName:"ul"},"git log")),(0,a.kt)("h3",{id:"important-new-terminology"},"Important new terminology:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Git"),(0,a.kt)("li",{parentName:"ul"},"repository "),(0,a.kt)("li",{parentName:"ul"},"commit (a snapshot is often used to describe a commit)"),(0,a.kt)("li",{parentName:"ul"},"untracked file"),(0,a.kt)("li",{parentName:"ul"},"tracked file"),(0,a.kt)("li",{parentName:"ul"},"unmodified, modified, staged changes in a file")),(0,a.kt)("h2",{id:"exercise"},"Exercise"),(0,a.kt)("p",null,"Let's learn a bit about how ",(0,a.kt)("strong",{parentName:"p"},"Git")," categorizes changes when they happen in your project. To start, we\u2019ll set up ",(0,a.kt)("strong",{parentName:"p"},"Git")," in a brand new project. We\u2019ll then make changes to our project to see how ",(0,a.kt)("strong",{parentName:"p"},"Git")," categorizes those changes. Then we\u2019ll end with taking a snapshot of our project to preserve its current state in our project's history. "),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"This exercise assumes you have git installed on your computer following the directions in lesson ",(0,a.kt)("a",{parentName:"p",href:"https://new.learnhowtoprogram.com/prework/getting-started-with-intro-to-programming/git-and-github"},"Git an GitHub")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note!",(0,a.kt)("br",{parentName:"p"}),"\n","Epicodus machines already have git installed.")),(0,a.kt)("h3",{id:"project-setup"},"Project Setup:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Let's Pair Program!",(0,a.kt)("br",{parentName:"p"}),"\n","If working remotely in a pair group:",(0,a.kt)("br",{parentName:"p"}),"\n","Using Git relies on using the terminal. We shouldn't share access to our terminal with other people for security reasons. So for this project, the person who sets up the project on their computer will be the driver for the entire exercise. Go through this exercise multiple times so everyone has an opportunity to be the driver. ")),(0,a.kt)("p",null,"Create a new directory on your desktop called ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world"),". Navigate into that directory and create an HTML file called ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world.html")),(0,a.kt)("p",null,"Copy and paste this starter code to the ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world.html")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<h1> Hello World </h1>\n\n<h2> A program to greet the planet. </h2>\n\n<p>This page is an attempt to greet everyone on Earth using our various human languages.</p>\n\n<ul>\n    <li> English: Hello, world! </li>\n    <li> Spanish:  Hola, mundo! </li>\n    <li> Japanese: Konnichiwa, sekai! </li>\n    <li> French: Bonjour, monde! </li>\n    <li> Kinyarwanda: Mwirwe, isi! </li>\n</ul>\n")),(0,a.kt)("h2",{id:"initialize-git"},"Initialize Git"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world")," directory: type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git init \n")),(0,a.kt)("p",null,"Hit Enter. The response should look something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git init\n\nInitialized empty Git repository in /Users/staff/Desktop/hello-world/.git/\n")),(0,a.kt)("p",null,"You only need to ",(0,a.kt)("strong",{parentName:"p"},"initialize git")," once per project. "),(0,a.kt)("p",null,"A new directory has been made in your project called ",(0,a.kt)("inlineCode",{parentName:"p"},".git"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},".")," before the directory name means it is a ",(0,a.kt)("strong",{parentName:"p"},"hidden file"),". You can view ",(0,a.kt)("strong",{parentName:"p"},"hidden files")," on your computer by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"ls -a")," terminal command."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".git")," directory is a ",(0,a.kt)("strong",{parentName:"p"},"Git repository")," inside your project. It will be able to track changes made in your project. A ",(0,a.kt)("strong",{parentName:"p"},"repository")," in English is a place where things may be stored. ",(0,a.kt)("strong",{parentName:"p"},"Git")," uses the term ",(0,a.kt)("strong",{parentName:"p"},"repository")," to refer to where a project is stored. "),(0,a.kt)("p",null,"We\u2019re not going to explain how ",(0,a.kt)("inlineCode",{parentName:"p"},".git")," works. It's not essential for us to know in order to use ",(0,a.kt)("strong",{parentName:"p"},"Git")," effectively . Just know that deleting  the ",(0,a.kt)("inlineCode",{parentName:"p"},".git")," ",(0,a.kt)("strong",{parentName:"p"},"repository")," inside your project will delete your project's history. "),(0,a.kt)("h2",{id:"git-status"},"Git Status"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".git")," ",(0,a.kt)("strong",{parentName:"p"},"repository")," tracks changes in your project but you have to tell ",(0,a.kt)("strong",{parentName:"p"},"Git")," when to take a snapshot to preserve a record of those changes. It's kinda like how a video game will have a save option but you have to use the save option in order for your progress to be recorded."),(0,a.kt)("p",null,"Let's learn how ",(0,a.kt)("strong",{parentName:"p"},"Git")," categories change in your project as they happen. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Git")," puts all files in your project into two main categories: ",(0,a.kt)("strong",{parentName:"p"},"untracked")," or ",(0,a.kt)("strong",{parentName:"p"},"tracked")," status. ",(0,a.kt)("strong",{parentName:"p"},"Tracked")," files additionally have ",(0,a.kt)("strong",{parentName:"p"},"unmodified"),", ",(0,a.kt)("strong",{parentName:"p"},"modified"),", or ",(0,a.kt)("strong",{parentName:"p"},"staged")," status. A ",(0,a.kt)("strong",{parentName:"p"},"tracked")," file can have more than one additional status."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Git")," describes this as the lifecycle of the status of your file. For this lesson we are going to shorten that to just a status lifecycle.  When describing the status lifecycle, we refer to the statuses: ",(0,a.kt)("strong",{parentName:"p"},"untracked"),", ",(0,a.kt)("strong",{parentName:"p"},"unmodified"),", ",(0,a.kt)("strong",{parentName:"p"},"modified"),", or ",(0,a.kt)("strong",{parentName:"p"},"staged"),". Here is a visual that represents the status lifecycle:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/u/0/docs/ADP-6oG7c_d8VHBJ5wfuf8UvlykZzdmbkmZpq6XDQiP630m-kV4MYb2MHb_DtOvkkLD1AO0wan-DOdnPu-DshmOBooWHlbzpjMVGT2ncpUhJ4lP7fpLsvkSi--dmnqKg4MGUiwstUjeFQVR2Hzq9o20HFwWWggfQvz43B5IuKT1xk-Mg2g8DqD1fA9kQ8WOj76Y6M0zG8ZNHlRLO8Gx7-K_dKwwKDZ4fogzy1upf4uSZH36MYxMvfzIcX_ReRuy2L62ooDDVr9WKIu1VY-9SqD0o6Ir7kvLLtjH-TV_CYtkbulku7BQm4Z8dyQ-9PP_aXH2olvBYusZRA7ydMSvVByQUUaBU1Drgg-LAlikDiFo_4LHQzPf1TM10DFYTEEVvJBhCZUIZ-jUl25ZYCV3IDCPpsZGuygpHNp3k3enVTz49qzEA9OAbp4VozklTTGw_EZ2KIrR_Rvwb-A-WPXdcqGYzymipLEUWRxVEqQN-3QQQTrdZzcb1b41tHZIacMjkz3Dm7l3YX6GqzUoWM-TqdgtxDx22BJz4iGifDcwv84Vxoj6sYGhaUPLhsOyGMcK6PuHpZXwu4GZqlajlo0_TYMPy1GWG8ohiwmKhcSZtDJNzaheKgZslK9Gwrpkbjm8aVvKSXWaMAuNcJAmjQPITcmOS3UPldzLOJGZvCiTuLqP5aqJ_57ARiGp8VkGNaL6kHrUODUNEWg7sL5iZLg-b-NiVaGfybG7L_jW-dljPOG6uMXFEtPseSD1Mi41jYRTvL2lpCAamXd3w8bPnIRf6lU6cWUA7Z7Rv_FLxrkEiSYG9OX1Tfk7WdRTCXrGiuWp5pISIMZ_0ZDz7JwzFGgnJ8NzT5Nn85nMLS3GPiG66J7oWX6Tk5DKsASJlK72SStvltgdRaGw1xKleQWsxrVuppqsTpe3AEBJZm4JZrzVY5Cj-GQjNwhRkCXZZHanqPn48TDbaO7wphTmwvIR8dc-A1SBM-OPIYjr0do6AA3wfI6bJslxaZsF7zY3yTsh_g41xSxIYnWpRM0kA02kUcHFajJS8OglEindlNwFszn0kdA",alt:"static image of lifecylce chart"})),(0,a.kt)("p",null,"Image from ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository"},"git-scm.com | 2.2 Git Basics - Recording Changes to the Repository"),"."),(0,a.kt)("p",null,"In your terminal, navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world")," directory, type: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git status\n")),(0,a.kt)("p",null,"Hit Enter. You should get a response something like this (our terminal theme may look different from yours):"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/u/0/docs/ADP-6oEBM48WfzxDVncxOYmrFPU_9mQKjDt_SgftS3k8cF09xgVfqiyCcCwxogTXaORpfd5OBveiigJ7qGnm698gZuhTCBoPjatlSI8kzs6n-6cNHGadEH10nnREbMJLNqlKYRZzo9eA3pYGroOfiNQ1hcD4-tj63WCHy8v5Zp8yqH7wbrJmKIKWfFyCGf48FYRQ_LCs3GxhZup_mh0PtvHZdNqvkgIMjOYfkOBMXnqWjLpf6CdzuQDHKdQn07dW6LNUcFoUCeuT1lHJDY1jN8TlAExGp66u8QIjTIu02GJlhde84b8PV_gCfuJe2VbI3syYQsm-T953DGBl9pRvRDvgcWhvrPbFgop4occfXd-7zwAz5l744SYSf8y-f4tgIjZ7Mpib3Cngw-IwsPhPPj4ebWvRJ-sXAxzEY-8qiRrPLAvVfilDKiXHU6GtVq-jmIJJPPhI2ejGIXf3VH8NA7PKdZm6e4Qf0pnCCJF91iESbCR_YPWNY6WNdiIKI8r9u_wdrmSV7XRaLpFIuYD9149vRKUt1KhFlAj7cUsModGiZXFTRBFsAdg7FsytOHaLp-exYsfjgzkiqesvsAuZn7kcuRBCpTHgkaO5xkshLVXJzVRMXnrqEzEzumWXVDr6N-9otR8bwJ0b1X33-ZJpm7WUScPvwQVmIeSFcWDcOTpXEAmkGbs847C5ZASH-e3EOUMC-aiOQTRT2GUQUjeQxCg8ed0n7Xrly2vvu6-n45uHw1eZw0AkQJkW9CWgl79N1zGLC-afPDqniQoViJq6o1QNXBM5YkoLf2BK6ZiVgLK1jP0jLS51MEeVVlp4wiCd1uhwuGKms87dNsqWUFsiD8MSEu5P1voE5p6XntBDW4-V_4g4JtcFdSSGF2aZIWpRu9B6ylFgl2R21dg7s8ouWR8rNiRU9-DXQs1SWpkOUetDmGvtIn4FDIn6Fyg9yIhdnNDvTH2PmIDpChs4MMNt0vRsTooqTQAL3ZYthRTEpvX7M4jqCC7_fFa-veDPe7SAJV6XrPxzGEGImQ16_nga1Ou0YgUjjbEWTa3yLSMesQ",alt:"static image of git response"})),(0,a.kt)("p",null,"The file ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world.html")," is listed under \u201cUntracked files\u201d (circled in blue). This file is currently ",(0,a.kt)("strong",{parentName:"p"},"untracked")," so we\u2019re here in the status lifecycle (the purple 1 in a circle):"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/u/0/docs/ADP-6oH-dVsAevBF5C_-s15WLg-JtCHWab-nj4wGDiQRlywEaTGYybc5Jk-uUcMOi9wBC9awfHo7jlQKX2IWLVPlW6CW7EBuD1mL9JMt7IoG749M4C4deLP_yCw3wKkAo0HKdctZIuil68MrhSt9dB9ihfp8BPS5UwvS6WuMRJpUQOzZ0NrVoWqrYBRTra-e5YWjbCZVQLbLTno9YIUa0dTO2a_mFjjSyg3CWm1o_uX-UYXMaZ7BZB5R5bTBsY0y2KWETjE3alDnV97EEoY4SZRXxTAUMr2zVMLOjd7yWHQtNTI3RGcnYTAnExkjrSI_SfnZ-nl7MsiX-2cB57M7LAOqvEUV94KvTTQxxEKU12I6mXav6pxyU2BoTd4XwwVSgaXb5V2i4IP8PPM8_-JTvX4eDKmfGxlgMEi-m7jtbvad9yOF32DoV_6GJz3dlOIWXLF0_tLo4xDa1REEs0GPSPjZYlglEOgNLY0k23slkG4vGfHA-vKilrIN6pf9n73yts67K5xqorhs1MU3LLRJaxM6DTlcqxvJa-_xkFT3TmorykMvPRTgCq9FR476kb-U4Ri5wwgHysDavFLwmNOfFPdLBAmqTBkZnzOeHyDsD8c8Eg7Q3F_pQBaUIQGjxuRRMRKqyu7HeelAc-vYInFb_x6fqvWiPegUKf2xqyeqwso5cxiIa3AtOgnkiuSiS1RSLlViYLU7rVy7US91XQMZrT-wRoyCWyMc9QZ7iC5cKvCPBW66TxZWmuMwvqCb_lz3LGpMIxIut5Fdg5_kwHkvxmNBwpED-0gCciZqHVQjvZS2u6zhk2Fjow_upDtVLJ4BWy0-moaTxK_AGyGdmZEd6ihoP0wzw8zTVfKKeY86FFDUTEYMzHMKcrQOXL4DHVLpwl_e7mg5nLFm0TphAhR-bI_U9f5PIniTeIDnY0ES68V8aO4KUEFPOxO9kx8GORXjeOKzLG0qPUVIV6EoPl8S6UDbWj4CuAQ-rNeVo3wFtxdrkAvqhA2cVNjjnKubJLaYNIitrZVBjL-5QyTg4wuEc_gFNaqzhTpHyzTkf3SBCQ",alt:"static image fist status in lifecycle"})),(0,a.kt)("p",null,"The only place to go from status ",(0,a.kt)("strong",{parentName:"p"},"untracked")," is to ",(0,a.kt)("strong",{parentName:"p"},"staged"),". This means that even if you are to make changes to the ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world.html")," file now and then run ",(0,a.kt)("inlineCode",{parentName:"p"},"git status")," again, the file will remain as ",(0,a.kt)("strong",{parentName:"p"},"untracked"),". That's because ",(0,a.kt)("strong",{parentName:"p"},"Git")," has no prior history of this file to compare to. The words \u201cunmodified\u201d and \u201cmodified\u201d even imply that there needs to be something to compare against in order to have either of those statuses."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Git")," has nothing to compare against for ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world.html")," because we just initialized git. We haven\u2019t created any history yet."),(0,a.kt)("p",null,"Well, let's create some history then. Let's change the status of the ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world.html")," file to ",(0,a.kt)("strong",{parentName:"p"},"staged"),"."),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world")," directory, type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git add hello-world.html\n")),(0,a.kt)("p",null,"Hit Enter. You should get no response. ",(0,a.kt)("strong",{parentName:"p"},"Git")," usually does not give a response if the git command was successful. Don\u2019t worry, if something goes wrong, ",(0,a.kt)("strong",{parentName:"p"},"Git")," is great at letting you know and often provides helpful suggestions."),(0,a.kt)("p",null,"So to see what happened, use ",(0,a.kt)("inlineCode",{parentName:"p"},"git status")," again. You should see something like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/u/0/docs/ADP-6oEFoEwl2ADHP6qxuVPPw1A9rPtPyr8zrSc2TmRx8GDdlh4bHpUw6eDv01QaieXFEztQGY4a3TNnRL0fU7oY31_Yea0qLbeczAhvIsLo-jYZ8Rjl4zFLW1QEy3Lz12ayifZjZF7hj1LGe7BEjvE3Nr-tNmVGw5r5fkfvh9_2RPR3JWCxVokutFsZHMKCgqVPHLa-cULbPX67W0JYarFsWtCKGF-3pd6D0mhS6zhEVl2j8Ka9eXU1sCAC-y_4jlosn5-nG-jPNnTJ6h59AZjE3DxIh-bCNQCvljk1WdA6PxcLOGlb1n23rGtT3wL_T1l7dUULqGz2wMTg-WNz5KV58C7NW-URu-z4MrBkf2kadMtpMfC9wdsvyWblqIQXwqADKpPShS2Kt-XoIL39DxT5xBEjEYktnS8Ibb4TTOOMBgATM9HeRlmqRfiNZfPJZtaHaNTOIJKbV4EYBx9T3-XNWg6bI4HRyOi07pseb47FN30TtpLpIFPBffDGiNRzwaG6cII16q8NSfGGc8kKkozX_Am4amZ_jdJ1dBg6avTmtPsM2Iwj4PEBBrRHKY2ttMJ01lUM9fx9a5BxOT5bjcseGQ3zw29XGAo5ezf0ZGpkKPSVdRLJaX1K6Vq2k7ksYKs0S3ym9rAt2oiFCdQl8h_-cVvFjKV14TDMRTllta25BSrN_7injfwhrZZi85__k-Q00H9tGVzM8bEHRUG5K_P_NOIgWr-wGsJ0qjs4AsQYh_MHxWrELzFBx4jv4qldYNE5pjkKaFg7WysgxtUya3EY_pHDUb3kIVziXfRVYHhdfz4LYzb6mzmv7vWx_-IdMloh4_Ujzm1hu1Q_ntjg2aZwy90qd7MOuk3OhK-T_L0fLvmzpUczyX7MfJDV3J3drJj2NOhgeV8_TrFpzIzQZ9HjiYdt8X-ob8D-goJSHkZBMaTBXe-tD0LRuTSbzpXvy9WBvKcPnqwbo7f0V2V94gIooVr06OPXaP_J9XQVFS0YfP6-tX_1evKXzsUKUKH7kU_ls1L8KcTXplWYNkyyplTcm_F0YoXy1oE9GyAjEg",alt:"changes to be commited terminal"})),(0,a.kt)("p",null,"\u201cChanges to be committed\u201d (circled in blue) means that these changes (now in green) are ready to be included the next time we take a snapshot of our project. That snapshot will be preserved in our project's history as a ",(0,a.kt)("strong",{parentName:"p"},"commit.")," We can revisit any previous ",(0,a.kt)("strong",{parentName:"p"},"commits")," as we please. "),(0,a.kt)("p",null,"We\u2019ll make a commit in just a moment but first a little more information about status lifecycle:"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world.html")," file has the status of ",(0,a.kt)("strong",{parentName:"p"},"staged")," because it has changes to be committed. In the the status lifecycle, we\u2019re here (purple 2 in a circle):"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/u/0/docs/ADP-6oG9YM8xFFkepdpwROsC9I6rYd7y7aj7inLjZa7Q8tca--qpcWAQS_lBPkLF5iV_zvDk1YttybUB4GtLnl0c6I7pUwtKkDETej3YAwX7acsyL1IoqxJQNBknNKhZrL32dtpNAgaELB6yB7E24hoFx7ZmCuqrXpaRWMWK_4WZPxLXI3KjkWqw2_75Ve3ytr8dRBMizVCAh1ROxzJKrPLIqbX6dijXsmoI_nP39Yd2ZNL1DCbC1CwkMddOjxPFf1324m7UfA24M1N3rClroLLIVDqCn_VqJNZziMbXD4OtkJHI-BP6r7KJmp3WDXqVsVTkKimTzrqu6ZuvqViPH4bOGyxVX71Ib5bJvvP5BIGFvHXf_fAEV-2dtOtd5-Qv3fvHGebGtH5s00kSCrGs00P76p-RdylVyDsi28fcssZLNOOQ-JR2Ge9daGWkLA04P5STvXiTNIx-C2M-NpNAauO-MpTtCf84o_EKr6KZszcERQSzWdsiJmWwFtjHse_6PIUVqoMVbiJJLg1_yvuI3r1Vi4Dhb1o5eGnv8SKVx-8d2kfhUnuoAU9ZTV1PCaKy-yoTMw_ZypxCygKZybFrNTlnmZohICBUfvpdRkz4IgCMSIOGQvmQ7gE4t4xhCsI22H6Ir6a22015TLH85bGrHNJDP24RhXjYdXHcBwujhDaDoszZ1zbqMdg2KYCdWwyEAMcAaMwf95vUvjCiOeUgvi_A65-_NVLz_ofy6sDA2qfEW1asXFEXO2RV8INKqPYftklS0GQ5OfTjRkeRnJGHXzGP83gxGSjyqktF_IOZEQaQEstZdKvRHe5vzupUBEeCCrUQDZc2L_Cr0CRqIEs3zvTsPaVUzXps2C2wST2QMskINIhZYI6XNoPWI_zfc7VeFTcU2k1l-gbvE6oArqKVmwimQhEsqP2WVWmzV3IzSBxbya2479bumLghespMyv8ixOYiAmP3ZybEuHu25wXYZwT7w5w3XDCzARHJvzP66OFzM5_pNMSUQHqvttABSf1jmIgSAG4GXawen214jmMM8xrUqD8wnwTIsLuWvJroyw",alt:"second stage lifecycle"})),(0,a.kt)("p",null,"The tricky thing is that a ",(0,a.kt)("strong",{parentName:"p"},"tracked")," file can have more than one status from the options: ",(0,a.kt)("strong",{parentName:"p"},"unmodified"),", ",(0,a.kt)("strong",{parentName:"p"},"modified"),", ",(0,a.kt)("strong",{parentName:"p"},"staged"),"."),(0,a.kt)("p",null,"To demonstrate, make any change to your ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world.html")," file at this time and then use ",(0,a.kt)("inlineCode",{parentName:"p"},"git status"),". You should see something like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/u/0/docs/ADP-6oFc9swNgp6YY-dr9m05ZymNkcGSMtkhV-yacHcJcT6KZ7iG3CtEdQgUCBWydyj0j7L76sUOJ9qc84QhD20qnKHNsOOvZNhOO2btnTA2Eb3I1-e7GojrHlmnKmepy-D_hY1oz6x01v9CuQ4CbCz-y3jB3_9_nBFrEsMPZjKKgUNnopgMLQWa9WnlzdmlPZEKCdX7tAN3wFjjHwVKQipHs0_awnJ-TvdzpuZIOY0IzwDVb26_1LXiRBpNkCBdYeT4fGPKXKAHI6Kge5XGyEfS1E_KQ0__772A9zFcscE92bR2OmdPcEG6NGOIk1BKKFquHh0niItp5UZzyo2YPG1YP2XcemmVf84HW_jGHi8WieVx5TgHa8BMchMl2e3BVcbHZK9bfp4JyTBPoEnepKlXpt-kIYBOjOESAuuZ-rBEQINZmDs4caHdP2QkVVP4XyGsgYtOIf6bzvSuBjrfiRcADAzfpVWUMmABuLkUQ-r11j2dkdF6zge6jzQMCVTXW5ECF9CP1ILJ493zPzhbI9hS22MrRTUIk2-Ll727k2q6xjcq3NcVaOclUwD_uvXPZcABfmtcknD1_NKoymgXOnfmL1HUUPBWC2oi8yGoyfcwUwWDPXLQ13P_ufeBrUt7NlgqQ2j3DaeIqYZSYwHGNJdLzohKpTeNBb3undVq4Z8thrqk_LGBtEdo7VRmYVyYnArbrEGEZw0M_nH4tMyg0Bi3d88cTxkXPBYGAz-DmxRN5bl5BPRU0aE9Mr2GEJ1XJQvq0QUEZvYKlwlzBduj8L0LZkM2OCeD045ht1CNtUvKWi2qcHzwoNMl55rjCmvLS-iH5NUwC40YnvriYzcGWFZaHVS6FbavRq0yUr9BTCd5J9uI15HdNUggtYq36Wx6tFAOXN1BFEJJli_sbMsyMPtvPGerVuENJxGNuYAJboHEZMXJk4xShPBz9BSBSJkTGAqqO18c729hpUV8FMzRZIrDdNcLs30smX4IJKGfGsvoWKwI0m8LoZqPZg6U8nVZXXvLNmuse02uCERWJi-F_-VFtttlCCXAX1Lq58YVQQ",alt:"two status file"})),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world")," file now has the status of  ",(0,a.kt)("strong",{parentName:"p"},"staged")," AND ",(0,a.kt)("strong",{parentName:"p"},"modified")," because some changes are ",(0,a.kt)("strong",{parentName:"p"},"staged")," under the \u201cchanges to be committed\u201d section and the other changes are not. "),(0,a.kt)("p",null,"In other words, we made additional changes after using the ",(0,a.kt)("inlineCode",{parentName:"p"},"git add")," command. ",(0,a.kt)("strong",{parentName:"p"},"Git")," will not make the assumption that additional changes to a file should be included under \u201cchanges to be committed.\u201d "),(0,a.kt)("p",null,"This is good because we want to be the ones to make that decision. We don\u2019t want ",(0,a.kt)("strong",{parentName:"p"},"Git")," to add changes that will be included in the next ",(0,a.kt)("strong",{parentName:"p"},"commit")," and preserved in our project history without us saying so."),(0,a.kt)("p",null,"Revisiting the status lifecycle chart, ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world.html")," is now in two places (two purple 2 in a circle):"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/u/0/docs/ADP-6oFnnOweZPHOMbcqAo554eNG0soXq1thjY-RyzjAZ_jezKUZ_2SEUk7hw25OtxYWQX_86TF0DhBsmtU25vcgg2uGqFmijwZtiDMzXELWqmQZmed83qcGGTbHvOjzvVbMp4bB1zmp9c8-wqJRjW69ryAYfU2CiWLxtRGKxZ_hGx1UfIyczZ7AcnzK5UvxZFXF6bPjrXYoIdjg-sIfiQKMF1sLEaDUf01-9G7fDc4lue-ikBJnD4_s_dB-U7k8q6pVW-tD91kSfo-7zoAhqSFDjENziY2F6zotGQKqdduHjtVtl16ncVL2zDxWiW6Jw0IuMevM8H4Gb-Gj0zf9tXBek6cXR6HRGEAtck-5KenIxsvVcUEkwk2WahIrvlOgnLy2pxQGKuPCErqyrt_l18iDsB5uv0k2THtOIDSnuPtdj-d7d8ehDDgW4XcYJprAhgen2ckSqXm20XUx6sBdIU8wSQBE2_Z-tjZVC5EtbUqd4nuJy4gvYyx7X5SWly0pBnQfy3dfvFDrmZuP4HNNdPVzsDWot_K9ncd5_3LkDfU6vRiukM75KYcQxRQ36hZSvBPz-LGZ8utLO1bWNVdutFEMa73cEJCMVofc5zS11IkSPknqgLd0qMjXp1-Gl3yulwteiFcGmVbXInLtv7dBtbSYUe6y0LlQZrYzBtHtatxhZwXn5vhTcDl6IO4EBT3RxYMXITIc7mHMHu2zxa5D9K65OqFDPypJPk0w1O3PW41M5LNxOfuvDbI5ivwiL0NMeT6EpeV8HcVDmgEN_mrQrpG2SZRZXupPjbZ0OjYcIHvj1IzHH-AToVUIf4etEN74FSrj1KTVMzvii07miAosJRchfDHotdtQVNB3qCv-0bazBx6THR5ZKpyI5hIA8vZ6HtAZ9lXFEqxudhSYT_x2svG9AREcVfab8VjLW-p0h198MN2fJFoqZcUykxopkLBKMY8TzgPBJKhFOs3TiNRlaugpKX7mQXEkrddRm9WzzSu2pdYytbRwu9jqma_FJIecQGgYrb0hv1QHi464pfGXsXAPZlXY6qzMAtbeyz-cUQ",alt:"flowchart in two places"})),(0,a.kt)("p",null,"Now is a good time to try out a new git command: ",(0,a.kt)("inlineCode",{parentName:"p"},"git diff hello-world.html")," This command is helpful to quickly see what changes happened in a ",(0,a.kt)("strong",{parentName:"p"},"modified")," file. "),(0,a.kt)("p",null,"Moving on, if you want the new changes to be added to \u201cchanges to be committed\u201d (and eventually included in our snapshot when we make a ",(0,a.kt)("strong",{parentName:"p"},"commit"),") you have to use ",(0,a.kt)("inlineCode",{parentName:"p"},"git add hello-world.html")," again. Do that now and here is an example of what it should look like:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/u/0/docs/ADP-6oF49wlVK5PBpgNBQfC06Uq3kwndwYZGUbE_bWkOZvHHYqsTB1BlzvLzsqENj9Ix0v_8PlMXzLrTCIub7TC0ZiXaSYFJUnkdEqtu-gORfgIn3DjctLz9RctgYWC04noagC4dI_euaqe7pOX1pxOqnTWf-8DU1l0wRymcNVP54f8D0b2H7Yuz6tZczn86b0lt_3u1_BG7oUPCeO7eKREevIt7cqg97cJaVgp_N-VrN20SEH7c-uGhFC4P6l8Sx0J-dkJSxLZTpY_dwP82YtsuvkZink6RbPs0I558hCpTwC4UhjZE-4kWdNpKnS1Vd3EaebuRuVm4Z8x2ysQBgRf32_hWTQwudsOQA455QBqpIz5Jse7aI-lY0iTSVCHulBEN3CRwMFnSHahI6vKRprFKN7XF_n8CKH2WRmuqDI08AYFUsV5J5O1Ive-u8FLho5gUVjrhe3LNtOeFVtS5WXhwMMC3MdqlCuAK_SkFNzo02OMNeiP8j-JsBXnEMUoo3qhWShiGWdLm-k9rCBoIEgQMMZwG5zWyD_hUwCJpYAFPqg5lXKGc4hr1lCBXupFnfEU3JU5fgjG2LcSIGAZoqliGFfncbvy9i7b05nu7CJEsn4krtVEydfa0FZIZbkTDdBNcrPJa8yW9YRA7XwHT4BhFvI_cimORSMKEC9l79eIJpBnxVwbl6vEkSDFvf046I_ee-Y6dxO6G2wgUqhmUpuAm7Pa4aRiNH5S6dX5C8sXUCmt_GtEifpWpsvxwDvBl6wD9U9Afidso-PElQYdgjny_WKX_F1DVEQPPT3ORqRCZY_cgTVVTT2au6TvKY1T7E1hF8VKI5JoRbWsQxoRMVb7lHNuf6UiH0rbEZU3-CpzTbCyvICPdGjG5-TPy_i80NnSLYNt44E7-oBp9DRKHJwNGYud-FOpuXBNGu9fAurjZMoGxK5GIcJN6U0shKZHGE7soDW7cwLzDSNYW-iDa44qQWvKl424_M9U14O3My3rBRzNjh5xE1-fBS8cijfFa_eaBNfbaN70j8kJ6rWjJm6mZAFq8VDB03t8T4OoVEA",alt:"git add all files"})),(0,a.kt)("p",null,"Okay, let's finally ",(0,a.kt)("strong",{parentName:"p"},"commit")," our changes so we can create a snapshot of our work and complete the file status lifecycle."),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world")," directory, type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-\\"},"git commit -m \u201cmy first commit!\u201d\n")),(0,a.kt)("p",null,"Hit Enter. The response should look something like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/u/0/docs/ADP-6oEs1xx9KYAuo9BBOVEVj8m803SfCYAjxkkFg4l-0gtwgAwVoNDis03T2MSq1C0KWMvFcML6PfJdghrQR6izT9ICmdXPRwPPq5AR9uyL_WxG2YyoBFkvu_s0-er8dh6nbUyYusvZcop8UJZe5Fsy_mc8P_4KGhaAxHqzzZsHHy_ri1qrqyeQiH03KUeAkJYD13thU6Bnrpl-ESza2s1EbH-xDqlDwmb39aoVE2yeQrf-XWcM0yDJsQ_oy7-R88Oz0eap0c_Rlc-hPbIfcfmTOpNRPIiYo95PEzNutsWUZxkCtFKzec7lnYKR8mcbXiz_oFVLDwD3BSq2STuhaWJc3gwLsDqCC2uA_B1sPm00Gn7174KB9YxKH68hC96_vAZl7YZwNN1sZhPRiDfJgx1w5HEQjE9XCUa44oY9uDKCmpwYziceCvq1ptc8r3BX3qeKVYa_UMzpoXoSC5epPJbHKdK9ECy14UF6Ez6_BZ8AUqR-8pb1RxtZWbxLSrD4H-3eXrslPlx3BpeeDk7i3Bi57fTxzbglZPmEhxBMF_R6PqIVwuMXhKPT3UIWxwV0O7QefINv7t2toC4R_dwO7NO_dD1GP6XS95TfougkJeuwXUgjB7v-fQ5UMfOWx0qMv0Qp1SjS2QI27EIUh1QhV7w6B095h1lz2Y-9QsYXBVU-DchaCvkKFyTOBfLTJw4mEP8lKw57WQQPNksYCttuMkzIrLSTwiNzqpIajx1WH2YCgf8nW7ixKWcbeJrUmohQ6wvXdiv3FDXg2v-0emLrjxh-wSiwfvfPDoGps_OmuxwudDYIPFk0uNzDAiJ0I0Ww9SZFSRsGUvDAcAhtQ70R9ouXYM_TNodEfToIk0GmyAEvU5RTALfe35Y6wWT-PJqyel8dZZdMD7Ggw8BkwC0D01sBLZG21iFDqDfP3FkL7rcVWPxaiTzo9dKhBzBAxB2o_PbQjr4FKWyn-pI3_7n65B4rars-LaUvQh4Yte0z6pv7YozXriKfmFloBMF5QPaMgGd9dMAJpzl3v_ETMTIuvVMGkIcS1sc6-J8eqET8Pw",alt:"response from git commit"})),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"git commit")," command takes a snapshot of our project. The ",(0,a.kt)("inlineCode",{parentName:"p"},"- m")," option stands for \u201cmessage\u201d and is followed by a ",(0,a.kt)("strong",{parentName:"p"},"commit message")," in quotes. A ",(0,a.kt)("strong",{parentName:"p"},"commit message")," is a brief note attached to the commit and it makes it easier for us to reference the commit at a later time."),(0,a.kt)("p",null,"You can check that a commit was created by using the git command ",(0,a.kt)("inlineCode",{parentName:"p"},"git log")," in the terminal."),(0,a.kt)("p",null,"Now if you use ",(0,a.kt)("inlineCode",{parentName:"p"},"git status")," you should get:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/u/0/docs/ADP-6oH0BgJ2Xz7NFtrCq8RWkRcb4NwjiAzdU3DHwiW9F7gMrmyCQoMOyHAQvDnuQv5yVmp2aLuIohzADAWMUBNHknt0NzV3wB5IbBffgRRqnhXdTX_LH8wAooNQYmBd6IHE_8ZoPuoDxcpUme-AuKdw4Sy0-wQBkpehnUgSQW613enlXEJF1ckpFrqohJHMdJthdS5y29QrXsREEt6hohdpIYp6kZsxKRiDQywPAgkMOPAvWP4EtR5-8Gn7uYAqqRTGAmqkEvQMEBs2iHXf8R5ws4ynpZGtvipj_4QYn2MIKgfccGtCVlxeGBk_s0eIutP0-Eh_YJW8-D3zPFJnQlMpf0Oahq1OtpIgisnLn7o_mKtN9_IDyJUTJ4yZrXfndHQ1X2IqRVwYAdRiQPhlxZ0DnImZ7ig2JEVaEHDq6yEEK3J09f2Rme5lJ1nniPLGQ_HtQYuxarKgonwa5yx1ssRbznxlH548gKMTO95n2HMfUpgcb5cQR6mYvs2hH_QZ029tmln3Jtk4wSIVJJRZsWUFZS6pHpoqN0gqt2woK7WvFsvHH1ZSi1LKnDggmLoQ8VTsE3I73dAlLwJ7PNiINwJpUQ2jEYse7nOztODYDRoMCTm1j6LJmMXYlNXgxV3khvQVxBtH7SYQV9LM2T0tg3A0Z-8wj2deEx9wtovvmhidQeh2PL-O7y5BrsbUHnF5U6O-sbb7yAogq_Yy7U0bLbji_yKSyWSisUd5aa5e8I5uw2kogeLQrdSOfXf175I2gqVf4jBe4emqnPhWoaK1RpbFoNKKjvychCM61zFDQMoISXIYsZYnTuS6cMYYwFzu6nwAOL7XaNt8SMmpm1WN11KNdOME3EzK3X7nP8dF24FK079TVpz9UHKmjlgTkeF_jODSUcrv3JaZ8yuBIGcnTngcJJGL9wCqMuRQn1kmPDXuu2tM4989v2UHHaGqK7vDEABqxUlWInq2fu5_YKzwsZGKoQHHGTkKQMiIm5XKjhKj31WKNFzrNM2Z4k2h_KVO1c5_-sZvwsk1BnOQXIYa2f2vooBjUOK0Tdv7tc-T8g",alt:"reponse no changes"})),(0,a.kt)("p",null,"The response doesn\u2019t say this directly but ",(0,a.kt)("strong",{parentName:"p"},"Git")," is saying all files are now ",(0,a.kt)("strong",{parentName:"p"},"unmodified"),",meaning no new changes have happened since the last ",(0,a.kt)("strong",{parentName:"p"},"commit"),".   "),(0,a.kt)("p",null,"If we make changes to the ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world.html")," file now, the status would change again to ",(0,a.kt)("strong",{parentName:"p"},"modified.")," The status lifecycle of a ",(0,a.kt)("strong",{parentName:"p"},"tracked")," file repeats between ",(0,a.kt)("strong",{parentName:"p"},"unmodified"),", ",(0,a.kt)("strong",{parentName:"p"},"modified"),", ",(0,a.kt)("strong",{parentName:"p"},"staged"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/u/0/docs/ADP-6oHCc95R9beg4P9l_ie3BEriw9zsfxmZ4dY2-08ayxswU3gc4d2Edht7JgvQDuBILnfRf8tpAt6o9fKGu7Tk_ZvfXChLsDO0mAuG-p7YWEuAaFhfp83z1vLvGYCBkF-Y1FJ8si0nVk1axOXQlL3Uv03BABip8XWsOK6JoGRwFcXkeqOQgzgPzKAt0ccWyZUPzmBA0fjWiobDEyzYBMcllAQFVaDUZFL-dQvR5kWYCX1qhH11BxN8nML4fPYFRPwaQ2iaWRXWGobObCC4P44ZWtdI6uZuhKBUYl2FCA4cM8djYBiSbInXYaii_o5Z49dh4TheKA72ZgzbJ9JQiYblu0sFkLQ4xnX6YJviPp-lp822UBo7MZZ_z4aUsY_oUZnlB1O5x-mT9JK08SDnyNGMCZSxUfUk8JPuEtvR0-POOuWSyOR5ikUdYLS4bysRiqOju7u6Y3ypYqSGe2r133zMYsHbUYkV4qaFGWL8UCpo0bpmQLXbStz1TmvayRovzWT_3W_HMl1kDivwRufiukwGr3xkAcGzYzuItJZ2nv_ITjCeC5EzZVB0MNpBzMh_ZBA_MchejXWg9K4OgP5F_HybnIr9DrY5O0fiWR1JFgoUPVCJQw11XORAc3jsSR8iDymZ3Q76FUc87KiGhlzaTtqCz7tjv1SDtTZXjdIbVFVorjSkVn9LhWd0c2l9fLUc3OybLspnfFH6qOLyI6WVunofKJrVUChQ8uw3XCpl5GeieGFGF08Z0gmDB-BliGq0Xc8fv5dMj1XZuNYFnblEaFcpWt73f6a8o9rho8mvGzO5F02M3H4FQWPF91dmcsLy6jVtVuKoBZP6ima4SVSHeDwZtAjyPz39yV7GPFnXym2UepxRflYrvIWFbTbn3Ij_qpruk12HQjhEOu4iDWSw30f-IdTAgOZoms9c33p06ShghKxiwyzVjPGXs1AyM7RLxiwM2WFxocBWlX2ybqOm8W5V8PWzzr8MdaHJcVsYIyEWz9hx0bAem9E3nfKa3gnRTPEt7Pgb0MvbWDtpkboFNRWCzReVgQYO4Hue9PItkQ",alt:"status lifesycle loop"}),"\t\t"),(0,a.kt)("p",null,"Remember that a ",(0,a.kt)("strong",{parentName:"p"},"tracked")," file can have multiple statuses if some changes are ",(0,a.kt)("strong",{parentName:"p"},"staged")," under \u201cchanges to committed\u201d and others are not."),(0,a.kt)("h2",{id:"wrap-up"},"Wrap-up"),(0,a.kt)("p",null,"You should have some understanding how ",(0,a.kt)("strong",{parentName:"p"},"Git")," categorizes changes in your file and the status lifecycle of files."),(0,a.kt)("p",null,"Don\u2019t worry if this isn\u2019t all making sense. You won\u2019t be tested on ",(0,a.kt)("strong",{parentName:"p"},"Git")," status lifecycles of files. We offer this information now so you have some context for how ",(0,a.kt)("strong",{parentName:"p"},"Git")," works. When integrating ",(0,a.kt)("strong",{parentName:"p"},"Git")," into your workflow, use the command ",(0,a.kt)("inlineCode",{parentName:"p"},"git status")," often, especially before making a ",(0,a.kt)("strong",{parentName:"p"},"commit"),"."),(0,a.kt)("p",null,"In the next few lessons, we\u2019ll go over a practical use step-by-step guide for exactly how to integrate ",(0,a.kt)("strong",{parentName:"p"},"Git")," into your workflow and what relevant git commands you should know."))}u.isMDXComponent=!0}}]);