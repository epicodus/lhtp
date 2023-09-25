"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[2900],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),b=r,m=u["".concat(s,".").concat(b)]||u[b]||d[b]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},11150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"1. Basic Web Applications Objectives",id:"basic_web_applications_objectives",slug:"basic_web_applications_objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/8_basic-web-applications/0a_web_apps_with_c_objectives.md",paginationPrev:null},o=void 0,l={unversionedId:"c_and_net_part_time/basic-web-applications/basic_web_applications_objectives",id:"c_and_net_part_time/basic-web-applications/basic_web_applications_objectives",title:"1. Basic Web Applications Objectives",description:"All C# apps we've created thus far have run in the command line. We've made cool stuff, sure, but without a front-end user interface our user interaction remains fairly limited.",source:"@site/docs/c_and_net_part_time/8_basic-web-applications/0a_web_apps_with_c_objectives.md",sourceDirName:"c_and_net_part_time/8_basic-web-applications",slug:"/c_and_net_part_time/basic-web-applications/basic_web_applications_objectives",permalink:"/lhtp/c_and_net_part_time/basic-web-applications/basic_web_applications_objectives",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1. Basic Web Applications Objectives",id:"basic_web_applications_objectives",slug:"basic_web_applications_objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/8_basic-web-applications/0a_web_apps_with_c_objectives.md",paginationPrev:null},sidebar:"c_and_net_part_time",previous:{title:"1. Test-Driven Development with C# Independent Project",permalink:"/lhtp/c_and_net_part_time/test-driven-development-with-c-part-2/test_driven_development_with_c_independent_project"},next:{title:"2. How the Web Works: Clients and Servers",permalink:"/lhtp/c_and_net_part_time/basic-web-applications/how_the_web_works_clients_and_servers"}},s={},c=[{value:"Independent Project Objectives",id:"independent-project-objectives",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"All C# apps we've created thus far have run in the command line. We've made cool stuff, sure, but without a front-end user interface our user interaction remains fairly limited."),(0,r.kt)("p",null,"But we're about to change that! In this section, we'll begin creating C# web applications that run in the browser, like a 'real' website, instead of just the command line. We'll use a special web application framework called ",(0,r.kt)("strong",{parentName:"p"},"ASP.NET Core MVC")," to do this."),(0,r.kt)("p",null,"Note that ",(0,r.kt)("strong",{parentName:"p"},"ASP.NET Core")," is an open-source framework within the .NET 6 framework. ",(0,r.kt)("strong",{parentName:"p"},"ASP.NET Core")," itself contains multiple frameworks to create cross-platform web applications. These include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ASP.NET Core MVC"),(0,r.kt)("li",{parentName:"ul"},"ASP.NET Core Razor Pages"),(0,r.kt)("li",{parentName:"ul"},"ASP.NET Core Blazor"),(0,r.kt)("li",{parentName:"ul"},"ASP.NET Core Web APIs"),(0,r.kt)("li",{parentName:"ul"},"And more!")),(0,r.kt)("p",null,"As noted above, we'll be working with ASP.NET Core MVC. ",(0,r.kt)("strong",{parentName:"p"},"MVC")," stands for ",(0,r.kt)("strong",{parentName:"p"},"Model-View-Controller"),", which is a coding pattern that separates code into 3 sections: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The model \u2014 what defines our objects"),(0,r.kt)("li",{parentName:"ul"},"The view \u2014 what users see on the website"),(0,r.kt)("li",{parentName:"ul"},"The controller \u2014 the mechanism that routes website traffic")),(0,r.kt)("p",null,"We will start by delving into routing and app creation with ASP.NET Core MVC's routing system. Then we will build our own custom C# classes and methods. Your work this section will cover the following tools and concepts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Server-Side MVCs"),(0,r.kt)("li",{parentName:"ul"},"HTTP methods"),(0,r.kt)("li",{parentName:"ul"},"RESTful routing"),(0,r.kt)("li",{parentName:"ul"},"Objects within objects"),(0,r.kt)("li",{parentName:"ul"},"Razor markup and syntax"),(0,r.kt)("li",{parentName:"ul"},"Saving data with C#")),(0,r.kt)("p",null,"By the end of the section, you should be able to create an ASP.NET Core MVC web application with good test coverage of model logic. "),(0,r.kt)("p",null,"When searching on the internet or conversing with other developers, always be careful to specify that you are using ASP.NET Core version 6. Note that the version of ASP.NET Core will always match the version of .NET that we use."),(0,r.kt)("h2",{id:"independent-project-objectives"},"Independent Project Objectives"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"At the end of this section, you will complete an independent project. Your code will be reviewed for the following objectives:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A splash page is used."),(0,r.kt)("li",{parentName:"ul"},"Project has ",(0,r.kt)("inlineCode",{parentName:"li"},"Vendor")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Order")," classes."),(0,r.kt)("li",{parentName:"ul"},"Project uses two or more controllers."),(0,r.kt)("li",{parentName:"ul"},"Models are thoroughly tested."),(0,r.kt)("li",{parentName:"ul"},"GET and POST requests/responses are used successfully."),(0,r.kt)("li",{parentName:"ul"},"MVC routes follow RESTful conventions."),(0,r.kt)("li",{parentName:"ul"},"Project is in a polished, portfolio-quality state."),(0,r.kt)("li",{parentName:"ul"},"The prompt\u2019s required functionality and baseline project requirements are in place by the deadline.")))}d.isMDXComponent=!0}}]);