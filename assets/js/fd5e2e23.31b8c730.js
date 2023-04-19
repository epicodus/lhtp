"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[9051],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={title:"15. \ud83d\udcd3 Calculator UI and Business Logic",id:"calculator_ui_and_business_logic",slug:"calculator_ui_and_business_logic",hide_table_of_contents:!0,sidebar_position:38,day:"monday",type:"lesson"},o=void 0,s={unversionedId:"javascript_and_web_browsers/calculator_ui_and_business_logic",id:"javascript_and_web_browsers/calculator_ui_and_business_logic",title:"15. \ud83d\udcd3 Calculator UI and Business Logic",description:"Now that we've been introduced to the difference between business logic and user interface logic, let's revisit our calculator project and re-write some of the code. In an upcoming practice lesson, you'll add subtraction, multiplication, and division to this project.",source:"@site/docs/2_javascript_and_web_browsers/1n_calculator_ui_and_business_logic.md",sourceDirName:"2_javascript_and_web_browsers",slug:"/javascript_and_web_browsers/calculator_ui_and_business_logic",permalink:"/lhtp/javascript_and_web_browsers/calculator_ui_and_business_logic",draft:!1,tags:[],version:"current",sidebarPosition:38,frontMatter:{title:"15. \ud83d\udcd3 Calculator UI and Business Logic",id:"calculator_ui_and_business_logic",slug:"calculator_ui_and_business_logic",hide_table_of_contents:!0,sidebar_position:38,day:"monday",type:"lesson"},sidebar:"docs",previous:{title:"14. \ud83d\udcd3 Business and User Interface Logic",permalink:"/lhtp/javascript_and_web_browsers/business_and_user_interface_logic"},next:{title:"16. \u270f\ufe0f Practice: Calculator UI and Business Logic",permalink:"/lhtp/javascript_and_web_browsers/practice_calculator_ui_and_business_logic"}},l={},u=[{value:"Defining an Addition Function",id:"defining-an-addition-function",level:2},{value:"Gathering User Input",id:"gathering-user-input",level:2},{value:"Parsing Integers",id:"parsing-integers",level:2},{value:"Reminder: Work with your DevTools Console Open and Look for Console Errors",id:"reminder-work-with-your-devtools-console-open-and-look-for-console-errors",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now that we've been introduced to the difference between ",(0,a.kt)("strong",{parentName:"p"},"business logic")," and ",(0,a.kt)("strong",{parentName:"p"},"user interface")," logic, let's revisit our calculator project and re-write some of the code. In an upcoming practice lesson, you'll add subtraction, multiplication, and division to this project."),(0,a.kt)("p",null,"Remember, business logic is all the computation that users can't see. For instance, when we write functions that add numbers together, that is business logic. A computation that happens behind the scenes."),(0,a.kt)("p",null,"User interface logic, on the other hand, is the logic that allows a user to interact with a page. An example is a function to hide or show an image, or to gather user input."),(0,a.kt)("h2",{id:"defining-an-addition-function"},"Defining an Addition Function"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We've already written an ",(0,a.kt)("inlineCode",{parentName:"p"},"add()")," function, so let's use that as a jumping off point. If you've been coding along with the previous lesson that set up our calculator project, we're going to remove the ",(0,a.kt)("inlineCode",{parentName:"p"},"saySomething()")," function and simplify our code:"),(0,a.kt)("div",{class:"filename"},"js/scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// business logic\nfunction add(number1, number2) {\n  return number1 + number2;\n}\n\n// user interface logic \nwindow.alert(add(10,5));\n")),(0,a.kt)("p",null,"Notice, too, that we've added comments to distinguish between user interface and business logic in our ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts.js")," file. While you won't see comments like these in production code, they are helpful to include when you are learning and beginning to practice separation of logic."),(0,a.kt)("p",null,"In the user interface (UI) section, we've simplified our code to use an alert that displays the results of calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"add()")," function with two arguments. The line ",(0,a.kt)("inlineCode",{parentName:"p"},"window.alert(add(10,5));")," calls our ",(0,a.kt)("inlineCode",{parentName:"p"},"add()")," function, passing it two arguments. The return value from ",(0,a.kt)("inlineCode",{parentName:"p"},"add()")," is then immediately passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"window.alert()")," method. If it's easier to understand, we could rewrite this code on multiple lines as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const additionResult = add(10,5);\nwindow.alert(additionResult);\n")),(0,a.kt)("p",null,"At this point, when we run our project in the browser (opening the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html"),"), our scripts should pop up a dialog box with the value that the add function returns when passed those two arguments. "),(0,a.kt)("p",null,"Keep in mind that we're using JavaScript's data type coercion: we're letting our JS implicitly change the number ",(0,a.kt)("inlineCode",{parentName:"p"},"additionResult")," into a string, which is the data type that the ",(0,a.kt)("inlineCode",{parentName:"p"},"window.alert()")," method expects as an argument. "),(0,a.kt)("h2",{id:"gathering-user-input"},"Gathering User Input"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Our simple (addition-only) calculator isn't very useful because you have to go in and modify the code every time you want to do a new calculation. Let's add in the ability to collect input from the user."),(0,a.kt)("p",null,"Remember that we can collect input through the ",(0,a.kt)("inlineCode",{parentName:"p"},"window.prompt()")," method, which takes a string as an argument and returns a string containing the user's input."),(0,a.kt)("div",{class:"filename"},"js/scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// business logic\nfunction add(number1, number2) {\n  return number1 + number2;\n}\n\n// user interface logic \nconst number1 = prompt("Enter a number:");\nconst number2 = prompt("Enter another number:");\n\nwindow.alert(add(number1, number2));\n')),(0,a.kt)("p",null,"This is an exciting update! Here we've collected two numbers from the user with ",(0,a.kt)("inlineCode",{parentName:"p"},"window.prompt()"),", then we've called ",(0,a.kt)("inlineCode",{parentName:"p"},"add()")," with the two user inputted numbers as arguments, and then returned the result in an alert. Now our simple calculator can respond to user input. Let's try this in the browser. Either open ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," in the browser, or reload the page that's already opened to it. "),(0,a.kt)("h2",{id:"parsing-integers"},"Parsing Integers"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Oops. We have the problem we previously encountered where the ",(0,a.kt)("inlineCode",{parentName:"p"},"window.prompt()")," method returns strings, so the ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," operator we use inside of our ",(0,a.kt)("inlineCode",{parentName:"p"},"add()")," function concatenates the two strings together rather than doing what we want. Because our ",(0,a.kt)("inlineCode",{parentName:"p"},"add()")," function expects numbers as arguments rather than strings, we must convert the inputs into numbers before calling our ",(0,a.kt)("inlineCode",{parentName:"p"},"add()")," function."),(0,a.kt)("div",{class:"filename"},"js/scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// business logic\nfunction add(number1, number2) {\n  return number1 + number2;\n}\n\n// user interface logic \nconst number1 = parseInt(prompt("Enter a number:"));\nconst number2 = parseInt(prompt("Enter another number:"));\n\nwindow.alert(add(number1, number2));\n')),(0,a.kt)("p",null,"Now we're getting somewhere! In the next exercise, you'll add in support for subtraction, multiplication and division."),(0,a.kt)("h2",{id:"reminder-work-with-your-devtools-console-open-and-look-for-console-errors"},"Reminder: Work with your DevTools Console Open and Look for Console Errors"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Whenever we are running JavaScript in the browser and something isn't working correctly, the first step is ",(0,a.kt)("em",{parentName:"p"},"always")," to open the DevTools console. In the console, any glaring errors will show up in red with an X to the left of the message. Meanwhile, warnings will show up in yellow. Messages in the console that are red must be addressed immediately."),(0,a.kt)("p",null,"Let's review a very common error: ",(0,a.kt)("inlineCode",{parentName:"p"},"Failed to load resource: net::ERR_FILE_NOT_FOUND  scipts.js:1"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.dropbox.com/s/g36vczlrndxtzv4/error-and-warning.png?raw=1",alt:"Console shows an error and a warning."})),(0,a.kt)("p",null,"At the time this lesson was written, there was an error ",(0,a.kt)("em",{parentName:"p"},"and")," a warning. The warning appears to be related to a bug in the latest Chrome update \u2014 it doesn't affect our code and it's something we can ignore."),(0,a.kt)("p",null,"The error, however, is code breaking. It should be a familiar error at this point because we addressed the exact same thing in the ",(0,a.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/git-html-and-css/debugging-html-and-css"},"Debugging HTML and CSS")," lesson. In that lesson, we stated that there are three reasons this error will occur: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The file doesn't exist"),(0,a.kt)("li",{parentName:"ol"},"The file is in a different directory than the one we specified"),(0,a.kt)("li",{parentName:"ol"},"The file is in the correct place but the name doesn't match the name specified")),(0,a.kt)("p",null,"In our example case above, the issue is the third one. We've left the ",(0,a.kt)("inlineCode",{parentName:"p"},"r")," out of ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts.js")," in our HTML file: ",(0,a.kt)("inlineCode",{parentName:"p"},'<script src="js/scipts.js"><\/script>'),"."),(0,a.kt)("p",null,"Misspelling a filename is a ",(0,a.kt)("em",{parentName:"p"},"very")," common error \u2014 and one that's not limited to beginners. It's easy to flub a few keystrokes or mistype a filename. Fortunately, debugging makes it equally easy to find and fix this problem."))}p.isMDXComponent=!0}}]);