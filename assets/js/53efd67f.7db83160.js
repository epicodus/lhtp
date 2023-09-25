"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[29104],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),y=r,d=u["".concat(c,".").concat(y)]||u[y]||h[y]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},37109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"Asynchrony in JavaScript",id:"asynchrony_in_javascript",slug:"asynchrony_in_javascript",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0b_asynchrony_in_javascript.md"},i=void 0,s={unversionedId:"intermediate_javascript_classic/asynchrony-and-apis/asynchrony_in_javascript",id:"intermediate_javascript_classic/asynchrony-and-apis/asynchrony_in_javascript",title:"Asynchrony in JavaScript",description:"One of JavaScript's biggest strengths is the fact that code can be either synchronous or asynchronous. These terms can be confusing for new developers, but the good news is that you've already been working extensively with both synchronous and asynchronous code.",source:"@site/docs/intermediate_javascript_classic/5_asynchrony-and-apis/0b_asynchrony_in_javascript.md",sourceDirName:"intermediate_javascript_classic/5_asynchrony-and-apis",slug:"/intermediate_javascript_classic/asynchrony-and-apis/asynchrony_in_javascript",permalink:"/intermediate_javascript_classic/asynchrony-and-apis/asynchrony_in_javascript",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Asynchrony in JavaScript",id:"asynchrony_in_javascript",slug:"asynchrony_in_javascript",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0b_asynchrony_in_javascript.md"},sidebar:"intermediate_javascript_classic",previous:{title:"Asynchrony and APIs in JavaScript Objectives",permalink:"/intermediate_javascript_classic/asynchrony-and-apis/asynchrony_and_apis_in_javascript_objectives"},next:{title:"Introduction to APIs",permalink:"/intermediate_javascript_classic/asynchrony-and-apis/introduction_to_apis"}},c={},l=[],p={toc:l},u="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"One of JavaScript's biggest strengths is the fact that code can be either ",(0,r.kt)("strong",{parentName:"p"},"synchronous")," or ",(0,r.kt)("strong",{parentName:"p"},"asynchronous"),". These terms can be confusing for new developers, but the good news is that you've already been working extensively with both synchronous and asynchronous code."),(0,r.kt)("p",null,"Let's start by simplifying the difference between sync and async code."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Synchronous")," means the code runs ",(0,r.kt)("em",{parentName:"p"},"right now"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Asynchronous")," means the code will run ",(0,r.kt)("em",{parentName:"p"},"later"),"."))),(0,r.kt)("p",null,"In a nutshell, that's really the only difference. Logic problems like Roman Numerals, Shape Tracker and Pig Dice all rely heavily on synchronous code. For instance, if you look at the file that contains the logic for one of those projects, that is synchronous code. The JavaScript engine goes through each line of your business logic one at a time."),(0,r.kt)("p",null,"What about asynchronous code? When have we used that? A prime example is when our application needs ",(0,r.kt)("strong",{parentName:"p"},"user input")," to perform a desired behavior. When our application loads, we don't know when a user will click a button or fill out fields, but it will certainly happen later, not right now. In this situation, we use event listeners to wait and listen for an event that will happen later."),(0,r.kt)("p",null,"Why is JavaScript asynchronous? What would happen if it weren't?"),(0,r.kt)("p",null,"JavaScript is ",(0,r.kt)("strong",{parentName:"p"},"single-threaded")," and ",(0,r.kt)("strong",{parentName:"p"},"non-blocking"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Single-threaded")," means JavaScript can only do one thing at a time. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Non-blocking")," means the JavaScript engine won't wait until something is finished (if it's async code) before moving on to the next line of code.")),(0,r.kt)("p",null,"Imagine you throw a ball in the air, but you can only throw one at a time. This is the equivalent of ",(0,r.kt)("strong",{parentName:"p"},"single-threaded.")),(0,r.kt)("p",null,"However, once you throw a ball in the air, you can throw a second ball before the first lands. That's the equivalent of ",(0,r.kt)("strong",{parentName:"p"},"non-blocking.")," If you didn't have this non-blocking capacity, however, you wouldn't be able to do anything else while a ball is in the air. You wouldn't be able to throw another ball or move around or do anything at all. In other words, you'd freeze up."),(0,r.kt)("p",null,"Ouch. Nobody likes when the browser freezes up. It's one of the most frustrating UI experiences a user can have."),(0,r.kt)("p",null,"It may appear that a JavaScript application can do many things at the same time, but that's just because JavaScript does things very quickly. When an application does need to engage in long-running processes, it will do so (or at least should do so) through ",(0,r.kt)("strong",{parentName:"p"},"concurrency"),". Concurrency is the process of interweaving many tasks, doing a little of one and then a little of another, engaging in this process so quickly that it appears as if these tasks are occurring simultaneously. We won't be covering concurrency in depth, but at the very least, you should know what it means. If you would like to learn more about concurrency, you can do so ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop"},"on MDN's reference page on the event loop"),"."),(0,r.kt)("p",null,"Asynchrony is a cornerstone of JavaScript development. Sometimes we ",(0,r.kt)("em",{parentName:"p"},"need")," to implement it in our applications, such as when we make API calls. (We'll learn more about API calls in the next lesson.) In other situations we'll ",(0,r.kt)("em",{parentName:"p"},"choose")," to implement it. If a synchronous function takes a long time to process, for example, it will freeze up our application, so it would be better to make it async and concurrent. While there are many ways to use asynchrony in our code, we'll focus on learning about asynchronous code by making API calls."))}h.isMDXComponent=!0}}]);