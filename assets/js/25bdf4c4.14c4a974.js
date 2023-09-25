"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[97712],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||f[m]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"First Class Citizens",id:"first_class_citizens",slug:"first_class_citizens",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2_functional-programming-with-javascript/0e_first_class_citizens.md"},s=void 0,o={unversionedId:"react_classic/functional-programming-with-javascript/first_class_citizens",id:"react_classic/functional-programming-with-javascript/first_class_citizens",title:"First Class Citizens",description:"In JavaScript, functions are first class citizens. But what exactly does this mean and why is this important for functional programming?",source:"@site/docs/react_classic/2_functional-programming-with-javascript/0e_first_class_citizens.md",sourceDirName:"react_classic/2_functional-programming-with-javascript",slug:"/react_classic/functional-programming-with-javascript/first_class_citizens",permalink:"/lhtp/react_classic/functional-programming-with-javascript/first_class_citizens",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"First Class Citizens",id:"first_class_citizens",slug:"first_class_citizens",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2_functional-programming-with-javascript/0e_first_class_citizens.md"},sidebar:"react_classic",previous:{title:"Pure Functions",permalink:"/lhtp/react_classic/functional-programming-with-javascript/pure_functions"},next:{title:"Closures",permalink:"/lhtp/react_classic/functional-programming-with-javascript/closures"}},l={},c=[{value:"Assigning Functions as Arguments",id:"assigning-functions-as-arguments",level:2},{value:"Assigning Functions to Variables",id:"assigning-functions-to-variables",level:2},{value:"Functions Returning Functions",id:"functions-returning-functions",level:2}],u={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In JavaScript, functions are ",(0,i.kt)("strong",{parentName:"p"},"first class citizens"),". But what exactly does this mean and why is this important for functional programming?"),(0,i.kt)("p",null,'Very loosely, this just means we can use a function in the same way we use a variable. In this lesson, we\'ll go over some of the things we can do in JavaScript that make a function "first class."'),(0,i.kt)("h2",{id:"assigning-functions-as-arguments"},"Assigning Functions as Arguments"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We can pass a function into another function as an argument. We've done this kind of thing before; this is known as a ",(0,i.kt)("strong",{parentName:"p"},"callback"),". Callbacks are extremely common in JavaScript. Try the following code in the Node REPL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function add(num1, num2) {\n  return num1 + num2;\n}\n\nfunction printResult(sum) {\n  return `The value of this equation is ${sum}.`\n}\n\nprintResult(add(5, 7));\n")),(0,i.kt)("p",null,"Our ",(0,i.kt)("inlineCode",{parentName:"p"},"add()")," function simply sums two numbers. Our ",(0,i.kt)("inlineCode",{parentName:"p"},"printResult()")," function simply takes a number and places it in a string. (The example above uses a ",(0,i.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/intermediate-javascript/test-driven-development-and-environments-with-javascript/es6-template-literals"},"template literal"),".)"),(0,i.kt)("p",null,"We can pass our ",(0,i.kt)("inlineCode",{parentName:"p"},"add()")," function into our ",(0,i.kt)("inlineCode",{parentName:"p"},"printResult()")," function just like we could pass any other variable in as an argument."),(0,i.kt)("p",null,"While the example above may not seem particularly useful, we could potentially use a method like ",(0,i.kt)("inlineCode",{parentName:"p"},"printResult()")," with many different mathematical functions such as ",(0,i.kt)("inlineCode",{parentName:"p"},"multiply()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"subtract()")," and so on. This serves two potential benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It would DRY up our code if we had many mathematical functions and we always wanted to put the result inside a string."),(0,i.kt)("li",{parentName:"ul"},"It creates better separation of logic in our code. One function concerns itself with mathematical equations while the other includes display logic for showing the result to a user.")),(0,i.kt)("h2",{id:"assigning-functions-to-variables"},"Assigning Functions to Variables"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Because functions are first class, they can be also assigned to variables. Here's an example. Open the Node REPL and type in the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const funkyVariable = function(arg) {\n  return arg;\n}\n\nfunkyVariable("Hello!");\n')),(0,i.kt)("p",null,"In the example above, we store an anonymous function inside ",(0,i.kt)("inlineCode",{parentName:"p"},"funkyVariable"),". We could call ",(0,i.kt)("inlineCode",{parentName:"p"},"funkyVariable"),", but this will just return the function itself. However, we can add parens to a variable storing a function to actually call the function."),(0,i.kt)("p",null,"This is also known as a ",(0,i.kt)("strong",{parentName:"p"},"function expression"),". A function expression is when an anonymous function (that is, a function that doesn't have a name) is stored inside a variable to be called later."),(0,i.kt)("p",null,"When would we want to store a function inside a variable? Well, variables are a convenient way to hold information and pass it around. We have the flexibility of a variable (if we call ",(0,i.kt)("inlineCode",{parentName:"p"},"funkyVariable"),") combined with the power of a function (if we call ",(0,i.kt)("inlineCode",{parentName:"p"},"funkyVariable()"),")."),(0,i.kt)("h2",{id:"functions-returning-functions"},"Functions Returning Functions"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We are used to functions returning values. However, we can also use a function to return another function. A function that returns yet another function is known as a ",(0,i.kt)("strong",{parentName:"p"},"higher order function"),". Functions that take other functions as arguments are also higher order functions as well. Try this example in the Node REPL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'function doAThing() {\n  return function() {\n    return "A thing was done."\n  }\n}\n')),(0,i.kt)("p",null,"However, if we call ",(0,i.kt)("inlineCode",{parentName:"p"},"doAThing()")," in the REPL, Node returns ",(0,i.kt)("inlineCode",{parentName:"p"},"[Function]"),". (If we call it in the Chrome console, we'll see that it returns the actual function.) This is because we've called the outer function but we haven't called the inner function yet. To call the inner function, we need to do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"> doAThing()()\n'A thing was done.'\n")),(0,i.kt)("p",null,"The first set of parens is used to call the ",(0,i.kt)("inlineCode",{parentName:"p"},"doAThing()")," method, which returns a function. The second set of parens calls the inner function."),(0,i.kt)("p",null,"The example above probably seems a little senseless \u2014 why bother to have one function return another? However, this leads to a very powerful programming tool called a ",(0,i.kt)("strong",{parentName:"p"},"closure"),". We will cover closures in the next lesson."),(0,i.kt)("p",null,"In this lesson, we covered three important ways functions are first-class citizens in JavaScript. While it may not be clear yet why this is useful, JavaScript couldn't be used as a functional language without the techniques described above. Because JavaScript contains this functionality, it has tremendous power not only as an object-oriented language but also as a functional language."))}f.isMDXComponent=!0}}]);