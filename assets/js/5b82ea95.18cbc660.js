"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[1959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));const i={title:"Calculator with Forms and Branching",id:"calculator_with_forms_and_branching",slug:"calculator_with_forms_and_branching",hide_table_of_contents:!0,sidebar_position:69,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4c_calculator_with_branching.md"},r=void 0,l={unversionedId:"introduction_to_programming_classic/javascript-and-web-browsers/calculator_with_forms_and_branching",id:"introduction_to_programming_classic/javascript-and-web-browsers/calculator_with_forms_and_branching",title:"Calculator with Forms and Branching",description:"The last time we added to our calculator project, we were using window methods to prompt and alert information from and to the user. We also carefully separated our business and user interface logics. The functionality of our calculator was limited to adding, and in the following practice prompt, you expanded the functionality with your pair by adding subtraction, multiplication, and division.",source:"@site/docs/introduction_to_programming_classic/2_javascript-and-web-browsers/4c_calculator_with_branching.md",sourceDirName:"introduction_to_programming_classic/2_javascript-and-web-browsers",slug:"/introduction_to_programming_classic/javascript-and-web-browsers/calculator_with_forms_and_branching",permalink:"/introduction_to_programming_classic/javascript-and-web-browsers/calculator_with_forms_and_branching",draft:!1,tags:[],version:"current",sidebarPosition:69,frontMatter:{title:"Calculator with Forms and Branching",id:"calculator_with_forms_and_branching",slug:"calculator_with_forms_and_branching",hide_table_of_contents:!0,sidebar_position:69,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4c_calculator_with_branching.md"},sidebar:"introduction_to_programming_classic",previous:{title:"Form Input Types",permalink:"/introduction_to_programming_classic/javascript-and-web-browsers/form_input_types"},next:{title:"Practice: Calculator and More",permalink:"/introduction_to_programming_classic/javascript-and-web-browsers/practice_calculator_and_more"}},s={},u=[{value:"Consolidating Multiple Options into One Form",id:"consolidating-multiple-options-into-one-form",level:2},{value:"Updating Scripts",id:"updating-scripts",level:2},{value:"Testing and Debugging with <code>console.log()</code>",id:"testing-and-debugging-with-consolelog",level:2},{value:"Implementing Branching and Printing the Result",id:"implementing-branching-and-printing-the-result",level:2},{value:"Completed Scripts",id:"completed-scripts",level:3},{value:"More on Business and UI Logic",id:"more-on-business-and-ui-logic",level:2},{value:"Another Configuration for our Scripts&#39; UI and Business Logics",id:"another-configuration-for-our-scripts-ui-and-business-logics",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The last time we added to our calculator project, we were using ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," methods to prompt and alert information from and to the user. We also carefully separated our business and user interface logics. The functionality of our calculator was limited to adding, and in the following practice prompt, you expanded the functionality with your pair by adding subtraction, multiplication, and division."),(0,a.kt)("p",null,"Now that we are familiar with new form input types, event listeners, and branching, it's time to update our calculator app to modern standards. In this lesson, we'll refactor our calculator app to implement the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A single form that uses basic inputs for the numbers, and radio buttons with options to pick between adding, subtracting, multiplying, and division."),(0,a.kt)("li",{parentName:"ul"},"Event listeners to handle events, both when our webpage finishes loading all resources and when the user submits the form. "),(0,a.kt)("li",{parentName:"ul"},"Branching to determine which math function to run based on the user's selections in the form."),(0,a.kt)("li",{parentName:"ul"},"Separation of business and user interface logics.")),(0,a.kt)("p",null,"This example will be more complex than any of the previous examples we've worked with! Take your time and discuss any points of confusion that come up. You are welcome to code along with this lesson, or just read through it. In the next practice prompt, you'll have the opportunity to recreate the calculator project."),(0,a.kt)("h2",{id:"consolidating-multiple-options-into-one-form"},"Consolidating Multiple Options into One Form"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Our new, all-inclusive form should look something like this:"),(0,a.kt)("div",{class:"filename"},"calculator.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <title>Calculator</title>\n  <link href="css/styles.css" rel="stylesheet" type="text/css">\n  <script src="js/scripts.js"><\/script>\n</head>\n<body>\n  <h1>Calculator</h1>\n  <form id="calculator">\n    <label for="input1">1st number:</label>\n    <input id="input1" type="text">\n    <label for="input2">2nd number:</label>\n    <input id="input2" type="text">\n\n    <label>\n      <input type="radio" name="operator" value="add">\n      add\n    </label>\n    <label>\n      <input type="radio" name="operator" value="subtract">\n      subtract\n    </label>\n    <label>\n      <input type="radio" name="operator" value="multiply">\n      multiply\n    </label>\n    <label>\n      <input type="radio" name="operator" value="divide">\n      divide\n    </label>\n\n    <button type="submit" class="btn">Go!</button>\n  </form>\n\n  <h2>Results</h2>\n  <p id="output"></p>\n</body>\n</html>\n')),(0,a.kt)("p",null,"In the above HTML, we've given the form an id of ",(0,a.kt)("inlineCode",{parentName:"p"},"calculator")," and the first two inputs have the ids ",(0,a.kt)("inlineCode",{parentName:"p"},"input1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"input2"),". This is where we'll get the user's 1st and 2nd numbers."),(0,a.kt)("p",null,"We've also added radio buttons to allow users to choose what operation to perform on the two numbers they provide."),(0,a.kt)("p",null,"Below the form, there's a \"Results\" section with an empty P tag. This is where we'll print the results from the calculation."),(0,a.kt)("p",null,"Now, if we launch our HTML page in the browser we should see our two inputs and radio buttons:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/calculator-app-in-browser.png",alt:"calculator with radio buttons."})),(0,a.kt)("p",null,"Our website isn't very pretty or well-formatted right now. If you want, you can add styling later. "),(0,a.kt)("h2",{id:"updating-scripts"},"Updating Scripts"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Now that we've finished the changes to our HTML, we need to update our scripts. Let's start with a basic update to set up event handlers for the window load event and the form submission event. "),(0,a.kt)("div",{class:"filename"},"js/scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// Business Logic\nfunction add(num1, num2) {\n  return num1 + num2;\n}\n\nfunction subtract(num1, num2) {\n  return num1 - num2;\n}\n\nfunction multiply(num1, num2) {\n  return num1 * num2;\n}\n\nfunction divide(num1, num2) {\n  return num1 / num2;\n}\n\n// User Interface Logic\nfunction handleCalculation(event) {\n  event.preventDefault();\n  // the code to get and process form values will go here!\n}\n\nwindow.addEventListener("load", function() {\n  const form = document.getElementById("calculator");\n  form.addEventListener("submit", handleCalculation);\n});\n')),(0,a.kt)("p",null,"Notice that we've used an event listener with an anonymous function expression as the callback for the window's load event, and an event listener with a function declaration (",(0,a.kt)("inlineCode",{parentName:"p"},"handleCalculation()"),") as the callback for the form's submission event. The ",(0,a.kt)("inlineCode",{parentName:"p"},"handleCalculation()")," reacts to the form submission event, so we need to include an ",(0,a.kt)("inlineCode",{parentName:"p"},"event")," parameter and call ",(0,a.kt)("inlineCode",{parentName:"p"},"event.preventDefault();")," within it. "),(0,a.kt)("p",null,"Our scripts are still separated between business and user interface logic. User interface logic is any code that handles accessing, manipulating, or updating the DOM. Business logic is any JavaScript code that handles processing data. Business logic never accesses, manipulates or updates the DOM."),(0,a.kt)("p",null,"Next up, let's add functionality to the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleCalculation()")," function to get the form values. We'll just look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleCalculation()")," function for the next few code snippets, because that's the only code we'll be updating. The ellipses ",(0,a.kt)("inlineCode",{parentName:"p"},"...")," indicate omitted code."),(0,a.kt)("div",{class:"filename"},"js/scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'...\n\n// User Interface Logic\nfunction handleCalculation(event) {\n  event.preventDefault();\n  const number1 = parseInt(document.querySelector("input#input1").value);\n  const number2 = parseInt(document.querySelector("input#input2").value);\n  const operator = document.querySelector("input[name=\'operator\']:checked").value;\n}\n\n...\n')),(0,a.kt)("p",null,"With the three new lines of code we've added, we now have the two user-inputted numbers saved in the ",(0,a.kt)("inlineCode",{parentName:"p"},"number1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"number2")," variables, as well as the selected operator from the radio buttons saved in the ",(0,a.kt)("inlineCode",{parentName:"p"},"operator")," variable. Notice that we've made sure to ",(0,a.kt)("inlineCode",{parentName:"p"},"parseInt()")," the numbers from the form. "),(0,a.kt)("h2",{id:"testing-and-debugging-with-consolelog"},"Testing and Debugging with ",(0,a.kt)("inlineCode",{parentName:"h2"},"console.log()")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Before we continue on to adding more logic, now is a good time to test our code and verify that we're correctly grabbing the form values. We can easily do this with ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log()"),". Let's add the following instances of ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log()")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleCalculation()")," function:"),(0,a.kt)("div",{class:"filename"},"js/scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'...\n\n// User Interface Logic\nfunction handleCalculation(event) {\n  event.preventDefault();\n  const number1 = parseInt(document.querySelector("input#input1").value);\n  const number2 = parseInt(document.querySelector("input#input2").value);\n  const operator = document.querySelector("input[name=\'operator\']:checked").value;\n  console.log("Number 1: " + number1);\n  console.log("Number 2: " + number2);\n  console.log("Operator:", operator);\n}\n\n...\n')),(0,a.kt)("p",null,"Notice that we've added a description to each variable that we are logging. We can combine strings and variables with a plus sign ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," or a comma ",(0,a.kt)("inlineCode",{parentName:"p"},","),". If we run this project, we'll get positive confirmation that we're correctly grabbing the form values, just like in the image below. Note that if you are coding along with this lesson, your logged values may be different based on the numbers and operation you've inputted."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/logged-form-variables-in-calc-project.png",alt:"This image shows the console.log statements in the DevTools console."})),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log()")," in this manner is a great debugging approach. If our form were not functioning correctly, or if our calculator was providing us odd, unexpected results (such as ",(0,a.kt)("inlineCode",{parentName:"p"},"NaN"),") we could use ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log()")," to double-check that our values are being retrieved. And, if they weren't, we could pinpoint ",(0,a.kt)("em",{parentName:"p"},"which")," value is causing the issue, and double-check that we're retrieving this value with the correct HTML id. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Make sure to remove all ",(0,a.kt)("inlineCode",{parentName:"strong"},"console.log()")," statements from your code after you are done debugging.")," Leaving behind ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log()")," statements makes your code look unpolished and buggy. If you leave in ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log()")," statements in your independent projects, we will ask to your resubmit and remove them."),(0,a.kt)("p",null,"Next up, we'll need to add branching to our project. "),(0,a.kt)("h2",{id:"implementing-branching-and-printing-the-result"},"Implementing Branching and Printing the Result"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Now that we've confirmed we're successfully collecting form input values, let's add branching to call the appropriate function based on the user's selected radio button:"),(0,a.kt)("div",{class:"filename"},"js/scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'...\n\n// User Interface Logic\nfunction handleCalculation(event) {\n  event.preventDefault();\n  const number1 = parseInt(document.querySelector("input#input1").value);\n  const number2 = parseInt(document.querySelector("input#input2").value);\n  const operator = document.querySelector("input[name=\'operator\']:checked").value;\n\n  let result;\n  if (operator === "add") {\n    result = add(number1, number2);\n  } else if (operator === "subtract") {\n    result = subtract(number1, number2);\n  } else if (operator === "multiply") {\n    result = multiply(number1, number2);\n  } else if (operator === "divide") {\n    result = divide(number1, number2);\n  }\n\n  document.getElementById("output").innerText = result;\n}\n\n...\n')),(0,a.kt)("p",null,"Here, we've simply added an ",(0,a.kt)("inlineCode",{parentName:"p"},"if...else"),' statement that calls different methods depending on what radio button the user has selected. For instance, if they select "divide", we run our ',(0,a.kt)("inlineCode",{parentName:"p"},"divide()"),' function; if they select "subtract", we run our ',(0,a.kt)("inlineCode",{parentName:"p"},"subtract()")," function, etc.  Regardless of which operation they choose to perform, we still insert the answer onto our page with the same line, ",(0,a.kt)("inlineCode",{parentName:"p"},'document.getElementById("output").innerText = result;'),"."),(0,a.kt)("p",null,"Notice in the code above that we declared the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," ",(0,a.kt)("em",{parentName:"p"},"outside")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"if...else")," statement, but we did not immediately give it a value. We simply told JavaScript that it ",(0,a.kt)("em",{parentName:"p"},"exists"),". It will have the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," until we define its value depending on which branch we're following."),(0,a.kt)("p",null,"Then, after the ",(0,a.kt)("inlineCode",{parentName:"p"},"if...else")," statement, we print the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," as the text of the output P tag. Notice that we're making use of JavaScript's implicit data type coercion: ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," is a number and the ",(0,a.kt)("inlineCode",{parentName:"p"},"innerText")," property expects a string as an argument. In this case, we don't need to explicitly convert the ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," variable into a string first with ",(0,a.kt)("inlineCode",{parentName:"p"},"result.toString()"),". But we can if we prefer to. Relying on JavaScript's data type coercion can lead to bugs, however, it is common to see out there, so it's important to become familiar with it."),(0,a.kt)("p",null,"By the way, you might be wondering why there is no ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," condition in the code above. Remember that anything that our other statements don't cover will end up in the ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," condition. If you don't have an ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," condition, it just means the code will move on. We could use the ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," condition for error handling, returning something like ",(0,a.kt)("inlineCode",{parentName:"p"},'"Error \u2014 unrecognized operator"'),". However since the radio buttons don't allow the room for user error, this error handling would be unnecessary.  "),(0,a.kt)("p",null,"Keep in mind, though, that we ",(0,a.kt)("em",{parentName:"p"},"wouldn't")," want to use an ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," statement for something like division, though. ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," statements should be used to handle errors and inputs our code doesn't recognize."),(0,a.kt)("h3",{id:"completed-scripts"},"Completed Scripts"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To see the completed JS for the Calculator website, visit the cheat sheet for this lesson.")),(0,a.kt)("h2",{id:"more-on-business-and-ui-logic"},"More on Business and UI Logic"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Organizing our code into user interface (UI) and business logic is a standard practice in writing code that's reusable and well organized. We've seen this at play in the refactor we just completed! Because all of our business logic was already separated into their own functions, when it came time to update our scripts to use event handlers and branching, all we had to do was focus on our UI logic."),(0,a.kt)("p",null,"It may be hard to see the advantage of separating code between UI and business logic, given that our calculator functionality is so simple. However, this separation is truly foundational to writing code that's easy to read, reuse, and refactor as your applications get larger. "),(0,a.kt)("h3",{id:"another-configuration-for-our-scripts-ui-and-business-logics"},"Another Configuration for our Scripts' UI and Business Logics"),(0,a.kt)("p",null,"Let's look at another way we can organize our UI and Business Logics. Before you read through the following updated scripts, take note that the following separation of logic isn't superior to the previous example. It's just another way to organize your scripts, and it's meant to give you ideas of how you can create functions to organize your code. Ultimately, you should choose the separation of UI and business logic that is most comfortable for you right now. There will be a lot of opportunity to practice code organization in the coming weeks. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// Business Logic\nfunction add(num1, num2) {\n  return num1 + num2;\n}\n\nfunction subtract(num1, num2) {\n  return num1 - num2;\n}\n\nfunction multiply(num1, num2) {\n  return num1 * num2;\n}\n\nfunction divide(num1, num2) {\n  return num1 / num2;\n}\n\nfunction calculate(num1, num2, operatorParam) {\n  if (operatorParam === "add") {\n    return add(num1, num2);\n  } else if (operatorParam === "subtract") {\n    return subtract(num1, num2);\n  } else if (operatorParam === "multiply") {\n    return multiply(num1, num2);\n  } else if (operatorParam === "divide") {\n    return divide(num1, num2);\n  }\n}\n\n// User Interface Logic\nfunction handleSubmission(event) {\n  event.preventDefault();\n  const number1 = parseInt(document.querySelector("input#input1").value);\n  const number2 = parseInt(document.querySelector("input#input2").value);\n  const operator = document.querySelector("input[name=\'operator\']:checked").value;\n\n  let result = calculate(number1, number2, operator);\n\n  document.getElementById("output").innerText = result;\n}\n\nwindow.addEventListener("load", function() {\n  const form = document.getElementById("calculator");\n  form.addEventListener("submit", handleSubmission);\n});\n')),(0,a.kt)("p",null,"With the new organization, we've made the following changes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We've moved the branching into its own function called ",(0,a.kt)("inlineCode",{parentName:"li"},"calculate()"),". Because the branching doesn't handle updating or accessing the DOM, we can separate it into a separate function in the business logic section of our scripts."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"calculate()")," has 3 parameters, one for each number (",(0,a.kt)("inlineCode",{parentName:"li"},"num1")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"num2"),"), and one for the operator (",(0,a.kt)("inlineCode",{parentName:"li"},"operatorParam"),"). "),(0,a.kt)("li",{parentName:"ul"},"In each condition block within ",(0,a.kt)("inlineCode",{parentName:"li"},"calculate()"),", instead of updating the value of the ",(0,a.kt)("inlineCode",{parentName:"li"},"result")," variable, we simply return the value of calling the appropriate add/subtract/etc function. For example: ",(0,a.kt)("inlineCode",{parentName:"li"},"return add(num1, num2);"),". This same code could be rewritten on two lines like so:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function calculate(n1, n2, op) {\n  if (operatorParam === "add") {\n    let result = add(n1, n2);\n    return result;\n  }\n  ...\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We've also updated the handler function for the form's submission event (originally ",(0,a.kt)("inlineCode",{parentName:"li"},"handleCalculation()"),") to use a more generic name: ",(0,a.kt)("inlineCode",{parentName:"li"},"handleSubmission()"),". Now this method calls on the new ",(0,a.kt)("inlineCode",{parentName:"li"},"calculate()")," function in the line of code ",(0,a.kt)("inlineCode",{parentName:"li"},"let result = calculate(number1, number2, operator);"),", and prints the result to the DOM just like before.")),(0,a.kt)("p",null,"Again, this organization of user interface and business logics is not better than the previous example. What this refactored example shows us is how we can use functions to group code together. If some of this new code organization is hard to wrap your head around, it's completely okay to not understand it or feel uncomfortable organizing your code in this way. In another two weeks of examples and practice, this sort of organization ",(0,a.kt)("em",{parentName:"p"},"will")," begin to feel comfortable. So for now, talk to your pair and instructor about your thoughts and questions, and do your best to include a basic separation of UI and business logics in your scripts. ",(0,a.kt)("strong",{parentName:"p"},"Separating UI and business logic will not be required on this section's independent project.")))}p.isMDXComponent=!0}}]);