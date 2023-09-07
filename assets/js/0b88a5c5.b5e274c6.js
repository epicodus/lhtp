"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[7987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"11. ES6 Imports and Exports",id:"es6_imports_and_exports",slug:"es6_imports_and_exports",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/4_test-driven-development-and-environments-with-javascript/0k_es6_imports_and_exports.md"},o=void 0,s={unversionedId:"intermediate_javascript/test-driven-development-and-environments-with-javascript/es6_imports_and_exports",id:"intermediate_javascript/test-driven-development-and-environments-with-javascript/es6_imports_and_exports",title:"11. ES6 Imports and Exports",description:"When we build our code, how does webpack know which files are dependencies? Going back to our example of the peanut butter and jelly sandwich example, how do we let webpack know that jelly.js needs blueberry.js to work properly?",source:"@site/docs/intermediate_javascript/4_test-driven-development-and-environments-with-javascript/0k_es6_imports_and_exports.md",sourceDirName:"intermediate_javascript/4_test-driven-development-and-environments-with-javascript",slug:"/intermediate_javascript/test-driven-development-and-environments-with-javascript/es6_imports_and_exports",permalink:"/lhtp/intermediate_javascript/test-driven-development-and-environments-with-javascript/es6_imports_and_exports",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"11. ES6 Imports and Exports",id:"es6_imports_and_exports",slug:"es6_imports_and_exports",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/4_test-driven-development-and-environments-with-javascript/0k_es6_imports_and_exports.md"},sidebar:"intermediate_javascript",previous:{title:"10. Configuring webpack and Using npm Scripts",permalink:"/lhtp/intermediate_javascript/test-driven-development-and-environments-with-javascript/configuring_webpack_and_using_npm_scripts"},next:{title:"12. Bundling JavaScript",permalink:"/lhtp/intermediate_javascript/test-driven-development-and-environments-with-javascript/bundling_javascript"}},l={},p=[{value:"<code>require</code> Statements and Module Exports",id:"require-statements-and-module-exports",level:2},{value:"Importing and Exporting Code",id:"importing-and-exporting-code",level:2},{value:"Default Exports",id:"default-exports",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When we build our code, how does webpack know which files are dependencies? Going back to our example of the peanut butter and jelly sandwich example, how do we let webpack know that ",(0,i.kt)("inlineCode",{parentName:"p"},"jelly.js")," needs ",(0,i.kt)("inlineCode",{parentName:"p"},"blueberry.js")," to work properly?"),(0,i.kt)("p",null,"While we previously used our HTML file to connect and load all of our project's dependencies (JS, CSS, and any other files we might need for our project to run), this process doesn't work for webpack. Instead, webpack works directly with our JS, CSS, and other files through a specified entry point to bundle them into one package. Then, we write a ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," tag in our HTML that connects to this bundle. We haven't done this yet, but we will soon! "),(0,i.kt)("p",null,"The takeaway here is that we can't rely on our HTML to connect and load our project's dependencies. Instead, we need to be able to connect them directly to one another, so webpack can handle loading and bundling them."),(0,i.kt)("p",null,"To do this, we need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," statements in our code. These statements are a nice piece of functionality that was added to EcmaScript6 (the technical name for version 6 of JavaScript), which came out in 2015. In this lesson, we'll learn how to use these statements. We'll also spend time learning about an earlier way of achieving the same functionality with ",(0,i.kt)("inlineCode",{parentName:"p"},"require")," statements and module exports. Then, in the next lesson we'll update the Shape Tracker project to use modern JavaScript's ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," statements so that webpack can bundle our JavaScript files. "),(0,i.kt)("h2",{id:"require-statements-and-module-exports"},(0,i.kt)("inlineCode",{parentName:"h2"},"require")," Statements and Module Exports"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Before ES6, developers used NodeJS ",(0,i.kt)("inlineCode",{parentName:"p"},"require")," statements to share logic between files. We've already seen a ",(0,i.kt)("inlineCode",{parentName:"p"},"require")," statement in our ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," file in the following line: "),(0,i.kt)("div",{class:"filename"},"webpack.config.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\n\n...\n")),(0,i.kt)("p",null,"Now let's take a closer look and work through some examples to understand what ",(0,i.kt)("inlineCode",{parentName:"p"},"require")," statements and module exports do. ",(0,i.kt)("strong",{parentName:"p"},"Do not add any of the following examples to your own code.")," We're working through the following examples to understand the NodeJS way of connecting files."),(0,i.kt)("p",null,"Let's say we want to include our ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," constructor in our user interface logic (",(0,i.kt)("inlineCode",{parentName:"p"},"index.js"),"). First, we'd create a module export."),(0,i.kt)("div",{class:"filename"},"triangle.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function Triangle(side1, side2, side3) {\n  this.side1 = side1;\n  this.side2 = side2;\n  this.side3 = side3;\n}\n\nTriangle.prototype.checkType = function() {\n  return \"I can't answer that yet!\";\n};\n\n// The following code is new.\n// Don't add this to your own code.\nexports.triangleModule = Triangle; \n")),(0,i.kt)("p",null,"Let's look at the final line of code in this snippet. We take the ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," constructor (on the right side) and assign it as a property to the ",(0,i.kt)("inlineCode",{parentName:"p"},"exports")," object, calling it ",(0,i.kt)("inlineCode",{parentName:"p"},"triangleModule"),"."),(0,i.kt)("p",null,"Now we can import the ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," constructor into our user interface logic like this:"),(0,i.kt)("div",{class:"filename"},"index.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const Triangle = require('./triangle.js').triangleModule;\n")),(0,i.kt)("p",null,"We use the ",(0,i.kt)("inlineCode",{parentName:"p"},"require")," statement to get the ",(0,i.kt)("inlineCode",{parentName:"p"},"triangleModule")," from the specified relative path. Note that the relative path will vary depending on the project. In our project, ",(0,i.kt)("inlineCode",{parentName:"p"},"index.js")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"triangle.js")," are in the same directory so the relative path is ",(0,i.kt)("inlineCode",{parentName:"p"},"./"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"triangleModule")," is saved in a variable so it can be used in this file. "),(0,i.kt)("p",null,"With these changes, when we tell webpack to bundle our code with ",(0,i.kt)("inlineCode",{parentName:"p"},"$ npm run build"),", webpack will be able to locate the ",(0,i.kt)("inlineCode",{parentName:"p"},"triangle.js")," as a dependency of ",(0,i.kt)("inlineCode",{parentName:"p"},"index.js"),", and both files will be added to the bundle. "),(0,i.kt)("p",null,"Also, in ",(0,i.kt)("inlineCode",{parentName:"p"},"index.js")," when we write the following code, invoking the ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," constructor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const triangle = new Triangle(3,3,3);\n")),(0,i.kt)("p",null,"Here, ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," actually refers to our ",(0,i.kt)("inlineCode",{parentName:"p"},"triangleModule")," \u2014 ",(0,i.kt)("em",{parentName:"p"},"not")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," constructor itself. However, since the ",(0,i.kt)("inlineCode",{parentName:"p"},"triangleModule")," has been set to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," constructor, they are essentially the same thing."),(0,i.kt)("h2",{id:"importing-and-exporting-code"},"Importing and Exporting Code"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Why bother to learn about ",(0,i.kt)("inlineCode",{parentName:"p"},"require")," statements when we aren't going to use them in our own code? There are two reasons."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You will see ",(0,i.kt)("inlineCode",{parentName:"p"},"require")," statements a lot in other code, especially server-side Node code. They are all over the place and you need to recognize them and understand how they work.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"import")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," statements, which we will be using, are just syntactic sugar for ",(0,i.kt)("inlineCode",{parentName:"p"},"require")," statements. They are just using ",(0,i.kt)("inlineCode",{parentName:"p"},"require")," under the hood."))),(0,i.kt)("p",null,"Here's how we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," instead. ",(0,i.kt)("strong",{parentName:"p"},"Note: even though we will be using this in our code, you don't need to add it now \u2014 this lesson is for demonstration purposes.")),(0,i.kt)("div",{class:"filename"},"triangle.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'export function Triangle(side1, side2, side3) {\n  this.side1 = side1;\n  this.side2 = side2;\n  this.side3 = side3;\n}\n\nTriangle.prototype.checkType = function() {\n  return "I can\'t answer that yet!";\n};\n')),(0,i.kt)("div",{class:"filename"},"index.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Triangle } from './triangle.js';\n")),(0,i.kt)("p",null,"We specify that we want to ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," constructor in our business logic file. Then we specify that we want to ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," the constructor in our user interface logic file. As we can see, it's a little bit cleaner than using ",(0,i.kt)("inlineCode",{parentName:"p"},"require")," statements."),(0,i.kt)("p",null,"We can also have multiple export statements in a single file like this:"),(0,i.kt)("div",{class:"filename"},"shapes.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export function Triangle(side1, side2, side3) {\n  ...\n}\n\nexport function Circle(radius) {\n  ...\n}\n\nexport function Rectangle(side1, side2) {\n  ...\n}\n")),(0,i.kt)("p",null,"Then we'd import all the shapes like this:"),(0,i.kt)("div",{class:"filename"},"index.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Triangle, Rectangle, Circle } from './shapes.js';\n")),(0,i.kt)("p",null,"Note that in our own code, we will separate shapes out into their own files. However, there are plenty of situations where you might be exporting multiple things from a file (such as multiple different functions, whether a constructor for an object type, or just a function)."),(0,i.kt)("p",null,"The exports in the examples above are called ",(0,i.kt)("strong",{parentName:"p"},"named exports"),". This is because the name of the thing being exported ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"must")," match")," the name of the thing being imported. We can't say: ",(0,i.kt)("inlineCode",{parentName:"p"},"import { Thingy } from './../js/shape.js';")," and expect JavaScript to know we mean ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle"),"."),(0,i.kt)("h3",{id:"default-exports"},"Default Exports"),(0,i.kt)("p",null,"If we only plan to export one thing from a file, we can use a ",(0,i.kt)("strong",{parentName:"p"},"default export")," instead. For instance, let's say the only thing we plan to export from ",(0,i.kt)("inlineCode",{parentName:"p"},"triangle.js")," is the ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," constructor function. We can do the following: "),(0,i.kt)("div",{class:"filename"},"triangle.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default function Triangle(side1, side2, side3) {\n  ...\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Remember, this only works if we are exporting only one thing from a file \u2014 and we must include the ",(0,i.kt)("inlineCode",{parentName:"strong"},"default")," keyword.")),(0,i.kt)("p",null,"When we use default exports, we have to make a small but significant change to our import statements as well:"),(0,i.kt)("div",{class:"filename"},"index.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Triangle from './triangle.js';\n")),(0,i.kt)("p",null,"Note that we no longer use curly braces ",(0,i.kt)("inlineCode",{parentName:"p"},"{ }")," around the thing we are importing. In fact, because we are importing a default, we don't even need to call it ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle"),". We could do something like this:"),(0,i.kt)("div",{class:"filename"},"index.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import MyTriangle from './../js/triangle.js';\n")),(0,i.kt)("p",null,"It is very important to be able to distinguish between named exports and default exports. "),(0,i.kt)("p",null,"We ",(0,i.kt)("em",{parentName:"p"},"can")," do the following with a default export: ",(0,i.kt)("inlineCode",{parentName:"p"},"import Thingy from './../js/shape.js';"),". That's because JavaScript knows that only one thing is being imported from the file so we can call it whatever we want. However, it's better to keep the naming consistent to avoid confusion. That means we will generally keep the name exactly the same even though we don't have to."),(0,i.kt)("p",null,"Make sure you understand the difference between named exports and default exports \u2014 as well as the subtle but significant difference between the import syntax for both. These little differences trip up many developers."),(0,i.kt)("p",null,"While ES6's implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," statements is really just syntactic sugar over the traditional way of doing things (using ",(0,i.kt)("inlineCode",{parentName:"p"},"require")," statements), utilizing these features can make your code cleaner, more organized, and easier to read. You should recognize both ways of importing and exporting code, but we'll focus on using ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," while at Epicodus."),(0,i.kt)("p",null,"One other thing to note: some browsers don't understand ",(0,i.kt)("inlineCode",{parentName:"p"},"require")," statements or ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," statements. Evergreen browsers like Chrome do, but in the real world, many people aren't using Chrome \u2014 and may even be using a legacy browser that doesn't support this syntax. Fortunately, webpack will take care of that for us! This is where ",(0,i.kt)("strong",{parentName:"p"},"concatenating")," files comes into the picture. We'll cover that in the next lesson."))}u.isMDXComponent=!0}}]);