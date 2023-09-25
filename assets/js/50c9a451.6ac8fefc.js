"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[26505],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={title:"1. React with NoSQL Objectives",id:"react_with_nosql_objectives",slug:"react_with_nosql_objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/8_react-with-nosql/0a_react_with_nosql_objectives.md",paginationPrev:null},i=void 0,l={unversionedId:"react_part_time_evening/react-with-nosql/react_with_nosql_objectives",id:"react_part_time_evening/react-with-nosql/react_with_nosql_objectives",title:"1. React with NoSQL Objectives",description:"In this course section, we'll learn how to persist data with a NoSQL database. We'll use Google's Firebase, an app development platform that provides many services including NoSQL databases, authentication, and hosting.",source:"@site/docs/react_part_time_evening/8_react-with-nosql/0a_react_with_nosql_objectives.md",sourceDirName:"react_part_time_evening/8_react-with-nosql",slug:"/react_part_time_evening/react-with-nosql/react_with_nosql_objectives",permalink:"/lhtp/react_part_time_evening/react-with-nosql/react_with_nosql_objectives",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1. React with NoSQL Objectives",id:"react_with_nosql_objectives",slug:"react_with_nosql_objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/8_react-with-nosql/0a_react_with_nosql_objectives.md",paginationPrev:null},sidebar:"react_part_time_evening",previous:{title:"1. React with Redux Independent Project",permalink:"/lhtp/react_part_time_evening/react-with-redux-part-2/react_with_redux_independent_project"},next:{title:"2. Introduction to Hooks with the useState Hook",permalink:"/lhtp/react_part_time_evening/react-with-nosql/introduction_to_hooks_with_the_usestate_hook"}},s={},c=[{value:"Independent Project Objectives",id:"independent-project-objectives",level:2}],u={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this course section, we'll learn how to persist data with a NoSQL database. We'll use Google's Firebase, an app development platform that provides many services including NoSQL databases, authentication, and hosting."),(0,r.kt)("p",null,"We will cover the following concepts about NoSQL databases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The differences between NoSQL and SQL databases."),(0,r.kt)("li",{parentName:"ul"},"How data is saved in NoSQL database."),(0,r.kt)("li",{parentName:"ul"},"The CAP theorem, which describes distributed NoSQL databases."),(0,r.kt)("li",{parentName:"ul"},"The acronym BASE that further describes the CAP theorem.")),(0,r.kt)("p",null,"When working with Firebase, we'll use the following services and integrate them into the Help Queue project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Firestore database (a type of NoSQL database)"),(0,r.kt)("li",{parentName:"ul"},"Authentication"),(0,r.kt)("li",{parentName:"ul"},"Hosting")),(0,r.kt)("p",null,"In this course section, we won't be using Redux to manage our application's state. Instead, we'll learn how to use React hooks! Hooks are tools that enable us to ",(0,r.kt)("em",{parentName:"p"},"re"),"use stateful logic and to use state and lifecycle features in function components. While using hooks and using Redux is not mutually exclusive, we're going to focus on only using hooks to manage our React app's state and component lifecycle events by refactoring the Help Queue project. To that end, we'll provide a repo with a starter project."),(0,r.kt)("p",null,"We'll cover the following topics about hooks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"useState()")," hook"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"useEffect()")," hook"),(0,r.kt)("li",{parentName:"ul"},"The rules of hooks"),(0,r.kt)("li",{parentName:"ul"},"How hooks solve multiple pain points in React development"),(0,r.kt)("li",{parentName:"ul"},"How to write a custom hook")),(0,r.kt)("p",null,"After we learn how to use hooks, we will no longer use class components. That means we'll take the extra step of converting the Help Queue ",(0,r.kt)("inlineCode",{parentName:"p"},"TicketControl")," component into a function component that uses hooks to manage state and component lifecycle events. Thereafter, we'll start adding Firebase services to the Help Queue. "),(0,r.kt)("p",null,"We'll also cover these additional topics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Structuring data in Firestore databases"),(0,r.kt)("li",{parentName:"ul"},"Routing with React Router"),(0,r.kt)("li",{parentName:"ul"},"Making Firestore queries"),(0,r.kt)("li",{parentName:"ul"},"Adding a wait time to the Help Queue"),(0,r.kt)("li",{parentName:"ul"},"Styling components with styled-components"),(0,r.kt)("li",{parentName:"ul"},"Other further exploration activities")),(0,r.kt)("h2",{id:"independent-project-objectives"},"Independent Project Objectives"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"You will not be expected to incorporate the concepts of this section into your independent project. Instead, your next independent project will be devoted to working on your capstone project. Your code will be reviewed for the following objectives:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Project commit history demonstrates a full session of work.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For full-time students, we require 8 hours. "),(0,r.kt)("li",{parentName:"ul"},"For part-time students, we require 4 hours."))),(0,r.kt)("li",{parentName:"ul"},"Project includes capstone proposal."),(0,r.kt)("li",{parentName:"ul"},"README includes an overview of the project.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You can preview the exact instructions and requirements for the React with NoSQL code review by reading the ",(0,r.kt)("a",{parentName:"strong",href:"https://www.learnhowtoprogram.com/react/react-with-nosql/react-with-nosql-independent-project"},"React with NoSQL Independent Project")," lesson at the end of this section.")))}h.isMDXComponent=!0}}]);