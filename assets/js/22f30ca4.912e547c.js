"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[66433],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(a),f=r,h=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},40798:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={title:"State",id:"state",slug:"state",hide_table_of_contents:!0,sidebar_position:27,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0ka_state.md"},i=void 0,s={unversionedId:"react_part_time/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/state",id:"react_part_time/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/state",title:"State",description:'State is an extremely important concept in computer programming. In simple, very general terms, state is anything we are asking a computer to remember. We can think of it as a "snapshot" of the application at any given time. It defines the current conditions of an application.',source:"@site/docs/react_part_time/2_functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/0ka_state.md",sourceDirName:"react_part_time/2_functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78",slug:"/react_part_time/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/state",permalink:"/react_part_time/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/state",draft:!1,tags:[],version:"current",sidebarPosition:27,frontMatter:{title:"State",id:"state",slug:"state",hide_table_of_contents:!0,sidebar_position:27,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0ka_state.md"},sidebar:"react_part_time",previous:{title:"Composition",permalink:"/react_part_time/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/composition"},next:{title:"Storing State in Closures",permalink:"/react_part_time/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/storing_state_in_closures"}},c={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"State"),' is an extremely important concept in computer programming. In simple, very general terms, state is anything we are asking a computer to remember. We can think of it as a "snapshot" of the application at any given time. It defines the current conditions of an application.'),(0,r.kt)("p",null,"When we created applications with object-oriented programming, we used constructors to create stateful objects. We also created methods that would allow us to update and do things with these objects. In other words, we regularly mutated state."),(0,r.kt)("p",null,"However, in functional programming, we want to avoid mutating state. Where possible, our functions should be pure and avoid side effects. We should aim to make our application as immutable as we can. We could also say that our goal is to make the application ",(0,r.kt)("strong",{parentName:"p"},"stateless"),"."),(0,r.kt)("p",null,"While this is a lofty goal, the simple fact is that applications often do need to store state. React applications have both local and application state. Tools like Redux (which are used with React) store more complex state in what is called a ",(0,r.kt)("strong",{parentName:"p"},"store"),"."),(0,r.kt)("p",null,"These tools often use complex patterns to deal with state. For instance, Redux uses the ",(0,r.kt)("strong",{parentName:"p"},"pubsub pattern"),", which in turn is based on the ",(0,r.kt)("strong",{parentName:"p"},"observer pattern"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"observer pattern")," is when an object keeps track of dependents (also known as observers) that listen for changes. When the state of the object changes, it notifies the observer. That allows us to write code that triggers when the object changes. The observer pattern is commonly used in computer programming. One of its biggest advantages is that it allows code to be loosely coupled. Instead of having a function call that happens when state changes (which would be tightly coupled), that function call would only happen when an observer is listening for state changes. That function call may be tightly coupled to the observer, but it's separate from the object, which means our code is better separated."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"pubsub")," pattern is more complex and is based on the concept of publishing and subscribing. Instead of observers directly interacting with an object, there is an intermediary in between. An object can post to the intermediary while observers subscribe to it. This way, the observers and the object don't need to know about each other at all."),(0,r.kt)("p",null,"You do not need to know about these design patterns to be successful at Epicodus, but in your career as a developer, it will be important to understand these complex design patterns and how they work."),(0,r.kt)("p",null,"Ultimately, using functional programming doesn't mean we can't work with state. However, it does mean that we need to think very carefully about how to incorporate state in a functional program. In more complex programs, we might use the patterns mentioned above to keep our state separate from the rest of our application."),(0,r.kt)("p",null,"Since we are working with smaller applications this course section, we will cover a simpler way to store state in the next lesson. Instead of storing our state in objects or global variables, we will save state in functions instead."),(0,r.kt)("p",null,"We will get a chance to explore state further once we get to React. In the next lesson, we will learn how to use closures to store very simple state."))}m.isMDXComponent=!0}}]);