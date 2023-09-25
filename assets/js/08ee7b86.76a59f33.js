"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[42980],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(o),f=n,g=c["".concat(p,".").concat(f)]||c[f]||d[f]||a;return o?r.createElement(g,i(i({ref:t},u),{},{components:o})):r.createElement(g,i({ref:t},u))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},11377:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=o(87462),n=(o(67294),o(3905));const a={title:"Further Exploration: Looping with for...of",id:"further_exploration_looping_with_forof",slug:"further_exploration_looping_with_forof",hide_table_of_contents:!0,sidebar_position:16,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/6_arrays-and-looping-part-2/4d_looping_with_for_of.md"},i=void 0,l={unversionedId:"introduction_to_programming_part_time_evening/arrays-and-looping-part-2/further_exploration_looping_with_forof",id:"introduction_to_programming_part_time_evening/arrays-and-looping-part-2/further_exploration_looping_with_forof",title:"Further Exploration: Looping with for...of",description:"Note: This lesson is a _further exploration_, and it is not required that you read it!  for...of loops are more syntactic sugar on regular for loops. They are useful for certain kinds of problems such as looping directly over strings.",source:"@site/docs/introduction_to_programming_part_time_evening/6_arrays-and-looping-part-2/4d_looping_with_for_of.md",sourceDirName:"introduction_to_programming_part_time_evening/6_arrays-and-looping-part-2",slug:"/introduction_to_programming_part_time_evening/arrays-and-looping-part-2/further_exploration_looping_with_forof",permalink:"/lhtp/introduction_to_programming_part_time_evening/arrays-and-looping-part-2/further_exploration_looping_with_forof",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"Further Exploration: Looping with for...of",id:"further_exploration_looping_with_forof",slug:"further_exploration_looping_with_forof",hide_table_of_contents:!0,sidebar_position:16,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/6_arrays-and-looping-part-2/4d_looping_with_for_of.md"},sidebar:"introduction_to_programming_part_time_evening",previous:{title:"Practice: Credit Card Validator, Roman Numerals, or Cryptosquare",permalink:"/lhtp/introduction_to_programming_part_time_evening/arrays-and-looping-part-2/practice_credit_card_validator_roman_numerals_or_cryptosquare"},next:{title:"Further Exploration: While Loops",permalink:"/lhtp/introduction_to_programming_part_time_evening/arrays-and-looping-part-2/further_exploration_while_loops"}},p={},s=[{value:"Looping with <code>for...of</code>",id:"looping-with-forof",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note: This lesson is a ",(0,n.kt)("em",{parentName:"strong"},"further exploration"),", and it is not required that you read it!"),"  ",(0,n.kt)("inlineCode",{parentName:"p"},"for...of")," loops are more syntactic sugar on regular ",(0,n.kt)("inlineCode",{parentName:"p"},"for")," loops. They are useful for certain kinds of problems such as looping directly over strings."),(0,n.kt)("p",null,"In this lesson, we'll cover some JavaScript syntactic sugar that we can use to loop over arrays, strings, and other iterable objects. Specifically, we'll take a look at looping with ",(0,n.kt)("inlineCode",{parentName:"p"},"for...of"),", which has advantages over both ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," and standard ",(0,n.kt)("inlineCode",{parentName:"p"},"for")," loops."),(0,n.kt)("h2",{id:"looping-with-forof"},"Looping with ",(0,n.kt)("inlineCode",{parentName:"h2"},"for...of")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"First, we'll take a look at how we can use this kind of loop with an array. Yes, are going to do the thing where we double the numbers again \u2014 if only so we can easily compare the difference between each kind of JavaScript loop."),(0,n.kt)("p",null,"Here's how we can create an array of doubled numbers using ",(0,n.kt)("inlineCode",{parentName:"p"},"for...of"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"> const array = [0,1,2,3,4,5];\n> let doubledArray = [];\n> for (const element of array) {\n  doubledArray.push(element * 2);\n}\n> doubledArray;\n(6) [0, 2, 4, 6, 8, 10]\n")),(0,n.kt)("p",null,'At this point, you might be thinking "so what?" It\'s just as easy to use ',(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," \u2014 why not just use that to loop over arrays instead?"),(0,n.kt)("p",null,"Well, check this out:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'> const array = [0,1,2,3,4,5];\n> let doubledArray = [];\n> for (const element of array) {\n  doubledArray.push(element * 2);\n  console.log("Never mind!");\n  break;\n}\n> doubledArray;\n(1) [0]\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Unlike with ",(0,n.kt)("inlineCode",{parentName:"strong"},"Array.prototype.forEach()"),", we can break out of a ",(0,n.kt)("inlineCode",{parentName:"strong"},"for...of")," loop with either a ",(0,n.kt)("inlineCode",{parentName:"strong"},"break;")," statement or a return statement.")," That's a pretty big advantage. As you can see, ",(0,n.kt)("inlineCode",{parentName:"p"},"for...of")," loops don't have issues with OBOEs \u2014 we can just use them to iterate through any array, breaking out of them when we need to."),(0,n.kt)("p",null,"Pretty awesome \u2014 and more convenient than either a ",(0,n.kt)("inlineCode",{parentName:"p"},"for")," loop or ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," when iterating over arrays."),(0,n.kt)("p",null,"But wait! ",(0,n.kt)("inlineCode",{parentName:"p"},"for...of")," loops get better. We can use ",(0,n.kt)("inlineCode",{parentName:"p"},"for...of")," to iterate over strings, too. For instance:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'> const consonantString = "bdfmxtgl";\n> let vowelizedString = "";\n> for (const letter of consonantString) {\n  vowelizedString = vowelizedString.concat(letter + "a");\n}\n> vowelizedString;\n"badafamaxatagala"\n')),(0,n.kt)("p",null,"This returns the string ",(0,n.kt)("inlineCode",{parentName:"p"},'"badafamaxatagala"'),"."),(0,n.kt)("p",null,"Very convenient! This is another huge advantage of ",(0,n.kt)("inlineCode",{parentName:"p"},"for...of"),". ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," can't iterate over strings."),(0,n.kt)("p",null,"By the way, you might be thinking \"Hey! Why didn't I learn about this ",(0,n.kt)("em",{parentName:"p"},"before")," the Pig Latin project? It might've been helpful!\" Well, maybe so \u2014 but it's also important to practice using methods like ",(0,n.kt)("inlineCode",{parentName:"p"},"String.prototype.split()")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.join()")," \u2014 plus good old fashioned basic ",(0,n.kt)("inlineCode",{parentName:"p"},"for")," loops \u2014 all practice that we might be able to skip if we jumped right to ",(0,n.kt)("inlineCode",{parentName:"p"},"for...of")," loops."),(0,n.kt)("p",null,"In general, you can (and should) use ",(0,n.kt)("inlineCode",{parentName:"p"},"for...of")," whenever you want to iterate over strings or arrays \u2014 even if you don't plan to break or return out of these loops. There are always use cases when you'll want to use a different kind of JavaScript loop but this is a good all-purpose loop \u2014 a tool that you'll reach for often because it's flexible, concise, and gets the job done."))}d.isMDXComponent=!0}}]);