"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[56848],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=s(o),c=r,m=h["".concat(p,".").concat(c)]||h[c]||d[c]||a;return o?n.createElement(m,l(l({ref:t},u),{},{components:o})):n.createElement(m,l({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[h]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},19341:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=o(87462),r=(o(67294),o(3905));const a={title:"Optional Review: Which Loop Should I Use?",id:"optional-review-which-loop-should-i-use",slug:"optional-review-which-loop-should-i-use",hide_table_of_contents:!0,sidebar_position:47,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4f_which_loop_should_i_use.md"},l=void 0,i={unversionedId:"introduction-to-programming/arrays-and-looping/optional-review-which-loop-should-i-use",id:"introduction-to-programming/arrays-and-looping/optional-review-which-loop-should-i-use",title:"Optional Review: Which Loop Should I Use?",description:"Note: You can use any kind of loop for this section's independent project provided that you correctly solve the problem. We recommend using Array.prototype.forEach() or for loops for the independent project.",source:"@site/docs/introduction-to-programming/3_arrays-and-looping/4f-which-loop-should-i-use.md",sourceDirName:"introduction-to-programming/3_arrays-and-looping",slug:"/introduction-to-programming/arrays-and-looping/optional-review-which-loop-should-i-use",permalink:"/introduction-to-programming/arrays-and-looping/optional-review-which-loop-should-i-use",draft:!1,tags:[],version:"current",sidebarPosition:47,frontMatter:{title:"Optional Review: Which Loop Should I Use?",id:"optional-review-which-loop-should-i-use",slug:"optional-review-which-loop-should-i-use",hide_table_of_contents:!0,sidebar_position:47,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4f_which_loop_should_i_use.md"},sidebar:"introduction-to-programming",previous:{title:"Further Exploration: While Loops",permalink:"/introduction-to-programming/arrays-and-looping/further-exploration-while-loops"},next:{title:"LinkedIn",permalink:"/introduction-to-programming/arrays-and-looping/linkedin"}},p={},s=[{value:"Which Loop Should I Use?",id:"which-loop-should-i-use",level:2},{value:"<code>for</code>",id:"for",level:2},{value:"Example",id:"example",level:4},{value:"When to Use",id:"when-to-use",level:4},{value:"<code>Array.prototype.forEach()</code>",id:"arrayprototypeforeach",level:2},{value:"Example",id:"example-1",level:4},{value:"When to Use",id:"when-to-use-1",level:4},{value:"<code>for...of</code>",id:"forof",level:2},{value:"Example",id:"example-2",level:4},{value:"When to Use",id:"when-to-use-2",level:4},{value:"<code>Array.prototype.map()</code>",id:"arrayprototypemap",level:2},{value:"Example",id:"example-3",level:4},{value:"When to Use",id:"when-to-use-3",level:4},{value:"<code>while</code> and <code>do...while</code>",id:"while-and-dowhile",level:2},{value:"Example \u2014 <code>while</code>",id:"example--while",level:4},{value:"Example \u2014 <code>do...while</code>",id:"example--dowhile",level:4},{value:"When to Use",id:"when-to-use-4",level:4},{value:"What About a Use Case That Doesn&#39;t Fit Perfectly?",id:"what-about-a-use-case-that-doesnt-fit-perfectly",level:2}],u={toc:s},h="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(h,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: You can use any kind of loop for this section's independent project provided that you correctly solve the problem.")," We recommend using ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," loops for the independent project."),(0,r.kt)("p",null,"Over the course of this section, we've covered many different looping techniques. It may feel overwhelming to decide which loop is best for a specific use case. This lesson will hopefully narrow things down and make life a little easier."),(0,r.kt)("p",null,"Also, it's important to note that at this point in your learning, you shouldn't worry too much about which loop is \"best\" for the job at hand. You should feel free to practice them all \u2014 and also to experiment with code and solutions that interest you. For the upcoming independent project, you will be required to loop \u2014 but how you implement a loop is up to you."),(0,r.kt)("h2",{id:"which-loop-should-i-use"},"Which Loop Should I Use?"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"All of these examples assume that you are starting with the following array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> const array = [0,1,2,3,4,5];\n")),(0,r.kt)("p",null,"Yep, we are returning to the doubled array example \u2014 but this time all of our looping examples are in one place!"),(0,r.kt)("h2",{id:"for"},(0,r.kt)("inlineCode",{parentName:"h2"},"for")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> let doubledArray = [];\n> for (let index = 0; index < array.length; index +=1) {\n  doubledArray.push(array[index] * 2);\n}\n")),(0,r.kt)("h4",{id:"when-to-use"},"When to Use"),(0,r.kt)("p",null,'This is a great "starter" loop. You should practice it frequently \u2014 at least until you get the hang of it. At that point, you should favor other kinds of loops instead! What\'s nice about this loop is that you can break out of it, unlike with ',(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()"),"."),(0,r.kt)("h2",{id:"arrayprototypeforeach"},(0,r.kt)("inlineCode",{parentName:"h2"},"Array.prototype.forEach()")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> let doubledArray = [];\n> array.forEach(function(element) {\n  doubledArray.push(element * 2);\n});\n")),(0,r.kt)("h4",{id:"when-to-use-1"},"When to Use"),(0,r.kt)("p",null,"Use this when both conditions are met:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You want to loop through ",(0,r.kt)("em",{parentName:"li"},"every")," element in an array without breaking out of the loop;"),(0,r.kt)("li",{parentName:"ol"},"You don't want a ",(0,r.kt)("em",{parentName:"li"},"transformed")," array.")),(0,r.kt)("h2",{id:"forof"},(0,r.kt)("inlineCode",{parentName:"h2"},"for...of")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> let doubledArray = [];\n> for (const element of array) {\n  doubledArray.push(element * 2);\n}\n")),(0,r.kt)("h4",{id:"when-to-use-2"},"When to Use"),(0,r.kt)("p",null,"Use this whenever you want to loop through an array, string, or object, but you ",(0,r.kt)("em",{parentName:"p"},"don't")," want to transform the elements into a new string or array. It comes down to preference, but generally you can favor this one over ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),". We can break out of this loop, too, which makes it more versatile than ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),"."),(0,r.kt)("h2",{id:"arrayprototypemap"},(0,r.kt)("inlineCode",{parentName:"h2"},"Array.prototype.map()")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> const doubledArray = array.map(function(element) {\n  return element * 2;\n});\n")),(0,r.kt)("h4",{id:"when-to-use-3"},"When to Use"),(0,r.kt)("p",null,"Use this whenever you want to iterate through every element in an array and create a new array with all of its elements ",(0,r.kt)("em",{parentName:"p"},"transformed"),". "),(0,r.kt)("h2",{id:"while-and-dowhile"},(0,r.kt)("inlineCode",{parentName:"h2"},"while")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"do...while")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"example--while"},"Example \u2014 ",(0,r.kt)("inlineCode",{parentName:"h4"},"while")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> let index = 0;\n> let doubledArray = [];\n> while\n (index < array.length) {\n  doubledArray.push(array[index] * 2);\n  index ++;\n}\n")),(0,r.kt)("h4",{id:"example--dowhile"},"Example \u2014 ",(0,r.kt)("inlineCode",{parentName:"h4"},"do...while")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> let index = 0;\n> let doubledArray = [];\n> do {\n  doubledArray.push(array[index] * 2);\n  index ++;\n} while (index < array.length)\n")),(0,r.kt)("h4",{id:"when-to-use-4"},"When to Use"),(0,r.kt)("p",null,"You won't use this one often \u2014 practice it until you have the hang of it and then use it sparingly. It can be useful when you want to loop only until a specific condition is met \u2014 or when you are writing code that interacts with users."),(0,r.kt)("h2",{id:"what-about-a-use-case-that-doesnt-fit-perfectly"},"What About a Use Case That Doesn't Fit Perfectly?"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Let's look at a use case that doesn't fit perfectly \u2014 and then solve it with two different kinds of loops. Let's say we want to use a loop to create a ",(0,r.kt)("em",{parentName:"p"},"transformed")," string. Should we solve the problem with ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," if we need to transform the string into an array first? Or should we solve it with ",(0,r.kt)("inlineCode",{parentName:"p"},"for...of")," even though we should favor ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," for transformations?"),(0,r.kt)("p",null,"Well, neither approach is wrong. Ultimately, we can try both solutions and see which feels more elegant and concise. Let's return to our ",(0,r.kt)("inlineCode",{parentName:"p"},"for...of")," vowelized loop example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const consonantString = "bdfmxtgl";\n> let vowelizedString = "";\n> for (const letter of consonantString) {\n  vowelizedString = vowelizedString.concat(letter + "a");\n}\n> vowelizedString;\n"badafamaxatagala"\n')),(0,r.kt)("p",null,"Here's how we'd solve the same problem with ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const consonantString = "bdfmxtgl";\n> const consonantArray = consonantString.split("");\n> const vowelizedArray = consonantArray.map(function(element) {\n  return element + "a";\n});\n> vowelizedArray.join(""); \n"badafamaxatagala"\n')),(0,r.kt)("p",null,"Both of these solutions come up with the same answer in the same number of lines. Ultimately, the approach we take here comes down to preference. There are valid reasons for both approaches."),(0,r.kt)("p",null,"You can use just about any kind of loop to solve many problems \u2014 and while there are best practices and ways to improve our code, there's no one right approach."))}d.isMDXComponent=!0}}]);