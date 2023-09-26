"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[43438],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77202:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"ES6 Array and Object Destructuring",id:"es6-array-and-object-destructuring",slug:"es6-array-and-object-destructuring",hide_table_of_contents:!0,sidebar_position:10,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3d_destructuring.md"},i=void 0,s={unversionedId:"intermediate-javascript-part-time-evening/test-driven-development-part-2/es6-array-and-object-destructuring",id:"intermediate-javascript-part-time-evening/test-driven-development-part-2/es6-array-and-object-destructuring",title:"ES6 Array and Object Destructuring",description:"One of the most popular ES6 features is object and array destructuring. Destructuring is the process of taking specific elements from an array or properties from an object and then turning them into variables.",source:"@site/docs/intermediate-javascript-part-time-evening/6_test-driven-development-part-2/3d-destructuring.md",sourceDirName:"intermediate-javascript-part-time-evening/6_test-driven-development-part-2",slug:"/intermediate-javascript-part-time-evening/test-driven-development-part-2/es6-array-and-object-destructuring",permalink:"/intermediate-javascript-part-time-evening/test-driven-development-part-2/es6-array-and-object-destructuring",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"ES6 Array and Object Destructuring",id:"es6-array-and-object-destructuring",slug:"es6-array-and-object-destructuring",hide_table_of_contents:!0,sidebar_position:10,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3d_destructuring.md"},sidebar:"intermediate-javascript-part-time-evening",previous:{title:"Weekday Calculator, Haiku Creator, RPG (Week-Long Project) - Part 3",permalink:"/intermediate-javascript-part-time-evening/test-driven-development-part-2/weekday-calculator-haiku-creator-rpg-week-long-project---part-3"},next:{title:"ES6 Maps and Sets",permalink:"/intermediate-javascript-part-time-evening/test-driven-development-part-2/es6-maps-and-sets"}},l={},c=[{value:"Array Destructuring",id:"array-destructuring",level:2},{value:"Object Destructuring",id:"object-destructuring",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"One of the most popular ES6 features is object and array ",(0,a.kt)("strong",{parentName:"p"},"destructuring"),". Destructuring is the process of taking specific elements from an array or properties from an object and then turning them into variables. "),(0,a.kt)("p",null,"While it's not essential to incorporate this feature in our projects right now, it's a useful convenience. Object destructuring is very common in React, so even if you don't use it much now, it will come up again once we start working with React. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note, that you will not be expected to incorporate destructuring for this section's independent project.")," However, you should recognize destructuring out in the wild, and give it a whirl in your projects."),(0,a.kt)("h2",{id:"array-destructuring"},"Array Destructuring"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Let's say we have an array of numbers that looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const numArray = [1, 2, 3];\n")),(0,a.kt)("p",null,"To get elements from the array and assign them to variables, we might do something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const firstElement = numArray[0];\nconst secondElement = numArray[1];\nconst thirdElement = numArray[2];\n")),(0,a.kt)("p",null,"We can make this process much simpler with array destructuring:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const [firstElement, secondElement, thirdElement] = numArray;\n")),(0,a.kt)("p",null,"In this example, we are destructuring the elements of the array into variables. ",(0,a.kt)("inlineCode",{parentName:"p"},"firstElement")," corresponds to the first element of the array, ",(0,a.kt)("inlineCode",{parentName:"p"},"secondElement")," corresponds to the second element, and so on. We could name these variables anything, but we decided to name them something that would help you make more sense of the example. For example, this would also work:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const [numberOfDogs, numberOfCats, numberOfChicks] = numArray;\n")),(0,a.kt)("p",null,"Try this out in the DevTools console and check the values of each of the variables."),(0,a.kt)("p",null,"And with array destructuring, we've reduced three lines of code to one!"),(0,a.kt)("p",null,"Note that we don't have to destructure the entire array. For instance, if we just need the first element, we could do this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const [firstEl] = numArray;\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"firstElement")," variable is now set to the first element in ",(0,a.kt)("inlineCode",{parentName:"p"},"numArray"),", but there is no ",(0,a.kt)("inlineCode",{parentName:"p"},"secondElement")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"thirdElement"),". If we wanted to get the third element instead, we'd have to provide a comma for every element we don't want to destructure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const [ , , thirdEl] = numArray;\n")),(0,a.kt)("h2",{id:"object-destructuring"},"Object Destructuring"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Object destructuring is both more useful and more common than array destructuring. We can use it to assign specific properties of an object to variables. Here's an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const obj = {\n  color1: "red",\n  color2: "blue",\n  description: "Information we don\'t need",\n  color3: "yellow",\n  anotherProp: "We don\'t need this info, either"\n};\n')),(0,a.kt)("p",null,"Let's say we just want to get the colors from this object. We can destructure them like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { color1, color2, color3 } = obj;\n")),(0,a.kt)("p",null,"In this example, we are pulling out the properties from the object and saving them as constants with the same names. Unlike with array destructuring, with objects, we need to create variables that match the name of the property we are destructuring from the object."),(0,a.kt)("p",null,"Try it in the DevTools console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'color1;\n> "red"\ncolor2;\n> "blue"\ncolor3;\n> "yellow"\n')),(0,a.kt)("p",null,"Since we've only destructured the colors, we don't have equivalent variables for ",(0,a.kt)("inlineCode",{parentName:"p"},"description")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"anotherProp"),"."),(0,a.kt)("p",null,"Let's say we want to take this one step further and create a variable for a property, but the variable should have a ",(0,a.kt)("em",{parentName:"p"},"different")," name from the original property. We can do this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { color1: red, color3: yellow } = obj;\n")),(0,a.kt)("p",null,"Now we have variables for ",(0,a.kt)("inlineCode",{parentName:"p"},"red")," (which corresponds to the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"color1")," property) and ",(0,a.kt)("inlineCode",{parentName:"p"},"yellow")," (which corresponds to the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"color3")," property). This syntax is a little tricky, so let's look at another example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const hero = {\n  name: "Spider-Man",\n  realName: "Peter Parker"\n};\n\nconst { realName: secretName } = hero;\n\nsecretName; // => "Peter Parker"\n')),(0,a.kt)("p",null,"In this example, we created a new variable called ",(0,a.kt)("inlineCode",{parentName:"p"},"secretName")," and we set its value to the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"realName")," property. So, ",(0,a.kt)("inlineCode",{parentName:"p"},"secretName")," is equal to ",(0,a.kt)("inlineCode",{parentName:"p"},'"Peter Parker"'),". The syntax that we're following in pseudocode looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// this is pseudocode!\nconst { objectProperty: newIdentifier } = object;\n")),(0,a.kt)("p",null,"There's a few things to note about this pseudocode syntax:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"object")," represents the object we're destructuring."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"objectProperty")," is the value we want to destructure from the object."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"newIdentifier")," is the new variable we're creating to hold the value of the ",(0,a.kt)("inlineCode",{parentName:"li"},"objectProperty"),".")),(0,a.kt)("p",null,"If this syntax is confusing, or you are worried about being able to remember it, don't worry about either of those. Practice with it a bit, and reference MDN when you find yourself in need of object destructuring to review usage options and syntax. "),(0,a.kt)("p",null,"By the way, the syntax for object destructuring should already look familiar from the import statements we've used with named exports. For instance, as we discussed in the ",(0,a.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/intermediate-javascript/test-driven-development-and-environments-with-javascript/es6-imports-and-exports"},"ES6 Imports and Exports")," lesson, we can do the following: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Triangle, Rectangle, Circle } from './shapes.js';\n")),(0,a.kt)("p",null,"As we can see, import statements that are used with named exports use object destructuring syntax as well."),(0,a.kt)("p",null,"This lesson covers the basics of array and object destructuring, but there are plenty of other things we can do with destructuring, too! Check out the Mozilla documentation on ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"},"Destructuring Assignment")," to learn more."))}d.isMDXComponent=!0}}]);