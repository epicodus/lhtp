"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[40193],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||n;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<n;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85142:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var a=r(87462),o=(r(67294),r(3905));const n={title:"Anagram, Coin Combos, Palindromes, Allergies, Numbers to Words - Part 2 (day 2)",id:"anagram-coin-combos-palindromes-allergies-numbers-to-words---part-2-day-2",slug:"anagram-coin-combos-palindromes-allergies-numbers-to-words---part-2-day-2",hide_table_of_contents:!0,sidebar_position:10,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/2a_classwork_to_do_anagram_allergies_coin_combo_palindromes.md"},i=void 0,l={unversionedId:"c-and-net-part-time-evening/test-driven-development-with-c/anagram-coin-combos-palindromes-allergies-numbers-to-words---part-2-day-2",id:"c-and-net-part-time-evening/test-driven-development-with-c/anagram-coin-combos-palindromes-allergies-numbers-to-words---part-2-day-2",title:"Anagram, Coin Combos, Palindromes, Allergies, Numbers to Words - Part 2 (day 2)",description:"Goal: Continue practicing with C# basics and Test-Driven Development.",source:"@site/docs/c-and-net-part-time-evening/6_test-driven-development-with-c/2a-classwork-to-do-anagram-allergies-coin-combo-palindromes-day-2.md",sourceDirName:"c-and-net-part-time-evening/6_test-driven-development-with-c",slug:"/c-and-net-part-time-evening/test-driven-development-with-c/anagram-coin-combos-palindromes-allergies-numbers-to-words---part-2-day-2",permalink:"/c-and-net-part-time-evening/test-driven-development-with-c/anagram-coin-combos-palindromes-allergies-numbers-to-words---part-2-day-2",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Anagram, Coin Combos, Palindromes, Allergies, Numbers to Words - Part 2 (day 2)",id:"anagram-coin-combos-palindromes-allergies-numbers-to-words---part-2-day-2",slug:"anagram-coin-combos-palindromes-allergies-numbers-to-words---part-2-day-2",hide_table_of_contents:!0,sidebar_position:10,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/2a_classwork_to_do_anagram_allergies_coin_combo_palindromes.md"},sidebar:"c-and-net-part-time-evening",previous:{title:"More Built-In C# Classes and Tips for Using the MS Docs",permalink:"/c-and-net-part-time-evening/test-driven-development-with-c/more-built-in-c-classes-and-tips-for-using-the-ms-docs"},next:{title:"APIE: Abstraction",permalink:"/c-and-net-part-time-evening/test-driven-development-with-c/apie-abstraction"}},s={},u=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Anagram",id:"anagram",level:3},{value:"Coin Combinations",id:"coin-combinations",level:3},{value:"Palindromes",id:"palindromes",level:3},{value:"Allergies",id:"allergies",level:3},{value:"Numbers to Words",id:"numbers-to-words",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],p={toc:u},m="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Goal:")," Continue practicing with C# basics and Test-Driven Development."),(0,o.kt)("h2",{id:"warm-up"},"Warm Up"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Why is the 'red-green-refactor' method so important to test-driven development?"),(0,o.kt)("li",{parentName:"ul"},"Discuss the benefits of TDD with your partner."),(0,o.kt)("li",{parentName:"ul"},"Why do we ",(0,o.kt)("em",{parentName:"li"},"want")," our tests to fail before they pass?"),(0,o.kt)("li",{parentName:"ul"},"What is type-casting and why is it useful?"),(0,o.kt)("li",{parentName:"ul"},"What is an overloaded constructor? "),(0,o.kt)("li",{parentName:"ul"},"What is the difference between static and instance methods?"),(0,o.kt)("li",{parentName:"ul"},"What is namespacing and why should we use it?")),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Complete as many projects as you have the time for.")," It's okay if you only work on one. We suggest reading through all of the following prompts to determine what would be the best practice for you today."),(0,o.kt)("p",null,"Before you get started, ",(0,o.kt)("strong",{parentName:"p"},"take a moment to identify what C# you have not practiced with, and see if you can incorporate practice with that tool or concept in your project.")," For example, if you've used a foreach loop, but not a for loop, make sure to practice using a for loop."),(0,o.kt)("p",null,"Finally, anytime you are working with a C# data type, look up its documentation online and see if there are any helpful built-in methods that you can use in your code."),(0,o.kt)("h3",{id:"anagram"},"Anagram"),(0,o.kt)("p",null,'An anagram is a word that you can rearrange the letters and it becomes a new word. For example, "bread" is an anagram of "beard". Create a console app, where a user can input a single word and a list of other words that may be anagrams. After submitting the form, the user should be told which of the list of words were anagrams. Start by writing specs before writing any code.'),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/en-us/library/system.array.sort(v=vs.110).aspx"},"Array.Sort() method")," may come in handy, so try it out in the REPL to see exactly what it does."),(0,o.kt)("p",null,"Next, modify the method to handle partial matches \u2014 in other words, 'hat' should match 'path'."),(0,o.kt)("p",null,"Here are the requirements for this application:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use TDD and the RGR workflow to develop your business logic. "),(0,o.kt)("li",{parentName:"ul"},"Create your business logic before you create your UI logic. ")),(0,o.kt)("h3",{id:"coin-combinations"},"Coin Combinations"),(0,o.kt)("p",null,"Have you noticed those coin slides used by modern cash registers that automatically give the correct amount of change? Build a console app that lets users enter an amount of cents and shows the smallest number of quarters, dimes, nickels, and pennies needed to make that change. Again, make sure you write clear specs and good tests before building out the console portion."),(0,o.kt)("p",null,"For bonus points, show more than one coin combination. Start with tests for small combinations and work up from there."),(0,o.kt)("p",null,"Here are the requirements for this application:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use TDD and the RGR workflow to develop your business logic. "),(0,o.kt)("li",{parentName:"ul"},"Create your business logic before you create your UI logic. ")),(0,o.kt)("h3",{id:"palindromes"},"Palindromes"),(0,o.kt)("p",null,"A palindrome is any word, phrase, number, or other sequence of characters that reads the same both backward or forward."),(0,o.kt)("p",null,"Create a console application that includes a method to identify whether a word is a palindrome. It should return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the user-provided word is a palindrome and ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," if it is not. As your complete this prompt, make sure to meet the following requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use TDD and the RGR workflow to develop your business logic. "),(0,o.kt)("li",{parentName:"ul"},"Create your business logic before you create your UI logic. ")),(0,o.kt)("p",null,"Here are several recommended approaches:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Simpler"),": There is a method ",(0,o.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/en-us/library/d3877932(v=vs.110).aspx"},"Array.Reverse()"),". Check it out in the REPL to see what it does.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"More Challenging"),": Create the method without using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.Reverse()")," method. If the simpler way of doing this isn't a challenge, we recommend trying this out!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Bonus Points"),': Make a method that checks a string of words and also an integer. For example: "Hello olleH" is a palindrome by our definition. An integer palindrome would be: 101.'))),(0,o.kt)("h3",{id:"allergies"},"Allergies"),(0,o.kt)("p",null,"Here's something a bit trickier and please only attempt this if you have completed the first two projects and had them both checked by an instructor. An allergy score is a single number that tells what someone is allergic to. The scores for each allergen are:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"allergen     score\neggs         1\npeanuts      2\nshellfish    4\nstrawberries 8\ntomatoes     16\nchocolate    32\npollen       64\ncats         128\n")),(0,o.kt)("p",null,"So if someone is allergic to eggs and strawberries, they get a score of 9."),(0,o.kt)("p",null,"Build a website that uses a method that is called on someone's score \u2014 i.e. the score is the object, and returns an array listing what they're allergic to.  For example, running ",(0,o.kt)("inlineCode",{parentName:"p"},"allergies(3)")," should print a list of the person's allergies (eggs and peanuts) to the screen. As your complete this prompt, make sure to meet the following requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use TDD and the RGR workflow to develop your business logic. "),(0,o.kt)("li",{parentName:"ul"},"Create your business logic before you create your UI logic. ")),(0,o.kt)("h3",{id:"numbers-to-words"},"Numbers to Words"),(0,o.kt)("p",null,'Create a console app that translates numbers in numeric form into written words. For example, it would translate 384 into "three hundred eighty four". Use multiple dictionaries to solve this.'),(0,o.kt)("p",null,"Start small, and then get your code working for numbers up to 1 trillion."),(0,o.kt)("p",null,"As your complete this prompt, make sure to meet the following requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use TDD and the RGR workflow to develop your business logic. "),(0,o.kt)("li",{parentName:"ul"},"Create your business logic before you create your UI logic. ")),(0,o.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Did you write your business logic before your user interface logic?"),(0,o.kt)("li",{parentName:"ul"},"Did you use Test-Driven Development to create your business logic? "),(0,o.kt)("li",{parentName:"ul"},"Are tests following best practices? ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Everything in the business logic has a test for it."),(0,o.kt)("li",{parentName:"ul"},"Each test tests for just one behavior."),(0,o.kt)("li",{parentName:"ul"},"If a method has multiple paths, there's a test for each path."))),(0,o.kt)("li",{parentName:"ul"},"Are all tests passing?"),(0,o.kt)("li",{parentName:"ul"},"Does your project have a ",(0,o.kt)("inlineCode",{parentName:"li"},"README.md"),"?"),(0,o.kt)("li",{parentName:"ul"},"Does your project have a ",(0,o.kt)("inlineCode",{parentName:"li"},".gitignore"),"?")))}c.isMDXComponent=!0}}]);