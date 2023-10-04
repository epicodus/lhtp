"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[43170],{30876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2266:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7896),o=(r(2784),r(30876));const a={title:"Homework: Introduction to ES6",id:"homework-introduction-to-es6",slug:"homework-introduction-to-es6",hide_table_of_contents:!0,sidebar_position:37,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/2b_introduction_to_es6.md"},i=void 0,s={unversionedId:"intermediate-javascript/test-driven-development/homework-introduction-to-es6",id:"intermediate-javascript/test-driven-development/homework-introduction-to-es6",title:"Homework: Introduction to ES6",description:"JavaScript development is in a constant state of evolution. A big part of being a JS developer is keeping up with changes to popular libraries, frameworks, and the language itself. Frameworks that were popular a few years ago (such as backbone.js) are quickly replaced by cutting edge frameworks (like react.js). Node modules become outdated and deprecated. Libraries are in a constant state of churn.",source:"@site/docs/intermediate-javascript/5_test-driven-development/2b-introduction-to-es6.md",sourceDirName:"intermediate-javascript/5_test-driven-development",slug:"/intermediate-javascript/test-driven-development/homework-introduction-to-es6",permalink:"/intermediate-javascript/test-driven-development/homework-introduction-to-es6",draft:!1,tags:[],version:"current",sidebarPosition:37,frontMatter:{title:"Homework: Introduction to ES6",id:"homework-introduction-to-es6",slug:"homework-introduction-to-es6",hide_table_of_contents:!0,sidebar_position:37,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/2b_introduction_to_es6.md"},sidebar:"intermediate-javascript",previous:{title:"Test It Out, Sudoku Checker, Project Euler (day 2)",permalink:"/intermediate-javascript/test-driven-development/test-it-out-sudoku-checker-project-euler-day-2"},next:{title:"Homework: ES6 Classes",permalink:"/intermediate-javascript/test-driven-development/homework-es6-classes"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"JavaScript development is in a constant state of evolution. A big part of being a JS developer is keeping up with changes to popular libraries, frameworks, and the language itself. Frameworks that were popular a few years ago (such as backbone.js) are quickly replaced by cutting edge frameworks (like react.js). Node modules become outdated and deprecated. Libraries are in a constant state of churn."),(0,o.kt)("p",null,"ES6 adds new functionality to JavaScript. (Remember, ECMAScript is the \u201cofficial\u201d name for JavaScript.) ES6 is also called ES2015, because it was released in 2015. Much of this functionality has since been widely adopted by JavaScript developers. "),(0,o.kt)("p",null,"We've actually already been using one of the most important ES6 features since we first started using JavaScript: ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," (instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"var"),"). In the next few lessons, we'll cover some of the most popular ES6 features, including arrow notation, the ",(0,o.kt)("inlineCode",{parentName:"p"},"class")," keyword, and template literals."),(0,o.kt)("p",null,"We'll also learn about other ES6 features in this course section and the next. For example, an ES6 feature that we'll learn about in the next course section is ",(0,o.kt)("strong",{parentName:"p"},"promises"),", which help us manage asynchronous code. Promises are a great example of how functionality gets incorporated into JavaScript. Until ES6, developers had to use libraries like Promise.js and Bluebird.js if they wanted to add this functionality to their applications. However, promises proved to be so popular that they were added to native ECMAScript functionality in ES6."),(0,o.kt)("p",null,"By the end of Intermediate JavaScript, you'll be able to use the following ES6 features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Importing and exporting modules with ",(0,o.kt)("inlineCode",{parentName:"li"},"import")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"export")," statements."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"class")," keyword to create object types."),(0,o.kt)("li",{parentName:"ul"},"Arrow notation to create a function expression."),(0,o.kt)("li",{parentName:"ul"},"Template literals to use variables in strings."),(0,o.kt)("li",{parentName:"ul"},"Promises, which we'll cover in the next course section.")),(0,o.kt)("p",null,"You're also encouraged to explore other ES6 features on your own. You can learn more about ES6 features ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukehoban/es6features"},"here"),"."))}d.isMDXComponent=!0}}]);