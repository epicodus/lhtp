"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[89765],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(o),d=a,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||r;return o?n.createElement(m,l(l({ref:t},u),{},{components:o})):n.createElement(m,l({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},51334:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=o(87462),a=(o(67294),o(3905));const r={title:"2. Full Stack Development Project",id:"full_stack_development_project",slug:"full_stack_development_project",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/6_react-with-apis/0b_fullstack_development.md"},l=void 0,i={unversionedId:"react_classic/react-with-apis/full_stack_development_project",id:"react_classic/react-with-apis/full_stack_development_project",title:"2. Full Stack Development Project",description:"While we've worked on both front and back end skills throughout our time at Epicodus, in this course section we'll have the chance to practice something entirely new \u2014 combining what we've learned from our back end class (either C#/.NET or Ruby/Rails) with what we've learned of JavaScript and React. In a nutshell, this means practicing your skills as a full stack developer.",source:"@site/docs/react_classic/6_react-with-apis/0b_fullstack_development.md",sourceDirName:"react_classic/6_react-with-apis",slug:"/react_classic/react-with-apis/full_stack_development_project",permalink:"/lhtp/react_classic/react-with-apis/full_stack_development_project",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"2. Full Stack Development Project",id:"full_stack_development_project",slug:"full_stack_development_project",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/6_react-with-apis/0b_fullstack_development.md"},sidebar:"react_classic",previous:{title:"1. APIs and Full Stack Development Objectives",permalink:"/lhtp/react_classic/react-with-apis/apis_and_full_stack_development_objectives"},next:{title:"3. NY Times API: Making an API Call with fetch and useState",permalink:"/lhtp/react_classic/react-with-apis/ny_times_api_making_an_api_call_with_fetch_and_usestate"}},c={},s=[{value:"The <code>useReducer()</code> Hook and React Context",id:"the-usereducer-hook-and-react-context",level:3},{value:"Further Exploration",id:"further-exploration",level:3}],u={toc:s},p="wrapper";function h(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"While we've worked on both front and back end skills throughout our time at Epicodus, in this course section we'll have the chance to practice something entirely new \u2014 combining what we've learned from our back end class (either C#/.NET or Ruby/Rails) with what we've learned of JavaScript and React. In a nutshell, this means practicing your skills as a full stack developer."),(0,a.kt)("p",null,"So in this course section you'll complete a multi-day project with a pair where you combine a back end API (that either you or classmates made) with a React front end. Alternatively, you may choose to combine forces with another pair and do a mini group project that combines a back end API with React. Note that these projects will not be presented on at the end of the course section \u2014 however, they are a great opportunity to improve your skills and put together a portfolio piece."),(0,a.kt)("p",null,"For this project, you will do the following:"),(0,a.kt)("p",null,"First, find an API that either you or classmates built during your back end language class. If other students built this project, make sure to clone or fork the project. It's okay if multiple pairs/groups start with the same API project \u2014 however, throughout the course section, the API will likely change as different pairs build out different functionality."),(0,a.kt)("p",null,"Ultimately, it's up to you to decide how you want to proceed with this project. While creating a React front end and using a C#/.NET or Ruby/Rails API is required, you can spend as much or as little time as you want on building out the back end API further."),(0,a.kt)("p",null,"By the end of the course section, your project should include the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Two repositories, one for the back end and one for the front end."),(0,a.kt)("li",{parentName:"ul"},"The README for the API should document all endpoints, include local server deployment instructions, and include a link to the repository for the front end project."),(0,a.kt)("li",{parentName:"ul"},"The README for the front end should include local server deployment instructions as well as a link to the repository for the API."),(0,a.kt)("li",{parentName:"ul"},"The React front end should receive data from the back end API and the UI should update based on this data.")),(0,a.kt)("p",null,"Here are some other goals to consider:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deployment of both the API and the front end"),(0,a.kt)("li",{parentName:"ul"},"Authentication/authorization so that only the front end React application can communicate with the API (challenging \u2014 but an opportunity for students that are particularly interested in working on their back end language further)")),(0,a.kt)("h3",{id:"the-usereducer-hook-and-react-context"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"useReducer()")," Hook and React Context"),(0,a.kt)("p",null,"We'll learn how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useReducer()"),' hook to make an API call, as well as how to use the React tool "context" to share data between components to create a toggleable light and dark theme in the Help Queue. While it\'s important to become familiar with both of these tools, you are not required to implement either tool in your projects this week. '),(0,a.kt)("p",null,"Again, the biggest goal for this course section is to create a full stack application with a React frontend and a backend in C#/.NET or Ruby/Rails."),(0,a.kt)("h3",{id:"further-exploration"},"Further Exploration"),(0,a.kt)("p",null,"In this course section, we will provide further exploration lessons on the following topics:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mobile development with React Native"),(0,a.kt)("li",{parentName:"ul"},"SEO with React"),(0,a.kt)("li",{parentName:"ul"},"Custom React environments"),(0,a.kt)("li",{parentName:"ul"},"Data visualization"),(0,a.kt)("li",{parentName:"ul"},"Animations and interactivity")),(0,a.kt)("p",null,"These lessons will provide only a brief overview of each topic. They are meant to broaden your knowledge of a range of topics relevant to React development. While you are not expected to deepen your knowledge of any one of these specific topics, we recommend exploring and implementing something outside of the curriculum in your project this week \u2014 that includes any further exploration topic provided in the lessons or something from your own exploration and research."),(0,a.kt)("p",null,"The goal of the further exploration is to encourage you to differentiate yourself and learn skills that separate you from your classmates."),(0,a.kt)("p",null,"While teachers won't be evaluating this project, don't pass up this opportunity to work on a portfolio piece and build your skills as a full stack developer."))}h.isMDXComponent=!0}}]);