"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[14813],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),b=o,m=u["".concat(s,".").concat(b)]||u[b]||d[b]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},57728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={title:"1. Object-Oriented JavaScript Objectives",id:"object_oriented_javascript_objectives",slug:"object_oriented_javascript_objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3_object-oriented-javascript/0a_object_oriented_javascript_objectives.md",paginationPrev:null},r=void 0,l={unversionedId:"intermediate_javascript_classic/object-oriented-javascript/object_oriented_javascript_objectives",id:"intermediate_javascript_classic/object-oriented-javascript/object_oriented_javascript_objectives",title:"1. Object-Oriented JavaScript Objectives",description:"We've learned to work with just about all the fundamental tools that JavaScript has to offer: primitives, functions, arrays, looping, branching, and using built-in object methods and properties. We've also reinforced our know-how of using built-in object properties and methods by implementing Web APIs into our applications to make them interactive.",source:"@site/docs/intermediate_javascript_classic/3_object-oriented-javascript/0a_object_oriented_javascript_objectives.md",sourceDirName:"intermediate_javascript_classic/3_object-oriented-javascript",slug:"/intermediate_javascript_classic/object-oriented-javascript/object_oriented_javascript_objectives",permalink:"/lhtp/intermediate_javascript_classic/object-oriented-javascript/object_oriented_javascript_objectives",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1. Object-Oriented JavaScript Objectives",id:"object_oriented_javascript_objectives",slug:"object_oriented_javascript_objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3_object-oriented-javascript/0a_object_oriented_javascript_objectives.md",paginationPrev:null},sidebar:"intermediate_javascript_classic",previous:{title:"3. Installing node.js",permalink:"/lhtp/intermediate_javascript_classic/setting-up-javascript/installing_nodejs"},next:{title:"2. Installing and Using Node Version Manager",permalink:"/lhtp/intermediate_javascript_classic/object-oriented-javascript/installing_and_using_node_version_manager"}},s={},c=[{value:"Independent Project Objectives",id:"independent-project-objectives",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We've learned to work with just about all the fundamental tools that JavaScript has to offer: primitives, functions, arrays, looping, branching, and using built-in object methods and properties. We've also reinforced our know-how of using built-in object properties and methods by implementing Web APIs into our applications to make them interactive. "),(0,o.kt)("p",null,"However, we've never actually created our own JavaScript objects, and in this section, that's just what we'll do! We'll learn:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"That JavaScript objects collect data AND functions into a single unit. "),(0,o.kt)("li",{parentName:"ul"},"How to create object literals."),(0,o.kt)("li",{parentName:"ul"},"How to create object constructor functions and prototype methods."),(0,o.kt)("li",{parentName:"ul"},"How JavaScript objects share functionality through prototypal inheritance.")),(0,o.kt)("p",null,"We'll also learn more about events and Web APIs. We'll cover:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Event bubbling"),(0,o.kt)("li",{parentName:"ul"},"Event delegation"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Event")," object"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Node")," object"),(0,o.kt)("li",{parentName:"ul"},"The CSS Object Model (CSSOM)")),(0,o.kt)("p",null,"There will also be lessons on new topics, and opportunities for further exploration:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Switch cases"),(0,o.kt)("li",{parentName:"ul"},"Using your browser's local storage"),(0,o.kt)("li",{parentName:"ul"},"Using aliases")),(0,o.kt)("p",null,"At the very end of the section, we'll learn about whiteboarding, which is the process of solving a coding problem on a dry erase whiteboard (or in a text editor in remote environments) to demonstrate and communicate about your problem-solving process. The goal of introducing whiteboarding now is to expose you to the concept and process, and provide optional prompts to complete. (The exact schedule of whiteboarding will be up to your instructor.) Then, starting in the backend language course (C# or Ruby), you'll whiteboard at the end of most class sessions. "),(0,o.kt)("p",null,"learn about JavaScript ",(0,o.kt)("strong",{parentName:"p"},"objects")," which collect data AND functions into a single ",(0,o.kt)("em",{parentName:"p"},"object")," unit.  We will see how business logic and user interface logic work together in the creation and updating of objects."),(0,o.kt)("p",null,"At the end of the section, you should be able to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build an application that structures its data with JavaScript objects created with constructor functions."),(0,o.kt)("li",{parentName:"ul"},"Add functionality to JavaScript objects by adding methods to the object's prototype."),(0,o.kt)("li",{parentName:"ul"},"Use event delegation to attach an event listener to a parent element that fires for a child element."),(0,o.kt)("li",{parentName:"ul"},"Implement 'separation of concerns' to create JavaScript functions that focus on doing just one thing. ")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important note:")," If you find video content helpful to your learning style, we recommend supplementing with external resources that include videos. Students have found helpful videos at the following online resources:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://teamtreehouse.com/"},"Treehouse")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.lynda.com/"},"Lynda"))),(0,o.kt)("p",null,"Of course, there are also many tutorials and videos available on ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/"},"YouTube")," as well."),(0,o.kt)("h2",{id:"independent-project-objectives"},"Independent Project Objectives"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"At the end of this section, you will complete an independent project. Your code will be reviewed for the following objectives:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Constructors and prototypes are used successfully."),(0,o.kt)("li",{parentName:"ul"},"Application works as expected."),(0,o.kt)("li",{parentName:"ul"},"Tests are included for each business logic behavior and code is committed after each test passes."),(0,o.kt)("li",{parentName:"ul"},"Project is in a polished, portfolio-quality state."),(0,o.kt)("li",{parentName:"ul"},"The prompt's required functionality and baseline project requirements are in place by the deadline.")))}d.isMDXComponent=!0}}]);