"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[91762],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},56333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const o={title:"Authentication with Identity Objectives",id:"authentication_with_identity_objectives",slug:"authentication_with_identity_objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0a_authentication_with_identity_objectives.md",paginationPrev:null},r=void 0,l={unversionedId:"c_and_net_part_time_evening/authentication-with-identity/authentication_with_identity_objectives",id:"c_and_net_part_time_evening/authentication-with-identity/authentication_with_identity_objectives",title:"Authentication with Identity Objectives",description:"In this course section, we'll learn how to use authentication and authorization in our projects. We will use Identity to handle authentication",source:"@site/docs/c_and_net_part_time_evening/14_authentication-with-identity/0a_authentication_with_identity_objectives.md",sourceDirName:"c_and_net_part_time_evening/14_authentication-with-identity",slug:"/c_and_net_part_time_evening/authentication-with-identity/authentication_with_identity_objectives",permalink:"/c_and_net_part_time_evening/authentication-with-identity/authentication_with_identity_objectives",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Authentication with Identity Objectives",id:"authentication_with_identity_objectives",slug:"authentication_with_identity_objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0a_authentication_with_identity_objectives.md",paginationPrev:null},sidebar:"c_and_net_part_time_evening",previous:{title:"Many-To-Many Independent Project",permalink:"/c_and_net_part_time_evening/many-to-many-relationships-part-2/many_to_many_independent_project"},next:{title:"Async and Await",permalink:"/c_and_net_part_time_evening/authentication-with-identity/async_and_await"}},s={},c=[{value:"Independent Project Objectives",id:"independent-project-objectives",level:2},{value:"Previous Objectives",id:"previous-objectives",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this course section, we'll learn how to use authentication and authorization in our projects. We will use Identity to handle ",(0,a.kt)("strong",{parentName:"p"},"authentication"),": to register, log in, and log out users. In the process, we'll learn how to do the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Write asynchronous C# code using ",(0,a.kt)("inlineCode",{parentName:"li"},"Task<TResult>")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"async/await")),(0,a.kt)("li",{parentName:"ul"},"Create a ViewModel, a model that only meant to be used in our views"),(0,a.kt)("li",{parentName:"ul"},"And we'll continue to use validation attributes to validate user input into our registration and login forms. ")),(0,a.kt)("p",null,"We'll also learn how to use ASP.NET Core tools to implement basic ",(0,a.kt)("strong",{parentName:"p"},"authorization"),", which will allow our applications to determine what users should be allowed to do."),(0,a.kt)("p",null,"Finally, we'll take some time to learn how to make API calls using RestSharp and Newtonsoft.Json, partially in preparation for the next section when you will have the opportunity to build your own API."),(0,a.kt)("h2",{id:"independent-project-objectives"},"Independent Project Objectives"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"At the end of this section, you will complete an independent project. Take note, you will not be required to make an API call or parse its response for this project. Your code will be reviewed for the following objectives:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Does one of your classes have all CRUD methods implemented in your app? That includes: Create, Read (all and singular) Update and Delete (all and singular)."),(0,a.kt)("li",{parentName:"ul"},"Are you able to view both sides of the many-many relationship? For a particular instance of a class, are you able to view all of the instances of the ",(0,a.kt)("strong",{parentName:"li"},"other")," class that are related to it? And vice versa?"),(0,a.kt)("li",{parentName:"ul"},"Are users able to register, log in and log out with Identity?"),(0,a.kt)("li",{parentName:"ul"},"Is Create, Update and Delete functionality limited to authenticated users?"),(0,a.kt)("li",{parentName:"ul"},"Build files and sensitive information are included in ",(0,a.kt)("inlineCode",{parentName:"li"},".gitignore")," file and are not in Git history, and includes instructions on how to create the ",(0,a.kt)("inlineCode",{parentName:"li"},"appsettings.json")," and set up the project."),(0,a.kt)("li",{parentName:"ul"},"Project is in a polished, portfolio-quality state."),(0,a.kt)("li",{parentName:"ul"},"The prompt\u2019s required functionality and baseline project requirements are in place by the deadline.")),(0,a.kt)("h3",{id:"previous-objectives"},"Previous Objectives"),(0,a.kt)("p",null,"For reference, here are the previous objectives that continue to apply:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Do the database table and column names follow both the specific requirements for this project and general .NET naming conventions?"),(0,a.kt)("li",{parentName:"ul"},"Are the instructions for re-creating your database thorough and clear?"),(0,a.kt)("li",{parentName:"ul"},"Build files and sensitive information is included in ",(0,a.kt)("inlineCode",{parentName:"li"},".gitignore")," file and is not to be tracked by Git, and includes instructions on how to create the ",(0,a.kt)("inlineCode",{parentName:"li"},"appsettings.json")," and set up the project."),(0,a.kt)("li",{parentName:"ul"},"Did you follow naming conventions?"),(0,a.kt)("li",{parentName:"ul"},"Does your code have proper indentation and spacing?"),(0,a.kt)("li",{parentName:"ul"},"Did you include a README with a description of the program, setup instructions for the database, a copyright, a license, and your name?"),(0,a.kt)("li",{parentName:"ul"},'Is the project tracked in Git, and did you regularly make commits with clear messages that finish the phrase "This commit will\u2026"?')))}p.isMDXComponent=!0}}]);