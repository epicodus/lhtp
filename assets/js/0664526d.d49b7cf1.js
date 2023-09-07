"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[45969],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return a?r.createElement(b,l(l({ref:t},u),{},{components:a})):r.createElement(b,l({ref:t},u))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},82430:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={title:"11. Practice: Variables and Strings",id:"practice_variables_and_strings",slug:"practice_variables_and_strings",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_javascript-and-web-browsers/0k_classwork_practice_variables_and_strings.md"},l=void 0,o={unversionedId:"introduction_to_programming/javascript-and-web-browsers/practice_variables_and_strings",id:"introduction_to_programming/javascript-and-web-browsers/practice_variables_and_strings",title:"11. Practice: Variables and Strings",description:"Goal: Practice creating and utilizing variables and strings by completing the exercises listed below. Variables and strings are both a fundamental building block of programming, so begin getting comfortable with them now!",source:"@site/docs/introduction_to_programming/2_javascript-and-web-browsers/0k_classwork_practice_variables_and_strings.md",sourceDirName:"introduction_to_programming/2_javascript-and-web-browsers",slug:"/introduction_to_programming/javascript-and-web-browsers/practice_variables_and_strings",permalink:"/lhtp/introduction_to_programming/javascript-and-web-browsers/practice_variables_and_strings",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"11. Practice: Variables and Strings",id:"practice_variables_and_strings",slug:"practice_variables_and_strings",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_javascript-and-web-browsers/0k_classwork_practice_variables_and_strings.md"},sidebar:"introduction_to_programming",previous:{title:"10. Strings",permalink:"/lhtp/introduction_to_programming/javascript-and-web-browsers/strings"},next:{title:"12. Methods",permalink:"/lhtp/introduction_to_programming/javascript-and-web-browsers/methods"}},s={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Variables and Strings Practice",id:"variables-and-strings-practice",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Goal:")," Practice creating and utilizing variables and strings by completing the exercises listed below. Variables and strings are both a fundamental building block of programming, so begin getting comfortable with them now!"),(0,n.kt)("p",null,"In the Variables lesson, we learned:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Variables, in JavaScript, are written in lower camelCase."),(0,n.kt)("li",{parentName:"ul"},"In modern JavaScript, variables are created using ",(0,n.kt)("inlineCode",{parentName:"li"},"let")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"const"),"."),(0,n.kt)("li",{parentName:"ul"},"Variables can be used in arithmetic.")),(0,n.kt)("p",null,"In the Strings lesson, we learned:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Strings can include letters, punctuation, and numbers."),(0,n.kt)("li",{parentName:"ul"},"Strings are surrounded with quotation marks (double or single)."),(0,n.kt)("li",{parentName:"ul"},"Variables can be set equal to strings."),(0,n.kt)("li",{parentName:"ul"},"To escape characters use the backslash ",(0,n.kt)("inlineCode",{parentName:"li"},"\\")," character.")),(0,n.kt)("h2",{id:"warm-up"},"Warm Up"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When are ",(0,n.kt)("inlineCode",{parentName:"li"},"let")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"const")," used? What do they mean \u2014 and how are they different from ",(0,n.kt)("inlineCode",{parentName:"li"},"var"),"?"),(0,n.kt)("li",{parentName:"ul"},"How can we use a variable after we've defined it?"),(0,n.kt)("li",{parentName:"ul"},"How do we declare a string?"),(0,n.kt)("li",{parentName:"ul"},"Can we create strings with either single or double quotes?"),(0,n.kt)("li",{parentName:"ul"},"What's the difference between ",(0,n.kt)("inlineCode",{parentName:"li"},'"9"')," with quotes and ",(0,n.kt)("inlineCode",{parentName:"li"},"9")," without?")),(0,n.kt)("h2",{id:"code"},"Code"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"variables-and-strings-practice"},"Variables and Strings Practice"),(0,n.kt)("p",null,"Here are a few exercises for you to practice using variables in the DevTools console:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Set a variable called ",(0,n.kt)("inlineCode",{parentName:"li"},"someName")," equal to your name in a string. We should be able to reassign the value of ",(0,n.kt)("inlineCode",{parentName:"li"},"someName"),", so choose whether you should use ",(0,n.kt)("inlineCode",{parentName:"li"},"let")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"const")," to declare this variable."),(0,n.kt)("li",{parentName:"ul"},"Display the value of ",(0,n.kt)("inlineCode",{parentName:"li"},"someName")," in the console."),(0,n.kt)("li",{parentName:"ul"},"Change the value of ",(0,n.kt)("inlineCode",{parentName:"li"},"someName")," to your pair's name.")),(0,n.kt)("p",null,"Switch who's driving and observing and continue with these next practice items:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Set a variable called ",(0,n.kt)("inlineCode",{parentName:"li"},"favoriteNumber")," equal to your favorite number. The variable ",(0,n.kt)("inlineCode",{parentName:"li"},"favoriteNumber")," should not be able to be reassigned, so choose whether you should use ",(0,n.kt)("inlineCode",{parentName:"li"},"let")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"const")," to declare this variable."),(0,n.kt)("li",{parentName:"ul"},"Calculate what your favorite number divided by 2 is, and save the result in a new variable called ",(0,n.kt)("inlineCode",{parentName:"li"},"halfOfFavNum"),". This variable should not be able to be reassigned, so choose whether you should use ",(0,n.kt)("inlineCode",{parentName:"li"},"let")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"const")," to declare this variable."),(0,n.kt)("li",{parentName:"ul"},"Set another variable called ",(0,n.kt)("inlineCode",{parentName:"li"},"michaelsFavorite")," equal to ",(0,n.kt)("inlineCode",{parentName:"li"},"13"),". We should be able to reassign the value of ",(0,n.kt)("inlineCode",{parentName:"li"},"michaelsFavorite"),", so choose whether you should use ",(0,n.kt)("inlineCode",{parentName:"li"},"let")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"const")," to declare this variable."),(0,n.kt)("li",{parentName:"ul"},"Subtract your favorite number from Michael's."),(0,n.kt)("li",{parentName:"ul"},"Change the value of ",(0,n.kt)("inlineCode",{parentName:"li"},"michaelsFavorite")," to be 26 times its current value.")))}p.isMDXComponent=!0}}]);