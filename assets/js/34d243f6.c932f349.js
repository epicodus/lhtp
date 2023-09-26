"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[38456],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,h=d["".concat(l,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},19436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Array Mapping",id:"array-mapping",slug:"array-mapping",hide_table_of_contents:!0,sidebar_position:42,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4a_array_mapping.md"},i=void 0,p={unversionedId:"introduction-to-programming-classic/arrays-and-looping/array-mapping",id:"introduction-to-programming-classic/arrays-and-looping/array-mapping",title:"Array Mapping",description:"Note: While you are not required to use Array.prototype.map() for this independent project, it is one of the most powerful JavaScript looping methods. We will be covering it more in depth in the React curriculum as well.",source:"@site/docs/introduction-to-programming-classic/3_arrays-and-looping/4a-array-mapping.md",sourceDirName:"introduction-to-programming-classic/3_arrays-and-looping",slug:"/introduction-to-programming-classic/arrays-and-looping/array-mapping",permalink:"/introduction-to-programming-classic/arrays-and-looping/array-mapping",draft:!1,tags:[],version:"current",sidebarPosition:42,frontMatter:{title:"Array Mapping",id:"array-mapping",slug:"array-mapping",hide_table_of_contents:!0,sidebar_position:42,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4a_array_mapping.md"},sidebar:"introduction-to-programming-classic",previous:{title:"Further Exploration: Regular Expressions with Text Analyzer",permalink:"/introduction-to-programming-classic/arrays-and-looping/further-exploration-regular-expressions-with-text-analyzer"},next:{title:"Practice: Array Mapping",permalink:"/introduction-to-programming-classic/arrays-and-looping/practice-array-mapping"}},l={},s=[{value:"<code>Array.prototype.map()</code>",id:"arrayprototypemap",level:2},{value:"When to Use <code>Array.prototype.map()</code>",id:"when-to-use-arrayprototypemap",level:3},{value:"Documentation on MDN",id:"documentation-on-mdn",level:3}],m={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," While you are not required to use ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," for this independent project, it is one of the most powerful JavaScript looping methods. We will be covering it more in depth in the React curriculum as well."),(0,r.kt)("p",null,"So far, we've explored two commonly used JavaScript functions for looping:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Array.prototype.forEach()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"for"))),(0,r.kt)("p",null,"Both of the JavaScript techniques for looping we've learned are very open-ended. They simply loop until a condition is met. We can do whatever we want with that loop, whether that's create a new array with modified elements, sum a value, and so on."),(0,r.kt)("p",null,"However, JavaScript also provides some other high level methods that don't just iterate \u2014 they ",(0,r.kt)("em",{parentName:"p"},"transform")," the array they are looping over. In this lesson, we'll discuss ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()"),", a high level method. Later when we learn about functional programming in the React course, we'll learn about other higher level looping methods like ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.filter()"),"."),(0,r.kt)("h2",{id:"arrayprototypemap"},(0,r.kt)("inlineCode",{parentName:"h2"},"Array.prototype.map()")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"First, what do we mean by ",(0,r.kt)("em",{parentName:"p"},"high level"),"? Well, in the sense of a programming language, a ",(0,r.kt)("em",{parentName:"p"},"low level")," language is one that's close to how a machine operates (such as the assembly language) while a ",(0,r.kt)("em",{parentName:"p"},"high level")," language is one that's closer to how humans think and communicate \u2014 such as JavaScript."),(0,r.kt)("p",null,"While methods like ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," aren't ",(0,r.kt)("em",{parentName:"p"},"low level"),", they are a little bit closer to how our machine thinks: we have to set the start and end conditions as well as an incrementer. We also have to write out all the code that dictates what will happen during each iteration."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," is higher level \u2014 we don't have to specify start and end conditions or an incrementer \u2014 ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),' will automatically iterate through every element in the array. While this makes it "easier" to use in many ways, it\'s also a bit more abstract \u2014 which can be challenging for beginning coders.'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," takes this one step further. If we want to have a new array with modified elements, this method will handle that for us. There is no need to first initialize a new array and then push modified elements into it. For that reason, it's cleaner and uses less code."),(0,r.kt)("p",null,"Let's return to our element-doubling example. We can double each element in an array and save the doubled elements using ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> const array = [0,1,2,3,4,5];\n> let doubledArray = [];\n> array.forEach(function(element) {\n  doubledArray.push(element * 2);\n});\n> doubledArray;\n(6) [0,2,4,6,8,10]\n")),(0,r.kt)("p",null,"Let's see how we can do the same thing with ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> const array = [0,1,2,3,4,5];\n> const doubledArray = array.map(function(element) {\n  return element * 2;\n});\n> doubledArray;\n(6) [0,2,4,6,8,10]\n")),(0,r.kt)("p",null,"As we can see here, we no longer need to initialize an empty array. Instead, we can save the results of ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," inside a variable (which we call ",(0,r.kt)("inlineCode",{parentName:"p"},"doubledArray"),")."),(0,r.kt)("p",null,"Like ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.map")," takes a function as an argument, which is called a callback function."),(0,r.kt)("p",null,"However, there's a huge difference here: we can't use a ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," statement with ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),". With ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()"),", we ",(0,r.kt)("em",{parentName:"p"},"must")," use a ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," statement. "),(0,r.kt)("p",null,"Each time we iterate with ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()"),", we are specifying how the element should be transformed. The transformation occurs and the transformed element will be placed in a new array for us. That's why we need to have a ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," statement within ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," \u2014 to make sure the transformed element gets saved to the new array. "),(0,r.kt)("p",null,'It should be clear how this even more "higher level" than ',(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," \u2014 ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," does more for us, abstracting away the need to initialize a new array and push elements into it."),(0,r.kt)("p",null,"While we ",(0,r.kt)("em",{parentName:"p"},"could")," omit the ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," keyword from our ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," callback (JavaScript won't complain), it will break our code. Without the ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," keyword, ",(0,r.kt)("inlineCode",{parentName:"p"},"doubledArray")," will look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"[undefined, undefined, undefined, undefined, undefined, undefined]\n")),(0,r.kt)("p",null,"This is exactly what happens when we forget to return from a function: the value of the variable storing the invoked function will be ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,r.kt)("p",null,"Another big thing to note here \u2014 ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," returns a transformed array. We can't use it to sum the values of an array (as we can with ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),"). There's actually another method we can use to sum values called ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.reduce()"),". While you're welcome to explore that method on your own, we won't cover it until we discuss functional programming."),(0,r.kt)("h3",{id:"when-to-use-arrayprototypemap"},"When to Use ",(0,r.kt)("inlineCode",{parentName:"h3"},"Array.prototype.map()")),(0,r.kt)("p",null,"When should we favor ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," over ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),"? Well, first a word of caution \u2014 you should really feel solid using ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," before you start experimenting with ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," too much. At this stage in your coding development, it's fine if you only use ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),", at least until you feel very comfortable with it."),(0,r.kt)("p",null,"However, in your long-term development as a coder, there will come a point (sooner rather than later) where you should favor ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," any time you want to create a new array where all the elements have been transformed."),(0,r.kt)("p",null,"We can't use it to return a string as we do when we determine things we like. However, we could do this instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const arrayOfThingsILike = ["bubble baths", "kittens", "good books", "clean code"];\n> const thingsILike = arrayOfThingsILike.map(function(thing) {\n  return "I like " + thing + "!";\n});\n> thingsILike.join(" ");\n> thingsILike;\n(4) [\'I like bubble baths!\', \'I like kittens!\', \'I like good books!\', \'I like clean code!\']\n')),(0,r.kt)("p",null,"In this example, we create an array of transformed strings and then join the elements in the array to get 4 separate sentences."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," is extremely powerful. It is, in fact, one of the most powerful and important methods in JavaScript. If you feel comfortable using ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," and `",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," loops, you can experiment with ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," now. If you are still getting the hang of ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," (which is completely expected and even likely considering we've just started learning about loops), store this information away for now and focus on ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"While you are expected to loop for the next independent project, you are not expected to use `",(0,r.kt)("inlineCode",{parentName:"strong"},"Array.prototype.map()")," \u2014 though you may do so if you wish.")),(0,r.kt)("h3",{id:"documentation-on-mdn"},"Documentation on MDN"),(0,r.kt)("p",null,"For more information, check out ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"},"the Mozilla documentation on ",(0,r.kt)("inlineCode",{parentName:"a"},"Array.prototype.map()"),".")))}u.isMDXComponent=!0}}]);