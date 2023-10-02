"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[30381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=i,g=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},47902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={title:"Functional Programming with JavaScript Objectives",id:"functional-programming-with-javascript-objectives",slug:"functional-programming-with-javascript-objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0a_functional_programming_objectives_old.md",paginationPrev:null},a=void 0,c={unversionedId:"react-part-time-evening/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/functional-programming-with-javascript-objectives",id:"react-part-time-evening/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/functional-programming-with-javascript-objectives",title:"Functional Programming with JavaScript Objectives",description:"Up to this point, we have focused on object-oriented programming. However, there are other paradigms beyond object-oriented programming. One of the most useful and popular paradigms is functional programming. This course section, we will focus on learning how to program using a functional approach.",source:"@site/docs/react-part-time-evening/2_functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/0a-functional-programming-objectives-old.md",sourceDirName:"react-part-time-evening/2_functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78",slug:"/react-part-time-evening/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/functional-programming-with-javascript-objectives",permalink:"/react-part-time-evening/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/functional-programming-with-javascript-objectives",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Functional Programming with JavaScript Objectives",id:"functional-programming-with-javascript-objectives",slug:"functional-programming-with-javascript-objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0a_functional_programming_objectives_old.md",paginationPrev:null},sidebar:"react-part-time-evening",previous:{title:"React (Part-Time - Evening)",permalink:"/react-part-time-evening"},next:{title:"Introduction to Functional Programming",permalink:"/react-part-time-evening/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/introduction-to-functional-programming"}},l={},p=[{value:"Independent Project Objectives",id:"independent-project-objectives",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Up to this point, we have focused on object-oriented programming. However, there are other paradigms beyond object-oriented programming. One of the most useful and popular paradigms is ",(0,i.kt)("strong",{parentName:"p"},"functional programming"),". This course section, we will focus on learning how to program using a functional approach."),(0,i.kt)("p",null,"Having at least a basic understanding of functional programming is essential to progressing as a developer. Just as importantly, being familiar is also essential to becoming a good React developer because React is functional, not object-oriented."),(0,i.kt)("p",null,"It's important to note that functional programming is very challenging for people at first. It is okay if you do not understand all the concepts covered in this course section. Instead, this is an opportunity to get exposure to and work towards understanding important computer programming concepts that will help you advance your career."),(0,i.kt)("p",null,"In this course section, we'll cover the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pure functions"),(0,i.kt)("li",{parentName:"ul"},"First class functions"),(0,i.kt)("li",{parentName:"ul"},"Higher order functions"),(0,i.kt)("li",{parentName:"ul"},"Immutability"),(0,i.kt)("li",{parentName:"ul"},"Closures"),(0,i.kt)("li",{parentName:"ul"},"Currying functions"),(0,i.kt)("li",{parentName:"ul"},"Recursion"),(0,i.kt)("li",{parentName:"ul"},"Composition over inheritance"),(0,i.kt)("li",{parentName:"ul"},"JavaScript methods commonly used for functional programming")),(0,i.kt)("h2",{id:"independent-project-objectives"},"Independent Project Objectives"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"For this course section, the independent project will be different from previous weeks. You will spend your normally scheduled independent project time studying for a whiteboard technical interview. Then, you will take part in a whiteboard technical interview with your peers. You will submit peer evaluations for the technical interviews you participate in and also submit your whiteboard solution in lieu of the usual independent project. More details on technical whiteboarding will be provided in this weekend's homework."),(0,i.kt)("p",null,"This course section's group whiteboard interview will be reviewed for the following objectives:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Whiteboard solution has been submitted."),(0,i.kt)("li",{parentName:"ul"},"Whiteboard interview meets all requirements (based on peer feedback)."),(0,i.kt)("li",{parentName:"ul"},"Your evaluations for peers are complete and include constructive feedback.")))}m.isMDXComponent=!0}}]);