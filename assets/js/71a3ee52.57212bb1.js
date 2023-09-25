"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[22205],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},48198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Basic Project Structure",id:"basic_project_structure",slug:"basic_project_structure",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/5_test-driven-development/0c_project_structure.md"},o=void 0,l={unversionedId:"intermediate_javascript_part_time_evening/test-driven-development/basic_project_structure",id:"intermediate_javascript_part_time_evening/test-driven-development/basic_project_structure",title:"Basic Project Structure",description:"Over the course of this section, we will build an application called Shape Tracker based on the Triangle Tracker project from the Introduction to Programming course. There's a good chance you have a repo with your own triangle project, but even if you don't (or it's not working), don't worry. We will walk through the project step by step.",source:"@site/docs/intermediate_javascript_part_time_evening/5_test-driven-development/0c_project_structure.md",sourceDirName:"intermediate_javascript_part_time_evening/5_test-driven-development",slug:"/intermediate_javascript_part_time_evening/test-driven-development/basic_project_structure",permalink:"/lhtp/intermediate_javascript_part_time_evening/test-driven-development/basic_project_structure",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Basic Project Structure",id:"basic_project_structure",slug:"basic_project_structure",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/5_test-driven-development/0c_project_structure.md"},sidebar:"intermediate_javascript_part_time_evening",previous:{title:"Modern JavaScript Development",permalink:"/lhtp/intermediate_javascript_part_time_evening/test-driven-development/modern_javascript_development"},next:{title:"Future Project Structure",permalink:"/lhtp/intermediate_javascript_part_time_evening/test-driven-development/future_project_structure"}},s={},c=[{value:"Project Structure",id:"project-structure",level:2},{value:"HTML",id:"html",level:3},{value:"JS",id:"js",level:3},{value:"CSS",id:"css",level:3},{value:"We Create Development Environments to Handle Complex Codebases",id:"we-create-development-environments-to-handle-complex-codebases",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Over the course of this section, we will build an application called ",(0,a.kt)("strong",{parentName:"p"},"Shape Tracker")," based on the ",(0,a.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/javascript-and-web-browsers/practice-triangle-tracker"},"Triangle Tracker")," project from the Introduction to Programming course. There's a good chance you have a repo with your own triangle project, but even if you don't (or it's not working), don't worry. We will walk through the project step by step. "),(0,a.kt)("p",null,"This course section is not about learning JavaScript itself. While we will learn about some new JavaScript features, our main goal is learning how to use JavaScript libraries and external tools to build our projects. This is what we'll build, step by step:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"We'll start with building a full-fledged development environment for our application. "),(0,a.kt)("li",{parentName:"ol"},"Then, we'll create business logic using test-driven development. We'll use Jest to write automated tests."),(0,a.kt)("li",{parentName:"ol"},"Finally, we'll update our user interface logic and learn tools to manage images and other files.")),(0,a.kt)("p",null,"You are welcome to code along with the weekend homework, or just read through the lessons. In class, the very first classwork lesson will prompt you to work through these lessons to build the development environment for the Shape Tracker project."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do not make any commits or push your code just yet!")," We will be learning some additional Git best practices in just a few lessons in ",(0,a.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/intermediate-javascript/test-driven-development-and-environments-with-javascript/git-best-practices-and-adding-a-gitignore-file"},"Git Best Practices and Adding a ",(0,a.kt)("inlineCode",{parentName:"a"},".gitignore")," File"),". In that lesson, we'll prompt you to make your first commit."),(0,a.kt)("h2",{id:"project-structure"},"Project Structure"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"First, we'll need some starter code. We'll start with a similar structure to what we've used in the past. Go ahead and create a project with the following structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"shape-tracker/\n\u251c\u2500\u2500 index.html\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 triangle.js\n\u2514\u2500\u2500 css\n    \u2514\u2500\u2500 styles.css\n")),(0,a.kt)("p",null,"We have an ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," file, a CSS stylesheet, and two JavaScript logic files, one for the user interface and one for the business logic. However, a few things are different:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We are calling this ",(0,a.kt)("inlineCode",{parentName:"li"},"shape-tracker"),", not ",(0,a.kt)("inlineCode",{parentName:"li"},"triangle-tracker"),", because we will eventually expand our application to include other shapes. "),(0,a.kt)("li",{parentName:"ul"},"We're using a few new naming conventions:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Our user interface logic will go in a file called ",(0,a.kt)("inlineCode",{parentName:"li"},"index.js"),". This is a common naming convention for entry point files with webpack. But that's getting ahead of ourselves \u2014 we don't need to know about webpack yet! Just know that we are using the naming convention now to help make the transition to webpack go smoothly. "),(0,a.kt)("li",{parentName:"ul"},"We call the directory holding our JavaScript files ",(0,a.kt)("inlineCode",{parentName:"li"},"src")," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"js"),". Both are fine but ",(0,a.kt)("inlineCode",{parentName:"li"},"src")," is a common naming convention in the industry.")))),(0,a.kt)("h3",{id:"html"},"HTML"),(0,a.kt)("p",null,"First let's add the HTML:"),(0,a.kt)("div",{class:"filename"},"index.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <script type="text/javascript" src="src/index.js"><\/script>\n  <script type="text/javascript" src="src/triangle.js"><\/script>\n  <link rel="stylesheet" href="css/styles.css">\n  <title>Shape Tracker</title>\n</head>\n<body>\n  <h3>Enter three lengths to determine if they can make a triangle.</h3>\n  <form id="triangle-checker-form">\n    <label for="length1">Enter a number:</label>\n    <input id="length1" type="number">\n    <label for="length2">Enter a number:</label>\n    <input id="length2" type="number">\n    <label for="length3">Enter a number:</label>\n    <input id="length3" type="number">\n    <button type="submit">Submit</button>\n  </form>\n  <div id="response"></div>\n</body>\n</html>\n')),(0,a.kt)("p",null,"There's not much to see here \u2014 a form for getting three length values and a div that will display the response from the application. "),(0,a.kt)("p",null,"One thing worth noting is that we now have two script tags for JavaScript \u2014 plus we are linking to a CSS file as well. What if our application was also handling ten other shapes and they each had their own file? Well, that would be ten more script tags. And what if we had multiple stylesheets? Even more links to files. We barely have any code so far so it's easy to see how things can get cluttered very quickly. But that's one of many reasons we are switching to using a development environment \u2014 it makes managing many files an easier and more automated process."),(0,a.kt)("h3",{id:"js"},"JS"),(0,a.kt)("p",null,"Next, we'll add the JS in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," directory. Here's the business logic for ",(0,a.kt)("inlineCode",{parentName:"p"},"triangle.js"),":"),(0,a.kt)("div",{class:"filename"},"src/triangle.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function Triangle(side1, side2, side3) {\n  this.side1 = side1;\n  this.side2 = side2;\n  this.side3 = side3;\n}\n\nTriangle.prototype.checkType = function() {\n  return "I can\'t answer that yet!";\n}\n')),(0,a.kt)("p",null,"We add just enough code to be able to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," object and call the ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle.prototype.checkType()")," method. For now, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle.prototype.checkType()")," method just returns ",(0,a.kt)("inlineCode",{parentName:"p"},'"I can\'t answer that yet!"'),". Later we'll update this code when we start exploring test-driven development with Jest."),(0,a.kt)("p",null,"Here's our user interface logic that we'll add to ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js"),":"),(0,a.kt)("div",{class:"filename"},"src/index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function handleTriangleForm() {\n  event.preventDefault();\n  document.querySelector('#response').innerText = null;\n  const length2 = parseInt(document.querySelector('#length2').value);\n  const length1 = parseInt(document.querySelector('#length1').value);\n  const length3 = parseInt(document.querySelector('#length3').value);\n  const triangle = new Triangle(length1, length2, length3);\n  const response = triangle.checkType();\n  const pTag = document.createElement(\"p\");\n  pTag.append(response);\n  document.querySelector('#response').append(pTag);\n}\n\nwindow.addEventListener(\"load\", function() {\n  document.querySelector(\"#triangle-checker-form\").addEventListener(\"submit\", handleTriangleForm);\n});\n")),(0,a.kt)("p",null,"You may find it surprising that we can separate our user interface logic and business logic into two separate files and our application still works as expected. For example, how does the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleTriangleForm()")," function know what the ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle()")," constructor is, if it's not declared in the same function? "),(0,a.kt)("p",null,"Well, when our browser loads our ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," file, it loads all of the links and scripts listed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," tags."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<head>\n  <script type="text/javascript" src="src/index.js"><\/script>\n  <script type="text/javascript" src="src/triangle.js"><\/script>\n  <link rel="stylesheet" href="css/styles.css">\n  <title>Shape Tracker</title>\n</head>\n')),(0,a.kt)("p",null,"And the contents of these files ultimately get added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," object, and they are available globally in the project. This is what allows us to call ",(0,a.kt)("inlineCode",{parentName:"p"},"new Triangle(length1, length2, length3);")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," even though the ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle()")," constructor is declared in another file. "),(0,a.kt)("p",null,"Later when we use webpack, we'll see this behavior change because our JavaScript will not be added directly to the global ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," object. But we'll wait to discuss that in depth until we get to the relevant code!"),(0,a.kt)("h3",{id:"css"},"CSS"),(0,a.kt)("p",null,"Finally, here's our CSS file. There's just enough code to let us know that it's connected and working."),(0,a.kt)("div",{class:"filename"},"css/styles.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"body {\n  background-color:'lightblue';\n}\n")),(0,a.kt)("p",null,"Ahh, light blue. Very relaxing. Don't forget to take care of yourself and take a deep breath during those moments when the problem solving gets tough and frustrating."),(0,a.kt)("h3",{id:"we-create-development-environments-to-handle-complex-codebases"},"We Create Development Environments to Handle Complex Codebases"),(0,a.kt)("p",null,"We can now open our project in the browser and see what we have:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/TDD-2020/first-triangle-tracker-pic.png",alt:"Our very rudimentary shape tracker application."})),(0,a.kt)("p",null,"Well, that's really not much. But we needed four files and nearly fifty lines of code to do next to nothing. Would this way of doing things work with an application like Flickr? No way. "),(0,a.kt)("p",null,"Imagine our little application eventually becoming a full-fledged app that teaches kids about different kinds of shapes \u2014 an app that could easily run to thousands of lines of code. "),(0,a.kt)("p",null,"Let's take it a step further. What if it were part of a math application for schools K through 12, ranging from simple addition and shapes to algebra and calculus? Make that application interactive, add logins for students, allow teachers to track student progress and administrators to track teacher progress, and... well, you get the picture. That application would be huge. It simply wouldn't work to use the code structure we've used so far."),(0,a.kt)("p",null,"In the next lesson, we'll start the process of transitioning our application to one with a fully-functioning development environment \u2014 the kind of environment we'll commonly see at tech companies."))}d.isMDXComponent=!0}}]);