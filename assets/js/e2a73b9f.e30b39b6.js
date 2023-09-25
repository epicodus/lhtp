"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[6961],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),i=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=i(r),h=a,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||n;return r?o.createElement(m,u(u({ref:t},s),{},{components:r})):o.createElement(m,u({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,u=new Array(n);u[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,u[1]=l;for(var i=2;i<n;i++)u[i]=r[i];return o.createElement.apply(null,u)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},84648:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>i});var o=r(87462),a=(r(67294),r(3905));const n={title:"1. Redux Help Queue, Project Refactor",id:"redux_help_queue_project_refactor",slug:"redux_help_queue_project_refactor",hide_table_of_contents:!0,sidebar_position:18,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/4_react-with-redux/1a_classwork_redux_help_queue_project_refactor.md"},u=void 0,l={unversionedId:"react_classic/react-with-redux/redux_help_queue_project_refactor",id:"react_classic/react-with-redux/redux_help_queue_project_refactor",title:"1. Redux Help Queue, Project Refactor",description:"Goals: Follow along with the weekend homework. Start by testing and writing reducers. Once your reducers are complete, incorporate React Redux into your projects.",source:"@site/docs/react_classic/4_react-with-redux/1a_classwork_redux_help_queue_project_refactor.md",sourceDirName:"react_classic/4_react-with-redux",slug:"/react_classic/react-with-redux/redux_help_queue_project_refactor",permalink:"/lhtp/react_classic/react-with-redux/redux_help_queue_project_refactor",draft:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"1. Redux Help Queue, Project Refactor",id:"redux_help_queue_project_refactor",slug:"redux_help_queue_project_refactor",hide_table_of_contents:!0,sidebar_position:18,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/4_react-with-redux/1a_classwork_redux_help_queue_project_refactor.md"},sidebar:"react_classic",previous:{title:"15. Journal #15",permalink:"/lhtp/react_classic/react-with-redux/journal_15"},next:{title:"2. Combining Redux Reducers",permalink:"/lhtp/react_classic/react-with-redux/combining_redux_reducers"}},c={},i=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Redux Help Queue",id:"redux-help-queue",level:3},{value:"Redux Project Refactor",id:"redux-project-refactor",level:3},{value:"Further Exploration",id:"further-exploration",level:4},{value:"Peer Code Review",id:"peer-code-review",level:2}],s={toc:i},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Goals:")," Follow along with the weekend homework. Start by testing and writing reducers. Once your reducers are complete, incorporate React Redux into your projects."),(0,a.kt)("h2",{id:"warm-up"},"Warm Up"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What is a reducer action? How are they important to reducers?"),(0,a.kt)("li",{parentName:"ul"},"How do reducers work?"),(0,a.kt)("li",{parentName:"ul"},"What happens when we pass a reducer as an argument to a Redux store?"),(0,a.kt)("li",{parentName:"ul"},"Give an overview of the following three functions in Redux: ",(0,a.kt)("inlineCode",{parentName:"li"},"dispatch()"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"setState()")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"subscribe()"),"."),(0,a.kt)("li",{parentName:"ul"},"How do actions, reducers, and the store all work together in Redux? Draw out the process on a whiteboard and refer to the weekend homework if necessary?"),(0,a.kt)("li",{parentName:"ul"},"Why should we unit test reducers?"),(0,a.kt)("li",{parentName:"ul"},"Walk through the benefits of React Redux. You should be able to give an overview of the store, the ",(0,a.kt)("inlineCode",{parentName:"li"},"<Provider>")," component, the ",(0,a.kt)("inlineCode",{parentName:"li"},"connect()")," function and ",(0,a.kt)("inlineCode",{parentName:"li"},"mapStateToProps"),".")),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"redux-help-queue"},"Redux Help Queue"),(0,a.kt)("p",null,"Work through the weekend lessons to update the Help Queue to use Redux. Test and write reducers first. Take the time to build the demonstration Redux application in the browser so you can see how Redux works on its own."),(0,a.kt)("h3",{id:"redux-project-refactor"},"Redux Project Refactor"),(0,a.kt)("p",null,"Refactor one of the following projects from the React Fundamentals course section to use Redux for shared state:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Farmer's Market"),(0,a.kt)("li",{parentName:"ul"},"Merch Site"),(0,a.kt)("li",{parentName:"ul"},"Event Logger")),(0,a.kt)("p",null,"Make sure to test and write reducers ",(0,a.kt)("em",{parentName:"p"},"before")," you begin integrating Redux with your application."),(0,a.kt)("h4",{id:"further-exploration"},"Further Exploration"),(0,a.kt)("p",null,"If you finish the above projects with time to spare, work through upcoming homework."),(0,a.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Redux successfully manages all shared state."),(0,a.kt)("li",{parentName:"ul"},"All Redux reducers are pure functions."),(0,a.kt)("li",{parentName:"ul"},"Jest is used to test all reducers."),(0,a.kt)("li",{parentName:"ul"},"Actions are successfully dispatched to specify changes to state."),(0,a.kt)("li",{parentName:"ul"},"Reducers receive and handle actions to correctly mutate the store's state."),(0,a.kt)("li",{parentName:"ul"},"Previous objectives and React best practices are followed.")))}d.isMDXComponent=!0}}]);