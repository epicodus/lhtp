"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[56904],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,u=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(u,r(r({ref:t},h),{},{components:n})):a.createElement(u,r({ref:t},h))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={title:"Methods",id:"methods",slug:"methods",hide_table_of_contents:!0,sidebar_position:15,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0l_methods.md"},r=void 0,s={unversionedId:"introduction_to_programming_part_time_evening/javascript-and-web-browsers/methods",id:"introduction_to_programming_part_time_evening/javascript-and-web-browsers/methods",title:"Methods",description:"In this lesson, we'll learn about key functionality for JavaScript: methods and functions. We'll start with briefly defining functions, because methods are a type of function.",source:"@site/docs/introduction_to_programming_part_time_evening/3_javascript-and-web-browsers/0l_methods.md",sourceDirName:"introduction_to_programming_part_time_evening/3_javascript-and-web-browsers",slug:"/introduction_to_programming_part_time_evening/javascript-and-web-browsers/methods",permalink:"/introduction_to_programming_part_time_evening/javascript-and-web-browsers/methods",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"Methods",id:"methods",slug:"methods",hide_table_of_contents:!0,sidebar_position:15,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0l_methods.md"},sidebar:"introduction_to_programming_part_time_evening",previous:{title:"Practice: Variables and Strings",permalink:"/introduction_to_programming_part_time_evening/javascript-and-web-browsers/practice_variables_and_strings"},next:{title:"Functions",permalink:"/introduction_to_programming_part_time_evening/javascript-and-web-browsers/functions"}},l={},p=[{value:"Using Built-In JavaScript Methods",id:"using-built-in-javascript-methods",level:2},{value:"Methods Are Called <em>On</em> Something",id:"methods-are-called-on-something",level:3},{value:"JavaScript Comments",id:"javascript-comments",level:3},{value:"How To Call a Method",id:"how-to-call-a-method",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Calling Methods on Variables",id:"calling-methods-on-variables",level:3},{value:"Chaining Methods",id:"chaining-methods",level:3},{value:"Summary",id:"summary",level:2}],h={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson, we'll learn about key functionality for JavaScript: methods and functions. We'll start with briefly defining functions, because methods are a type of function."),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"function"),' is a bundle of code that performs a set of procedures. It describes actions that our code can perform. For instance, we could write a custom function to take a string, like "hello", and uppercase it so the original string "hello" is turned into "HELLO". When we ',(0,o.kt)("strong",{parentName:"p"},"call a function"),", we are asking it to perform its actions. "),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"method")," is a type of function that belongs to a specific type of data, like strings or numbers. We ",(0,o.kt)("strong",{parentName:"p"},"call")," a method ",(0,o.kt)("strong",{parentName:"p"},"on")," something, asking the method to perform its actions on the data type it belongs to. When a method belongs to a data type, that means we can only call it on that data type."),(0,o.kt)("p",null,"In JavaScript, there are methods and functions that are built-in to the language, and we can also write our own custom functions and methods. When functionality is ",(0,o.kt)("strong",{parentName:"p"},"built-in")," to JavaScript, it means that it is a part of the language and all we need to do is learn the correct syntax to incorporate that functionality into our code. On the other hand, ",(0,o.kt)("strong",{parentName:"p"},"custom")," functions and methods are ones that we design using the tools that JavaScript provides us."),(0,o.kt)("p",null,"In this lesson, we'll start using built-in JavaScript methods to do things for us. We will practice a lot more in future lessons, too, so if you do not understand something in this lesson, trust that your understanding will develop soon enough. The goal is to introduce you to these concepts and the terminology associated with them. Then, in subsequent lessons we'll review and practice. "),(0,o.kt)("p",null,"Take notes on anything you don't understand so that you can discuss it with your dev team, pair, or in Scrum. The time it takes to understand methods and functions will be different for everyone in your cohort, and discussing points of confusion is instrumental in getting to a solid understanding of these JavaScript concepts. Again, ",(0,o.kt)("strong",{parentName:"p"},"if you are confused about any of these concepts, just remember that we will be covering them in greater depth later and that you don't need to know everything about how JavaScript works in order to use basic methods and functions.")," "),(0,o.kt)("h2",{id:"using-built-in-javascript-methods"},"Using Built-In JavaScript Methods"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"First, let's take a look at an example of a JavaScript method to uppercase a string."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> "This is a string.".toUpperCase();\n')),(0,o.kt)("p",null,"Try this out in the console. If you're working alone or in person with a pair, open Chrome's DevTools console. A quick refresher on how to access it: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on the three dots at the upper right corner of the browser screen. "),(0,o.kt)("li",{parentName:"ul"},"Go to the ",(0,o.kt)("em",{parentName:"li"},"More Tools")," menu. "),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("em",{parentName:"li"},"Developer Tools"),".  "),(0,o.kt)("li",{parentName:"ul"},"Go to the ",(0,o.kt)("em",{parentName:"li"},"Console")," tab within the window that pops up.")),(0,o.kt)("p",null,"You can also access the DevTools console with these shortcuts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows: ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Ctrl")," + ",(0,o.kt)("inlineCode",{parentName:"li"},"Shift")," + ",(0,o.kt)("inlineCode",{parentName:"li"},"j")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Ctrl")," + ",(0,o.kt)("inlineCode",{parentName:"li"},"Shift")," + ",(0,o.kt)("inlineCode",{parentName:"li"},"i")," "))),(0,o.kt)("li",{parentName:"ul"},"Mac: ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Cmd")," + ",(0,o.kt)("inlineCode",{parentName:"li"},"Option")," + ",(0,o.kt)("inlineCode",{parentName:"li"},"i")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"F12"))))),(0,o.kt)("p",null,"If you're working remotely with others, remember to take turns screen sharing the DevTools console on Discord. "),(0,o.kt)("p",null,"Here's what happens in the console when we call this method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> "This is a string.".toUpperCase();\n"THIS IS A STRING."\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"toUpperCase")," is a method that can be called on ",(0,o.kt)("em",{parentName:"p"},"any")," JavaScript string."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'"THIS IS A STRING."')," is the ",(0,o.kt)("strong",{parentName:"p"},"return value")," from calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"toUpperMethod"),' on the string `"This is a string." A return value is anything that\'s returned from calling a method or function. '),(0,o.kt)("h3",{id:"methods-are-called-on-something"},"Methods Are Called ",(0,o.kt)("em",{parentName:"h3"},"On")," Something"),(0,o.kt)("p",null,"So here's the important distinction about methods. As we mentioned at the beginning of this lesson, methods are always called ",(0,o.kt)("em",{parentName:"p"},"on")," something. The thing they are called on is known as the ",(0,o.kt)("strong",{parentName:"p"},"receiver"),". In contrast, functions don't necessarily have to be called on something. That's why a method is always a function, but a function isn't necessarily a method. We will continue to discuss this distinction in future lessons."),(0,o.kt)("p",null,"So what do we mean by receiver? The receiver is the thing to the ",(0,o.kt)("em",{parentName:"p"},"left")," of the method. In the example above, the receiver is ",(0,o.kt)("inlineCode",{parentName:"p"},'"This is a string."'),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"toUpperCase")," method is called ",(0,o.kt)("em",{parentName:"p"},"on")," ",(0,o.kt)("inlineCode",{parentName:"p"},'"This is a string."')),(0,o.kt)("p",null,"Here's the syntax of a method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// This isn't real code! \n// This is **pseudocode** that describes the syntax of actual JS code.  \n// In this case, we're showing where the receiver is.\n\nreceiver.method();\n")),(0,o.kt)("p",null,"As we can see, the receiver is on the left. The method that is called on the receiver is on the right and always includes parentheses. "),(0,o.kt)("h3",{id:"javascript-comments"},"JavaScript Comments"),(0,o.kt)("p",null,"Also, in JavaScript, everything after the ",(0,o.kt)("inlineCode",{parentName:"p"},"//")," is a ",(0,o.kt)("strong",{parentName:"p"},"comment"),". We can also write inline comments with this syntax: ",(0,o.kt)("inlineCode",{parentName:"p"},"/*  */"),". Here's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"receiver.method(/* any arguments are passed in here */);\n")),(0,o.kt)("p",null,"When JavaScript interprets our code, it will ignore these comments. Comments are a convenient way to leave notes in your code for yourself or other programmers. Note \u2014 we'll learn about arguments in just a few paragraphs! "),(0,o.kt)("h3",{id:"how-to-call-a-method"},"How To Call a Method"),(0,o.kt)("p",null,"To call a method means that we're telling it to perform its functionality. To call a method, we need to include parentheses after the name of the method. By the way, ",(0,o.kt)("strong",{parentName:"p"},"parens"),' is a shorthand word for "parentheses".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> "hello".toUpperCase() // calling the toUpperCase method on the string "hello"\n\'HELLO\'\n')),(0,o.kt)("p",null,"The above example is familiar \u2014 we're calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"toUpperCase")," method on the string ",(0,o.kt)("inlineCode",{parentName:"p"},'"hello"'),". Now, let's see what happens when we don't include parens."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> "hello".toUpperCase // there are no parens, so we\'re NOT calling our method\n\u0192 toUpperCase() { [native code] }\n')),(0,o.kt)("p",null,"This is new! What's going on here? In this case, when we input ",(0,o.kt)("inlineCode",{parentName:"p"},"toUpperCase")," without the parens, the definition of the ",(0,o.kt)("inlineCode",{parentName:"p"},"toUpperCase")," method is returned: ",(0,o.kt)("inlineCode",{parentName:"p"},"\u0192 toUpperCase() { [native code] }"),". A function or method definition tells us what the code does. Here's a breakdown:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\u0192"),' stands for "function", which includes methods (as we\'ve learned, methods are a type of function).'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"toUpperCase")," is the name of the function."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"() { [native code] }")," is the syntax for the function definition. In this case, ",(0,o.kt)("inlineCode",{parentName:"li"},"[native code]")," is a placeholder for the JavaScript source code for this built-in method. ")),(0,o.kt)("p",null,"If you don't completely understand the above, that is okay \u2014 we'll have more chance to practice this in the coming section and weeks ahead. Just remember to include parens when you are calling a method. When we don't, we're effectively asking \"what does this method/function do?\"."),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("p",null,"Both functions and methods can have ",(0,o.kt)("strong",{parentName:"p"},"arguments"),". Arguments are passed into the parentheses ",(0,o.kt)("inlineCode",{parentName:"p"},"()")," when we call the function/method. It's not required for a method or function to have arguments. Some take no arguments, some take optional arguments, and some take one or many arguments. "),(0,o.kt)("p",null,"Remember the following code snippet? It's the explanation of method syntax in pseudocode. The comment ",(0,o.kt)("inlineCode",{parentName:"p"},"/* any arguments are passed in here */")," is indicating that arguments are passed into the parentheses ",(0,o.kt)("inlineCode",{parentName:"p"},"( )")," of a method or function call."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// This is pseudocode to show the syntax of calling a method on a receiver, and where arguments go.\nreceiver.method(/* any arguments are passed in here */);\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"toUpperCase")," method doesn't take any arguments. It just uppercases a string. So let's try out a built-in JavaScript method that does take arguments."),(0,o.kt)("p",null,"We can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"concat")," string method to ",(0,o.kt)("strong",{parentName:"p"},"concatenate")," strings. That's a fancy way of saying \"combine separate strings into one string\". Let's look at an example in the console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> "This is a string".concat("!!!");\n"This is a string!!!"\n')),(0,o.kt)("p",null,"In the example above, ",(0,o.kt)("inlineCode",{parentName:"p"},'"This is a string"')," is the receiver, ",(0,o.kt)("inlineCode",{parentName:"p"},"concat")," is the method, and ",(0,o.kt)("inlineCode",{parentName:"p"},'"!!!"')," is the argument we pass into the method. As we can see, the ",(0,o.kt)("inlineCode",{parentName:"p"},"concat")," method takes the argument (in this case ",(0,o.kt)("inlineCode",{parentName:"p"},'"!!!"'),") and attaches it to the receiver (",(0,o.kt)("inlineCode",{parentName:"p"},'"This is a string!!!"'),")"),(0,o.kt)("p",null,"We can pass in as many additional arguments to this method as we want. For example, we can do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> "This is a string".concat("!!!", "I like strings!");\n"This is a string!!!I like strings!"\n')),(0,o.kt)("p",null,"As this example shows, the ",(0,o.kt)("inlineCode",{parentName:"p"},"concat")," method can take multiple arguments. Be careful, though. If you want spaces, you'll need to account for that. The method won't add them automatically. To add spaces you could do any of these:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> "This is a string".concat("!!!", " ", "I like strings!"); // add a new argument\n"This is a string!!! I like strings!"\n> "This is a string".concat("!!!", " I like strings!"); // add a space before the 2nd argument\n"This is a string!!! I like strings!"\n> "This is a string".concat("!!! ", "I like strings!"); // add a space after the 1st argument\n"This is a string!!! I like strings!"\n> "This is a string".concat("!!! I like strings!"); // only use 1 argument\n"This is a string!!! I like strings!"\n')),(0,o.kt)("p",null,"The above should be a healthy reminder that there are many ways to code a solution to a problem."),(0,o.kt)("h3",{id:"calling-methods-on-variables"},"Calling Methods on Variables"),(0,o.kt)("p",null,"We can call methods ",(0,o.kt)("em",{parentName:"p"},"on")," variables. For instance, try this in the console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> let stringVariable = "hi!";\n> stringVariable.toUpperCase();\n"HI!"\n')),(0,o.kt)("p",null,"As we can see, we can call a method on a receiver that contains a variable."),(0,o.kt)("h3",{id:"chaining-methods"},"Chaining Methods"),(0,o.kt)("p",null,"It is possible in JavaScript to ",(0,o.kt)("strong",{parentName:"p"},"chain methods")," together, in order. Let's look at an example: if we want to upper case ",(0,o.kt)("em",{parentName:"p"},"and")," concat a string, we could do it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> const stringCombo = "This is a string".concat("!!!", " ", "I like strings!");\n> stringCombo;\n"This is a string!!! I like strings!"\n> stringCombo.toUpperCase(); \n"THIS IS A STRING!!! I LIKE STRINGS!"\n')),(0,o.kt)("p",null,"Or we could chain the methods together and do it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> "This is a string".concat("!!!", " ", "I like strings!").toUpperCase(); \n"THIS IS A STRING!!! I LIKE STRINGS!"\n')),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"concat")," method will be called before the ",(0,o.kt)("inlineCode",{parentName:"p"},"toUpperCase")," method, so the order in which you chain methods matters! Try out the above code in your browser DevTools console. "),(0,o.kt)("p",null,"Chaining methods is common and pretty cool \u2014 however, it's not necessary. If you don't feel comfortable chaining methods now, that is totally okay and you don't have to do it. You will get more practice in this section and the coming weeks."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In this lesson, we've covered what methods are along with key concepts. Here's a summary:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Methods are a type of function, which perform a set of procedures."),(0,o.kt)("li",{parentName:"ul"},"Methods are ",(0,o.kt)("strong",{parentName:"li"},"called ",(0,o.kt)("em",{parentName:"strong"},"on"))," something and always belong to a specific data type."),(0,o.kt)("li",{parentName:"ul"},"When we ",(0,o.kt)("strong",{parentName:"li"},"call a method")," we need to include ",(0,o.kt)("strong",{parentName:"li"},"parens"),"."),(0,o.kt)("li",{parentName:"ul"},"JavaScript has a bunch of ",(0,o.kt)("strong",{parentName:"li"},"built-in methods"),". We can also write custom methods, but we won't learn about that until a later section."),(0,o.kt)("li",{parentName:"ul"},"Some methods take one or more ",(0,o.kt)("strong",{parentName:"li"},"arguments")," that provide the method with additional information to help it perform its action."),(0,o.kt)("li",{parentName:"ul"},"We can call methods on variables and optionally ",(0,o.kt)("strong",{parentName:"li"},"chain")," methods.")),(0,o.kt)("p",null,"In the next lesson, we'll introduce functions. This will help us better understand what methods are, and the difference between methods and functions."))}m.isMDXComponent=!0}}]);