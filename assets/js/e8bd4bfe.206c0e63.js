"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[57349],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),v=o,m=u["".concat(l,".").concat(v)]||u[v]||h[v]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=v;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},83899:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={title:"VS Code Live Server",id:"vs_code_live_server",slug:"vs_code_live_server",hide_table_of_contents:!0,sidebar_position:8,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1_git-html-and-css/1_1_vs_code_live_server.md"},a=void 0,s={unversionedId:"introduction_to_programming_classic/git-html-and-css/vs_code_live_server",id:"introduction_to_programming_classic/git-html-and-css/vs_code_live_server",title:"VS Code Live Server",description:"Before we start writing HTML and creating our own webpages, we want to show you Live Server (not to be confused with Live Share): a VS Code extension that allows you to launch your web pages in the browser and reloads pages when changes are made.",source:"@site/docs/introduction_to_programming_classic/1_git-html-and-css/1_1_vs_code_live_server.md",sourceDirName:"introduction_to_programming_classic/1_git-html-and-css",slug:"/introduction_to_programming_classic/git-html-and-css/vs_code_live_server",permalink:"/lhtp/introduction_to_programming_classic/git-html-and-css/vs_code_live_server",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"VS Code Live Server",id:"vs_code_live_server",slug:"vs_code_live_server",hide_table_of_contents:!0,sidebar_position:8,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1_git-html-and-css/1_1_vs_code_live_server.md"},sidebar:"introduction_to_programming_classic",previous:{title:"HyperText Markup Lanuage (HTML)",permalink:"/lhtp/introduction_to_programming_classic/git-html-and-css/hypertext_markup_lanuage_html"},next:{title:"HTML Elements",permalink:"/lhtp/introduction_to_programming_classic/git-html-and-css/html_elements"}},l={},p=[{value:"Using Live Server",id:"using-live-server",level:2},{value:"Using Live Server with Live Share",id:"using-live-server-with-live-share",level:2}],c={toc:p},u="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Before we start writing HTML and creating our own webpages, we want to show you ",(0,o.kt)("strong",{parentName:"p"},"Live Server")," (not to be confused with Live Share): a VS Code extension that allows you to launch your web pages in the browser and reloads pages when changes are made."),(0,o.kt)("p",null,"You can open any HTML file in your browser without VS Code and without ",(0,o.kt)("strong",{parentName:"p"},"Live Server"),". However, without this extension, you would have to click the refresh button in the browser every time you made a change to the HTML document in order to see the changes displayed in the browser. This would become tedious very quickly. "),(0,o.kt)("p",null,"Everytime we make a change in our HTML document, we want to see the changes in our web browser instantly. ",(0,o.kt)("strong",{parentName:"p"},"Live Server")," updates your webpage when you save your HTML file."),(0,o.kt)("h2",{id:"using-live-server"},"Using Live Server"),(0,o.kt)("p",null,"To use ",(0,o.kt)("strong",{parentName:"p"},"Live Server"),", follow the directions under ",(0,o.kt)("strong",{parentName:"p"},"Shortcuts to Start/Stop Server")," on the ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"},"Live Server webpage"),". You can also install Live Server from this page if you haven\u2019t already."),(0,o.kt)("p",null,"Try it out yourself as well. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a file called in",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," (The file name can be whatever you want). ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open that file in VS Code.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy and paste this HTML into your html file:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<!DOCTYPE html>\n<html lang="en-US">\n<body>\n    <p>This website is running with Live Server!</p>\n</body>\n</html> \n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Right click on that file and select \u201cOpen with Live Server.\u201d",(0,o.kt)("br",{parentName:"li"}),"The browser should open and you should see the text above displayed in the browser! Try editing the text in the HTML document to see what happens.")),(0,o.kt)("h2",{id:"using-live-server-with-live-share"},"Using Live Server with Live Share"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Live Share")," is a separate VS Code extension that allows you to collaborate with others but it works well with ",(0,o.kt)("strong",{parentName:"p"},"Live Server"),". After you start a ",(0,o.kt)("strong",{parentName:"p"},"Live Share")," session, go to the ",(0,o.kt)("strong",{parentName:"p"},"Live Share")," session menu in VS Code. Below \u201cShared Servers\u201d you will see an option to view the Live Server (highlighted in the image below). This allows anyone working with you, even if they\u2019re remote, to also view your website."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/qoTC6aX.png",alt:"static image live server in live share menu"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Let's Pair Program!",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"If Everyone in the pair group is sharing a computer:"),(0,o.kt)("br",{parentName:"p"}),"\n","Use Live Server without Live Share when working. Your pair group will not need to use Live Share regularly but be prepared to start a Live Share session if a remote peer or instructor needs to see your code."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"If pairing remotely:"),(0,o.kt)("br",{parentName:"p"}),"\n","The person who starts the coding project on their computer will need to be the one to host the Live Share session and start the Live Server. From there, people in the pair group can switch off between who is driver and who is navigator by taking turns typing in the Live Share session.")))}h.isMDXComponent=!0}}]);