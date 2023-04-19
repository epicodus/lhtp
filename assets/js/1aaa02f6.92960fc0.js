"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[4019],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),u=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(r),h=n,m=c["".concat(p,".").concat(h)]||c[h]||d[h]||a;return r?o.createElement(m,l(l({ref:t},s),{},{components:r})):o.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7151:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const a={title:"5. \u270f\ufe0f Practice: Looping with for",id:"practice_looping_with_for",slug:"practice_looping_with_for",hide_table_of_contents:!0,sidebar_position:37,day:"wednesday",type:"exercise"},l=void 0,i={unversionedId:"new_arrays_and_looping/practice_looping_with_for",id:"new_arrays_and_looping/practice_looping_with_for",title:"5. \u270f\ufe0f Practice: Looping with for",description:"Goal",source:"@site/docs/3_new_arrays_and_looping/3d_classwork_practice_looping_with_for.md",sourceDirName:"3_new_arrays_and_looping",slug:"/new_arrays_and_looping/practice_looping_with_for",permalink:"/lhtp/new_arrays_and_looping/practice_looping_with_for",draft:!1,tags:[],version:"current",sidebarPosition:37,frontMatter:{title:"5. \u270f\ufe0f Practice: Looping with for",id:"practice_looping_with_for",slug:"practice_looping_with_for",hide_table_of_contents:!0,sidebar_position:37,day:"wednesday",type:"exercise"},sidebar:"docs",previous:{title:"4. \ud83d\udcd3 Looping with for",permalink:"/lhtp/new_arrays_and_looping/looping_with_for"},next:{title:"6. \ud83d\udcd3 When to use for",permalink:"/lhtp/new_arrays_and_looping/when_to_use_for"}},p={},u=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Count Up By",id:"count-up-by",level:3},{value:"Turn forEach() into For",id:"turn-foreach-into-for",level:3},{value:"Word Puzzle",id:"word-puzzle",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],s={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Goal"),":  In the last lesson, we learned:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The three parameters of a ",(0,n.kt)("inlineCode",{parentName:"li"},"for")," loop"),(0,n.kt)("li",{parentName:"ul"},"How to use a ",(0,n.kt)("inlineCode",{parentName:"li"},"for")," loop both with and without arrays")),(0,n.kt)("p",null,"Practice utilizing for loops in a variety of ways by completing one of the exercises detailed below."),(0,n.kt)("h2",{id:"warm-up"},"Warm Up"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"What is the difference between ",(0,n.kt)("inlineCode",{parentName:"li"},"for")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.forEach()")," loops? Why should you generally favor ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.forEach()"),"?"),(0,n.kt)("li",{parentName:"ul"},"How does a for loop know when to stop looping?"),(0,n.kt)("li",{parentName:"ul"},"What is the last parameter in a ",(0,n.kt)("inlineCode",{parentName:"li"},"for")," loop and what is it for?")),(0,n.kt)("h2",{id:"code"},"Code"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Complete one of the exercises below."),(0,n.kt)("h3",{id:"count-up-by"},"Count Up By"),(0,n.kt)("p",null,"Create a program that takes two numbers \u2014 one to count to and another to determine what multiple to use to get there."),(0,n.kt)("p",null,"Here is some sample input:"),(0,n.kt)("br",null),"Count to:  30 ",(0,n.kt)("br",null),"Count by:  5 ",(0,n.kt)("br",null),"Output: 5, 10, 15, 20, 25, 30 ",(0,n.kt)("br",null),(0,n.kt)("p",null,"Count to:  50 ",(0,n.kt)("br",null),"\nCount by: 7 ",(0,n.kt)("br",null),"\nOutput:  7, 14, 21, 28, 35, 42, 49"),(0,n.kt)("p",null,"Don't forget to consider how to handle any input that might be submitted:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Empty values (user just presses enter)"),(0,n.kt)("li",{parentName:"ul"},"Non-numeric values (It may be helpful to read up about the numerical value, ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN"},"NaN"),")"),(0,n.kt)("li",{parentName:"ul"},"Negative numbers"),(0,n.kt)("li",{parentName:"ul"},"Count by number is larger than the count to numbers")),(0,n.kt)("h3",{id:"turn-foreach-into-for"},"Turn forEach() into For"),(0,n.kt)("p",null,"Go back through the ",(0,n.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/arrays-and-looping/practice-looping"},"looping practice")," problems, and redo one of them with a ",(0,n.kt)("inlineCode",{parentName:"p"},"for")," loop instead of a ",(0,n.kt)("inlineCode",{parentName:"p"},"forEach()")," loop."),(0,n.kt)("h3",{id:"word-puzzle"},"Word Puzzle"),(0,n.kt)("p",null,'Create a website that uses a method to replace vowels in a string with the dash symbol "-" to create a word puzzle to solve. Hide the original string when you show the resulting word puzzle, so that another person can try and guess it.'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"String Input:"),'  "Believe you can and you\'re halfway there. Theodore Roosevelt"'),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Puzzle Output:"),'  "B-l--v- y-- c-n -nd y--\'r- h-lfw-y th-r-. Th--d-r- R--s-v-lt"'),(0,n.kt)("p",null,"Do this ",(0,n.kt)("strong",{parentName:"p"},"without")," regular expressions. (If you don't know what a regular expression is yet, don't worry \u2014 we will be covering them in a future lesson.)"),(0,n.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Is the business logic and user interface logic distinctly separate?"),(0,n.kt)("li",{parentName:"ul"},"Are variable names descriptive and in lower camelCase?"),(0,n.kt)("li",{parentName:"ul"},"Does the code have proper indentation and spacing throughout?"),(0,n.kt)("li",{parentName:"ul"},"Are for loops being used correctly?"),(0,n.kt)("li",{parentName:"ul"},"Are ",(0,n.kt)("inlineCode",{parentName:"li"},"forEach()"),"loops being used correctly?")))}d.isMDXComponent=!0}}]);