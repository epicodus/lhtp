"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[17965],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=o,m=u["".concat(s,".").concat(c)]||u[c]||d[c]||r;return n?a.createElement(m,i(i({ref:t},h),{},{components:n})):a.createElement(m,i({ref:t},h))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},19376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"6. forEach Loops",id:"foreach_loops",slug:"foreach_loops",hide_table_of_contents:!0,sidebar_position:19,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3_arrays-and-looping/1d_looping.md"},i=void 0,l={unversionedId:"introduction_to_programming/arrays-and-looping/foreach_loops",id:"introduction_to_programming/arrays-and-looping/foreach_loops",title:"6. forEach Loops",description:"In the last lesson, we wrote our first Array.prototype.forEach() loop. In this lesson, we'll continue to practice this kind of loop. By the end of the lesson, you should have a basic understanding of how to write and apply an Array.prototype.forEach() loop. If you don't, we recommend reading the lesson again. Don't worry \u2014 you don't need to be a master of looping just yet. It's a complex enough concept that it can take time to master. Focus on having a growth mindset, be patient with yourself, and trust that it will make more sense with practice.",source:"@site/docs/introduction_to_programming/3_arrays-and-looping/1d_looping.md",sourceDirName:"introduction_to_programming/3_arrays-and-looping",slug:"/introduction_to_programming/arrays-and-looping/foreach_loops",permalink:"/lhtp/introduction_to_programming/arrays-and-looping/foreach_loops",draft:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"6. forEach Loops",id:"foreach_loops",slug:"foreach_loops",hide_table_of_contents:!0,sidebar_position:19,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3_arrays-and-looping/1d_looping.md"},sidebar:"introduction_to_programming",previous:{title:"5. Introduction to Looping",permalink:"/lhtp/introduction_to_programming/arrays-and-looping/introduction_to_looping"},next:{title:"7. Practice: Looping",permalink:"/lhtp/introduction_to_programming/arrays-and-looping/practice_looping"}},s={},p=[{value:"More Examples of Looping with `Array.prototype.forEach()",id:"more-examples-of-looping-with-arrayprototypeforeach",level:2},{value:"Logging Values to the Console",id:"logging-values-to-the-console",level:3},{value:"Creating a New Array with Modified Elements",id:"creating-a-new-array-with-modified-elements",level:3},{value:"Using a Loop to Sum Numbers",id:"using-a-loop-to-sum-numbers",level:3},{value:"Using <code>debugger;</code> to Study Variables During a Loop",id:"using-debugger-to-study-variables-during-a-loop",level:3},{value:"Using a Loop to Make a String",id:"using-a-loop-to-make-a-string",level:3},{value:"Using A Loop to Add Elements to the DOM",id:"using-a-loop-to-add-elements-to-the-dom",level:3},{value:"Naming Conventions",id:"naming-conventions",level:3}],h={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the last lesson, we wrote our first ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," loop. In this lesson, we'll continue to practice this kind of loop. By the end of the lesson, you should have a basic understanding of how to write and apply an ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," loop. If you don't, we recommend reading the lesson again. Don't worry \u2014 you don't need to be a master of looping just yet. It's a complex enough concept that it can take time to master. Focus on having a growth mindset, be patient with yourself, and trust that it will make more sense with practice."),(0,o.kt)("h2",{id:"more-examples-of-looping-with-arrayprototypeforeach"},"More Examples of Looping with `Array.prototype.forEach()"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"logging-values-to-the-console"},"Logging Values to the Console"),(0,o.kt)("p",null,"Let's start working with numbers instead of alerts. Our first example will just double numbers from an array and then log the doubled value to the console."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> const array = [0,1,2,3,4,5];\n> array.forEach(function(number) { \n  console.log(number * 2);\n});\n")),(0,o.kt)("p",null,"In the example above, our loop calls the anonymous callback function six times \u2014 once for each element in the array. Try it out yourself in the DevTools console."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week3-branching-looping-arrays/Week-3-2020-images/doubled-loop.png",alt:'Image shows the doubled values being logged to the console. The last line in the console states "undefined."'})),(0,o.kt)("p",null,"The first time through the loop, the callback (",(0,o.kt)("inlineCode",{parentName:"p"},"function(number) { console.log(number * 2); }"),") is executed on the first element in the array. The first element is ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"0 * 2")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),", which is logged to the console."),(0,o.kt)("p",null,"The second time through the loop, the callback is executed on the second element in the array. The second element is ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"1 * 2")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),", which is logged to the console."),(0,o.kt)("p",null,"And so on."),(0,o.kt)("p",null,"Note that in the image above, the last line in the console reads ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),". That's because the return value of an ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," loop is ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),". It's really important to understand this. Because ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," does not return anything (hence ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"), we can't store the results of ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," in a variable, something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// this does not work!\n> const array = [0,1,2,3,4,5];\n> const doubledArray = array.forEach(function(number) { \n  return number * 2;\n});\n")),(0,o.kt)("h3",{id:"creating-a-new-array-with-modified-elements"},"Creating a New Array with Modified Elements"),(0,o.kt)("p",null,"So what if we actually want to ",(0,o.kt)("em",{parentName:"p"},"store")," the return values of each element in the array? This is a bit more involved. We need to create another array to hold the doubled values. Then we can use the loop to put the doubled values in the array."),(0,o.kt)("p",null,"Here's how we can do it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> const array = [0,1,2,3,4,5];\n> let doubledArray = [];\n> array.forEach(function(element) {\n  doubledArray.push(element * 2);\n});\n> doubledArray;\n(6)\xa0[0, 2, 4, 6, 8, 10]\n")),(0,o.kt)("p",null,"We create an empty array where the doubled numbers will go. For clarity's sake, we name it ",(0,o.kt)("inlineCode",{parentName:"p"},"doubledArray"),". Note that the original array is a ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," while ",(0,o.kt)("inlineCode",{parentName:"p"},"doubledArray")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"let"),". The original array is not altered. Instead, doubled values will be pushed into the new array. "),(0,o.kt)("p",null,"Next, we loop through our original array. We've changed the parameter in the callback to ",(0,o.kt)("inlineCode",{parentName:"p"},"element")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"number"),". You can call it whatever you wish \u2014 it's just a parameter. However, because a loop iterates through each ",(0,o.kt)("em",{parentName:"p"},"element")," in an array, ",(0,o.kt)("inlineCode",{parentName:"p"},"element")," is a common parameter to pass into a loop's callback."),(0,o.kt)("p",null,"Finally, we push the doubled value into ",(0,o.kt)("inlineCode",{parentName:"p"},"doubledArray"),". Once the loop is finished, we can see that ",(0,o.kt)("inlineCode",{parentName:"p"},"doubledArray")," contains all of the doubled elements."),(0,o.kt)("p",null,"If we want to modify all the elements in an array and save the results using ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),", this is how to do it. We will learn another, cleaner way to do this when we learn about ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," in a future lesson."),(0,o.kt)("h3",{id:"using-a-loop-to-sum-numbers"},"Using a Loop to Sum Numbers"),(0,o.kt)("p",null,"Let's use a loop for a different kind of operation. This time, we will ",(0,o.kt)("em",{parentName:"p"},"add")," all the elements in the array instead. Let's take a look:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> const array = [0,1,2,3,4,5];\n> let sum = 0;\n> array.forEach(function(element) {\n  sum += element;\n});\n> sum;\n15\n")),(0,o.kt)("p",null,"Our original array remains a ",(0,o.kt)("inlineCode",{parentName:"p"},"const"),". Our loop won't ever change it!"),(0,o.kt)("p",null,"Next, we have a ",(0,o.kt)("inlineCode",{parentName:"p"},"sum")," instead of a ",(0,o.kt)("inlineCode",{parentName:"p"},"doubledArray"),". It's not an array \u2014 it's a number. Whenever we want to initialize a variable that adds things together, we'll usually start at ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,o.kt)("p",null,"We loop through each element in the array, calling ",(0,o.kt)("inlineCode",{parentName:"p"},"sum += element;"),". This is shorthand for the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"sum = sum + element;\n")),(0,o.kt)("p",null,"This is another place where things can get really confusing for beginners. This looks like a math problem from algebra. If it were a math problem, ",(0,o.kt)("inlineCode",{parentName:"p"},"element")," would have to be zero. There's no other way to make both sides of that equation work!"),(0,o.kt)("p",null,"But this isn't a math problem here \u2014 it's computer programming. And yes, we ",(0,o.kt)("em",{parentName:"p"},"are")," asking our little program to do math, which can compound the confusion. But this is what we are actually doing in the line above:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// This is pseudo-code!\nnewSum = oldSum + element;\n")),(0,o.kt)("p",null,"We are telling JavaScript to take the value of our ",(0,o.kt)("inlineCode",{parentName:"p"},"sum")," variable (called ",(0,o.kt)("inlineCode",{parentName:"p"},"oldSum")," in our pseudo-code example) and add the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"element")," to it."),(0,o.kt)("p",null,"Here's how this looks each iteration through the loop:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week3-branching-looping-arrays/Week-3-2020-images/loop-chart.png",alt:"This chart shows the changes each iteration through the loop."})),(0,o.kt)("p",null,"In the table above, the first column denotes the number of times the loop has run. The second column is the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"sum")," when that iteration begins \u2014 what we called ",(0,o.kt)("inlineCode",{parentName:"p"},"oldSum")," in our pseudocode. The third column shows what is being evaluated during that iteration of the loop. Finally, the last column shows the value of what we call ",(0,o.kt)("inlineCode",{parentName:"p"},"newSum")," in our pseudocode \u2014 which is the value after the code in that iteration has run."),(0,o.kt)("h3",{id:"using-debugger-to-study-variables-during-a-loop"},"Using ",(0,o.kt)("inlineCode",{parentName:"h3"},"debugger;")," to Study Variables During a Loop"),(0,o.kt)("p",null,"It may also help to study exactly what is happening in the DevTools console. Refresh your browser and then input the following code into the console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> const array = [0,1,2,3,4,5];\n> let sum = 0;\n> let oldSum;\n> let newSum;\n> array.forEach(function(numberToAdd) {\n  debugger;\n  oldSum = sum;\n  sum = oldSum + numberToAdd;\n  newSum = sum;\n});\n")),(0,o.kt)("p",null,"Note that we've added a ",(0,o.kt)("inlineCode",{parentName:"p"},"debugger;")," statement to freeze execution just inside the loop. (Yes! We can in fact use ",(0,o.kt)("inlineCode",{parentName:"p"},"debugger;")," statements in the code we add to our DevTools console.) We've also renamed ",(0,o.kt)("inlineCode",{parentName:"p"},"element")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"numberToAdd")," \u2014 and added ",(0,o.kt)("inlineCode",{parentName:"p"},"oldSum")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"newSum")," variables. These variables are there so we can look at exactly what's happening. Run this code in the console by hitting ",(0,o.kt)("em",{parentName:"p"},"Enter")," and then go to the ",(0,o.kt)("em",{parentName:"p"},"Sources")," tab."),(0,o.kt)("p",null,"Before we step through our code, we are going to make sure we're watching our new variables. Let's add a new tool to our Chrome DevTools repertoire:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week3-branching-looping-arrays/Week-3-2020-images/watching-variables.gif",alt:"We can watch variables by adding them in the _Watch_ tab in _Sources."})),(0,o.kt)("p",null,"In the right-hand pane, we can click ",(0,o.kt)("em",{parentName:"p"},"Watch")," to add variables we want to watch the values of. Note that these values are also available in the ",(0,o.kt)("em",{parentName:"p"},"Scope")," section in the same pane. The benefit of ",(0,o.kt)("em",{parentName:"p"},"Watch")," is that we can manually make sure we are watching the value of variables as they come in and out of scope. You should take advantage of both of these features when you are debugging!"),(0,o.kt)("p",null,"Next, we can step through our code by clicking the blue arrow. When our code is executed, each time the ",(0,o.kt)("inlineCode",{parentName:"p"},"debugger;")," statement is reached, the code will pause. That means the code will pause six times in all \u2014 once for each iteration through the loop. Take a look at how the values change with each iteration."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week3-branching-looping-arrays/debugger-with-foreach-loop-to-sum-numbers.gif",alt:"Step through the code to see how the variables change."})),(0,o.kt)("p",null,"While the GIF above can be helpful, take the time to step through the function in the DevTools debugger at your own pace to make sure you are clear on what's happening. Note that you'll need to clear the console in between each time that you want to run the loop \u2014 that way, you'll clear ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," variables so they can be declared anew again. Otherwise, you'll get ",(0,o.kt)("inlineCode",{parentName:"p"},"Uncaught SyntaxError: Identifier has already been declared"),"."),(0,o.kt)("h3",{id:"using-a-loop-to-make-a-string"},"Using a Loop to Make a String"),(0,o.kt)("p",null,"As we can see, ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," is extremely powerful. We can use it for so many different things. We will run through a few more quick examples. Try them out in the DevTools console!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> let thingsILike = "I like...";\n> const arrayOfThingsILike = ["bubble baths", "kittens", "good books", "clean code"];\n> arrayOfThingsILike.forEach(function(thing) {\n  thingsILike = thingsILike.concat(" " + thing + "!");\n});\n> thingsILike;\n"I like... bubble baths! kittens! good books! clean code!"\n')),(0,o.kt)("p",null,"A few things to note here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We are adding on to a string, not a number. That means ",(0,o.kt)("inlineCode",{parentName:"li"},"thingsILike")," is a string. Often, we will initialize with an empty string ",(0,o.kt)("inlineCode",{parentName:"li"},'""'),", but in this case, we have a string we want to start with: ",(0,o.kt)("inlineCode",{parentName:"li"},'"I like..."'),"."),(0,o.kt)("li",{parentName:"ul"},"We concatenate the current element of the array (which we call ",(0,o.kt)("inlineCode",{parentName:"li"},"thing"),") to the ",(0,o.kt)("inlineCode",{parentName:"li"},"thingsILike")," string. Because ",(0,o.kt)("inlineCode",{parentName:"li"},"String.prototype.concat()")," is not a destructive method, we have to save it in a variable. In this case, we're reassigning the value of the ",(0,o.kt)("inlineCode",{parentName:"li"},"thingsILike")," variable.")),(0,o.kt)("h3",{id:"using-a-loop-to-add-elements-to-the-dom"},"Using A Loop to Add Elements to the DOM"),(0,o.kt)("p",null,"We can also use loops to run code to modify the DOM. Here's a hypothetical example using the things I like array. (The example is hypothetical because we aren't providing the HTML code to make this example work.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> const arrayOfThingsILike = ["bubble baths", "kittens", "good books", "clean code"];\n> const ul = document.querySelector("ul#likable-things");\n> arrayOfThingsILike.forEach(function(thing) {\n  const li = document.createElement("li");\n  li.append(thing);\n  ul.append(li);\n});\n')),(0,o.kt)("p",null,"Here, we are looping through the same array from the ",(0,o.kt)("inlineCode",{parentName:"p"},"arrayOfThingsILike")," example above. The key difference is that each time through the loop we are creating a new list item element, appending the string of the thing I like as its value, and then appending the list item to a unordered list with the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"likable-things")," on our webpage. As a result, we don't need to worry about storing likable things in a variable."),(0,o.kt)("p",null,"In an upcoming lesson, we'll see another example of updating the DOM with a loop when we learn how to use checkboxes."),(0,o.kt)("p",null,"We are really just scratching the surface here. There is so much you can \u2014 and will \u2014 do with loops. At this point, hopefully things are getting a bit clearer. If not, don't panic. Start by rereading the lesson. If things still aren't fully clear, stick with the growth mindset attitude and trust your learning process."),(0,o.kt)("h3",{id:"naming-conventions"},"Naming Conventions"),(0,o.kt)("p",null,"When choosing a name for the variables in your loop, it's good practice to use a plural for the array and the singular form of that word for the parameter of the callback function that's passed into ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> const languages = ['HTML', 'CSS', 'JavaScript'];\n> languages.forEach(function(language) {\n    alert('I love ' + language + '!');\n  });\n")),(0,o.kt)("p",null,"The array is named ",(0,o.kt)("inlineCode",{parentName:"p"},"languages")," and the parameter in the callback function is the singular ",(0,o.kt)("inlineCode",{parentName:"p"},"language"),"."))}d.isMDXComponent=!0}}]);