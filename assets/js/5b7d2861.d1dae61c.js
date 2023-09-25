"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[5411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(y,r(r({ref:t},p),{},{components:n})):a.createElement(y,r({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56474:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={title:"1. Many-To-Many Objectives",id:"many_to_many_objectives",slug:"many_to_many_objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/9_many-to-many-relationships/0a_advanced_database_objectives.md",paginationPrev:null},r=void 0,s={unversionedId:"c_and_net/many-to-many-relationships/many_to_many_objectives",id:"c_and_net/many-to-many-relationships/many_to_many_objectives",title:"1. Many-To-Many Objectives",description:"In the last course section, we learned about MySQL databases and using Entity Framework Core to simplify our projects. In this section, we'll continue working with EF Core and learn how to build out more complex applications with many-to-many relationships.",source:"@site/docs/c_and_net/9_many-to-many-relationships/0a_advanced_database_objectives.md",sourceDirName:"c_and_net/9_many-to-many-relationships",slug:"/c_and_net/many-to-many-relationships/many_to_many_objectives",permalink:"/lhtp/c_and_net/many-to-many-relationships/many_to_many_objectives",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1. Many-To-Many Objectives",id:"many_to_many_objectives",slug:"many_to_many_objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/9_many-to-many-relationships/0a_advanced_database_objectives.md",paginationPrev:null},sidebar:"c_and_net",previous:{title:"1. Database Basics Independent Project",permalink:"/lhtp/c_and_net/database-basics/database_basics_independent_project"},next:{title:"2. Many-to-Many Relationship Review",permalink:"/lhtp/c_and_net/many-to-many-relationships/many_to_many_relationship_review"}},l={},c=[{value:"Independent Project Objectives",id:"independent-project-objectives",level:2},{value:"Previous Objectives",id:"previous-objectives",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the last course section, we learned about MySQL databases and using Entity Framework Core to simplify our projects. In this section, we'll continue working with EF Core and learn how to build out more complex applications with many-to-many relationships."),(0,o.kt)("p",null,"We'll also learn how to create and manage our databases using ",(0,o.kt)("strong",{parentName:"p"},"migrations")," and build many-to-many relationships in EF Core using ",(0,o.kt)("strong",{parentName:"p"},"join entities"),". "),(0,o.kt)("p",null,"Finally, we'll learn how to validate our models with validation attributes and how to display data from multiple database tables on our To Do List's splash page."),(0,o.kt)("h2",{id:"independent-project-objectives"},"Independent Project Objectives"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"At the end of this section, you will complete an independent project. Your code will be reviewed for the following objectives:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Does at least one of your classes have all CRUD methods implemented in your app?"),(0,o.kt)("li",{parentName:"ul"},"Are you able to view both sides of the many-many relationship? For a particular instance of a class, are you able to view all of the instances of the ",(0,o.kt)("strong",{parentName:"li"},"other")," class that are related to it?"),(0,o.kt)("li",{parentName:"ul"},"Build files and sensitive information are included in ",(0,o.kt)("inlineCode",{parentName:"li"},".gitignore")," file and is not to be tracked by Git, and includes instructions on how to create the ",(0,o.kt)("inlineCode",{parentName:"li"},"appsettings.json")," and set up the project."),(0,o.kt)("li",{parentName:"ul"},"Project is in a polished, portfolio-quality state."),(0,o.kt)("li",{parentName:"ul"},"The prompt\u2019s required functionality and baseline project requirements are in place by the deadline.")),(0,o.kt)("h3",{id:"previous-objectives"},"Previous Objectives"),(0,o.kt)("p",null,"For reference, here are the previous objectives that continue to apply:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Do the database table and column names follow both the specific requirements for this project and general .NET naming conventions?"),(0,o.kt)("li",{parentName:"ul"},"Are the instructions for re-creating your database thorough and clear?"),(0,o.kt)("li",{parentName:"ul"},"Build files and sensitive information is included in ",(0,o.kt)("inlineCode",{parentName:"li"},".gitignore")," file and is not to be tracked by Git, and includes instructions on how to create the ",(0,o.kt)("inlineCode",{parentName:"li"},"appsettings.json")," and set up the project."),(0,o.kt)("li",{parentName:"ul"},"Did you follow naming conventions?"),(0,o.kt)("li",{parentName:"ul"},"Does your code have proper indentation and spacing?"),(0,o.kt)("li",{parentName:"ul"},"Did you include a README with a description of the program, setup instructions for the database, a copyright, a license, and your name?"),(0,o.kt)("li",{parentName:"ul"},'Is the project tracked in Git, and did you regularly make commits with clear messages that finish the phrase "This commit will\u2026"?')))}d.isMDXComponent=!0}}]);