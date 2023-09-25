"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[60391],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),y=i,m=d["".concat(c,".").concat(y)]||d[y]||u[y]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},81618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={title:"Asynchrony and APIs in JavaScript Objectives",id:"asynchrony_and_apis_in_javascript_objectives",slug:"asynchrony_and_apis_in_javascript_objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0a_asynchrony_in_javascript_objectives.md",paginationPrev:null},o=void 0,s={unversionedId:"intermediate_javascript_part_time_evening/asynchrony-and-apis/asynchrony_and_apis_in_javascript_objectives",id:"intermediate_javascript_part_time_evening/asynchrony-and-apis/asynchrony_and_apis_in_javascript_objectives",title:"Asynchrony and APIs in JavaScript Objectives",description:"In this section, we'll learn about third-party APIs (application programming interfaces) and how we can use them to communicate with other applications to get data or services. In the process, we'll learn how to make API calls and work with asynchrony in JavaScript.",source:"@site/docs/intermediate_javascript_part_time_evening/7_asynchrony-and-apis/0a_asynchrony_in_javascript_objectives.md",sourceDirName:"intermediate_javascript_part_time_evening/7_asynchrony-and-apis",slug:"/intermediate_javascript_part_time_evening/asynchrony-and-apis/asynchrony_and_apis_in_javascript_objectives",permalink:"/intermediate_javascript_part_time_evening/asynchrony-and-apis/asynchrony_and_apis_in_javascript_objectives",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Asynchrony and APIs in JavaScript Objectives",id:"asynchrony_and_apis_in_javascript_objectives",slug:"asynchrony_and_apis_in_javascript_objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0a_asynchrony_in_javascript_objectives.md",paginationPrev:null},sidebar:"intermediate_javascript_part_time_evening",previous:{title:"TDD and Environments with JavaScript Independent Project",permalink:"/intermediate_javascript_part_time_evening/test-driven-development-part-2/tdd_and_environments_with_javascript_independent_project"},next:{title:"Asynchrony in JavaScript",permalink:"/intermediate_javascript_part_time_evening/asynchrony-and-apis/asynchrony_in_javascript"}},c={},l=[{value:"Independent Project Objectives",id:"independent-project-objectives",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section, we'll learn about third-party APIs (application programming interfaces) and how we can use them to communicate with other applications to get data or services. In the process, we'll learn how to make API calls and work with asynchrony in JavaScript. "),(0,i.kt)("p",null,"We'll learn about a handful of tools in this section:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How to navigate API documentation, get an API key, and parse JSON."),(0,i.kt)("li",{parentName:"ul"},"How to protect your API keys."),(0,i.kt)("li",{parentName:"ul"},"Two Web APIs that we can use to make API calls: ",(0,i.kt)("inlineCode",{parentName:"li"},"XMLHttpRequest")," object and the Fetch API."),(0,i.kt)("li",{parentName:"ul"},"JavaScript functionality to handle asynchrony: callbacks, promises, and async functions."),(0,i.kt)("li",{parentName:"ul"},"How to navigate the DevTools ",(0,i.kt)("em",{parentName:"li"},"Network")," tab and use Postman to test out and debug our API calls."),(0,i.kt)("li",{parentName:"ul"},"JavaScript error handling with ",(0,i.kt)("inlineCode",{parentName:"li"},"try...catch"),"."),(0,i.kt)("li",{parentName:"ul"},"Error handling specifically for API calls."),(0,i.kt)("li",{parentName:"ul"},"SOP and CORS."),(0,i.kt)("li",{parentName:"ul"},"And more!")),(0,i.kt)("p",null,"We will ",(0,i.kt)("em",{parentName:"p"},"not")," use Jest testing for async code in this section, though you should continue testing any synchronous code with Jest. While it's always a good idea to test async code and API calls, doing so is considerably more complex than the testing we did in the last section, so we're not including that information now."),(0,i.kt)("h2",{id:"independent-project-objectives"},"Independent Project Objectives"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"At the end of this section, you will complete an independent project. Your code will be reviewed for the following objectives:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Does the application correctly make an API call?"),(0,i.kt)("li",{parentName:"ul"},"Does the application correctly parse data from the API response?"),(0,i.kt)("li",{parentName:"ul"},"Does the application handle errors when the API call doesn't return a 200 OK status as well as return a message if the API returns no results?"),(0,i.kt)("li",{parentName:"ul"},"Did you follow all setup instructions, including storing your API key and adding instructions for setup in your README?"),(0,i.kt)("li",{parentName:"ul"},"Does the app separate logic into different JavaScript files and use a static method?"),(0,i.kt)("li",{parentName:"ul"},"Does the application correctly use webpack?"),(0,i.kt)("li",{parentName:"ul"},"Project is in a polished, portfolio-quality state."),(0,i.kt)("li",{parentName:"ul"},"The prompt's required functionality and baseline project requirements are in place by the deadline.")))}u.isMDXComponent=!0}}]);