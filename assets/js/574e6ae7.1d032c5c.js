"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[6267],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37782:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"Strings",id:"strings",slug:"strings",hide_table_of_contents:!0,sidebar_position:13,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3_javascript-and-web-browsers/0j_strings.md"},o=void 0,s={unversionedId:"introduction_to_programming_part_time/javascript-and-web-browsers/strings",id:"introduction_to_programming_part_time/javascript-and-web-browsers/strings",title:"Strings",description:"We've done a lot with numbers, but there's more to this world than just math. Let's look at words.",source:"@site/docs/introduction_to_programming_part_time/3_javascript-and-web-browsers/0j_strings.md",sourceDirName:"introduction_to_programming_part_time/3_javascript-and-web-browsers",slug:"/introduction_to_programming_part_time/javascript-and-web-browsers/strings",permalink:"/lhtp/introduction_to_programming_part_time/javascript-and-web-browsers/strings",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Strings",id:"strings",slug:"strings",hide_table_of_contents:!0,sidebar_position:13,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3_javascript-and-web-browsers/0j_strings.md"},sidebar:"introduction_to_programming_part_time",previous:{title:"JavaScript Variables",permalink:"/lhtp/introduction_to_programming_part_time/javascript-and-web-browsers/javascript_variables"},next:{title:"Practice: Variables and Strings",permalink:"/lhtp/introduction_to_programming_part_time/javascript-and-web-browsers/practice_variables_and_strings"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We've done a lot with numbers, but there's more to this world than just math. Let's look at words."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'> "Hello world!";\n"Hello world!"\n')),(0,a.kt)("p",null,"The stuff inside the quotes is called a ",(0,a.kt)("strong",{parentName:"p"},"string"),". Strings can include letters, punctuation, and even numbers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'> "5674";\n"5674"\n> "!?&";\n"!?&"\n> "Strings are wild! ;)";\n"Strings are wild! ;)"\n')),(0,a.kt)("p",null,"What happens if we don't surround our string with quotes?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"> hello;\nx Uncaught ReferenceError: hello is not defined (...)\n")),(0,a.kt)("p",null,"This doesn't work because JavaScript doesn't know what ",(0,a.kt)("inlineCode",{parentName:"p"},"hello")," means when it's not a string. It looks to see if it's a variable or something similar, and if it doesn't find a variable with that name defined anywhere it gives us an error message."),(0,a.kt)("p",null,"We can set variables equal to strings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'> const myString = "Strings can contain characters like @, $, and %.";\nundefined\n')),(0,a.kt)("p",null,"If you want to put a quote inside a string, you have two options. Here's the first:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'> "Quoth the raven, \\"Nevermore.\\"";\n"Quoth the raven, "Nevermore.""\n')),(0,a.kt)("p",null,"The backslashes ",(0,a.kt)("inlineCode",{parentName:"p"},"\\")," in front of the quotes is called an ",(0,a.kt)("strong",{parentName:"p"},"escape"),". It tells JavaScript that the quote ",(0,a.kt)("inlineCode",{parentName:"p"},'"')," that comes right after it is not the end of the string, but just a character inside the string."),(0,a.kt)("p",null,"You can also use single quotes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'> \'"Programming is fun!", she exclaimed.\';\n""Programming is fun!", she exclaimed."\n')),(0,a.kt)("p",null,"JavaScript generally doesn't care if you use single or double quotes to indicate a string. If you have a lot of double quotes within the string, using single quotes to indicate the string saves you from having to escape all of the double quotes inside."),(0,a.kt)("p",null,"Finally, note that we are still using semicolons at the end of each line. By doing so, we can be explicit about where a piece of code terminates (at the end of a line) instead of expecting JavaScript to automatically do it for us."))}d.isMDXComponent=!0}}]);