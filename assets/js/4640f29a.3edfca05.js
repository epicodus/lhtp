"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[6104],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||s;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},74222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={title:"10. Strings",id:"strings",slug:"strings",hide_table_of_contents:!0,sidebar_position:10,day:"weekend",type:"lesson",url:"https://github.com/epicodus-classroom/test-intro-2/blob/main/2_javascript_and_web_browsers/0j_strings.md"},o=void 0,i={unversionedId:"test_intro_2/javascript_and_web_browsers/strings",id:"test_intro_2/javascript_and_web_browsers/strings",title:"10. Strings",description:"We've done a lot with numbers, but there's more to this world than just math. Let's look at words.",source:"@site/docs/test_intro_2/2_javascript_and_web_browsers/0j_strings.md",sourceDirName:"test_intro_2/2_javascript_and_web_browsers",slug:"/test_intro_2/javascript_and_web_browsers/strings",permalink:"/lhtp/test_intro_2/javascript_and_web_browsers/strings",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"10. Strings",id:"strings",slug:"strings",hide_table_of_contents:!0,sidebar_position:10,day:"weekend",type:"lesson",url:"https://github.com/epicodus-classroom/test-intro-2/blob/main/2_javascript_and_web_browsers/0j_strings.md"},sidebar:"test_intro_2",previous:{title:"9. JavaScript Variables",permalink:"/lhtp/test_intro_2/javascript_and_web_browsers/javascript_variables"},next:{title:"11. PRACTICE: Variables and Strings",permalink:"/lhtp/test_intro_2/javascript_and_web_browsers/practice_variables_and_strings"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We've done a lot with numbers, but there's more to this world than just math. Let's look at words."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'> "Hello world!";\n"Hello world!"\n')),(0,a.kt)("p",null,"The stuff inside the quotes is called a ",(0,a.kt)("strong",{parentName:"p"},"string"),". Strings can include letters, punctuation, and even numbers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'> "5674";\n"5674"\n> "!?&";\n"!?&"\n> "Strings are wild! ;)";\n"Strings are wild! ;)"\n')),(0,a.kt)("p",null,"What happens if we don't surround our string with quotes?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"> hello;\nx Uncaught ReferenceError: hello is not defined (...)\n")),(0,a.kt)("p",null,"This doesn't work because JavaScript doesn't know what ",(0,a.kt)("inlineCode",{parentName:"p"},"hello")," means when it's not a string. It looks to see if it's a variable or something similar, and if it doesn't find a variable with that name defined anywhere it gives us an error message."),(0,a.kt)("p",null,"We can set variables equal to strings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'> const myString = "Strings can contain characters like @, $, and %.";\nundefined\n')),(0,a.kt)("p",null,"If you want to put a quote inside a string, you have two options. Here's the first:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'> "Quoth the raven, \\"Nevermore.\\"";\n"Quoth the raven, "Nevermore.""\n')),(0,a.kt)("p",null,"The backslashes ",(0,a.kt)("inlineCode",{parentName:"p"},"\\")," in front of the quotes is called an ",(0,a.kt)("strong",{parentName:"p"},"escape"),". It tells JavaScript that the quote ",(0,a.kt)("inlineCode",{parentName:"p"},'"')," that comes right after it is not the end of the string, but just a character inside the string."),(0,a.kt)("p",null,"You can also use single quotes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'> \'"Programming is fun!", she exclaimed.\';\n""Programming is fun!", she exclaimed."\n')),(0,a.kt)("p",null,"JavaScript generally doesn't care if you use single or double quotes to indicate a string. If you have a lot of double quotes within the string, using single quotes to indicate the string saves you from having to escape all of the double quotes inside."),(0,a.kt)("p",null,"Finally, note that we are still using semicolons at the end of each line. By doing so, we can be explicit about where a piece of code terminates (at the end of a line) instead of expecting JavaScript to automatically do it for us."))}d.isMDXComponent=!0}}]);