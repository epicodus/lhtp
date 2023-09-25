"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[97140],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>w});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,w=p["".concat(l,".").concat(h)]||p[h]||c[h]||a;return n?o.createElement(w,i(i({ref:t},d),{},{components:n})):o.createElement(w,i({ref:t},d))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},10434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={title:"Text Analyzer with TDD: wordCounter()",id:"text_analyzer_with_tdd_wordcounter",slug:"text_analyzer_with_tdd_wordcounter",hide_table_of_contents:!0,sidebar_position:26,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3_arrays-and-looping/2c_text_analyzer_tdd_part_1.md"},i=void 0,s={unversionedId:"introduction_to_programming/arrays-and-looping/text_analyzer_with_tdd_wordcounter",id:"introduction_to_programming/arrays-and-looping/text_analyzer_with_tdd_wordcounter",title:"Text Analyzer with TDD: wordCounter()",description:"In the last lesson, we wrote a very basic function for counting words in a paragraph. It doesn't work very well. It doesn't care about the difference between numbers and words in a string. It returns 1 even when we pass in an empty string. So let's keep working on this function and make it better. We're ready to actually start building our application.",source:"@site/docs/introduction_to_programming/3_arrays-and-looping/2c_text_analyzer_tdd_part_1.md",sourceDirName:"introduction_to_programming/3_arrays-and-looping",slug:"/introduction_to_programming/arrays-and-looping/text_analyzer_with_tdd_wordcounter",permalink:"/lhtp/introduction_to_programming/arrays-and-looping/text_analyzer_with_tdd_wordcounter",draft:!1,tags:[],version:"current",sidebarPosition:26,frontMatter:{title:"Text Analyzer with TDD: wordCounter()",id:"text_analyzer_with_tdd_wordcounter",slug:"text_analyzer_with_tdd_wordcounter",hide_table_of_contents:!0,sidebar_position:26,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3_arrays-and-looping/2c_text_analyzer_tdd_part_1.md"},sidebar:"introduction_to_programming",previous:{title:"Overview of Test-Driven Development (TDD) with Text Analyzer",permalink:"/lhtp/introduction_to_programming/arrays-and-looping/overview_of_test_driven_development_tdd_with_text_analyzer"},next:{title:"Text Analyzer with TDD: numberOfOccurrencesInText()",permalink:"/lhtp/introduction_to_programming/arrays-and-looping/text_analyzer_with_tdd_numberofoccurrencesintext"}},l={},u=[{value:"Setting Up the &quot;Text Analyzer&quot; Example Project",id:"setting-up-the-text-analyzer-example-project",level:2},{value:"Our Third <code>wordCounter()</code> Test",id:"our-third-wordcounter-test",level:3},{value:"Our Fourth <code>wordCounter()</code> Test",id:"our-fourth-wordcounter-test",level:3},{value:"Our Fifth <code>wordCounter()</code> Test",id:"our-fifth-wordcounter-test",level:3}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the last lesson, we wrote a very basic function for counting words in a paragraph. It doesn't work very well. It doesn't care about the difference between numbers and words in a string. It returns ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," even when we pass in an empty string. So let's keep working on this function and make it better. We're ready to actually start building our application."),(0,r.kt)("p",null,"In this lesson, we'll complete the tests and functionality for the Text Analyzer's ",(0,r.kt)("inlineCode",{parentName:"p"},"wordCounter()")," function. Then, in the next lesson, we'll create a new function for our Text Analyzer project using TDD. The goal of these lessons is to demonstrate the TDD process, including all of the decisions we need to make along the way. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You should code along with this and the following lessons that build out the Text Analyzer project. In the upcoming practice lesson, you'll be tasked with adding more functionality to this project.")," "),(0,r.kt)("h2",{id:"setting-up-the-text-analyzer-example-project"},'Setting Up the "Text Analyzer" Example Project'),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Create a directory called ",(0,r.kt)("inlineCode",{parentName:"p"},"text-analyzer")," with two files: a ",(0,r.kt)("inlineCode",{parentName:"p"},"README.md")," and a directory called ",(0,r.kt)("inlineCode",{parentName:"p"},"js")," that includes a ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts.js")," file. Over the next several lessons, you'll follow along with building the ",(0,r.kt)("inlineCode",{parentName:"p"},"text-analyzer")," application."),(0,r.kt)("p",null,"If you're wondering why there is no ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," file or ",(0,r.kt)("inlineCode",{parentName:"p"},"css")," directory, it's because we aren't ready for them yet. ",(0,r.kt)("strong",{parentName:"p"},"Test-driven development is all about building your business logic first.")," It doesn't necessarily mean that ",(0,r.kt)("em",{parentName:"p"},"all")," business logic has to be created before a user interface. However, if we start mingling business logic and user interface right now, we'll probably run into problems. We'll likely have issues with separation of logic. We might also end up with bugs in our code that are hard to track. For instance, if something isn't working, we might not be able to tell whether the error is in our business logic or user interface logic because everything is mixed up and we haven't tested it."),(0,r.kt)("p",null,"Here's our ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts.js")," file so far based on the code we covered in the last lesson:"),(0,r.kt)("div",{class:"filename"},"js/scripts.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Business Logic\n\nfunction wordCounter(text) {\n  let wordCount = 0;\n  const textArray = text.split(" ");\n  textArray.forEach(function(word) {\n    wordCount++;\n  });\n  return wordCount;\n}\n')),(0,r.kt)("p",null,"A quick reminder: as we stated in the last lesson, we are going back to using a loop because we need the practice. We've also added the comment ",(0,r.kt)("inlineCode",{parentName:"p"},"// Business Logic")," to make it easier to see how our business and UI logic are separated because they are in the same file. We're just using this comment for clarity and organization \u2014 it's not something you'll see in real-world code bases. In Intermediate JavaScript, we'll learn to separate our code into different files and we won't need these comments anymore."),(0,r.kt)("p",null,"We mentioned this in the last lesson, but you may have missed it: all of our pseudocode tests should go in our README. Here's what the tests in our ",(0,r.kt)("inlineCode",{parentName:"p"},"README.md")," should look like so far:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Describe: wordCounter()\n\nTest: "It should return 1 if a passage has just one word."\nCode:\nconst text = "hello";\nwordCounter(text);\nExpected Output: 1\n\nTest: "It should return 2 if a passage has two words."\nCode:\nconst text = "hello there";\nwordCounter(text);\nExpected Output: 2\n')),(0,r.kt)("p",null,"Note that this ",(0,r.kt)("em",{parentName:"p"},"isn't")," a complete README. It's just the two pseudocode tests we have created so far for the ",(0,r.kt)("inlineCode",{parentName:"p"},"wordCounter()")," function. You are still responsible for adding any other README information for your projects."),(0,r.kt)("h3",{id:"our-third-wordcounter-test"},"Our Third ",(0,r.kt)("inlineCode",{parentName:"h3"},"wordCounter()")," Test"),(0,r.kt)("p",null,"Let's deal with the next simplest behavior. There are actually several different behaviors we could tackle next, so don't get too caught up on whether one behavior is simpler to implement than another if the distinction is not obvious. There is no preset route to building an application with TDD. Just do your best to implement one small behavior at a time."),(0,r.kt)("p",null,"We'll start by dealing with the fact our function will return ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," for an empty string. Here's the pseudocode test:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Test: "It should return 0 for an empty string."\nCode: wordCounter("");\nExpected Output: 0\n')),(0,r.kt)("p",null,"Note that this test still belongs to the group of tests we've written so far, which means it doesn't have a separate line for ",(0,r.kt)("strong",{parentName:"p"},"Describe"),". Also, we've put the code inline because there's just one line of code. How you format your own pseudocode tests is up to you. Just make sure they are easy to read."),(0,r.kt)("p",null,"Now let's update the code. We encourage you to write the solution yourself."),(0,r.kt)("div",{class:"filename"},"js/scripts.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Business Logic\n\nfunction wordCounter(text) {\n  if (text.length === 0) {\n    return 0;\n  }\n  let wordCount = 0;\n  const textArray = text.split(" ");\n  textArray.forEach(function(word) {\n    wordCount++;\n  });\n  return wordCount;\n}\n')),(0,r.kt)("p",null,"All we need to do is write a conditional that checks if the length of ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," is equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),". If it is, the function will return ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),". If we try ",(0,r.kt)("inlineCode",{parentName:"p"},'wordCounter("");')," in the console, it will return ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," as expected. "),(0,r.kt)("h3",{id:"our-fourth-wordcounter-test"},"Our Fourth ",(0,r.kt)("inlineCode",{parentName:"h3"},"wordCounter()")," Test"),(0,r.kt)("p",null,"So now we're ready to move on. Or are we? Think carefully. Have we solved the empty string problem fully yet?"),(0,r.kt)("p",null,"Try this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> wordCounter("            ");\n')),(0,r.kt)("p",null,"According to our function, that's 13 words. Not good. We could update our empty string test or write a new one. To be thorough and practice, we'll write a new test. Again, we are taking baby steps here."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Test: "It should return 0 for a string that is only spaces."\nCode: wordCounter("            ");\nExpected Output: 0\n')),(0,r.kt)("p",null,"It's a quick fix:"),(0,r.kt)("div",{class:"filename"},"js/scripts.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Business Logic\n\nfunction wordCounter(text) {\n  if (text.trim().length === 0) {\n    return 0;\n  }\n  let wordCount = 0;\n  const textArray = text.split(" ");\n  textArray.forEach(function(word) {\n    wordCount++;\n  });\n  return wordCount;\n}\n')),(0,r.kt)("p",null,"We can use ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim"},(0,r.kt)("inlineCode",{parentName:"a"},"String.prototype.trim()"))," to trim all whitespace from both ends of a string. Since the string is all whitespace, that will reduce it to ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),", which has a length of ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("p",null,"Another test passing! These little details can lead to big bugs down the road if we don't think about them early on."),(0,r.kt)("h3",{id:"our-fifth-wordcounter-test"},"Our Fifth ",(0,r.kt)("inlineCode",{parentName:"h3"},"wordCounter()")," Test"),(0,r.kt)("p",null,"Next, let's think about words. What is a word exactly? We aren't going to enforce whether something is legally a word or not. And nor would Google Docs. If we were to write a fantasy novel with Xoeo and Myxtmidia as the main characters, Google Docs is more than happy to call those words. Google Docs also counts numbers as words but we are going to be more precise than that. A spelled number (",(0,r.kt)("inlineCode",{parentName:"p"},'"seven"'),") is a word but the number ",(0,r.kt)("inlineCode",{parentName:"p"},"7")," is a number so we won't add it in the word count. So let's get started with a test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Test: "It should not count numbers as words."\nCode: wordCounter("hi there 77 19");\nExpected Output: 2\n')),(0,r.kt)("p",null,"In our test, we mix together words and numbers. Our function should properly count the words but ignore the numbers in the count. If we actually test ",(0,r.kt)("inlineCode",{parentName:"p"},'wordCounter("hi there 77 19");')," in the console right now, it will return 4. That's not what we want. However, we will acknowledge that we could have characters named Epsilon72 and Eri9er in our upcoming science fiction novel. (We don't know how to pronounce Eri9er, but it's the future and they've figured that kind of thing out.)"),(0,r.kt)("p",null,"So let's update the function to get this test passing."),(0,r.kt)("p",null,"Once again, see if you can do this on your own."),(0,r.kt)("div",{class:"filename"},"js/scripts.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Business Logic\n\nfunction wordCounter(text) {\n  if (text.trim().length === 0) {\n    return 0;\n  }\n  let wordCount = 0;\n  const textArray = text.split(" ");\n  textArray.forEach(function(element) {\n    if (!Number(element)) {\n      wordCount++;\n    }\n  });\n  return wordCount;\n}\n')),(0,r.kt)("p",null,"The change above will get the result we want. All we have to do is add a conditional. The ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#description"},"built-in JavaScript ",(0,r.kt)("inlineCode",{parentName:"a"},"Number()")," function")," either returns a number or ",(0,r.kt)("inlineCode",{parentName:"p"},"NaN"),". ",(0,r.kt)("inlineCode",{parentName:"p"},'Number("16")')," will return 16 while ",(0,r.kt)("inlineCode",{parentName:"p"},'Number("hi")')," returns ",(0,r.kt)("inlineCode",{parentName:"p"},"NaN"),". So if something's not a number (",(0,r.kt)("inlineCode",{parentName:"p"},"NaN"),"), we will increment our ",(0,r.kt)("inlineCode",{parentName:"p"},"wordCount"),". If it is a number, we won't increment it."),(0,r.kt)("p",null,"Note also that we changed the callback function's parameter to ",(0,r.kt)("inlineCode",{parentName:"p"},"element")," because it might not always be a word. It's a good practice to rename variable names if you realize they more accurately communicate your code."),(0,r.kt)("p",null,"Once again, this was a pretty small change. It's much easier to do this incrementally."),(0,r.kt)("p",null,"There's another thing we haven't thought about: punctuation. Dealing with punctuation is easier to handle with a regular expression. However, we haven't learned about regular expressions yet and they are a further exploration topic, so won't worry about them right now. Even though we could do more to make this function robust, for the purposes of demonstrating how to use TDD practices, this is robust enough. Let's move on to the next function!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To view all of the tests we wrote for the ",(0,r.kt)("inlineCode",{parentName:"strong"},"wordCounter()")," function, view the cheat sheet.")))}c.isMDXComponent=!0}}]);