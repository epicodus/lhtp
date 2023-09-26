"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[43961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const o={title:"Building An API Independent Project",id:"building-an-api-independent-project",slug:"building-an-api-independent-project",hide_table_of_contents:!0,sidebar_position:26,day:"friday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/5a_building_an_api_independent_project.md",paginationNext:null},a=void 0,l={unversionedId:"c-and-net/building-an-api/building-an-api-independent-project",id:"c-and-net/building-an-api/building-an-api-independent-project",title:"Building An API Independent Project",description:"Independent Projects Overview",source:"@site/docs/c-and-net/11_building-an-api/5a-building-an-api-independent-project.md",sourceDirName:"c-and-net/11_building-an-api",slug:"/c-and-net/building-an-api/building-an-api-independent-project",permalink:"/c-and-net/building-an-api/building-an-api-independent-project",draft:!1,tags:[],version:"current",sidebarPosition:26,frontMatter:{title:"Building An API Independent Project",id:"building-an-api-independent-project",slug:"building-an-api-independent-project",hide_table_of_contents:!0,sidebar_position:26,day:"friday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/5a_building_an_api_independent_project.md",paginationNext:null},sidebar:"c-and-net",previous:{title:"Weekly Technical Interview Prep",permalink:"/c-and-net/building-an-api/weekly-technical-interview-prep"},next:{title:"Team Week Objectives",permalink:"/c-and-net/team-week/team-week-objectives"}},p={},s=[{value:"Independent Projects Overview",id:"independent-projects-overview",level:2},{value:"Building an API Project Objectives",id:"building-an-api-project-objectives",level:2},{value:"Implementing a Further Exploration Objective",id:"implementing-a-further-exploration-objective",level:3},{value:"What is a polished, portfolio-quality state?",id:"what-is-a-polished-portfolio-quality-state",level:3},{value:"What are the baseline project requirements?",id:"what-are-the-baseline-project-requirements",level:3},{value:"Submission",id:"submission",level:2}],u={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"independent-projects-overview"},"Independent Projects Overview"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Project prompts will be available on Epicenter at 8:00 am Friday for full-time students and 8:00 am on Thursday for part-time students. Before you begin your project, make sure to take a moment to review the ",(0,r.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/getting-started-at-epicodus/independent-projects-and-code-reviews"},"Independent Projects and Code Reviews")," lesson."),(0,r.kt)("h2",{id:"building-an-api-project-objectives"},"Building an API Project Objectives"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Your code will be reviewed for the following objectives:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Application includes CRUD functionality and successfully returns responses to API calls."),(0,r.kt)("li",{parentName:"ul"},"README thoroughly describes all endpoints along with parameters that can be used."),(0,r.kt)("li",{parentName:"ul"},"Application includes a best effort at implementing at least one of the further exploration objectives: authentication, versioning, pagination, or CORS."),(0,r.kt)("li",{parentName:"ul"},"README includes specific documentation on further exploration: what it is and how to use it."),(0,r.kt)("li",{parentName:"ul"},"Build files and sensitive information are included in ",(0,r.kt)("inlineCode",{parentName:"li"},".gitignore")," file and is not to be tracked by Git, and includes instructions on how to create the ",(0,r.kt)("inlineCode",{parentName:"li"},"appsettings.json")," and set up the project."),(0,r.kt)("li",{parentName:"ul"},"Project is in a polished, portfolio-quality state."),(0,r.kt)("li",{parentName:"ul"},"The prompt\u2019s required functionality and baseline project requirements are in place by the deadline.")),(0,r.kt)("h3",{id:"implementing-a-further-exploration-objective"},"Implementing a Further Exploration Objective"),(0,r.kt)("p",null,"We are looking for your best effort in implementing a further exploration objective. Why? Some are more challenging than others, like authentication. We want to encourage you to challenge yourself for this project and not feel the pressure of needing to successfully complete an objective to simply pass. With the time you have in class to work on further exploration and the skills you have at the end of this course, we generally expect to see that most students complete this objective. "),(0,r.kt)("p",null,'Your teacher will review your README and your commit history to understand your progress on implementing a further exploration objective. If you do not complete a further exploration objective, make sure that your project documentation reflects this. We recommend updating the "Known Bugs" section of your README, but you may find a better location to relay this information.'),(0,r.kt)("h3",{id:"what-is-a-polished-portfolio-quality-state"},"What is a polished, portfolio-quality state?"),(0,r.kt)("p",null,"When a project is both polished and in a portfolio-quality state, this means:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You've reviewed your project and your README prior to submitting it to make sure there are no errors or missing information and you are consistent in your indentation, spacing, and code structure. "),(0,r.kt)("li",{parentName:"ul"},"You are following the best practices and coding conventions we teach.")),(0,r.kt)("h3",{id:"what-are-the-baseline-project-requirements"},"What are the baseline project requirements?"),(0,r.kt)("p",null,"All independent coding projects at Epicodus have these baseline requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A complete and informative README"),(0,r.kt)("li",{parentName:"ul"},"The project's commit history demonstrates that the project\u2019s required work schedule and hours have been met:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"8 hours completed on Friday is required for full-time students"),(0,r.kt)("li",{parentName:"ul"},"4 hours completed over the weekend is required for part-time students"))),(0,r.kt)("li",{parentName:"ul"},"Completion of the project based on the prompt ",(0,r.kt)("em",{parentName:"li"},"and")," objectives. The prompt contains details on the project's theme and features that are not always detailed in the objective. Carefully read through the prompt towards the end of your work session to make sure that you are not missing anything.")),(0,r.kt)("h2",{id:"submission"},"Submission"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Submit your Github repository to the ",(0,r.kt)("strong",{parentName:"p"},"Building an API")," Code Review on ",(0,r.kt)("a",{parentName:"p",href:"https://epicenter.epicodus.com"},"Epicenter"),"."),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/getting-started-at-epicodus/independent-projects-and-code-reviews"},"Independent Projects and Code Reviews")," for details on how to submit your code, how feedback works and course completion requirements."))}c.isMDXComponent=!0}}]);