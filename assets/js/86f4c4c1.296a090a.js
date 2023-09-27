"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[4844],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>h});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var l=n.createContext({}),s=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),u=s(a),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,o(o({ref:e},p),{},{components:a})):n.createElement(h,o({ref:e},p))}));function h(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,o=new Array(r);o[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[u]="string"==typeof t?t:i,o[1]=c;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},35407:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const r={title:"Communicating With An API - Part 2 (day 2)",id:"communicating-with-an-api---part-2-day-2",slug:"communicating-with-an-api---part-2-day-2",hide_table_of_contents:!0,sidebar_position:24,day:"thursday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3a_classwork_communicating_with_an_api.md"},o=void 0,c={unversionedId:"c-and-net-classic/building-an-api/communicating-with-an-api---part-2-day-2",id:"c-and-net-classic/building-an-api/communicating-with-an-api---part-2-day-2",title:"Communicating With An API - Part 2 (day 2)",description:"Goals: Create an application that consumes an API.",source:"@site/docs/c-and-net-classic/11_building-an-api/3a-classwork-communicating-with-an-api-day-2.md",sourceDirName:"c-and-net-classic/11_building-an-api",slug:"/c-and-net-classic/building-an-api/communicating-with-an-api---part-2-day-2",permalink:"/c-and-net-classic/building-an-api/communicating-with-an-api---part-2-day-2",draft:!1,tags:[],version:"current",sidebarPosition:24,frontMatter:{title:"Communicating With An API - Part 2 (day 2)",id:"communicating-with-an-api---part-2-day-2",slug:"communicating-with-an-api---part-2-day-2",hide_table_of_contents:!0,sidebar_position:24,day:"thursday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3a_classwork_communicating_with_an_api.md"},sidebar:"c-and-net-classic",previous:{title:"Communicating With An API - Part 1",permalink:"/c-and-net-classic/building-an-api/communicating-with-an-api---part-1"},next:{title:"Weekly Technical Interview Prep",permalink:"/c-and-net-classic/building-an-api/weekly-technical-interview-prep"}},l={},s=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"API-Consuming Application",id:"api-consuming-application",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],p={toc:s},u="wrapper";function d(t){let{components:e,...a}=t;return(0,i.kt)(u,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Goals"),": Create an application that consumes an API."),(0,i.kt)("h2",{id:"warm-up"},"Warm Up"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Over the next two class sessions,  work through this list of common interview questions with your partner before you start coding for the day. Once again, this may be formatted as a mock interview, or you may discuss potential answers together:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Non-Technical")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What about coding interests you? What are your favorite parts?"),(0,i.kt)("li",{parentName:"ul"},"What's your workflow like when you sit down to create an application?"),(0,i.kt)("li",{parentName:"ul"},"What made you decide to attend a coding bootcamp?")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"General Coding")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What are the advantages to testing your code. What about disadvantages?"),(0,i.kt)("li",{parentName:"ul"},"How do you integrate testing into your general workflow when creating an application?"),(0,i.kt)("li",{parentName:"ul"},"Describe an HTTP GET request.")),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"api-consuming-application"},"API-Consuming Application"),(0,i.kt)("p",null,"For the second half of this section, you and your pair will build an application that interacts with an API that you (or your classmates) built at the start of the section. If you're using a classmate's API, make sure you clone or fork the project and push changes to your own repo. Your goal is twofold: continue improving the API itself and make an application for users to interact with!"),(0,i.kt)("p",null,"You can choose to continue working with your pair that you worked with to build the API or you can choose to work with another pair."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"On short weeks"),", you'll have less time to build an API-consuming application. Remember that you'll be expected to build an API and put your best effort into implementing at least one of the five objectives from the ",(0,i.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/c-and-net/building-an-api/further-exploration-with-apis"},"Further Exploration")," lesson for this section's independent project, so if you don't feel comfortable with any of these objectives yet, take the time to practice further."),(0,i.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Application successfully returns responses for each API call."),(0,i.kt)("li",{parentName:"ul"},"Host application successfully consumes API."),(0,i.kt)("li",{parentName:"ul"},"README thoroughly describes all endpoints along with parameters that can be used."),(0,i.kt)("li",{parentName:"ul"},"Application works as expected.")))}d.isMDXComponent=!0}}]);