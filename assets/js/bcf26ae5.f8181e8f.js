"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[92982],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return t?o.createElement(h,i(i({ref:n},u),{},{components:t})):o.createElement(h,i({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},55803:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=t(87462),r=(t(67294),t(3905));const a={title:"Debugging in JavaScript: Using console.log()",id:"debugging-in-javascript-using-consolelog",slug:"debugging-in-javascript-using-consolelog",hide_table_of_contents:!0,sidebar_position:56,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3b_debugging_using_console_log.md"},i=void 0,s={unversionedId:"introduction-to-programming-classic/javascript-and-web-browsers/debugging-in-javascript-using-consolelog",id:"introduction-to-programming-classic/javascript-and-web-browsers/debugging-in-javascript-using-consolelog",title:"Debugging in JavaScript: Using console.log()",description:"This is the second of four lessons on debugging in JavaScript. Previously, we've covered working with your DevTools console open and keeping an eye out for console errors. In this lesson, we've intentionally added two errors to our Mad Libs project so that we can learn how to use console.log() statements to help us debug. In the process, we'll also cover a very common error for JavaScript beginners \u2014 and how to easily spot it.",source:"@site/docs/introduction-to-programming-classic/2_javascript-and-web-browsers/3b-debugging-using-console-log.md",sourceDirName:"introduction-to-programming-classic/2_javascript-and-web-browsers",slug:"/introduction-to-programming-classic/javascript-and-web-browsers/debugging-in-javascript-using-consolelog",permalink:"/introduction-to-programming-classic/javascript-and-web-browsers/debugging-in-javascript-using-consolelog",draft:!1,tags:[],version:"current",sidebarPosition:56,frontMatter:{title:"Debugging in JavaScript: Using console.log()",id:"debugging-in-javascript-using-consolelog",slug:"debugging-in-javascript-using-consolelog",hide_table_of_contents:!0,sidebar_position:56,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3b_debugging_using_console_log.md"},sidebar:"introduction-to-programming-classic",previous:{title:"Other Ways to Organize UI Logic",permalink:"/introduction-to-programming-classic/javascript-and-web-browsers/other-ways-to-organize-ui-logic"},next:{title:"Practice: Forms",permalink:"/introduction-to-programming-classic/javascript-and-web-browsers/practice-forms"}},l={},p=[{value:"Using <code>console.log()</code>",id:"using-consolelog",level:2},{value:"Finding the First Error",id:"finding-the-first-error",level:3},{value:"Finding the Second Error",id:"finding-the-second-error",level:3},{value:"Summary",id:"summary",level:2}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is the second of four lessons on debugging in JavaScript. Previously, we've covered working with your DevTools console open and keeping an eye out for console errors. In this lesson, we've intentionally added two errors to our Mad Libs project so that we can learn how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," statements to help us debug. In the process, we'll also cover a very common error for JavaScript beginners \u2014 and how to easily spot it."),(0,r.kt)("p",null,"This lesson includes instructions for coding along, but you are welcome to simply read through this lesson if you prefer."),(0,r.kt)("h2",{id:"using-consolelog"},"Using ",(0,r.kt)("inlineCode",{parentName:"h2"},"console.log()")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," is a very commonly used tool in the JavaScript developer's toolbox. This method does exactly what it sounds like: logs a message to the console. In order to read the logged messages, the DevTools console must be open. "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"console")," object itself is a Web API (tools/structures that web browsers provide to developers) and it represents and provides access to the browser's DevTools console. We won't work with much beyond the ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log")," method in the program, but there are other properties to explore including other ways to print text to the console. ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/console"},"Check out the reference page for ",(0,r.kt)("inlineCode",{parentName:"a"},"console")," on MDN"),"."),(0,r.kt)("h3",{id:"finding-the-first-error"},"Finding the First Error"),(0,r.kt)("p",null,"Let's drop a few ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," statements into our Mad Libs script file. Remember, ",(0,r.kt)("strong",{parentName:"p"},"we are intentionally adding an error to our Mad Lib's ",(0,r.kt)("inlineCode",{parentName:"strong"},"scripts.js")),". If you are coding along with this lesson, copy and paste the following JS into your ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts.js")," file of your Mad Libs project, and do not change anything in the following code."),(0,r.kt)("div",{class:"filename"},"js/scripts.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'window.onload = function() {\n  // new line below\n  console.log("Script executing!");\n\n  let form = document.querySelector("form");\n  form.onsubmit = function(event) {\n    // new line below\n    console.log("Submit form successfully reached.");\n    const person1Input = document.getElementById("person1Input").value;\n    const person2Input = document.getElementById("person2Input").value;\n    const animalInput= document.getElementById("animalInput").value;\n    const exclamationInput = document.getElementById("exclamationInput").value;\n    const verbInput = document.getElementById("verbInput").value;\n    const nounInput = document.getElementById("nounInput").value;\n    \n    document.querySelector("span#person1a").innerText = person1Input;\n    document.querySelector("span#person1b").innerText = person1Input;\n    document.querySelector("span#person1c").innerText = person1Input;\n    document.querySelector("span#person2a").innerText = person2Input;\n    document.querySelector("span#person2b").innerText = person2Input;\n    document.querySelector("span#animal").innerText = animalInput;\n    document.querySelector("span#verb").innerText = verbInput;\n    document.querySelector("span#noun").innerText = nounInput;\n    document.querySelector("span#exclamation").innerText = exclamationInput;\n    \n    document.querySelector("div#story").removeAttribute("class");\n  };\n};\n')),(0,r.kt)("p",null,"Notice that we've added two new ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," statements to the scripts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'console.log("Script executing!");')," is now the second line of our script. We are using this ",(0,r.kt)("inlineCode",{parentName:"li"},"console.log()")," to confirm our script is running as expected. (We already know our script is executing \u2014 but this is a good way to demonstrate what ",(0,r.kt)("inlineCode",{parentName:"li"},"console.log()")," does.)"),(0,r.kt)("li",{parentName:"ul"},"Next, we put ",(0,r.kt)("inlineCode",{parentName:"li"},'console.log("Submit form successfully reached.");')," inside our ",(0,r.kt)("inlineCode",{parentName:"li"},"onsubmit")," event handler.")),(0,r.kt)("p",null,"Save the script and refresh the page in the browser. Make sure the DevTools console pane is open. We'll see ",(0,r.kt)("inlineCode",{parentName:"p"},"Script executing!")," as expected. Now let's try to submit the form \u2014 but pay very close attention to the console while you do."),(0,r.kt)("p",null,"You'll see that our second message very briefly logs to the console and then disappears. The gif below demonstrates this. So what exactly is happening?"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/debugging-with-js-console-log.gif",alt:"This gif shows the second `console.log` message briefly appear and disappear."})),(0,r.kt)("p",null,"This is a very common error, especially for beginners, and there are a couple of clues that show what's happening."),(0,r.kt)("p",null,"Whenever a result flashes across the screen \u2014 or the console like this \u2014 it suggests that the code is executing correctly but that the page is reloading."),(0,r.kt)("p",null,"Remember that the ",(0,r.kt)("strong",{parentName:"p"},"default behavior")," of a form submission event is to load a new page. That means that by default, the page will refresh unless we prevent that default with ",(0,r.kt)("inlineCode",{parentName:"p"},"event.preventDefault()"),"."),(0,r.kt)("p",null,"There is another subtle but important clue that let's us know when we've forgotten to add ",(0,r.kt)("inlineCode",{parentName:"p"},"event.preventDefault()")," to our code. Check the URL after you submit the form and you'll see a ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," within the URL. The question mark ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," indicates that we've made a GET request with a form. A GET requests means we're making a request to a server, and we'll learn more about this in the future. If we prevent the default behavior of the form, we won't make a GET request. We just stay on the page and no question mark ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," is added to the URL. "),(0,r.kt)("p",null,"Let's fix the issue:"),(0,r.kt)("div",{class:"filename"},"js/scripts.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'window.onload = function() {\n  console.log("Script executing!");\n  let form = document.querySelector("form");\n  form.onsubmit = function(event) {\n    // we\'ve added event.preventDefault(); below\n    event.preventDefault();\n    console.log("Submit form successfully reached.");\n    const person1Input = document.getElementById("person1Input").value;\n    const person2Input = document.getElementById("person2Input").value;\n    const animalInput= document.getElementById("animalInput").value;\n    const exclamationInput = document.getElementById("exclamationInput").value;\n    const verbInput = document.getElementById("verbInput").value;\n    const nounInput = document.getElementById("nounInput").value;\n    \n    document.querySelector("span#person1a").innerText = person1Input;\n    document.querySelector("span#person1b").innerText = person1Input;\n    document.querySelector("span#person1c").innerText = person1Input;\n    document.querySelector("span#person2a").innerText = person2Input;\n    document.querySelector("span#person2b").innerText = person2Input;\n    document.querySelector("span#animal").innerText = animalInput;\n    document.querySelector("span#verb").innerText = verbInput;\n    document.querySelector("span#noun").innerText = nounInput;\n    document.querySelector("span#exclamation").innerText = exclamationInput;\n    \n    document.querySelector("div#story").removeAttribute("class");\n  };\n};\n')),(0,r.kt)("p",null,"We've made one change to our code to fix the issue: we've added ",(0,r.kt)("inlineCode",{parentName:"p"},"event.preventDefault()")," right inside of the ",(0,r.kt)("inlineCode",{parentName:"p"},"onsubmit")," event handler. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," is still at the end of the URL, remove it and anything after it, and refresh the page. For example if you are serving the project with LiveServer, your URL might look like ",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:5501/mad-libs.html?person1Input=Mohammed"),", and you'll want to reset it to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:5501/mad-libs.html"),". If you forget to do this, there shouldn't be an issue, but you should know that your URL won't automatically reset with a page refresh."),(0,r.kt)("p",null,"Now try filling out the form. The text from our fantastical adventure will appear \u2014 and both messages will be properly logged to the console. Finally, check out the URL \u2014 a ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," wasn't added."),(0,r.kt)("p",null,"If you ever find that a form submission isn't working correctly, checking the URL for a question mark is the first \u2014 and easiest \u2014 debugging step."),(0,r.kt)("h3",{id:"finding-the-second-error"},"Finding the Second Error"),(0,r.kt)("p",null,"As noted in the example above, ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," statements can be useful for seeing which code is reached. However, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," for other bugs, too \u2014 including the next issue we are having with our Mad Libs story. Copy and paste the following scripts into your Mad Libs ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts.js")," file. ",(0,r.kt)("strong",{parentName:"p"},"Remember that we're intentionally introducing errors into our scripts, so if you spot the new error, don't fix it!")," The new error is a typo, which is an incredibly common issue in coding and can eat up ",(0,r.kt)("em",{parentName:"p"},"a lot")," of a developer's time. "),(0,r.kt)("div",{class:"filename"},"js/scripts.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'window.onload = function() {\n  let form = document.querySelector("form");\n  form.onsubmit = function(event) {\n    event.preventDefault();\n    const person1Input = document.getElementById("person1Input").value;\n    const person2Input = document.getElementById("person2Input").value;\n    const animalInput= document.getElementById("animalInput").value;\n    const exclamationInput = document.getElementById("exclamationInput").value;\n    const verbInput = document.getElementById("verbInput").value;\n    const nounInput = document.getElementById("nounInput").value;\n    \n    document.querySelector("span#person1a").innerText = person1Input;\n    document.querySelector("span#person1b").innerText = person1Input;\n    document.querySelector("span#person1c").innerText = person1Input;\n    document.querySelector("span#person2a").innerText = person2Input;\n    document.querySelector("span#person2b").innerText = person2Input;\n    document.querySelector("span#animal").innerText = animalInput;\n    document.querySelector("span#verb").inerText = verbInput;\n    document.querySelector("span#noun").innerText = nounInput;\n    document.querySelector("span#exclamation").innerText = exclamationInput;\n    \n    document.querySelector("div#story").removeAttribute("class");\n  };\n};\n')),(0,r.kt)("p",null,"Make sure to save your scripts and refresh your browser opened to the Mad Libs project. Then, fill in the form and submit it. We should see our story display successfully, but with one input missing from the story! Here's how our story looks now (yours will look a little different depending on the words you input into your form):"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"One day, Mohammed and Wei were walking through the woods, when suddenly a giant cat appeared. "woah", Mohammed cried. The two of them ',(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("strong",{parentName:"strong"},"_")),' as quickly as possible, and when they were safe, Mohammed and Wei gave each other a giant banana."')),(0,r.kt)("p",null,"We are getting some input but not all of it. Specifically, the verb isn't showing up. We can see that the underscore ",(0,r.kt)("inlineCode",{parentName:"p"},"__________")," is left in place. "),(0,r.kt)("p",null,"Now it's time to debug this issue! Let's think about where to start. Well, if the default value in the story isn't being updated for the verb, this clearly indicates that there is something wrong in the code that displays the verb value. So, how can we use ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," to help us out? We can log all of the verb-related values to the console and see what shows up as an issue. Copy and paste the following code into your ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts.js"),". Note \u2014 we've removed the ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," statements from the last error, and we've added one new ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," statement. "),(0,r.kt)("div",{class:"filename"},"js/scripts.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'window.onload = function() {\n  let form = document.querySelector("form");\n  form.onsubmit = function(event) {\n    event.preventDefault();\n    const person1Input = document.getElementById("person1Input").value;\n    const person2Input = document.getElementById("person2Input").value;\n    const animalInput= document.getElementById("animalInput").value;\n    const exclamationInput = document.getElementById("exclamationInput").value;\n    const verbInput = document.getElementById("verbInput").value;\n    // Here\'s the first log we add.\n    console.log("verbInput = " + verbInput);\n    const nounInput = document.getElementById("nounInput").value;\n    \n    document.querySelector("span#person1a").innerText = person1Input;\n    document.querySelector("span#person1b").innerText = person1Input;\n    document.querySelector("span#person1c").innerText = person1Input;\n    document.querySelector("span#person2a").innerText = person2Input;\n    document.querySelector("span#person2b").innerText = person2Input;\n    document.querySelector("span#animal").innerText = animalInput;\n    document.querySelector("span#verb").inerText = verbInput;\n    document.querySelector("span#noun").innerText = nounInput;\n    document.querySelector("span#exclamation").innerText = exclamationInput;\n    \n    document.querySelector("div#story").removeAttribute("class");\n  };\n};\n')),(0,r.kt)("p",null,"With this new ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," statement, we are checking the ",(0,r.kt)("inlineCode",{parentName:"p"},"verbInput")," variable we create to make sure that we're successfully getting the input value from the form. Notice that we've added a variable ",(0,r.kt)("em",{parentName:"p"},"and")," text as the argument to this ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," method call: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'console.log("verbInput = " + verbInput);\n')),(0,r.kt)("p",null,"It's helpful to include a descriptive message that explains what the ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log")," is logging. We can combine text and variables using a plus sign ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," or a comma ",(0,r.kt)("inlineCode",{parentName:"p"},","),". "),(0,r.kt)("p",null,"Fill out and submit the form again and look in the DevTools console for the message. We should see something similar to the following:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/debugging-with-consolelog-madlibs-verbInput.png",alt:'This image shows the result of console.log("verbInput = " + verbInput); in the DevTools console.'})),(0,r.kt)("p",null,"Notice in the image above that there's ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts.js:11")," listed. This indicates the location of the ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," in our code, including the file name and the line number."),(0,r.kt)("p",null,'What does this log tell us? The verb we put into the form is "clapped" and we\'ve successfully grabbed it from the form. So, the bug is not here. '),(0,r.kt)("p",null,"The next thing we can look at is the code that handles putting the form into the story:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'    document.querySelector("span#verb").inerText = verbInput;\n')),(0,r.kt)("p",null,"As we look at this line of code, we can check it for typos: are we referencing the same ",(0,r.kt)("inlineCode",{parentName:"p"},"verbInput")," variable? Yes, we are. Are we accessing the correct HTML element? It looks like it... How about the correct property for ",(0,r.kt)("inlineCode",{parentName:"p"},"innerText"),"? Hmmm... that doesn't look right: there's a missing ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"inerTex")," property. A typo! (Don't fix it just yet.) "),(0,r.kt)("p",null,"With this visual review of the code, we may be able to spot the bug. However, if the visual review of the code doesn't definitively locate a bug, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," statements to further verify! Specifically, we can add ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," statements to check all of the questions we ask in the last paragraph. Let's do so now. Copy and paste the following code into your ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts.js"),"."),(0,r.kt)("div",{class:"filename"},"js/scripts.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'window.onload = function() {\n  let form = document.querySelector("form");\n  form.onsubmit = function(event) {\n    event.preventDefault();\n    const person1Input = document.getElementById("person1Input").value;\n    const person2Input = document.getElementById("person2Input").value;\n    const animalInput= document.getElementById("animalInput").value;\n    const exclamationInput = document.getElementById("exclamationInput").value;\n    const verbInput = document.getElementById("verbInput").value;\n    // Here\'s the first log we added.\n    console.log("verbInput = " + verbInput);\n    const nounInput = document.getElementById("nounInput").value;\n    \n    document.querySelector("span#person1a").innerText = person1Input;\n    document.querySelector("span#person1b").innerText = person1Input;\n    document.querySelector("span#person1c").innerText = person1Input;\n    document.querySelector("span#person2a").innerText = person2Input;\n    document.querySelector("span#person2b").innerText = person2Input;\n    document.querySelector("span#animal").innerText = animalInput;\n    // Here are the 3 new logs!\n    console.log("Correctly targeting <span>? = ", document.querySelector("span#verb"));\n    console.log("Correctly targeting innerText? = ", document.querySelector("span#verb").inerText);\n    document.querySelector("span#verb").inerText = verbInput;\n    console.log("Correctly referencing verbInput and assigning value of innerText? = ", document.querySelector("span#verb").inerText);\n    // Above are the 3 new logs!\n    document.querySelector("span#noun").innerText = nounInput;\n    document.querySelector("span#exclamation").innerText = exclamationInput;\n    \n    document.querySelector("div#story").removeAttribute("class");\n  };\n};\n')),(0,r.kt)("p",null,"We've added 3 new ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," statements, each with a different piece of code that's been copy and pasted from the line of code that we're debugging. From top to bottom, this is the purpose of each new log:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When we log ",(0,r.kt)("inlineCode",{parentName:"li"},'document.querySelector("span#verb")'),", we're checking that we're accessing the right element in the DOM. We should get the actual HTML for the span element."),(0,r.kt)("li",{parentName:"ul"},"When we log ",(0,r.kt)("inlineCode",{parentName:"li"},'document.querySelector("span#verb").inerText'),", we're checking the value of the ",(0,r.kt)("inlineCode",{parentName:"li"},"innerText")," property, which lets us know that we're accessing the right property of the span element we want to target. We should get ",(0,r.kt)("inlineCode",{parentName:"li"},"______")," for this value. Note that we do this before the line of code we think the bug is in, because it allows us to see the value of the property ",(0,r.kt)("strong",{parentName:"li"},"before")," we assign it a value."),(0,r.kt)("li",{parentName:"ul"},"Finally, we log ",(0,r.kt)("inlineCode",{parentName:"li"},'document.querySelector("span#verb").inerText')," below the line of code in question, because we want to check the value of the ",(0,r.kt)("inlineCode",{parentName:"li"},"innerText")," property ",(0,r.kt)("strong",{parentName:"li"},"after")," we've assigned a new value to it. This will help confirm that we're referencing the correct property as well as the correct ",(0,r.kt)("inlineCode",{parentName:"li"},"verbInput")," variable. We should get the verb value that we're putting into the story, like ",(0,r.kt)("inlineCode",{parentName:"li"},"clapped")," in our previous example. ")),(0,r.kt)("p",null,"Go ahead and save your scripts, refresh your browser, fill out the form, and submit it. In the DevTools console, we should see four logs (note that your values may look different depending on the words you input into your form): "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/debugging-with-consolelog-madlibs-verbspan.png",alt:'This image shows the result of console.log("verbInput = " + verbInput); in the DevTools console.'})),(0,r.kt)("p",null,"So what can understand from the above logs? A few things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The first log we're already familiar with: we are correctly getting the verb input from the form. This is what we expect to happen."),(0,r.kt)("li",{parentName:"ul"},"The second log confirms that we are correctly accessing the verb's span element in the Mad Libs story output. This is what we expect to happen."),(0,r.kt)("li",{parentName:"ul"},"The third log returns ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined")," which indicates that there's something wrong with how we're accessing the ",(0,r.kt)("inlineCode",{parentName:"li"},"innerText")," property. This is not what we expect to happen. We expect to see ",(0,r.kt)("inlineCode",{parentName:"li"},"______")," returned to us."),(0,r.kt)("li",{parentName:"ul"},"The fourth log returns ",(0,r.kt)("inlineCode",{parentName:"li"},"clapped")," which means that we're at least assigning the ",(0,r.kt)("inlineCode",{parentName:"li"},"innerText")," property correctly. This is what we expect to happen.")),(0,r.kt)("p",null,"Because the third log returns ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"______")," as we expect, this unequivocally means there's something wrong with how we're accessing the ",(0,r.kt)("inlineCode",{parentName:"p"},"innerText")," property. As we figured out earlier, we have a typo: there's a missing ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"inerText"),"."),(0,r.kt)("p",null,"The confusing thing here is that the fourth log returns the correct value we're assigning to the ",(0,r.kt)("inlineCode",{parentName:"p"},"inerText")," property: ",(0,r.kt)("inlineCode",{parentName:"p"},"clapped"),". This is happening because with the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'    document.querySelector("span#verb").inerText = verbInput;\n')),(0,r.kt)("p",null,"We're actually creating a new property for the span element called ",(0,r.kt)("inlineCode",{parentName:"p"},"inerText")," and we're assigning it the value of the verb input, ",(0,r.kt)("inlineCode",{parentName:"p"},"clapped"),". In other words, we can use ",(0,r.kt)("strong",{parentName:"p"},"dot notation")," to access a property of an object, like ",(0,r.kt)("inlineCode",{parentName:"p"},"window.innerHeight"),", as well as to create a brand new property, like ",(0,r.kt)("inlineCode",{parentName:"p"},"window.myCustomProperty"),". And when we have a typo in a property that we're trying to access or assign a value to, like running ",(0,r.kt)("inlineCode",{parentName:"p"},"window.inerHight")," (with two typos), we end up creating a brand new property."),(0,r.kt)("p",null,"To cement this concept, try creating a new property on a Web API. Enter the following code into the DevTools console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> window.myCustomProperty = "hello world";\n> window.myCustomProperty;\n"hello world"\n')),(0,r.kt)("p",null,"With the above code we've created a property called ",(0,r.kt)("inlineCode",{parentName:"p"},"myCustomProperty")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," object. If we refresh the page, this property will be erased, because we can't actually add permanent properties to any Web API. Also note that we don't want to go around creating new properties for Web APIs. Instead we want to use their built-in properties and methods."),(0,r.kt)("p",null,"At this point, we've learned the basics of using ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," to debug our code. Go ahead and fix the typo that in the Mad Libs scripts, save the scripts file, refresh the website, and resubmit the form. Our Mad Libs website should be working correctly again. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Once we are done with our debugging, we always need to remove all ",(0,r.kt)("inlineCode",{parentName:"strong"},"console.log()")," statements from our code base.")," Why? Anyone can open the DevTools console and see messages that are logged there and it makes our webpage look unfinished. That's why it's considered bad practice to leave behind ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," statements from your debugging."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"console.log")," can be a very useful tool, especially for beginning developers. We can use effectively in two cases: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To quickly check if code is being reached."),(0,r.kt)("li",{parentName:"ul"},"To see the value of a variable, just like we did above. ")),(0,r.kt)("p",null,"However, there are two things to consider about this tool. First, it's not as efficient as other debugging tools. It's definitely good to have in our toolbox, but usually it won't be the first tool we reach for. We'll learn about more sophisticated debugging techniques in upcoming lessons."),(0,r.kt)("p",null,"Second, once you are done debugging, you need to go back and remove ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," statements from your code. They won't break anything but they make your finished code look sloppy. They are clear evidence of the debugging process \u2014 and should never be in portfolio-ready or production code. You will always be expected to remove any ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," statements from your independent projects before they are submitted."),(0,r.kt)("p",null,"Lastly, keep in mind that typos are very common and pesky bugs! Don't let them ruin your sense of your capability for computer programming. Instead, do your best to debug, and then reach out for help after you've exhausted your debugging steps. "),(0,r.kt)("img",{alt:"Meme from Reddit about the emotional rollercoaster of typos in code. Source: https://www.reddit.com/r/ProgrammerHumor/comments/n19c2w/every_day_is_like_this/",src:"https://preview.redd.it/dd858tcec5w61.jpg?auto=webp&s=c0c278f3c76570aa0cc04d48a3b84e703b48a574",style:{width:"50%%"}}))}d.isMDXComponent=!0}}]);