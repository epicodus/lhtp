"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[4600],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>w});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,w=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(w,i(i({ref:t},u),{},{components:r})):a.createElement(w,i({ref:t},u))}));function w(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27855:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Introducing Entity Framework Core",id:"introducing_entity_framework_core",slug:"introducing_entity_framework_core",hide_table_of_contents:!0,sidebar_position:22,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/8_database-basics/1b_introducing_entity_framework.md"},i=void 0,s={unversionedId:"c_and_net/database-basics/introducing_entity_framework_core",id:"c_and_net/database-basics/introducing_entity_framework_core",title:"Introducing Entity Framework Core",description:"So far, we've managed all SQL statements ourselves. We've written code both to issue SQL commands to the database and to process query results with classes like MySqlCommand, MySqlParameter, and MySqlDataReader from the MySqlConnector library.",source:"@site/docs/c_and_net/8_database-basics/1b_introducing_entity_framework.md",sourceDirName:"c_and_net/8_database-basics",slug:"/c_and_net/database-basics/introducing_entity_framework_core",permalink:"/lhtp/c_and_net/database-basics/introducing_entity_framework_core",draft:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{title:"Introducing Entity Framework Core",id:"introducing_entity_framework_core",slug:"introducing_entity_framework_core",hide_table_of_contents:!0,sidebar_position:22,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/8_database-basics/1b_introducing_entity_framework.md"},sidebar:"c_and_net",previous:{title:"To Do List and Project Rebuild",permalink:"/lhtp/c_and_net/database-basics/to_do_list_and_project_rebuild"},next:{title:"Configuration for Entity Framework Core",permalink:"/lhtp/c_and_net/database-basics/configuration_for_entity_framework_core"}},l={},c=[{value:"Object Relational Mapping (ORM)",id:"object-relational-mapping-orm",level:2},{value:"Entity Framework Core",id:"entity-framework-core",level:2},{value:"Versions and Types",id:"versions-and-types",level:3},{value:"Next Steps",id:"next-steps",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"So far, we've managed all SQL statements ourselves. We've written code both to issue SQL commands to the database and to process query results with classes like ",(0,n.kt)("inlineCode",{parentName:"p"},"MySqlCommand"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"MySqlParameter"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"MySqlDataReader")," from the ",(0,n.kt)("inlineCode",{parentName:"p"},"MySqlConnector")," library."),(0,n.kt)("p",null,"Now we're going to begin exploring more advanced options. We'll use an ",(0,n.kt)("strong",{parentName:"p"},"object relational mapping")," (or ",(0,n.kt)("strong",{parentName:"p"},"ORM"),") framework to help simplify and manage our database interactions. In this lesson, we'll briefly discuss what an ORM does and why it's beneficial. Then we'll introduce the specific ORM our ASP.NET Core 6.0 applications will use: ",(0,n.kt)("strong",{parentName:"p"},"Entity Framework Core"),"."),(0,n.kt)("p",null,"In following lessons, we'll walk through how to configure and use EF Core in our To Do List app. You are welcome to code along with the lessons, or simply read through them. Throughout the walkthrough we'll share links to an example To Do List project that uses EF Core to communicate with a MySQL database."),(0,n.kt)("h2",{id:"object-relational-mapping-orm"},"Object Relational Mapping (ORM)"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Object-Relational Mapping (ORM)")," allows us to query and manipulate database data in an object-oriented fashion. Essentially, ORMs turn database info into objects of the language we're working in. This way we can focus on writing in C# instead of needing to deal with raw SQL."),(0,n.kt)("p",null,"Object Relational Mapping is a language-agnostic concept. Different languages have different ORM libraries. For instance, Ruby uses a tool called Active Record, Python's commonly-used Django framework includes ORM, and Java has multiple open-source options available."),(0,n.kt)("h2",{id:"entity-framework-core"},"Entity Framework Core"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Entity Framework Core")," (also called ",(0,n.kt)("strong",{parentName:"p"},"EF Core"),") is a powerful library that simplifies the process of mapping C# objects to database records. We can use EF Core to vastly simplify our database CRUD functionality."),(0,n.kt)("p",null,"While we'll use EF Core to communicate with a MySQL database, EF Core works with many types of databases. To see a complete list, visit ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/ef/core/providers/?tabs=dotnet-core-cli"},"the MS Docs on EF Core Database Providers"),"."),(0,n.kt)("h3",{id:"versions-and-types"},"Versions and Types"),(0,n.kt)("p",null,"Entity Framework comes in two forms: Entity Framework and Entity Framework Core. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Entity Framework (EF) was built to work with the .NET Framework and is not compatible with applications built using .NET. Notably, EF only works on Windows computers, just like the .NET Framework.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Entity Framework Core (EF Core) was built to work with .NET, the software development kit (SDK) that we use in LearnHowToProgram.com coursework. Just like .NET, EF Core is open-source and cross-platform. EF Core has fewer features than Entity Framework, however it is lightweight and recommended for applications that don't require highly complex data manipulation. "))),(0,n.kt)("p",null,"Because we use .NET 6.0, so we must also use Entity Framework Core version 6.0."),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"In the next few lessons we'll walk through configuring Entity Framework Core to work with our own applications. Then we'll use EF Core to help us write CRUD functionality that allows us to interact with our database without manually-constructed MySQL commands."))}d.isMDXComponent=!0}}]);