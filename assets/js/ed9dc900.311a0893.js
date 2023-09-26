"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[85077],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),b=r,m=d["".concat(l,".").concat(b)]||d[b]||u[b]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},51666:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"Database Basics Objectives",id:"database-basics-objectives",slug:"database-basics-objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0a_database_basics_objectives.md",paginationPrev:null},o=void 0,s={unversionedId:"c-and-net-part-time-evening/database-basics/database-basics-objectives",id:"c-and-net-part-time-evening/database-basics/database-basics-objectives",title:"Database Basics Objectives",description:"Up until this point, data for our programs has been stored in our computers' RAM, also known as random-access memory. This is a fast, temporary place to store information but it's not suitable for long-term storage.",source:"@site/docs/c-and-net-part-time-evening/10_database-basics/0a-database-basics-objectives.md",sourceDirName:"c-and-net-part-time-evening/10_database-basics",slug:"/c-and-net-part-time-evening/database-basics/database-basics-objectives",permalink:"/c-and-net-part-time-evening/database-basics/database-basics-objectives",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Database Basics Objectives",id:"database-basics-objectives",slug:"database-basics-objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0a_database_basics_objectives.md",paginationPrev:null},sidebar:"c-and-net-part-time-evening",previous:{title:"Basic Web Applications Independent Project",permalink:"/c-and-net-part-time-evening/basic-web-applications-part-2/basic-web-applications-independent-project"},next:{title:"Introduction to Databases",permalink:"/c-and-net-part-time-evening/database-basics/introduction-to-databases"}},l={},c=[{value:"Independent Project Objectives",id:"independent-project-objectives",level:2},{value:"Previous Objectives",id:"previous-objectives",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Up until this point, data for our programs has been stored in our computers' ",(0,r.kt)("strong",{parentName:"p"},"RAM"),", also known as ",(0,r.kt)("strong",{parentName:"p"},"random-access memory"),". This is a fast, temporary place to store information but it's not suitable for long-term storage."),(0,r.kt)("p",null,"Anything we want to save after halting our applications must be written to permanent storage on a hard disk. Starting in this section, we will begin using databases that will permanently store our data."),(0,r.kt)("p",null,"During the first part of the section, we'll learn how relational databases work and experiment with the ",(0,r.kt)("strong",{parentName:"p"},"SQL")," language to read, write, and query databases. We'll cover how to configure our own databases using tools including MySQL Workbench and MySQL Community Server. We'll build our database methods from scratch so we can see how an ORM (Object-Relational Mapping) tool works under the hood."),(0,r.kt)("p",null,"During the second part of the section, we'll use an ORM library called Entity Framework Core to make working with a database much easier. This will take care of the boilerplate code for us so we can focus on coding our applications."),(0,r.kt)("h2",{id:"independent-project-objectives"},"Independent Project Objectives"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"At the end of this section, you will complete an independent project. Your code will be reviewed for the following objectives:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do the database table and column names follow proper naming conventions? "),(0,r.kt)("li",{parentName:"ul"},"Do the project folder and exported database follow the specific naming requirements for this project?"),(0,r.kt)("li",{parentName:"ul"},"Are the instructions for re-creating your database thorough and clear?"),(0,r.kt)("li",{parentName:"ul"},"Is there a one-to-many relationship set up correctly in the database?"),(0,r.kt)("li",{parentName:"ul"},"Is CREATE functionality included for one class and is CREATE and VIEW functionality included for the other class?"),(0,r.kt)("li",{parentName:"ul"},"Is EF Core used for communication with the database?"),(0,r.kt)("li",{parentName:"ul"},"Build files and sensitive information are included in ",(0,r.kt)("inlineCode",{parentName:"li"},".gitignore")," file and is not to be tracked by Git, and includes instructions on how to create the ",(0,r.kt)("inlineCode",{parentName:"li"},"appsettings.json")," and set up the project."),(0,r.kt)("li",{parentName:"ul"},"Project is in a polished, portfolio-quality state."),(0,r.kt)("li",{parentName:"ul"},"The prompt\u2019s required functionality and baseline project requirements are in place by the deadline.")),(0,r.kt)("h3",{id:"previous-objectives"},"Previous Objectives"),(0,r.kt)("p",null,"Additionally, the following objectives from previous sections will continue to apply:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Project uses two or more controllers."),(0,r.kt)("li",{parentName:"ul"},"GET and POST requests/responses are used successfully."),(0,r.kt)("li",{parentName:"ul"},"MVC routes follow RESTful conventions."),(0,r.kt)("li",{parentName:"ul"},"Logic is easy to understand."),(0,r.kt)("li",{parentName:"ul"},"Code and Git documentation follows best practices (descriptive variables names, proper indentation and spacing, separation between front and back-end logic, detailed commit messages in the correct tense, and a well-formatted README).")))}u.isMDXComponent=!0}}]);