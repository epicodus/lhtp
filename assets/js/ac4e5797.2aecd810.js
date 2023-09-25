"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[91962],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},_=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(a),_=n,m=u["".concat(s,".").concat(_)]||u[_]||d[_]||o;return a?r.createElement(m,i(i({ref:t},l),{},{components:a})):r.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=_;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}_.displayName="MDXCreateElement"},40470:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"1. API Refactor, Dino Ipsum (Three-Day Project) - Part 2",id:"api_refactor_dino_ipsum_three_day_project___part_2",slug:"api_refactor_dino_ipsum_three_day_project___part_2",hide_table_of_contents:!0,sidebar_position:24,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/7_asynchrony-and-apis/2a_classwork_api_refactor_dino_ipsum_2.md"},i=void 0,p={unversionedId:"intermediate_javascript_part_time_evening/asynchrony-and-apis/api_refactor_dino_ipsum_three_day_project___part_2",id:"intermediate_javascript_part_time_evening/asynchrony-and-apis/api_refactor_dino_ipsum_three_day_project___part_2",title:"1. API Refactor, Dino Ipsum (Three-Day Project) - Part 2",description:"Goal:  Practice making API calls in JavaScript using a promise. Start by following along with the homework to build out the refactor of the OpenWeather API project. Then move onto another project. Each project should include a full development environment, a .env file for sensitive API variables, and complete README instructions, including instructions for setting up an API key as needed. Make sure to include error handling and practice parsing JSON, too.",source:"@site/docs/intermediate_javascript_part_time_evening/7_asynchrony-and-apis/2a_classwork_api_refactor_dino_ipsum_2.md",sourceDirName:"intermediate_javascript_part_time_evening/7_asynchrony-and-apis",slug:"/intermediate_javascript_part_time_evening/asynchrony-and-apis/api_refactor_dino_ipsum_three_day_project___part_2",permalink:"/lhtp/intermediate_javascript_part_time_evening/asynchrony-and-apis/api_refactor_dino_ipsum_three_day_project___part_2",draft:!1,tags:[],version:"current",sidebarPosition:24,frontMatter:{title:"1. API Refactor, Dino Ipsum (Three-Day Project) - Part 2",id:"api_refactor_dino_ipsum_three_day_project___part_2",slug:"api_refactor_dino_ipsum_three_day_project___part_2",hide_table_of_contents:!0,sidebar_position:24,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/7_asynchrony-and-apis/2a_classwork_api_refactor_dino_ipsum_2.md"},sidebar:"intermediate_javascript_part_time_evening",previous:{title:"1. API Refactor, Dino Ipsum (Three-Day Project) - Part 1",permalink:"/lhtp/intermediate_javascript_part_time_evening/asynchrony-and-apis/api_refactor_dino_ipsum_three_day_project___part_1"},next:{title:"1. API Refactor, Dino Ipsum (Three-Day Project) - Part 3",permalink:"/lhtp/intermediate_javascript_part_time_evening/asynchrony-and-apis/api_refactor_dino_ipsum_three_day_project___part_3"}},s={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"OpenWeather API",id:"openweather-api",level:3},{value:"Project Refactor",id:"project-refactor",level:3},{value:"Dino Ipsum API",id:"dino-ipsum-api",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],l={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Goal:"),"  Practice making API calls in JavaScript using a promise. Start by following along with the homework to build out the refactor of the OpenWeather API project. Then move onto another project. Each project should include a full development environment, a ",(0,n.kt)("inlineCode",{parentName:"p"},".env")," file for sensitive API variables, and complete README instructions, including instructions for setting up an API key as needed. Make sure to include error handling and practice parsing JSON, too."),(0,n.kt)("h2",{id:"warm-up"},"Warm Up"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"What is a promise? What are the advantages and disadvantages of using a promise for async code?"),(0,n.kt)("li",{parentName:"ul"},"What is a static method? How is a static method different from an instance method?"),(0,n.kt)("li",{parentName:"ul"},"How can we use callbacks to handle async code?"),(0,n.kt)("li",{parentName:"ul"},"What causes callback hell and how can we avoid it?")),(0,n.kt)("h2",{id:"code"},"Code"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"openweather-api"},"OpenWeather API"),(0,n.kt)("p",null,"Follow along with the lessons to update the OpenWeather API project to use a promise, separate API business logic, and a static method."),(0,n.kt)("h3",{id:"project-refactor"},"Project Refactor"),(0,n.kt)("p",null,"Next, refactor one of the projects you worked on in the last class session to use promises. Once again, make sure that API call business logic is properly separated. Make sure to use static methods, too."),(0,n.kt)("h3",{id:"dino-ipsum-api"},"Dino Ipsum API"),(0,n.kt)("p",null,"Use this API to allow your users to generate ",(0,n.kt)("a",{parentName:"p",href:"http://dinoipsum.herokuapp.com/#res"},"dinosaur themed Lorem Ipsum"),". Use it any way you like. "),(0,n.kt)("p",null,"For instance, you could create a dinosaur-themed game where someone needs to guess the name of the dinosaur in 7 guesses. You could have users guess letter by letter, or by guessing whole words, like in ",(0,n.kt)("a",{parentName:"p",href:"https://wordplay.com/"},"the game Wordle"),". "),(0,n.kt)("p",null,"Whatever you do, don't worry about making a complex UI, like in the Wordle game that's linked above. Keep the UI as simple as possible and focus on completing the functionality of your application first. Once that's in place, you can move onto improving the UI. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Be sure you set your output format to JSON, not HTML or text."),(0,n.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Does the application have a fully functioning development environment?"),(0,n.kt)("li",{parentName:"ul"},"Does the application successfully wrap an API call in a promise?"),(0,n.kt)("li",{parentName:"ul"},"Are business and user interface logic separated?"),(0,n.kt)("li",{parentName:"ul"},"Are API keys stored in a ",(0,n.kt)("inlineCode",{parentName:"li"},".env")," file and protected?"),(0,n.kt)("li",{parentName:"ul"},"Does the README include instructions for setting up the project including getting an API key and adding it to a ",(0,n.kt)("inlineCode",{parentName:"li"},".env")," file?")))}d.isMDXComponent=!0}}]);