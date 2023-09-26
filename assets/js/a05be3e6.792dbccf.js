"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[44613],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(y,r(r({ref:t},p),{},{components:n})):a.createElement(y,r({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={title:"Many-To-Many Objectives",id:"many-to-many-objectives",slug:"many-to-many-objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0a_advanced_database_objectives.md",paginationPrev:null},r=void 0,s={unversionedId:"c-and-net-part-time/many-to-many-relationships/many-to-many-objectives",id:"c-and-net-part-time/many-to-many-relationships/many-to-many-objectives",title:"Many-To-Many Objectives",description:"In the last course section, we learned about MySQL databases and using Entity Framework Core to simplify our projects. In this section, we'll continue working with EF Core and learn how to build out more complex applications with many-to-many relationships.",source:"@site/docs/c-and-net-part-time/12_many-to-many-relationships/0a-advanced-database-objectives.md",sourceDirName:"c-and-net-part-time/12_many-to-many-relationships",slug:"/c-and-net-part-time/many-to-many-relationships/many-to-many-objectives",permalink:"/c-and-net-part-time/many-to-many-relationships/many-to-many-objectives",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Many-To-Many Objectives",id:"many-to-many-objectives",slug:"many-to-many-objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0a_advanced_database_objectives.md",paginationPrev:null},sidebar:"c-and-net-part-time",previous:{title:"Database Basics Independent Project",permalink:"/c-and-net-part-time/database-basics-part-2/database-basics-independent-project"},next:{title:"Many-to-Many Relationship Review",permalink:"/c-and-net-part-time/many-to-many-relationships/many-to-many-relationship-review"}},l={},c=[{value:"Independent Project Objectives",id:"independent-project-objectives",level:2},{value:"Previous Objectives",id:"previous-objectives",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the last course section, we learned about MySQL databases and using Entity Framework Core to simplify our projects. In this section, we'll continue working with EF Core and learn how to build out more complex applications with many-to-many relationships."),(0,i.kt)("p",null,"We'll also learn how to create and manage our databases using ",(0,i.kt)("strong",{parentName:"p"},"migrations")," and build many-to-many relationships in EF Core using ",(0,i.kt)("strong",{parentName:"p"},"join entities"),". "),(0,i.kt)("p",null,"Finally, we'll learn how to validate our models with validation attributes and how to display data from multiple database tables on our To Do List's splash page."),(0,i.kt)("h2",{id:"independent-project-objectives"},"Independent Project Objectives"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"At the end of this section, you will complete an independent project. Your code will be reviewed for the following objectives:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Does at least one of your classes have all CRUD methods implemented in your app?"),(0,i.kt)("li",{parentName:"ul"},"Are you able to view both sides of the many-many relationship? For a particular instance of a class, are you able to view all of the instances of the ",(0,i.kt)("strong",{parentName:"li"},"other")," class that are related to it?"),(0,i.kt)("li",{parentName:"ul"},"Build files and sensitive information are included in ",(0,i.kt)("inlineCode",{parentName:"li"},".gitignore")," file and is not to be tracked by Git, and includes instructions on how to create the ",(0,i.kt)("inlineCode",{parentName:"li"},"appsettings.json")," and set up the project."),(0,i.kt)("li",{parentName:"ul"},"Project is in a polished, portfolio-quality state."),(0,i.kt)("li",{parentName:"ul"},"The prompt\u2019s required functionality and baseline project requirements are in place by the deadline.")),(0,i.kt)("h3",{id:"previous-objectives"},"Previous Objectives"),(0,i.kt)("p",null,"For reference, here are the previous objectives that continue to apply:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Do the database table and column names follow both the specific requirements for this project and general .NET naming conventions?"),(0,i.kt)("li",{parentName:"ul"},"Are the instructions for re-creating your database thorough and clear?"),(0,i.kt)("li",{parentName:"ul"},"Build files and sensitive information is included in ",(0,i.kt)("inlineCode",{parentName:"li"},".gitignore")," file and is not to be tracked by Git, and includes instructions on how to create the ",(0,i.kt)("inlineCode",{parentName:"li"},"appsettings.json")," and set up the project."),(0,i.kt)("li",{parentName:"ul"},"Did you follow naming conventions?"),(0,i.kt)("li",{parentName:"ul"},"Does your code have proper indentation and spacing?"),(0,i.kt)("li",{parentName:"ul"},"Did you include a README with a description of the program, setup instructions for the database, a copyright, a license, and your name?"),(0,i.kt)("li",{parentName:"ul"},'Is the project tracked in Git, and did you regularly make commits with clear messages that finish the phrase "This commit will\u2026"?')))}d.isMDXComponent=!0}}]);