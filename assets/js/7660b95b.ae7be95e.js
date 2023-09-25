"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[12006],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=i.createContext({}),p=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,b=u["".concat(c,".").concat(d)]||u[d]||m[d]||n;return r?i.createElement(b,o(o({ref:t},s),{},{components:r})):i.createElement(b,o({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<n;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43893:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var i=r(87462),a=(r(67294),r(3905));const n={title:"8. Practice: Arithmetic",id:"practice_arithmetic",slug:"practice_arithmetic",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_javascript-and-web-browsers/0h_classwork_practice_arithmetic.md"},o=void 0,l={unversionedId:"introduction_to_programming_classic/javascript-and-web-browsers/practice_arithmetic",id:"introduction_to_programming_classic/javascript-and-web-browsers/practice_arithmetic",title:"8. Practice: Arithmetic",description:"Goal",source:"@site/docs/introduction_to_programming_classic/2_javascript-and-web-browsers/0h_classwork_practice_arithmetic.md",sourceDirName:"introduction_to_programming_classic/2_javascript-and-web-browsers",slug:"/introduction_to_programming_classic/javascript-and-web-browsers/practice_arithmetic",permalink:"/lhtp/introduction_to_programming_classic/javascript-and-web-browsers/practice_arithmetic",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"8. Practice: Arithmetic",id:"practice_arithmetic",slug:"practice_arithmetic",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_javascript-and-web-browsers/0h_classwork_practice_arithmetic.md"},sidebar:"introduction_to_programming_classic",previous:{title:"7. Arithmetic",permalink:"/lhtp/introduction_to_programming_classic/javascript-and-web-browsers/arithmetic"},next:{title:"9. JavaScript Variables",permalink:"/lhtp/introduction_to_programming_classic/javascript-and-web-browsers/javascript_variables"}},c={},p=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Add:",id:"add",level:4},{value:"Subtract:",id:"subtract",level:4},{value:"Multiply:",id:"multiply",level:4},{value:"Divide:",id:"divide",level:4}],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,i.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Goal:"),"   In the Arithmetic lesson, we learned:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to access the DevTools Console."),(0,a.kt)("li",{parentName:"ul"},"Addition, subtraction, multiplication, and division using JavaScript operators."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NaN")," means ",(0,a.kt)("em",{parentName:"li"},"not a number")," but is actually considered a type of number. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Infinity")," represents infinity and is also a type of number.")),(0,a.kt)("p",null,"Begin getting comfortable with these concepts by completing the practice exercises listed below. Soon enough, they'll be second nature!"),(0,a.kt)("h2",{id:"warm-up"},"Warm Up"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Make sure you understand the following before moving on:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What is an expression in JavaScript?"),(0,a.kt)("li",{parentName:"ul"},"How can we access the DevTools console?"),(0,a.kt)("li",{parentName:"ul"},"When might we see ",(0,a.kt)("inlineCode",{parentName:"li"},"NaN"),"?")),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("hr",null),(0,a.kt)("p",null,'Complete the following exercises to practice arithmetic in JavaScript. If you are with a pair, switch off between every section (i.e.: "Add", "Subtract", etc.) or between every prompt (e.g.: "77 to 99", "99 from 665").'),(0,a.kt)("h4",{id:"add"},"Add:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"77 to 99"),(0,a.kt)("li",{parentName:"ul"},"34 to 1233"),(0,a.kt)("li",{parentName:"ul"},"-53 to 99")),(0,a.kt)("h4",{id:"subtract"},"Subtract:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"99 from 665"),(0,a.kt)("li",{parentName:"ul"},"555 from 23"),(0,a.kt)("li",{parentName:"ul"},"6,348,709,234 from 87,023,984,709,871,234")),(0,a.kt)("h4",{id:"multiply"},"Multiply:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"89 and 54"),(0,a.kt)("li",{parentName:"ul"},"932 and 1,900"),(0,a.kt)("li",{parentName:"ul"},"-34 and 8")),(0,a.kt)("h4",{id:"divide"},"Divide:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1008 by 7"),(0,a.kt)("li",{parentName:"ul"},"9,870,834,205,987 by 324"),(0,a.kt)("li",{parentName:"ul"},"A number by 0."),(0,a.kt)("li",{parentName:"ul"},"0 by 0.")))}m.isMDXComponent=!0}}]);