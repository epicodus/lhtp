"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[22815],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(o),c=a,d=h["".concat(l,".").concat(c)]||h[c]||m[c]||i;return o?r.createElement(d,n(n({ref:t},p),{},{components:o})):r.createElement(d,n({ref:t},p))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,n=new Array(i);n[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,n[1]=s;for(var u=2;u<i;u++)n[u]=o[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},97049:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=o(87462),a=(o(67294),o(3905));const i={title:"VS Code Live Share",id:"vs-code-live-share",slug:"vs-code-live-share",hide_table_of_contents:!0,sidebar_position:6,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0_5_vs_code_live_share.md"},n=void 0,s={unversionedId:"introduction-to-programming/git-html-and-css/vs-code-live-share",id:"introduction-to-programming/git-html-and-css/vs-code-live-share",title:"VS Code Live Share",description:"We\u2019re building up to begin writing actual code but first we need to talk about VS Code Live Share: a collaboration tool that allows us to share a coding workspace with others.",source:"@site/docs/introduction-to-programming/1_git-html-and-css/0-5-vs-code-live-share.md",sourceDirName:"introduction-to-programming/1_git-html-and-css",slug:"/introduction-to-programming/git-html-and-css/vs-code-live-share",permalink:"/introduction-to-programming/git-html-and-css/vs-code-live-share",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"VS Code Live Share",id:"vs-code-live-share",slug:"vs-code-live-share",hide_table_of_contents:!0,sidebar_position:6,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0_5_vs_code_live_share.md"},sidebar:"introduction-to-programming",previous:{title:"The Terminal and the Command Line",permalink:"/introduction-to-programming/git-html-and-css/the-terminal-and-the-command-line"},next:{title:"HyperText Markup Lanuage (HTML)",permalink:"/introduction-to-programming/git-html-and-css/hypertext-markup-lanuage-html"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Requirements:",id:"requirements",level:3},{value:"Important new terminology in this exercise:",id:"important-new-terminology-in-this-exercise",level:3},{value:"Project Setup for Live Share",id:"project-setup-for-live-share",level:3},{value:"Collaborate with Live Share",id:"collaborate-with-live-share",level:2},{value:"A Few Notes:",id:"a-few-notes",level:3},{value:"Troubleshooting Live Share",id:"troubleshooting-live-share",level:3},{value:"Useful Features of Live Share",id:"useful-features-of-live-share",level:3},{value:"Wrap-up",id:"wrap-up",level:2}],p={toc:u},h="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(h,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We\u2019re building up to begin writing actual code but first we need to talk about VS Code ",(0,a.kt)("strong",{parentName:"p"},"Live Share"),": a collaboration tool that allows us to share a coding workspace with others."),(0,a.kt)("p",null,"Imagine you are writing code and you may be working with a peer or need help from an instructor. How do you share your code with them? Screen sharing is one option but it only allows other people to view your code. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Live Share")," in contrast allows others to view and edit code on your computer. ",(0,a.kt)("strong",{parentName:"p"},"Live Share")," is a VS Code extension that is very popular in the tech field and makes remote collaboration a lot easier."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("h3",{id:"requirements"},"Requirements:"),(0,a.kt)("p",null,"VS Code Live Share extension is installed following this lesson: ",(0,a.kt)("a",{parentName:"p",href:"https://new.learnhowtoprogram.com/prework/getting-started-with-working-remotely/installing-and-using-vs-code-live-share"},"Installing and Using VS Code Live Share")),(0,a.kt)("h3",{id:"important-new-terminology-in-this-exercise"},"Important new terminology in this exercise:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Live Share, Live Share session"),(0,a.kt)("li",{parentName:"ul"},"Starting or hosting a Live Share session"),(0,a.kt)("li",{parentName:"ul"},"Joining and Live Share session")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Let's Pair Program!",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Everyone in the pair group is sharing a computer:"),(0,a.kt)("br",{parentName:"p"}),"\n","Go through the following instructions together. When you get to the point where you should join a Live Share session, collaborate with other pair groups in-person or reach out to a remote pair group on Discord."),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"If pairing remotely:"),(0,a.kt)("br",{parentName:"p"}),"\n","Each person in the pair group should take a turn going through the lessons and hosting a Live Share session. Other members of the pair group can join that session.")),(0,a.kt)("h3",{id:"project-setup-for-live-share"},"Project Setup for Live Share"),(0,a.kt)("p",null,"Use the project you set up in the previous lesson or recreate it again if needed."),(0,a.kt)("p",null,"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"my-first-project")," in VS Code. "),(0,a.kt)("p",null,"You should see ",(0,a.kt)("inlineCode",{parentName:"p"},"hi.txt")," in the left-hand pane of VS Code. This is called a file tree. Currently it is listing all the files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"my-first-project")," folder. "),(0,a.kt)("p",null,"If the tree isn\u2019t showing, click the top left ",(0,a.kt)("em",{parentName:"p"},"Explorer")," icon (cirled in red)."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/YtHEDYA.png",alt:"my first project file tree with explore icon circled in red"})),(0,a.kt)("h2",{id:"collaborate-with-live-share"},"Collaborate with Live Share"),(0,a.kt)("p",null,"Since ",(0,a.kt)("strong",{parentName:"p"},"Live Share")," is a well supported tool of VS Code, let's learn how to use Live Share by looking at the documentation."),(0,a.kt)("p",null,"Work through the steps on this page: ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/learn/collaboration/live-share"},"Collaborate with Live Share"),". By the end of this page you should successfully be able to start and join a ",(0,a.kt)("strong",{parentName:"p"},"Live Share")," session."),(0,a.kt)("h3",{id:"a-few-notes"},"A Few Notes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Signing in via GitHub"),".",(0,a.kt)("br",{parentName:"li"}),"You will be prompted to sign in to use Live Share via your GitHub account. If you don\u2019t have a GitHub account at this moment it is okay to continue as anonymous for now. \\")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"The big blue \u201cShare\u201d button is the same as \u201cStart collaboration session.\u201d"),(0,a.kt)("br",{parentName:"li"}),"Your Live Share menu might look different than the image example in the Live Share documentation. That's okay. Sometimes the user interface (UI) of programs change and the documentation is slow to update. This image below is closer to what you should expect but there may still be some differences. ")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/3CDXaXl.png",alt:"example of live share menu in vs code"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Files need to be saved to work with Live Share."),(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("strong",{parentName:"li"},"Live Share")," may not initially share a file that is unsaved.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Click \u201cInvite participants\u201d to copy the invite link again."),(0,a.kt)("br",{parentName:"li"}),"When you start a ",(0,a.kt)("strong",{parentName:"li"},"Live Share")," session, a link to invite others to collaborate is automatically copied to your clipboard. If you need to get the link again, just click on \u201cInvite participants\u201d, which is highlighted in the image below.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/O2th85I.png",alt:"static image of invite participants button in live share"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"How to stop a Live Share session."))),(0,a.kt)("p",null,"Hover your mouse over the Live Share menu and, across from \u201cSESSION DETAILS\u201d, will appear an icon circle with a strike through it. Click this icon to end the ",(0,a.kt)("strong",{parentName:"p"},"Live Share")," session."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/RBhbMAP.png",alt:"static image how to end live share session"})),(0,a.kt)("h3",{id:"troubleshooting-live-share"},"Troubleshooting Live Share"),(0,a.kt)("p",null,"If you\u2019re running into a problem using ",(0,a.kt)("strong",{parentName:"p"},"Live Share"),", see if you can find a solution to that problem following ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/visualstudio/liveshare/troubleshooting"},"Microsoft's Troubleshooting Visual Studio Live Share")," documentation. The tool you are using is VS Code."),(0,a.kt)("p",null,"Reach out to an instructor if there is still an issue before moving on."),(0,a.kt)("h3",{id:"useful-features-of-live-share"},"Useful Features of Live Share"),(0,a.kt)("p",null,"Live share offers a lot of useful features but here are the most relevant ones for you at this time. Take the time you need now to explore these features and set up ",(0,a.kt)("strong",{parentName:"p"},"Live Share")," to your liking."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Let's Pair Program!",(0,a.kt)("br",{parentName:"p"}),"\n","The resources we're sharing on Live Share demonstrate that any participants in a Live Share session can work simultaneously. While this is an amazing feature, remember that it is not our goal for effective pair programming. Pair programming is not about outputting large amounts of code or getting work done as fast as possible. Right now we are using pair programming to learn from each other. "),(0,a.kt)("p",{parentName:"blockquote"},"So remember, when working remotely, only one person at a time should be typing. ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/visualstudio/liveshare/use/coedit-follow-focus-visual-studio-code#follow-along-with-a-collaborator"},"Follow along with a collaborator"),(0,a.kt)("br",{parentName:"p"}),"\n","These features allow you to more easily keep track of other participants in the ",(0,a.kt)("strong",{parentName:"p"},"Live Share")," session.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/visualstudio/liveshare/use/enable-accessibility-features-visual-studio-code"},"Enable accessibility features"),(0,a.kt)("br",{parentName:"p"}),"\n","Explore these features and take time now to set them up if desired.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/visualstudio/liveshare/use/coedit-follow-focus-visual-studio-code"},"Coedit"),(0,a.kt)("br",{parentName:"p"}),"\n","The start of this page offers some potential useful setup configurations."))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/visualstudio/liveshare/use/share-project-join-session-visual-studio-code"},"Share a project and join a collaboration session in Visual Studio Code"),(0,a.kt)("br",{parentName:"li"}),"This page goes into more detail and additional options on how to start and join a ",(0,a.kt)("strong",{parentName:"li"},"Live Share")," session.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Let's Pair Program!",(0,a.kt)("br",{parentName:"p"}),"\n","Continue to try out Live Share within your pair group or with another pair group. Try having one person type one of the questions for other people in the Live Share session to answer."),(0,a.kt)("p",{parentName:"blockquote"},"What is your favorite time of the day and why?",(0,a.kt)("br",{parentName:"p"}),"\n","What is your dream job?",(0,a.kt)("br",{parentName:"p"}),"\n","What are three of your favorite foods?",(0,a.kt)("br",{parentName:"p"}),"\n","What would be the most exciting scientific discovery ever? (Examples: time travel, recreating dinosaurs, flying cars, etc.)",(0,a.kt)("br",{parentName:"p"}),"\n","Would you rather travel back in time to meet your ancestors or to the future to meet your descendants? Why?",(0,a.kt)("br",{parentName:"p"}),"\n","What is your most used emoji?",(0,a.kt)("br",{parentName:"p"}),"\n","What's your favorite sandwich and why?")),(0,a.kt)("h2",{id:"wrap-up"},"Wrap-up"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Live Share")," is a robust tool but you\u2019ll become more familiar with it over time. We\u2019ll share more features of Live Share as they become relevant."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note!",(0,a.kt)("br",{parentName:"p"}),"\n","The terminal is direct access to your computer. So for security reasons the custom is that the person who owns the computer should be the only one to type in their terminal. This might break the turn taking rules of pair programming at times. For example, the driver might need to ask the navigator to type something in the terminal because it's the navigator's terminal on their computer. By default VS Code restricts terminal access to Live Share participants to read-only.")))}m.isMDXComponent=!0}}]);