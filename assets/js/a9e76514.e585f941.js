"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[46766],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(t),h=i,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||o;return t?a.createElement(m,r(r({ref:n},u),{},{components:t})):a.createElement(m,r({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},97431:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(87462),i=(t(67294),t(3905));const o={title:"Branching",id:"branching",slug:"branching",hide_table_of_contents:!0,sidebar_position:59,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_javascript-and-web-browsers/3e_homework_branching.md"},r=void 0,s={unversionedId:"introduction_to_programming_classic/javascript-and-web-browsers/branching",id:"introduction_to_programming_classic/javascript-and-web-browsers/branching",title:"Branching",description:"Now that we've learned the basics of DOM manipulation and event handling, we're going to add some logic to our pages that will allow us to control the flow of our code based on certain conditions. This kind of logic is called branching.",source:"@site/docs/introduction_to_programming_classic/2_javascript-and-web-browsers/3e_homework_branching.md",sourceDirName:"introduction_to_programming_classic/2_javascript-and-web-browsers",slug:"/introduction_to_programming_classic/javascript-and-web-browsers/branching",permalink:"/lhtp/introduction_to_programming_classic/javascript-and-web-browsers/branching",draft:!1,tags:[],version:"current",sidebarPosition:59,frontMatter:{title:"Branching",id:"branching",slug:"branching",hide_table_of_contents:!0,sidebar_position:59,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_javascript-and-web-browsers/3e_homework_branching.md"},sidebar:"introduction_to_programming_classic",previous:{title:"Practical Tips for Researching Web APIs",permalink:"/lhtp/introduction_to_programming_classic/javascript-and-web-browsers/practical_tips_for_researching_web_apis"},next:{title:"Practice: Branching",permalink:"/lhtp/introduction_to_programming_classic/javascript-and-web-browsers/practice_branching"}},l={},d=[{value:"Adding an <code>if</code> Branch",id:"adding-an-if-branch",level:3},{value:"How <code>age</code> Gets Evaluated",id:"how-age-gets-evaluated",level:3},{value:"Adding an <code>else</code> Branch",id:"adding-an-else-branch",level:3},{value:"Adding an <code>else if</code> Statement",id:"adding-an-else-if-statement",level:3},{value:"Summary",id:"summary",level:2}],u={toc:d},c="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Now that we've learned the basics of DOM manipulation and event handling, we're going to add some logic to our pages that will allow us to control the flow of our code based on certain conditions. This kind of logic is called ",(0,i.kt)("strong",{parentName:"p"},"branching"),".  "),(0,i.kt)("p",null,"As an example, we are going to create a website for a bar. We only want to show the drinks menu to the user if they are over 21. So, the condition is age. When we come to determining this condition in our code, it is like a fork in the road with two paths, or branches. If the user is over 21, they'll see the drinks menu. If not, they will get a message indicating that they are not old enough to view the content."),(0,i.kt)("p",null,"Here's the CSS, HTML, and the JS:"),(0,i.kt)("div",{class:"filename"},"css/styles.css"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".hidden {\n  display: none;\n}\n")),(0,i.kt)("div",{class:"filename"},"drinks.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <link rel="stylesheet" href="css/styles.css" type="text/css">\n  <script src="js/scripts.js"><\/script>\n  <title>Drinks</title>\n</head>\n<body>\n  <div>\n    <form>\n      <label for="age">We need to verify that you are over 21 years of age before we can show you the drinks menu. What is your age?</label>\n      <input id="age" type="number">\n      <button type="submit">Submit!</button>\n    </form>\n\n    <div id="drinks" class="hidden">\n      <h1 id="birthday-wish"></h1>\n      <h1>Drink menu</h1>\n\n      <h2>Beer</h2>\n      <ul>\n        <li>The King of Beer</li>\n        <li>The Queen of Beer</li>\n        <li>Real cold beer</li>\n      </ul>\n\n      <h2>Wine</h2>\n      <ul>\n        <li>Red wine</li>\n        <li>White wine</li>\n        <li>Blue wine</li>\n      </ul>\n    </div>\n\n    <div id="under-21" class="hidden">\n      <h1>Sorry, we can\'t serve you.</h1>\n\n      <p>It\'s illegal in the US. Try Mexico or Europe.</p>\n    </div>\n  </div>\n</body>\n</html>\n')),(0,i.kt)("div",{class:"filename"},"js/scripts.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'window.onload = function() {\n  // we get the form element\n  const form = document.querySelector("form");\n  // we create an event handler for the form\'s submission\n  form.onsubmit = function(event) {\n    event.preventDefault();\n\n    // we access two HTML elements, the drink menu and the message to underaged folks,\n    // and add the hidden class to those elements;\n    // doing this clears results before displaying new ones, which\n    // allows the user to submit the form again and again, and\n    // see new results.\n    let drinkMenu = document.getElementById("drinks");\n    drinkMenu.setAttribute("class", "hidden");\n    let under21Message = document.getElementById("under-21");\n    under21Message.setAttribute("class", "hidden");\n    \n    // we gather the age value\n    const age = parseInt(document.querySelector("input#age").value);\n\n    // we check if the age is greater than 21.\n    if (age >= 21) {\n      drinkMenu.removeAttribute("class");\n    } \n  };\n};\n')),(0,i.kt)("p",null,"First, we create a form submission event handler and call ",(0,i.kt)("inlineCode",{parentName:"p"},"event.preventDefault();")," to prevent the page from refreshing (the default behavior of the 'submit' event). "),(0,i.kt)("p",null,"Then, we hide the two possible results on the page, the drink menu or the message to underaged people. This may seem odd to do, since these results start off as hidden based on how we've configured our CSS. However, we do this to clear previous results before displaying new ones so that the user can submit the form over and over and always see new results."),(0,i.kt)("p",null,"Next, we gather the form input. Keep in mind that all form values are strings, no matter if a number is entered. Since we want our age to be compared to another number, we have to change it into a number using the ",(0,i.kt)("inlineCode",{parentName:"p"},"parseInt()")," function."),(0,i.kt)("p",null,"Next, we add branching."),(0,i.kt)("h3",{id:"adding-an-if-branch"},"Adding an ",(0,i.kt)("inlineCode",{parentName:"h3"},"if")," Branch"),(0,i.kt)("p",null,"With the user's age stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"age")," variable, we're ready to write a JavaScript ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statement, also known as a ",(0,i.kt)("strong",{parentName:"p"},"branch"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const age = parseInt(document.querySelector("input#age").value);\n\nif (age >= 21) {\n  drinkMenu.removeAttribute("class");\n} \n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"If")," statements consist of the keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," followed by a ",(0,i.kt)("strong",{parentName:"p"},"condition")," in parentheses.  The condition will always evaluate to a boolean value:  either ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". After the condition, we add the code that we want to execute if the condition is true. This code is set between two curly braces on its own lines."),(0,i.kt)("p",null,"When the condition evaluates to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the code that follows between the curly braces is executed. If the condition is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", the code in the curly braces is not executed."),(0,i.kt)("p",null,"Also, take note of how we use semicolons here. It's similar to how we use semicolons with functions. Any statements inside of the branch should terminate with semicolons (such as ",(0,i.kt)("inlineCode",{parentName:"p"},'drinkMenu.removeAttribute("class");'),"). However, there shouldn't be semicolons on the lines with curly braces."),(0,i.kt)("h3",{id:"how-age-gets-evaluated"},"How ",(0,i.kt)("inlineCode",{parentName:"h3"},"age")," Gets Evaluated"),(0,i.kt)("p",null,"Let's work through a few more examples of our age condition. If our user inputs an ",(0,i.kt)("inlineCode",{parentName:"p"},"age")," of 25, then the condition ",(0,i.kt)("inlineCode",{parentName:"p"},"age >= 21")," becomes ",(0,i.kt)("inlineCode",{parentName:"p"},"25 >= 21"),", which evaluates to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". The code in the curly braces is run and the div with an id of ",(0,i.kt)("em",{parentName:"p"},"drinks")," is shown."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"age")," is 16, ",(0,i.kt)("inlineCode",{parentName:"p"},"age >= 21")," becomes ",(0,i.kt)("inlineCode",{parentName:"p"},"16 >= 21"),", which evaluates to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". In this case, the code in the curly braces is skipped and nothing is displayed."),(0,i.kt)("h3",{id:"adding-an-else-branch"},"Adding an ",(0,i.kt)("inlineCode",{parentName:"h3"},"else")," Branch"),(0,i.kt)("p",null,"Back to our code, let's show a different message if the condition is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", which is when the user is under 21. To do this we'll add an ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," branch:"),(0,i.kt)("div",{class:"filename"},"js/scripts.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'window.onload = function() {\n  const form = document.querySelector("form");\n  form.onsubmit = function(event) {\n    event.preventDefault();\n    \n    let drinkMenu = document.getElementById("drinks");\n    drinkMenu.setAttribute("class", "hidden");\n    let under21Message = document.getElementById("under-21");\n    under21Message.setAttribute("class", "hidden");\n    const age = parseInt(document.querySelector("input#age").value);\n\n    if (age >= 21) {\n      drinkMenu.removeAttribute("class");\n    } else {\n      under21Message.removeAttribute("class");\n    }\n  };\n};\n')),(0,i.kt)("p",null,"Here, just like before, when the condition in parentheses evaluates to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the code in the first set of curly braces is run. But when the condition evaluates to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", the code in the second set of curly braces, after the ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," keyword, is run."),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," statement does not need a condition because the code in its curly braces is what will be run when the ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," condition is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"Generally, your code is executed from top to bottom, like a car driving straight down the road. When your car encounters an ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statement, it is like encountering a fork in the road. You can't take both paths \u2014 if the condition is true, the ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," code runs, otherwise the ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," code runs. The car in this metaphor is our ",(0,i.kt)("inlineCode",{parentName:"p"},"age")," variable."),(0,i.kt)("p",null,"Also, note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," condition doesn't use semicolons, either. Any statements inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," statement should terminate with a semicolon, though."),(0,i.kt)("h3",{id:"adding-an-else-if-statement"},"Adding an ",(0,i.kt)("inlineCode",{parentName:"h3"},"else if")," Statement"),(0,i.kt)("p",null,'What if we need to have more conditions?  What if we want to display a special third message if the user is exactly 21? Let\'s pop up an alert that says "Have some fun, you\u2019re just 21!" if the age is equal to ',(0,i.kt)("inlineCode",{parentName:"p"},"===")," 21. To do this, we'll update our ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statement to check whether ",(0,i.kt)("inlineCode",{parentName:"p"},"age")," is greater than 21, but not equal to it. Then, our ",(0,i.kt)("inlineCode",{parentName:"p"},"else if")," statement will check whether ",(0,i.kt)("inlineCode",{parentName:"p"},"age")," is exactly 21. "),(0,i.kt)("div",{class:"filename"},"js/scripts.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'window.onload = function() {\n  const form = document.querySelector("form");\n  form.onsubmit = function(event) {\n    event.preventDefault();\n\n    let drinkMenu = document.getElementById("drinks");\n    drinkMenu.setAttribute("class", "hidden");\n    let under21Message = document.getElementById("under-21");\n    under21Message.setAttribute("class", "hidden");\n\n    const age = parseInt(document.querySelector("input#age").value);\n\n    if (age > 21) {  // updated to check if age is greater than 21\n      drinkMenu.removeAttribute("class");\n    } else if (age === 21) { // new else if statement\n      window.alert("Have some fun, you\u2019re just 21!");\n      drinkMenu.removeAttribute("class");\n    } else {\n      under21Message.removeAttribute("class");\n    }\n  };\n};\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"else if")," is just like an alternate ",(0,i.kt)("inlineCode",{parentName:"p"},"if"),". It also has a condition to be checked in parentheses next to it, and if that condition is true then the code in curly braces following it is run. But ",(0,i.kt)("inlineCode",{parentName:"p"},"else if"),"'s condition is only checked when the ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," condition has already been found to be false. The curly braces with ",(0,i.kt)("inlineCode",{parentName:"p"},"else if")," also don't use semicolons, but any statements inside of them do."),(0,i.kt)("p",null,"In real life, we use this idea of ",(0,i.kt)("inlineCode",{parentName:"p"},"if"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"else if"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," all the time. Say you're going to the beach with your friends over the weekend. You all decide that the easiest way to get there would be to drive, but only your friend Lindsey has a car. So, if Lindsey is free, you can all drive with her. But, she never picks up her phone. So, you all decide that as an alternate plan you will take the bus \u2014 but only if Lindsey is busy. Then one of your friends remembers that this is a holiday weekend, so the bus might not be running. You roll your eyes at your friend and say \"Fine, if we can't find Lindsey, and the buses aren't running, we can all just go to my house and watch movies.\" That is an ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statement!"),(0,i.kt)("p",null,"Let's re-interpret this discussion in pseudocode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'if (lindsey === "available to drive") { // if Lindsey can drive...\n  driveToBeach();                       // call the function to drive to the beach.\n} else if (busesAreRunning === true) {  // if Lindsey can\'t drive and the buses are running...\n  busToBeach();                         // take the bus to the beach.\n} else {                                // if all the other options fail...\n  watchMovies();                        // watch movies instead.\n}\n')),(0,i.kt)("p",null,"The triple equals sign ",(0,i.kt)("inlineCode",{parentName:"p"},"===")," is easy to mix up with the single equals sign ",(0,i.kt)("inlineCode",{parentName:"p"},"="),". Remember that the single equals sign (",(0,i.kt)("inlineCode",{parentName:"p"},"="),") is used to assign a value to a variable. The triple equals sign(",(0,i.kt)("inlineCode",{parentName:"p"},"==="),") is used in conditions to check if the values on its left and right sides are equal."),(0,i.kt)("p",null,"When you are writing an ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statement, you can have as many ",(0,i.kt)("inlineCode",{parentName:"p"},"else if"),"s in it as you like, but you can only have one ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," and one ",(0,i.kt)("inlineCode",{parentName:"p"},"else"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," must be the first statement, and ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," must be the last statement."),(0,i.kt)("p",null,"When JavaScript tries to figure out if the condition is true, it's looking for a ",(0,i.kt)("strong",{parentName:"p"},"boolean"),'. You saw in the "Assignment, Comparison, and Equality Operators" lesson that comparison and equality operators return a boolean \u2014 either ',(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". Check out what's going on with this code that we've put into the DevTools console:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"> const age = 22;\n> age > 21;\ntrue\n")),(0,i.kt)("p",null,"We're getting a boolean. So, when we put in this same code ",(0,i.kt)("inlineCode",{parentName:"p"},"age > 21")," into our ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statement, we're giving it code that specifically evaluates to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". We can also give our ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statements variables to evaluate that are already set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const age = 22;\nconst ageBool = age > 21; // ageBool will be set to true\nif (ageBool) {\n  drinkMenu.removeAttribute("class");\n} else {\n  under21Message.removeAttribute("class");\n}\n')),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"In this lesson we introduced ourselves to ",(0,i.kt)("strong",{parentName:"p"},"branching")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statements. Branching determines the flow of your code based on certain conditions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There are a few ways to make branching logic. In this lesson we learned about ",(0,i.kt)("inlineCode",{parentName:"li"},"if")," statements."),(0,i.kt)("li",{parentName:"ul"},"We use comparison and equality operators to create conditions for ",(0,i.kt)("inlineCode",{parentName:"li"},"if"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"else if")," statements to evaluate to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),": ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"if (4 > 5)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'if (typeof "hello" === "string")')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'if (variableName === "add")')))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"=")," sets a variable; ",(0,i.kt)("inlineCode",{parentName:"li"},"===")," compares two things. Don't use ",(0,i.kt)("inlineCode",{parentName:"li"},"=="),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"if")," statements are made up of ",(0,i.kt)("inlineCode",{parentName:"li"},"if"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"else if"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"else")," statements. They must include one ",(0,i.kt)("inlineCode",{parentName:"li"},"if")," statement, but it's not required that you use an ",(0,i.kt)("inlineCode",{parentName:"li"},"else if")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"else")," statement in your branching. Somethings to note:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You can have an ",(0,i.kt)("inlineCode",{parentName:"li"},"if")," statement all by itself (without an ",(0,i.kt)("inlineCode",{parentName:"li"},"else if")," or an ",(0,i.kt)("inlineCode",{parentName:"li"},"else"),"). "),(0,i.kt)("li",{parentName:"ul"},"You can have an ",(0,i.kt)("inlineCode",{parentName:"li"},"if"),"... ",(0,i.kt)("inlineCode",{parentName:"li"},"else if")," without an ",(0,i.kt)("inlineCode",{parentName:"li"},"else")," statement."),(0,i.kt)("li",{parentName:"ul"},"You can have an ",(0,i.kt)("inlineCode",{parentName:"li"},"if"),"...",(0,i.kt)("inlineCode",{parentName:"li"},"else")," without an ",(0,i.kt)("inlineCode",{parentName:"li"},"else if")," statement."),(0,i.kt)("li",{parentName:"ul"},"You can only have one single ",(0,i.kt)("inlineCode",{parentName:"li"},"if")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"else")," statement. You can have as many ",(0,i.kt)("inlineCode",{parentName:"li"},"else if")," statements as you need."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"if")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"else if")," statements require conditions to be evaluated that are listed in parentheses. "),(0,i.kt)("li",{parentName:"ul"},"There is no condition (and no parentheses) for ",(0,i.kt)("inlineCode",{parentName:"li"},"else")," statements, since they designate what to do if an ",(0,i.kt)("inlineCode",{parentName:"li"},"if")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"else if")," condition has not evaluated to true.")))}p.isMDXComponent=!0}}]);