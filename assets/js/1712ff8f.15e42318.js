"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[24941],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),u=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,h=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return r?o.createElement(h,i(i({ref:t},c),{},{components:r})):o.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54332:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const a={title:"Practice: Looping with for",id:"practice-looping-with-for",slug:"practice-looping-with-for",hide_table_of_contents:!0,sidebar_position:36,day:"wednesday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3d_classwork_practice_looping_with_for.md"},i=void 0,l={unversionedId:"introduction-to-programming/arrays-and-looping/practice-looping-with-for",id:"introduction-to-programming/arrays-and-looping/practice-looping-with-for",title:"Practice: Looping with for",description:"Goal",source:"@site/docs/introduction-to-programming/3_arrays-and-looping/3d-classwork-practice-looping-with-for.md",sourceDirName:"introduction-to-programming/3_arrays-and-looping",slug:"/introduction-to-programming/arrays-and-looping/practice-looping-with-for",permalink:"/introduction-to-programming/arrays-and-looping/practice-looping-with-for",draft:!1,tags:[],version:"current",sidebarPosition:36,frontMatter:{title:"Practice: Looping with for",id:"practice-looping-with-for",slug:"practice-looping-with-for",hide_table_of_contents:!0,sidebar_position:36,day:"wednesday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3d_classwork_practice_looping_with_for.md"},sidebar:"introduction-to-programming",previous:{title:"Looping with for",permalink:"/introduction-to-programming/arrays-and-looping/looping-with-for"},next:{title:"When to use for",permalink:"/introduction-to-programming/arrays-and-looping/when-to-use-for"}},p={},u=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Count Up By",id:"count-up-by",level:3},{value:"Turn forEach() into For",id:"turn-foreach-into-for",level:3},{value:"Word Puzzle",id:"word-puzzle",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],c={toc:u},s="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Goal"),":  In the last lesson, we learned:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The three parameters of a ",(0,n.kt)("inlineCode",{parentName:"li"},"for")," loop"),(0,n.kt)("li",{parentName:"ul"},"How to use a ",(0,n.kt)("inlineCode",{parentName:"li"},"for")," loop both with and without arrays")),(0,n.kt)("p",null,"Practice utilizing for loops in a variety of ways by completing one of the exercises detailed below."),(0,n.kt)("h2",{id:"warm-up"},"Warm Up"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"What is the difference between ",(0,n.kt)("inlineCode",{parentName:"li"},"for")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.forEach()")," loops? Why should you generally favor ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.forEach()"),"?"),(0,n.kt)("li",{parentName:"ul"},"How does a for loop know when to stop looping?"),(0,n.kt)("li",{parentName:"ul"},"What is the last parameter in a ",(0,n.kt)("inlineCode",{parentName:"li"},"for")," loop and what is it for?")),(0,n.kt)("h2",{id:"code"},"Code"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Complete one of the exercises below."),(0,n.kt)("h3",{id:"count-up-by"},"Count Up By"),(0,n.kt)("p",null,"Create a program that takes two numbers \u2014 one to count to and another to determine what multiple to use to get there."),(0,n.kt)("p",null,"Here is some sample input:"),(0,n.kt)("br",null),"Count to:  30 ",(0,n.kt)("br",null),"Count by:  5 ",(0,n.kt)("br",null),"Output: 5, 10, 15, 20, 25, 30 ",(0,n.kt)("br",null),(0,n.kt)("p",null,"Count to:  50 ",(0,n.kt)("br",null),"\nCount by: 7 ",(0,n.kt)("br",null),"\nOutput:  7, 14, 21, 28, 35, 42, 49"),(0,n.kt)("p",null,"Don't forget to consider how to handle any input that might be submitted:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Empty values (user just presses enter)"),(0,n.kt)("li",{parentName:"ul"},"Non-numeric values (It may be helpful to read up about the numerical value, ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN"},"NaN"),")"),(0,n.kt)("li",{parentName:"ul"},"Negative numbers"),(0,n.kt)("li",{parentName:"ul"},"Count by number is larger than the count to numbers")),(0,n.kt)("h3",{id:"turn-foreach-into-for"},"Turn forEach() into For"),(0,n.kt)("p",null,"Go back through the ",(0,n.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/arrays-and-looping/practice-looping"},"looping practice")," problems, and redo one of them with a ",(0,n.kt)("inlineCode",{parentName:"p"},"for")," loop instead of a ",(0,n.kt)("inlineCode",{parentName:"p"},"forEach()")," loop."),(0,n.kt)("h3",{id:"word-puzzle"},"Word Puzzle"),(0,n.kt)("p",null,'Create a website that uses a method to replace vowels in a string with the dash symbol "-" to create a word puzzle to solve. Hide the original string when you show the resulting word puzzle, so that another person can try and guess it.'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"String Input:"),'  "Believe you can and you\'re halfway there. Theodore Roosevelt"'),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Puzzle Output:"),'  "B-l--v- y-- c-n -nd y--\'r- h-lfw-y th-r-. Th--d-r- R--s-v-lt"'),(0,n.kt)("p",null,"Do this ",(0,n.kt)("strong",{parentName:"p"},"without")," regular expressions. (If you don't know what a regular expression is yet, don't worry \u2014 we will be covering them in a future lesson.)"),(0,n.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Is the business logic and user interface logic distinctly separate?"),(0,n.kt)("li",{parentName:"ul"},"Are variable names descriptive and in lower camelCase?"),(0,n.kt)("li",{parentName:"ul"},"Does the code have proper indentation and spacing throughout?"),(0,n.kt)("li",{parentName:"ul"},"Are for loops being used correctly?"),(0,n.kt)("li",{parentName:"ul"},"Are ",(0,n.kt)("inlineCode",{parentName:"li"},"forEach()"),"loops being used correctly?")))}d.isMDXComponent=!0}}]);