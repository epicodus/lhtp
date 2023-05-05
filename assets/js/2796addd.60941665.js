"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[7558],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(y,i(i({ref:t},c),{},{components:a})):r.createElement(y,i({ref:t},c))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3253:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={title:"3. PRACTICE: JavaScript Arrays",id:"practice_javascript_arrays",slug:"practice_javascript_arrays",hide_table_of_contents:!0,sidebar_position:16,day:"monday",type:"exercise",url:"https://github.com/epicodus-classroom/test-intro/blob/main/3_new_arrays_and_looping/1b_classwork_practice_javascript_arrays.md"},i=void 0,l={unversionedId:"new_arrays_and_looping/practice_javascript_arrays",id:"new_arrays_and_looping/practice_javascript_arrays",title:"3. PRACTICE: JavaScript Arrays",description:"Goal",source:"@site/docs/3_new_arrays_and_looping/1b_classwork_practice_javascript_arrays.md",sourceDirName:"3_new_arrays_and_looping",slug:"/new_arrays_and_looping/practice_javascript_arrays",permalink:"/lhtp/new_arrays_and_looping/practice_javascript_arrays",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"3. PRACTICE: JavaScript Arrays",id:"practice_javascript_arrays",slug:"practice_javascript_arrays",hide_table_of_contents:!0,sidebar_position:16,day:"monday",type:"exercise",url:"https://github.com/epicodus-classroom/test-intro/blob/main/3_new_arrays_and_looping/1b_classwork_practice_javascript_arrays.md"},sidebar:"docs",previous:{title:"2. PRACTICE: Adding and Removing HTML Elements",permalink:"/lhtp/new_arrays_and_looping/practice_adding_and_removing_html_elements"},next:{title:"4. Introduction to Looping",permalink:"/lhtp/new_arrays_and_looping/introduction_to_looping"}},s={},p=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Array Practice in the DevTools Console",id:"array-practice-in-the-devtools-console",level:3},{value:"Favorite Things Webpage",id:"favorite-things-webpage",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Goal:")," In the lessons on arrays, we learned:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Arrays can contain numbers, strings, variables, expressions and other arrays."),(0,n.kt)("li",{parentName:"ul"},"Arrays have methods like ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.pop()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.push()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.shift()"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.unshift()"),"."),(0,n.kt)("li",{parentName:"ul"},"We can access (or edit) an element from an array using bracket notation.")),(0,n.kt)("p",null,"Familiarize yourself with arrays by completing the exercises below. First, we'll practice creating and manipulating arrays in the JavaScript console, then we'll move on to implementing them into a small project using the HTML and JavaScript concepts we learned in the last section."),(0,n.kt)("h2",{id:"warm-up"},"Warm Up"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"What is a pointer? When might we see one when working with JavaScript arrays?"),(0,n.kt)("li",{parentName:"ul"},"How can we use square bracket notation to isolate a single element in an array? What does this notation look like?"),(0,n.kt)("li",{parentName:"ul"},"What is the difference between ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.pop()")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.push()"),"?"),(0,n.kt)("li",{parentName:"ul"},"What types of objects can be placed into a JavaScript array?")),(0,n.kt)("h2",{id:"code"},"Code"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"array-practice-in-the-devtools-console"},"Array Practice in the DevTools Console"),(0,n.kt)("p",null,"Play around with arrays of your own by completing each of the following in the DevTools console:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make an array of your siblings' names or your favorite movie characters' names."),(0,n.kt)("li",{parentName:"ul"},"Make an array of your parents' names."),(0,n.kt)("li",{parentName:"ul"},"Combine these two arrays using ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.concat()"),"."),(0,n.kt)("li",{parentName:"ul"},"Add your pets' names using ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.push()"),"."),(0,n.kt)("li",{parentName:"ul"},"Reverse the order of the array. To do this, research array methods on MDN that perform reversing functionality"),(0,n.kt)("li",{parentName:"ul"},"Access one of your parents' names using the square bracket notation."),(0,n.kt)("li",{parentName:"ul"},"Update the name of one of your parents using the index and square bracket notation."),(0,n.kt)("li",{parentName:"ul"},"Check out methods from the ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods"},"MDN")," (stick to using instance methods). Each person in your pair or group should pick one new array method to try.")),(0,n.kt)("h3",{id:"favorite-things-webpage"},"Favorite Things Webpage"),(0,n.kt)("p",null,"When you're comfortable using arrays in the console, move on to implementing them into a full project:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Build a page with a form containing input fields where users may enter several of their favorite things."),(0,n.kt)("li",{parentName:"ul"},"Then, write code that gathers each of these form input values and places them into one array."),(0,n.kt)("li",{parentName:"ul"},"After this is done, use your site to practice targeting and moving elements between arrays:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Use square bracket notation to access the second, first, and third elements of the original array of favorite things."),(0,n.kt)("li",{parentName:"ul"},"Then, use ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.push()")," to add only these elements (2nd, 1st, and 3rd) to a brand new array."),(0,n.kt)("li",{parentName:"ul"},"Finally, display this new array in your page's HTML as list items in a ",(0,n.kt)("inlineCode",{parentName:"li"},"<ul>")," tag. Use the ",(0,n.kt)("inlineCode",{parentName:"li"},"document.createElement()")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Element.append()")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Element.prepend()")," methods to create and add elements to your webpage.")))))}d.isMDXComponent=!0}}]);