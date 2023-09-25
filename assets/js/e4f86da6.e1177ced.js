"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[84958],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"1. React Fundamentals Objectives",id:"react_fundamentals_objectives",slug:"react_fundamentals_objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3_react-fundamentals/0a_react_fundamentals_objectives.md",paginationPrev:null},l=void 0,o={unversionedId:"react/react-fundamentals/react_fundamentals_objectives",id:"react/react-fundamentals/react_fundamentals_objectives",title:"1. React Fundamentals Objectives",description:"During this course section, we will learn how to build a basic React application that uses local and shared state. Over the course of the section, we will create an application that acts as an Epicodus ticketing system that students can use to request help for programming bugs. We'll call this app Help Queue and it will have full CRUD functionality including the ability to update and delete tickets.",source:"@site/docs/react/3_react-fundamentals/0a_react_fundamentals_objectives.md",sourceDirName:"react/3_react-fundamentals",slug:"/react/react-fundamentals/react_fundamentals_objectives",permalink:"/lhtp/react/react-fundamentals/react_fundamentals_objectives",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1. React Fundamentals Objectives",id:"react_fundamentals_objectives",slug:"react_fundamentals_objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3_react-fundamentals/0a_react_fundamentals_objectives.md",paginationPrev:null},sidebar:"react",previous:{title:"1. Functional Programming with JavaScript Independent Project",permalink:"/lhtp/react/functional-programming-with-javascript/functional_programming_with_javascript_independent_project"},next:{title:"2. Introduction to React",permalink:"/lhtp/react/react-fundamentals/introduction_to_react"}},c={},s=[{value:"Independent Project Objectives",id:"independent-project-objectives",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"During this course section, we will learn how to build a basic React application that uses local and shared state. Over the course of the section, we will create an application that acts as an Epicodus ticketing system that students can use to request help for programming bugs. We'll call this app ",(0,r.kt)("strong",{parentName:"p"},"Help Queue")," and it will have full CRUD functionality including the ability to update and delete tickets. "),(0,r.kt)("p",null,"In later course sections, we'll also use the Help Queue app to learn and implement other programming tools like Redux, Firebase, and React hooks."),(0,r.kt)("p",null,"Even though we will learn full CRUD in this section, ",(0,r.kt)("strong",{parentName:"p"},"you will only be expected to add CREATE, READ, and UPDATE functionality for the independent project.")),(0,r.kt)("p",null,"Note that we will be adding full CRUD functionality because knowing how to create, read, update and delete with any language and framework is a useful skill. However, React isn't opinionated, unlike both Rails and .NET, which have a set way of doing things. That means there are many ways to structure an application that has CRUD functionality. How that application should be planned and structured depends on other aspects of the UI and the application."),(0,r.kt)("p",null,"In this course section, we will learn about:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using create-react-app, a command line interface for creating the skeleton of a React application;"),(0,r.kt)("li",{parentName:"ul"},"Using JSX (styled JavaScript), a combination of JavaScript and HTML, to build our components;"),(0,r.kt)("li",{parentName:"ul"},"Building both functional and class components;"),(0,r.kt)("li",{parentName:"ul"},"Using props and PropTypes;"),(0,r.kt)("li",{parentName:"ul"},"Adding local and shared state to a basic React application;"),(0,r.kt)("li",{parentName:"ul"},"Other important concepts such as binding functions, unidirectional data flow, reusing components, and passing data through callbacks.")),(0,r.kt)("h2",{id:"independent-project-objectives"},"Independent Project Objectives"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"At the end of this section, you will complete an independent project. Your code will be reviewed for the following objectives:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Application compiles and runs without error, and warnings in the DevTools console are resolved."),(0,r.kt)("li",{parentName:"ul"},"Functional and class components are used correctly."),(0,r.kt)("li",{parentName:"ul"},"Application effectively uses local and shared state."),(0,r.kt)("li",{parentName:"ul"},"Props are used correctly and always include ",(0,r.kt)("inlineCode",{parentName:"li"},"PropTypes"),"."),(0,r.kt)("li",{parentName:"ul"},"README includes an accurate representation of the application's component tree."),(0,r.kt)("li",{parentName:"ul"},"Project is in a polished, portfolio-quality state."),(0,r.kt)("li",{parentName:"ul"},"The prompt's required functionality and baseline project requirements are in place by the deadline.")))}d.isMDXComponent=!0}}]);