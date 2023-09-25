"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[74879],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,d=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(d,i(i({ref:t},h),{},{components:n})):a.createElement(d,i({ref:t},h))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"6. Bracket Notation",id:"bracket_notation",slug:"bracket_notation",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3_arrays-and-looping/0f_looking_into_an_array.md"},i=void 0,l={unversionedId:"introduction_to_programming_classic/arrays-and-looping/bracket_notation",id:"introduction_to_programming_classic/arrays-and-looping/bracket_notation",title:"6. Bracket Notation",description:"Now that we know what an array is, let's learn how to work with them. In this lesson, we'll learn how to peek inside an array to look at a value. We'll also learn about the length property of arrays as well as a gotcha that can cause major bugs when we are working with arrays.",source:"@site/docs/introduction_to_programming_classic/3_arrays-and-looping/0f_looking_into_an_array.md",sourceDirName:"introduction_to_programming_classic/3_arrays-and-looping",slug:"/introduction_to_programming_classic/arrays-and-looping/bracket_notation",permalink:"/lhtp/introduction_to_programming_classic/arrays-and-looping/bracket_notation",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"6. Bracket Notation",id:"bracket_notation",slug:"bracket_notation",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3_arrays-and-looping/0f_looking_into_an_array.md"},sidebar:"introduction_to_programming_classic",previous:{title:"5. Introduction to Arrays",permalink:"/lhtp/introduction_to_programming_classic/arrays-and-looping/introduction_to_arrays"},next:{title:"7. Array Methods",permalink:"/lhtp/introduction_to_programming_classic/arrays-and-looping/array_methods"}},s={},p=[{value:"Looking At Single Values Inside an Array",id:"looking-at-single-values-inside-an-array",level:2},{value:"Getting the Last Element of an Array and OBOEs",id:"getting-the-last-element-of-an-array-and-oboes",level:3},{value:"Summary",id:"summary",level:2}],h={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now that we know what an array is, let's learn how to work with them. In this lesson, we'll learn how to peek inside an array to look at a value. We'll also learn about the ",(0,r.kt)("inlineCode",{parentName:"p"},"length")," property of arrays as well as a gotcha that can cause major bugs when we are working with arrays."),(0,r.kt)("p",null,"As you read through this lesson, optionally use the DevTools console to try out the new code."),(0,r.kt)("h2",{id:"looking-at-single-values-inside-an-array"},"Looking At Single Values Inside an Array"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Let's take a look at our ",(0,r.kt)("inlineCode",{parentName:"p"},"months")," array again (the unmodified version \u2014 not the one we mutated!):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];\n')),(0,r.kt)("p",null,"Let's say we want to grab the first month of the year from this array. We can do this with ",(0,r.kt)("strong",{parentName:"p"},"bracket notation"),". Let's use bracket notation to get the first value of ",(0,r.kt)("inlineCode",{parentName:"p"},"months"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> months[0];\n"january"\n')),(0,r.kt)("p",null,"In the example above, ",(0,r.kt)("inlineCode",{parentName:"p"},"[0]")," is the bracket notation. This states that we want to retrieve the element at the 0 index of the array. In computer programming, the ",(0,r.kt)("strong",{parentName:"p"},"index")," of an array is just its numerical position. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"An array's index always starts at 0, which means the first element has an index of 0, ",(0,r.kt)("em",{parentName:"strong"},"not")," 1 as we might expect.")),(0,r.kt)("p",null,"We can demonstrate with another example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> months[1];\n"february"\n')),(0,r.kt)("p",null,"As we can see, ",(0,r.kt)("inlineCode",{parentName:"p"},"months")," at an index of 1 actually returns the ",(0,r.kt)("em",{parentName:"p"},"second")," element of the array. It's very important for people new to programming to understand this concept right away. While it's a simple concept, it can be a big gotcha, especially at first. We'll cover this gotcha in more detail in just a moment."),(0,r.kt)("h3",{id:"getting-the-last-element-of-an-array-and-oboes"},"Getting the Last Element of an Array and OBOEs"),(0,r.kt)("p",null,"What if we want to grab the last element of an array? "),(0,r.kt)("p",null,"Well, all arrays come with a ",(0,r.kt)("inlineCode",{parentName:"p"},"length")," property. Note that this is a ",(0,r.kt)("strong",{parentName:"p"},"property")," of an array, not a method. We can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"length")," property to find the last element of the ",(0,r.kt)("inlineCode",{parentName:"p"},"months")," array. We'll also illustrate a big gotcha. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> months.length\n12\n> months[months.length];\nundefined\n")),(0,r.kt)("p",null,"In the example above, we can see that the ",(0,r.kt)("inlineCode",{parentName:"p"},"months.length")," property is ",(0,r.kt)("inlineCode",{parentName:"p"},"12"),". That's exactly what we'd expect. Remember that we can pass in a variable, expression, or property directly into the brackets ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")," when we use bracket notation, and that's exactly what we are doing with ",(0,r.kt)("inlineCode",{parentName:"p"},"[months.length]"),". "),(0,r.kt)("p",null,"Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"months")," array has a length of ",(0,r.kt)("inlineCode",{parentName:"p"},"12")," and there are twelve months in a year, and we want to find the twelfth element in the array, the code ",(0,r.kt)("inlineCode",{parentName:"p"},"months[months.length]")," makes sense. However, the return value is ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),". What gives?"),(0,r.kt)("p",null,"Well, that's the gotcha. ",(0,r.kt)("strong",{parentName:"p"},"An array's ",(0,r.kt)("inlineCode",{parentName:"strong"},"length")," property returns the number of elements inside of it.")," In our case, the 12th element of the ",(0,r.kt)("inlineCode",{parentName:"p"},"months")," array actually has an index of 11 because we always start at 0 when determining an element's index. If we use bracket notation to try to find an element that doesn't exist in the array, the return will be ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),". And as we're starting to learn, ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," is often the bane of developers when it comes to JavaScript debugging. "),(0,r.kt)("p",null,"To correctly get the value of the last month, we have to subtract one from the length of the array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> months[months.length - 1];\n"december"\n')),(0,r.kt)("p",null,"This will ",(0,r.kt)("em",{parentName:"p"},"always")," be the case when we are returning the final element of an array. We can even write a very simple little formula to denote this. In the example below, ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," is the array we want to get the last element from:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const lastElementOfArray = array.length - 1;\n")),(0,r.kt)("p",null,"This is a simple gotcha but it's also a big one. Failure to heed this rule leads to what is called an ",(0,r.kt)("strong",{parentName:"p"},"off-by-one error")," \u2014 sometimes known as an OBOE for short. You'd think it would be a simple error to remedy and yet OBOEs are exceedingly common in programming. In this case, an OBOE is exactly what it sounds like \u2014 returning an element from an array that's one element before or after the one you actually want to return."),(0,r.kt)("p",null,"So let's illustrate how big a deal these OBOEs can be. Let's say we have an application that sends reminders for New Year's Eve celebrations. We aren't just sending reminders for one party \u2014 we're in charge of reminders for hundreds or even thousands of celebrations ranging from galas at non-profits to corporate events. We're not a huge company but we are making do and we have a small team of dedicated developers."),(0,r.kt)("p",null,"Now let's say we have an itsy-bitsy little OBOE in our application \u2014 but that OBOE comes when we are calculating the month that the date reminders should be sent out. They ",(0,r.kt)("em",{parentName:"p"},"should")," be sent in late December \u2014 but an OBOE in one direction means they are sent in November instead! It would be a big embarrassment for the company \u2014 and we might lose some clients. But now imagine an OBOE in the other direction \u2014 our application returns ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," instead of a month (because there is no thirteenth month at the 12th position of the array). Now the reminders don't get sent out at all. People don't get their reminders, clients are angry, and most decide they will never use the company's product again."),(0,r.kt)("p",null,"As we can see, OBOEs can really wreak havoc on an application. Likely our company would have error handling that would catch the OBOE, but the point remains: be very careful when working with the index of elements in arrays and keep the possibility of OBOEs in mind."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"To summarize, we can use bracket notation to find any element in an array. Here are a few more examples using the following array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> const numberArray = [1,4,9,3,7,18,63];\n")),(0,r.kt)("p",null,"Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"numberArray")," has 7 elements:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> numberArray.length;\n7\n")),(0,r.kt)("p",null,"We can find the ",(0,r.kt)("em",{parentName:"p"},"third")," element of the array with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> numberArray[2];\n9\n")),(0,r.kt)("p",null,"We can find the ",(0,r.kt)("em",{parentName:"p"},"second from the last")," element of the array with help from the ",(0,r.kt)("inlineCode",{parentName:"p"},"length")," property: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> numberArray[numberArray.length - 2];\n18\n")),(0,r.kt)("p",null,"We can even pass a variable in if we wanted:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> const arrayIndex = 4;\n> numberArray[arrayIndex];\n7\n")),(0,r.kt)("p",null,"Finally, if we ask for an index that doesn't exist in an array, the return will be ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> numberArray[100];\nundefined\n> numberArray[-1];\nundefined\n> numberArray["cat"];\nundefined\n> numberArray["1"];\nundefined\n')),(0,r.kt)("p",null,"The first example above makes sense \u2014 there's no number at the 100th index of an array that only contains 7 elements. Nor can we use negative numbers to find an element in an array. "),(0,r.kt)("p",null,"The other examples may seem a little stranger. You might think that JavaScript would get mad if you pass a string into the square brackets, but nope. Not surprisingly, there's no array element at the ",(0,r.kt)("inlineCode",{parentName:"p"},'"cat"')," index. And ",(0,r.kt)("inlineCode",{parentName:"p"},'"1"')," is a string, not a number, so there's no element at that index, either. It would be nice if JavaScript would throw a helpful error in the last two cases above, but that's just not how JS does things. There are reasons we can pass strings into bracket notation (they have to do with using bracket notation to retrieve properties from objects), but we won't cover that until the next section."),(0,r.kt)("p",null,"In this lesson, we covered some simple concepts in greater depth because they are so important to  understanding arrays. It's essential to be able to peek into an array and grab a value, whether that's working from the beginning or the end of an array. It's equally important to be aware of OBOEs and how devastating they can be to a codebase. Finally, we'll be using the ",(0,r.kt)("inlineCode",{parentName:"p"},"length")," property of arrays a lot \u2014 not just when we are grabbing elements from arrays but also when we begin looping later in this section."),(0,r.kt)("p",null,"Now we're ready to start learning other array methods. We'll do that in the next lesson!"))}u.isMDXComponent=!0}}]);