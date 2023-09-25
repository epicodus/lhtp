"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[75943],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},29021:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"15. Practice: Calculator UI and Business Logic",id:"practice_calculator_ui_and_business_logic",slug:"practice_calculator_ui_and_business_logic",hide_table_of_contents:!0,sidebar_position:39,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_javascript-and-web-browsers/1o_classwork_practice_calculator_ui_and_business_logic.md"},l=void 0,o={unversionedId:"introduction_to_programming_classic/javascript-and-web-browsers/practice_calculator_ui_and_business_logic",id:"introduction_to_programming_classic/javascript-and-web-browsers/practice_calculator_ui_and_business_logic",title:"15. Practice: Calculator UI and Business Logic",description:"Goal: Continue to practice writing JavaScript functions by creating the calculator app.",source:"@site/docs/introduction_to_programming_classic/2_javascript-and-web-browsers/1o_classwork_practice_calculator_ui_and_business_logic.md",sourceDirName:"introduction_to_programming_classic/2_javascript-and-web-browsers",slug:"/introduction_to_programming_classic/javascript-and-web-browsers/practice_calculator_ui_and_business_logic",permalink:"/lhtp/introduction_to_programming_classic/javascript-and-web-browsers/practice_calculator_ui_and_business_logic",draft:!1,tags:[],version:"current",sidebarPosition:39,frontMatter:{title:"15. Practice: Calculator UI and Business Logic",id:"practice_calculator_ui_and_business_logic",slug:"practice_calculator_ui_and_business_logic",hide_table_of_contents:!0,sidebar_position:39,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_javascript-and-web-browsers/1o_classwork_practice_calculator_ui_and_business_logic.md"},sidebar:"introduction_to_programming_classic",previous:{title:"14. Calculator UI and Business Logic",permalink:"/lhtp/introduction_to_programming_classic/javascript-and-web-browsers/calculator_ui_and_business_logic"},next:{title:"16. Journal #2 Discussion",permalink:"/lhtp/introduction_to_programming_classic/javascript-and-web-browsers/journal_2_discussion"}},s={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Calculator",id:"calculator",level:3},{value:"Project Setup",id:"project-setup",level:4},{value:"Sample HTML File",id:"sample-html-file",level:4},{value:"Sample JavaScript File",id:"sample-javascript-file",level:4},{value:"Test Your Scripts in the Browser",id:"test-your-scripts-in-the-browser",level:4},{value:"Extend the Functionality of the Calculator App",id:"extend-the-functionality-of-the-calculator-app",level:4}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goal:")," Continue to practice writing JavaScript functions by creating the calculator app."),(0,r.kt)("h2",{id:"warm-up"},"Warm Up"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What is the difference between business and user interface logic?"),(0,r.kt)("li",{parentName:"ul"},'Does "interface" mean the same thing when we talk about a user interface, a door knob as an interface, and an application programming interface?'),(0,r.kt)("li",{parentName:"ul"},"How do you provide a function multiple arguments?"),(0,r.kt)("li",{parentName:"ul"},"What data type is returned from ",(0,r.kt)("inlineCode",{parentName:"li"},"window.prompt()"),"?"),(0,r.kt)("li",{parentName:"ul"},"What does the HTML ",(0,r.kt)("inlineCode",{parentName:"li"},"<script>")," tag do?")),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"calculator"},"Calculator"),(0,r.kt)("p",null,"Create the calculator project that we walked through in the previous lessons. Below are the setup instructions as well as the sample HTML and JS code we used in the walkthrough. Reference the previous lessons as needed."),(0,r.kt)("h4",{id:"project-setup"},"Project Setup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"calculator")," project folder on your computer."),(0,r.kt)("li",{parentName:"ul"},"Initialize a git repository in your newly created project folder."),(0,r.kt)("li",{parentName:"ul"},"Create ",(0,r.kt)("inlineCode",{parentName:"li"},"js")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"css")," folders in your project folder."),(0,r.kt)("li",{parentName:"ul"},"Create an empty ",(0,r.kt)("inlineCode",{parentName:"li"},"scripts.js")," file in your project's ",(0,r.kt)("inlineCode",{parentName:"li"},"js")," subdirectory."),(0,r.kt)("li",{parentName:"ul"},"Create an empty ",(0,r.kt)("inlineCode",{parentName:"li"},"styles.css")," file in your project's ",(0,r.kt)("inlineCode",{parentName:"li"},"css")," subdirectory."),(0,r.kt)("li",{parentName:"ul"},"Create an HTML file called ",(0,r.kt)("inlineCode",{parentName:"li"},"index.html")," in the root of your project directory, using the HTML below."),(0,r.kt)("li",{parentName:"ul"},"Update your HTML to include the script tag to link to your ",(0,r.kt)("inlineCode",{parentName:"li"},"scripts.js")," file: ",(0,r.kt)("inlineCode",{parentName:"li"},'<script src="js/scripts.js"><\/script>'),"   "),(0,r.kt)("li",{parentName:"ul"},"Add a README.md file."),(0,r.kt)("li",{parentName:"ul"},"Track everything with git and commit the changes."),(0,r.kt)("li",{parentName:"ul"},"Create a calculator repository on GitHub and push your project to GitHub."),(0,r.kt)("li",{parentName:"ul"},"Keep reading for further instructions on how to extend the functionality of this app.")),(0,r.kt)("h4",{id:"sample-html-file"},"Sample HTML File"),(0,r.kt)("div",{class:"filename"},"index.html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n  <head>\n    <link rel="stylesheet" href="css/styles.css" type="text/css">\n    <title>Calculator</title>\n  </head>\n  <body>\n    <h1>Calculator</h1>\n  </body>\n</html>\n')),(0,r.kt)("h4",{id:"sample-javascript-file"},"Sample JavaScript File"),(0,r.kt)("div",{class:"filename"},"js/scripts.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// business logic\nfunction add(number1, number2) {\n  return number1 + number2;\n}\n\n// user interface logic \nconst number1 = prompt("Enter a number:");\nconst number2 = prompt("Enter another number:");\n\nwindow.alert(add(number1, number2));\n')),(0,r.kt)("h4",{id:"test-your-scripts-in-the-browser"},"Test Your Scripts in the Browser"),(0,r.kt)("p",null,"When you open your HTML file in the web browser, it runs all scripts connected to it. If you run the project with the starter code above, you should see two prompts for numbers, and then an alert with the calculated result. If the project isn't working: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check that you correctly link to your scripts file and that your scripts file includes both the ",(0,r.kt)("em",{parentName:"li"},"add()")," function and code that actually calls that function. "),(0,r.kt)("li",{parentName:"ul"},"Check the JavaScript console to see if there are any helpful error messages that might point you in the right direction."),(0,r.kt)("li",{parentName:"ul"},"Reach out for help from a peer or teacher.")),(0,r.kt)("h4",{id:"extend-the-functionality-of-the-calculator-app"},"Extend the Functionality of the Calculator App"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create functions to ",(0,r.kt)("inlineCode",{parentName:"li"},"subtract"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"multiply"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"divide")," two numbers. "),(0,r.kt)("li",{parentName:"ol"},"Verify that all four functions work by calling each function. Create a separate alert for the results of each of the function calls."),(0,r.kt)("li",{parentName:"ol"},"Instead of just displaying the number result of each of the function calls, update your ",(0,r.kt)("inlineCode",{parentName:"li"},"window.alert(...);")," method calls to include a phrase that explains the result. For example, when calling the ",(0,r.kt)("inlineCode",{parentName:"li"},"add()")," function and getting an ",(0,r.kt)("inlineCode",{parentName:"li"},"8"),' as a result, the alert should say something like "The addition of your numbers equals 8". Do this for every function.'),(0,r.kt)("li",{parentName:"ol"},"Combine the separate ",(0,r.kt)("inlineCode",{parentName:"li"},"window.alert()"),' method calls into one call that states all of the results of each mathematical operation. For example, if the user inputted numbers are 2 and 1, the alert should say: "The addition of your numbers equals 3. The subtraction of your numbers equals 1. The multiplication of your numbers equals 2. The division of your numbers equals 2."')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Note: you don't have to write out this more complex return in one line. Break it up into as many lines as makes sense to you, and use as many variables as you need.")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},'Try something more challenging now. Call all of the calculator functions and have the alert return both the user\'s inputted numbers and the results. For example, if the user inputted numbers are 2 and 1, the alert should say: "2 + 1 = 3, 2 - 1 = 1, 2 * 1 = 2, and 2 / 1 = 2".')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Note: you don't have to write out this more complex return in one line. Break it up into as many lines as makes sense to you, and use as many variables as you need.")),(0,r.kt)("p",null,"In upcoming lessons, we'll learn how to make forms in HTML that can gather user input and streamline our calculator applications even more!"))}d.isMDXComponent=!0}}]);