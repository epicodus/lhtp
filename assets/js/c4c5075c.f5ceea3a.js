"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[354],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={title:"Writing Functions",id:"writing_functions",slug:"writing_functions",hide_table_of_contents:!0,sidebar_position:27,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1b_writing_functions.md"},r=void 0,l={unversionedId:"introduction_to_programming_part_time_evening/javascript-and-web-browsers/writing_functions",id:"introduction_to_programming_part_time_evening/javascript-and-web-browsers/writing_functions",title:"Writing Functions",description:"We were first introduced to JavaScript functions in the Functions lesson. In that lesson we familiarized ourselves with function syntax and other important terminology and features. In this lesson, we'll review what we learned and start writing our own custom functions.",source:"@site/docs/introduction_to_programming_part_time_evening/3_javascript-and-web-browsers/1b_writing_functions.md",sourceDirName:"introduction_to_programming_part_time_evening/3_javascript-and-web-browsers",slug:"/introduction_to_programming_part_time_evening/javascript-and-web-browsers/writing_functions",permalink:"/introduction_to_programming_part_time_evening/javascript-and-web-browsers/writing_functions",draft:!1,tags:[],version:"current",sidebarPosition:27,frontMatter:{title:"Writing Functions",id:"writing_functions",slug:"writing_functions",hide_table_of_contents:!0,sidebar_position:27,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1b_writing_functions.md"},sidebar:"introduction_to_programming_part_time_evening",previous:{title:"Practice: Review of JavaScript Basics",permalink:"/introduction_to_programming_part_time_evening/javascript-and-web-browsers/practice_review_of_javascript_basics"},next:{title:"Practice: Writing Functions",permalink:"/introduction_to_programming_part_time_evening/javascript-and-web-browsers/practice_writing_functions"}},s={},c=[{value:"Writing Functions",id:"writing-functions",level:2},{value:"Formatting Code in the DevTools Console",id:"formatting-code-in-the-devtools-console",level:3},{value:"Function Declarations",id:"function-declarations",level:3},{value:"Indentation and Spacing",id:"indentation-and-spacing",level:3},{value:"Semicolons in Function Declarations",id:"semicolons-in-function-declarations",level:3},{value:"Calling a Function",id:"calling-a-function",level:3},{value:"A Function with a Parameter \u2014 <code>saySomething(whatToSay)</code>",id:"a-function-with-a-parameter--saysomethingwhattosay",level:3},{value:"A Function with Two Parameters \u2014 <code>add(number1, number2)</code>",id:"a-function-with-two-parameters--addnumber1-number2",level:3},{value:"Documentation on MDN",id:"documentation-on-mdn",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We were first introduced to JavaScript functions in the ",(0,i.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/javascript-and-web-browsers/functions"},"Functions")," lesson. In that lesson we familiarized ourselves with function syntax and other important terminology and features. In this lesson, we'll review what we learned and start writing our own custom functions."),(0,i.kt)("p",null,"What do we know so far about functions? "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A function is a bundle of code that performs a set of operations."),(0,i.kt)("li",{parentName:"ul"},"Functions allow us to ",(0,i.kt)("em",{parentName:"li"},"do")," things in JavaScript."),(0,i.kt)("li",{parentName:"ul"},"A method is a type of function that belongs to an object, and a function is just a set of operations that isn't necessarily a method."),(0,i.kt)("li",{parentName:"ul"},"There are a few built-in functions in JavaScript, like ",(0,i.kt)("inlineCode",{parentName:"li"},"parseInt()"),", but mostly we will be writing our own custom functions. This is in contrast to methods: we will only be using built-in JavaScript methods until we revisit objects in the ",(0,i.kt)("a",{parentName:"li",href:"https://www.learnhowtoprogram.com/intermediate-javascript/object-oriented-javascript/"},"Object-Oriented JavaScript")," course section.")),(0,i.kt)("p",null,"Let's review function syntax, terminology and get started with writing our own custom functions."),(0,i.kt)("h2",{id:"writing-functions"},"Writing Functions"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"formatting-code-in-the-devtools-console"},"Formatting Code in the DevTools Console"),(0,i.kt)("p",null,"Before we get into our first example function, let's review how to format code in the DevTools console to make new lines and indentation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To create a new line, use ",(0,i.kt)("inlineCode",{parentName:"li"},"shift")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"enter"),"."),(0,i.kt)("li",{parentName:"ul"},"To tab over multiple spaces for indentation, use ",(0,i.kt)("inlineCode",{parentName:"li"},"tab"),". To configure the console to use 2 spaces for indentation with ",(0,i.kt)("inlineCode",{parentName:"li"},"tab"),", within the DevTools window go to ",(0,i.kt)("em",{parentName:"li"},"Settings")," > ",(0,i.kt)("em",{parentName:"li"},"Preferences")," > scroll to the ",(0,i.kt)("em",{parentName:"li"},"Sources"),' section > set "Default indentation" to 2 spaces.')),(0,i.kt)("h3",{id:"function-declarations"},"Function Declarations"),(0,i.kt)("p",null,"We're going to write a very simple function declaration to start. We'll give the function the name ",(0,i.kt)("inlineCode",{parentName:"p"},"sayHi"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Here we are defining the sayHi() function; this is a \"function declaration\".\nfunction sayHi() {                     \n  return 'Hello from Epicodus!';\n}                                             \n")),(0,i.kt)("p",null,"When we write a function like this, it's called a ",(0,i.kt)("strong",{parentName:"p"},"function declaration"),". That just means we've declared (defined) a function starting with the ",(0,i.kt)("inlineCode",{parentName:"p"},"function")," keyword. There are other ways of writing a function, but we won't be covering them in this lesson. Here's the breakdown:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),' keyword indicates that we are declaring a function. "Declaring" a function means we\'re defining it.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sayHi")," is the name of the function, and we always include parentheses ",(0,i.kt)("inlineCode",{parentName:"li"},"()")," after the function name. The parentheses are to hold optional parameters, which we'll review later in this lesson."),(0,i.kt)("li",{parentName:"ul"},"Everything enclosed in the curly brackets ",(0,i.kt)("inlineCode",{parentName:"li"},"{")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"}")," is called the ",(0,i.kt)("strong",{parentName:"li"},"function body"),"; this is where we write out all the code that we want the function to execute when we call on it.")),(0,i.kt)("h3",{id:"indentation-and-spacing"},"Indentation and Spacing"),(0,i.kt)("p",null,"Note, the code snippet above shows the proper indentation and spacing for functions. It's common convention to write JavaScript functions on multiple lines to make the code more readable. While we could write our ",(0,i.kt)("inlineCode",{parentName:"p"},"sayHi()")," function declaration on one line like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Don't write function in one line.\nfunction sayHi() { return 'Hello from Epicodus!'; }                                             \n")),(0,i.kt)("p",null,"It's not considered best practice."),(0,i.kt)("h3",{id:"semicolons-in-function-declarations"},"Semicolons in Function Declarations"),(0,i.kt)("p",null,"Let's continue examining our function declaration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Here we are defining the sayHi function; this is a \"function declaration\".\nfunction sayHi() {                     \n  return 'Hello from Epicodus!';\n}                                             \n")),(0,i.kt)("p",null,"Notice how we are using semicolons here. The first line, which uses the function keyword and includes the name of the function, ends with an opening curly bracket ",(0,i.kt)("inlineCode",{parentName:"p"},"{"),". It will ",(0,i.kt)("em",{parentName:"p"},"never")," have a semicolon."),(0,i.kt)("p",null,"The next line has a ",(0,i.kt)("inlineCode",{parentName:"p"},"return")," statement. Statements and expressions have semicolons at the end of the line regardless of whether or not they are inside function declarations."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"return")," keyword tells JavaScript to return anything to the right of the ",(0,i.kt)("inlineCode",{parentName:"p"},"return")," keyword. In this case, we're returning the string ",(0,i.kt)("inlineCode",{parentName:"p"},"'Hello from Epicodus!'"),". We could also return a variable instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function sayHi() {\n  const greeting = 'Hello from Epicodus!';  // Each statement is on its own line.\n  return greeting;                          // Each statement is on its own line.\n}\n")),(0,i.kt)("p",null,"Without a ",(0,i.kt)("inlineCode",{parentName:"p"},"return")," statement, JavaScript will return ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," from the function, which is JavaScript's way of saying something does not have a value. Also notice that each new statement in the function body is written on a new line. This is also a best practice for code readability. "),(0,i.kt)("p",null,"Finally, we close our function with a curly bracket ",(0,i.kt)("inlineCode",{parentName:"p"},"}"),". We ",(0,i.kt)("em",{parentName:"p"},"don't")," add a semicolon here. Why is this? Well, this is a part of the ",(0,i.kt)("strong",{parentName:"p"},"function declaration"),". It's ",(0,i.kt)("em",{parentName:"p"},"not")," a statement. JavaScript knows that the curly bracket ",(0,i.kt)("inlineCode",{parentName:"p"},"}")," represents the end of the function so it doesn't need a semicolon. "),(0,i.kt)("p",null,"If semicolon placement feels fuzzy still, it's really not something to worry about. Understanding semicolon placement is important but there are much more important topics we need to focus on right now like learning about functions and how they work."),(0,i.kt)("h3",{id:"calling-a-function"},"Calling a Function"),(0,i.kt)("p",null,"For this next example, we're putting the code into the DevTools console. To call our ",(0,i.kt)("inlineCode",{parentName:"p"},"sayHi")," function, this is what we do:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// First we input the function declaration.\n> function sayHi() {                     \n  return 'Hello from Epicodus!';\n} \n// Then we call the sayHi() function by including parens.\n> sayHi();                               \n'Hello from Epicodus!'\n")),(0,i.kt)("p",null,"Every time we run the ",(0,i.kt)("inlineCode",{parentName:"p"},"sayHi()")," function, it executes all JavaScript code between the opening and closing braces \u2014 ",(0,i.kt)("inlineCode",{parentName:"p"},"{")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"}"),". In this case, our function returns the string ",(0,i.kt)("inlineCode",{parentName:"p"},"'Hello from Epicodus!'"),". This isn't terribly useful so let's write a slightly more interesting function. "),(0,i.kt)("h3",{id:"a-function-with-a-parameter--saysomethingwhattosay"},"A Function with a Parameter \u2014 ",(0,i.kt)("inlineCode",{parentName:"h3"},"saySomething(whatToSay)")),(0,i.kt)("p",null,"Let's write a function in the DevTools console that has one parameter. We'll name this function ",(0,i.kt)("inlineCode",{parentName:"p"},"saySomething"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'> function saySomething(whatToSay) {  // function declaration with 1 parameter\n   return whatToSay;\n}\n> saySomething("hello!");             // function call with 1 argument\n"hello!"\n')),(0,i.kt)("p",null,"Let's review the parts of this new function:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When we're declaring a new function, we start with the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"function")," keyword"),". A function declaration always starts with this keyword.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Next, we have the ",(0,i.kt)("strong",{parentName:"p"},"function name")," ",(0,i.kt)("inlineCode",{parentName:"p"},"saySomething"),". After the name of the function, we will always include parentheses to list any parameters (more on this below): ",(0,i.kt)("inlineCode",{parentName:"p"},"saySomething()"),". Just like with naming variables, function names should:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Be lower camelCase, which means the first letter of the name should be lower-cased while the first letter of other words in the function (",(0,i.kt)("inlineCode",{parentName:"li"},"Something")," in this case) should be capitalized. "),(0,i.kt)("li",{parentName:"ul"},"Be named descriptively so other developers can quickly understand the purpose of the function. In the example above, we are simply denoting that this function will say something. "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Next, we have the ",(0,i.kt)("strong",{parentName:"p"},"function body"),". This is enclosed in two curly brackets, ",(0,i.kt)("inlineCode",{parentName:"p"},"{")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"}"),". The function body includes any code that should be executed when the function is called, in this case ",(0,i.kt)("inlineCode",{parentName:"p"},"return whatToSay;"),". It is convention to have the opening curly bracket on the same line as the function declaration. Meanwhile, the closing curly bracket goes on the final line of the function. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If a function has ",(0,i.kt)("strong",{parentName:"p"},"parameters"),", they go inside the parentheses next to the function name: ",(0,i.kt)("inlineCode",{parentName:"p"},"saySomething(whatToSay)"),". A ",(0,i.kt)("strong",{parentName:"p"},"parameter")," is a placeholder variable in the function declaration that doesn't initially have a value. The value of parameters are set by the arguments we pass into functions when we call them. In other words, parameters are placeholder variables for any data (called \"arguments\") that we want to pass into a function when we call the function. Here's more of a breakdown:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"whatToSay")," is the ",(0,i.kt)("strong",{parentName:"li"},"parameter")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"saySomething()")," function. "),(0,i.kt)("li",{parentName:"ul"},"When we call the function with an ",(0,i.kt)("strong",{parentName:"li"},"argument"),", like ",(0,i.kt)("inlineCode",{parentName:"li"},'saySomething("hello")'),", we are setting the value of the ",(0,i.kt)("inlineCode",{parentName:"li"},"whatToSay")," parameter to the argument, which is the string ",(0,i.kt)("inlineCode",{parentName:"li"},'"hello"'),". "),(0,i.kt)("li",{parentName:"ul"},"Then, anywhere the parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"whatToSay")," is used in the function body, like in the return statement ",(0,i.kt)("inlineCode",{parentName:"li"},"return whatToSay;"),", the argument's value ",(0,i.kt)("inlineCode",{parentName:"li"},'"hello"')," is used. This makes the function return ",(0,i.kt)("inlineCode",{parentName:"li"},'"hello"'),". If we called ",(0,i.kt)("inlineCode",{parentName:"li"},'saySomething("Howdy")'),", then the function would return ",(0,i.kt)("inlineCode",{parentName:"li"},'"Howdy"'),"."),(0,i.kt)("li",{parentName:"ul"},"Note that we can create as many parameters as we want in a function.")))),(0,i.kt)("p",null,"If you're confused about the difference between arguments and parameters, just remember that the argument is the data you pass in, and the parameter is the variable that receives the argument as a value. In the ",(0,i.kt)("inlineCode",{parentName:"p"},"saySomething()")," function, ",(0,i.kt)("inlineCode",{parentName:"p"},'"hello!"')," is the argument, and ",(0,i.kt)("inlineCode",{parentName:"p"},"whatToSay")," is the parameter. The parameter can then be used just like any other variable. Let's look at another example to better understand functions, and the difference between parameters and arguments."),(0,i.kt)("h3",{id:"a-function-with-two-parameters--addnumber1-number2"},"A Function with Two Parameters \u2014 ",(0,i.kt)("inlineCode",{parentName:"h3"},"add(number1, number2)")),(0,i.kt)("p",null,"Okay, on to another slightly more complex function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"> function add(number1, number2) {  // function declaration with 2 parameters\n   const sum = number1 + number2;\n   return sum;\n}\n> add(3, 5);                        // function call with 2 arguments\n8\n")),(0,i.kt)("p",null,"Let's step through exactly what happens when we call ",(0,i.kt)("inlineCode",{parentName:"p"},"add(3, 5)"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"We call the ",(0,i.kt)("inlineCode",{parentName:"li"},"add(3, 5)")," function with two arguments ",(0,i.kt)("inlineCode",{parentName:"li"},"3")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"5"),": because the ",(0,i.kt)("inlineCode",{parentName:"li"},"add()")," function has two parameters, we must pass in two arguments, one for each parameter."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"add")," function is run. The parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"number1")," is set equal to 3, and the parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"number2")," is set equal to 5."),(0,i.kt)("li",{parentName:"ol"},"The expression ",(0,i.kt)("inlineCode",{parentName:"li"},"3 + 5")," is run and we set the value of the ",(0,i.kt)("inlineCode",{parentName:"li"},"sum")," variable equal to the result of the expression, which is ",(0,i.kt)("inlineCode",{parentName:"li"},"8"),"."),(0,i.kt)("li",{parentName:"ol"},"The variable ",(0,i.kt)("inlineCode",{parentName:"li"},"sum")," (with a value of ",(0,i.kt)("inlineCode",{parentName:"li"},"8"),") is returned."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"add")," function ends.")),(0,i.kt)("p",null,"Notice our variables names: ",(0,i.kt)("inlineCode",{parentName:"p"},"number1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"number2"),". We could have called them ",(0,i.kt)("inlineCode",{parentName:"p"},"n1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"n2"),", and it would have taken less typing. But the name ",(0,i.kt)("inlineCode",{parentName:"p"},"number1")," very clearly expresses what the variable is for, whereas ",(0,i.kt)("inlineCode",{parentName:"p"},"n1")," would require another programmer to figure it out from context (or your future self, when you come back to your code in a few months and don't remember exactly how it works). In this example, it is pretty obvious what ",(0,i.kt)("inlineCode",{parentName:"p"},"n1")," is for. But if you practice choosing descriptive names now and resisting the temptation to abbreviate, you will be in the habit of doing it when you're writing more complex code where it matters more."),(0,i.kt)("h3",{id:"documentation-on-mdn"},"Documentation on MDN"),(0,i.kt)("p",null,"To see the documentation on function declarations, including more examples, visit this page on MDN:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("span",{class:"glyphicon glyphicon-link"})," ",(0,i.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function"},"Function Declarations"))," ")),(0,i.kt)("p",null,"Next, let's practice what we've learned and write and call some functions!"))}m.isMDXComponent=!0}}]);