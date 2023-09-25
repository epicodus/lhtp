"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[75110],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>_});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,_=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(_,i(i({ref:t},l),{},{components:r})):a.createElement(_,i({ref:t},l))}));function _(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9162:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"1. API Refactor, Dino Ipsum (Three-Day Project) - Part 1",id:"api_refactor_dino_ipsum_three_day_project___part_1",slug:"api_refactor_dino_ipsum_three_day_project___part_1",hide_table_of_contents:!0,sidebar_position:23,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/7_asynchrony-and-apis/2a_classwork_api_refactor_dino_ipsum.md"},i=void 0,s={unversionedId:"intermediate_javascript_part_time/asynchrony-and-apis/api_refactor_dino_ipsum_three_day_project___part_1",id:"intermediate_javascript_part_time/asynchrony-and-apis/api_refactor_dino_ipsum_three_day_project___part_1",title:"1. API Refactor, Dino Ipsum (Three-Day Project) - Part 1",description:"Goal:  Practice making API calls in JavaScript using a promise. Start by following along with the homework to build out the refactor of the OpenWeather API project. Then move onto another project. Each project should include a full development environment, a .env file for sensitive API variables, and complete README instructions, including instructions for setting up an API key as needed. Make sure to include error handling and practice parsing JSON, too.",source:"@site/docs/intermediate_javascript_part_time/7_asynchrony-and-apis/2a_classwork_api_refactor_dino_ipsum.md",sourceDirName:"intermediate_javascript_part_time/7_asynchrony-and-apis",slug:"/intermediate_javascript_part_time/asynchrony-and-apis/api_refactor_dino_ipsum_three_day_project___part_1",permalink:"/lhtp/intermediate_javascript_part_time/asynchrony-and-apis/api_refactor_dino_ipsum_three_day_project___part_1",draft:!1,tags:[],version:"current",sidebarPosition:23,frontMatter:{title:"1. API Refactor, Dino Ipsum (Three-Day Project) - Part 1",id:"api_refactor_dino_ipsum_three_day_project___part_1",slug:"api_refactor_dino_ipsum_three_day_project___part_1",hide_table_of_contents:!0,sidebar_position:23,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/7_asynchrony-and-apis/2a_classwork_api_refactor_dino_ipsum.md"},sidebar:"intermediate_javascript_part_time",previous:{title:"NaN. Prior Course Section Survey",permalink:"/lhtp/intermediate_javascript_part_time/asynchrony-and-apis/prior_course_section_survey"},next:{title:"1. API Refactor, Dino Ipsum (Three-Day Project) - Part 2",permalink:"/lhtp/intermediate_javascript_part_time/asynchrony-and-apis/api_refactor_dino_ipsum_three_day_project___part_2"}},p={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"OpenWeather API",id:"openweather-api",level:3},{value:"Project Refactor",id:"project-refactor",level:3},{value:"Dino Ipsum API",id:"dino-ipsum-api",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],l={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Goal:"),"  Practice making API calls in JavaScript using a promise. Start by following along with the homework to build out the refactor of the OpenWeather API project. Then move onto another project. Each project should include a full development environment, a ",(0,n.kt)("inlineCode",{parentName:"p"},".env")," file for sensitive API variables, and complete README instructions, including instructions for setting up an API key as needed. Make sure to include error handling and practice parsing JSON, too."),(0,n.kt)("h2",{id:"warm-up"},"Warm Up"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"What is a promise? What are the advantages and disadvantages of using a promise for async code?"),(0,n.kt)("li",{parentName:"ul"},"What is a static method? How is a static method different from an instance method?"),(0,n.kt)("li",{parentName:"ul"},"How can we use callbacks to handle async code?"),(0,n.kt)("li",{parentName:"ul"},"What causes callback hell and how can we avoid it?")),(0,n.kt)("h2",{id:"code"},"Code"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"openweather-api"},"OpenWeather API"),(0,n.kt)("p",null,"Follow along with the lessons to update the OpenWeather API project to use a promise, separate API business logic, and a static method."),(0,n.kt)("h3",{id:"project-refactor"},"Project Refactor"),(0,n.kt)("p",null,"Next, refactor one of the projects you worked on in the last class session to use promises. Once again, make sure that API call business logic is properly separated. Make sure to use static methods, too."),(0,n.kt)("h3",{id:"dino-ipsum-api"},"Dino Ipsum API"),(0,n.kt)("p",null,"Use this API to allow your users to generate ",(0,n.kt)("a",{parentName:"p",href:"http://dinoipsum.herokuapp.com/#res"},"dinosaur themed Lorem Ipsum"),". Use it any way you like. "),(0,n.kt)("p",null,"For instance, you could create a dinosaur-themed game where someone needs to guess the name of the dinosaur in 7 guesses. You could have users guess letter by letter, or by guessing whole words, like in ",(0,n.kt)("a",{parentName:"p",href:"https://wordplay.com/"},"the game Wordle"),". "),(0,n.kt)("p",null,"Whatever you do, don't worry about making a complex UI, like in the Wordle game that's linked above. Keep the UI as simple as possible and focus on completing the functionality of your application first. Once that's in place, you can move onto improving the UI. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Be sure you set your output format to JSON, not HTML or text."),(0,n.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Does the application have a fully functioning development environment?"),(0,n.kt)("li",{parentName:"ul"},"Does the application successfully wrap an API call in a promise?"),(0,n.kt)("li",{parentName:"ul"},"Are business and user interface logic separated?"),(0,n.kt)("li",{parentName:"ul"},"Are API keys stored in a ",(0,n.kt)("inlineCode",{parentName:"li"},".env")," file and protected?"),(0,n.kt)("li",{parentName:"ul"},"Does the README include instructions for setting up the project including getting an API key and adding it to a ",(0,n.kt)("inlineCode",{parentName:"li"},".env")," file?")))}d.isMDXComponent=!0}}]);