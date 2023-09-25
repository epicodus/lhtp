"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[17913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),h=o,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},17833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"Text Analyzer with TDD: numberOfOccurrencesInText()",id:"text_analyzer_with_tdd_numberofoccurrencesintext",slug:"text_analyzer_with_tdd_numberofoccurrencesintext",hide_table_of_contents:!0,sidebar_position:27,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3_arrays-and-looping/2d_text_analyzer_tdd_part_2.md"},i=void 0,s={unversionedId:"introduction_to_programming/arrays-and-looping/text_analyzer_with_tdd_numberofoccurrencesintext",id:"introduction_to_programming/arrays-and-looping/text_analyzer_with_tdd_numberofoccurrencesintext",title:"Text Analyzer with TDD: numberOfOccurrencesInText()",description:"In this lesson, we'll complete the tests and functionality for a new function in the Text Analyzer project, called numberOfOccurrencesInText(). The goal of this lesson is to demonstrate the TDD process, including all of the decisions we need to make along the way.",source:"@site/docs/introduction_to_programming/3_arrays-and-looping/2d_text_analyzer_tdd_part_2.md",sourceDirName:"introduction_to_programming/3_arrays-and-looping",slug:"/introduction_to_programming/arrays-and-looping/text_analyzer_with_tdd_numberofoccurrencesintext",permalink:"/lhtp/introduction_to_programming/arrays-and-looping/text_analyzer_with_tdd_numberofoccurrencesintext",draft:!1,tags:[],version:"current",sidebarPosition:27,frontMatter:{title:"Text Analyzer with TDD: numberOfOccurrencesInText()",id:"text_analyzer_with_tdd_numberofoccurrencesintext",slug:"text_analyzer_with_tdd_numberofoccurrencesintext",hide_table_of_contents:!0,sidebar_position:27,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3_arrays-and-looping/2d_text_analyzer_tdd_part_2.md"},sidebar:"introduction_to_programming",previous:{title:"Text Analyzer with TDD: wordCounter()",permalink:"/lhtp/introduction_to_programming/arrays-and-looping/text_analyzer_with_tdd_wordcounter"},next:{title:"Practice: Extending Text Analyzer Business Logic with TDD",permalink:"/lhtp/introduction_to_programming/arrays-and-looping/practice_extending_text_analyzer_business_logic_with_tdd"}},l={},u=[{value:"Writing and Testing a Second Function for Text Analyzer",id:"writing-and-testing-a-second-function-for-text-analyzer",level:2},{value:"Our First Test",id:"our-first-test",level:3},{value:"Our Second Test",id:"our-second-test",level:3},{value:"Our Third Test",id:"our-third-test",level:3},{value:"Our Fourth Test",id:"our-fourth-test",level:3},{value:"Our Fifth Test",id:"our-fifth-test",level:3},{value:"Important Considerations",id:"important-considerations",level:4},{value:"Our Sixth Test",id:"our-sixth-test",level:3}],d={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson, we'll complete the tests and functionality for a new function in the Text Analyzer project, called ",(0,o.kt)("inlineCode",{parentName:"p"},"numberOfOccurrencesInText()"),". The goal of this lesson is to demonstrate the TDD process, including all of the decisions we need to make along the way. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You should code along with this and following lessons that build out the Text Analyzer project. In the upcoming practice lesson, you'll be tasked with adding more functionality to this project.")),(0,o.kt)("h2",{id:"writing-and-testing-a-second-function-for-text-analyzer"},"Writing and Testing a Second Function for Text Analyzer"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Let's get a little more practice by writing a second function. This one will also use a loop as well. The purpose of this function will be to determine how many times a specific word occurs in a passage. We'll call this function... um... ",(0,o.kt)("inlineCode",{parentName:"p"},"wordCounter()"),"? No. We've got to be clear with our code and that's already taken. We'll call it ",(0,o.kt)("inlineCode",{parentName:"p"},"numberOfOccurrencesInText()"),". The name is a bit lengthy but this function states exactly what it does which will help us communicate with other developers."),(0,o.kt)("p",null,"Let's say we have the following passage of text:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"red blue red red green red"\n')),(0,o.kt)("p",null,"If we ask our function how many times the color ",(0,o.kt)("em",{parentName:"p"},"red")," occurs, it should correctly return 4."),(0,o.kt)("p",null,"However, that is ",(0,o.kt)("em",{parentName:"p"},"not")," our first test. We can start even smaller than that."),(0,o.kt)("h3",{id:"our-first-test"},"Our First Test"),(0,o.kt)("p",null,"How small can we go? We can start with how many times a word occurs in an empty string, which should be 0 no matter what. That's probably as small as we can go."),(0,o.kt)("p",null,"We'll want to start a new group of tests for this function, which means a new ",(0,o.kt)("strong",{parentName:"p"},"Describe")," block. We can add this test below the other tests in our README."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Describe: numberOfOccurrencesInText()\n\nTest: "It should return 0 occurrences of a word for an empty string."\nCode:\nconst text = "";\nconst word = "red";\nnumberOfOccurrencesInText(word, text);\nExpected Output: 0\n')),(0,o.kt)("p",null,"Once again, this basic test can really help us get started. Let's take a look."),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Business Logic\n\n// wordCounter() function omitted for brevity.\n\nfunction numberOfOccurrencesInText(word, text) {\n  return 0;\n}\n")),(0,o.kt)("p",null,"We add the ",(0,o.kt)("inlineCode",{parentName:"p"},"numberOfOccurrencesInText()")," function beneath our ",(0,o.kt)("inlineCode",{parentName:"p"},"wordCounter()")," function. See how nicely our business logic is coming together because we aren't thinking about the UI? When we start working on our user interface logic, it will be much easier to keep things separate."),(0,o.kt)("p",null,"While our function is basic so far, it allows us to establish a couple of key things. First, this function needs two parameters, one for the ",(0,o.kt)("inlineCode",{parentName:"p"},"word")," we want to find and one for the ",(0,o.kt)("inlineCode",{parentName:"p"},"text")," itself. Secondly, just like with our ",(0,o.kt)("inlineCode",{parentName:"p"},"wordCounter()")," function, it will return a number."),(0,o.kt)("h3",{id:"our-second-test"},"Our Second Test"),(0,o.kt)("p",null,"Next, let's see what happens when we are searching text that is just one word."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Test: "It should return 1 occurrence of a word when the word and the text are the same."\nCode:\nconst text = "red";\nconst word = "red";\nnumberOfOccurrencesInText(word, text);\nExpected Output: 1\n')),(0,o.kt)("p",null,"Let's update our function. Once again, we are aiming to keep it as simple as possible. It's okay if it looks nothing like the final product yet. We are just taking baby steps."),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function numberOfOccurrencesInText(word, text) {\n  if (word === text) {\n    return 1;\n  }\n  return 0;\n}\n")),(0,o.kt)("p",null,"We add a simple conditional. If the word equals the text, we should return 1. Otherwise, we should return 0. Very simple. Both tests will pass now."),(0,o.kt)("h3",{id:"our-third-test"},"Our Third Test"),(0,o.kt)("p",null,"Are we ready to move onto multiple words? Well, we should verify that it doesn't return a match if the word and the text aren't the same first."),(0,o.kt)("p",null,"Here's the test:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Test: "It should return 0 occurrences of a word when the word and the text are different."\nCode:\nconst text = "red";\nconst word = "blue";\nnumberOfOccurrencesInText(word, text);\nExpected Output: 0\n')),(0,o.kt)("p",null,"This test will pass already so you might wonder what the point is. Well, first of all, it's always good to verify, not assume. You don't ever want to tell the team lead or your boss that you assumed something would work when everything goes terribly awry. Also, with automated testing, we might find later in the process that something breaks this specific test while all of our other tests pass correctly. Then we could more easily go back and fix the issue."),(0,o.kt)("h3",{id:"our-fourth-test"},"Our Fourth Test"),(0,o.kt)("p",null,"Let's move onto multiple words."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Test: "It should return the number of occurrences of a word."\nCode:\nconst text = "red blue red red red green";\nconst word = "red";\nnumberOfOccurrencesInText(word, text);\nExpected Output: 4\n')),(0,o.kt)("p",null,"You might be wondering why we are moving up to so many words and occurrences already. Why not just move up to two words first? Well, they should work exactly the same \u2014 and we are less likely to get a false positive. On the other hand, our function already returns 1 sometimes \u2014 if we just have two words and one of them is red, well, our code may return the right answer even if it's broken \u2014 just as a broken clock is right twice a day."),(0,o.kt)("p",null,"Let's update our code to get our new test passing:"),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function numberOfOccurrencesInText(word, text) {\n  const textArray = text.split(" ");\n  let wordCount = 0;\n  textArray.forEach(function(element) {\n    if (word === element) {\n      wordCount++\n    }\n  });\n  return wordCount;\n}\n')),(0,o.kt)("p",null,"This doesn't look very different from our previous code \u2014 but we actually modified the conditional from our previous test to use within our loop. Instead of having to write all the code at once, we took the time to get a sense of what our parameters are and return argument should look like, and we also got a good start on our conditional."),(0,o.kt)("p",null,"Once again, we split the text passage into an array and create a ",(0,o.kt)("inlineCode",{parentName:"p"},"wordCount")," that starts at 0. We loop through this array, and if the ",(0,o.kt)("inlineCode",{parentName:"p"},"word")," we've passed into our function is equal to the ",(0,o.kt)("inlineCode",{parentName:"p"},"element")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"textArray"),", we've found an instance of the word and we can increment ",(0,o.kt)("inlineCode",{parentName:"p"},"wordCount")," by one. Finally, we return ",(0,o.kt)("inlineCode",{parentName:"p"},"wordCount"),"."),(0,o.kt)("p",null,"It works! Yay!"),(0,o.kt)("h3",{id:"our-fifth-test"},"Our Fifth Test"),(0,o.kt)("p",null,"But what about..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"Red RED red"\n')),(0,o.kt)("p",null,"We need to account for upper and lowercase. ",(0,o.kt)("inlineCode",{parentName:"p"},'"Red"')," and ",(0,o.kt)("inlineCode",{parentName:"p"},'"red"')," are still the same word \u2014 but our function will not recognize this. Once again, let's start with a test. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Test: "It should return a word match regardless of case."\nCode:\nconst text = "red RED Red green Green GREEN";\nconst word = "Red";\nnumberOfOccurrencesInText(word, text);\nExpected Output: 3\n')),(0,o.kt)("p",null,"Note that our test will be a bit more thorough because we are also changing the case of the ",(0,o.kt)("inlineCode",{parentName:"p"},"word")," variable. It should be evident here that we need to do something that makes both the ",(0,o.kt)("inlineCode",{parentName:"p"},"word")," and all instances of that word in the ",(0,o.kt)("inlineCode",{parentName:"p"},"text")," variable consistent, such as lower-casing them. If the words that are being compared are different cases, our function won't see them as a match."),(0,o.kt)("p",null,"Try getting the test passing on your own first. The passing code is below:"),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function numberOfOccurrencesInText(word, text) {\n  const textArray = text.split(" ");\n  let wordCount = 0;\n  textArray.forEach(function(element) {\n    if (word.toLowerCase() === element.toLowerCase()) {\n      wordCount++;\n    }\n  });\n  return wordCount;\n}\n')),(0,o.kt)("p",null,"As we can see, we just need to call ",(0,o.kt)("inlineCode",{parentName:"p"},"String.prototype.toLowerCase()")," on both ",(0,o.kt)("inlineCode",{parentName:"p"},"word")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"element")," to get the test passing."),(0,o.kt)("h4",{id:"important-considerations"},"Important Considerations"),(0,o.kt)("p",null,"This is one of those tests where we really do need to think carefully about what we are testing and how we can make sure that our function works as expected. It would be easy to write a test that just lowercases the text and doesn't take account of the fact that a user might type in ",(0,o.kt)("inlineCode",{parentName:"p"},'"RED"')," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},'"red"')," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"word")," parameter. Fortunately, our test accounts for both the case of the ",(0,o.kt)("inlineCode",{parentName:"p"},"word")," parameter ",(0,o.kt)("em",{parentName:"p"},"and")," the case of each ",(0,o.kt)("inlineCode",{parentName:"p"},"element")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"text")," array."),(0,o.kt)("p",null,"It may also be tempting to just lowercase a user's input in the user interface section of the code \u2014 similarly to how we've used ",(0,o.kt)("inlineCode",{parentName:"p"},"parseInt()")," to make sure that a number input on a form is converted from a string to a number. However, this wouldn't be a good separation of logic. Remember, it's our function's job to correctly analyze any strings it receives. If we did that in the UI instead, it would be harder to test, harder to track, and more prone to bugs. Our function would also be less resilient and reusable."),(0,o.kt)("h3",{id:"our-sixth-test"},"Our Sixth Test"),(0,o.kt)("p",null,"Let's move onto our next test. Can you think of anything else that still needs to be tested? Are there any other situations where our function won't correctly compute a matching string when it should?"),(0,o.kt)("p",null,"What about this string?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'"Red! Red. I like red, don\'t you?"\n')),(0,o.kt)("p",null,"If we split this string by spaces, we'll get the following array:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'["Red!", "Red.", "I", "like", "red,", "don\'t", "you?"]\n')),(0,o.kt)("p",null,"Well, ",(0,o.kt)("inlineCode",{parentName:"p"},'"red"')," should match ",(0,o.kt)("inlineCode",{parentName:"p"},'"red."')," Currently, though, it won't. So let's write a test."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Test: "It should return a word match regardless of punctuation."\nCode:\nconst text = "Red! Red. I like red, green, and yellow.";\nconst word = "Red";\nnumberOfOccurrencesInText(word, text);\nExpected Output: 3\n')),(0,o.kt)("p",null,"Now let's get our test passing. There are several ways in which we can solve this problem."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"One way is to use the method ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes"},(0,o.kt)("inlineCode",{parentName:"a"},"String.prototype.includes()")),", which checks to see if a string ",(0,o.kt)("em",{parentName:"p"},"includes")," another string or character. We're going to use this approach. ",(0,o.kt)("inlineCode",{parentName:"p"},"String.prototype.includes()")," is a very handy string method and one which you'll likely use multiple times throughout this section.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The other approach is to use a regular expression. We are going to cover this approach in a ",(0,o.kt)("em",{parentName:"p"},"further exploration")," lesson on regular expressions. ",(0,o.kt)("em",{parentName:"p"},"Further exploration")," means it's ",(0,o.kt)("em",{parentName:"p"},"not")," required to learn about regular expressions and you won't need to use them in this section or on the independent project, though you can experiment with them if you like."))),(0,o.kt)("p",null,"Let's solve the problem using ",(0,o.kt)("inlineCode",{parentName:"p"},"String.prototype.includes()"),". First, let's see what this method actually does."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"String.prototype.includes()")," returns a boolean. If a string contains another string, the method will return ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". For instance, the string ",(0,o.kt)("inlineCode",{parentName:"p"},'"epicodus"')," contains the string ",(0,o.kt)("inlineCode",{parentName:"p"},'"epic"'),". If the string doesn't include the substring, the method will return ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". We can do something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function includesRarestLetter(word) {\n  if (word.toLowerCase().includes("q")) {\n    return true;\n  }\n  return false;\n}\n')),(0,o.kt)("p",null,"Q is the rarest letter in the English alphabet and this function checks whether a word contains the letter, returning ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if it does and false otherwise."),(0,o.kt)("p",null,"We can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"String.prototype.includes()")," with longer strings as well \u2014 such as checking whether a substring includes ",(0,o.kt)("inlineCode",{parentName:"p"},'"red"'),". Let's try this in the DevTools console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> "red! red. red?".includes("red");\ntrue\n')),(0,o.kt)("p",null,"Let's update our function to get our newest test passing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function numberOfOccurrencesInText(word, text) {\n  const textArray = text.split(" ");\n  let wordCount = 0;\n  textArray.forEach(function(element) {\n    if (element.toLowerCase().includes(word.toLowerCase())) {\n      wordCount++;\n    }\n  });\n  return wordCount;\n}\n')),(0,o.kt)("p",null,"We've updated our conditional to check if the following is true:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"element.toLowerCase().includes(word.toLowerCase())\n")),(0,o.kt)("p",null,"So if an ",(0,o.kt)("inlineCode",{parentName:"p"},"element")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"text")," array (such as ",(0,o.kt)("inlineCode",{parentName:"p"},'"red."'),") includes the word we are searching for (",(0,o.kt)("inlineCode",{parentName:"p"},'"red"'),"), ",(0,o.kt)("inlineCode",{parentName:"p"},"wordCount")," will be incremented \u2014 and our test will pass!"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"String.prototype.includes()")," is a ",(0,o.kt)("em",{parentName:"p"},"very")," helpful method. There is a problem, though:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> "redo".includes("red");\ntrue\n')),(0,o.kt)("p",null,"Yes, the word ",(0,o.kt)("inlineCode",{parentName:"p"},'"redo"')," ",(0,o.kt)("em",{parentName:"p"},"contains")," the word ",(0,o.kt)("inlineCode",{parentName:"p"},'"red"')," \u2014 but it's ",(0,o.kt)("em",{parentName:"p"},"not")," an occurrence of the word. We aren't going to worry about this issue, though you are welcome to refactor the application on your own to fix this with an additional test."),(0,o.kt)("p",null,"So our ",(0,o.kt)("inlineCode",{parentName:"p"},"numberOfOccurrencesInText()")," function isn't perfect but that's okay. Once again, the main purpose here is to learn about Test-Driven Development: how it works, how to apply it, and how to write pseudocode tests to gradually build up robust functions and solve problems. "),(0,o.kt)("p",null,"For the next several sections, you will use this Test-Driven Development approach with pseudocode tests. As we've mentioned before, in the ",(0,o.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/intermediate-javascript/test-driven-development-and-environments-with-javascript"},"Test Driven Development and Environments with JavaScript")," course section, we will start using Jest for our tests."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To view all of the tests that we wrote for both ",(0,o.kt)("inlineCode",{parentName:"strong"},"wordCounter()")," and ",(0,o.kt)("inlineCode",{parentName:"strong"},"numberOfOccurrencesInText()"),", check out the cheat sheet.")))}p.isMDXComponent=!0}}]);