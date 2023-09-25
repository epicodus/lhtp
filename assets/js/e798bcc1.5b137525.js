"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[81199],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},_=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=c(n),_=i,d=s["".concat(p,".").concat(_)]||s[_]||m[_]||r;return n?a.createElement(d,o(o({ref:e},u),{},{components:n})):a.createElement(d,o({ref:e},u))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=_;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[s]="string"==typeof t?t:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}_.displayName="MDXCreateElement"},35467:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"Communicating With An API - Part 1",id:"communicating_with_an_api___part_1",slug:"communicating_with_an_api___part_1",hide_table_of_contents:!0,sidebar_position:1,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3a_classwork_communicating_with_an_api.md",paginationPrev:null},o=void 0,l={unversionedId:"c_and_net_part_time_evening/building-an-api-part-2/communicating_with_an_api___part_1",id:"c_and_net_part_time_evening/building-an-api-part-2/communicating_with_an_api___part_1",title:"Communicating With An API - Part 1",description:"Goals: Create an application that consumes an API.",source:"@site/docs/c_and_net_part_time_evening/17_building-an-api-part-2/3a_classwork_communicating_with_an_api.md",sourceDirName:"c_and_net_part_time_evening/17_building-an-api-part-2",slug:"/c_and_net_part_time_evening/building-an-api-part-2/communicating_with_an_api___part_1",permalink:"/c_and_net_part_time_evening/building-an-api-part-2/communicating_with_an_api___part_1",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Communicating With An API - Part 1",id:"communicating_with_an_api___part_1",slug:"communicating_with_an_api___part_1",hide_table_of_contents:!0,sidebar_position:1,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3a_classwork_communicating_with_an_api.md",paginationPrev:null},sidebar:"c_and_net_part_time_evening",previous:{title:"Informational Interviews",permalink:"/c_and_net_part_time_evening/building-an-api/informational_interviews"},next:{title:"Communicating With An API - Part 2 (day 2)",permalink:"/c_and_net_part_time_evening/building-an-api-part-2/communicating_with_an_api___part_2_day_2"}},p={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"API-Consuming Application",id:"api-consuming-application",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],u={toc:c},s="wrapper";function m(t){let{components:e,...n}=t;return(0,i.kt)(s,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Goals"),": Create an application that consumes an API."),(0,i.kt)("h2",{id:"warm-up"},"Warm Up"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Over the next two class sessions,  work through this list of common interview questions with your partner before you start coding for the day. Once again, this may be formatted as a mock interview, or you may discuss potential answers together:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Non-Technical")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What about coding interests you? What are your favorite parts?"),(0,i.kt)("li",{parentName:"ul"},"What's your workflow like when you sit down to create an application?"),(0,i.kt)("li",{parentName:"ul"},"What made you decide to attend a coding bootcamp?")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"General Coding")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What are the advantages to testing your code. What about disadvantages?"),(0,i.kt)("li",{parentName:"ul"},"How do you integrate testing into your general workflow when creating an application?"),(0,i.kt)("li",{parentName:"ul"},"Describe an HTTP GET request.")),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"api-consuming-application"},"API-Consuming Application"),(0,i.kt)("p",null,"For the second half of this section, you and your pair will build an application that interacts with an API that you (or your classmates) built at the start of the section. If you're using a classmate's API, make sure you clone or fork the project and push changes to your own repo. Your goal is twofold: continue improving the API itself and make an application for users to interact with!"),(0,i.kt)("p",null,"You can choose to continue working with your pair that you worked with to build the API or you can choose to work with another pair."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"On short weeks"),", you'll have less time to build an API-consuming application. Remember that you'll be expected to build an API and put your best effort into implementing at least one of the five objectives from the ",(0,i.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/c-and-net/building-an-api/further-exploration-with-apis"},"Further Exploration")," lesson for this section's independent project, so if you don't feel comfortable with any of these objectives yet, take the time to practice further."),(0,i.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Application successfully returns responses for each API call."),(0,i.kt)("li",{parentName:"ul"},"Host application successfully consumes API."),(0,i.kt)("li",{parentName:"ul"},"README thoroughly describes all endpoints along with parameters that can be used."),(0,i.kt)("li",{parentName:"ul"},"Application works as expected.")))}m.isMDXComponent=!0}}]);