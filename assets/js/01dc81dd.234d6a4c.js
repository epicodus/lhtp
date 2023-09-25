"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[78406],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"Working with Multiple Business Logic Files",id:"working_with_multiple_business_logic_files",slug:"working_with_multiple_business_logic_files",hide_table_of_contents:!0,sidebar_position:40,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/2f_working_with_multiple_files.md"},s=void 0,l={unversionedId:"intermediate_javascript/test-driven-development-and-environments-with-javascript/working_with_multiple_business_logic_files",id:"intermediate_javascript/test-driven-development-and-environments-with-javascript/working_with_multiple_business_logic_files",title:"Working with Multiple Business Logic Files",description:"As our projects get bigger, we'll need to break up our code into multiple files. Doing this \u2014 and managing our tests as well as our import and export statements \u2014 can be tough for beginners. For that reason, we'll walk through the process by adding functionality for calculating the area of a rectangle to our shape-tracker application.",source:"@site/docs/intermediate_javascript/4_test-driven-development-and-environments-with-javascript/2f_working_with_multiple_files.md",sourceDirName:"intermediate_javascript/4_test-driven-development-and-environments-with-javascript",slug:"/intermediate_javascript/test-driven-development-and-environments-with-javascript/working_with_multiple_business_logic_files",permalink:"/intermediate_javascript/test-driven-development-and-environments-with-javascript/working_with_multiple_business_logic_files",draft:!1,tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Working with Multiple Business Logic Files",id:"working_with_multiple_business_logic_files",slug:"working_with_multiple_business_logic_files",hide_table_of_contents:!0,sidebar_position:40,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/2f_working_with_multiple_files.md"},sidebar:"intermediate_javascript",previous:{title:"ES6 Template Literals",permalink:"/intermediate_javascript/test-driven-development-and-environments-with-javascript/es6_template_literals"},next:{title:"Creating a Template Repository",permalink:"/intermediate_javascript/test-driven-development-and-environments-with-javascript/creating_a_template_repository"}},o={},c=[{value:"Project Structure",id:"project-structure",level:2},{value:"Updating to ES6 Classes",id:"updating-to-es6-classes",level:2},{value:"Writing and Passing Our First Test",id:"writing-and-passing-our-first-test",level:2},{value:"DRYing Up Our Tests",id:"drying-up-our-tests",level:2},{value:"Updating the UI",id:"updating-the-ui",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As our projects get bigger, we'll need to break up our code into multiple files. Doing this \u2014 and managing our tests as well as our import and export statements \u2014 can be tough for beginners. For that reason, we'll walk through the process by adding functionality for calculating the area of a rectangle to our ",(0,r.kt)("inlineCode",{parentName:"p"},"shape-tracker")," application. "),(0,r.kt)("p",null,"In the process, we'll use ES6 classes and update our application so the UI can check if three lengths make a triangle ",(0,r.kt)("em",{parentName:"p"},"and")," calculate the area of a rectangle. As we add this new functionality, our goal is to keep our code modular and well-organized. The principles we apply here can be used for any number of business logic and test files."),(0,r.kt)("p",null,"We are adding simple functionality to our application, and it would be easy to just shove the new code into the files we already have. However, that would be a bad move. In the real world, we need to think about ",(0,r.kt)("strong",{parentName:"p"},"scalability"),". Specifically, how can we make our applications scale up and grow bigger with a minimum amount of pain points? While we should have a general road map for how an application might expand, we can't predict everything the application might need. If it's a successful application, it will likely look very different in five years than it does now. For that reason, we always need to build with an eye on the future. "),(0,r.kt)("p",null,"A helpful analogy for coding with scalability in mind is the process of building an apartment building. If it has a strong foundation, we can add more stories to it in the future. If it has a weak foundation, it will need major overhauls, or worse, we might need to start from scratch, all in order for us to keep building. When an application with a weak foundation starts running into scalability problems, it can lead to major headaches for businesses even just a year later \u2014 pain points, wasted developer time, less time spent on new features that users want right now. And if competitors are already building those features while problems arise for the users on our app, they will quickly desert the application."),(0,r.kt)("p",null,"It's a fact that modular code scales better and is easier to read. When code is modular, we can fix individual units, or modules, of code without disrupting the whole application. There are fewer issues with global scope and fewer bugs. Developers can work more efficiently on different parts of the codebase, and they'll be able to communicate better, too."),(0,r.kt)("h2",{id:"project-structure"},"Project Structure"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We already have most of the files we need. Because we're only adding a small amount of functionality, we'll just need two new files. We'll also add a new directory to house all of our ",(0,r.kt)("inlineCode",{parentName:"p"},"js")," business logic, because it's always better to organize our code in directories."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/js/rectangle.js"),": This will contain the business logic for a ",(0,r.kt)("inlineCode",{parentName:"li"},"Rectangle")," class."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"__tests__/rectangle.test.js"),": This will contain the test suite for tests related to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Rectangle")," class.")),(0,r.kt)("p",null,"Add the new ",(0,r.kt)("inlineCode",{parentName:"p"},"js")," directory and the two new files to the project now. "),(0,r.kt)("p",null,"Also, don't forget to move ",(0,r.kt)("inlineCode",{parentName:"p"},"triangle.js")," into the ",(0,r.kt)("inlineCode",{parentName:"p"},"js")," directory. We don't need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"js")," directory, because it's our entry point file."),(0,r.kt)("p",null,"VS Code has a handy little feature where it can automatically update any import statements in the code for you. Here's an example of the prompt (though this one is for ",(0,r.kt)("inlineCode",{parentName:"p"},"rectangle.js"),")."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/TDD-2020/separating-files/automatically-update-imports.png",alt:"VSCode prompt offers to automatically update imports."})),(0,r.kt)("p",null,"If you want to do it manually (or VS Code doesn't automatically update the import statements), the relative path for the ",(0,r.kt)("inlineCode",{parentName:"p"},"triangle.js")," import statement in ",(0,r.kt)("inlineCode",{parentName:"p"},"triangle.test.js")," looks like this:"),(0,r.kt)("div",{class:"filename"},"__tests__/triangle.test.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Triangle from './../src/js/triangle.js';\n")),(0,r.kt)("p",null,"We'll update import statements in the UI logic (",(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),") later in this lesson."),(0,r.kt)("h2",{id:"updating-to-es6-classes"},"Updating to ES6 Classes"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Before we move on, let's update the code in ",(0,r.kt)("inlineCode",{parentName:"p"},"triangle.js")," to use ES6 classes:"),(0,r.kt)("div",{class:"filename"},"src/js/triangle.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'export default class Triangle {\n  constructor(side1, side2, side3) {\n    this.side1 = side1;\n    this.side2 = side2;\n    this.side3 = side3;\n  }\n\n  checkType() {\n    if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {\n      return "not a triangle";\n    } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {\n      return "scalene triangle";\n    }  else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {\n      return "equilateral triangle";\n    } else {\n      return "isosceles triangle";\n    }\n  }    \n}\n')),(0,r.kt)("p",null,"Because we've made a code update, we should verify that our tests still pass. And they do. Thanks to our tests, we can be assured that everything is still working correctly after refactoring our code."),(0,r.kt)("h2",{id:"writing-and-passing-our-first-test"},"Writing and Passing Our First Test"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Because we are using a test-driven approach, our next step is to write a test. We'll start with a test for a ",(0,r.kt)("inlineCode",{parentName:"p"},"Rectangle")," constructor:"),(0,r.kt)("div",{class:"filename"},"src/rectangle.test.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Rectangle from '../src/js/rectangle.js';\n\ndescribe('Rectangle', () => {\n\n  test('should correctly create a rectangle object using two sides', () => {\n    const rectangle = new Rectangle(3,5);\n    expect(rectangle.side1).toEqual(3);\n    expect(rectangle.side2).toEqual(5);\n  });\n});\n")),(0,r.kt)("p",null,"Because a rectangle has two pairs of sides, each with equal length, we'll only need to pass in two sides as parameters."),(0,r.kt)("p",null,"Next, we'll run ",(0,r.kt)("inlineCode",{parentName:"p"},"$ npm run test")," to fail our test. As expected, this test will fail, but it should be clear by this point that it's a bad fail:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"TypeError: _rectangle.default is not a constructor\n")),(0,r.kt)("p",null,"There's no constructor yet! Let's add just enough code to have a good fail."),(0,r.kt)("div",{class:"filename"},"src/js/rectangle.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default class Rectangle {\n  constructor() {\n  }\n}\n")),(0,r.kt)("p",null,"We just add and export a ",(0,r.kt)("inlineCode",{parentName:"p"},"Rectangle")," class with an empty constructor. Now when we run ",(0,r.kt)("inlineCode",{parentName:"p"},"$ npm run test"),", we'll get a good fail:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"expect(received).toEqual(expected) // deep equality\n\n    Expected: 3\n    Received: undefined\n")),(0,r.kt)("p",null,"With this fail, we've reached our expectation and we know our code is properly wired up."),(0,r.kt)("p",null,"Next, let's get the code passing by adding parameters and statements to our constructor:"),(0,r.kt)("div",{class:"filename"},"src/js/rectangle.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default class Rectangle {\n  constructor(side1, side2) {\n    this.side1 = side1;\n    this.side2 = side2;\n  }\n}\n")),(0,r.kt)("p",null,"Let's run our tests again, and we'll find that everything is passing."),(0,r.kt)("p",null,"By the way, note that we use the same parameters as we do for triangles (",(0,r.kt)("inlineCode",{parentName:"p"},"side1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"side2"),"). Imagine, for a moment, the havoc that would occur if these variables were globally scoped. It's very common to reuse variable and property names. Thankfully, we can scope them locally."),(0,r.kt)("p",null,"Next, we'll need to write a test for our only method:"),(0,r.kt)("div",{class:"filename"},"__tests__/rectangle.test.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Rectangle from '../src/js/rectangle.js';\n\ndescribe('Rectangle', () => {\n\n  ...\n\n  test('should correctly get the area of a rectangle object', () => {\n    const rectangle = new Rectangle(3,5);\n    expect(rectangle.getArea()).toEqual(15);\n  });\n});\n")),(0,r.kt)("p",null,"If we run our tests now, we'll get a bad fail:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"TypeError: rectangle.getArea is not a function\n")),(0,r.kt)("p",null,"Our new method doesn't exist yet \u2014 of course testing something that doesn't exist will result in a fail, and a bad one. We'll add the scaffolding for a ",(0,r.kt)("inlineCode",{parentName:"p"},"getArea()")," method to get a good fail:"),(0,r.kt)("div",{class:"filename"},"src/js/rectangle.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default class Rectangle {\n  constructor(side1, side2) {\n    this.side1 = side1;\n    this.side2 = side2;\n  }\n\n  getArea() {\n    \n  }\n}\n")),(0,r.kt)("p",null,"When we run ",(0,r.kt)("inlineCode",{parentName:"p"},"$ npm run test")," again, we'll get a failure message that lets us know that our expectation statement has been reached:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"expect(received).toEqual(expected) // deep equality\n\n    Expected: 15\n    Received: undefined\n")),(0,r.kt)("p",null,"That's much better! Finally, let's add the code to get the test passing:"),(0,r.kt)("div",{class:"filename"},"src/js/rectangle.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"...\n  getArea() {\n    return this.side1 * this.side2;\n  }\n...\n")),(0,r.kt)("p",null,"With this code in place, we can run ",(0,r.kt)("inlineCode",{parentName:"p"},"$ npm run test")," and all our tests will be passing."),(0,r.kt)("h2",{id:"drying-up-our-tests"},"DRYing Up Our Tests"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We should always look for an opportunity to refactor our code. Our source code looks fine but we can DRY up our tests a bit because we are using some repeated code: ",(0,r.kt)("inlineCode",{parentName:"p"},"const rectangle = new Rectangle(3,5);"),". If we were to build out our code further and add more tests, it would be nice to have a reusable rectangle. This also gives us an opportunity to practice using Jest's ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeEach()")," function in our code. Here's the updated tests refactored to use ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeEach()"),":"),(0,r.kt)("div",{class:"filename"},"__tests__/rectangle.test.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Rectangle from '../src/js/rectangle.js';\n\ndescribe('Rectangle', () => {\n  let rectangle;\n\n  beforeEach(() => {\n    rectangle = new Rectangle(3,5);\n  });\n\n  test('should correctly create a rectangle object using two sides', () => {\n    expect(rectangle.side1).toEqual(3);\n    expect(rectangle.side2).toEqual(5);\n  });\n\n  test('should correctly get the area of a rectangle object', () => {\n    expect(rectangle.getArea()).toEqual(15);\n  });\n});\n")),(0,r.kt)("h2",{id:"updating-the-ui"},"Updating the UI"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Now that we have all tests passing, we're ready to update our UI. As we mentioned earlier in the lesson, ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," is not in our ",(0,r.kt)("inlineCode",{parentName:"p"},"src/js")," directory \u2014 it's in ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," because it's our entry point file."),(0,r.kt)("div",{class:"filename"},"src/index.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import 'bootstrap';\nimport 'bootstrap/dist/css/bootstrap.min.css';\nimport './css/styles.css';\nimport Triangle from './js/triangle.js';\nimport Rectangle from './js/rectangle.js';\n\nfunction handleTriangleForm() {\n  event.preventDefault();\n  document.querySelector('#response').innerText = null;\n  const length1 = parseInt(document.querySelector('#length1').value);\n  const length2 = parseInt(document.querySelector('#length2').value);\n  const length3 = parseInt(document.querySelector('#length3').value);\n  const triangle = new Triangle(length1, length2, length3);\n  const response = triangle.checkType();\n  const pTag = document.createElement(\"p\");\n  pTag.append(`Your result is: ${response}.`);\n  document.querySelector('#response').append(pTag);\n}\n\nfunction handleRectangleForm() {\n  event.preventDefault();\n  document.querySelector('#response2').innerText = null;\n  const length1 = parseInt(document.querySelector('#rect-length1').value);\n  const length2 = parseInt(document.querySelector('#rect-length2').value);\n  const rectangle = new Rectangle(length1, length2);\n  const response = rectangle.getArea();\n  const pTag = document.createElement(\"p\");\n  pTag.append(`The area of the rectangle is ${response}.`);\n  document.querySelector('#response2').append(pTag);\n}\n\nwindow.addEventListener(\"load\", function() {\n  document.querySelector(\"#triangle-checker-form\").addEventListener(\"submit\", handleTriangleForm);\n  document.querySelector(\"#rectangle-area-form\").addEventListener(\"submit\", handleRectangleForm);\n});\n")),(0,r.kt)("p",null,"There are a few key things to note:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We ",(0,r.kt)("inlineCode",{parentName:"li"},"import")," both ",(0,r.kt)("inlineCode",{parentName:"li"},"Triangle")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Rectangle")," at the top of the file. As our projects grow in size and our UI needs access to more business logic files, we'd add more import statements here."),(0,r.kt)("li",{parentName:"ul"},"When we append the result to our P tags, we use template literals to include a message.")),(0,r.kt)("p",null,"Let's also add a new form for calculating the area of a rectangle."),(0,r.kt)("div",{class:"filename"},"src/index.html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<!DOCTYPE html>\n<html>\n<head>\n  <title>Shape Tracker</title>\n</head>\n<body>\n  <h3>Enter three lengths to determine if they can make a triangle.</h3>\n  <form id="triangle-checker-form">\n    <label for="length1">Enter a number:</label>\n    <input id="length1" type="number">\n    <label for="length2">Enter a number:</label>\n    <input id="length2" type="number">\n    <label for="length3">Enter a number:</label>\n    <input id="length3" type="number">\n    <button type="submit">Submit</button>\n  </form>\n  <ul id="response"></ul>\n  <h3>Enter the lengths of a rectangle\'s two sides to determine its area.</h3>\n  <form id="rectangle-area-form">\n    <label for="rect-length1">Enter a number:</label>\n    <input id="rect-length1" type="number">\n    <label for="rect-length2">Enter a number:</label>\n    <input id="rect-length2" type="number">\n    <button type="submit">Submit</button>\n  </form>\n  <ul id="response2"></ul>\n</body>\n</html>\n')),(0,r.kt)("p",null,"And that's really it! It's not a fancy UI but everything is wired together correctly. Most importantly, this lesson should provide a clearer picture of how we can have multiple business logic files working with our UI and tests."),(0,r.kt)("p",null,"Remember, whenever a file needs access to a function, class, or some other code from another file, we just need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"export")," statements. We can use these in ",(0,r.kt)("em",{parentName:"p"},"any")," JavaScript file. For instance, we might have a business logic file that imports a function from another business logic file. In that case, ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"export")," statements are applicable in the exact same way."),(0,r.kt)("p",null,"As you build out a bigger project, take the time to break up your business logic into smaller, more modular files and then use import and export statements as needed; webpack will take care of the rest!"),(0,r.kt)("p",null,"Below is a repository for the complete project."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-5-shape-tracker/tree/3_multiple_business_logic_files"},(0,r.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for Shape Tracker"))),(0,r.kt)("p",null,"Make sure to use the branch titled ",(0,r.kt)("inlineCode",{parentName:"p"},"3_multiple_business_logic_files")," as your point of reference. As needed, review the lesson on ",(0,r.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/intermediate-javascript/object-oriented-javascript/accessing-code-from-different-branches"},"accessing code from different branches"),"."))}d.isMDXComponent=!0}}]);