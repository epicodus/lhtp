"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[9163],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,d=u["".concat(c,".").concat(m)]||u[m]||h[m]||i;return a?r.createElement(d,o(o({ref:t},s),{},{components:a})):r.createElement(d,o({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},70132:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={title:"NaN. React with API (Multi-Week Project)",id:"react_with_api_multi_week_project",slug:"react_with_api_multi_week_project",hide_table_of_contents:!0,sidebar_position:16,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/10_react-with-apis/1a_classwork_react_with_api_three_day_project.md"},o=void 0,l={unversionedId:"react_part_time/react-with-apis/react_with_api_multi_week_project",id:"react_part_time/react-with-apis/react_with_api_multi_week_project",title:"NaN. React with API (Multi-Week Project)",description:"Goals: Build a React application that makes API calls. Follow along with the weekend lessons to make an API call with the useReducer() hook, and then a light/dark theme with context. Then spend the remaining class sessions building out an API project with your pair or group. This project will combine a React front end with an API from your back end language class.",source:"@site/docs/react_part_time/10_react-with-apis/1a_classwork_react_with_api_three_day_project.md",sourceDirName:"react_part_time/10_react-with-apis",slug:"/react_part_time/react-with-apis/react_with_api_multi_week_project",permalink:"/lhtp/react_part_time/react-with-apis/react_with_api_multi_week_project",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"NaN. React with API (Multi-Week Project)",id:"react_with_api_multi_week_project",slug:"react_with_api_multi_week_project",hide_table_of_contents:!0,sidebar_position:16,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/10_react-with-apis/1a_classwork_react_with_api_three_day_project.md"},sidebar:"react_part_time",previous:{title:"13. Journal #17 Prompt",permalink:"/lhtp/react_part_time/react-with-apis/journal_17_prompt"},next:{title:"NaN. Further Exploration: React Native",permalink:"/lhtp/react_part_time/react-with-apis/further_exploration_react_native"}},c={},p=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"React with API Calls and Context",id:"react-with-api-calls-and-context",level:3},{value:"Full Stack Project",id:"full-stack-project",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],s={toc:p},u="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Goals:")," Build a React application that makes API calls. Follow along with the weekend lessons to make an API call with the ",(0,n.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook, and then a light/dark theme with context. Then spend the remaining class sessions building out an API project with your pair or group. This project will combine a React front end with an API from your back end language class."),(0,n.kt)("h2",{id:"warm-up"},"Warm Up"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"At what point in a React component's lifecycle might we make an API call and why?"),(0,n.kt)("li",{parentName:"ul"},"When should we prefer to use the ",(0,n.kt)("inlineCode",{parentName:"li"},"useReducer()")," hook versus the ",(0,n.kt)("inlineCode",{parentName:"li"},"useState()")," hook for state management?"),(0,n.kt)("li",{parentName:"ul"},"Is context a state management tool? Explain why or why not."),(0,n.kt)("li",{parentName:"ul"},"Name some use cases for context."),(0,n.kt)("li",{parentName:"ul"},"Name alternatives to using context.")),(0,n.kt)("h2",{id:"code"},"Code"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"react-with-api-calls-and-context"},"React with API Calls and Context"),(0,n.kt)("p",null,"Work through the weekend homework to make a React application that makes an API call to the NY Times API. Then implement a light/dark mode in the Help Queue with the use of context."),(0,n.kt)("h3",{id:"full-stack-project"},"Full Stack Project"),(0,n.kt)("p",null,"Spend the next three class sessions building a React application around an API built during your back end language class. You may create any type of application as long as it uses the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"React"),(0,n.kt)("li",{parentName:"ul"},"React hooks to manage state"),(0,n.kt)("li",{parentName:"ul"},"The Fetch API "),(0,n.kt)("li",{parentName:"ul"},"A .NET or Rails API from your back end class")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," If you wish, you may also try React Native, which is designed for mobile development. See the upcoming homework if you are interested."),(0,n.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Back end API works correctly."),(0,n.kt)("li",{parentName:"ul"},"Application parses API response and displays response data in the UI."),(0,n.kt)("li",{parentName:"ul"},"State is managed with hooks."),(0,n.kt)("li",{parentName:"ul"},"Front and back end have their own repositories and detailed READMEs with local deployment instructions and links to other repos related to the project.")))}h.isMDXComponent=!0}}]);