"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[85940],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(r),u=a,h=p["".concat(s,".").concat(u)]||p[u]||d[u]||i;return r?n.createElement(h,o(o({ref:t},m),{},{components:r})):n.createElement(h,o({ref:t},m))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},56747:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"Practice: String and Number Methods",id:"practice_string_and_number_methods",slug:"practice_string_and_number_methods",hide_table_of_contents:!0,sidebar_position:18,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3_javascript-and-web-browsers/0o_classwork_practice_string_and_number_methods.md"},o=void 0,l={unversionedId:"introduction_to_programming_part_time/javascript-and-web-browsers/practice_string_and_number_methods",id:"introduction_to_programming_part_time/javascript-and-web-browsers/practice_string_and_number_methods",title:"Practice: String and Number Methods",description:"Goal",source:"@site/docs/introduction_to_programming_part_time/3_javascript-and-web-browsers/0o_classwork_practice_string_and_number_methods.md",sourceDirName:"introduction_to_programming_part_time/3_javascript-and-web-browsers",slug:"/introduction_to_programming_part_time/javascript-and-web-browsers/practice_string_and_number_methods",permalink:"/lhtp/introduction_to_programming_part_time/javascript-and-web-browsers/practice_string_and_number_methods",draft:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"Practice: String and Number Methods",id:"practice_string_and_number_methods",slug:"practice_string_and_number_methods",hide_table_of_contents:!0,sidebar_position:18,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3_javascript-and-web-browsers/0o_classwork_practice_string_and_number_methods.md"},sidebar:"introduction_to_programming_part_time",previous:{title:"String and Number Methods",permalink:"/lhtp/introduction_to_programming_part_time/javascript-and-web-browsers/string_and_number_methods"},next:{title:"Journal #2 Discussion",permalink:"/lhtp/introduction_to_programming_part_time/javascript-and-web-browsers/journal_2_discussion"}},s={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"String Methods Practice",id:"string-methods-practice",level:3},{value:"Number Methods Practice",id:"number-methods-practice",level:3}],m={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Goal"),": In the string and number methods lesson, we learned:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Methods are a type of function. Not all functions are methods."),(0,a.kt)("li",{parentName:"ul"},"Methods always belong to a specific data type."),(0,a.kt)("li",{parentName:"ul"},"We call methods on a receiver."),(0,a.kt)("li",{parentName:"ul"},"There are built-in JavaScript methods for strings and numbers"),(0,a.kt)("li",{parentName:"ul"},"Methods can be chained"),(0,a.kt)("li",{parentName:"ul"},"You can use the ",(0,a.kt)("inlineCode",{parentName:"li"},"+")," operator on strings in place of the ",(0,a.kt)("inlineCode",{parentName:"li"},"concat")," method"),(0,a.kt)("li",{parentName:"ul"},"You can call methods on variables that represent strings or numbers")),(0,a.kt)("p",null,"Now that we've covered methods, strings, and numbers independently, practice common methods meant specifically for strings and numbers by completing the exercises listed below."),(0,a.kt)("h2",{id:"warm-up"},"Warm Up"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What is a receiver for a method? "),(0,a.kt)("li",{parentName:"ul"},"What is the difference between a function and a method?"),(0,a.kt)("li",{parentName:"ul"},"What is a return value? What does it represent?"),(0,a.kt)("li",{parentName:"ul"},"What is an argument? How do you provide one to a method in JavaScript?"),(0,a.kt)("li",{parentName:"ul"},"What does 'chaining' methods mean? What does that look like?"),(0,a.kt)("li",{parentName:"ul"},"Name one string method."),(0,a.kt)("li",{parentName:"ul"},"Name one number method."),(0,a.kt)("li",{parentName:"ul"},"Name two ways to combine multiple strings together.")),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Complete both of the prompts below."),(0,a.kt)("h3",{id:"string-methods-practice"},"String Methods Practice"),(0,a.kt)("p",null,"Practice calling methods on strings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Concatenate the following strings together:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"hi"')," and ",(0,a.kt)("inlineCode",{parentName:"li"},'"there"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"hey"'),", ",(0,a.kt)("inlineCode",{parentName:"li"},'"there"'),", and ",(0,a.kt)("inlineCode",{parentName:"li"},'"friend!')))),(0,a.kt)("li",{parentName:"ul"},"Uppercase the following string: ",(0,a.kt)("inlineCode",{parentName:"li"},'"hey there friend!"')),(0,a.kt)("li",{parentName:"ul"},"Uppercase just the ",(0,a.kt)("inlineCode",{parentName:"li"},'"hey"')," and then concatenate it to ",(0,a.kt)("inlineCode",{parentName:"li"},'"there"')," and ",(0,a.kt)("inlineCode",{parentName:"li"},'"friend!"'))),(0,a.kt)("h3",{id:"number-methods-practice"},"Number Methods Practice"),(0,a.kt)("p",null,"Practice calling methods on numbers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set a variable equal to a number."),(0,a.kt)("li",{parentName:"ul"},"Call a method on that variable that turns the number into a string."),(0,a.kt)("li",{parentName:"ul"},"Set a new variable equal to ",(0,a.kt)("inlineCode",{parentName:"li"},"3.14159265359"),"."),(0,a.kt)("li",{parentName:"ul"},"Call a method on the new variable that limits the number of decimals to ",(0,a.kt)("inlineCode",{parentName:"li"},"3")," so that the result is ",(0,a.kt)("inlineCode",{parentName:"li"},"3.141"),".")))}d.isMDXComponent=!0}}]);