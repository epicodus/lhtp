"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[56213],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"Functions",id:"functions",slug:"functions",hide_table_of_contents:!0,sidebar_position:16,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0m_functions.md"},o=void 0,s={unversionedId:"introduction_to_programming_part_time/javascript-and-web-browsers/functions",id:"introduction_to_programming_part_time/javascript-and-web-browsers/functions",title:"Functions",description:"To help us better understand methods, let's get to know functions better. In this lesson, we'll review what a function is and what it looks like. We'll also learn some new terminology, and we'll take time to compare methods and functions so the distinction becomes clear.",source:"@site/docs/introduction_to_programming_part_time/3_javascript-and-web-browsers/0m_functions.md",sourceDirName:"introduction_to_programming_part_time/3_javascript-and-web-browsers",slug:"/introduction_to_programming_part_time/javascript-and-web-browsers/functions",permalink:"/introduction_to_programming_part_time/javascript-and-web-browsers/functions",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"Functions",id:"functions",slug:"functions",hide_table_of_contents:!0,sidebar_position:16,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0m_functions.md"},sidebar:"introduction_to_programming_part_time",previous:{title:"Methods",permalink:"/introduction_to_programming_part_time/javascript-and-web-browsers/methods"},next:{title:"String and Number Methods",permalink:"/introduction_to_programming_part_time/javascript-and-web-browsers/string_and_number_methods"}},l={},p=[{value:"Functions in JavaScript",id:"functions-in-javascript",level:2},{value:"Semicolons",id:"semicolons",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Return Statements",id:"return-statements",level:3},{value:"Another Look at Function Syntax",id:"another-look-at-function-syntax",level:3},{value:"Distinguishing Functions from Methods",id:"distinguishing-functions-from-methods",level:3},{value:"Differentiating Parameters from Arguments",id:"differentiating-parameters-from-arguments",level:3},{value:"Summary",id:"summary",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To help us better understand methods, let's get to know functions better. In this lesson, we'll review what a function is and what it looks like. We'll also learn some new terminology, and we'll take time to compare methods and functions so the distinction becomes clear. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"If you are confused about any of the concepts covered in this lesson, that is normal. Know that we will get a lot of practice with functions  in this section. Also, keep in mind that you don't need to know everything about how JavaScript works in order to use basic methods and functions.")," Take notes on anything you don't understand so that you can discuss it with your dev team, pair, or in Scrum. The time it takes to understand methods and functions will be different for everyone in your cohort, and discussing points of confusion is instrumental in getting to a solid understanding of these JavaScript concepts. "),(0,i.kt)("h2",{id:"functions-in-javascript"},"Functions in JavaScript"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Remember, all methods are functions, but not all functions are methods. Let's take a look at a function that ",(0,i.kt)("em",{parentName:"p"},"isn't")," a method. JavaScript has very few built-in functions, and a lot of built-in methods. So, to demonstrate functions, we'll write a custom function. We'll do this by ",(0,i.kt)("strong",{parentName:"p"},"declaring a function"),". This means to define a function by giving it a name and procedures. This is also called ",(0,i.kt)("strong",{parentName:"p"},"function declaration"),". Here's an example of a function with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"addEmphasis"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// This is a function declaration.\nfunction addEmphasis(stringParam) {\n  const result = stringParam.toUpperCase().concat("!!!");\n  return result;\n}\n')),(0,i.kt)("p",null,"Take note that the code snippet above shows the proper indentation and spacing for functions. If you are going to code along with this lesson, remember that you can format your code in the Dev Tools console to include new lines and indentation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To create a new line, use ",(0,i.kt)("inlineCode",{parentName:"li"},"shift")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"enter"),"."),(0,i.kt)("li",{parentName:"ul"},"To tab over multiple spaces for indentation, use ",(0,i.kt)("inlineCode",{parentName:"li"},"tab"),". To configure the console to use 2 spaces for indentation with ",(0,i.kt)("inlineCode",{parentName:"li"},"tab"),", in the DevTools window, go to ",(0,i.kt)("em",{parentName:"li"},"Settings")," > ",(0,i.kt)("em",{parentName:"li"},"Preferences")," > scroll to the ",(0,i.kt)("em",{parentName:"li"},"Sources"),' section > set "Default indentation" to 2 spaces.')),(0,i.kt)("p",null,"Now, here's an example of ",(0,i.kt)("strong",{parentName:"p"},"calling")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"addEmphasis")," function with the ",(0,i.kt)("strong",{parentName:"p"},"argument")," ",(0,i.kt)("inlineCode",{parentName:"p"},'"I love my pet rabbit"'),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// This is a function call.\n> addEmphasis("I love my pet rabbit"); \n"I LOVE MY PET RABBIT!!!"\n')),(0,i.kt)("p",null,"Remember, ",(0,i.kt)("strong",{parentName:"p"},"calling a function")," means that we're asking the function to perform its actions by running through its procedures. Even being unfamiliar with function syntax, we should be able to tell from the function declaration and the function call that ",(0,i.kt)("inlineCode",{parentName:"p"},"addEmphasis(stringParam)")," takes a string as an argument, and then capitalizes that string and adds three exclamation points to the end of it. "),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"addEmphasis(stringParam)")," function takes a string as an argument but has no receiver that it is called on. How does this all happen? Let's get into it."),(0,i.kt)("h3",{id:"semicolons"},"Semicolons"),(0,i.kt)("p",null,"Before we continue, we've reached our first example where we ",(0,i.kt)("em",{parentName:"p"},"don't")," add semicolons at the end of each line. Whenever we write a function starting with the ",(0,i.kt)("inlineCode",{parentName:"p"},"function")," keyword, we do not need to end the function with a semicolon."),(0,i.kt)("p",null,"Also, often we'll have code that spans multiple lines. We should still have semicolons at the end of each ",(0,i.kt)("strong",{parentName:"p"},"statement"),". For instance, the line beginning with ",(0,i.kt)("inlineCode",{parentName:"p"},"return")," is a statement, and so is the line in which we create the ",(0,i.kt)("inlineCode",{parentName:"p"},"result")," variable. This will become clearer with practice and more examples."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"In the function definition, ",(0,i.kt)("inlineCode",{parentName:"p"},"stringParam")," is a parameter. A ",(0,i.kt)("strong",{parentName:"p"},"parameter")," is a placeholder variable. It has no value yet. "),(0,i.kt)("p",null,"When we call the function, we pass an ",(0,i.kt)("strong",{parentName:"p"},"argument")," into the ",(0,i.kt)("strong",{parentName:"p"},"parameter"),", and the parameter takes on the value of the argument. If, for some reason, we forget to pass an argument into a parameter, that parameter's value will be ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),". "),(0,i.kt)("p",null,"Let's look at an example. Remember this?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'> let stringVariable = "hi";\n> stringVariable.toUpperCase();\n"HI"\n')),(0,i.kt)("p",null,"Just like we can call methods on variables (as shown above), we can pass variables in as arguments:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'> function addEmphasis(stringParam) {  // function declaration\n  const result = string.toUpperCase().concat("!!!");\n  return result;\n}\n> let stringArg = "hi";\n> addEmphasis(stringArg); // function call\n"HI!!!"\n')),(0,i.kt)("p",null,"In this example, ",(0,i.kt)("inlineCode",{parentName:"p"},"stringArg")," is the ",(0,i.kt)("strong",{parentName:"p"},"argument")," that we're passing into the ",(0,i.kt)("inlineCode",{parentName:"p"},"addEmphasis")," function call, and ",(0,i.kt)("inlineCode",{parentName:"p"},"stringParam")," is the ",(0,i.kt)("strong",{parentName:"p"},"parameter")," that we're using in the function definition as a placeholder variable for the argument. When we pass in ",(0,i.kt)("inlineCode",{parentName:"p"},"stringArg")," as the argument, that means that the placeholder ",(0,i.kt)("inlineCode",{parentName:"p"},"stringParam")," takes on its value of ",(0,i.kt)("inlineCode",{parentName:"p"},'"hi!"')," in the function. "),(0,i.kt)("h3",{id:"return-statements"},"Return Statements"),(0,i.kt)("p",null,"We can see in the function definition that ",(0,i.kt)("inlineCode",{parentName:"p"},"stringParam")," is uppercased and then three exclamation points are added to the end of it. We then store the result in a variable called ",(0,i.kt)("inlineCode",{parentName:"p"},"result"),", and we ",(0,i.kt)("inlineCode",{parentName:"p"},"return")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"result")," variable. "),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"return"))," keyword makes it so that the data saved in the ",(0,i.kt)("inlineCode",{parentName:"p"},"result")," variable is available outside of the function. In other words, if we didn't have the ",(0,i.kt)("inlineCode",{parentName:"p"},"return")," statement, the console would not show us the result, ",(0,i.kt)("inlineCode",{parentName:"p"},'"I LOVE MY PET RABBIT!!!"'),". To try this out, enter this revised function definition into your browser DevTools console:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'> function addEmphasisVersion2(stringParam) {\n  const result = stringParam.toUpperCase().concat("!!!");\n}\n')),(0,i.kt)("p",null,"And call the function right after:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'> addEmphasisVersion2("I love my pet rabbit");\n')),(0,i.kt)("p",null,"Did you get the uppercased and concatenated result? No. Instead ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," was returned, meaning that no value was returned out of the function."),(0,i.kt)("h3",{id:"another-look-at-function-syntax"},"Another Look at Function Syntax"),(0,i.kt)("p",null,"Let's break down our ",(0,i.kt)("inlineCode",{parentName:"p"},"addEmphasis(stringParam)")," example further. It is based on the following syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function nameOfFunction(/* parameters go here */) {\n  // We define what the function does here.\n  // We can call on any of the parameters here and apply methods or arithmetic to them.\n  // We can use the return keyword to make \n  // the data that's internal to the function sent outside of it.\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We use the ",(0,i.kt)("inlineCode",{parentName:"li"},"function")," keyword to indicate that we are defining a function."),(0,i.kt)("li",{parentName:"ul"},"Next, comes the ",(0,i.kt)("inlineCode",{parentName:"li"},"nameOfFunction")," part. In the function we wrote earlier, we called our function ",(0,i.kt)("inlineCode",{parentName:"li"},"addEmphasis"),". We use lower camel case to name functions, just like with variable names. "),(0,i.kt)("li",{parentName:"ul"},"Next, comes this syntax ",(0,i.kt)("inlineCode",{parentName:"li"},"() { }"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the parens ",(0,i.kt)("inlineCode",{parentName:"li"},"()")," are where we put any parameters, and "),(0,i.kt)("li",{parentName:"ul"},"the curly brackets ",(0,i.kt)("inlineCode",{parentName:"li"},"{ }")," are where we define what the function does. This is called the ",(0,i.kt)("strong",{parentName:"li"},"function body"),". We can include as many lines of code as we need in the function body.")))),(0,i.kt)("p",null,"Soon we will be writing more custom functions so there is no need to worry about perfectly understanding or remembering the function syntax we have covered so far. It's okay if this is all still a bit fuzzy. After all, we're covering a lot of new concepts in this lesson!"),(0,i.kt)("h3",{id:"distinguishing-functions-from-methods"},"Distinguishing Functions from Methods"),(0,i.kt)("p",null,"Let's review how we call the ",(0,i.kt)("inlineCode",{parentName:"p"},"addEmphasis")," function. If you haven't already, put the function definition (below) into the DevTools console. To make new lines, hold down the ",(0,i.kt)("inlineCode",{parentName:"p"},"shift")," key while pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"enter"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'> function addEmphasis(stringParam) {  // function definition\n  const result = string.toUpperCase().concat("!!!");\n  return result;\n}\n')),(0,i.kt)("p",null,"Then call the function like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'> addEmphasis("hi");\n"HI!!!"\n')),(0,i.kt)("p",null,"As you can see, ",(0,i.kt)("strong",{parentName:"p"},"there's no receiver"),". Instead, there's just an argument. What would happen if we tried to call this function on a receiver?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'> "hi".addEmphasis();\n')),(0,i.kt)("p",null,"We'll get the following error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'"hi".addEmphasis is not a function\n')),(0,i.kt)("p",null,"How can this be the case?"),(0,i.kt)("p",null,"Well, ",(0,i.kt)("inlineCode",{parentName:"p"},'addEmphasis("hi")')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"hi".addEmphasis()')," are two different functions. The former is a function that isn't called ",(0,i.kt)("em",{parentName:"p"},"on")," anything. The latter is a type of function known as a method that is called ",(0,i.kt)("em",{parentName:"p"},"on")," something \u2014 in this case, a string."),(0,i.kt)("p",null,"We'll be working with both methods and functions a lot in JavaScript, so being able to distinguish between the two is important. Fortunately, we'll get lots of practice with it."),(0,i.kt)("h3",{id:"differentiating-parameters-from-arguments"},"Differentiating Parameters from Arguments"),(0,i.kt)("p",null,"What can make understanding the difference between parameters and arguments especially confusing for beginners is when a variable has the ",(0,i.kt)("em",{parentName:"p"},"same")," name as a parameter. In JavaScript, the following code is perfectly acceptable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'> function addEmphasis(string) {\n  const result = string.toUpperCase().concat("!!!");\n  return result;\n}\n> let string = "hi";\n> addEmphasis(string);\nHI!!!\n')),(0,i.kt)("p",null,"Note that the parameter in ",(0,i.kt)("inlineCode",{parentName:"p"},"function addEmphasis(string)")," has the same name as the variable ",(0,i.kt)("inlineCode",{parentName:"p"},'let string = "hi";'),". This is so confusing!"),(0,i.kt)("p",null,"When we actually call ",(0,i.kt)("inlineCode",{parentName:"p"},"addEmphasis(string)"),", we are passing in the ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," variable (set to ",(0,i.kt)("inlineCode",{parentName:"p"},'"hi"'),") as an argument. So ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," in that context is an argument and ",(0,i.kt)("em",{parentName:"p"},"not")," the parameter we initially defined when we declared the function."),(0,i.kt)("p",null,'This is why we suggest making variable names different from parameter names. Doing so makes the distinction between parameters and arguments much more clear. You can add "Param" at the end of parameters, like ',(0,i.kt)("inlineCode",{parentName:"p"},"stringParam"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'> function addEmphasis(stringParam) {\n  return stringParam.toUpperCase().concat("!!!");\n}\n')),(0,i.kt)("p",null,"And for arguments, you can give them a more descriptive name or use 'arg', short for argument' in the variable name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'> let greeting = "hi";\n> addEmphasis(greeting);\nHI!!!\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'> let userInput = "hi";\n> addEmphasis(userInput);\nHI!!!\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"> let arg1 = \"hi\"; // 'arg' is short for 'argument'\n> addEmphasis(arg1);\nHI!!!\n")),(0,i.kt)("p",null,"It is completely expected that the difference between parameters and arguments will be at least a little confusing at first. Just keep reminding yourself of the distinction:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A ",(0,i.kt)("strong",{parentName:"p"},"parameter")," is a placeholder for an argument. We use parameters when we define functions and methods. We'll learn more about declaring functions soon, when we actually start creating our own custom functions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An ",(0,i.kt)("strong",{parentName:"p"},"argument")," is the value that is passed ",(0,i.kt)("em",{parentName:"p"},"into")," a parameter when we call the function (or method). Often we'll use variables for our arguments, which can be easily confused with parameters."))),(0,i.kt)("p",null,"Once again, keep your variable names distinct from your parameter names to avoid confusion! Otherwise, it's easy to start thinking variables used as arguments are parameters, when they are not."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"In this lesson, we've learned more about functions and we've better  distinguished between methods and functions. A method is a kind of function that is called ",(0,i.kt)("em",{parentName:"p"},"on")," something and belongs to a specific data type. A function is just a set of operations that isn't necessarily a method."),(0,i.kt)("p",null,"We've also learned about the difference between parameters and arguments. Once again, parameters are placeholders for arguments. Because an argument is passed into a parameter, it can be tempting to think arguments and parameters are interchangeable when they are not."),(0,i.kt)("p",null,"We will be working with these concepts every day at Epicodus \u2014 so even if they are not fully clear yet, they will be soon."))}c.isMDXComponent=!0}}]);