"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[36886],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return r?o.createElement(f,i(i({ref:t},s),{},{components:r})):o.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44005:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={title:"1. Power Plant, Project Euler",id:"power_plant_project_euler",slug:"power_plant_project_euler",hide_table_of_contents:!0,sidebar_position:32,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2_functional-programming-with-javascript/2a_classwork_power_plant_project_euler.md"},i=void 0,l={unversionedId:"react/functional-programming-with-javascript/power_plant_project_euler",id:"react/functional-programming-with-javascript/power_plant_project_euler",title:"1. Power Plant, Project Euler",description:"Goal: Use closures to store state. Practice using composition to add functionality to objects. Focus on testing your applications thoroughly and keeping your business logic functional.",source:"@site/docs/react/2_functional-programming-with-javascript/2a_classwork_power_plant_project_euler.md",sourceDirName:"react/2_functional-programming-with-javascript",slug:"/react/functional-programming-with-javascript/power_plant_project_euler",permalink:"/lhtp/react/functional-programming-with-javascript/power_plant_project_euler",draft:!1,tags:[],version:"current",sidebarPosition:32,frontMatter:{title:"1. Power Plant, Project Euler",id:"power_plant_project_euler",slug:"power_plant_project_euler",hide_table_of_contents:!0,sidebar_position:32,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2_functional-programming-with-javascript/2a_classwork_power_plant_project_euler.md"},sidebar:"react",previous:{title:"12. Addressing Implicit Bias",permalink:"/lhtp/react/functional-programming-with-javascript/addressing_implicit_bias"},next:{title:"2. Whiteboard Practice: Composition",permalink:"/lhtp/react/functional-programming-with-javascript/whiteboard_practice_composition"}},c={},p=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Power Plant",id:"power-plant",level:3},{value:"Project Euler Problems",id:"project-euler-problems",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Goal:")," Use closures to store state. Practice using composition to add functionality to objects. Focus on testing your applications thoroughly and keeping your business logic functional."),(0,n.kt)("h2",{id:"warm-up"},"Warm Up"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"What is composition? How is it different from inheritance?"),(0,n.kt)("li",{parentName:"ul"},"How can we make a shallow copy of an object in JavaScript?"),(0,n.kt)("li",{parentName:"ul"},"What is the difference between a shallow copy and a deep copy?"),(0,n.kt)("li",{parentName:"ul"},"How is it possible to store information inside a closure?")),(0,n.kt)("h2",{id:"code"},"Code"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"power-plant"},"Power Plant"),(0,n.kt)("p",null,"Follow along with the homework to build an application for growing plants. Make sure to include tests, to separate your logic, and to use webpack. Once you have completed the example shown in the coursework, try adding the following functionality."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Add functionality to create multiple plants.")," Remember that we can use closures to store state about different objects.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Add functionality so different plants have different abilities.")," Use composition to add these abilities.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Build out a fully functioning game where users can feed their plants.")," This could include a UI, special powerups, and any creative functionality you might want to add!"))),(0,n.kt)("h3",{id:"project-euler-problems"},"Project Euler Problems"),(0,n.kt)("p",null,"You've had a chance to solve ",(0,n.kt)("a",{parentName:"p",href:"https://projecteuler.net/archives"},"Project Euler")," problems in Intermediate JavaScript. Now try coming up with functional solutions to some of these problems. Functional programming is often used for math and computation so this is a great way to get more practice with functional techniques."),(0,n.kt)("p",null,"Do not worry about implementing a UI. Focus on writing and testing functional code."),(0,n.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Code correctly uses closures to store state when needed."),(0,n.kt)("li",{parentName:"ul"},"Code is well tested."),(0,n.kt)("li",{parentName:"ul"},"Objects are copied instead of mutated."),(0,n.kt)("li",{parentName:"ul"},"Application works as expected.")))}m.isMDXComponent=!0}}]);