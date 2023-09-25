"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[23694],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),y=r,h=d["".concat(c,".").concat(y)]||d[y]||u[y]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},12225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={title:"Asynchrony and APIs in JavaScript Objectives",id:"asynchrony_and_apis_in_javascript_objectives",slug:"asynchrony_and_apis_in_javascript_objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/5_asynchrony-and-apis/0a_asynchrony_in_javascript_objectives.md",paginationPrev:null},o=void 0,s={unversionedId:"intermediate_javascript/asynchrony-and-apis/asynchrony_and_apis_in_javascript_objectives",id:"intermediate_javascript/asynchrony-and-apis/asynchrony_and_apis_in_javascript_objectives",title:"Asynchrony and APIs in JavaScript Objectives",description:"In this section, we'll learn about third-party APIs (application programming interfaces) and how we can use them to communicate with other applications to get data or services. In the process, we'll learn how to make API calls and work with asynchrony in JavaScript.",source:"@site/docs/intermediate_javascript/5_asynchrony-and-apis/0a_asynchrony_in_javascript_objectives.md",sourceDirName:"intermediate_javascript/5_asynchrony-and-apis",slug:"/intermediate_javascript/asynchrony-and-apis/asynchrony_and_apis_in_javascript_objectives",permalink:"/lhtp/intermediate_javascript/asynchrony-and-apis/asynchrony_and_apis_in_javascript_objectives",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Asynchrony and APIs in JavaScript Objectives",id:"asynchrony_and_apis_in_javascript_objectives",slug:"asynchrony_and_apis_in_javascript_objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/5_asynchrony-and-apis/0a_asynchrony_in_javascript_objectives.md",paginationPrev:null},sidebar:"intermediate_javascript",previous:{title:"TDD and Environments with JavaScript Independent Project",permalink:"/lhtp/intermediate_javascript/test-driven-development-and-environments-with-javascript/tdd_and_environments_with_javascript_independent_project"},next:{title:"Asynchrony in JavaScript",permalink:"/lhtp/intermediate_javascript/asynchrony-and-apis/asynchrony_in_javascript"}},c={},l=[{value:"Independent Project Objectives",id:"independent-project-objectives",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this section, we'll learn about third-party APIs (application programming interfaces) and how we can use them to communicate with other applications to get data or services. In the process, we'll learn how to make API calls and work with asynchrony in JavaScript. "),(0,r.kt)("p",null,"We'll learn about a handful of tools in this section:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How to navigate API documentation, get an API key, and parse JSON."),(0,r.kt)("li",{parentName:"ul"},"How to protect your API keys."),(0,r.kt)("li",{parentName:"ul"},"Two Web APIs that we can use to make API calls: ",(0,r.kt)("inlineCode",{parentName:"li"},"XMLHttpRequest")," object and the Fetch API."),(0,r.kt)("li",{parentName:"ul"},"JavaScript functionality to handle asynchrony: callbacks, promises, and async functions."),(0,r.kt)("li",{parentName:"ul"},"How to navigate the DevTools ",(0,r.kt)("em",{parentName:"li"},"Network")," tab and use Postman to test out and debug our API calls."),(0,r.kt)("li",{parentName:"ul"},"JavaScript error handling with ",(0,r.kt)("inlineCode",{parentName:"li"},"try...catch"),"."),(0,r.kt)("li",{parentName:"ul"},"Error handling specifically for API calls."),(0,r.kt)("li",{parentName:"ul"},"SOP and CORS."),(0,r.kt)("li",{parentName:"ul"},"And more!")),(0,r.kt)("p",null,"We will ",(0,r.kt)("em",{parentName:"p"},"not")," use Jest testing for async code in this section, though you should continue testing any synchronous code with Jest. While it's always a good idea to test async code and API calls, doing so is considerably more complex than the testing we did in the last section, so we're not including that information now."),(0,r.kt)("h2",{id:"independent-project-objectives"},"Independent Project Objectives"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"At the end of this section, you will complete an independent project. Your code will be reviewed for the following objectives:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Does the application correctly make an API call?"),(0,r.kt)("li",{parentName:"ul"},"Does the application correctly parse data from the API response?"),(0,r.kt)("li",{parentName:"ul"},"Does the application handle errors when the API call doesn't return a 200 OK status as well as return a message if the API returns no results?"),(0,r.kt)("li",{parentName:"ul"},"Did you follow all setup instructions, including storing your API key and adding instructions for setup in your README?"),(0,r.kt)("li",{parentName:"ul"},"Does the app separate logic into different JavaScript files and use a static method?"),(0,r.kt)("li",{parentName:"ul"},"Does the application correctly use webpack?"),(0,r.kt)("li",{parentName:"ul"},"Project is in a polished, portfolio-quality state."),(0,r.kt)("li",{parentName:"ul"},"The prompt's required functionality and baseline project requirements are in place by the deadline.")))}u.isMDXComponent=!0}}]);