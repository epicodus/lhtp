"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[96825],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,u=d["".concat(l,".").concat(m)]||d[m]||v[m]||a;return n?r.createElement(u,o(o({ref:t},c),{},{components:n})):r.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>v,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"1. Test Driven Development and Environments with JavaScript Objectives",id:"test_driven_development_and_environments_with_javascript_objectives",slug:"test_driven_development_and_environments_with_javascript_objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/5_test-driven-development/0a_test_driven_development_objectives.md",paginationPrev:null},o=void 0,s={unversionedId:"intermediate_javascript_part_time_evening/test-driven-development/test_driven_development_and_environments_with_javascript_objectives",id:"intermediate_javascript_part_time_evening/test-driven-development/test_driven_development_and_environments_with_javascript_objectives",title:"1. Test Driven Development and Environments with JavaScript Objectives",description:"In this section, we'll focus on two important aspects of JavaScript development:",source:"@site/docs/intermediate_javascript_part_time_evening/5_test-driven-development/0a_test_driven_development_objectives.md",sourceDirName:"intermediate_javascript_part_time_evening/5_test-driven-development",slug:"/intermediate_javascript_part_time_evening/test-driven-development/test_driven_development_and_environments_with_javascript_objectives",permalink:"/lhtp/intermediate_javascript_part_time_evening/test-driven-development/test_driven_development_and_environments_with_javascript_objectives",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1. Test Driven Development and Environments with JavaScript Objectives",id:"test_driven_development_and_environments_with_javascript_objectives",slug:"test_driven_development_and_environments_with_javascript_objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/5_test-driven-development/0a_test_driven_development_objectives.md",paginationPrev:null},sidebar:"intermediate_javascript_part_time_evening",previous:{title:"1. Object-Oriented JavaScript Independent Project",permalink:"/lhtp/intermediate_javascript_part_time_evening/object-oriented-javascript-part-2/object_oriented_javascript_independent_project"},next:{title:"2. Modern JavaScript Development",permalink:"/lhtp/intermediate_javascript_part_time_evening/test-driven-development/modern_javascript_development"}},l={},p=[{value:"Independent Project Objectives",id:"independent-project-objectives",level:2}],c={toc:p},d="wrapper";function v(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section, we'll focus on two important aspects of JavaScript development:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Modern development environments"),": We'll create an environment that will make it easier to incorporate JavaScript libraries and scaffold large projects."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Test-driven development"),": We'll write automated tests before writing our code.")),(0,i.kt)("p",null,"We will use ",(0,i.kt)("strong",{parentName:"p"},"Jest"),", a tool for writing coded, automated tests. We'll learn about ",(0,i.kt)("strong",{parentName:"p"},"module bundling")," with ",(0,i.kt)("strong",{parentName:"p"},"webpack")," to keep our code base well-organized and efficient, and we'll incorporate tools that help us do other tasks like ",(0,i.kt)("strong",{parentName:"p"},"linting"),", which we can use to quickly spot errors."),(0,i.kt)("p",null,"Finally, we'll learn about JavaScript features from ",(0,i.kt)("strong",{parentName:"p"},"ECMAScript 6")," (ES6) such as classes, arrow functions, modules, template literals, and more!"),(0,i.kt)("h2",{id:"independent-project-objectives"},"Independent Project Objectives"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"At the end of this section, you will complete an independent project. Your code will be reviewed for the following objectives:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Business logic has 100% line coverage with Jest."),(0,i.kt)("li",{parentName:"ul"},"Tests are included for each business logic behavior and code is committed after each test passes."),(0,i.kt)("li",{parentName:"ul"},"Project utilizes classes, a feature of ES6."),(0,i.kt)("li",{parentName:"ul"},"Dependencies are managed with npm."),(0,i.kt)("li",{parentName:"ul"},"webpack is used to lint, bundle, and process code."),(0,i.kt)("li",{parentName:"ul"},"Project is in a polished, portfolio-quality state."),(0,i.kt)("li",{parentName:"ul"},"The prompt's required functionality and baseline project requirements are in place by the deadline.")))}v.isMDXComponent=!0}}]);