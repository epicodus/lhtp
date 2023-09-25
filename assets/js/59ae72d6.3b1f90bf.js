"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[17944],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=i,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||n;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<n;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},81471:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var a=r(87462),i=(r(67294),r(3905));const n={title:"Whiteboard Practice: Closures",id:"whiteboard_practice_closures",slug:"whiteboard_practice_closures",hide_table_of_contents:!0,sidebar_position:22,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2_functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/1b_classwork_whiteboard_closure_practice.md"},o=void 0,c={unversionedId:"react_part_time_evening/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/whiteboard_practice_closures",id:"react_part_time_evening/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/whiteboard_practice_closures",title:"Whiteboard Practice: Closures",description:"You will get a chance to practice whiteboarding a lot during this course section. Time will be set aside during most class sessions at the discretion of your teacher. Use this time wisely to improve both your whiteboarding and functional programming skills!",source:"@site/docs/react_part_time_evening/2_functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/1b_classwork_whiteboard_closure_practice.md",sourceDirName:"react_part_time_evening/2_functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78",slug:"/react_part_time_evening/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/whiteboard_practice_closures",permalink:"/lhtp/react_part_time_evening/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/whiteboard_practice_closures",draft:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{title:"Whiteboard Practice: Closures",id:"whiteboard_practice_closures",slug:"whiteboard_practice_closures",hide_table_of_contents:!0,sidebar_position:22,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2_functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/1b_classwork_whiteboard_closure_practice.md"},sidebar:"react_part_time_evening",previous:{title:"Coin Counter, Sieve",permalink:"/lhtp/react_part_time_evening/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/coin_counter_sieve"},next:{title:"Whiteboard Practice: Recursion",permalink:"/lhtp/react_part_time_evening/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/whiteboard_practice_recursion"}},l={},s=[{value:"Practice with Closures and Currying",id:"practice-with-closures-and-currying",level:3},{value:"Problem #1",id:"problem-1",level:4},{value:"Problem #2",id:"problem-2",level:4},{value:"Problem #3 (Harder)",id:"problem-3-harder",level:4},{value:"Problem #4 (Harder)",id:"problem-4-harder",level:4}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You will get a chance to practice whiteboarding a lot during this course section. Time will be set aside during most class sessions at the discretion of your teacher. Use this time wisely to improve both your whiteboarding and functional programming skills!"),(0,i.kt)("h3",{id:"practice-with-closures-and-currying"},"Practice with Closures and Currying"),(0,i.kt)("p",null,"Alternate problem #1 and #2 with your pair. Then alternate problem #3 and #4."),(0,i.kt)("h4",{id:"problem-1"},"Problem #1"),(0,i.kt)("p",null,"Use a closure to create multiple functions for adding a prefix to a name. The prefix could be Doctor, Duchess, Sir, and so on."),(0,i.kt)("p",null,"It should be possible to create a new prefix function like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const prefixSir = addPrefix("Sir");\n')),(0,i.kt)("h4",{id:"problem-2"},"Problem #2"),(0,i.kt)("p",null,"Use a closure to create multiple functions for making various animal noises. For example, it should be possible to do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const lionSound = soundMaker("roar");\nconst mouseSound = soundMaker("squeak");\n')),(0,i.kt)("h4",{id:"problem-3-harder"},"Problem #3 (Harder)"),(0,i.kt)("p",null,"Use closures to create multiple functions for adding both a prefix ",(0,i.kt)("strong",{parentName:"p"},"and")," a suffix to a name. For example, it should be possible to do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const misterJunior = nameEnhancer("Mister")("Junior");\nconst duchessThird = nameEnhancer("Duchess")("The Third");\n')),(0,i.kt)("h4",{id:"problem-4-harder"},"Problem #4 (Harder)"),(0,i.kt)("p",null,"Use closures to create multiple functions to first add to and then multiply a value. It should be possible to do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const addTwoMultiplyByThree = addaMult(2)(3);\nconst addFiveMultiplyByNine = addaMult(5)(9);\n")))}d.isMDXComponent=!0}}]);