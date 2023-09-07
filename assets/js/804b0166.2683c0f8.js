"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[27446],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(y,i(i({ref:t},c),{},{components:r})):a.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},82469:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"NaN. Practice: JavaScript Arrays",id:"practice_javascript_arrays",slug:"practice_javascript_arrays",hide_table_of_contents:!0,sidebar_position:16,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/5_arrays-and-looping/1b_classwork_practice_javascript_arrays.md"},i=void 0,l={unversionedId:"introduction_to_programming_part_time/arrays-and-looping/practice_javascript_arrays",id:"introduction_to_programming_part_time/arrays-and-looping/practice_javascript_arrays",title:"NaN. Practice: JavaScript Arrays",description:"Goal",source:"@site/docs/introduction_to_programming_part_time/5_arrays-and-looping/1b_classwork_practice_javascript_arrays.md",sourceDirName:"introduction_to_programming_part_time/5_arrays-and-looping",slug:"/introduction_to_programming_part_time/arrays-and-looping/practice_javascript_arrays",permalink:"/lhtp/introduction_to_programming_part_time/arrays-and-looping/practice_javascript_arrays",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"NaN. Practice: JavaScript Arrays",id:"practice_javascript_arrays",slug:"practice_javascript_arrays",hide_table_of_contents:!0,sidebar_position:16,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/5_arrays-and-looping/1b_classwork_practice_javascript_arrays.md"},sidebar:"introduction_to_programming_part_time",previous:{title:"NaN. Practice: Adding and Removing HTML Elements",permalink:"/lhtp/introduction_to_programming_part_time/arrays-and-looping/practice_adding_and_removing_html_elements"},next:{title:"NaN. Introduction to Looping",permalink:"/lhtp/introduction_to_programming_part_time/arrays-and-looping/introduction_to_looping"}},s={},p=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Array Practice in the DevTools Console",id:"array-practice-in-the-devtools-console",level:3},{value:"Favorite Things Webpage",id:"favorite-things-webpage",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Goal:")," In the lessons on arrays, we learned:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Arrays can contain numbers, strings, variables, expressions and other arrays."),(0,n.kt)("li",{parentName:"ul"},"Arrays have methods like ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.pop()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.push()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.shift()"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.unshift()"),"."),(0,n.kt)("li",{parentName:"ul"},"We can access (or edit) an element from an array using bracket notation.")),(0,n.kt)("p",null,"Familiarize yourself with arrays by completing the exercises below. First, we'll practice creating and manipulating arrays in the JavaScript console, then we'll move on to implementing them into a small project using the HTML and JavaScript concepts we learned in the last section."),(0,n.kt)("h2",{id:"warm-up"},"Warm Up"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"What is a pointer? When might we see one when working with JavaScript arrays?"),(0,n.kt)("li",{parentName:"ul"},"How can we use square bracket notation to isolate a single element in an array? What does this notation look like?"),(0,n.kt)("li",{parentName:"ul"},"What is the difference between ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.pop()")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.push()"),"?"),(0,n.kt)("li",{parentName:"ul"},"What types of objects can be placed into a JavaScript array?")),(0,n.kt)("h2",{id:"code"},"Code"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"array-practice-in-the-devtools-console"},"Array Practice in the DevTools Console"),(0,n.kt)("p",null,"Play around with arrays of your own by completing each of the following in the DevTools console:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make an array of your siblings' names or your favorite movie characters' names."),(0,n.kt)("li",{parentName:"ul"},"Make an array of your parents' names."),(0,n.kt)("li",{parentName:"ul"},"Combine these two arrays using ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.concat()"),"."),(0,n.kt)("li",{parentName:"ul"},"Add your pets' names using ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.push()"),"."),(0,n.kt)("li",{parentName:"ul"},"Reverse the order of the array. To do this, research array methods on MDN that perform reversing functionality"),(0,n.kt)("li",{parentName:"ul"},"Access one of your parents' names using the square bracket notation."),(0,n.kt)("li",{parentName:"ul"},"Update the name of one of your parents using the index and square bracket notation."),(0,n.kt)("li",{parentName:"ul"},"Check out methods from the ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods"},"MDN")," (stick to using instance methods). Each person in your pair or group should pick one new array method to try.")),(0,n.kt)("h3",{id:"favorite-things-webpage"},"Favorite Things Webpage"),(0,n.kt)("p",null,"When you're comfortable using arrays in the console, move on to implementing them into a full project:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Build a page with a form containing input fields where users may enter several of their favorite things."),(0,n.kt)("li",{parentName:"ul"},"Then, write code that gathers each of these form input values and places them into one array."),(0,n.kt)("li",{parentName:"ul"},"After this is done, use your site to practice targeting and moving elements between arrays:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Use square bracket notation to access the second, first, and third elements of the original array of favorite things."),(0,n.kt)("li",{parentName:"ul"},"Then, use ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.push()")," to add only these elements (2nd, 1st, and 3rd) to a brand new array."),(0,n.kt)("li",{parentName:"ul"},"Finally, display this new array in your page's HTML as list items in a ",(0,n.kt)("inlineCode",{parentName:"li"},"<ul>")," tag. Use the ",(0,n.kt)("inlineCode",{parentName:"li"},"document.createElement()")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Element.append()")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Element.prepend()")," methods to create and add elements to your webpage.")))))}m.isMDXComponent=!0}}]);