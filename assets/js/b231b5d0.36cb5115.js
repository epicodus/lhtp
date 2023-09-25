"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[14182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},62043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={title:"12. Adding JS to a Project",id:"adding_js_to_a_project",slug:"adding_js_to_a_project",hide_table_of_contents:!0,sidebar_position:36,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_javascript-and-web-browsers/1l_adding_js_to_a_project.md"},r=void 0,l={unversionedId:"introduction_to_programming_classic/javascript-and-web-browsers/adding_js_to_a_project",id:"introduction_to_programming_classic/javascript-and-web-browsers/adding_js_to_a_project",title:"12. Adding JS to a Project",description:"So far we've written all of our JavaScript in the DevTools console. This works for simple practice exercises, but it quickly becomes unwieldy as we want to write longer scripts (JavaScript). In this lesson, we'll learn how to create a project with JavaScript as we continue to practice writing functions and using window methods.",source:"@site/docs/introduction_to_programming_classic/2_javascript-and-web-browsers/1l_adding_js_to_a_project.md",sourceDirName:"introduction_to_programming_classic/2_javascript-and-web-browsers",slug:"/introduction_to_programming_classic/javascript-and-web-browsers/adding_js_to_a_project",permalink:"/lhtp/introduction_to_programming_classic/javascript-and-web-browsers/adding_js_to_a_project",draft:!1,tags:[],version:"current",sidebarPosition:36,frontMatter:{title:"12. Adding JS to a Project",id:"adding_js_to_a_project",slug:"adding_js_to_a_project",hide_table_of_contents:!0,sidebar_position:36,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_javascript-and-web-browsers/1l_adding_js_to_a_project.md"},sidebar:"introduction_to_programming_classic",previous:{title:"11. Practice: Interactivity with Window Methods",permalink:"/lhtp/introduction_to_programming_classic/javascript-and-web-browsers/practice_interactivity_with_window_methods"},next:{title:"13. Business and User Interface Logic",permalink:"/lhtp/introduction_to_programming_classic/javascript-and-web-browsers/business_and_user_interface_logic"}},s={},p=[{value:"Project Setup",id:"project-setup",level:2},{value:"Writing JavaScript",id:"writing-javascript",level:2},{value:"Combining <code>add()</code> with <code>saySomething()</code>",id:"combining-add-with-saysomething",level:3},{value:"Let&#39;s start with the first line (of the last 3):",id:"lets-start-with-the-first-line-of-the-last-3",level:4},{value:"Let&#39;s look at the next line:",id:"lets-look-at-the-next-line",level:4},{value:"Let&#39;s look at the last line:",id:"lets-look-at-the-last-line",level:4},{value:"A Refactor on our <code>saySomething()</code> Function Call",id:"a-refactor-on-our-saysomething-function-call",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"So far we've written all of our JavaScript in the DevTools console. This works for simple practice exercises, but it quickly becomes unwieldy as we want to write longer scripts (JavaScript). In this lesson, we'll learn how to create a project with JavaScript as we continue to practice writing functions and using ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," methods."),(0,i.kt)("p",null,"You are welcome to read along with this lesson or code along with it. In an upcoming lesson, we'll refactor the code in this lesson. Refactor just means to rewrite. Then in an upcoming practice lesson, you'll create this project (with starter code) and ask you to extend the functionality of the program (meaning, add new functionality to it)."),(0,i.kt)("h2",{id:"project-setup"},"Project Setup"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We'll call our project ",(0,i.kt)("inlineCode",{parentName:"p"},"calculator"),", and we'll set it up how we usually do by adding a CSS folder and file, an HTML file, and a README. Your project structure should look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"calculator/\n|_ css/\n  |_ styles.css\n|_ index.html\n|_ README.md\n")),(0,i.kt)("p",null,"We won't worry about adding anything to our CSS right now. In our index file, we'll add basic HTML:"),(0,i.kt)("div",{class:"filename"},"index.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n  <head>\n    <link rel="stylesheet" href="css/styles.css" type="text/css">\n    <title>Calculator</title>\n  </head>\n  <body>\n    <h1>Calculator</h1>\n  </body>\n</html>\n')),(0,i.kt)("p",null,"Next, we'll add a folder called ",(0,i.kt)("inlineCode",{parentName:"p"},"js")," and an empty file called ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts.js")," for our JavaScript. ",(0,i.kt)("inlineCode",{parentName:"p"},".js")," is the extension that we give to any file that will contain JavaScript. We could name our file something other than ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts.js"),", but this is a pretty standard name for a project with a single JS file. Your project structure should now look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"calculator/\n|_ css/\n  |_ styles.css\n|_ js/\n  |_ scripts.js\n|_ index.html\n|_ README.md\n")),(0,i.kt)("p",null,"To connect our JS file to our HTML, we need to add a ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," tag to the ",(0,i.kt)("inlineCode",{parentName:"p"},"<head>")," of our HTML. You may remember using a ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," tag with Bootstrap in the last course section. The ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," tag lets us embed JS directly in our HTML or link to an external JS file. We don't embed JS directly into HTML in this program, though you will see use cases for it on the internet. This is what adding embedded JS in HTML looks like (don't add this to index.html):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- We\'re not actually going to add this to our index.html --\x3e\n<!DOCTYPE html>\n<html lang="en-US">\n  <head>\n    <link rel="stylesheet" href="css/styles.css" type="text/css">\n    <title>Calculator</title>\n  </head>\n  <body>\n    <h1>Calculator</h1>\n    <script>\n      window.alert("Woo-hoo! We\'ve embedded a script into our HTML.");\n    <\/script>\n  </body>\n</html>\n')),(0,i.kt)("p",null,"At Epicodus, the convention is to always keep our JS separate from our HTML. This helps to create more organized code. Let's continue now and update our ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," with the new ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," tag in the ",(0,i.kt)("inlineCode",{parentName:"p"},"<head>")," of the HTML."),(0,i.kt)("div",{class:"filename"},"index.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n  <head>\n    <link rel="stylesheet" href="css/styles.css" type="text/css"> \n    \x3c!-- the new line is below this HTML comment ---\x3e\n    <script src="js/scripts.js"><\/script>      \n    <title>Calculator</title>\n  </head>\n  <body>\n    <h1>Calculator</h1>\n  </body>\n</html>\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," attribute lets us connect the JavaScript in ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts.js")," to our HTML, so that JS is loaded and run when our webpage is opened. We need to make sure to include the path to our JS file as the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," attribute. "),(0,i.kt)("p",null,"And with ",(0,i.kt)("inlineCode",{parentName:"p"},'<script src="js/scripts.js"><\/script>')," added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"<head>")," of our HTML, we are ready to start writing some JavaScript!"),(0,i.kt)("h2",{id:"writing-javascript"},"Writing JavaScript"),(0,i.kt)("hr",null),(0,i.kt)("p",null,'Let\'s add some of the JavaScript functions we wrote in the "Writing Functions" lesson.'),(0,i.kt)("div",{class:"filename"},"js/scripts.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function saySomething(whatToSay) {\n  window.alert(whatToSay);\n}\n\nfunction add(number1, number2) {\n  return number1 + number2;\n}\n")),(0,i.kt)("p",null,"We always write our functions on multiple lines. This follows proper indentation and spacing. Doing this is essential when you begin writing more complex functions."),(0,i.kt)("p",null,"Alright! We have our code \u2014 let's try running it. To run our scripts, we simply need to open the project in the browser. I like to drag and drop the ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," file from VS Code into my browser. When I'm working with a pair remotely, I use Live Server to serve the project."),(0,i.kt)("p",null,"When we do this... nothing happens. What's going on? This is because we have simply defined two functions and made them available for future use. We have not yet ",(0,i.kt)("strong",{parentName:"p"},"called")," the functions, so the code inside of them has not yet been executed. Now add this line after the function declarations in ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'saySomething("hi");\n')),(0,i.kt)("p",null,"Let's refresh our browser window opened to ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html"),'. You should see an alert pop up with the message "hi". When we click "ok", the dialogue box will disappear and we\'ll see our HTML. Any script that\'s tied to our HTML will get executed immediately when we access our website.'),(0,i.kt)("p",null,"Now add another line to ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"add(3, 5);\n")),(0,i.kt)("p",null,"Refresh the browser window opened to ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," one more time. The alert will still pop up but the new line ",(0,i.kt)("inlineCode",{parentName:"p"},"add(3, 5);")," doesn't appear to do anything. This is because our ",(0,i.kt)("inlineCode",{parentName:"p"},"add()")," method ",(0,i.kt)("strong",{parentName:"p"},"returns"),' the result, but we don\'t do anything with that return value. When we were running this code directly in the DevTools console, the console automatically displayed any return value. But in "real life" programming if you want to display something, you have to tell the computer to do that. We have a variety of options available to us. We could, for instance, assign the return value to a variable and then display it by calling the ',(0,i.kt)("inlineCode",{parentName:"p"},"window.alert()")," method. "),(0,i.kt)("p",null,"Update this line of code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"add(3, 5);\n")),(0,i.kt)("p",null,"To this code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = add(3, 5);\nwindow.alert(result);\n")),(0,i.kt)("p",null,"Refresh your browser window again and we should get an alert with the result, ",(0,i.kt)("inlineCode",{parentName:"p"},"8"),". If you aren't seeing the alert, make sure that you didn't delete any of the previous code. "),(0,i.kt)("p",null,"Also notice that we're taking advantage of JavaScript's implicit data type coercion: ",(0,i.kt)("inlineCode",{parentName:"p"},"window.alert()")," takes a string as an argument, but ",(0,i.kt)("inlineCode",{parentName:"p"},"result")," is a number. JavaScript doesn't mind this, and will handle converting the result into a string for us."),(0,i.kt)("h3",{id:"combining-add-with-saysomething"},"Combining ",(0,i.kt)("inlineCode",{parentName:"h3"},"add()")," with ",(0,i.kt)("inlineCode",{parentName:"h3"},"saySomething()")),(0,i.kt)("p",null,"Let's update our little program to make use of both functions. Here we have the entire ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts.js")," file, but with two new updated lines at the bottom of the file:"),(0,i.kt)("div",{class:"filename"},"js/scripts.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'function saySomething(whatToSay) {\n  window.alert(whatToSay);\n}\n\nfunction add(number1, number2) {\n  return number1 + number2;\n}\n\nconst result = add(3, 5);\nconst outputText = "The sum is " + result + ".";    // this line is new\nsaySomething(outputText);                           // this line is new\n')),(0,i.kt)("p",null,"We're going to break down the last 3 lines of code in our scripts."),(0,i.kt)("h4",{id:"lets-start-with-the-first-line-of-the-last-3"},"Let's start with the first line (of the last 3):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const result = add(3, 5);\n")),(0,i.kt)("p",null,"This line calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"add()")," function, passing in two arguments \u2014 the number ",(0,i.kt)("inlineCode",{parentName:"p"},"3")," and the number ",(0,i.kt)("inlineCode",{parentName:"p"},"5"),". Our ",(0,i.kt)("inlineCode",{parentName:"p"},"add()")," function assigns the first argument (",(0,i.kt)("inlineCode",{parentName:"p"},"3"),") to the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"number1")," and the second argument (",(0,i.kt)("inlineCode",{parentName:"p"},"5"),") to the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"number2"),". Parameters are a special kind of variable that hold arguments. So when the function returns ",(0,i.kt)("inlineCode",{parentName:"p"},"number1 + number2"),", it's returning the value of our two arguments: ",(0,i.kt)("inlineCode",{parentName:"p"},"3 + 5"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"add()")," function then returns the number ",(0,i.kt)("inlineCode",{parentName:"p"},"8"),", which our code assigns to the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"result"),". Hence the ",(0,i.kt)("inlineCode",{parentName:"p"},"result")," variable is now the number ",(0,i.kt)("inlineCode",{parentName:"p"},"8"),"."),(0,i.kt)("h4",{id:"lets-look-at-the-next-line"},"Let's look at the next line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const outputText = "The sum is " + result + ".";`\n')),(0,i.kt)("p",null,"This code concatenates three pieces of code together into a new string, which it then assigns to a new variable called ",(0,i.kt)("inlineCode",{parentName:"p"},"outputText"),". Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"result")," above is not in quotes. If you wrote ",(0,i.kt)("inlineCode",{parentName:"p"},'const outputText = "The sum is " + "result" + ".";')," then ",(0,i.kt)("inlineCode",{parentName:"p"},"outputText")," would be the string ",(0,i.kt)("inlineCode",{parentName:"p"},"The sum is result.")," But because we did not put ",(0,i.kt)("inlineCode",{parentName:"p"},"result")," in quotes, the computer understands the ",(0,i.kt)("inlineCode",{parentName:"p"},"result")," variable's value (",(0,i.kt)("inlineCode",{parentName:"p"},"8"),") should be substituted here. Hence the ",(0,i.kt)("inlineCode",{parentName:"p"},"outputText")," variable is assigned the string ",(0,i.kt)("inlineCode",{parentName:"p"},'"The sum is 8."'),"."),(0,i.kt)("p",null,"You may notice that we're able to concatenate strings and numbers together in this line: ",(0,i.kt)("inlineCode",{parentName:"p"},'const outputText = "The sum is " + result + ".";'),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"result")," variable contains a number, while ",(0,i.kt)("inlineCode",{parentName:"p"},'"The sum is "')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"."')," are both strings. Well, this is also JavaScript's data type coercion at work: we don't need to explicitly turn the number ",(0,i.kt)("inlineCode",{parentName:"p"},"result")," into a string to concatenate it to other strings with the ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," operator, we can let JavaScript implicitly handle this conversion. "),(0,i.kt)("h4",{id:"lets-look-at-the-last-line"},"Let's look at the last line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"saySomething(outputText);\n")),(0,i.kt)("p",null,"This code calls our ",(0,i.kt)("inlineCode",{parentName:"p"},"saySomething()")," function, passing in the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"outputText")," as the argument. ",(0,i.kt)("inlineCode",{parentName:"p"},"outputText")," has a string value of ",(0,i.kt)("inlineCode",{parentName:"p"},'"The sum is 8."'),". Our ",(0,i.kt)("inlineCode",{parentName:"p"},"saySomething()")," function then assigns that argument (",(0,i.kt)("inlineCode",{parentName:"p"},"outputText"),") to the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"whatToSay")," parameter. It then calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"window.alert(whatToSay)")," method in order to pop up a dialog box with the string ",(0,i.kt)("inlineCode",{parentName:"p"},'"The sum is 8."'),"."),(0,i.kt)("h3",{id:"a-refactor-on-our-saysomething-function-call"},"A Refactor on our ",(0,i.kt)("inlineCode",{parentName:"h3"},"saySomething()")," Function Call"),(0,i.kt)("p",null,"If desired, you could refactor those last three lines into one line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'function saySomething(whatToSay) {\n  window.alert(whatToSay);\n}\n\nfunction add(number1, number2) {\n  return number1 + number2;\n}\n\nsaySomething("The sum is " + add(3,5) + ".");\n')),(0,i.kt)("p",null,"That refactored line calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"saySomething()")," function and passes it a string, which is concatenated together from 3 parts. The first part is just the string ",(0,i.kt)("inlineCode",{parentName:"p"},'"The sum is "')," and the last part is just the string ",(0,i.kt)("inlineCode",{parentName:"p"},'"."'),". The second part is the number ",(0,i.kt)("inlineCode",{parentName:"p"},"8")," because that is the return value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"add()")," function when passed the arguments ",(0,i.kt)("inlineCode",{parentName:"p"},"3")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"5"),". Hence the concatenated string: ",(0,i.kt)("inlineCode",{parentName:"p"},'"The sum is 8."')," "),(0,i.kt)("p",null,"In terms of order of operations in the line ",(0,i.kt)("inlineCode",{parentName:"p"},'saySomething("The sum is " + add(3,5) + ".");'),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"add(3,5)")," is called first, and we get the value of ",(0,i.kt)("inlineCode",{parentName:"li"},"8")," returned."),(0,i.kt)("li",{parentName:"ul"},"Then the concatenation of ",(0,i.kt)("inlineCode",{parentName:"li"},'"The sum is "'),", ",(0,i.kt)("inlineCode",{parentName:"li"},"8")," and ",(0,i.kt)("inlineCode",{parentName:"li"},'"."')," happens, letting JavaScript implicitly convert the number ",(0,i.kt)("inlineCode",{parentName:"li"},"8")," into a string."),(0,i.kt)("li",{parentName:"ul"},"Then the function call of ",(0,i.kt)("inlineCode",{parentName:"li"},'saySomething("The sum is 8.")')," happens.")))}u.isMDXComponent=!0}}]);