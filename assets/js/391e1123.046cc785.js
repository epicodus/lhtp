"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[93690],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(r),u=n,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return r?a.createElement(h,o(o({ref:t},p),{},{components:r})):a.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},77894:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const i={title:"Practice: Credit Card Validator, Roman Numerals, or Cryptosquare",id:"practice_credit_card_validator_roman_numerals_or_cryptosquare",slug:"practice_credit_card_validator_roman_numerals_or_cryptosquare",hide_table_of_contents:!0,sidebar_position:44,day:"thursday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4c_classwork_practice_roman_numerals.md"},o=void 0,l={unversionedId:"introduction_to_programming/arrays-and-looping/practice_credit_card_validator_roman_numerals_or_cryptosquare",id:"introduction_to_programming/arrays-and-looping/practice_credit_card_validator_roman_numerals_or_cryptosquare",title:"Practice: Credit Card Validator, Roman Numerals, or Cryptosquare",description:"Goal:  For these exercises (and all exercises going forward) Focus on breaking your project down into small pieces of functionality, and tackling them one at a time with TDD. Write your first test and then write the code necessary to get the test passing. Repeat the process of writing tests and getting code passing until you've completed your business logic. If you are interested, try experimenting with different kinds of loops.",source:"@site/docs/introduction_to_programming/3_arrays-and-looping/4c_classwork_practice_roman_numerals.md",sourceDirName:"introduction_to_programming/3_arrays-and-looping",slug:"/introduction_to_programming/arrays-and-looping/practice_credit_card_validator_roman_numerals_or_cryptosquare",permalink:"/introduction_to_programming/arrays-and-looping/practice_credit_card_validator_roman_numerals_or_cryptosquare",draft:!1,tags:[],version:"current",sidebarPosition:44,frontMatter:{title:"Practice: Credit Card Validator, Roman Numerals, or Cryptosquare",id:"practice_credit_card_validator_roman_numerals_or_cryptosquare",slug:"practice_credit_card_validator_roman_numerals_or_cryptosquare",hide_table_of_contents:!0,sidebar_position:44,day:"thursday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4c_classwork_practice_roman_numerals.md"},sidebar:"introduction_to_programming",previous:{title:"Practice: Array Mapping",permalink:"/introduction_to_programming/arrays-and-looping/practice_array_mapping"},next:{title:"Further Exploration: Looping with for...of",permalink:"/introduction_to_programming/arrays-and-looping/further_exploration_looping_with_forof"}},s={},d=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Credit Card Validator",id:"credit-card-validator",level:3},{value:"Step 1: Apply the Luhn Algorithm",id:"step-1-apply-the-luhn-algorithm",level:4},{value:"Step 2: Validate the First Digits of the Credit Card Number",id:"step-2-validate-the-first-digits-of-the-credit-card-number",level:4},{value:"Step 3: Validate the Length of the Credit Card Number",id:"step-3-validate-the-length-of-the-credit-card-number",level:4},{value:"Further Exploration",id:"further-exploration",level:4},{value:"Challenging: Roman Numerals",id:"challenging-roman-numerals",level:3},{value:"Challenging: Cryptosquare",id:"challenging-cryptosquare",level:3},{value:"Further Exploration",id:"further-exploration-1",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],p={toc:d},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Goal"),":  For these exercises (and all exercises going forward) Focus on breaking your project down into small pieces of functionality, and tackling them one at a time with TDD. Write your first test and then write the code necessary to get the test passing. Repeat the process of writing tests and getting code passing until you've completed your business logic. If you are interested, try experimenting with different kinds of loops."),(0,n.kt)("h2",{id:"warm-up"},"Warm Up"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Explain what test-driven development is. Why is it so beneficial?"),(0,n.kt)("li",{parentName:"ul"},"Review the tests for the Pig Latin project that each partner wrote and discuss the following:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Is each individual test listed as specific as possible? Does each represent ",(0,n.kt)("em",{parentName:"li"},"one")," piece of functionality or multiple?"),(0,n.kt)("li",{parentName:"ul"},"Is the simplest possible test listed first? If so, how do you know it's the simplest? If not, which one should come first?"),(0,n.kt)("li",{parentName:"ul"},"How did you ensure you wrote the ",(0,n.kt)("em",{parentName:"li"},"least")," amount of code possible to make each pass? What did that look like?")))),(0,n.kt)("h2",{id:"code"},"Code"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Meet the goal by completing one of the projects listed below. If you only have a half day to work on these practice prompts, we recommend working on the Credit Card Validator prompt with the goal of completing step 1.")," "),(0,n.kt)("h3",{id:"credit-card-validator"},"Credit Card Validator"),(0,n.kt)("p",null,"Write a program that checks if a credit card number is valid. There are multiple ways to check the validity of a credit card number, and in this practice prompt, we'll explore just a few ways for only a few credit card companies. "),(0,n.kt)("p",null,"For this prompt, the ",(0,n.kt)("strong",{parentName:"p"},"input")," will always be a string of numbers. Something like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'"0998445533334452"\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"output")," of the method should be a string with one of two messages depending on whether or not the card number is valid:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'"This card number is not valid."\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'"This card number is valid."\n')),(0,n.kt)("p",null,"As you write your method(s), pay attention to your data types and implement at least one loop and one array. Think about the built-in JavaScript methods and operators you can use. Write tests for all of your business logic functions. Only create a UI after you have completed your business logic (all 3 steps) and worked through the further exploration options."),(0,n.kt)("h4",{id:"step-1-apply-the-luhn-algorithm"},"Step 1: Apply the Luhn Algorithm"),(0,n.kt)("p",null,"Luhn's Algorithm checks the digits of a number in order to validate it. It is widely used today in creating and validating credit card, account, and ID numbers. "),(0,n.kt)("p",null,"Work through the instructions below to learn how to use Luhn's Algorithm. Alternatively, you can visit ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Luhn_algorithm"},"the Luhn Algorithm Wikipedia page")," or ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Yr9s5NjsVAo"},"watch this video from Concerning Reality")," to learn how to use the Luhn Algorithm."),(0,n.kt)("p",null,"How to apply Luhn's Algorithm:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Using the inputted card number, create a new set of numbers by transforming each of the digits in the inputted credit card number. Let's use this number ",(0,n.kt)("inlineCode",{parentName:"li"},"4102 0808 8043 5620")," as an example input. After following the steps below the inputted number becomes ",(0,n.kt)("inlineCode",{parentName:"li"},"4204 0707 8046 5320"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Starting on the right and moving left, double every other digit. For example the digit ",(0,n.kt)("inlineCode",{parentName:"li"},"3")," becomes ",(0,n.kt)("inlineCode",{parentName:"li"},"6"),". "),(0,n.kt)("li",{parentName:"ul"},"If the result of the doubled digit is a double digit number, add together each digit of the double digit number. For example, the digit ",(0,n.kt)("inlineCode",{parentName:"li"},"7")," doubled becomes ",(0,n.kt)("inlineCode",{parentName:"li"},"14"),", adding those together becomes ",(0,n.kt)("inlineCode",{parentName:"li"},"1 + 4"),", which results in ",(0,n.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,n.kt)("li",{parentName:"ul"},"Using our example credit card number ",(0,n.kt)("inlineCode",{parentName:"li"},"4102 0808 8043 5620"),", here are the transformations: ")))),(0,n.kt)("hr",null),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:"center"}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Original number")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("div",{style:{width:"30px%"}},"4")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("div",{style:{width:"30px%"}},"1")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("div",{style:{width:"30px%"}},"0")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("div",{style:{width:"30px%"}},"2")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("div",{style:{width:"30px%"}},"0")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("div",{style:{width:"30px%"}},"8")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("div",{style:{width:"30px%"}},"0")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("div",{style:{width:"30px%"}},"8")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("div",{style:{width:"30px%"}},"8")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("div",{style:{width:"30px%"}},"0")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("div",{style:{width:"30px%"}},"4")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("div",{style:{width:"30px%"}},"3")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("div",{style:{width:"30px%"}},"5")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("div",{style:{width:"30px%"}},"6")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("div",{style:{width:"30px%"}},"2")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("div",{style:{width:"30px%"}},"0"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Doubling every other digit")),(0,n.kt)("td",{parentName:"tr",align:"center"},"4"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"1x2")),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"2x2")),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"8x2")),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"8x2")),(0,n.kt)("td",{parentName:"tr",align:"center"},"8"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"0x2")),(0,n.kt)("td",{parentName:"tr",align:"center"},"4"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"3x2")),(0,n.kt)("td",{parentName:"tr",align:"center"},"5"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"6x2")),(0,n.kt)("td",{parentName:"tr",align:"center"},"2"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"0x2"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Adding digits of double-digit numbers")),(0,n.kt)("td",{parentName:"tr",align:"center"},"4"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"2")),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"4")),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"1+6")),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"1+6")),(0,n.kt)("td",{parentName:"tr",align:"center"},"8"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"0")),(0,n.kt)("td",{parentName:"tr",align:"center"},"4"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"6")),(0,n.kt)("td",{parentName:"tr",align:"center"},"5"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"1+2")),(0,n.kt)("td",{parentName:"tr",align:"center"},"2"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"0"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"New set of transformed numbers")),(0,n.kt)("td",{parentName:"tr",align:"center"},"4"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"2")),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"4")),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"7")),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"7")),(0,n.kt)("td",{parentName:"tr",align:"center"},"8"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"0")),(0,n.kt)("td",{parentName:"tr",align:"center"},"4"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"6")),(0,n.kt)("td",{parentName:"tr",align:"center"},"5"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"3")),(0,n.kt)("td",{parentName:"tr",align:"center"},"2"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"0"))))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Next, sum all of the digits in the new transformed set of numbers. Using our example ",(0,n.kt)("inlineCode",{parentName:"li"},"4204 0707 8046 5320")," becomes the addition of ",(0,n.kt)("inlineCode",{parentName:"li"},"4 + 2 + 0 + 4 + 0 + 7 + 0 + 7 + 8 + 0 + 4 + 6 + 5 + 3 + 2 + 0"),", which equals ",(0,n.kt)("inlineCode",{parentName:"li"},"52"),"."),(0,n.kt)("li",{parentName:"ul"},"If the resulting number ends in a zero, the card number is valid. If the number does NOT end in a zero, the card number is NOT valid. In our case, the credit card number is NOT valid, because it ends in a 2.")),(0,n.kt)("p",null,"Here are two credit card numbers for you to use to test your code:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A valid number: ",(0,n.kt)("inlineCode",{parentName:"li"},"4102080860435620")),(0,n.kt)("li",{parentName:"ul"},"An invalid number: ",(0,n.kt)("inlineCode",{parentName:"li"},"4102080880435620"))),(0,n.kt)("h4",{id:"step-2-validate-the-first-digits-of-the-credit-card-number"},"Step 2: Validate the First Digits of the Credit Card Number"),(0,n.kt)("p",null,"The first digits in a credit card number is used to identify the company that issued the credit card. We can use that information to validate a credit card. Update your method or create a new one that uses the rules below to determine whether the credit card number was issued by an accredited company. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"American Express cards always begin with the numbers 34 or 37.\nVisa cards begin with the number 4.\nMastercards start with the number 5.\nDiscover Cards begin with the number 6.\n")),(0,n.kt)("h4",{id:"step-3-validate-the-length-of-the-credit-card-number"},"Step 3: Validate the Length of the Credit Card Number"),(0,n.kt)("p",null,"You can also validate a credit card by its length. Use the rules below to update your method(s) to determine if a card number is valid based on its length. Taking Visa for an example, Visa cards have a length of 16 digits, so a card that has 15 digits or less, or 17 digits or more would be invalid."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Visa: 16\nMastercard: 16\nDiscover: 16\nAmerican Express: 15\n")),(0,n.kt)("h4",{id:"further-exploration"},"Further Exploration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Watch the video from ",(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Yr9s5NjsVAo"},"Concerning Reality")," about the Luhn Algorithm. Use  the instructions in the second half of the video to refactor your method(s) to use the check digit number to validate the credit card number. You can also find this information in ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Luhn_algorithm"},"the Luhn Algorithm Wikipedia page"),"."),(0,n.kt)("li",{parentName:"ul"},'Refactor your application so that it tells the user which company issued the credit card. For example, the program could return "This Discover card number is valid."'),(0,n.kt)("li",{parentName:"ul"},'Refactor your application so that it tells you why the credit card is not valid (meaning, the length, initial digits, or not passing the Luhn Algorithm). For example, the program could return "This VISA card number is not valid. It does not have the correct length." or "This VISA card number is not valid. It does not pass the Luhn Algorithm."'),(0,n.kt)("li",{parentName:"ul"},"Create a user interface for your application.")),(0,n.kt)("h3",{id:"challenging-roman-numerals"},"Challenging: Roman Numerals"),(0,n.kt)("p",null,"Write a method to convert numbers into Roman numerals. Roman numerals are based on seven symbols:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Symbol  Value\nI       1\nV       5\nX       10\nL       50\nC       100\nD       500\nM       1,000\n")),(0,n.kt)("p",null,"The most basic rule is that you add the value of all the symbols: so II is 2, LXVI is 66, etc."),(0,n.kt)("p",null,"The exception is that there may not be more than three of the same characters in a row. Instead, you switch to subtraction. So instead of writing IIII for 4, you write IV (for 5 minus 1); and instead of writing LXXXX for 90, you write XC."),(0,n.kt)("p",null,"You also have to separate ones, tens, hundreds, and thousands. In other words, 99 is XCIX, not IC.  You cannot count higher than 3,999 in Roman numerals."),(0,n.kt)("p",null,"Do not add any UI logic until you've completed your business logic (and included testing)."),(0,n.kt)("h3",{id:"challenging-cryptosquare"},"Challenging: Cryptosquare"),(0,n.kt)("p",null,"A classic method for composing secret messages is called a ",(0,n.kt)("em",{parentName:"p"},"square code"),"."),(0,n.kt)("p",null,"The spaces and punctuation are removed from the English text and the characters are written into a square (or rectangle) and the entire message is downcased. For example, the sentence ",(0,n.kt)("em",{parentName:"p"},'"don\'t compare yourself to others, compare yourself to the person you were yesterday"')," is 69 characters long, so it is written into a rectangle with 9 rows and 8 columns."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/cryptosquare/cryptosquare.png",alt:"Cryptosquare image"})),(0,n.kt)("p",null,"The coded message is obtained by reading down the columns going left to right, outputting encoded text in groups of five letters. For example, the message above is coded as:"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},'"daeer leweo rlref rerne fsyts rdtyt coooe acooo utnyy ouomr hyemr tpseo spsha eput"')),(0,n.kt)("p",null,"Write a program that outputs the encoded version of a given block of text. Again, identify each individual behavior this application should demonstrate, and write a test for each. Tackle writing code for ",(0,n.kt)("em",{parentName:"p"},"one")," behavior at a time. Manually test the code described in each test in the console before moving onto the next one. All tests should be included in the project README."),(0,n.kt)("p",null,"The size of the square (number of columns) should be decided by the length of the message. If the message is a length that creates a perfect square (e.g. 4, 9, 16, 25, 36, etc), use that number of columns. If the message doesn't fit neatly into a square, choose the number of columns that corresponds to the smallest square that is larger than the number of characters in the message."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'> encrypt("Have a nice day. Feed the dog & chill out!");\n"hifei acedl v..."\n')),(0,n.kt)("h3",{id:"further-exploration-1"},"Further Exploration"),(0,n.kt)("p",null,"Go back and tackle any ",(0,n.kt)("em",{parentName:"p"},"Further Exploration")," exercises from previous classwork in this section that you have not yet completed."),(0,n.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Are tests included for all functionality?"),(0,n.kt)("li",{parentName:"ul"},"Are all tests passing?"),(0,n.kt)("li",{parentName:"ul"},"Are variable names descriptive and in lower camel case?"),(0,n.kt)("li",{parentName:"ul"},"Is code indented properly throughout?"),(0,n.kt)("li",{parentName:"ul"},"If a user interface is included, is the business and user interface logic well-separated?"),(0,n.kt)("li",{parentName:"ul"},"Does the application work as expected?"),(0,n.kt)("li",{parentName:"ul"},"Is the code clean, well-refactored, and generally easy to follow?")))}m.isMDXComponent=!0}}]);