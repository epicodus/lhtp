"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[62031],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>h});var a=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,i=function(e,r){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),s=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):n(n({},r),e)),t},u=function(e){var r=s(e.components);return a.createElement(l.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=i,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(h,n(n({ref:r},u),{},{components:t})):a.createElement(h,n({ref:r},u))}));function h(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,n=new Array(o);n[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[p]="string"==typeof e?e:i,n[1]=c;for(var s=2;s<o;s++)n[s]=t[s];return a.createElement.apply(null,n)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},28604:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const o={title:"2. Whiteboard Practice: Closures",id:"whiteboard_practice_closures",slug:"whiteboard_practice_closures",hide_table_of_contents:!0,sidebar_position:22,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2_functional-programming-with-javascript/1b_classwork_whiteboard_closure_practice.md"},n=void 0,c={unversionedId:"react_classic/functional-programming-with-javascript/whiteboard_practice_closures",id:"react_classic/functional-programming-with-javascript/whiteboard_practice_closures",title:"2. Whiteboard Practice: Closures",description:"You will get a chance to practice whiteboarding a lot during this course section. Time will be set aside during most class sessions at the discretion of your teacher. Use this time wisely to improve both your whiteboarding and functional programming skills!",source:"@site/docs/react_classic/2_functional-programming-with-javascript/1b_classwork_whiteboard_closure_practice.md",sourceDirName:"react_classic/2_functional-programming-with-javascript",slug:"/react_classic/functional-programming-with-javascript/whiteboard_practice_closures",permalink:"/lhtp/react_classic/functional-programming-with-javascript/whiteboard_practice_closures",draft:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{title:"2. Whiteboard Practice: Closures",id:"whiteboard_practice_closures",slug:"whiteboard_practice_closures",hide_table_of_contents:!0,sidebar_position:22,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2_functional-programming-with-javascript/1b_classwork_whiteboard_closure_practice.md"},sidebar:"react_classic",previous:{title:"1. Coin Counter, Sieve",permalink:"/lhtp/react_classic/functional-programming-with-javascript/coin_counter_sieve"},next:{title:"3. Whiteboard Practice: Recursion",permalink:"/lhtp/react_classic/functional-programming-with-javascript/whiteboard_practice_recursion"}},l={},s=[{value:"Practice with Closures and Currying",id:"practice-with-closures-and-currying",level:3},{value:"Problem #1",id:"problem-1",level:4},{value:"Problem #2",id:"problem-2",level:4},{value:"Problem #3 (Harder)",id:"problem-3-harder",level:4},{value:"Problem #4 (Harder)",id:"problem-4-harder",level:4}],u={toc:s},p="wrapper";function d(e){let{components:r,...t}=e;return(0,i.kt)(p,(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You will get a chance to practice whiteboarding a lot during this course section. Time will be set aside during most class sessions at the discretion of your teacher. Use this time wisely to improve both your whiteboarding and functional programming skills!"),(0,i.kt)("h3",{id:"practice-with-closures-and-currying"},"Practice with Closures and Currying"),(0,i.kt)("p",null,"Alternate problem #1 and #2 with your pair. Then alternate problem #3 and #4."),(0,i.kt)("h4",{id:"problem-1"},"Problem #1"),(0,i.kt)("p",null,"Use a closure to create multiple functions for adding a prefix to a name. The prefix could be Doctor, Duchess, Sir, and so on."),(0,i.kt)("p",null,"It should be possible to create a new prefix function like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const prefixSir = addPrefix("Sir");\n')),(0,i.kt)("h4",{id:"problem-2"},"Problem #2"),(0,i.kt)("p",null,"Use a closure to create multiple functions for making various animal noises. For example, it should be possible to do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const lionSound = soundMaker("roar");\nconst mouseSound = soundMaker("squeak");\n')),(0,i.kt)("h4",{id:"problem-3-harder"},"Problem #3 (Harder)"),(0,i.kt)("p",null,"Use closures to create multiple functions for adding both a prefix ",(0,i.kt)("strong",{parentName:"p"},"and")," a suffix to a name. For example, it should be possible to do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const misterJunior = nameEnhancer("Mister")("Junior");\nconst duchessThird = nameEnhancer("Duchess")("The Third");\n')),(0,i.kt)("h4",{id:"problem-4-harder"},"Problem #4 (Harder)"),(0,i.kt)("p",null,"Use closures to create multiple functions to first add to and then multiply a value. It should be possible to do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const addTwoMultiplyByThree = addaMult(2)(3);\nconst addFiveMultiplyByNine = addaMult(5)(9);\n")))}d.isMDXComponent=!0}}]);