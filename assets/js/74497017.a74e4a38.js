"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[29191],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),h=a,g=u["".concat(l,".").concat(h)]||u[h]||m[h]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},91209:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"Technical Interview Preparation: Functional Programming",id:"technical-interview-preparation-functional-programming",slug:"technical-interview-preparation-functional-programming",hide_table_of_contents:!0,sidebar_position:37,day:"thursday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/4a_classwork_technical_interview_prep_functional_programming.md"},o=void 0,c={unversionedId:"react-classic/functional-programming-with-javascript/technical-interview-preparation-functional-programming",id:"react-classic/functional-programming-with-javascript/technical-interview-preparation-functional-programming",title:"Technical Interview Preparation: Functional Programming",description:"Technical Interview Questions",source:"@site/docs/react-classic/2_functional-programming-with-javascript/4a-classwork-technical-interview-prep-functional-programming.md",sourceDirName:"react-classic/2_functional-programming-with-javascript",slug:"/react-classic/functional-programming-with-javascript/technical-interview-preparation-functional-programming",permalink:"/react-classic/functional-programming-with-javascript/technical-interview-preparation-functional-programming",draft:!1,tags:[],version:"current",sidebarPosition:37,frontMatter:{title:"Technical Interview Preparation: Functional Programming",id:"technical-interview-preparation-functional-programming",slug:"technical-interview-preparation-functional-programming",hide_table_of_contents:!0,sidebar_position:37,day:"thursday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/4a_classwork_technical_interview_prep_functional_programming.md"},sidebar:"react-classic",previous:{title:"Whiteboard Practice: Project Euler",permalink:"/react-classic/functional-programming-with-javascript/whiteboard-practice-project-euler"},next:{title:"Epicodus Job Board",permalink:"/react-classic/functional-programming-with-javascript/epicodus-job-board"}},l={},s=[{value:"Technical Interview Questions",id:"technical-interview-questions",level:2},{value:"Stories and Examples",id:"stories-and-examples",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"technical-interview-questions"},"Technical Interview Questions"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What are some of the key differences between functional and object-oriented programming?"),(0,a.kt)("li",{parentName:"ul"},"What are some of the advantages of using functional programming over object-oriented programming?"),(0,a.kt)("li",{parentName:"ul"},"What is immutability and why is it important?"),(0,a.kt)("li",{parentName:"ul"},"What is the difference between imperative and declarative programming?"),(0,a.kt)("li",{parentName:"ul"},"What are pure functions and why are they important to functional programming?"),(0,a.kt)("li",{parentName:"ul"},"What does it mean when a function is a first-class citizen? Why is it useful for a language like JS to offer this functionality?"),(0,a.kt)("li",{parentName:"ul"},"What is a closure? What are some of their use cases?"),(0,a.kt)("li",{parentName:"ul"},"Demonstrate the differences between writing a loop and using recursion to solve a problem. What are the advantages of using recursion? What are potential disadvantages?"),(0,a.kt)("li",{parentName:"ul"},"What is the difference between composition and classical inheritance? What are some of the advantages of composition?"),(0,a.kt)("li",{parentName:"ul"},"What does it mean to mutate state? Why do we want to avoid this in functional programming?")),(0,a.kt)("h2",{id:"stories-and-examples"},"Stories and Examples"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Offering a tangible story or example that highlights your skills usually goes much further in an interview than simply telling your interviewer you're good at something. For example, it's better to tell a story about a time you tracked down a tricky bug versus simply saying \"I'm good at problem-solving!\""),(0,a.kt)("p",null,"Review the ",(0,a.kt)("strong",{parentName:"p"},"STAR")," method discussed in ",(0,a.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/internship-and-job-search/preparing-for-job-interviews/non-technical-interview"},"this lesson on non-technical interviews"),". Use the ",(0,a.kt)("strong",{parentName:"p"},"STAR")," method to practice answering non-technical questions with your partner."),(0,a.kt)("p",null,"Again, if you come up with a story or example you feel good about, jot it down somewhere. It's tough to come up with stories like this in an interview on the spot. Having a few tucked away to review before an interview will be a huge benefit to you later."))}m.isMDXComponent=!0}}]);