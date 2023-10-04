"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[1739],{30876:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},50544:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(7896),r=(a(2784),a(30876));const i={title:"Building an API - Part 2 (day 2)",id:"building-an-api---part-2-day-2",slug:"building-an-api---part-2-day-2",hide_table_of_contents:!0,sidebar_position:18,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1a_classwork_building_an_api.md"},o=void 0,l={unversionedId:"c-and-net/building-an-api/building-an-api---part-2-day-2",id:"c-and-net/building-an-api/building-an-api---part-2-day-2",title:"Building an API - Part 2 (day 2)",description:"Goal: Build and test your own API. Once you've completed the basic functionality for your API, review the lesson Further Exploration with APIs to learn about additional API-building objectives.",source:"@site/docs/c-and-net/16_building-an-api/1a-classwork-building-an-api-day-2.md",sourceDirName:"c-and-net/16_building-an-api",slug:"/c-and-net/building-an-api/building-an-api---part-2-day-2",permalink:"/c-and-net/building-an-api/building-an-api---part-2-day-2",draft:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"Building an API - Part 2 (day 2)",id:"building-an-api---part-2-day-2",slug:"building-an-api---part-2-day-2",hide_table_of_contents:!0,sidebar_position:18,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1a_classwork_building_an_api.md"},sidebar:"c-and-net",previous:{title:"Prior Course Section Survey",permalink:"/c-and-net/building-an-api/prior-course-section-survey"},next:{title:"MVC Client: GetAll()",permalink:"/c-and-net/building-an-api/mvc-client-getall"}},s={},u=[{value:"Warm Up",id:"warm-up",level:2},{value:"Building Your Own API",id:"building-your-own-api",level:2},{value:"Code",id:"code",level:2},{value:"Travel API",id:"travel-api",level:3},{value:"Message Board API",id:"message-board-api",level:3},{value:"API of Choice",id:"api-of-choice",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goal"),": Build and test your own API. Once you've completed the basic functionality for your API, review the lesson ",(0,r.kt)("em",{parentName:"p"},"Further Exploration with APIs")," to learn about additional API-building objectives."),(0,r.kt)("h2",{id:"warm-up"},"Warm Up"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Discuss possible answers to these common C#-specific interview questions. You can format this as a mock interview or brainstorm answers as a team:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What makes C# an object-oriented programming language?"),(0,r.kt)("li",{parentName:"ul"},"What is the difference between static and instance methods? When are each used?"),(0,r.kt)("li",{parentName:"ul"},"What is the difference between public and private?")),(0,r.kt)("h2",{id:"building-your-own-api"},"Building Your Own API"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For the first half of the section"),", you'll build your own API. You should also use Postman to manually test your calls. When you create your documentation, keep in mind that your primary API users will be developers implementing the API into their own applications."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For the second half of the section"),", you'll build an application that communicates with one of the APIs either you or your peers built in class during the first half of the section. You\u2019ll also continue to build out and refactor the API you're working with. "),(0,r.kt)("p",null,"You may work with a pair for the entire course section or split the section into two. This means 2 two-day projects for full-time students, or 2 week-long projects for part-time students."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"On short weeks"),", you'll spend most of your time on building out the API and pursuing further exploration. At least one class will be set aside for building an application that communicates with your API."),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Select an API to build from the options below, and make sure to complete the following requirements:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Whatever API you choose to build, you'll be expected to implement a further exploration topic from the lesson ",(0,r.kt)("a",{parentName:"strong",href:"https://new.learnhowtoprogram.com/c-and-net/building-an-api/further-exploration-with-apis"},"Further Exploration with APIs"),".")," Take some time to learn a bit about each further exploration topic, and then pick at least one to implement in your API."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. You are expected to create robust documentation of your API's endpoints in your project's README.md.")," For any further exploration topic that you implement in your API you should explain what it is and how to interact with it."),(0,r.kt)("h3",{id:"travel-api"},"Travel API"),(0,r.kt)("p",null,"Build an API that allows users to ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," reviews about various travel destinations around the world. Here are some user stories to get started. Note that you will have to create custom endpoints for some of these user stories."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As a user, I want to ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"POST")," reviews about travel destinations."),(0,r.kt)("li",{parentName:"ul"},"As a user, I want to ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," reviews by country or city."),(0,r.kt)("li",{parentName:"ul"},"As a user, I want to see the most popular travel destinations by number of reviews or by overall rating."),(0,r.kt)("li",{parentName:"ul"},"As a user, I want to ",(0,r.kt)("inlineCode",{parentName:"li"},"PUT")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"DELETE")," reviews, but only if I wrote them. (Start by requiring a ",(0,r.kt)("inlineCode",{parentName:"li"},"user_name")," param to match the ",(0,r.kt)("inlineCode",{parentName:"li"},"user_name")," of the author on the message. You can always try authentication later.)"),(0,r.kt)("li",{parentName:"ul"},"As a user, I want to look up random destinations just for fun.")),(0,r.kt)("h3",{id:"message-board-api"},"Message Board API"),(0,r.kt)("p",null,"Create a message board service that can be accessed via your API. Users should be able to ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," messages for specific message boards. Note that you will have to create custom endpoints for some of these user stories."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As a user, I want to be able to ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," all messages related to a specific group."),(0,r.kt)("li",{parentName:"ul"},"As a user, I want to be able to ",(0,r.kt)("inlineCode",{parentName:"li"},"POST")," messages to a specific group."),(0,r.kt)("li",{parentName:"ul"},"As a user, I want to be able to see a list of all groups."),(0,r.kt)("li",{parentName:"ul"},"As a user, I want to input date parameters and retrieve only messages posted during that timeframe."),(0,r.kt)("li",{parentName:"ul"},"As a user, I want to be able to ",(0,r.kt)("inlineCode",{parentName:"li"},"PUT")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"DELETE")," messages, but only if I wrote them. (Start by requiring a ",(0,r.kt)("inlineCode",{parentName:"li"},"user_name")," param to match the ",(0,r.kt)("inlineCode",{parentName:"li"},"user_name")," of the author on the message. You can always try authentication later.)")),(0,r.kt)("h3",{id:"api-of-choice"},"API of Choice"),(0,r.kt)("p",null,"APIs aren't just used for data interaction and manipulation. They can also be used for computation as well. Build a database-centered or computation API around an area of interest to you. Make sure you write your own user stories first."),(0,r.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Application successfully returns responses for each API call."),(0,r.kt)("li",{parentName:"ul"},"README thoroughly describes all endpoints along with parameters that can be used."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://new.learnhowtoprogram.com/c-and-net/building-an-api/further-exploration-with-apis"},"further exploration topic")," has been implemented in the API."),(0,r.kt)("li",{parentName:"ul"},"README thoroughly describes the further exploration topic that's been implemented in the API."),(0,r.kt)("li",{parentName:"ul"},"Application works as expected.")))}c.isMDXComponent=!0}}]);