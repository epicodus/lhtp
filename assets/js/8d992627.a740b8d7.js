"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[57984],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),m=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=m(a),f=i,d=s["".concat(c,".").concat(f)]||s[f]||u[f]||r;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},31902:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));const r={title:"Immutability",id:"immutability",slug:"immutability",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2_functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/0cb_immutability.md"},o=void 0,l={unversionedId:"react_part_time/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/immutability",id:"react_part_time/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/immutability",title:"Immutability",description:"Immutability is an essential part of functional programming. In fact, some developers would argue that immutability is the most important aspect of functional programming \u2014 and that we can't call code functional if it isn't immutable.",source:"@site/docs/react_part_time/2_functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/0cb_immutability.md",sourceDirName:"react_part_time/2_functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78",slug:"/react_part_time/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/immutability",permalink:"/lhtp/react_part_time/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/immutability",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Immutability",id:"immutability",slug:"immutability",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2_functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/0cb_immutability.md"},sidebar:"react_part_time",previous:{title:"Using Node in the Command Line",permalink:"/lhtp/react_part_time/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/using_node_in_the_command_line"},next:{title:"Imperative Versus Declarative Programming",permalink:"/lhtp/react_part_time/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/imperative_versus_declarative_programming"}},c={},m=[],p={toc:m},s="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(s,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Immutability")," is an essential part of functional programming. In fact, some developers would argue that immutability is the most important aspect of functional programming \u2014 and that we can't call code functional if it isn't immutable."),(0,i.kt)("p",null,"But what is immutability? If something is immutable, it cannot change. Conversely, if something is mutable, it can be changed. Breaking this down further, this means that we can't change values in variables, objects, or even arrays. Instead, we need to create a new variable, object, or array."),(0,i.kt)("p",null,"Let's start with a simple example. From an object-oriented approach, it's okay to do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let x = 1\nx = 2 + 1\n")),(0,i.kt)("p",null,"In the example above, we use ",(0,i.kt)("inlineCode",{parentName:"p"},"let")," because the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," will change. We then modify the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," by adding another number to it. This variable is mutable because it changes."),(0,i.kt)("p",null,"From a functional approach, we'd need to do something different:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const x = 1\nconst newX = 2 + x\n")),(0,i.kt)("p",null,"Note that we are using ",(0,i.kt)("inlineCode",{parentName:"p"},"const")," instead. When writing in a functional style, we will use ",(0,i.kt)("inlineCode",{parentName:"p"},"const"),", not ",(0,i.kt)("inlineCode",{parentName:"p"},"let"),"."),(0,i.kt)("p",null,"Instead of assigning a new value to ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," like we did in the first example, we create a new variable and assign the new value to it. Now both variables are immutable because neither can change."),(0,i.kt)("p",null,"Many developers argue that functional programming is preferred over object-oriented programming in part because of this focus on immutability. Think about it this way. If we see ",(0,i.kt)("inlineCode",{parentName:"p"},"let x")," in a large codebase, we know that ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," is probably going to change somewhere \u2014 and maybe even in many places. As a result, it's potentially unreliable \u2014 what if ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," is the value we expect in one part of the code but then mutates into something unexpected elsewhere in the code? That could lead to a bug."),(0,i.kt)("p",null,"However, when we see ",(0,i.kt)("inlineCode",{parentName:"p"},"const x"),", we can be assured that we know what the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," is. It will not change elsewhere in the code. It becomes easier to communicate our intentions to other developers and to prevent bugs."))}u.isMDXComponent=!0}}]);