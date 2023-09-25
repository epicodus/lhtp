"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[81502],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97481:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={title:"Redux Store Review",id:"redux_store_review",slug:"redux_store_review",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0i_redux_store_review.md"},o=void 0,s={unversionedId:"react_classic/react-with-redux/redux_store_review",id:"react_classic/react-with-redux/redux_store_review",title:"Redux Store Review",description:"In the last lesson, we built a small application and learned about the Redux library. Redux on its own is relatively simple. However, Redux will become more complicated when we combine it with our React applications using the React Redux library, and start to build more complex reducers. Before we move on, let's review the basics.",source:"@site/docs/react_classic/4_react-with-redux/0i_redux_store_review.md",sourceDirName:"react_classic/4_react-with-redux",slug:"/react_classic/react-with-redux/redux_store_review",permalink:"/react_classic/react-with-redux/redux_store_review",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Redux Store Review",id:"redux_store_review",slug:"redux_store_review",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0i_redux_store_review.md"},sidebar:"react_classic",previous:{title:"The Redux Store",permalink:"/react_classic/react-with-redux/the_redux_store"},next:{title:"Introduction to React Redux Library",permalink:"/react_classic/react-with-redux/introduction_to_react_redux_library"}},l={},c=[{value:"Redux Summary",id:"redux-summary",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In the last lesson, we built a small application and learned about the Redux library. Redux on its own is relatively simple. However, Redux will become more complicated when we combine it with our React applications using the React Redux library, and start to build more complex reducers. Before we move on, let's review the basics. "),(0,n.kt)("h3",{id:"redux-summary"},"Redux Summary"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Redux provides a ",(0,n.kt)("inlineCode",{parentName:"p"},"createStore()")," function which we can use to create a Redux store. An application will only ever have a single Redux store.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"createStore()")," takes a reducer as an argument. Reducers take the current state along with an action and determine how the store's state tree should be redrawn. Without reducers, the store wouldn't know how to handle actions.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The Redux store in our application has an immutable state tree. That means state will be redrawn when it's updated. Remember that immutability is a central tenet of functional programming!")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"We use Redux's ",(0,n.kt)("inlineCode",{parentName:"p"},"getState()")," method to get the current state of the store.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"We use Redux's ",(0,n.kt)("inlineCode",{parentName:"p"},"dispatch()")," method to send an action to the store. We pass along the action type \u2014 along with any other data needed to complete the action \u2014 as an argument to ",(0,n.kt)("inlineCode",{parentName:"p"},"dispatch()"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"We can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"subscribe()")," method to listen for any changes to the store. A change in the state tree could trigger any number of things such as an update to the page or a change to the UI.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Generally, we will use the ",(0,n.kt)("inlineCode",{parentName:"p"},"getState()")," method in combination with the ",(0,n.kt)("inlineCode",{parentName:"p"},"subscribe()")," method. This is because we will be most interested in making changes to our UI when the store is updated.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Redux uses the ",(0,n.kt)("strong",{parentName:"p"},"pubsub")," pattern. Objects can publish updates to the store (with the ",(0,n.kt)("inlineCode",{parentName:"p"},"dispatch()")," method) while dependents can subscribe to changes (with the ",(0,n.kt)("inlineCode",{parentName:"p"},"subscribe()")," method). Publishers and subscribers don't know about each other.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When we use React Redux, we won't use Redux's ",(0,n.kt)("inlineCode",{parentName:"p"},"subscribe()")," method directly. However, the React Redux code we write will still be using ",(0,n.kt)("inlineCode",{parentName:"p"},"subscribe()")," under the hood.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Redux also provides an ",(0,n.kt)("inlineCode",{parentName:"p"},"unsubscribe()")," method. This allows a dependent to stop listening for changes. It's kind of like when we decide to cancel a magazine subscription."))))}p.isMDXComponent=!0}}]);