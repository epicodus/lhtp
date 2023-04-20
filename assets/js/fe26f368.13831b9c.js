"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[5870],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9261:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={title:"25. PRACTICE: Review of JavaScript Basics",id:"practice_review_of_javascript_basics",slug:"practice_review_of_javascript_basics",hide_table_of_contents:!0,sidebar_position:25,day:"monday",type:"exercise"},o=void 0,l={unversionedId:"javascript_and_web_browsers/practice_review_of_javascript_basics",id:"javascript_and_web_browsers/practice_review_of_javascript_basics",title:"25. PRACTICE: Review of JavaScript Basics",description:"Goal",source:"@site/docs/2_javascript_and_web_browsers/1a_classwork_practice_review_of_javascript_basics.md",sourceDirName:"2_javascript_and_web_browsers",slug:"/javascript_and_web_browsers/practice_review_of_javascript_basics",permalink:"/lhtp/javascript_and_web_browsers/practice_review_of_javascript_basics",draft:!1,tags:[],version:"current",sidebarPosition:25,frontMatter:{title:"25. PRACTICE: Review of JavaScript Basics",id:"practice_review_of_javascript_basics",slug:"practice_review_of_javascript_basics",hide_table_of_contents:!0,sidebar_position:25,day:"monday",type:"exercise"},sidebar:"docs",previous:{title:"24. Journal #2 Discussion",permalink:"/lhtp/javascript_and_web_browsers/journal_2_discussion"},next:{title:"26. Writing Functions",permalink:"/lhtp/javascript_and_web_browsers/writing_functions"}},s={},p=[{value:"Code",id:"code",level:2},{value:"Operators",id:"operators",level:3},{value:"String Methods",id:"string-methods",level:3},{value:"JavaScript Conventions",id:"javascript-conventions",level:3},{value:"Data Type Detection and Conversion",id:"data-type-detection-and-conversion",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goal:")," Discuss and apply these JavaScript concepts with your pair:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Operators"),(0,r.kt)("li",{parentName:"ul"},"Using MDN documentation"),(0,r.kt)("li",{parentName:"ul"},"String methods"),(0,r.kt)("li",{parentName:"ul"},"JavaScript conventions"),(0,r.kt)("li",{parentName:"ul"},"Data type detection and conversion")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reminder:")," Use the browser DevTools console to try out your JS code! If you need a review, read the instructions on how to use and pair program with the DevTools console ",(0,r.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/javascript-and-web-browsers/using-the-devtools-console-for-practice-and-pair-programming"},"in this lesson"),"."),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Work through each section of this practice lesson, switching who's driving and who's observing between each prompt."),(0,r.kt)("h3",{id:"operators"},"Operators"),(0,r.kt)("p",null,"Use MDN documentation to learn about the remainder operator ",(0,r.kt)("inlineCode",{parentName:"p"},"%"),', also known as "modulo": '),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Find the reference page for the remainder operator using Google or MDN's search."),(0,r.kt)("li",{parentName:"ul"},"Read the description and examples. "),(0,r.kt)("li",{parentName:"ul"},"Use the built-in console to try out the remainder operator.")),(0,r.kt)("p",null,"Make sure everyone understands what the remainder operator does, then work through these questions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What is the ",(0,r.kt)("inlineCode",{parentName:"li"},"%")," operator? How is the action it performs different from simply dividing?"),(0,r.kt)("li",{parentName:"ul"},"Name 3 different types of operators and give an example of each. "),(0,r.kt)("li",{parentName:"ul"},"What does ",(0,r.kt)("inlineCode",{parentName:"li"},"console.log()")," do?"),(0,r.kt)("li",{parentName:"ul"},"What is an operand? (Hint: this is not JavaScript-specific terminology.)")),(0,r.kt)("p",null,"Find the remainder of the following expressions by diving the two operands:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1008 by 7"),(0,r.kt)("li",{parentName:"ul"},"23423 by 75"),(0,r.kt)("li",{parentName:"ul"},"90 by 3"),(0,r.kt)("li",{parentName:"ul"},"9,870,834,205,987 by 324")),(0,r.kt)("h3",{id:"string-methods"},"String Methods"),(0,r.kt)("p",null,"Find the reference page on MDN for the ",(0,r.kt)("inlineCode",{parentName:"p"},"String.prototype.trim()")," method. Read through the description and examples. Use the built-in console to try out this string method. "),(0,r.kt)("p",null,"Switch who's driving and observing for this next prompt. Find the reference page on MDN for the ",(0,r.kt)("inlineCode",{parentName:"p"},"String.prototype.replace()")," method. Read through the description and examples. Note \u2014 ignore the references to regex; we'll learn about regex in coming weeks. Use the built-in console to try out this string method."),(0,r.kt)("h3",{id:"javascript-conventions"},"JavaScript Conventions"),(0,r.kt)("p",null,"Take turns answering these questions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How are we supposed to name our variables in JavaScript?"),(0,r.kt)("li",{parentName:"ul"},"What is the difference between a JavaScript expression and a JavaScript statement? "),(0,r.kt)("li",{parentName:"ul"},"When should we include semicolons at the end of our lines of code?"),(0,r.kt)("li",{parentName:"ul"},"When should we use ",(0,r.kt)("inlineCode",{parentName:"li"},"let")," and when should we use ",(0,r.kt)("inlineCode",{parentName:"li"},"const")," to declare a variable?")),(0,r.kt)("h3",{id:"data-type-detection-and-conversion"},"Data Type Detection and Conversion"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What are the two main categories of data types?"),(0,r.kt)("li",{parentName:"ul"},"What is ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"?"),(0,r.kt)("li",{parentName:"ul"},"What data type is ",(0,r.kt)("inlineCode",{parentName:"li"},"NaN"),"? What about ",(0,r.kt)("inlineCode",{parentName:"li"},"Infinity"),"? (Hint: if you are stuck, try detecting the data type.)")),(0,r.kt)("p",null,"Take turns working through these prompts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set a variable called ",(0,r.kt)("inlineCode",{parentName:"li"},"favNum")," equal to your favorite number and check the data type."),(0,r.kt)("li",{parentName:"ul"},"Then, create a new variable called ",(0,r.kt)("inlineCode",{parentName:"li"},"stringNum")," converting the previous variable to a string. Check the data type again."),(0,r.kt)("li",{parentName:"ul"},"Next, create a third variable called ",(0,r.kt)("inlineCode",{parentName:"li"},"parsedBackToNum"),", converting this string variable back to a number. Check the data type one more time."),(0,r.kt)("li",{parentName:"ul"},"Compare the first and third variables (",(0,r.kt)("inlineCode",{parentName:"li"},"favNum")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"parsedBackToNum"),") using ",(0,r.kt)("inlineCode",{parentName:"li"},"===")," to confirm that they are equal."),(0,r.kt)("li",{parentName:"ul"},"Compare the first and second variables (",(0,r.kt)("inlineCode",{parentName:"li"},"favNum")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"stringNum"),") or second and third variables (",(0,r.kt)("inlineCode",{parentName:"li"},"stringNum")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"parsedBackToNum"),") to confirm that they are NOT equal.")))}u.isMDXComponent=!0}}]);