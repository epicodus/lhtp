"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[11495],{3905:(t,n,e)=>{e.d(n,{Zo:()=>m,kt:()=>f});var o=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function c(t,n){if(null==t)return{};var e,o,r=function(t,n){if(null==t)return{};var e,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)e=i[o],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)e=i[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=o.createContext({}),l=function(t){var n=o.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):a(a({},n),t)),e},m=function(t){var n=l(t.components);return o.createElement(s.Provider,{value:n},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var n=t.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(t,n){var e=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,m=c(t,["components","mdxType","originalType","parentName"]),p=l(e),g=r,f=p["".concat(s,".").concat(g)]||p[g]||u[g]||i;return e?o.createElement(f,a(a({ref:n},m),{},{components:e})):o.createElement(f,a({ref:n},m))}));function f(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var i=e.length,a=new Array(i);a[0]=g;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=t,c[p]="string"==typeof t?t:r,a[1]=c;for(var l=2;l<i;l++)a[l]=e[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,e)}g.displayName="MDXCreateElement"},70827:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=e(87462),r=(e(67294),e(3905));const i={title:"2. Introduction to Functional Programming",id:"introduction_to_functional_programming",slug:"introduction_to_functional_programming",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2_functional-programming-with-javascript/0b_introduction_to_functional_programming.md"},a=void 0,c={unversionedId:"react/functional-programming-with-javascript/introduction_to_functional_programming",id:"react/functional-programming-with-javascript/introduction_to_functional_programming",title:"2. Introduction to Functional Programming",description:"Up to this point, we have mostly focused on object-oriented programming. We've built objects that store information and have methods attached to them. Object-oriented programming relies on techniques like inheritance and encapsulation.",source:"@site/docs/react/2_functional-programming-with-javascript/0b_introduction_to_functional_programming.md",sourceDirName:"react/2_functional-programming-with-javascript",slug:"/react/functional-programming-with-javascript/introduction_to_functional_programming",permalink:"/lhtp/react/functional-programming-with-javascript/introduction_to_functional_programming",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"2. Introduction to Functional Programming",id:"introduction_to_functional_programming",slug:"introduction_to_functional_programming",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2_functional-programming-with-javascript/0b_introduction_to_functional_programming.md"},sidebar:"react",previous:{title:"1. Functional Programming with JavaScript Objectives",permalink:"/lhtp/react/functional-programming-with-javascript/functional_programming_with_javascript_objectives"},next:{title:"3. Testing Functional Code",permalink:"/lhtp/react/functional-programming-with-javascript/testing_functional_code"}},s={},l=[],m={toc:l},p="wrapper";function u(t){let{components:n,...e}=t;return(0,r.kt)(p,(0,o.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Up to this point, we have mostly focused on object-oriented programming. We've built objects that store information and have methods attached to them. Object-oriented programming relies on techniques like ",(0,r.kt)("strong",{parentName:"p"},"inheritance")," and ",(0,r.kt)("strong",{parentName:"p"},"encapsulation"),"."),(0,r.kt)("p",null,"Functional programming is a completely different paradigm. In general, the goal of a functional program is to be ",(0,r.kt)("strong",{parentName:"p"},"stateless"),", which means we can no longer store information in objects. Functional programming focuses on what objects ",(0,r.kt)("em",{parentName:"p"},"do"),", not on what they ",(0,r.kt)("em",{parentName:"p"},"are"),". Instead of storing information in objects, we will pass information between functions. We will no longer ",(0,r.kt)("strong",{parentName:"p"},"mutate")," state \u2014 that means we won't even reassign values to variables. In other words, no more ",(0,r.kt)("inlineCode",{parentName:"p"},"let"),", only ",(0,r.kt)("inlineCode",{parentName:"p"},"const"),"."),(0,r.kt)("p",null,"Object-oriented programming focuses on objects themselves while functional programming is focused on functions. We've used OOP in very concrete ways; for instance, a dog barks or a player stores a score."),(0,r.kt)("p",null,"In functional programming, our goal is to make our functions more abstract. This can make functional programming harder to grasp at first. However, once a function is abstracted, we can use it with many different objects. While OOP uses inheritance to give many kinds of objects functionality, functional programming uses a technique called ",(0,r.kt)("strong",{parentName:"p"},"composition"),". We will learn more about composition and how it works in a future lesson."),(0,r.kt)("p",null,"While we will focus on functional programming techniques during this course section, both object-oriented and functional programming have their advantages and disadvantages. A good coder will incorporate both paradigms, even in the same application."))}u.isMDXComponent=!0}}]);