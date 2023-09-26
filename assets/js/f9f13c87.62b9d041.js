"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[70099],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),f=r,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},44159:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"UUID Library",id:"uuid-library",slug:"uuid-library",hide_table_of_contents:!0,sidebar_position:26,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2ab_uuid_library.md"},o=void 0,l={unversionedId:"react/react-fundamentals/uuid-library",id:"react/react-fundamentals/uuid-library",title:"UUID Library",description:"So far each of our tickets in the TicketList component use a key set to the index of a map() function. While this works as a temporary solution, it's not a good practice in a real world application. Instead, each of our tickets should have its own unique ID.",source:"@site/docs/react/3_react-fundamentals/2ab-uuid-library.md",sourceDirName:"react/3_react-fundamentals",slug:"/react/react-fundamentals/uuid-library",permalink:"/react/react-fundamentals/uuid-library",draft:!1,tags:[],version:"current",sidebarPosition:26,frontMatter:{title:"UUID Library",id:"uuid-library",slug:"uuid-library",hide_table_of_contents:!0,sidebar_position:26,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2ab_uuid_library.md"},sidebar:"react",previous:{title:"Binding Functions in React",permalink:"/react/react-fundamentals/binding-functions-in-react"},next:{title:"Adding a Form",permalink:"/react/react-fundamentals/adding-a-form"}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"So far each of our tickets in the ",(0,r.kt)("inlineCode",{parentName:"p"},"TicketList")," component use a key set to the index of a ",(0,r.kt)("inlineCode",{parentName:"p"},"map()")," function. While this works as a temporary solution, it's not a good practice in a real world application. Instead, each of our tickets should have its own unique ID."),(0,r.kt)("p",null,"Unique IDs are important for many reasons. In larger database-backed applications, they are an essential way to differentiate between records. However, they are also useful even in React applications that don't use databases. Using the index of an iterator function isn't a reliable way to ensure that each record in a React application has a unique key. In fact, using the index as a key can potentially make our code less efficient and even break our application."),(0,r.kt)("p",null,"Remember that React relies on unique keys in order to efficiently reconcile the virtual DOM with the actual DOM. We should do everything we can to make sure those keys are always unique. In addition, unique IDs are helpful for correctly finding a record so it can be updated, deleted, and so on."),(0,r.kt)("p",null,"Fortunately, create-react-app ships with an industry-standard option: a JS library called ",(0,r.kt)("strong",{parentName:"p"},"UUID"),'. The UUID library is designed to quickly generate UUIDs. UUID stands for "universally unique identifier". They\'re also sometimes referred to as GUID, or "globally unique identifiers".'),(0,r.kt)("p",null,"A UUID has 32 characters. The number of total permutations of a UUID is 2",(0,r.kt)("sup",null,"122"),". This is such a large number that every computer application across the world, regardless of language or platform, could use UUID and still have an extremely tiny chance of duplicates. UUIDs are not specific to React, JavaScript, or even web development. They're actually used in everything from operating systems to SQL database keys."),(0,r.kt)("p",null,"To use the UUID library with create-react-app, we just need to import the following in the file that needs to generate UUIDs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { v4 } from 'uuid';\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"v4")," refers to the method in the UUID library responsible for creating unique IDs. According to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kelektiv/node-uuid"},"UUID Documentation"),", there are a few available methods: For instance, ",(0,r.kt)("inlineCode",{parentName:"p"},"v1()")," creates an ID based on timestamp while ",(0,r.kt)("inlineCode",{parentName:"p"},"v5()")," uses the object's namespace to generate an ID."),(0,r.kt)("p",null,"We could then set the ID property of a ticket with a UUID by doing something like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const ticket = {};\nticket.id = v4()\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"v4()")," function will automatically generate a UUID."),(0,r.kt)("p",null,"In the next lesson, we'll begin to create our ",(0,r.kt)("inlineCode",{parentName:"p"},"NewTicketForm")," component in which we'll use the UUID library to assign unique IDs to new tickets."))}d.isMDXComponent=!0}}]);