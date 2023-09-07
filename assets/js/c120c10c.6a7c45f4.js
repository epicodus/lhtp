"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[13819],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={title:"NaN. Introduction to Looping",id:"introduction_to_looping",slug:"introduction_to_looping",hide_table_of_contents:!0,sidebar_position:17,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/5_arrays-and-looping/1c_introduction_to_looping.md"},i=void 0,l={unversionedId:"introduction_to_programming_part_time/arrays-and-looping/introduction_to_looping",id:"introduction_to_programming_part_time/arrays-and-looping/introduction_to_looping",title:"NaN. Introduction to Looping",description:"Over the next several lessons, we are going to dive into a concept that is often very challenging for beginners: looping.",source:"@site/docs/introduction_to_programming_part_time/5_arrays-and-looping/1c_introduction_to_looping.md",sourceDirName:"introduction_to_programming_part_time/5_arrays-and-looping",slug:"/introduction_to_programming_part_time/arrays-and-looping/introduction_to_looping",permalink:"/lhtp/introduction_to_programming_part_time/arrays-and-looping/introduction_to_looping",draft:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"NaN. Introduction to Looping",id:"introduction_to_looping",slug:"introduction_to_looping",hide_table_of_contents:!0,sidebar_position:17,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/5_arrays-and-looping/1c_introduction_to_looping.md"},sidebar:"introduction_to_programming_part_time",previous:{title:"NaN. Practice: JavaScript Arrays",permalink:"/lhtp/introduction_to_programming_part_time/arrays-and-looping/practice_javascript_arrays"},next:{title:"NaN. forEach Loops",permalink:"/lhtp/introduction_to_programming_part_time/arrays-and-looping/foreach_loops"}},p={},s=[{value:"<code>Array.prototype.forEach()</code>",id:"arrayprototypeforeach",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Over the next several lessons, we are going to dive into a concept that is often very challenging for beginners: ",(0,a.kt)("strong",{parentName:"p"},"looping"),"."),(0,a.kt)("p",null,"A loop is just what it sounds like \u2014 a piece of code that loops over and over until a condition is met."),(0,a.kt)("p",null,"In this lesson, we'll start by covering the basics of ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),", which we can use to loop through each element in an array. In the next lesson, we'll move on to a more in-depth discussion of ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),", including ways we can use this kind of loop."),(0,a.kt)("p",null,"Later, we will explore ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loops and ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loops have been around since the beginning of JavaScript \u2014 and they are a more traditional way of looping. In fact, ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," is ",(0,a.kt)("strong",{parentName:"p"},"syntactic sugar")," that's been added to a traditional ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop. Syntactic sugar just means syntax that makes a piece of code easier to write. A loop that uses ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," is really using a ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop under the hood. Meanwhile, ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()"),", like ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),", provides syntactic sugar as well as other functionality that can make looping easier in many situations."),(0,a.kt)("p",null,"Finally, for the sake of thoroughness, we'll cover ",(0,a.kt)("inlineCode",{parentName:"p"},"while")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"for...of")," loops, which you probably won't use often (and aren't necessary for this section's independent project). However, it's still important to be aware of them."),(0,a.kt)("p",null,"We'll cover ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," first because this kind of loop is easier to use \u2014 and will likely be one of your main go-tos for looping."),(0,a.kt)("h2",{id:"arrayprototypeforeach"},(0,a.kt)("inlineCode",{parentName:"h2"},"Array.prototype.forEach()")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," loops over ",(0,a.kt)("em",{parentName:"p"},"every")," element in the array it is called on. Let's take a look at a simple example. Try running the following in the DevTools console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const languages = ['HTML', 'CSS', 'JavaScript'];\nlanguages.forEach(function(language) {\n  alert('I love ' + language + '!');\n});\n")),(0,a.kt)("p",null,'The first time through the loop, we\'ll get an alert that says "I love HTML!". The second time, we\'ll get an alert that says "I love CSS!". The third and final time through the loop, we\'ll get an alert that says "I love JavaScript!".'),(0,a.kt)("p",null,"So what exactly is happening? The ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," calls the callback function we pass into it on every element in our array. Let's break this down."),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," loop takes a function as an argument. Here's the function that is passed into the loop above:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function(language) {\n  alert('I love ' + language + '!');\n}\n")),(0,a.kt)("p",null,"When a function is passed into another function as an argument to be executed later, it is known as a ",(0,a.kt)("strong",{parentName:"p"},"callback"),". Callbacks are a huge part of programming \u2014 and you'll often see complex and even confusing examples of callbacks in JavaScript. "),(0,a.kt)("p",null,"We first learned about callbacks when we learned how to use event listeners. Even though we are familiar with event listeners, callbacks can still be confusing and take a while to wrap your head around, so let's review now. Check out this code, which includes two callback functions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function handleClick() {\n  console.log("The button has been clicked!");\n}\n\nwindow.addEventListener("load", function() {\n  const btn = querySelector("button");\n  btn.addEventListener("click", handleClick);\n});\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"EventTarget.addEventListener()")," method takes two arguments: the first is the name of the event, and the second is the callback function that is called on to run when the event happens. Identifying a function as a callback is all about how a function is being used in the code: if it is used as an argument in another function or method call, then that function is a callback. "),(0,a.kt)("p",null,"Notably, whether or not a function is a callback function has nothing to do with how its been defined. For example, in the ",(0,a.kt)("inlineCode",{parentName:"p"},"window.addEventListener(...)")," method call, we use an anonymous function expression as the callback function. In the ",(0,a.kt)("inlineCode",{parentName:"p"},"btn.addEventListener(...)")," method call, we use a function declaration as the callback function, which we define at the start of the scripts, and then reference by name in the ",(0,a.kt)("inlineCode",{parentName:"p"},"addEventListener()")," method call."),(0,a.kt)("p",null,"The reason we pass a function into ",(0,a.kt)("inlineCode",{parentName:"p"},"addEventListener()")," is so that the event listener can call the function when the corresponding event happens. On the other hand, we pass a function into ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," so that this method can call the function for ",(0,a.kt)("em",{parentName:"p"},"every")," element in the array. Let's look back to our first example to understand this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const languages = ['HTML', 'CSS', 'JavaScript'];\nlanguages.forEach(function(language) {\n  window.alert('I love ' + language + '!');\n});\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"language")," parameter in our callback function represents an array element. Because our ",(0,a.kt)("inlineCode",{parentName:"p"},"languages")," array has 3 elements in it, the forEach loop will loop 3 times. For each loop, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," method calls the callback function, passing the value of the current array element into the ",(0,a.kt)("inlineCode",{parentName:"p"},"language")," parameter. Depending on which loop iteration we're on, the value of the current array element will be either ",(0,a.kt)("inlineCode",{parentName:"p"},"'HTML'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'CSS'"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"'JavaScript'"),". That's how our loop creates a separate alert for each language in the array! If this is confusing \u2014 don't worry, we'll get a lot of practice with this."),(0,a.kt)("p",null,"The cool thing here is that the same code that we describe in the callback function is called on every element of the array. This means that our ",(0,a.kt)("inlineCode",{parentName:"p"},"languages")," array could have  a ",(0,a.kt)("em",{parentName:"p"},"thousand")," items, popping up ",(0,a.kt)("em",{parentName:"p"},"one thousand")," alerts as a result. The users of our website will definitely love that. (All joking aside, you should avoid alerts in your code... they are extremely unpopular for obvious reasons \u2014 mainly their obtrusiveness.)"),(0,a.kt)("p",null,"While the above example is not a very useful one, it demonstrates the power of looping. We can execute code on all of the elements of an array instead of just dealing with a single item. As a result, looping is a foundational cornerstone of computer programming and it's one of the most important programming concepts you'll ever learn."),(0,a.kt)("p",null,"In the next lesson, we'll do a deeper dive into using ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),". We'll learn how we can use it to modify arrays, add numbers and more."))}d.isMDXComponent=!0}}]);