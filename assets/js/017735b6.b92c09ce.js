"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[99999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>c});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,c=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(c,i(i({ref:t},h),{},{components:n})):a.createElement(c,i({ref:t},h))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={title:"NaN. Looping with for",id:"looping_with_for",slug:"looping_with_for",hide_table_of_contents:!0,sidebar_position:5,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/6_arrays-and-looping-part-2/3c_looping_with_for.md"},i=void 0,l={unversionedId:"introduction_to_programming_part_time/arrays-and-looping-part-2/looping_with_for",id:"introduction_to_programming_part_time/arrays-and-looping-part-2/looping_with_for",title:"NaN. Looping with for",description:"Array.prototype.forEach() is a relatively new addition to JavaScript. Under the hood, it uses what's known as a for loop.",source:"@site/docs/introduction_to_programming_part_time/6_arrays-and-looping-part-2/3c_looping_with_for.md",sourceDirName:"introduction_to_programming_part_time/6_arrays-and-looping-part-2",slug:"/introduction_to_programming_part_time/arrays-and-looping-part-2/looping_with_for",permalink:"/lhtp/introduction_to_programming_part_time/arrays-and-looping-part-2/looping_with_for",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"NaN. Looping with for",id:"looping_with_for",slug:"looping_with_for",hide_table_of_contents:!0,sidebar_position:5,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/6_arrays-and-looping-part-2/3c_looping_with_for.md"},sidebar:"introduction_to_programming_part_time",previous:{title:"NaN. Printing an Array to a Webpage",permalink:"/lhtp/introduction_to_programming_part_time/arrays-and-looping-part-2/printing_an_array_to_a_webpage"},next:{title:"NaN. Practice: Looping with for",permalink:"/lhtp/introduction_to_programming_part_time/arrays-and-looping-part-2/practice_looping_with_for"}},p={},s=[{value:"<code>for</code> Loops",id:"for-loops",level:2},{value:"Using a <code>for</code> Loop with an Array",id:"using-a-for-loop-with-an-array",level:3},{value:"OBOEs in <code>for</code> Loops",id:"oboes-in-for-loops",level:3},{value:"Other Examples of <code>for</code> Loops",id:"other-examples-of-for-loops",level:3}],h={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," is a relatively new addition to JavaScript. Under the hood, it uses what's known as a ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loop."),(0,o.kt)("p",null,"In this lesson, we'll cover how a ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loop works. Then, in the next lesson, we'll discuss when to favor ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," and when to stick with a ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loop. Finally, we'll add a function to our text analyzer application that uses a ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loop."),(0,o.kt)("h2",{id:"for-loops"},(0,o.kt)("inlineCode",{parentName:"h2"},"for")," Loops"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Let's take a look at a basic example of a ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loop. We'll see what it prints to the DevTools console and then we'll go over all of the parts of the loop."),(0,o.kt)("p",null,"Here's a loop that logs the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"index"),". We'll be talking about what the ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," is in just a moment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"> for (let index = 1; index <= 3; index += 1) {\n  console.log(index);\n}\n")),(0,o.kt)("p",null,"Let's see what this logs to the DevTools console."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week3-branching-looping-arrays/Week-3-2020-images/consolelog-for-loop.png",alt:"The for loop logs 1, 2, then 3 and finally undefined."})),(0,o.kt)("p",null,"As we can see, the ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," is an incrementing number. We can also see that the return of a ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loop is ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),", just like it is with ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),". (This isn't surprising \u2014 remember, under the hood, ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," is using a ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loop.)"),(0,o.kt)("p",null,"Here is the syntax of a ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loop. This is pseudocode, which means it isn't written like JavaScript; it's written in plain English to explain how it works."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Pseudocode alert!\n\nfor (let index = startingValue; index <= endingValue; index += increment ) {\n  // Code that should run each time through the loop!\n}\n")),(0,o.kt)("p",null,"Now let's break this down further."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," statement takes three parameters: ",(0,o.kt)("strong",{parentName:"p"},"initialization"),", ",(0,o.kt)("strong",{parentName:"p"},"condition"),", and ",(0,o.kt)("strong",{parentName:"p"},"final expression"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"initialization parameter")," is the starting value of the loop. In the example above, we called it ",(0,o.kt)("inlineCode",{parentName:"p"},"startingValue"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," is a variable we initialize with our starting value. Very often, that starting value is ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),", but depending on your use case, it could be any number."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The initialization parameter is executed ",(0,o.kt)("em",{parentName:"li"},"before")," the loop runs. Because ",(0,o.kt)("inlineCode",{parentName:"li"},"index")," is a variable that changes, we need to use ",(0,o.kt)("inlineCode",{parentName:"li"},"let")," with it. ",(0,o.kt)("inlineCode",{parentName:"li"},"const")," will not work. If we omit ",(0,o.kt)("inlineCode",{parentName:"li"},"let"),", we are accidentally scoping the value of ",(0,o.kt)("inlineCode",{parentName:"li"},"index")," globally \u2014 a very bad idea, especially if there are other ",(0,o.kt)("inlineCode",{parentName:"li"},"for")," loops using ",(0,o.kt)("inlineCode",{parentName:"li"},"index")," in the codebase."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"condition parameter")," tells the loop when to stop running \u2014 or more accurately when to keep running. The loop will stop when the condition is no longer true.  In our first example of a loop, we set the condition parameter to ",(0,o.kt)("inlineCode",{parentName:"p"},"index <= 3"),". This means that when the index variable is NOT less than or equal to 3, the loop will stop.  Until then, it will keep going. The condition is evaluated every time the loop runs. We can use other operators to denote this depending on how our loop works, including ",(0,o.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,o.kt)("inlineCode",{parentName:"p"},">"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},">="),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"final expression parameter")," changes the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," by incrementing or decrementing it for every iteration of the loop. In our example, the index variable will be increased by 1 ",(0,o.kt)("em",{parentName:"p"},"after each time the loop is executed"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Each time the loop runs, the code within the curly brackets will run. In our first example of a loop, we log the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log(index);"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Note that each parameter has a semicolon as a separator. A ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loop will not work without these separators."))),(0,o.kt)("p",null,"In our first example of a loop, we specify that the ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," will start at 1 and end at 3. Each time through the loop, the ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," will increment by 1. The loop will run 3 times before it reaches 3 and ends."),(0,o.kt)("p",null,"Now it's time for a bit of a brainteaser \u2014 how many times will the ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loop below run and what will the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," be in the console each time it runs? See if you can figure it out before running the code in the console."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"for (let index = 1; index < 7; index += 2) {\n  console.log(index);\n}\n")),(0,o.kt)("p",null,"Now let's take a look at the code:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week3-branching-looping-arrays/Week-3-2020-images/consolelog-for-loop2.png",alt:"Console shows index incrementing 1,3,5 and then undefined."})),(0,o.kt)("p",null,"There are a couple of little gotchas here. First, we are incrementing by 2, not 1. That means the value of index will increase like this... ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"3"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"5"),"... The most common increment and decrement is 1, but it's important to see exactly what's happening with the final expression parameter."),(0,o.kt)("p",null,"The other gotcha is where it stops. Did you think the loop would run until the ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," reached ",(0,o.kt)("inlineCode",{parentName:"p"},"7"),"? If so, you're not alone. In the example above, we changed the comparison operator we use in the condition parameter from ",(0,o.kt)("inlineCode",{parentName:"p"},"<=")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"<"),". If we'd used ",(0,o.kt)("inlineCode",{parentName:"p"},"<=")," instead, the loop would've run one more time and the ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," would've ended at ",(0,o.kt)("inlineCode",{parentName:"p"},"7"),"."),(0,o.kt)("p",null,"So as you can see, ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loops can be tricky! We'll discuss that further in the next lesson."),(0,o.kt)("h3",{id:"using-a-for-loop-with-an-array"},"Using a ",(0,o.kt)("inlineCode",{parentName:"h3"},"for")," Loop with an Array"),(0,o.kt)("p",null,"Now that we've dissected a very basic ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loop, how can we actually use it with a collection like an array? Unlike ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),", a ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loop isn't called on an array."),(0,o.kt)("p",null,"Remember how we doubled all the values of an array with ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," and then saved those values in a new array? Here's how we did it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> const array = [0,1,2,3,4,5];\n> let doubledArray = [];\n> array.forEach(function(element) {\n  doubledArray.push(element * 2);\n});\n> doubledArray;\n(6)\xa0[0, 2, 4, 6, 8, 10]\n")),(0,o.kt)("p",null,"Now let's do the same with a ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loop."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> const array = [0,1,2,3,4,5];\n> let doubledArray = [];\n> for (let index = 0; index < array.length; index +=1) {\n  doubledArray.push(array[index] * 2);\n}\n> doubledArray;\n(6)\xa0[0, 2, 4, 6, 8, 10]\n")),(0,o.kt)("p",null,"Some of this should look familiar \u2014 we don't change the ",(0,o.kt)("inlineCode",{parentName:"p"},"array")," we loop over. We also need to initialize a new array called ",(0,o.kt)("inlineCode",{parentName:"p"},"doubledArray")," that we'll push the doubled values into \u2014 just like we did when using ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),"."),(0,o.kt)("p",null,"Now let's look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loop. Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," starts at 0, not 1. If we are looping through an entire array, the index starts at 0 because the index of the first element in an array is 0."),(0,o.kt)("p",null,"Next, we specify that the condition parameter is ",(0,o.kt)("inlineCode",{parentName:"p"},"index < array.length;"),". We could just as easily have written this as ",(0,o.kt)("inlineCode",{parentName:"p"},"index <= array.length - 1"),". Remember, because the index of the first element in an array is 0 instead of 1, the index of the final element in an array will always be one less than the array's length."),(0,o.kt)("p",null,"Finally, we increment the index by 1 each time an iteration through the loop is finished. So why do we want to increment by 1 each time through? Let's look at the code in the loop itself to see why:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"doubledArray.push(array[index] * 2);\n")),(0,o.kt)("p",null,"To access a value from our original ",(0,o.kt)("inlineCode",{parentName:"p"},"array"),", we need to use bracket notation. The first value of ",(0,o.kt)("inlineCode",{parentName:"p"},"array")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"array[0]"),", the second value is ",(0,o.kt)("inlineCode",{parentName:"p"},"array[1]"),", and so on. Well, that matches our index perfectly! That's exactly why we start with an index of ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," when we use ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loops to work with arrays and then increment by ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," until we reach one less than the length of the array."),(0,o.kt)("p",null,"We are going to look at more examples in a moment to solidify ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loops further. But first, an aside to talk about the risk of dreaded OBOEs (off-by-one errors)."),(0,o.kt)("h3",{id:"oboes-in-for-loops"},"OBOEs in ",(0,o.kt)("inlineCode",{parentName:"h3"},"for")," Loops"),(0,o.kt)("p",null,"In general, whenever we are iterating over ",(0,o.kt)("em",{parentName:"p"},"every")," element in an array, we should use ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"for"),". It's not just that it's easier to use. The risk of having an OBOE in a ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loop is much greater. Let's demonstrate two potential OBOEs based on our doubling example. First, let's imagine that our array doubling example is in a real world application where we figure out the total cost of a certain kind of very important widget. We need to double each element in the array and then add them together in order to figure out the final cost of that widget. (And yes, a more complex algorithm would probably be used in the real world to determine that cost, but bear with us \u2014 the exact same errors happen in real world applications.)"),(0,o.kt)("p",null,"Here's the first OBOE. Try it out in the DevTools console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> const array = [0,1,2,3,4,5];\n> let doubledArray = [];\n> for (let index = 0; index <= array.length; index +=1) {\n  doubledArray.push(array[index] * 2);\n}\n> doubledArray;\n(7) [0, 2, 4, 6, 8, 10, NaN]\n")),(0,o.kt)("p",null,"As we can see, we get ",(0,o.kt)("inlineCode",{parentName:"p"},"NaN")," (no a number) as the final array element. Why is this? Well, the final iteration of the loop looks for the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"array[6]"),". There is no element at that index, which returns ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),". What happens when you multiply ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," by a number? You get ",(0,o.kt)("inlineCode",{parentName:"p"},"NaN")," \u2014 because you can't make a number out of it. And what happens when our widget sellers try to calculate the cost of widgets by adding the numbers together? Our formula will return ",(0,o.kt)("inlineCode",{parentName:"p"},"NaN")," \u2014 because when you add a real number to ",(0,o.kt)("inlineCode",{parentName:"p"},"NaN"),", it is still ",(0,o.kt)("inlineCode",{parentName:"p"},"NaN"),"."),(0,o.kt)("p",null,"Now let's take a look at an OBOE in the other direction. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> const array = [0,1,2,3,4,5];\n> let doubledArray = [];\n> for (let index = 0; index < array.length - 1; index +=1) {\n  doubledArray.push(array[index] * 2);\n}\n> doubledArray;\n(5) [0, 2, 4, 6, 8]\n")),(0,o.kt)("p",null,"As we can see, the final number got lopped off. What changed here is that we did the following ",(0,o.kt)("inlineCode",{parentName:"p"},"index < array.length - 1"),". We are saying the final index should be ",(0,o.kt)("em",{parentName:"p"},"two")," less than the length of the array, not one. This error is more insidious \u2014 we can't sell widgets that cost ",(0,o.kt)("inlineCode",{parentName:"p"},"NaN")," \u2014 and that error will probably get caught quickly. However, this returns an actual number \u2014 and if we add all the numbers together, we might be selling widgets at an unsustainable discount. That wouldn't be good!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Lessening the chance of OBOEs is a major reason we should always use ",(0,o.kt)("inlineCode",{parentName:"strong"},"Array.prototype.forEach()")," when we need to iterate through ",(0,o.kt)("em",{parentName:"strong"},"every")," element in an array.")," That being said, you should still take some time to practice using ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loops to do the same thing \u2014 even though in the long term, it won't be the best practice. It's very important to understand a ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loop inside and out regardless of how much you'll end up using them!"),(0,o.kt)("h3",{id:"other-examples-of-for-loops"},"Other Examples of ",(0,o.kt)("inlineCode",{parentName:"h3"},"for")," Loops"),(0,o.kt)("p",null,"Let's look at a few other examples of ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loops. In fact, we will just translate all of the loops we made with ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," into ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loops. That way, you'll have enough of a foundation to practice creating ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loops on your own."),(0,o.kt)("p",null,"We'll start by using a ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loop to add all the numbers in an array together."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"> let total = 0;\n> const summands = [1, 2, 3, 4, 5];\n> for (let index = 0; index < summands.length; index += 1) {\n  total += summands[index];\n}\n> total;\n15\n")),(0,o.kt)("p",null,"Try this out in the DevTools console. You'll see it gives the same result as if we'd done it with ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),"."),(0,o.kt)("p",null,"Here's a corresponding chart that shows what happens each iteration through the loop:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week3-branching-looping-arrays/for-loop-summands.png",alt:"for loop summands charts"})),(0,o.kt)("p",null,"Note that when ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," is 0 here, ",(0,o.kt)("inlineCode",{parentName:"p"},"summands[index]")," is 1 because the first element of the array is 1. ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," is just being used here to refer to a specific element of the array by its index position. It's a bit confusing in this case because the elements of the array are also numbers."),(0,o.kt)("p",null,"Note that we could've created a summands of number 1 through 5 using a ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loop ",(0,o.kt)("em",{parentName:"p"},"without")," creating an array. After all, the ",(0,o.kt)("inlineCode",{parentName:"p"},"array")," variable above just holds an array of sequential numbers. "),(0,o.kt)("p",null,"Here's a version of our sum code that uses a ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loop but doesn't require an array to loop through. Try it in the DevTools console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"> let total = 0;\n> for (let currentNumber = 1; currentNumber <= 5; currentNumber += 1) {\n  total += currentNumber;\n}\n> total;\n15\n")),(0,o.kt)("p",null,"When the loop begins we initialize our loop variable ",(0,o.kt)("inlineCode",{parentName:"p"},"currentNumber")," to 1. Note that we could have used ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," as the variable name here but ",(0,o.kt)("inlineCode",{parentName:"p"},"currentNumber")," is a bit clearer since we'll be making use of the variable for something other than accessing an array by index. Specifically, we'll be adding ",(0,o.kt)("inlineCode",{parentName:"p"},"currentNumber")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"total")," each time through the loop in addition to using it as an iterator. We then execute our loop as long as ",(0,o.kt)("inlineCode",{parentName:"p"},"currentNumber")," is less than or equal to 5, increasing ",(0,o.kt)("inlineCode",{parentName:"p"},"currentNumber")," by 1 after each run through the loop. Here's a chart showing the steps:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week3-branching-looping-arrays/for-loop-sum.png",alt:"for loop sum chart"})),(0,o.kt)("p",null,"The first time through the loop, ",(0,o.kt)("inlineCode",{parentName:"p"},"currentNumber")," is 1, which is <= 5, so we go ahead and execute the statement in the code block: ",(0,o.kt)("inlineCode",{parentName:"p"},"total += currentNumber"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"total")," is now 1 after this first time through the loop. At the end of each time through the loop we're incrementing ",(0,o.kt)("inlineCode",{parentName:"p"},"currentNumber"),", so ",(0,o.kt)("inlineCode",{parentName:"p"},"currentNumber")," is now 2."),(0,o.kt)("p",null,"The second time through the loop, ",(0,o.kt)("inlineCode",{parentName:"p"},"currentNumber")," is 2, which is still <= 5, so again we execute ",(0,o.kt)("inlineCode",{parentName:"p"},"total += currentNumber"),", setting ",(0,o.kt)("inlineCode",{parentName:"p"},"total")," to 3. We again increment ",(0,o.kt)("inlineCode",{parentName:"p"},"currentNumber"),"."),(0,o.kt)("p",null,"The third time through, ",(0,o.kt)("inlineCode",{parentName:"p"},"currentNumber")," is 3, so ",(0,o.kt)("inlineCode",{parentName:"p"},"total")," becomes 6. And we increment ",(0,o.kt)("inlineCode",{parentName:"p"},"currentNumber"),"."),(0,o.kt)("p",null,"The fourth time through, ",(0,o.kt)("inlineCode",{parentName:"p"},"currentNumber")," is 4, so ",(0,o.kt)("inlineCode",{parentName:"p"},"total")," becomes 10 and then we increment ",(0,o.kt)("inlineCode",{parentName:"p"},"currentNumber"),"."),(0,o.kt)("p",null,"The fifth time through, ",(0,o.kt)("inlineCode",{parentName:"p"},"currentNumber")," is 5, so ",(0,o.kt)("inlineCode",{parentName:"p"},"total")," becomes 15 and we increment ",(0,o.kt)("inlineCode",{parentName:"p"},"currentNumber"),"."),(0,o.kt)("p",null,"The sixth time we try to start going through the loop, ",(0,o.kt)("inlineCode",{parentName:"p"},"currentNumber")," is 6, which is ",(0,o.kt)("em",{parentName:"p"},"not")," <= 5, so we're done with the for loop. We then show the user an alert that includes the ",(0,o.kt)("inlineCode",{parentName:"p"},"total"),"."),(0,o.kt)("p",null,"Let's do one more example. This time, we'll recreate the example of appending likable things to a string. For practice, you may want to see if you can recreate the example yourself before looking at the answer. Here's the original using ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> let thingsILike = "I like...";\n> const arrayOfThingsILike = ["bubble baths", "kittens", "good books", "clean code"];\n> arrayOfThingsILike.forEach(function(thing) {\n  thingsILike = thingsILike.concat(" " + thing + "!");\n});\n> thingsILike;\n"I like... bubble baths! kittens! good books! clean code!"\n')),(0,o.kt)("p",null,"Don't look at the translation to a ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loop just yet... try to write it yourself and test it in the DevTools console!"),(0,o.kt)("p",null,"Here's the version that uses a ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loop:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> let thingsILike = "I like...";\n> const arrayOfThingsILike = ["bubble baths", "kittens", "good books", "clean code"];\n> for (let i = 0; i < arrayOfThingsILike.length; i+=1) {\n  thingsILike = thingsILike.concat(" " + arrayOfThingsILike[i] + "!");\n}\n> thingsILike;\n"I like... bubble baths! kittens! good books! clean code!"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note that we use ",(0,o.kt)("inlineCode",{parentName:"strong"},"i")," instead of ",(0,o.kt)("inlineCode",{parentName:"strong"},"index")," for our variable name in our example. When you see ",(0,o.kt)("inlineCode",{parentName:"strong"},"for")," loops in the wild, you'll most commonly see the variable named ",(0,o.kt)("inlineCode",{parentName:"strong"},"i"),".")," This is short for index \u2014 and reflects a desire for maximum conciseness. It's totally fine if you use ",(0,o.kt)("inlineCode",{parentName:"p"},"i")," as well \u2014 though it doesn't hurt to use more descriptive names in the short term, especially if it helps you understand what's going on in a loop."),(0,o.kt)("p",null,"At this point, you're ready to start writing more ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loops on your own. Once again, be patient with yourself if it takes time to absorb these new concepts. Don't be hard on yourself if you have OBOEs or other errors in your code \u2014 they happen to experienced developers, too, and they are an important part of every developer's learning experience."),(0,o.kt)("p",null,"Finally, you may be wondering why we'd ever favor a ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loop over an ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," loop. That's exactly what we'll discuss in the next lesson."))}u.isMDXComponent=!0}}]);