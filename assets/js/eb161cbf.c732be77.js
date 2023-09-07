"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[75555],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(r),c=n,h=d["".concat(l,".").concat(c)]||d[c]||u[c]||o;return r?a.createElement(h,i(i({ref:t},m),{},{components:r})):a.createElement(h,i({ref:t},m))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},96759:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={title:"1. Array Mapping",id:"array_mapping",slug:"array_mapping",hide_table_of_contents:!0,sidebar_position:13,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/6_arrays-and-looping-part-2/4a_array_mapping.md"},i=void 0,p={unversionedId:"introduction_to_programming_part_time/arrays-and-looping-part-2/array_mapping",id:"introduction_to_programming_part_time/arrays-and-looping-part-2/array_mapping",title:"1. Array Mapping",description:"Note: While you are not required to use Array.prototype.map() for this independent project, it is one of the most powerful JavaScript looping methods. We will be covering it more in depth in the React curriculum as well.",source:"@site/docs/introduction_to_programming_part_time/6_arrays-and-looping-part-2/4a_array_mapping.md",sourceDirName:"introduction_to_programming_part_time/6_arrays-and-looping-part-2",slug:"/introduction_to_programming_part_time/arrays-and-looping-part-2/array_mapping",permalink:"/lhtp/introduction_to_programming_part_time/arrays-and-looping-part-2/array_mapping",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"1. Array Mapping",id:"array_mapping",slug:"array_mapping",hide_table_of_contents:!0,sidebar_position:13,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/6_arrays-and-looping-part-2/4a_array_mapping.md"},sidebar:"introduction_to_programming_part_time",previous:{title:"3. Further Exploration: Regular Expressions with Text Analyzer",permalink:"/lhtp/introduction_to_programming_part_time/arrays-and-looping-part-2/further_exploration_regular_expressions_with_text_analyzer"},next:{title:"2. Practice: Array Mapping",permalink:"/lhtp/introduction_to_programming_part_time/arrays-and-looping-part-2/practice_array_mapping"}},l={},s=[{value:"<code>Array.prototype.map()</code>",id:"arrayprototypemap",level:2},{value:"When to Use <code>Array.prototype.map()</code>",id:"when-to-use-arrayprototypemap",level:3},{value:"Documentation on MDN",id:"documentation-on-mdn",level:3}],m={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," While you are not required to use ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," for this independent project, it is one of the most powerful JavaScript looping methods. We will be covering it more in depth in the React curriculum as well."),(0,n.kt)("p",null,"So far, we've explored two commonly used JavaScript functions for looping:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.forEach()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"for"))),(0,n.kt)("p",null,"Both of the JavaScript techniques for looping we've learned are very open-ended. They simply loop until a condition is met. We can do whatever we want with that loop, whether that's create a new array with modified elements, sum a value, and so on."),(0,n.kt)("p",null,"However, JavaScript also provides some other high level methods that don't just iterate \u2014 they ",(0,n.kt)("em",{parentName:"p"},"transform")," the array they are looping over. In this lesson, we'll discuss ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()"),", a high level method. Later when we learn about functional programming in the React course, we'll learn about other higher level looping methods like ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.filter()"),"."),(0,n.kt)("h2",{id:"arrayprototypemap"},(0,n.kt)("inlineCode",{parentName:"h2"},"Array.prototype.map()")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"First, what do we mean by ",(0,n.kt)("em",{parentName:"p"},"high level"),"? Well, in the sense of a programming language, a ",(0,n.kt)("em",{parentName:"p"},"low level")," language is one that's close to how a machine operates (such as the assembly language) while a ",(0,n.kt)("em",{parentName:"p"},"high level")," language is one that's closer to how humans think and communicate \u2014 such as JavaScript."),(0,n.kt)("p",null,"While methods like ",(0,n.kt)("inlineCode",{parentName:"p"},"for")," aren't ",(0,n.kt)("em",{parentName:"p"},"low level"),", they are a little bit closer to how our machine thinks: we have to set the start and end conditions as well as an incrementer. We also have to write out all the code that dictates what will happen during each iteration."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," is higher level \u2014 we don't have to specify start and end conditions or an incrementer \u2014 ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),' will automatically iterate through every element in the array. While this makes it "easier" to use in many ways, it\'s also a bit more abstract \u2014 which can be challenging for beginning coders.'),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," takes this one step further. If we want to have a new array with modified elements, this method will handle that for us. There is no need to first initialize a new array and then push modified elements into it. For that reason, it's cleaner and uses less code."),(0,n.kt)("p",null,"Let's return to our element-doubling example. We can double each element in an array and save the doubled elements using ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"> const array = [0,1,2,3,4,5];\n> let doubledArray = [];\n> array.forEach(function(element) {\n  doubledArray.push(element * 2);\n});\n> doubledArray;\n(6) [0,2,4,6,8,10]\n")),(0,n.kt)("p",null,"Let's see how we can do the same thing with ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"> const array = [0,1,2,3,4,5];\n> const doubledArray = array.map(function(element) {\n  return element * 2;\n});\n> doubledArray;\n(6) [0,2,4,6,8,10]\n")),(0,n.kt)("p",null,"As we can see here, we no longer need to initialize an empty array. Instead, we can save the results of ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," inside a variable (which we call ",(0,n.kt)("inlineCode",{parentName:"p"},"doubledArray"),")."),(0,n.kt)("p",null,"Like ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.map")," takes a function as an argument, which is called a callback function."),(0,n.kt)("p",null,"However, there's a huge difference here: we can't use a ",(0,n.kt)("inlineCode",{parentName:"p"},"return")," statement with ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),". With ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()"),", we ",(0,n.kt)("em",{parentName:"p"},"must")," use a ",(0,n.kt)("inlineCode",{parentName:"p"},"return")," statement. "),(0,n.kt)("p",null,"Each time we iterate with ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()"),", we are specifying how the element should be transformed. The transformation occurs and the transformed element will be placed in a new array for us. That's why we need to have a ",(0,n.kt)("inlineCode",{parentName:"p"},"return")," statement within ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," \u2014 to make sure the transformed element gets saved to the new array. "),(0,n.kt)("p",null,'It should be clear how this even more "higher level" than ',(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," \u2014 ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," does more for us, abstracting away the need to initialize a new array and push elements into it."),(0,n.kt)("p",null,"While we ",(0,n.kt)("em",{parentName:"p"},"could")," omit the ",(0,n.kt)("inlineCode",{parentName:"p"},"return")," keyword from our ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," callback (JavaScript won't complain), it will break our code. Without the ",(0,n.kt)("inlineCode",{parentName:"p"},"return")," keyword, ",(0,n.kt)("inlineCode",{parentName:"p"},"doubledArray")," will look like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"[undefined, undefined, undefined, undefined, undefined, undefined]\n")),(0,n.kt)("p",null,"This is exactly what happens when we forget to return from a function: the value of the variable storing the invoked function will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,n.kt)("p",null,"Another big thing to note here \u2014 ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," returns a transformed array. We can't use it to sum the values of an array (as we can with ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),"). There's actually another method we can use to sum values called ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.reduce()"),". While you're welcome to explore that method on your own, we won't cover it until we discuss functional programming."),(0,n.kt)("h3",{id:"when-to-use-arrayprototypemap"},"When to Use ",(0,n.kt)("inlineCode",{parentName:"h3"},"Array.prototype.map()")),(0,n.kt)("p",null,"When should we favor ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," over ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),"? Well, first a word of caution \u2014 you should really feel solid using ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," before you start experimenting with ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," too much. At this stage in your coding development, it's fine if you only use ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),", at least until you feel very comfortable with it."),(0,n.kt)("p",null,"However, in your long-term development as a coder, there will come a point (sooner rather than later) where you should favor ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," any time you want to create a new array where all the elements have been transformed."),(0,n.kt)("p",null,"We can't use it to return a string as we do when we determine things we like. However, we could do this instead:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'> const arrayOfThingsILike = ["bubble baths", "kittens", "good books", "clean code"];\n> const thingsILike = arrayOfThingsILike.map(function(thing) {\n  return "I like " + thing + "!";\n});\n> thingsILike.join(" ");\n> thingsILike;\n(4) [\'I like bubble baths!\', \'I like kittens!\', \'I like good books!\', \'I like clean code!\']\n')),(0,n.kt)("p",null,"In this example, we create an array of transformed strings and then join the elements in the array to get 4 separate sentences."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," is extremely powerful. It is, in fact, one of the most powerful and important methods in JavaScript. If you feel comfortable using ",(0,n.kt)("inlineCode",{parentName:"p"},"for")," and `",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," loops, you can experiment with ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," now. If you are still getting the hang of ",(0,n.kt)("inlineCode",{parentName:"p"},"for")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," (which is completely expected and even likely considering we've just started learning about loops), store this information away for now and focus on ",(0,n.kt)("inlineCode",{parentName:"p"},"for")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"While you are expected to loop for the next independent project, you are not expected to use `",(0,n.kt)("inlineCode",{parentName:"strong"},"Array.prototype.map()")," \u2014 though you may do so if you wish.")),(0,n.kt)("h3",{id:"documentation-on-mdn"},"Documentation on MDN"),(0,n.kt)("p",null,"For more information, check out ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"},"the Mozilla documentation on ",(0,n.kt)("inlineCode",{parentName:"a"},"Array.prototype.map()"),".")))}u.isMDXComponent=!0}}]);