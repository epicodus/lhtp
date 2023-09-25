"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[2119],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(r),h=o,m=s["".concat(l,".").concat(h)]||s[h]||d[h]||n;return r?a.createElement(m,u(u({ref:t},p),{},{components:r})):a.createElement(m,u({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,u=new Array(n);u[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:o,u[1]=i;for(var c=2;c<n;c++)u[c]=r[c];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},91597:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=r(87462),o=(r(67294),r(3905));const n={title:"NaN. Redux Help Queue, Project Refactor",id:"redux_help_queue_project_refactor",slug:"redux_help_queue_project_refactor",hide_table_of_contents:!0,sidebar_position:18,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/6_react-with-redux/1a_classwork_redux_help_queue_project_refactor.md"},u=void 0,i={unversionedId:"react_part_time/react-with-redux/redux_help_queue_project_refactor",id:"react_part_time/react-with-redux/redux_help_queue_project_refactor",title:"NaN. Redux Help Queue, Project Refactor",description:"Goals: Follow along with the weekend homework. Start by testing and writing reducers. Once your reducers are complete, incorporate React Redux into your projects.",source:"@site/docs/react_part_time/6_react-with-redux/1a_classwork_redux_help_queue_project_refactor.md",sourceDirName:"react_part_time/6_react-with-redux",slug:"/react_part_time/react-with-redux/redux_help_queue_project_refactor",permalink:"/lhtp/react_part_time/react-with-redux/redux_help_queue_project_refactor",draft:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"NaN. Redux Help Queue, Project Refactor",id:"redux_help_queue_project_refactor",slug:"redux_help_queue_project_refactor",hide_table_of_contents:!0,sidebar_position:18,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/6_react-with-redux/1a_classwork_redux_help_queue_project_refactor.md"},sidebar:"react_part_time",previous:{title:"15. Journal #15",permalink:"/lhtp/react_part_time/react-with-redux/journal_15"},next:{title:"NaN. Journal #15 Discussion",permalink:"/lhtp/react_part_time/react-with-redux/journal_15_discussion"}},l={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Redux Help Queue",id:"redux-help-queue",level:3},{value:"Redux Project Refactor",id:"redux-project-refactor",level:3},{value:"Further Exploration",id:"further-exploration",level:4},{value:"Peer Code Review",id:"peer-code-review",level:2}],p={toc:c},s="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Goals:")," Follow along with the weekend homework. Start by testing and writing reducers. Once your reducers are complete, incorporate React Redux into your projects."),(0,o.kt)("h2",{id:"warm-up"},"Warm Up"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What is a reducer action? How are they important to reducers?"),(0,o.kt)("li",{parentName:"ul"},"How do reducers work?"),(0,o.kt)("li",{parentName:"ul"},"What happens when we pass a reducer as an argument to a Redux store?"),(0,o.kt)("li",{parentName:"ul"},"Give an overview of the following three functions in Redux: ",(0,o.kt)("inlineCode",{parentName:"li"},"dispatch()"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"setState()")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"subscribe()"),"."),(0,o.kt)("li",{parentName:"ul"},"How do actions, reducers, and the store all work together in Redux? Draw out the process on a whiteboard and refer to the weekend homework if necessary?"),(0,o.kt)("li",{parentName:"ul"},"Why should we unit test reducers?"),(0,o.kt)("li",{parentName:"ul"},"Walk through the benefits of React Redux. You should be able to give an overview of the store, the ",(0,o.kt)("inlineCode",{parentName:"li"},"<Provider>")," component, the ",(0,o.kt)("inlineCode",{parentName:"li"},"connect()")," function and ",(0,o.kt)("inlineCode",{parentName:"li"},"mapStateToProps"),".")),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"redux-help-queue"},"Redux Help Queue"),(0,o.kt)("p",null,"Work through the weekend lessons to update the Help Queue to use Redux. Test and write reducers first. Take the time to build the demonstration Redux application in the browser so you can see how Redux works on its own."),(0,o.kt)("h3",{id:"redux-project-refactor"},"Redux Project Refactor"),(0,o.kt)("p",null,"Refactor one of the following projects from the React Fundamentals course section to use Redux for shared state:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Farmer's Market"),(0,o.kt)("li",{parentName:"ul"},"Merch Site"),(0,o.kt)("li",{parentName:"ul"},"Event Logger")),(0,o.kt)("p",null,"Make sure to test and write reducers ",(0,o.kt)("em",{parentName:"p"},"before")," you begin integrating Redux with your application."),(0,o.kt)("h4",{id:"further-exploration"},"Further Exploration"),(0,o.kt)("p",null,"If you finish the above projects with time to spare, work through upcoming homework."),(0,o.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Redux successfully manages all shared state."),(0,o.kt)("li",{parentName:"ul"},"All Redux reducers are pure functions."),(0,o.kt)("li",{parentName:"ul"},"Jest is used to test all reducers."),(0,o.kt)("li",{parentName:"ul"},"Actions are successfully dispatched to specify changes to state."),(0,o.kt)("li",{parentName:"ul"},"Reducers receive and handle actions to correctly mutate the store's state."),(0,o.kt)("li",{parentName:"ul"},"Previous objectives and React best practices are followed.")))}d.isMDXComponent=!0}}]);