"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[55161],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||n;return r?o.createElement(h,i(i({ref:t},c),{},{components:r})):o.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},57654:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=r(87462),a=(r(67294),r(3905));const n={title:"Weekday Finder, Scrabble Scorer, Rock Paper Scissors, Find and Replace, Prime Sifting",id:"weekday_finder_scrabble_scorer_rock_paper_scissors_find_and_replace_prime_sifting",slug:"weekday_finder_scrabble_scorer_rock_paper_scissors_find_and_replace_prime_sifting",hide_table_of_contents:!0,sidebar_position:19,day:"wednesday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/6_test-driven-development-with-c/3a_classwork_rock_paper_scissors_weekday_finder.md"},i=void 0,l={unversionedId:"c_and_net/test-driven-development-with-c/weekday_finder_scrabble_scorer_rock_paper_scissors_find_and_replace_prime_sifting",id:"c_and_net/test-driven-development-with-c/weekday_finder_scrabble_scorer_rock_paper_scissors_find_and_replace_prime_sifting",title:"Weekday Finder, Scrabble Scorer, Rock Paper Scissors, Find and Replace, Prime Sifting",description:'Goal: Continue building out applications using MSTest and the "Red, Green, Refactor" workflow.',source:"@site/docs/c_and_net/6_test-driven-development-with-c/3a_classwork_rock_paper_scissors_weekday_finder.md",sourceDirName:"c_and_net/6_test-driven-development-with-c",slug:"/c_and_net/test-driven-development-with-c/weekday_finder_scrabble_scorer_rock_paper_scissors_find_and_replace_prime_sifting",permalink:"/lhtp/c_and_net/test-driven-development-with-c/weekday_finder_scrabble_scorer_rock_paper_scissors_find_and_replace_prime_sifting",draft:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"Weekday Finder, Scrabble Scorer, Rock Paper Scissors, Find and Replace, Prime Sifting",id:"weekday_finder_scrabble_scorer_rock_paper_scissors_find_and_replace_prime_sifting",slug:"weekday_finder_scrabble_scorer_rock_paper_scissors_find_and_replace_prime_sifting",hide_table_of_contents:!0,sidebar_position:19,day:"wednesday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/6_test-driven-development-with-c/3a_classwork_rock_paper_scissors_weekday_finder.md"},sidebar:"c_and_net",previous:{title:"Workplace Accommodations",permalink:"/lhtp/c_and_net/test-driven-development-with-c/workplace_accommodations"},next:{title:"Career Prep Day",permalink:"/lhtp/c_and_net/test-driven-development-with-c/career_prep_day"}},s={},p=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Weekday Finder",id:"weekday-finder",level:3},{value:"Scrabble Scorer",id:"scrabble-scorer",level:3},{value:"Rock, Paper, Scissors",id:"rock-paper-scissors",level:3},{value:"Find and Replace",id:"find-and-replace",level:3},{value:"Prime Sifting",id:"prime-sifting",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Goal:"),' Continue building out applications using MSTest and the "Red, Green, Refactor" workflow.'),(0,a.kt)("h2",{id:"warm-up"},"Warm Up"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What is abstraction and how can we use this principle to improve our code?"),(0,a.kt)("li",{parentName:"ul"},"When is the appropriate time to use a try/catch block? What benefit do they offer?"),(0,a.kt)("li",{parentName:"ul"},'What does it mean when we state that a program "threw an exception"? What occurs when this happens?'),(0,a.kt)("li",{parentName:"ul"},'In terms of Test-Driven Development, what does "arrange, act, assert" mean? What does it look like to follow this process?'),(0,a.kt)("li",{parentName:"ul"},'Compare the tests you wrote for your last project with your partner, and give each other feedback; do tests begin with the simplest possible behaviors and move up in complexity? Does it look like each of you followed the "red-green-refactor" process? If not, how can you write better tests today?')),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Complete as many projects as you have the time for.")," It's okay if you only work on one. We suggest reading through all of the following prompts to determine what would be the best practice for you today."),(0,a.kt)("p",null,"Before you get started, ",(0,a.kt)("strong",{parentName:"p"},"take a moment to identify what C# you have not practiced with, and see if you can incorporate practice with that tool or concept in your project.")," For example, if you've used a foreach loop, but not a for loop, make sure to practice using a for loop."),(0,a.kt)("p",null,"Finally, anytime you are working with a C# data type, look up its documentation online and see if there are any helpful built-in methods that you can use in your code."),(0,a.kt)("h3",{id:"weekday-finder"},"Weekday Finder"),(0,a.kt)("p",null,"Make an console app that allows users to input a day of the year (like 7/11/2014) and then write a method to find out what day of the week it was, i.e. Monday, Tuesday, etc. As your complete this prompt, make sure to meet the following requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use TDD and the RGR workflow to develop your business logic. "),(0,a.kt)("li",{parentName:"ul"},"Create your business logic before you create your UI logic. ")),(0,a.kt)("h3",{id:"scrabble-scorer"},"Scrabble Scorer"),(0,a.kt)("p",null,"Make a console application that takes a word and returns the Scrabble score for that word. As your complete this prompt, make sure to meet the following requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use TDD and the RGR workflow to develop your business logic. "),(0,a.kt)("li",{parentName:"ul"},"Create your business logic before you create your UI logic. ")),(0,a.kt)("p",null,"Here are the values of letters in Scrabble:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"A, E, I, O, U, L, N, R, S, T       1\nD, G                               2\nB, C, M, P                         3\nF, H, V, W, Y                      4\nK                                  5\nJ, X                               8\nQ, Z                               10\n")),(0,a.kt)("h3",{id:"rock-paper-scissors"},"Rock, Paper, Scissors"),(0,a.kt)("p",null,"Recreate the game Rock, Paper, Scissors. For anyone who has never played it, here are the rules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'It is played by 2 people. Each person chooses "Rock", "Paper", or "Scissors" by forming a shape with their hand.'),(0,a.kt)("li",{parentName:"ul"},"They choose at the same time, so that each person doesn't know what the other person has picked."),(0,a.kt)("li",{parentName:"ul"},'If one person chooses "Rock" and the other person picks "Scissors" then "Rock" wins. It\'s a game of combinations:')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Rock v. Scissors = Rock wins\nRock v. Paper = Paper wins\nPaper v. Scissors = Scissors wins\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If both people choose the same thing, then it is a draw and nobody wins.")),(0,a.kt)("p",null,'Write a method that can handle the different combinations of plays and make sure to write specs for all possible combination of plays. Your method should take 2 inputs \u2014 one for each player\'s choice. It should return "Player 1" if the first input wins, "Player 2" if the second input wins, and "Draw" if nobody wins.'),(0,a.kt)("p",null,"As your complete this prompt, make sure to meet the following requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use TDD and the RGR workflow to develop your business logic. "),(0,a.kt)("li",{parentName:"ul"},"Create your business logic before you create your UI logic. ")),(0,a.kt)("p",null,"Here's optional further exploration to explore: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Find a way to get the computer to randomly select a 'play' and make your console app into a one player game. We don't yet know how to test something that's random, so it's okay to skip writing a spec for that part. "),(0,a.kt)("li",{parentName:"ul"},"Or, expand the rules of your game to include 3 players. Make sure to write specs for that before coding. You must understand your goal clearly before you can figure out how to get there.")),(0,a.kt)("h3",{id:"find-and-replace"},"Find and Replace"),(0,a.kt)("p",null,"Create a console app where a user enters a string, chooses a word in that string and provides a replacement for that word.  Your method in action could look something like ",(0,a.kt)("inlineCode",{parentName:"p"},'FindAndReplace("Hello world", "world", "universe")'),'. The result of which would be "Hello universe".'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do first"),': Write the method so that it replaces whole words only, as in the "hello world" example above.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do second"),": Add to your method, so that your method takes into account partial matches.  For example ",(0,a.kt)("inlineCode",{parentName:"p"},'FindAndReplace("I am walking my cat to the cathedral", "cat", "dog")'),' would return the silly phrase "I am walking my dog to the doghedral."'),(0,a.kt)("p",null,"As your complete this prompt, make sure to meet the following requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use TDD and the RGR workflow to develop your business logic. "),(0,a.kt)("li",{parentName:"ul"},"Create your business logic before you create your UI logic. "),(0,a.kt)("li",{parentName:"ul"},"Make sure to account for odd user inputs like all capitalization, partial capitalization, etc. ")),(0,a.kt)("h3",{id:"prime-sifting"},"Prime Sifting"),(0,a.kt)("p",null,"Given a number, write a method that returns all of the prime numbers less than that number. As your complete this prompt, make sure to meet the following requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use TDD and the RGR workflow to develop your business logic. "),(0,a.kt)("li",{parentName:"ul"},"Create your business logic before you create your UI logic. ")),(0,a.kt)("p",null,"This is a tricky problem and you should use the Sieve of Eratosthenes to solve it. Here's how the Sieve of Eratosthenes works to find a number up to a given ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a list of numbers from 2 through n: 2, 3, 4, ..., ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),"."),(0,a.kt)("li",{parentName:"ul"},"Initially, let ",(0,a.kt)("inlineCode",{parentName:"li"},"prime")," equal 2, the first prime number."),(0,a.kt)("li",{parentName:"ul"},"Starting from ",(0,a.kt)("inlineCode",{parentName:"li"},"prime"),", remove all multiples of ",(0,a.kt)("inlineCode",{parentName:"li"},"prime")," from the list."),(0,a.kt)("li",{parentName:"ul"},"Increment ",(0,a.kt)("inlineCode",{parentName:"li"},"prime")," by 1."),(0,a.kt)("li",{parentName:"ul"},"When you reach ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),", all the remaining numbers in the list are primes.")),(0,a.kt)("p",null,"You also might find ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=V08g_lkKj6Q"},"this video")," helpful in explaining the Sieve."),(0,a.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Did you write your business logic before your user interface logic?"),(0,a.kt)("li",{parentName:"ul"},"Did you use Test-Driven Development to create your business logic? "),(0,a.kt)("li",{parentName:"ul"},"Are tests following best practices? ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Everything in the business logic has a test for it."),(0,a.kt)("li",{parentName:"ul"},"Each test tests for just one behavior."),(0,a.kt)("li",{parentName:"ul"},"If a method has multiple paths, there's a test for each path."))),(0,a.kt)("li",{parentName:"ul"},"Are all tests passing?"),(0,a.kt)("li",{parentName:"ul"},"Does your project have a ",(0,a.kt)("inlineCode",{parentName:"li"},"README.md"),"?"),(0,a.kt)("li",{parentName:"ul"},"Does your project have a ",(0,a.kt)("inlineCode",{parentName:"li"},".gitignore"),"?")))}d.isMDXComponent=!0}}]);