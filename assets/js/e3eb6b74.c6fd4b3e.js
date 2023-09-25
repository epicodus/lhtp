"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[45846],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(h,o(o({ref:t},s),{},{components:r})):n.createElement(h,o({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},25637:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Practice: More Branching",id:"practice_more_branching",slug:"practice_more_branching",hide_table_of_contents:!0,sidebar_position:19,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3h_classwork_practice_more_branching.md"},o=void 0,l={unversionedId:"introduction_to_programming_part_time/javascript-and-web-browsers-part-2/practice_more_branching",id:"introduction_to_programming_part_time/javascript-and-web-browsers-part-2/practice_more_branching",title:"Practice: More Branching",description:"Goal",source:"@site/docs/introduction_to_programming_part_time/4_javascript-and-web-browsers-part-2/3h_classwork_practice_more_branching.md",sourceDirName:"introduction_to_programming_part_time/4_javascript-and-web-browsers-part-2",slug:"/introduction_to_programming_part_time/javascript-and-web-browsers-part-2/practice_more_branching",permalink:"/introduction_to_programming_part_time/javascript-and-web-browsers-part-2/practice_more_branching",draft:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"Practice: More Branching",id:"practice_more_branching",slug:"practice_more_branching",hide_table_of_contents:!0,sidebar_position:19,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3h_classwork_practice_more_branching.md"},sidebar:"introduction_to_programming_part_time",previous:{title:"More Branching and Error Handling",permalink:"/introduction_to_programming_part_time/javascript-and-web-browsers-part-2/more_branching_and_error_handling"},next:{title:"Homework: Event Handling with Event Listeners",permalink:"/introduction_to_programming_part_time/javascript-and-web-browsers-part-2/homework_event_handling_with_event_listeners"}},c={},p=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Celebrity Dating Quiz",id:"celebrity-dating-quiz",level:3},{value:"Political Meter",id:"political-meter",level:3}],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Goal:"),"  In the More Branching lesson, we learned about:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The logical "and" ',(0,a.kt)("inlineCode",{parentName:"li"},"&&"),' and the logical "or" ',(0,a.kt)("inlineCode",{parentName:"li"},"||")," operators"),(0,a.kt)("li",{parentName:"ul"},'The logical "not" ',(0,a.kt)("inlineCode",{parentName:"li"},"!")," operator"),(0,a.kt)("li",{parentName:"ul"},"The JavaScript values of truthy and falsey")),(0,a.kt)("p",null,"Practice using these operators, and begin familiarizing yourself with the concepts of truthy and falsey by completing the exercises listed below."),(0,a.kt)("h2",{id:"warm-up"},"Warm Up"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What is an example of something JavaScript considers to be falsey? Why is it falsey?"),(0,a.kt)("li",{parentName:"ul"},"What condition does the following line of code check for? In the example, ",(0,a.kt)("inlineCode",{parentName:"li"},"blue"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"red"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"purple")," are variables. ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"if (blue === true && red === false || purple === true)\n")),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Meet the goal by completing one of the practice prompts below. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Both sites should check for any form fields the user has left blank.")," If you're checking multiple fields, don't pop up a dialog box for each one; that could get annoying if the user has left multiple fields blank! Instead, insert text next to the field the user has missed. Bootstrap has some nice styles for this \u2014 check out the ",(0,a.kt)("em",{parentName:"p"},"Validation")," section of their ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.2/components/forms/"},"form documentation"),"."),(0,a.kt)("h3",{id:"celebrity-dating-quiz"},"Celebrity Dating Quiz"),(0,a.kt)("p",null,"Create a celebrity dating webpage, where you enter information about yourself, and the page suggests which celebrity, fictional character, or public figure you would be most compatible with. "),(0,a.kt)("p",null,"How you decide to calculate the compatibility can be arbitrary. Just make sure to try out using the ",(0,a.kt)("inlineCode",{parentName:"p"},"||")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"&&")," operators."),(0,a.kt)("h3",{id:"political-meter"},"Political Meter"),(0,a.kt)("p",null,"Make a political belief meter/quiz that asks questions about users' values, and determines how liberal, moderate, or conservative they are. "),(0,a.kt)("p",null,"How you decide to calculate how liberal, moderate, or conservative a user is can be arbitrary. Just make sure to try out using the ",(0,a.kt)("inlineCode",{parentName:"p"},"||")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"&&")," operators."))}m.isMDXComponent=!0}}]);