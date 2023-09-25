"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[2740],{3905:(r,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>y});var a=t(67294);function n(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function o(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,a)}return t}function i(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){n(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function p(r,e){if(null==r)return{};var t,a,n=function(r,e){if(null==r)return{};var t,a,n={},o=Object.keys(r);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(n[t]=r[t]);return n}(r,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(n[t]=r[t])}return n}var l=a.createContext({}),c=function(r){var e=a.useContext(l),t=e;return r&&(t="function"==typeof r?r(e):i(i({},e),r)),t},s=function(r){var e=c(r.components);return a.createElement(l.Provider,{value:e},r.children)},u="mdxType",m={inlineCode:"code",wrapper:function(r){var e=r.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(r,e){var t=r.components,n=r.mdxType,o=r.originalType,l=r.parentName,s=p(r,["components","mdxType","originalType","parentName"]),u=c(t),d=n,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(y,i(i({ref:e},s),{},{components:t})):a.createElement(y,i({ref:e},s))}));function y(r,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof r||n){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=r,p[u]="string"==typeof r?r:n,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},33320:(r,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=t(87462),n=(t(67294),t(3905));const o={title:"2. Practice: Array Mapping",id:"practice_array_mapping",slug:"practice_array_mapping",hide_table_of_contents:!0,sidebar_position:43,day:"thursday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3_arrays-and-looping/4b_classwork_practice_array_mapping.md"},i=void 0,p={unversionedId:"introduction_to_programming_classic/arrays-and-looping/practice_array_mapping",id:"introduction_to_programming_classic/arrays-and-looping/practice_array_mapping",title:"2. Practice: Array Mapping",description:"Goal:  Now that we've learned about Array.prototype.map(), let's further hone our array mapping skills by completing the exercises detailed below.",source:"@site/docs/introduction_to_programming_classic/3_arrays-and-looping/4b_classwork_practice_array_mapping.md",sourceDirName:"introduction_to_programming_classic/3_arrays-and-looping",slug:"/introduction_to_programming_classic/arrays-and-looping/practice_array_mapping",permalink:"/lhtp/introduction_to_programming_classic/arrays-and-looping/practice_array_mapping",draft:!1,tags:[],version:"current",sidebarPosition:43,frontMatter:{title:"2. Practice: Array Mapping",id:"practice_array_mapping",slug:"practice_array_mapping",hide_table_of_contents:!0,sidebar_position:43,day:"thursday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3_arrays-and-looping/4b_classwork_practice_array_mapping.md"},sidebar:"introduction_to_programming_classic",previous:{title:"1. Array Mapping",permalink:"/lhtp/introduction_to_programming_classic/arrays-and-looping/array_mapping"},next:{title:"3. Practice: Credit Card Validator, Roman Numerals, or Cryptosquare",permalink:"/lhtp/introduction_to_programming_classic/arrays-and-looping/practice_credit_card_validator_roman_numerals_or_cryptosquare"}},l={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Array Mapping Practice",id:"array-mapping-practice",level:3}],s={toc:c},u="wrapper";function m(r){let{components:e,...t}=r;return(0,n.kt)(u,(0,a.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Goal"),":  Now that we've learned about ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()"),", let's further hone our array mapping skills by completing the exercises detailed below."),(0,n.kt)("h2",{id:"warm-up"},"Warm Up"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"What is a callback function? How is it different from a plain old function?"),(0,n.kt)("li",{parentName:"ul"},"What portion of the following code is the callback function? What does this particular callback function do?")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const tripledNumbers = [0,3,6,9].map(function(number) {\n  return number * 3;\n});\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Does ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.map()")," alter the array it is called upon?"),(0,n.kt)("li",{parentName:"ul"},"Discuss with your partner when you would use ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.forEach()")," and when it might be better to use ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.map()"),".")),(0,n.kt)("h2",{id:"code"},"Code"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"array-mapping-practice"},"Array Mapping Practice"),(0,n.kt)("p",null,"Complete the following in the JavaScript DevTools console:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make an array of numbers, then use ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.map()")," to return an array containing each of the original numbers + 1."),(0,n.kt)("li",{parentName:"ul"},"Create an array of words. Use ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.map()")," to return an array of the same words in all uppercase.")))}m.isMDXComponent=!0}}]);