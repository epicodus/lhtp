"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[96973],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76301:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={title:"Imperative Versus Declarative Programming",id:"imperative_versus_declarative_programming",slug:"imperative_versus_declarative_programming",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2_functional-programming-with-javascript/0cc_imperative_vs_declarative.md"},o=void 0,l={unversionedId:"react/functional-programming-with-javascript/imperative_versus_declarative_programming",id:"react/functional-programming-with-javascript/imperative_versus_declarative_programming",title:"Imperative Versus Declarative Programming",description:"Up to this point, we've mostly used an imperative style of programming. Imperative programming is when we tell our program exactly what we want to do and how we want it done. This means explicitly stating all the steps needed to get to an end result.",source:"@site/docs/react/2_functional-programming-with-javascript/0cc_imperative_vs_declarative.md",sourceDirName:"react/2_functional-programming-with-javascript",slug:"/react/functional-programming-with-javascript/imperative_versus_declarative_programming",permalink:"/lhtp/react/functional-programming-with-javascript/imperative_versus_declarative_programming",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Imperative Versus Declarative Programming",id:"imperative_versus_declarative_programming",slug:"imperative_versus_declarative_programming",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2_functional-programming-with-javascript/0cc_imperative_vs_declarative.md"},sidebar:"react",previous:{title:"Immutability",permalink:"/lhtp/react/functional-programming-with-javascript/immutability"},next:{title:"Pure Functions",permalink:"/lhtp/react/functional-programming-with-javascript/pure_functions"}},s={},p=[],c={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Up to this point, we've mostly used an ",(0,n.kt)("strong",{parentName:"p"},"imperative")," style of programming. ",(0,n.kt)("strong",{parentName:"p"},"Imperative programming")," is when we tell our program exactly what we want to do and how we want it done. This means explicitly stating all the steps needed to get to an end result."),(0,n.kt)("p",null,"This is in contrast to the ",(0,n.kt)("strong",{parentName:"p"},"declarative")," style of programming, which is preferred when we write functional code. ",(0,n.kt)("strong",{parentName:"p"},"Declarative programming")," is when we tell our program what the end result should be and then let our program decide the best way to achieve this result."),(0,n.kt)("p",null,"Let's use an example to demonstrate the differences between these two techniques. Let's say we are leaving instructions so our friend can do their laundry."),(0,n.kt)("p",null,"Here's how we'd do this from an imperative perspective:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the washing machine."),(0,n.kt)("li",{parentName:"ol"},"Add clothes."),(0,n.kt)("li",{parentName:"ol"},"Add one cup of laundry detergent."),(0,n.kt)("li",{parentName:"ol"},"Close the washing machine."),(0,n.kt)("li",{parentName:"ol"},"Set the water temperature to warm."),(0,n.kt)("li",{parentName:"ol"},"Turn the knob to start."),(0,n.kt)("li",{parentName:"ol"},"Pull the start knob to begin washing.")),(0,n.kt)("p",null,"Here's how we'd do the exact same thing from a declarative perspective:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Wash the clothes.")),(0,n.kt)("p",null,"In the first example, we give very specific instructions on how clothes should be washed. Our program will follow each step, which will lead to the desired end result \u2014 clean (but not dry) clothes. In the second example, we simply tell the program what to do \u2014 wash the clothes \u2014 and let our program handle the steps it takes to reach that result."),(0,n.kt)("p",null,"We've actually written declarative code before. For instance, when we write HTML, we don't describe where each individual pixel on the screen should be placed. Instead, we describe what the end goal is. When we create an ",(0,n.kt)("inlineCode",{parentName:"p"},"<input>"),' field, we\'re saying "place a form input here." We aren\'t saying "create a box roughly x pixels high and y pixels wide here, add a cursor if the user clicks on it, and then make sure the box has functionality to accept user text input." We only have to describe the end goal, not every single step required to reach that end goal.'),(0,n.kt)("p",null,"We've also used declarative programming in JavaScript. ",(0,n.kt)("inlineCode",{parentName:"p"},"map()")," is an excellent example."),(0,n.kt)("p",null,"From an imperative perspective, we could double each element in an array like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const originalArray = [1,2,3];\nlet doubledArray = [];\noriginalArray.forEach(function(element) {\n  const doubledElement = element * 2;\n  doubledArray.push(doubledElement);\n});\ndoubledArray;\n")),(0,n.kt)("p",null,"Here we instruct our code to create an empty array called ",(0,n.kt)("inlineCode",{parentName:"p"},"doubledArray"),", iterate over each element in our ",(0,n.kt)("inlineCode",{parentName:"p"},"originalArray"),", double each of those elements, and then push them into ",(0,n.kt)("inlineCode",{parentName:"p"},"doubledArray"),"."),(0,n.kt)("p",null,"With ",(0,n.kt)("inlineCode",{parentName:"p"},"map()"),", however, we let JavaScript handle most of the work:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const originalArray = [1,2,3];\nconst newArray = originalArray.map(function(element) {\n  return element * 2;\n});\n")),(0,n.kt)("p",null,"Here, we simply tell the program to complete a transformation (",(0,n.kt)("inlineCode",{parentName:"p"},"map()"),") that doubles every element by 2. We don't state every step explicitly. As a result, our code is cleaner and easier to read."),(0,n.kt)("p",null,"While imperative code is sometimes necessary, declarative code is widely considered more reusable, readable, and easier for programmers to collaborate on. We will favor this style of coding when we build functional programs."))}u.isMDXComponent=!0}}]);