"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[38382],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={title:"4. DRYing Code and Completing the Text Analyzer UI",id:"drying_code_and_completing_the_text_analyzer_ui",slug:"drying_code_and_completing_the_text_analyzer_ui",hide_table_of_contents:!0,sidebar_position:30,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/5_arrays-and-looping/2i_dry_code_and_finishing_text_analyzer.md"},i=void 0,l={unversionedId:"introduction_to_programming_part_time/arrays-and-looping/drying_code_and_completing_the_text_analyzer_ui",id:"introduction_to_programming_part_time/arrays-and-looping/drying_code_and_completing_the_text_analyzer_ui",title:"4. DRYing Code and Completing the Text Analyzer UI",description:"In the last lesson, we focused on the importance of keeping our business logic and UI logic separate. We could've updated our numberOfOccurrencesInText() function to do multiple things but this is a bad practice. A function should just do one thing if possible. We want to have separation of concerns, which means each function is concerned about just one thing and doesn't worry about anything else. That means numberOfOccurrencesInText() just cares about counting the number of occurrences of a substring in a string while boldPassage() should bold matches. Writing a function that did both things wouldn't be good even if it results in fewer lines of code.",source:"@site/docs/introduction_to_programming_part_time/5_arrays-and-looping/2i_dry_code_and_finishing_text_analyzer.md",sourceDirName:"introduction_to_programming_part_time/5_arrays-and-looping",slug:"/introduction_to_programming_part_time/arrays-and-looping/drying_code_and_completing_the_text_analyzer_ui",permalink:"/lhtp/introduction_to_programming_part_time/arrays-and-looping/drying_code_and_completing_the_text_analyzer_ui",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"4. DRYing Code and Completing the Text Analyzer UI",id:"drying_code_and_completing_the_text_analyzer_ui",slug:"drying_code_and_completing_the_text_analyzer_ui",hide_table_of_contents:!0,sidebar_position:30,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/5_arrays-and-looping/2i_dry_code_and_finishing_text_analyzer.md"},sidebar:"introduction_to_programming_part_time",previous:{title:"3. Separation of Concerns in Text Analyzer: boldPassage() UI Function",permalink:"/lhtp/introduction_to_programming_part_time/arrays-and-looping/separation_of_concerns_in_text_analyzer_boldpassage_ui_function"},next:{title:"5. Homework: Equality Versus Equity",permalink:"/lhtp/introduction_to_programming_part_time/arrays-and-looping/homework_equality_versus_equity"}},s={},c=[{value:"Finding a Balance between DRY Code and Code that Is Separated by Concern",id:"finding-a-balance-between-dry-code-and-code-that-is-separated-by-concern",level:2},{value:"Completing our UI Logic",id:"completing-our-ui-logic",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the last lesson, we focused on the importance of keeping our business logic and UI logic separate. We could've updated our ",(0,a.kt)("inlineCode",{parentName:"p"},"numberOfOccurrencesInText()")," function to do multiple things but this is a bad practice. A function should just do one thing if possible. We want to have ",(0,a.kt)("strong",{parentName:"p"},"separation of concerns"),", which means each function is concerned about just one thing and doesn't worry about anything else. That means ",(0,a.kt)("inlineCode",{parentName:"p"},"numberOfOccurrencesInText()")," just cares about counting the number of occurrences of a substring in a string while ",(0,a.kt)("inlineCode",{parentName:"p"},"boldPassage()")," should bold matches. Writing a function that did both things wouldn't be good even if it results in fewer lines of code."),(0,a.kt)("p",null,"In this lesson, we're going to discuss another very important programming concept known as ",(0,a.kt)("strong",{parentName:"p"},"DRY"),", which means ",(0,a.kt)("strong",{parentName:"p"},"Don't Repeat Yourself"),". There are a lot of good reasons not to repeat yourself:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It results in unnecessary repeated code."),(0,a.kt)("li",{parentName:"ul"},"It's harder to read and reason about because there's extra repeated code to deal with and read."),(0,a.kt)("li",{parentName:"ul"},"If the code breaks or it needs to be updated, we have to change it in multiple places, not just one.")),(0,a.kt)("p",null,"If you really practice separating concerns and keeping your code DRY, you are making a ",(0,a.kt)("em",{parentName:"p"},"huge")," step towards writing amazing code that clearly communicates your intentions. These are some of the most important techniques you can learn as a coder. "),(0,a.kt)("p",null,"So, let's start by reviewing how DRY our Text Analyzer application is. We'll also discuss tradeoffs and considerations when writing code that's both DRY and separated by concerns. Then, we'll end this lesson by completing our UI logic. "),(0,a.kt)("h2",{id:"finding-a-balance-between-dry-code-and-code-that-is-separated-by-concern"},"Finding a Balance between DRY Code and Code that Is Separated by Concern"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"If we review our Text Analyzer scripts, we can find a fair amount of repetition. For example, our two business logic functions and the ",(0,a.kt)("inlineCode",{parentName:"p"},"boldPassage()")," UI function perform similar tasks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Checking whether the ",(0,a.kt)("inlineCode",{parentName:"li"},"word")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"text")," parameters are empty."),(0,a.kt)("li",{parentName:"ul"},"Splitting the text input into an array."),(0,a.kt)("li",{parentName:"ul"},"Looping through each element of the text array to perform different actions on it.")),(0,a.kt)("p",null,"As you might guess, sometimes separating our code makes it harder not to repeat ourselves. If we'd just put this all in one function, it would be DRY but have poor separation of logic. With good separation of logic, though, it's not as DRY. ",(0,a.kt)("strong",{parentName:"p"},"Often, the best way to handle this is to ",(0,a.kt)("em",{parentName:"strong"},"extract")," any repeated code into its own function.")),(0,a.kt)("p",null,"So, let's DRY up our code in a small way: we'll extract the first conditional we use to check whether the ",(0,a.kt)("inlineCode",{parentName:"p"},"word")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"text")," parameters are empty into its own function. "),(0,a.kt)("p",null,"First, let's put these functions next to each other. Notice how the conditionals are similar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Business Logic\n\nfunction wordCounter(text) {\n  if (text.trim().length === 0) {\n    return 0;\n  }\n  ...\n  return wordCount;\n}\n\nfunction numberOfOccurrencesInText(word, text) {\n  if (word.trim().length === 0) {\n    return 0;\n  }\n  ...\n  return wordCount;\n}\n\nfunction boldPassage(word, text) {\n  if ((text.trim().length === 0) || (word.trim().length === 0)) {\n    return null;\n  }\n  ...\n  return p;\n}\n")),(0,a.kt)("p",null,"There's two main differences: what each conditional returns and the number of parameters we check. But this won't be a problem \u2014 we can easily accommodate these differences."),(0,a.kt)("p",null,"We'll extract the functionality of the conditional into its own function, and we will put this at the top of our file and call it ",(0,a.kt)("em",{parentName:"p"},"Utility Logic"),". You'll see the reason for the name later in this lesson."),(0,a.kt)("div",{class:"filename"},"scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Utility Logic\n\nfunction isEmpty(testString) {\n  return (testString.trim().length === 0);\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"isEmpty()")," function returns a boolean. If any inputted string is empty, it will return ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". Otherwise, it will return ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,"Next, we can plug it into our functions. Here's how we do it:"),(0,a.kt)("div",{class:"filename"},"scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Business Logic\n\nfunction wordCounter(text) {\n  if (isEmpty(text)) {\n    return 0;\n  }\n  ...\n  return wordCount;\n}\n\nfunction numberOfOccurrencesInText(word, text) {\n  if (isEmpty(word)) {\n    return 0;\n  }\n  ...\n  return wordCount;\n}\n\nfunction boldPassage(word, text) {\n  if (isEmpty(word) || isEmpty(text)) {\n    return null;\n  }\n  ...\n  return p;\n}\n")),(0,a.kt)("p",null,"As we can see, instead of checking ",(0,a.kt)("inlineCode",{parentName:"p"},"word.trim().length === 0"),", our code now checks ",(0,a.kt)("inlineCode",{parentName:"p"},"isEmpty(word)"),"."),(0,a.kt)("p",null,"Hmm... doesn't seem like much of an improvement. Is it really worth it?"),(0,a.kt)("p",null,"Well, imagine if we were using that same code in ten different functions and we realized that we also wanted to account for punctuation. For instance, if someone enters the following: ",(0,a.kt)("inlineCode",{parentName:"p"},'numberOfOccurrencesInText("!", ".");'),", we want ",(0,a.kt)("inlineCode",{parentName:"p"},"isEmpty()")," to return ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", not ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". Would you rather update that code in one place (the ",(0,a.kt)("inlineCode",{parentName:"p"},"isEmpty()")," function) or in ten different functions? Also, what if in the process of updating the code in ten different places, you missed an eleventh place in the code that needed to be updated as well? These are the sort of scenarios that we need to think about when we're writing JavaScript."),(0,a.kt)("p",null,"In other situations you'll find that you're able to DRY up a much larger chunk of code. For instance, imagine that we have many different functions that all verify that every input is an actual English word. Imagine that this verification process involves a lot of different steps. Extracting this English-verifying functionality into a separate function that we can then call from any function that needs it makes a lot of sense. "),(0,a.kt)("p",null,"So while refactoring our code to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"isEmpty()")," function is a very small example of DRYing our code, it illustrates the basic principle of extracting repeated code into its own function."),(0,a.kt)("p",null,"These kinds of functions are sometimes known as ",(0,a.kt)("strong",{parentName:"p"},"helper")," or ",(0,a.kt)("strong",{parentName:"p"},"utility")," functions. You should look for these kinds of opportunities to DRY up your code wherever possible. And again, while the example here is a very small one, it illustrates how we can keep our code DRY with helper functions while still keeping our business and user interface logic separate."),(0,a.kt)("h2",{id:"completing-our-ui-logic"},"Completing our UI Logic"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"There's one more thing we need to do to get our application working. We've written our ",(0,a.kt)("inlineCode",{parentName:"p"},"boldPassage()")," function but we aren't calling it yet. It needs to be called when the form is submitted, so we'll add it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleFormSubmission()")," UI function:"),(0,a.kt)("div",{class:"filename"},"scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'...\n\nfunction handleFormSubmission() {\n  event.preventDefault();\n  const passage = document.getElementById("text-passage").value;\n  const word = document.getElementById("word").value;\n  const wordCount = wordCounter(passage);\n  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);\n  document.getElementById("total-count").innerText = wordCount;\n  document.getElementById("selected-count").innerText = occurrencesOfWord;\n  // new lines here!\n  let boldedPassage = boldPassage(word, passage);\n  if (boldedPassage) {\n    document.querySelector("div#bolded-passage").append(boldedPassage);\n  } else {\n    document.querySelector("div#bolded-passage").innerText = null;\n  }\n}\n\nwindow.addEventListener("load", function() {\n  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);\n});\n')),(0,a.kt)("p",null,"Look how nice and clean that is! No logic cluttering up this section of the code at all. Instead, it's totally separated out. Even though ",(0,a.kt)("inlineCode",{parentName:"p"},"boldPassage()")," is a function that deals with UI logic, it doesn't directly alter the DOM. It just returns a paragraph element. That makes it easy to test and easy to separate out. Then we can just call the function when we need it, and then use ",(0,a.kt)("inlineCode",{parentName:"p"},"Element.append()")," to actually add it to the DOM."),(0,a.kt)("p",null,"Notice that we only update the DOM if the ",(0,a.kt)("inlineCode",{parentName:"p"},"boldedPassage")," variable (the result from calling ",(0,a.kt)("inlineCode",{parentName:"p"},"boldPassage()"),") is truthy. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"boldedPassage")," variable is ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," or any other falsey value, the code in the else block will run, setting the contents of the div to ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", deleting anything inside of it including any HTML elements."),(0,a.kt)("p",null,"And with that, we've completely connected all of the logic for our Text Analyzer application. Hooray! Our code is nicely separated and we even added a little utility function to DRY things up a bit."),(0,a.kt)("p",null,"In a future lesson, we'll create a brand new function for our Text Analyzer application that uses a ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop. We'll also use a ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop when we explore JavaScript's ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments"},"arguments object")," to expand the capacity of the ",(0,a.kt)("inlineCode",{parentName:"p"},"isEmpty()")," function. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Visit the cheat sheet to see the completed scripts and HTML for the Text Analyzer application.")))}p.isMDXComponent=!0}}]);