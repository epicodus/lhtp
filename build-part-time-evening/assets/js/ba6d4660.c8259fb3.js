"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[22215],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7896),i=(n(2784),n(30876));const a={title:"Practice: Writing Functions",id:"practice-writing-functions",slug:"practice-writing-functions",hide_table_of_contents:!0,sidebar_position:28,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1c_classwork_practice_writing_functions.md"},o=void 0,l={unversionedId:"introduction-to-programming/javascript-and-web-browsers/practice-writing-functions",id:"introduction-to-programming/javascript-and-web-browsers/practice-writing-functions",title:"Practice: Writing Functions",description:"Goal",source:"@site/docs/introduction-to-programming/3_javascript-and-web-browsers/1c-classwork-practice-writing-functions.md",sourceDirName:"introduction-to-programming/3_javascript-and-web-browsers",slug:"/introduction-to-programming/javascript-and-web-browsers/practice-writing-functions",permalink:"/introduction-to-programming/javascript-and-web-browsers/practice-writing-functions",draft:!1,tags:[],version:"current",sidebarPosition:28,frontMatter:{title:"Practice: Writing Functions",id:"practice-writing-functions",slug:"practice-writing-functions",hide_table_of_contents:!0,sidebar_position:28,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1c_classwork_practice_writing_functions.md"},sidebar:"introduction-to-programming",previous:{title:"Writing Functions",permalink:"/introduction-to-programming/javascript-and-web-browsers/writing-functions"},next:{title:"How Web Browsers Work",permalink:"/introduction-to-programming/javascript-and-web-browsers/how-web-browsers-work"}},c={},s=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Writing Custom Functions",id:"writing-custom-functions",level:3}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Goal:"),'  In the "Writing Functions" lessons, we learned:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'When we define a function, this is called a "function declaration"'),(0,i.kt)("li",{parentName:"ul"},'When we execute a function\'s code, this is called "calling a function"'),(0,i.kt)("li",{parentName:"ul"},"The function body contains all of the statements that should be executed when a function is called."),(0,i.kt)("li",{parentName:"ul"},"Functions can optionally have parameters \u2014 placeholder variables that let us pass data (like a string or number) into the function."),(0,i.kt)("li",{parentName:"ul"},"When a function has parameters, we must pass in arguments for each parameter. The data we pass into functions are called arguments, and these are assigned as the value of the parameters."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"return")," keyword tells JavaScript to return the code to the right of ",(0,i.kt)("inlineCode",{parentName:"li"},"return")," outside of the function."),(0,i.kt)("li",{parentName:"ul"},"Don't abbreviate variable names because it can make your code hard to understand to other people (including your future self). ")),(0,i.kt)("p",null,"Begin familiarizing yourself with writing custom functions in the DevTools console by completing the exercises detailed below. To make new lines and indentation in the DevTools console:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"shift")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"enter")," to create a new line."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"tab")," to tab over multiple spaces for indentation. "),(0,i.kt)("li",{parentName:"ul"},"To configure the console to use 2 spaces for indentation with ",(0,i.kt)("inlineCode",{parentName:"li"},"tab"),", in the DevTools window, go to ",(0,i.kt)("em",{parentName:"li"},"Settings")," > ",(0,i.kt)("em",{parentName:"li"},"Preferences")," > scroll to the ",(0,i.kt)("em",{parentName:"li"},"Sources"),' section > set "Default indentation" to 2 spaces.')),(0,i.kt)("h2",{id:"warm-up"},"Warm Up"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How do we call a function?"),(0,i.kt)("li",{parentName:"ul"},"How do we include an argument when we call a function?"),(0,i.kt)("li",{parentName:"ul"},"What is a parameter, and how do we create one in a function declaration?"),(0,i.kt)("li",{parentName:"ul"},"What is a return value? How do we tell our functions what value to return?")),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"writing-custom-functions"},"Writing Custom Functions"),(0,i.kt)("p",null,"Write a custom function for each of the following prompts. Then, call the function providing the necessary arguments to see if your function successfully returns the correct value."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Write a function that takes somebody's name and returns a greeting that includes their name."),(0,i.kt)("li",{parentName:"ul"},"Write a function to subtract two numbers. The function should return the result of the subtraction."),(0,i.kt)("li",{parentName:"ul"},"Write a function to multiply two numbers. Then create a new function called ",(0,i.kt)("inlineCode",{parentName:"li"},"threeTimes")," to multiply three numbers together."),(0,i.kt)("li",{parentName:"ul"},"Write a function to divide two numbers. Then write a new function called ",(0,i.kt)("inlineCode",{parentName:"li"},"remainder")," to find the remainder of two numbers. Return the remainder as a string.")))}m.isMDXComponent=!0}}]);