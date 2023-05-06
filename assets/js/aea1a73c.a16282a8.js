"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[93],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||n;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<n;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},87447:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var a=r(87462),o=(r(67294),r(3905));const n={title:"8. PRACTICE: forEach loops",id:"practice_foreach_loops",slug:"practice_foreach_loops",hide_table_of_contents:!0,sidebar_position:21,day:"monday",type:"exercise",url:"https://github.com/epicodus-classroom/test-intro/blob/main/3_new_arrays_and_looping/1g_classwork_practice_foreach.md"},l=void 0,i={unversionedId:"test_intro/new_arrays_and_looping/practice_foreach_loops",id:"test_intro/new_arrays_and_looping/practice_foreach_loops",title:"8. PRACTICE: forEach loops",description:"Goal:  Practice using Array.prototype.forEach() to solve the problems below.",source:"@site/docs/test_intro/3_new_arrays_and_looping/1g_classwork_practice_foreach.md",sourceDirName:"test_intro/3_new_arrays_and_looping",slug:"/test_intro/new_arrays_and_looping/practice_foreach_loops",permalink:"/lhtp/test_intro/new_arrays_and_looping/practice_foreach_loops",draft:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"8. PRACTICE: forEach loops",id:"practice_foreach_loops",slug:"practice_foreach_loops",hide_table_of_contents:!0,sidebar_position:21,day:"monday",type:"exercise",url:"https://github.com/epicodus-classroom/test-intro/blob/main/3_new_arrays_and_looping/1g_classwork_practice_foreach.md"},sidebar:"test_intro",previous:{title:"7. Gathering Data with Checkboxes",permalink:"/lhtp/test_intro/new_arrays_and_looping/gathering_data_with_checkboxes"},next:{title:"9. Homework: Equality Versus Equity",permalink:"/lhtp/test_intro/new_arrays_and_looping/homework_equality_versus_equity"}},s={},p=[{value:"Code",id:"code",level:2},{value:"Groceries",id:"groceries",level:3},{value:"Word Play",id:"word-play",level:3},{value:"Build a Deck",id:"build-a-deck",level:3},{value:"Word Order",id:"word-order",level:3},{value:"Additional Challenges",id:"additional-challenges",level:4},{value:"Peer Code Review",id:"peer-code-review",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Goal"),":  Practice using ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," to solve the problems below."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Remember, understanding is the goal here. You're absolutely not expected to complete everything listed on this page. In fact, often we intentionally include ",(0,o.kt)("em",{parentName:"strong"},"more")," content than can reasonably be completed in a single day. This allows students an opportunity to later review concepts without having to repeat exercises they've previously done. Focus on understanding the concepts, not on speed.")),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Work through as many of the following exercises that you have time for during class."),(0,o.kt)("h3",{id:"groceries"},"Groceries"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a form that allows a user to input items they need at the store. Use whatever input type that you prefer."),(0,o.kt)("li",{parentName:"ul"},"When the user submits the form, hide the form and display the list of items in alphabetical order, all uppercased.")),(0,o.kt)("p",null,"Hints: To do this, build an array of the inputted items. (Make sure you don't include any blank fields.) Sort the array in alphabetical order. Make a new array with each entry uppercased (don't just uppercase them when you display them). Then, display the sorted list of things as list items inside a ",(0,o.kt)("inlineCode",{parentName:"p"},"<ul>"),". Explore ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"},"the MDN documentation on arrays")," to research what method might be used to sort arrays."),(0,o.kt)("h3",{id:"word-play"},"Word Play"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a form where users may enter a sentence."),(0,o.kt)("li",{parentName:"ul"},"Turn that sentence into an array using the ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split"},(0,o.kt)("inlineCode",{parentName:"a"},"String.prototype.split()")," method"),"."),(0,o.kt)("li",{parentName:"ul"},"Then, loop through this array to build a ",(0,o.kt)("em",{parentName:"li"},"new")," array out of every word in the sentence that is 3 or more characters in length."),(0,o.kt)("li",{parentName:"ul"},"Finally, reverse the order of the new array, ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join"},(0,o.kt)("inlineCode",{parentName:"a"},"Array.prototype.join()"))," it back together into a string, and display it to the user.")),(0,o.kt)("h3",{id:"build-a-deck"},"Build a Deck"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use a ",(0,o.kt)("inlineCode",{parentName:"li"},"Array.prototype.forEach()")," loop within another ",(0,o.kt)("inlineCode",{parentName:"li"},"Array.prototype.forEach()")," loop to build an array representing a deck of cards. A deck consists of 52 cards \u2014 13 ranks in each of 4 suits."),(0,o.kt)("li",{parentName:"ul"},'Then display a list of every card in the deck. (Hint: Each element of the array should read something like "ace of spades" or "4 of hearts".)')),(0,o.kt)("p",null,"The start of your output should look something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week3-branching-looping-arrays/deck.png",alt:"This image shows a bullet point list of cards names. This is what the output of this webpage should look like."})),(0,o.kt)("h3",{id:"word-order"},"Word Order"),(0,o.kt)("p",null,"Create a website that lets users input a block of text. The application will then return a list of all the unique words and how many times they appeared."),(0,o.kt)("p",null,'For example, if the user inputs "hello world world", the page should show:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- hello 1\n- world 2\n")),(0,o.kt)("h4",{id:"additional-challenges"},"Additional Challenges"),(0,o.kt)("p",null,"If you finish, and feel comfortable with ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," loops, try to complete the above exercise but instead order the list by the number of appearances \u2014 greatest to least. This is challenging \u2014 but a great way to exercise your problem-solving skills."),(0,o.kt)("p",null,"Another challenge: for words that appear the same amount of times, order by which word appeared first."),(0,o.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Is the JavaScript business logic separate from the user interface logic?"),(0,o.kt)("li",{parentName:"ul"},"Are variable names descriptive and easy to understand?"),(0,o.kt)("li",{parentName:"ul"},"Is code properly indented throughout?"),(0,o.kt)("li",{parentName:"ul"},"Are loops being used correctly?")))}u.isMDXComponent=!0}}]);