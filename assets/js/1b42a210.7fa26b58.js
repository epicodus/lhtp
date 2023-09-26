"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[76086],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||r;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},18190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={title:"State",id:"state",slug:"state",hide_table_of_contents:!0,sidebar_position:27,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0ka_state.md"},i=void 0,s={unversionedId:"react/functional-programming-with-javascript/state",id:"react/functional-programming-with-javascript/state",title:"State",description:'State is an extremely important concept in computer programming. In simple, very general terms, state is anything we are asking a computer to remember. We can think of it as a "snapshot" of the application at any given time. It defines the current conditions of an application.',source:"@site/docs/react/2_functional-programming-with-javascript/0ka-state.md",sourceDirName:"react/2_functional-programming-with-javascript",slug:"/react/functional-programming-with-javascript/state",permalink:"/react/functional-programming-with-javascript/state",draft:!1,tags:[],version:"current",sidebarPosition:27,frontMatter:{title:"State",id:"state",slug:"state",hide_table_of_contents:!0,sidebar_position:27,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0ka_state.md"},sidebar:"react",previous:{title:"Composition",permalink:"/react/functional-programming-with-javascript/composition"},next:{title:"Storing State in Closures",permalink:"/react/functional-programming-with-javascript/storing-state-in-closures"}},c={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"State"),' is an extremely important concept in computer programming. In simple, very general terms, state is anything we are asking a computer to remember. We can think of it as a "snapshot" of the application at any given time. It defines the current conditions of an application.'),(0,o.kt)("p",null,"When we created applications with object-oriented programming, we used constructors to create stateful objects. We also created methods that would allow us to update and do things with these objects. In other words, we regularly mutated state."),(0,o.kt)("p",null,"However, in functional programming, we want to avoid mutating state. Where possible, our functions should be pure and avoid side effects. We should aim to make our application as immutable as we can. We could also say that our goal is to make the application ",(0,o.kt)("strong",{parentName:"p"},"stateless"),"."),(0,o.kt)("p",null,"While this is a lofty goal, the simple fact is that applications often do need to store state. React applications have both local and application state. Tools like Redux (which are used with React) store more complex state in what is called a ",(0,o.kt)("strong",{parentName:"p"},"store"),"."),(0,o.kt)("p",null,"These tools often use complex patterns to deal with state. For instance, Redux uses the ",(0,o.kt)("strong",{parentName:"p"},"pubsub pattern"),", which in turn is based on the ",(0,o.kt)("strong",{parentName:"p"},"observer pattern"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"observer pattern")," is when an object keeps track of dependents (also known as observers) that listen for changes. When the state of the object changes, it notifies the observer. That allows us to write code that triggers when the object changes. The observer pattern is commonly used in computer programming. One of its biggest advantages is that it allows code to be loosely coupled. Instead of having a function call that happens when state changes (which would be tightly coupled), that function call would only happen when an observer is listening for state changes. That function call may be tightly coupled to the observer, but it's separate from the object, which means our code is better separated."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"pubsub")," pattern is more complex and is based on the concept of publishing and subscribing. Instead of observers directly interacting with an object, there is an intermediary in between. An object can post to the intermediary while observers subscribe to it. This way, the observers and the object don't need to know about each other at all."),(0,o.kt)("p",null,"You do not need to know about these design patterns to be successful at Epicodus, but in your career as a developer, it will be important to understand these complex design patterns and how they work."),(0,o.kt)("p",null,"Ultimately, using functional programming doesn't mean we can't work with state. However, it does mean that we need to think very carefully about how to incorporate state in a functional program. In more complex programs, we might use the patterns mentioned above to keep our state separate from the rest of our application."),(0,o.kt)("p",null,"Since we are working with smaller applications this course section, we will cover a simpler way to store state in the next lesson. Instead of storing our state in objects or global variables, we will save state in functions instead."),(0,o.kt)("p",null,"We will get a chance to explore state further once we get to React. In the next lesson, we will learn how to use closures to store very simple state."))}m.isMDXComponent=!0}}]);