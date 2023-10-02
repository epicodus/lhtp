"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[25303],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(u,".").concat(m)]||p[m]||f[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={title:"Pure Functions",id:"pure-functions",slug:"pure-functions",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0d_pure_functions.md"},o=void 0,s={unversionedId:"react/functional-programming-with-javascript/pure-functions",id:"react/functional-programming-with-javascript/pure-functions",title:"Pure Functions",description:"When we program in a functional style, the functions we write must always be pure. Let's take a look at what makes a pure function.",source:"@site/docs/react/2_functional-programming-with-javascript/0d-pure-functions.md",sourceDirName:"react/2_functional-programming-with-javascript",slug:"/react/functional-programming-with-javascript/pure-functions",permalink:"/react/functional-programming-with-javascript/pure-functions",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Pure Functions",id:"pure-functions",slug:"pure-functions",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0d_pure_functions.md"},sidebar:"react",previous:{title:"Imperative Versus Declarative Programming",permalink:"/react/functional-programming-with-javascript/imperative-versus-declarative-programming"},next:{title:"First Class Citizens",permalink:"/react/functional-programming-with-javascript/first-class-citizens"}},u={},l=[{value:"Benefits of Pure Functions",id:"benefits-of-pure-functions",level:3}],c={toc:l},p="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When we program in a functional style, the functions we write must always be ",(0,r.kt)("strong",{parentName:"p"},"pure"),". Let's take a look at what makes a ",(0,r.kt)("strong",{parentName:"p"},"pure function"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Given a specific input, a pure function always returns the same output."))),(0,r.kt)("p",null,"Here's a very basic example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function addOne(num) {\n  return num + 1;\n}\n")),(0,r.kt)("p",null,"In the example above, no matter how many times we pass in the value ",(0,r.kt)("inlineCode",{parentName:"p"},"7")," as an argument, the function will always return ",(0,r.kt)("inlineCode",{parentName:"p"},"8"),"."),(0,r.kt)("p",null,"In contrast, we can't have a function that returns a random value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function guessMyNumber(num) {\n  const myNumber = Math.floor(Math.random() * Math.floor(10) ) + 1;\n  if (num === myNumber) {\n    return "You guessed right!"\n  } else {\n    return "That wasn\'t it."\n  }\n}\n')),(0,r.kt)("p",null,"The function above takes a number as an argument. We then use ",(0,r.kt)("inlineCode",{parentName:"p"},"Math.random()")," to generate a number between 1 and 10. If the random number matches the number passed in as an argument, the function returns ",(0,r.kt)("inlineCode",{parentName:"p"},'"You guessed right!"')," Otherwise, the function returns ",(0,r.kt)("inlineCode",{parentName:"p"},'"That wasn\'t it."')),(0,r.kt)("p",null,"This function isn't pure because we can get different results with the same input. For example, if we input ",(0,r.kt)("inlineCode",{parentName:"p"},"7"),", sometimes we'll get one result and sometimes we'll get the other."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"A pure function always returns an output.")," We've already implied this, but let's make it explicit here: a pure function has to return something. A pure function can't always return the same output for a given input if it doesn't return anything at all!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"A pure function can not have side effects.")," A side effect is when a function changes something in the application outside of the function. Pure functions should only return a single thing. They should not alter anything else in the application."))),(0,r.kt)("p",null,"We wrote many functions in JavaScript that had side effects. For instance, UI functions that change something in the DOM have side effects:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function addWord(word) {\n  document.getElementById("typing-box").append(word);\n}\n')),(0,r.kt)("p",null,"The function above appends a word to the DOM, which means it's altering something outside of the function. In fact, the function above is entirely side effects \u2014 there is no return value. It's definitely not a pure function!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pure functions cannot rely on external variables or state.")," If a pure function could rely on external variables or state, then this could affect the return value of the function. Let's use pig dice as an example. Let's assume we have the following function inside a ",(0,r.kt)("inlineCode",{parentName:"li"},"Player")," class:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class Player {\n\n  constructor() {\n    this.totalScore = 0;\n  }\n\n  tallyScore(roundScore) {\n    this.totalScore = this.totalScore + roundScore;\n    return this.totalScore;\n  }\n}\n")),(0,r.kt)("p",null,"In the example above, when a player object is instantiated, it begins with a ",(0,r.kt)("inlineCode",{parentName:"p"},"totalScore")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),". Then, when we call the ",(0,r.kt)("inlineCode",{parentName:"p"},"tallyScore()")," method on the player, the player's ",(0,r.kt)("inlineCode",{parentName:"p"},"totalScore")," will be incremented. Because the ",(0,r.kt)("inlineCode",{parentName:"p"},"totalScore")," changes throughout the game, this function can return different results with the same input. For instance, if we input ",(0,r.kt)("inlineCode",{parentName:"p"},"7"),", the function will return ",(0,r.kt)("inlineCode",{parentName:"p"},"33")," if the player's ",(0,r.kt)("inlineCode",{parentName:"p"},"totalScore")," was already ",(0,r.kt)("inlineCode",{parentName:"p"},"26"),", but it would return ",(0,r.kt)("inlineCode",{parentName:"p"},"7")," if the player didn't have any points yet."),(0,r.kt)("p",null,"It should also be clear that the ",(0,r.kt)("inlineCode",{parentName:"p"},"tallyScore()")," function has side effects because it alters external state \u2014 yet another reason this function isn't pure."),(0,r.kt)("p",null,"The same problems occur with global variables. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let score = 0;\n\nfunction incrementScore(points) {\n  score += points;\n  return score;\n}\n")),(0,r.kt)("p",null,"We learned in Introduction to Programming that this kind of code can be problematic. In a large code base, it could be very difficult for developers to know which functions are changing those global variables and how those global variables in turn are affecting the rest of the application. The application would be hard to test and have a higher potential for bugs."),(0,r.kt)("p",null,"The code snippet above breaks most rules for a pure function. It can return different values even if the input is the same, it relies on external application state, and it has side effects."),(0,r.kt)("h3",{id:"benefits-of-pure-functions"},"Benefits of Pure Functions"),(0,r.kt)("p",null,"Pure functions are one of the basic tenets of functional programming, but why are they beneficial? Why does it matter if a function returns a consistent value, doesn't have side effects and so on?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Pure functions are easier to test.")," One input always returns the same output. If our tests pass, we know our code is probably good to go. Our pure functions will not alter other parts of the codebase, which means we can keep our tests simple instead of needing to account for other factors such as changing state.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"What You See Is What You Get.")," When we look at a pure function, we know the function has no side effects and can't be altered by external state. For that reason, we can look at a pure function in isolation without needing to know about the rest of the application.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Pure functions result in fewer bugs.")," If a pure function is easier to test, easier to reason about, and works independently of the rest of the code base, we can more easily isolate and prevent bugs. This is especially important in a larger codebase."))),(0,r.kt)("p",null,"We must always write pure functions when using functional programming. In fact, even when we take an object-oriented perspective, we can benefit from writing pure functions."))}f.isMDXComponent=!0}}]);