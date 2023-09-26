"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[47814],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),p=a,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||o;return t?i.createElement(m,r(r({ref:n},d),{},{components:t})):i.createElement(m,r({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},55147:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(87462),a=(t(67294),t(3905));const o={title:"Homework: Using Function Declarations in Event Handling",id:"homework-using-function-declarations-in-event-handling",slug:"homework-using-function-declarations-in-event-handling",hide_table_of_contents:!0,sidebar_position:21,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3j_using_function_declarations_in_event_handling.md"},r=void 0,s={unversionedId:"introduction-to-programming-part-time/javascript-and-web-browsers-part-2/homework-using-function-declarations-in-event-handling",id:"introduction-to-programming-part-time/javascript-and-web-browsers-part-2/homework-using-function-declarations-in-event-handling",title:"Homework: Using Function Declarations in Event Handling",description:"In this lesson we'll learn how to use function declarations in event handling. We'll look at examples with event handler properties and event listeners. We'll also learn that using function declarations really improves code reusability and is generally considered a good choice for applications that scale. In the next lesson when we learn how to remove event listeners, we will need to use function declarations.",source:"@site/docs/introduction-to-programming-part-time/4_javascript-and-web-browsers-part-2/3j-using-function-declarations-in-event-handling.md",sourceDirName:"introduction-to-programming-part-time/4_javascript-and-web-browsers-part-2",slug:"/introduction-to-programming-part-time/javascript-and-web-browsers-part-2/homework-using-function-declarations-in-event-handling",permalink:"/introduction-to-programming-part-time/javascript-and-web-browsers-part-2/homework-using-function-declarations-in-event-handling",draft:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"Homework: Using Function Declarations in Event Handling",id:"homework-using-function-declarations-in-event-handling",slug:"homework-using-function-declarations-in-event-handling",hide_table_of_contents:!0,sidebar_position:21,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3j_using_function_declarations_in_event_handling.md"},sidebar:"introduction-to-programming-part-time",previous:{title:"Homework: Event Handling with Event Listeners",permalink:"/introduction-to-programming-part-time/javascript-and-web-browsers-part-2/homework-event-handling-with-event-listeners"},next:{title:"Homework: Removing Event Listeners",permalink:"/introduction-to-programming-part-time/javascript-and-web-browsers-part-2/homework-removing-event-listeners"}},l={},c=[{value:"Using Function Declarations with Event Handler Properties",id:"using-function-declarations-with-event-handler-properties",level:2},{value:"Using Function Declarations with Event Listeners",id:"using-function-declarations-with-event-listeners",level:2},{value:"When Would I Use a Function Declaration in an Event Handler?",id:"when-would-i-use-a-function-declaration-in-an-event-handler",level:2},{value:"Writing Functions So They Are Reusable",id:"writing-functions-so-they-are-reusable",level:3},{value:"A Review of Hoisting",id:"a-review-of-hoisting",level:3},{value:"Reusable Code that Scales",id:"reusable-code-that-scales",level:2},{value:"Summary",id:"summary",level:2}],d={toc:c},u="wrapper";function h(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this lesson we'll learn how to use function declarations in event handling. We'll look at examples with event handler properties and event listeners. We'll also learn that using function declarations really improves code reusability and is generally considered a good choice for applications that scale. In the next lesson when we learn how to remove event listeners, we will need to use function declarations. "),(0,a.kt)("h2",{id:"using-function-declarations-with-event-handler-properties"},"Using Function Declarations with Event Handler Properties"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Let's see how to use a function declaration in an ",(0,a.kt)("inlineCode",{parentName:"p"},"onclick")," event handler property. We'll start by reviewing how to use an \"onevent\" property with a function expression. Below is the JS and a snippet of the HTML that we'll target. This code isn't from a specific project, just a small example to work with."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<h1>Heading 1</h1>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let h1 = document.querySelector("h1"); \nh1.onclick = function() {\n  window.alert("This is a heading element.");\n};\n')),(0,a.kt)("p",null,"Now let's use a function declaration instead. Check out the updated JS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let h1 = document.querySelector("h1");\nfunction alertHeading() {\n  window.alert("This is a heading element.");\n}\nh1.onclick = alertHeading;\n')),(0,a.kt)("p",null,"Notice that we only set the name of the function declaration as the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"onclick")," event handler property: ",(0,a.kt)("inlineCode",{parentName:"p"},"h1.onclick = alertHeading;"),". This is a good reminder of the distinctions within function syntax between defining a function, calling a function, and printing the value/definition of a function. Let's review these distinctions with an example. Check out the following code snippets and pay attention to the comments. Optionally try out the following code in your DevTools console."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// we are defining a function with a function declaration\n> function alertHeading() {\n  window.alert("This is a heading element.");\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// we are calling the alertHeading() function\n> alertHeading();\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// this is printing the value of a function\n> alertHeading;\n\u0192 alertHeading() {\n  window.alert("This is a heading element.");\n}\n')),(0,a.kt)("p",null,"When we call on the name of a function without parens, we get the value of the function's definition returned to us. This is just like accessing a variable name to get its value: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"> let myAge = 55;\n> myAge;\n55\n")),(0,a.kt)("p",null,"So, when we want to set the value of an object property to a function declaration that we've already defined, we need to only use the name of the function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"> h1.onclick = alertHeading;\n")),(0,a.kt)("p",null,"If this concept is unclear, try out the code in the DevTools console, and talk about it with your pair, dev team, or teacher."),(0,a.kt)("h2",{id:"using-function-declarations-with-event-listeners"},"Using Function Declarations with Event Listeners"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The syntax to use a function declaration with an event listener is much the same as using one with an event handler property. In the following code snippets, we've updated the example ",(0,a.kt)("inlineCode",{parentName:"p"},"onclick")," event handler property to use an event listener instead. The first code snippet uses a function expression and the section code snippet uses a function declaration. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// using a function expression\nlet h1 = document.querySelector("h1"); \nh1.addEventListener("click", function() {\n  window.alert("This is a heading element.");\n});\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// using a function declaration\nlet h1 = document.querySelector("h1");\nfunction alertHeading() {\n  window.alert("This is a heading element.");\n}\nh1.addEventListener("click", alertHeading);\n')),(0,a.kt)("p",null,"Just like with the event handler property example, we pass in the name of the ",(0,a.kt)("inlineCode",{parentName:"p"},"alertHeading")," function that we are passing in as the second argument to the ",(0,a.kt)("inlineCode",{parentName:"p"},"addEventListner()"),' method call. Remember, a function that is passed in as the argument to another function or method is called a callback function. If you need a review of callback functions, revisit the "Event Handling with Event Listeners" lesson.'),(0,a.kt)("h2",{id:"when-would-i-use-a-function-declaration-in-an-event-handler"},"When Would I Use a Function Declaration in an Event Handler?"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This is a great question. We prefer to reuse functionality by using function declarations or function expressions that are stored in variables, and we prefer to use function declarations because of hoisting. Let's look at an example for the first reason, and then cover the second. "),(0,a.kt)("h3",{id:"writing-functions-so-they-are-reusable"},"Writing Functions So They Are Reusable"),(0,a.kt)("p",null,"To understand how functions can improve code reusability, let's expand on our example in this lesson. Now let's say we are coding an educational website that teaches students the names of different HTML elements. For our HTML, we'll list all heading elements H1 through H6:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6</h6>\n")),(0,a.kt)("p",null,"Now, anytime the user clicks on a heading element, we'll inform them ",(0,a.kt)("inlineCode",{parentName:"p"},'"This is a heading element."')," in an alert. With the event handling we've learned so far, our JS would need to have a click event handler set up for each element. This is what our code would look like using event listeners:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let h1 = document.querySelector("h1"); \nlet h2 = document.querySelector("h2"); \nlet h3 = document.querySelector("h3"); \nlet h4 = document.querySelector("h4"); \nlet h5 = document.querySelector("h5"); \nlet h6 = document.querySelector("h6"); \n\nh1.addEventListener("click", function() {\n  window.alert("This is a heading element.");\n});\nh2.addEventListener("click", function() {\n  window.alert("This is a heading element.");\n});\nh3.addEventListener("click", function() {\n  window.alert("This is a heading element.");\n});\nh4.addEventListener("click", function() {\n  window.alert("This is a heading element.");\n});\nh5.addEventListener("click", function() {\n  window.alert("This is a heading element.");\n});\nh6.addEventListener("click", function() {\n  window.alert("This is a heading element.");\n});\n')),(0,a.kt)("p",null,"However, we can drastically reduce the amount of code by using a function declaration or a function expression stored in a variable. Let's see what this looks like with a function declaration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let h1 = document.querySelector("h1"); \nlet h2 = document.querySelector("h2"); \nlet h3 = document.querySelector("h3"); \nlet h4 = document.querySelector("h4"); \nlet h5 = document.querySelector("h5"); \nlet h6 = document.querySelector("h6"); \n\nfunction alertHeadings() {\n  window.alert("This is a heading element.");\n}\n\nh1.addEventListener("click", alertHeadings);\nh2.addEventListener("click", alertHeadings);\nh3.addEventListener("click", alertHeadings);\nh4.addEventListener("click", alertHeadings);\nh5.addEventListener("click", alertHeadings);\nh6.addEventListener("click", alertHeadings);\n')),(0,a.kt)("p",null,"With this refactor, we've gone from 24 lines of code down to 15, which is a good sign that we've improved our code reusability. Instead of repeating the ",(0,a.kt)("inlineCode",{parentName:"p"},'window.alert("This is a heading element.");')," in six different function expressions, we've opted to create just one function declaration and reuse it for each of the headings. When thinking about how to optimize our code a good guideline is to look for repeated code and add it to a single function that you can then call in multiple places. "),(0,a.kt)("p",null,"Now, which code snippet do you think is easier to read and understand? There's actually no right answer here. I would pick the second option because it's easier to pick out the function definition, and the event listeners are all on single lines, which is easier for me to scan."),(0,a.kt)("p",null,"By the way, this code works the exact same when we store an anonymous function expression into a variable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let h1 = document.querySelector("h1"); \nlet h2 = document.querySelector("h2"); \nlet h3 = document.querySelector("h3"); \nlet h4 = document.querySelector("h4"); \nlet h5 = document.querySelector("h5"); \nlet h6 = document.querySelector("h6"); \n\nconst alertHeadings = function() {\n  window.alert("This is a heading element.");\n}\n\nh1.addEventListener("click", alertHeadings);\nh2.addEventListener("click", alertHeadings);\nh3.addEventListener("click", alertHeadings);\nh4.addEventListener("click", alertHeadings);\nh5.addEventListener("click", alertHeadings);\nh6.addEventListener("click", alertHeadings);\n')),(0,a.kt)("p",null,"So why would we pick a function declaration over a function expression? Generally speaking, we prefer to use function declarations because that code is ",(0,a.kt)("strong",{parentName:"p"},"hoisted"),". We learned about hoisting in a previous lesson, but now is a good time to review. "),(0,a.kt)("h3",{id:"a-review-of-hoisting"},"A Review of Hoisting"),(0,a.kt)("p",null,"JS interpreters (programs that interpret JS code, like Google Chrome's V8 JS engine) perform ",(0,a.kt)("strong",{parentName:"p"},"hoisting"),", which is the process of moving the declaration of functions and variables to the top of their scope, prior to execution of the code. Let's understand this with an example. Copy and paste this code into your DevTools console"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const result = add(3, 5);\nfunction add(number1, number2) {\n   return number1 + number2;\n}\nresult;\n")),(0,a.kt)("p",null,"Take note that we've declared our ",(0,a.kt)("inlineCode",{parentName:"p"},"add()")," function with a function declaration, and we're calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"add()")," function before we've defined it in our code. Should this code execute properly?"),(0,a.kt)("p",null,"When we hit 'enter' the code executes without error and we should get ",(0,a.kt)("inlineCode",{parentName:"p"},"8"),". In this case we can call ",(0,a.kt)("inlineCode",{parentName:"p"},"add()")," before it has been defined because of ",(0,a.kt)("strong",{parentName:"p"},"hoisting"),". This only happens with function declarations."),(0,a.kt)("p",null,"Now refresh your page and your DevTools console and copy/paste this code and hit enter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const result = add(3, 5);\nconst add = function(number1, number2) {\n   return number1 + number2;\n}\nresult;\n")),(0,a.kt)("p",null,"And what do we get? We get an error similar to this one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Uncaught ReferenceError: add is not defined\n")),(0,a.kt)("p",null,"The difference with the second code snippet is that we've defined our ",(0,a.kt)("inlineCode",{parentName:"p"},"add()")," function with a function expression, which does not get hoisted. Code gets red from top to bottom, and in this case when we call ",(0,a.kt)("inlineCode",{parentName:"p"},"add(3,5)"),", our JS interpreter can't find this function because it hasn't been hoisted and literally doesn't exist yet."),(0,a.kt)("p",null,"Because of hoisting, we generally recommend that you stick to using function declarations. However, you are welcome to use function expressions instead. Just remember the implications of hoisting!"),(0,a.kt)("h2",{id:"reusable-code-that-scales"},"Reusable Code that Scales"),(0,a.kt)("hr",null),(0,a.kt)("p",null,'To write code that we can reuse, it\'s generally considered a good choice to set up event handlers to use function declarations or function expressions that are stored in variables. This code is considered scalable, because we can reuse those functions in multiple locations. The "scalability" of the code we write comes down to how quickly we can adapt our code to new requirements. In the previous example, we went from the requirement of alerting ',(0,a.kt)("inlineCode",{parentName:"p"},'"This is a heading element."')," for one H1 tag to all 6 heading tags. Even though this example is a bit simplistic, we can see how using functions declarations (or function expressions stored in a variable) impact how easily we can reuse code."),(0,a.kt)("p",null,"Note that when you are just starting out with JavaScript and writing interactive programs, any code that works is good! When you get to your independent project for this course section, we really want to see a working project that follows JavaScript best practices (indentation, spacing, syntax, semicolons, descriptive variable names), and continues to implement the best practices for HTML and CSS. The next step up is considering code reusability and organizing your code based on the goal of making it easy to read and understand. This is something that we'll work on over multiple course sections."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In this lesson, we learned how to use function declarations in event handling, both with event handler properties and event listeners. We also learned that it's encouraged to set up event handlers to use function declarations or function expressions that are stored in variables, because it makes our code reusable. You can choose to use either function declarations or function expressions in your event handlers, just remember the implication of hoisting."))}h.isMDXComponent=!0}}]);