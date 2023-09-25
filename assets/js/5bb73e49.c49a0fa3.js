"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[70524],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,d=c["".concat(s,".").concat(m)]||c[m]||g[m]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50299:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Printing an Array to a Webpage",id:"printing_an_array_to_a_webpage",slug:"printing_an_array_to_a_webpage",hide_table_of_contents:!0,sidebar_position:34,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3ga_printing_an_array_to_a_webpage.md"},i=void 0,p={unversionedId:"introduction_to_programming/arrays-and-looping/printing_an_array_to_a_webpage",id:"introduction_to_programming/arrays-and-looping/printing_an_array_to_a_webpage",title:"Printing an Array to a Webpage",description:"In this lesson, we'll review how to print the contents of an array to a webpage. To do this, we'll use the webpage you are on right now!",source:"@site/docs/introduction_to_programming/3_arrays-and-looping/3ga_printing_an_array_to_a_webpage.md",sourceDirName:"introduction_to_programming/3_arrays-and-looping",slug:"/introduction_to_programming/arrays-and-looping/printing_an_array_to_a_webpage",permalink:"/introduction_to_programming/arrays-and-looping/printing_an_array_to_a_webpage",draft:!1,tags:[],version:"current",sidebarPosition:34,frontMatter:{title:"Printing an Array to a Webpage",id:"printing_an_array_to_a_webpage",slug:"printing_an_array_to_a_webpage",hide_table_of_contents:!0,sidebar_position:34,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3ga_printing_an_array_to_a_webpage.md"},sidebar:"introduction_to_programming",previous:{title:"Practice: Using TDD with Text Analyzer",permalink:"/introduction_to_programming/arrays-and-looping/practice_using_tdd_with_text_analyzer"},next:{title:"Looping with for",permalink:"/introduction_to_programming/arrays-and-looping/looping_with_for"}},s={},l=[{value:"Printing an Array of Primitives",id:"printing-an-array-of-primitives",level:2},{value:"Output",id:"output",level:3},{value:"Formatting Array Values to Print in a Paragraph",id:"formatting-array-values-to-print-in-a-paragraph",level:3},{value:"Printing an Array of Objects",id:"printing-an-array-of-objects",level:2}],u={toc:l},c="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this lesson, we'll review how to print the contents of an array to a webpage. To do this, we'll use the webpage you are on right now! "),(0,a.kt)("h2",{id:"printing-an-array-of-primitives"},"Printing an Array of Primitives"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"To print an array of primitives to a webpage, we can set the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"innerText")," property of a paragraph element to an array. Let's try this in the DevTools console. In this example, we'll create code that outputs to the section below titled \"output\"."),(0,a.kt)("p",null,"First, we'll create three paragraph elements and we'll add each to the hidden div lower on this page. We'll use 3 paragraph elements, so we can see all examples side by side."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> const div = document.querySelector("div#lesson-ex");\nundefined\n> div;\n<div id="lesson-ex"></div>\n> const p1 = document.createElement("p");\nundefined\n> const p2 = document.createElement("p");\nundefined\n> const p3 = document.createElement("p");\nundefined\n> div.append(p1, p2, p3);\n')),(0,a.kt)("p",null,"Great! Now we have three empty P tag that we can use to print the contents of three arrays. Next let's create a few arrays and try outputting them below. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> const numAr = [2,4,6,8];\n> const stringAr = ["Rhino", "Hippo", "Dingo", "Dodo", "Flamingo"];\n> const morePrimitives = [true, false, undefined, null];\n')),(0,a.kt)("p",null,"Now let's try printing these to the output below. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"> p1.innerText = numAr;\n> p2.innerText = stringAr;\n> p3.innerText = morePrimitives;\n")),(0,a.kt)("p",null,"As we'll see below in the output section as well as in the image that follows, the contents of the array is printed and each element is separated with a comma. This is standard when using this method of printing the contents of an array of primitives: each element is always separated by a comma. If we want to add a space in between the commas of each value, then we'll have to do an extra step."),(0,a.kt)("p",null,"Notice, too, that ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," are represented as nothing on the page, but they are still separated by a comma. "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week3-branching-looping-arrays/printing-array-to-page.png",alt:"This image shows the result of printing the 3 arrays `numAr`, `stringAr`, and `morePrimitives` to the webpage."})),(0,a.kt)("h3",{id:"output"},"Output"),(0,a.kt)("p",null,"There's a div below this line where we'll print the examples arrays from this lesson."),(0,a.kt)("hr",null),(0,a.kt)("div",{id:"lesson-ex"}),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"formatting-array-values-to-print-in-a-paragraph"},"Formatting Array Values to Print in a Paragraph"),(0,a.kt)("p",null,"To format our array values, we can use the built-in array method ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.join()"),". This method will turn an array into a string, separating each element by the argument that we pass into the method. Let's see some examples."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> p1.innerText = numAr.join(" and ");\n> p2.innerText = stringAr.join(", ");\n> p3.innerText = morePrimitives.join();\n')),(0,a.kt)("p",null,'As we can see in the image below and the "output" section above, the argument that we pass into the ',(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.join()")," method determines how our array is rejoined together back into a string."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week3-branching-looping-arrays/using-array-join-method.png",alt:"This image shows the result of calling `Array.prototype.join()` on `numAr`, `stringAr` and `morePrimitives` and printing that result to the webpage."})),(0,a.kt)("h2",{id:"printing-an-array-of-objects"},"Printing an Array of Objects"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We can't print an array of objects (like HTML element objects) to a webpage like we did with an array of primitives. Let's see an example. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> const pTag = document.createElement("p");\nundefined\n> const input = document.createElement("input");\nundefined\n> const objArray = [pTag,input];\nundefined\n> p1.innerText = objArray.join(" and ");\n')),(0,a.kt)("p",null,"If we look up in the \"output\" section above, or the image below, we'll see how our HTML element objects don't print like primitives do: ",(0,a.kt)("inlineCode",{parentName:"p"},"[object HTMLParagraphElement] and [object HTMLInputElement]"),". Note that this is true for any object, not just HTML element objects."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week3-branching-looping-arrays/printing-array-of-objects.png",alt:"This image shows the result of trying to print objects to the webpage."})),(0,a.kt)("p",null,"So what can we do about this? To get the information of an object printed to the webpage, we need to print the value of properties that are set to primitive values, like our P tag's ",(0,a.kt)("inlineCode",{parentName:"p"},"innerText")," property or the input's ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," property."),(0,a.kt)("p",null,"A good example of looping through an array of HTML element objects is the Transportation Survey project that we used to learn how to implement checkboxes earlier in this course section. In that project, we created new paragraph elements for every transportation option that the user checked, and added each paragraph to the DOM in a 'results' section."))}g.isMDXComponent=!0}}]);