"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[20154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=r,g=h["".concat(l,".").concat(d)]||h[d]||p[d]||a;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={title:"Debugging in JavaScript: Pausing on Exceptions",id:"debugging-in-javascript-pausing-on-exceptions",slug:"debugging-in-javascript-pausing-on-exceptions",hide_table_of_contents:!0,sidebar_position:29,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4f_debugging_pausing_on_exceptions.md"},i=void 0,s={unversionedId:"introduction-to-programming-part-time/javascript-and-web-browsers-part-2/debugging-in-javascript-pausing-on-exceptions",id:"introduction-to-programming-part-time/javascript-and-web-browsers-part-2/debugging-in-javascript-pausing-on-exceptions",title:"Debugging in JavaScript: Pausing on Exceptions",description:"In this lesson, we'll cover a new debugging tactic uncaught/unhandled and caught.",source:"@site/docs/introduction-to-programming-part-time/4_javascript-and-web-browsers-part-2/4f-debugging-pausing-on-exceptions.md",sourceDirName:"introduction-to-programming-part-time/4_javascript-and-web-browsers-part-2",slug:"/introduction-to-programming-part-time/javascript-and-web-browsers-part-2/debugging-in-javascript-pausing-on-exceptions",permalink:"/introduction-to-programming-part-time/javascript-and-web-browsers-part-2/debugging-in-javascript-pausing-on-exceptions",draft:!1,tags:[],version:"current",sidebarPosition:29,frontMatter:{title:"Debugging in JavaScript: Pausing on Exceptions",id:"debugging-in-javascript-pausing-on-exceptions",slug:"debugging-in-javascript-pausing-on-exceptions",hide_table_of_contents:!0,sidebar_position:29,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4f_debugging_pausing_on_exceptions.md"},sidebar:"introduction-to-programming-part-time",previous:{title:"Homework: Function Scope Versus Block Scope",permalink:"/introduction-to-programming-part-time/javascript-and-web-browsers-part-2/homework-function-scope-versus-block-scope"},next:{title:"Debugging in JavaScript: Using debugger and Breakpoints",permalink:"/introduction-to-programming-part-time/javascript-and-web-browsers-part-2/debugging-in-javascript-using-debugger-and-breakpoints"}},l={},u=[{value:"Project Setup",id:"project-setup",level:2},{value:"Finding the Error",id:"finding-the-error",level:2},{value:"The DevTools&#39; Sources Tab",id:"the-devtools-sources-tab",level:3},{value:"Pausing on Exceptions",id:"pausing-on-exceptions",level:3},{value:"Resolving the Error",id:"resolving-the-error",level:3},{value:"Exiting the Debugger",id:"exiting-the-debugger",level:3}],c={toc:u},h="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this lesson, we'll cover a new debugging tactic: ",(0,r.kt)("strong",{parentName:"p"},"pausing on exceptions"),". This involves configuring web browser DevTools to automatically pause our code whenever it hits an exception. An ",(0,r.kt)("strong",{parentName:"p"},"exception")," is just a slightly fancier name for an error. Exceptions are divided into two groups: uncaught/unhandled and caught. "),(0,r.kt)("p",null,"An ",(0,r.kt)("strong",{parentName:"p"},"uncaught exception")," or ",(0,r.kt)("strong",{parentName:"p"},"unhandled exception"),' is an error that our code doesn\'t "catch" or "handle". When an error happens in our code that we don\'t respond to, it stops the function of our application and breaks our code. Here\'s a simple example of an uncaught error that we can create in our DevTools console:'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/uncaught-ref-error.png",alt:"This shows the DevTools console open and an Uncaught ReferenceError by referencing a variable that doesn't exist."})),(0,r.kt)("p",null,"On the other hand, a ",(0,r.kt)("strong",{parentName:"p"},"caught exception")," is an error that we've predicted may happen in our code and that we've already written code to specifically respond to. We learned about error handling with ",(0,r.kt)("inlineCode",{parentName:"p"},"else"),' statements in the "More Branching" lesson. Remember the following if/else statement from the Amusement Park webpage? This code checks the age and height of a user and displays only the rides they are allowed to ride.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'if (age && height) {\n  if (age >= 12 && height >= 60) {\n    document.getElementById("swings").removeAttribute("class");\n    document.getElementById("coaster").removeAttribute("class");\n    document.getElementById("tower").removeAttribute("class");\n  } else if (age >= 12 || height >= 48) {\n    document.getElementById("swings").removeAttribute("class");\n    document.getElementById("coaster").removeAttribute("class");\n  } else if (age >= 6) {\n    document.getElementById("swings").removeAttribute("class");\n  } else {\n    document.getElementById("sorry").removeAttribute("class");\n  }\n} else {\n  document.getElementById("error-message").removeAttribute("class");\n}\n')),(0,r.kt)("p",null,"The error handling we added is to handle when a user does not input their age or height into the form. If a user leaves either form field blank, the error message will be displayed to them. When this error happens, it's considered a caught exception, because it is an error that's been handled. "),(0,r.kt)("p",null,"The error handling we've learned about is limited, and we will revisit JavaScript error objects and error handling tools in later course sections. Right now, our goal is to develop robust debugging skills. Let's now return to our Calculator project to learn how to configure DevTools to pause on exceptions."),(0,r.kt)("p",null,"In the practice prompt following this lesson and the next (also on debugging), you'll have an opportunity to practice using these debugging tools in a brand new project (not the Calculator project). Consider whether it's better for you to read along with the lessons, or to code along. If you do want to code along, the HTML and JS (including the bugs) are below for you to use. "),(0,r.kt)("h2",{id:"project-setup"},"Project Setup"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We'll use the following code to demonstrate how to use the DevTools to pause on exceptions. This code is taken from the Calculator project, after we've updated it to use branching and radio buttons. ",(0,r.kt)("strong",{parentName:"p"},"Take note: we've introduced an error to the JS in ",(0,r.kt)("inlineCode",{parentName:"strong"},"scripts.js"),".")," We've also added ",(0,r.kt)("inlineCode",{parentName:"p"},"<br />")," tags to the HTML form."),(0,r.kt)("div",{class:"filename"},"calculator.html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <title>Calculator</title>\n  <link href="css/styles.css" rel="stylesheet" type="text/css">\n  <script src="js/scripts.js"><\/script>\n</head>\n<body>\n  <h1>Calculator</h1>\n  <form id="calculator">\n    <label for="input1">1st number:</label>\n    <input id="input1" type="text">\n    <br />\n    <label for="input2">2nd number:</label>\n    <input id="input2" type="text">\n    <br />\n\n    <label>\n      <input type="radio" name="operator" value="add">\n      add\n    </label>\n    <label>\n      <input type="radio" name="operator" value="subtract">\n      subtract\n    </label>\n    <label>\n      <input type="radio" name="operator" value="multiply">\n      multiply\n    </label>\n    <label>\n      <input type="radio" name="operator" value="divide">\n      divide\n    </label>\n\n    <button type="submit" class="btn">Go!</button>\n  </form>\n\n  <h2>Results</h2>\n  <p id="output"></p>\n</body>\n</html>\n')),(0,r.kt)("div",{class:"filename"},"js/scripts.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// Business Logic\nfunction add(num1, num2) {\n  return num1 + num2;\n}\n\nfunction subtract(num1, num2) {\n  return num1 - num2;\n}\n\nfunction multiply(num1, num2) {\n  return num1 * num2;\n}\n\nfunction divide(num1, num2) {\n  return num1 / num2;\n}\n\n// User Interface Logic\nfunction handleCalculation(event) {\n  event.preventDefault();\n  const number1 = parseInt(document.querySelector("input#input1").value);\n  const number2 = parseInt(document.querySelector("input#input2").value);\n  const operator = document.querySelector("input[name=\'operator\']:checked").value;\n\n  let result;\n  if (operator === "add") {\n    result = ad(number1, number2);\n  } else if (operator === "subtract") {\n    result = subtract(number1, number2);\n  } else if (operator === "multiply") {\n    result = multiply(number1, number2);\n  } else if (operator === "divide") {\n    result = divide(number1, number2);\n  }\n\n  document.getElementById("output").innerText = result;\n}\n\nwindow.addEventListener("load", function() {\n  const form = document.getElementById("calculator");\n  form.addEventListener("submit", handleCalculation);\n});\n')),(0,r.kt)("h2",{id:"finding-the-error"},"Finding the Error"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The issue that we've introduced into our scripts will cause JavaScript to report an error. If we open our Calculator website (or refresh the page), enter in two numbers, select the \"add\" option, and then submit our form, we'll immediately see a console error ",(0,r.kt)("inlineCode",{parentName:"p"},"Uncaught ReferenceError: ad is not defined"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/pause-on-exceptions-console-error.png",alt:"This image shows the console error after submitting the form to calculate the addition of 3 and 2."})),(0,r.kt)("p",null,"As we know, console errors can already give us a great deal of information! Based on the context, we know the error has something to do with the addition operation. We can see that the error message has to do with ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError"},"a variable that doesn't exist"),", and that we can see that the error is coming from line 27 of ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts.js"),". With this information alone, we can solve this error. However, DevTools can make debugging this error an even easier process. "),(0,r.kt)("h3",{id:"the-devtools-sources-tab"},"The DevTools' Sources Tab"),(0,r.kt)("p",null,"Let's open the ",(0,r.kt)("strong",{parentName:"p"},"Sources")," tab of our DevTools console. If your DevTools window is small, you may have to select the arrow icon ",(0,r.kt)("inlineCode",{parentName:"p"},">>")," to get a menu of other tabs options. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/devtools-sources-tab.png",alt:"This image shows the menu within the DevTools window to find other tab options."})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," We show content with the DevTools pane at the bottom of the browser window or on the right side. You can pick whatever orientation you prefer. You can change the orientation by clicking on the three vertical dots in the upper right corner and clicking the ",(0,r.kt)("em",{parentName:"p"},"Dock side")," icon of your choice as shown in the image below:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/selecting-devtools-dock-orientation.png",alt:"Click on three vertical dots to pick a Dock side option."})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Sources")," tab is used to view and edit the files in our project, and to debug JavaScript. There are other things that the Sources tab lets you do that we won't cover in the program. The image below highlights the different tools of the Sources tab in different colored boxes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The orange box on the top left is where we can view our project's files among other things. We can click on the different files to open them up in the window to the right."),(0,r.kt)("li",{parentName:"ul"},"The lime green box on the top right is where we can see the contents of the files in our project. We can also set breakpoints in this window, which we'll learn about in the next lesson. Currently, the line that is throwing the error is underlined in a red squiggly line."),(0,r.kt)("li",{parentName:"ul"},"The blue box on the bottom left has most of our debugging controls and options, and it also displays information relevant to our debugging process. "),(0,r.kt)("li",{parentName:"ul"},"The yellow box on the bottom right also has information relevant to our debugging process. Depending on how your DevTools window is oriented and how big it is, this area may be combined with the area highlighted by the blue box.")),(0,r.kt)("p",null,'If you have an additional window within the Sources tab that shows a console or a "what\'s new" section, you can simply exit out of that. '),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/sources-tab-all-windows-highlighted.png",alt:"This image shows the contents of the Sources tab."})),(0,r.kt)("h3",{id:"pausing-on-exceptions"},"Pausing on Exceptions"),(0,r.kt)("p",null,"Now, let's configure our debugging tools to pause on exceptions. Click the button that looks like an octagon with a pause button. If we click the octagon, it turns blue and that means that we've configured our DevTools to pause on exceptions. The GIF below shows exactly where this button is. Depending on the location and size of your DevTools, this button may be located somewhere else."),(0,r.kt)("p",null,"When you turn on the debugging option to pause on exceptions, a checkbox that reads \"Pause on caught exceptions\" will show up just below the octagon. Checking this checkbox will configure the DevTools debugger to pause on errors that we already have code in place to handle. Just like the error handling for a user's age and height in the Amusement Park website. We won't be using this option in the program, so do not select it!"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/turning-on-off-pause-on-exceptions.gif",alt:'This gif shows the "pause on exceptions" button in the Source tab.'})),(0,r.kt)("p",null,'With the DevTools Sources tab open and the "pause on exceptions" debugging tool turned on, let\'s go ahead and resubmit our form with the "add" operation selected and the numbers 2 and 3 (or any other). This time, the ',(0,r.kt)("inlineCode",{parentName:"p"},"uncaught ReferenceError")," will cause our DevTools debugger to fire, and we'll see a host of new information in the Sources tab. Let's review each new change that we see."),(0,r.kt)("p",null,'First, in the two windows at the bottom of the Source tabs, we\'ll see new information about the "Call Stack", the "Scope", and more. '),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/bottom-of-sources-tab-with-exception-info.png",alt:"This image shows the bottom of the Source tab with information about the error message, call stack, and scope."})),(0,r.kt)("p",null,"There are a couple things to notice:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'In the left-hand window, the error message is listed, along with the title "Paused on exception". This simply lets us know that we\'re dealing with an exception, and what the error message is, if any.'),(0,r.kt)("li",{parentName:"ul"},'Below that, we\'ll see a section titled "Call Stack" that gives us the exact location of the error, which is in the ',(0,r.kt)("inlineCode",{parentName:"li"},"handleCalculation")," function at line 27 of ",(0,r.kt)("inlineCode",{parentName:"li"},"scripts.js:27"),". A call stack is what a program uses to keep track of function calls. In this case, it's enabling our debugger to tell us exactly where the error occurred."),(0,r.kt)("li",{parentName:"ul"},'In the right-hand window, the "Scope" tab will tell us about all of the variables that are in local and global scope at the location in which the error occurred, which is the ',(0,r.kt)("inlineCode",{parentName:"li"},"handleCalculation"),' function. (This information may be cutoff if the window is too small.) Right now, the "local" scope details information about:',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The exception, and its type."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"this"),", which represents the form element that the submit event listener is being called on. ",(0,r.kt)("inlineCode",{parentName:"li"},"this")," is a tricky subject that we'll revisit later in the program, so don't worry about understanding it now."),(0,r.kt)("li",{parentName:"ul"},"The event type and other related information."),(0,r.kt)("li",{parentName:"ul"},"The variables and values for ",(0,r.kt)("inlineCode",{parentName:"li"},"number1"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"number2"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"operation"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"result"),".")))),(0,r.kt)("p",null,"The other handy thing about using the pause on exceptions DevTools debugging feature is that it brings up the source code for our scripts and highlights the exact line of code in the exact file that's causing the error in the browser. Instead of reading the console error and returning to our VS Code to review our ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts.js"),", we can instead view our scripts in the Sources tab. This gives us extra context about the error we're dealing with and makes it way easier to debug."),(0,r.kt)("p",null,"The DevTools debugger also marks up the ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts.js"),' file with the same information about the variables in scope (that are listed in the "Scope" area of the Sources tab) when the exception occurs. Watch the gif below that demonstrates this, and notice how some information is listed and highlighted in a different color, like ',(0,r.kt)("inlineCode",{parentName:"p"},'operator = "add"'),", and other variables' values can be shown by hovering over the variable names. For viewing purposes, we've made the scripts.js file large enough to easily see all of the contents."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/viewing-var-values-in-sources-tab-debugging.gif",alt:"This gif shows how we can hover over the variables in scope to get their values."})),(0,r.kt)("h3",{id:"resolving-the-error"},"Resolving the Error"),(0,r.kt)("p",null,"So, how does pausing on exceptions help us find errors in our code? It automatically contextualizes the error in our code and it provides us with precise information about the values of local variables. By reviewing the information we're provided with, we should be able to combine the error message with the location of the error and determine that we've misspelled our ",(0,r.kt)("inlineCode",{parentName:"p"},"add()")," function call, incorrectly calling ",(0,r.kt)("inlineCode",{parentName:"p"},"ad()"),". "),(0,r.kt)("p",null,"In such a simple website, it may seem like overkill to use DevTools' debugging feature to pause on exceptions. We likely could resolve the error just by reading the console error and reviewing our source code in VS Code to spot the typo. Regardless of that, it's important to become familiar and comfortable with DevTools' more sophisticated debugging tools, because they will be able to do much more heavy lifting when debugging more complex and lengthy code. "),(0,r.kt)("p",null,"So, when you go to test out a website, do it with the pause on exceptions feature turned on! "),(0,r.kt)("h3",{id:"exiting-the-debugger"},"Exiting the Debugger"),(0,r.kt)("p",null,"Now that we've figured out the issue in our code, we're ready to move on to the next thing, which means we no longer want to be paused in debugger. We have a few options to resume the normal execution of our scripts, which are highlighted in the image below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select the play symbol (in the orange circle) to resume the execution of the scripts. This just means we don't want to be paused on the error anymore. If we haven't yet fixed the bug in our code, our website will still stop running once it hits the error. "),(0,r.kt)("li",{parentName:"ul"},"Select the right-pointing arrow that's rounded over a dot (in the blue circle) to call the next function. Just like with the play symbol, if we haven't fixed our code yet, our website will still be stopped at the error. So in this case, since the error has stopped our scripts, there's effectively no other function to call. This means that selecting this icon will do the same thing as selecting the play symbol to resume the scripts. In the next lesson, we'll see a more useful application of this button to call the next operation. "),(0,r.kt)("li",{parentName:"ul"},"If you want to turn off the pause on exceptions feature of the DevTools' debugger, then make sure to click the octagon icon (in the red circle). Even if you refresh your page, the pause on exceptions feature will stay on until you deselect it in the Sources tab. ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/exiting-devtools-pausing-on-exceptions.png",alt:"This image highlights the ways to exit the DevTools debugger."})))}p.isMDXComponent=!0}}]);