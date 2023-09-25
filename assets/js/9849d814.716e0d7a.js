"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[36229],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(a),b=o,m=p["".concat(c,".").concat(b)]||p[b]||u[b]||r;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},5016:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));const r={title:"Database Basics Objectives",id:"database_basics_objectives",slug:"database_basics_objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0a_database_basics_objectives.md",paginationPrev:null},i=void 0,s={unversionedId:"c_and_net_classic/database-basics/database_basics_objectives",id:"c_and_net_classic/database-basics/database_basics_objectives",title:"Database Basics Objectives",description:"Up until this point, data for our programs has been stored in our computers' RAM, also known as random-access memory. This is a fast, temporary place to store information but it's not suitable for long-term storage.",source:"@site/docs/c_and_net_classic/8_database-basics/0a_database_basics_objectives.md",sourceDirName:"c_and_net_classic/8_database-basics",slug:"/c_and_net_classic/database-basics/database_basics_objectives",permalink:"/c_and_net_classic/database-basics/database_basics_objectives",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Database Basics Objectives",id:"database_basics_objectives",slug:"database_basics_objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0a_database_basics_objectives.md",paginationPrev:null},sidebar:"c_and_net_classic",previous:{title:"Basic Web Applications Independent Project",permalink:"/c_and_net_classic/basic-web-applications/basic_web_applications_independent_project"},next:{title:"Introduction to Databases",permalink:"/c_and_net_classic/database-basics/introduction_to_databases"}},c={},l=[{value:"Independent Project Objectives",id:"independent-project-objectives",level:2},{value:"Previous Objectives",id:"previous-objectives",level:3}],d={toc:l},p="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Up until this point, data for our programs has been stored in our computers' ",(0,o.kt)("strong",{parentName:"p"},"RAM"),", also known as ",(0,o.kt)("strong",{parentName:"p"},"random-access memory"),". This is a fast, temporary place to store information but it's not suitable for long-term storage."),(0,o.kt)("p",null,"Anything we want to save after halting our applications must be written to permanent storage on a hard disk. Starting in this section, we will begin using databases that will permanently store our data."),(0,o.kt)("p",null,"During the first part of the section, we'll learn how relational databases work and experiment with the ",(0,o.kt)("strong",{parentName:"p"},"SQL")," language to read, write, and query databases. We'll cover how to configure our own databases using tools including MySQL Workbench and MySQL Community Server. We'll build our database methods from scratch so we can see how an ORM (Object-Relational Mapping) tool works under the hood."),(0,o.kt)("p",null,"During the second part of the section, we'll use an ORM library called Entity Framework Core to make working with a database much easier. This will take care of the boilerplate code for us so we can focus on coding our applications."),(0,o.kt)("h2",{id:"independent-project-objectives"},"Independent Project Objectives"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"At the end of this section, you will complete an independent project. Your code will be reviewed for the following objectives:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Do the database table and column names follow proper naming conventions? "),(0,o.kt)("li",{parentName:"ul"},"Do the project folder and exported database follow the specific naming requirements for this project?"),(0,o.kt)("li",{parentName:"ul"},"Are the instructions for re-creating your database thorough and clear?"),(0,o.kt)("li",{parentName:"ul"},"Is there a one-to-many relationship set up correctly in the database?"),(0,o.kt)("li",{parentName:"ul"},"Is CREATE functionality included for one class and is CREATE and VIEW functionality included for the other class?"),(0,o.kt)("li",{parentName:"ul"},"Is EF Core used for communication with the database?"),(0,o.kt)("li",{parentName:"ul"},"Build files and sensitive information are included in ",(0,o.kt)("inlineCode",{parentName:"li"},".gitignore")," file and is not to be tracked by Git, and includes instructions on how to create the ",(0,o.kt)("inlineCode",{parentName:"li"},"appsettings.json")," and set up the project."),(0,o.kt)("li",{parentName:"ul"},"Project is in a polished, portfolio-quality state."),(0,o.kt)("li",{parentName:"ul"},"The prompt\u2019s required functionality and baseline project requirements are in place by the deadline.")),(0,o.kt)("h3",{id:"previous-objectives"},"Previous Objectives"),(0,o.kt)("p",null,"Additionally, the following objectives from previous sections will continue to apply:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Project uses two or more controllers."),(0,o.kt)("li",{parentName:"ul"},"GET and POST requests/responses are used successfully."),(0,o.kt)("li",{parentName:"ul"},"MVC routes follow RESTful conventions."),(0,o.kt)("li",{parentName:"ul"},"Logic is easy to understand."),(0,o.kt)("li",{parentName:"ul"},"Code and Git documentation follows best practices (descriptive variables names, proper indentation and spacing, separation between front and back-end logic, detailed commit messages in the correct tense, and a well-formatted README).")))}u.isMDXComponent=!0}}]);