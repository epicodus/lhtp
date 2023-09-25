"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[67330],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?o.createElement(g,i(i({ref:t},d),{},{components:n})):o.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={title:"Separation of Logic: Adding a UI to Text Analyzer",id:"separation_of_logic_adding_a_ui_to_text_analyzer",slug:"separation_of_logic_adding_a_ui_to_text_analyzer",hide_table_of_contents:!0,sidebar_position:29,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3_arrays-and-looping/2f_separation_of_logic_adding_a_ui.md"},i=void 0,s={unversionedId:"introduction_to_programming_classic/arrays-and-looping/separation_of_logic_adding_a_ui_to_text_analyzer",id:"introduction_to_programming_classic/arrays-and-looping/separation_of_logic_adding_a_ui_to_text_analyzer",title:"Separation of Logic: Adding a UI to Text Analyzer",description:'Over the last two lessons, we used test-driven development to build some basic functionality for a word counter program called "Text Analyzer". This program can count the number of words in a passage of text and also count the number of occurrences of that word.',source:"@site/docs/introduction_to_programming_classic/3_arrays-and-looping/2f_separation_of_logic_adding_a_ui.md",sourceDirName:"introduction_to_programming_classic/3_arrays-and-looping",slug:"/introduction_to_programming_classic/arrays-and-looping/separation_of_logic_adding_a_ui_to_text_analyzer",permalink:"/lhtp/introduction_to_programming_classic/arrays-and-looping/separation_of_logic_adding_a_ui_to_text_analyzer",draft:!1,tags:[],version:"current",sidebarPosition:29,frontMatter:{title:"Separation of Logic: Adding a UI to Text Analyzer",id:"separation_of_logic_adding_a_ui_to_text_analyzer",slug:"separation_of_logic_adding_a_ui_to_text_analyzer",hide_table_of_contents:!0,sidebar_position:29,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3_arrays-and-looping/2f_separation_of_logic_adding_a_ui.md"},sidebar:"introduction_to_programming_classic",previous:{title:"Practice: Extending Text Analyzer Business Logic with TDD",permalink:"/lhtp/introduction_to_programming_classic/arrays-and-looping/practice_extending_text_analyzer_business_logic_with_tdd"},next:{title:"Separation of Logic: Fixing a Bug in Text Analyzer",permalink:"/lhtp/introduction_to_programming_classic/arrays-and-looping/separation_of_logic_fixing_a_bug_in_text_analyzer"}},l={},c=[{value:"Adding a User Interface",id:"adding-a-user-interface",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Over the last two lessons, we used test-driven development to build some basic functionality for a word counter program called "Text Analyzer". This program can count the number of words in a passage of text and also count the number of occurrences of that word.'),(0,r.kt)("p",null,"In this lesson, we'll add a user interface for our application, paying close attention to separation of logic as we go."),(0,r.kt)("p",null,"Spoiler alert: because of the way we're designing our application, it's going to be much easier to keep our logic separate. That's because we've written and tested our business logic completely separately from our user interface."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Make sure to code along with this lesson and the next 3 that follow. All of these lessons focus on creating Text Analyzer's UI logic. In the upcoming practice lesson, you'll be tasked with adding more functionality to this project.")),(0,r.kt)("h2",{id:"adding-a-user-interface"},"Adding a User Interface"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Let's start by adding our UI files. Here are all the files that ",(0,r.kt)("inlineCode",{parentName:"p"},"text-analyzer")," should include:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"index.html\njs/scripts.js\ncss/styles.css\nREADME.md\n")),(0,r.kt)("p",null,"Note the file paths above: the ",(0,r.kt)("inlineCode",{parentName:"p"},"js")," directory should contain ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts.js")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"css")," directory should contain ",(0,r.kt)("inlineCode",{parentName:"p"},"styles.css"),". We'll incorporate Bootstrap into our UI, and we'll do so via a CDN, so we don't need to include local files for that library. You are always welcome to include Bootstrap directly in the project if you prefer."),(0,r.kt)("p",null,"Here's our ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts.js")," file so far:"),(0,r.kt)("div",{class:"filename"},"js/scripts.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Business Logic\n\nfunction wordCounter(text) {\n  if (text.trim().length === 0) {\n    return 0;\n  }\n  let wordCount = 0;\n  const textArray = text.split(" ");\n  textArray.forEach(function(element) {\n    if (!Number(element)) {\n      wordCount++;\n    }\n  });\n  return wordCount;\n}\n\nfunction numberOfOccurrencesInText(word, text) {\n  const textArray = text.split(" ");\n  let wordCount = 0;\n  textArray.forEach(function(element) {\n    if (element.toLowerCase().includes(word.toLowerCase())) {\n      wordCount++;\n    }\n  });\n  return wordCount;\n}\n\n// UI Logic\n')),(0,r.kt)("p",null,"We have two functions that we can plug into our user interface where needed."),(0,r.kt)("p",null,"Note that we've also added a comment at the end of the file for UI Logic. We will put all of our UI logic below this line. Again, you won't see this comment in real-world code bases but it will help us keep things separate for now. As we've mentioned previously, we'll learn how to separate our business and user interface logic into different files in Intermediate JavaScript."),(0,r.kt)("p",null,"Next, let's add a basic HTML file called ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html"),"."),(0,r.kt)("div",{class:"filename"},"index.html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <title>Text Analyzer</title>\n  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">\n  <link href="css/styles.css" rel="stylesheet" type="text/css">\n  <script src="js/scripts.js"><\/script>\n</head>\n<body>\n  <div class="container">\n    <h2>Text Analyzer</h2>\n    <form id="word-counter">\n      <div class="form-group">\n        <p>Input a text passage to get a total word count:</p>\n        <textarea id="text-passage" name="text-passage" class="form-control"></textarea>\n        <p>Optionally enter a word to count the number of times it occurs in the passage:</p>\n        <input type="text" id="word" name="word" class="form-control">\n        <br />\n        <button type="submit" class="btn btn-success">Submit Survey</button>\n      </div>\n    </form>\n    <p>Total Word Count: <span id="total-count"></span></p>\n    <br />\n    <p>Selected Word Count: <span id="selected-count"></span></p>\n    <div id="bolded-passage">\n\n    </div>\n  </div>\n</body>\n</html>\n')),(0,r.kt)("p",null,"This includes a form with a ",(0,r.kt)("inlineCode",{parentName:"p"},"textarea")," (a larger ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," field) for the text passage as well as a simple text field for inputting a word."),(0,r.kt)("p",null,"Note also that we've included a ",(0,r.kt)("inlineCode",{parentName:"p"},"div")," with ",(0,r.kt)("inlineCode",{parentName:"p"},'id="bolded-passage"'),". This is where the results will go for some functionality that we will be adding later to further demonstrate how to separate logic."),(0,r.kt)("p",null,"Now let's get to work on our UI logic. Add this code below the UI Logic comment in ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts.js"),":"),(0,r.kt)("div",{class:"filename"},"js/scripts.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// UI Logic\n\nfunction handleFormSubmission() {\n  event.preventDefault();\n  const passage = document.getElementById("text-passage").value;\n  const word = document.getElementById("word").value;\n  const wordCount = wordCounter(passage);\n  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);\n  document.getElementById("total-count").innerText = wordCount;\n  document.getElementById("selected-count").innerText = occurrencesOfWord;\n}\n\nwindow.addEventListener("load", function() {\n  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);\n});\n')),(0,r.kt)("p",null,"First notice that we've separated all of the code that responds to the form submission into its own UI function called ",(0,r.kt)("inlineCode",{parentName:"p"},"handleFormSubmission()"),". We then pass that function as the callback when we create the event listener for the form's submit event."),(0,r.kt)("p",null,"When a form is submitted, the ",(0,r.kt)("inlineCode",{parentName:"p"},"handleFormSubmission()")," function will be called. First, we'll grab the form input values for ",(0,r.kt)("inlineCode",{parentName:"p"},"passage")," (the entire text) and ",(0,r.kt)("inlineCode",{parentName:"p"},"word"),". Then we'll call our ",(0,r.kt)("inlineCode",{parentName:"p"},"wordCounter()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"numberOfOccurrencesInText()")," functions and update the ",(0,r.kt)("inlineCode",{parentName:"p"},"HTMLElement.innerText")," property of two spans to update the webpage with the results."),(0,r.kt)("p",null,"Our code is very nicely separated. Let's try out our Text Analyzer webpage in the browser. Be forewarned, though. There is a bug! See if you can figure out what it is before moving on."),(0,r.kt)("p",null,"In the next lesson, we'll discuss this bug, walk through the debugging process, and then fix it. But we recommend seeing if you can find the bug, figure out what the problem is, and fix it on your own before moving to the next lesson. Don't be hard on yourself if you can't find it. Just look at it as an opportunity to practice debugging."))}p.isMDXComponent=!0}}]);