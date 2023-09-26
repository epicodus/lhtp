"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[68695],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},67975:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"Technical Interview Practice: React and Redux",id:"technical-interview-practice-react-and-redux",slug:"technical-interview-practice-react-and-redux",hide_table_of_contents:!0,sidebar_position:25,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/4a_technical_interview_practice_react_and_redux.md"},c=void 0,o={unversionedId:"react-part-time/react-with-redux/technical-interview-practice-react-and-redux",id:"react-part-time/react-with-redux/technical-interview-practice-react-and-redux",title:"Technical Interview Practice: React and Redux",description:"Technical Interview Questions",source:"@site/docs/react-part-time/6_react-with-redux/4a-technical-interview-practice-react-and-redux.md",sourceDirName:"react-part-time/6_react-with-redux",slug:"/react-part-time/react-with-redux/technical-interview-practice-react-and-redux",permalink:"/react-part-time/react-with-redux/technical-interview-practice-react-and-redux",draft:!1,tags:[],version:"current",sidebarPosition:25,frontMatter:{title:"Technical Interview Practice: React and Redux",id:"technical-interview-practice-react-and-redux",slug:"technical-interview-practice-react-and-redux",hide_table_of_contents:!0,sidebar_position:25,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/4a_technical_interview_practice_react_and_redux.md"},sidebar:"react-part-time",previous:{title:"Building a React Application with Redux From Scratch",permalink:"/react-part-time/react-with-redux/building-a-react-application-with-redux-from-scratch"},next:{title:"Action Creators",permalink:"/react-part-time/react-with-redux/action-creators"}},l={},s=[{value:"Technical Interview Questions",id:"technical-interview-questions",level:2},{value:"Stories and Examples",id:"stories-and-examples",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"technical-interview-questions"},"Technical Interview Questions"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What is Redux? What are the main functions and methods that Redux provides?"),(0,a.kt)("li",{parentName:"ul"},"What is a reducer and how do reducers work?"),(0,a.kt)("li",{parentName:"ul"},"What are the component lifecycle methods? Briefly list each, when they're called, and what we might use them for."),(0,a.kt)("li",{parentName:"ul"},"What is the benefit of combining reducers? Why might we choose to do so?"),(0,a.kt)("li",{parentName:"ul"},"What are action creators and why should we use them?"),(0,a.kt)("li",{parentName:"ul"},"What is React Redux and what functionality does it provide?"),(0,a.kt)("li",{parentName:"ul"},"What does it mean when a component is mounted in React? How about when it is unmounted?"),(0,a.kt)("li",{parentName:"ul"},"What is the benefit of using constants instead of strings for action types?"),(0,a.kt)("li",{parentName:"ul"},"What are some ways that the Redux library uses functional programming?")),(0,a.kt)("h2",{id:"stories-and-examples"},"Stories and Examples"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Offering a tangible story or example that highlights your skills usually goes ",(0,a.kt)("em",{parentName:"p"},"much further")," in an interview than simply ",(0,a.kt)("em",{parentName:"p"},"telling")," your interviewer you're good at something. (i.e.: Telling a story about a time you tracked down a tricky bug versus simply saying ",(0,a.kt)("em",{parentName:"p"},'"I\'m good at problem-solving!"'),")."),(0,a.kt)("p",null,"Review the ",(0,a.kt)("strong",{parentName:"p"},"STAR")," method, discussed in ",(0,a.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/internship-and-job-search/preparing-for-job-interviews/non-technical-interview"},"this lesson on non-technical interviews"),". Use the ",(0,a.kt)("strong",{parentName:"p"},"STAR")," method to practice answering non-technical questions with your partner."),(0,a.kt)("p",null,"Again, if you come up with a story or example you feel good about, jot it down somewhere! It's tough to come up with stories like this in an interview on the spot. Having a few tucked away to review before an interview will be a huge benefit to you later."))}d.isMDXComponent=!0}}]);