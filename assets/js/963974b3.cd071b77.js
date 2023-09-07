"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[48956],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),m=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(n),d=i,b=p["".concat(c,".").concat(d)]||p[d]||u[d]||r;return n?a.createElement(b,o(o({ref:t},s),{},{components:n})):a.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=n(87462),i=(n(67294),n(3905));const r={title:"5. Immutability",id:"immutability",slug:"immutability",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2_functional-programming-with-javascript/0cb_immutability.md"},o=void 0,l={unversionedId:"react/functional-programming-with-javascript/immutability",id:"react/functional-programming-with-javascript/immutability",title:"5. Immutability",description:"Immutability is an essential part of functional programming. In fact, some developers would argue that immutability is the most important aspect of functional programming \u2014 and that we can't call code functional if it isn't immutable.",source:"@site/docs/react/2_functional-programming-with-javascript/0cb_immutability.md",sourceDirName:"react/2_functional-programming-with-javascript",slug:"/react/functional-programming-with-javascript/immutability",permalink:"/lhtp/react/functional-programming-with-javascript/immutability",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"5. Immutability",id:"immutability",slug:"immutability",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2_functional-programming-with-javascript/0cb_immutability.md"},sidebar:"react",previous:{title:"4. Using Node in the Command Line",permalink:"/lhtp/react/functional-programming-with-javascript/using_node_in_the_command_line"},next:{title:"6. Imperative Versus Declarative Programming",permalink:"/lhtp/react/functional-programming-with-javascript/imperative_versus_declarative_programming"}},c={},m=[],s={toc:m},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Immutability")," is an essential part of functional programming. In fact, some developers would argue that immutability is the most important aspect of functional programming \u2014 and that we can't call code functional if it isn't immutable."),(0,i.kt)("p",null,"But what is immutability? If something is immutable, it cannot change. Conversely, if something is mutable, it can be changed. Breaking this down further, this means that we can't change values in variables, objects, or even arrays. Instead, we need to create a new variable, object, or array."),(0,i.kt)("p",null,"Let's start with a simple example. From an object-oriented approach, it's okay to do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let x = 1\nx = 2 + 1\n")),(0,i.kt)("p",null,"In the example above, we use ",(0,i.kt)("inlineCode",{parentName:"p"},"let")," because the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," will change. We then modify the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," by adding another number to it. This variable is mutable because it changes."),(0,i.kt)("p",null,"From a functional approach, we'd need to do something different:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const x = 1\nconst newX = 2 + x\n")),(0,i.kt)("p",null,"Note that we are using ",(0,i.kt)("inlineCode",{parentName:"p"},"const")," instead. When writing in a functional style, we will use ",(0,i.kt)("inlineCode",{parentName:"p"},"const"),", not ",(0,i.kt)("inlineCode",{parentName:"p"},"let"),"."),(0,i.kt)("p",null,"Instead of assigning a new value to ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," like we did in the first example, we create a new variable and assign the new value to it. Now both variables are immutable because neither can change."),(0,i.kt)("p",null,"Many developers argue that functional programming is preferred over object-oriented programming in part because of this focus on immutability. Think about it this way. If we see ",(0,i.kt)("inlineCode",{parentName:"p"},"let x")," in a large codebase, we know that ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," is probably going to change somewhere \u2014 and maybe even in many places. As a result, it's potentially unreliable \u2014 what if ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," is the value we expect in one part of the code but then mutates into something unexpected elsewhere in the code? That could lead to a bug."),(0,i.kt)("p",null,"However, when we see ",(0,i.kt)("inlineCode",{parentName:"p"},"const x"),", we can be assured that we know what the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," is. It will not change elsewhere in the code. It becomes easier to communicate our intentions to other developers and to prevent bugs."))}u.isMDXComponent=!0}}]);