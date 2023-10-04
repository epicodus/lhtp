"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[5749],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},69481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={title:"Storing State in Closures",id:"storing-state-in-closures",slug:"storing-state-in-closures",hide_table_of_contents:!0,sidebar_position:29,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0kb_storing_state_in_closures.md"},i=void 0,c={unversionedId:"react/functional-programming-with-javascript/storing-state-in-closures",id:"react/functional-programming-with-javascript/storing-state-in-closures",title:"Storing State in Closures",description:"Now that we've had some practices working with closures, it's time to explore another cool thing we can do with closures. We can use them to store basic info about state.",source:"@site/docs/react/2_functional-programming-with-javascript/0kb-storing-state-in-closures.md",sourceDirName:"react/2_functional-programming-with-javascript",slug:"/react/functional-programming-with-javascript/storing-state-in-closures",permalink:"/react/functional-programming-with-javascript/storing-state-in-closures",draft:!1,tags:[],version:"current",sidebarPosition:29,frontMatter:{title:"Storing State in Closures",id:"storing-state-in-closures",slug:"storing-state-in-closures",hide_table_of_contents:!0,sidebar_position:29,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0kb_storing_state_in_closures.md"},sidebar:"react",previous:{title:"State",permalink:"/react/functional-programming-with-javascript/state"},next:{title:"Building a Functional Application (Part 1)",permalink:"/react/functional-programming-with-javascript/building-a-functional-application-part-1"}},s={},l=[],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now that we've had some practices working with closures, it's time to explore another cool thing we can do with closures. We can use them to store basic info about state."),(0,a.kt)("p",null,"Let's take a look at how we can use a closure to store basic state. We'll create a function that increments a counter by 1 to demonstrate how this works:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const counterFunction = () => {\n  let counter = 0;\n  return () => {\n    counter ++;\n    return counter;\n  }\n}\n")),(0,a.kt)("p",null,"In the example above, the outer function ",(0,a.kt)("inlineCode",{parentName:"p"},"counterFunction()")," stores a variable ",(0,a.kt)("inlineCode",{parentName:"p"},"counter")," which is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),". Note that we use ",(0,a.kt)("inlineCode",{parentName:"p"},"let")," here because we will be modifying the value of the counter."),(0,a.kt)("p",null,"Our ",(0,a.kt)("inlineCode",{parentName:"p"},"counterFunction()")," function returns an anonymous function that increments the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"counter")," and then returns its value. (We won't worry about the fact that we aren't mutating this in a functional way since this is merely for demonstration purposes.) The inner function has access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"counter")," variable due to ",(0,a.kt)("strong",{parentName:"p"},"lexical scope"),". Lexical scope means that an inner function has access to the variables of any outer functions that surround it."),(0,a.kt)("p",null,"Now we can do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const incrementer = counterFunction();\n")),(0,a.kt)("p",null,"If we check the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"incrementer")," in the console, we'll see that it stores our inner function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"() => {\n  counter ++;\n  return counter;\n}\n")),(0,a.kt)("p",null,"We can't see the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"counter")," but we know that ",(0,a.kt)("inlineCode",{parentName:"p"},"incrementer")," has access to it due to lexical scope. So what happens if we call this function multiple times?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"> incrementer()\n1\n> incrementer()\n2\n> incrementer()\n3\n")),(0,a.kt)("p",null,"Each time we call ",(0,a.kt)("inlineCode",{parentName:"p"},"incrementer()"),", it modifies the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"counter"),". Since ",(0,a.kt)("inlineCode",{parentName:"p"},"incrementer()")," is inside the outer function's lexical scope, it remembers the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"counter"),". However, the outer function isn't being called again so ",(0,a.kt)("inlineCode",{parentName:"p"},"counter")," never falls out of scope (nor is it reassigned) regardless of how many times we call in the inner function."),(0,a.kt)("p",null,"What would happen if we created another incrementer and then called our first incrementer again?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"> const incrementerTwo = counterFunction();\n> incrementerTwo()\n1\n> incrementerTwo()\n2\n> incrementer()\n4\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"incrementerTwo")," creates a ",(0,a.kt)("em",{parentName:"p"},"new")," lexical scope that doesn't affect the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"counter")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"incrementer"),". In other words, we could store an indefinite number of counters in functions using our closure."),(0,a.kt)("p",null,"In the next lesson, we'll build a small application that will use a closure to store state."))}m.isMDXComponent=!0}}]);