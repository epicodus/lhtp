"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[19865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,a(a({ref:t},s),{},{components:n})):r.createElement(h,a({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={title:"Practice: Accessing the DOM",id:"practice_accessing_the_dom",slug:"practice_accessing_the_dom",hide_table_of_contents:!0,sidebar_position:2,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2e_classwork_practice_accessing_the_DOM.md"},a=void 0,c={unversionedId:"introduction_to_programming_part_time_evening/javascript-and-web-browsers-part-2/practice_accessing_the_dom",id:"introduction_to_programming_part_time_evening/javascript-and-web-browsers-part-2/practice_accessing_the_dom",title:"Practice: Accessing the DOM",description:"Goal: Practice accessing the DOM by using the document methods we learned about in the previous lesson.",source:"@site/docs/introduction_to_programming_part_time_evening/4_javascript-and-web-browsers-part-2/2e_classwork_practice_accessing_the_DOM.md",sourceDirName:"introduction_to_programming_part_time_evening/4_javascript-and-web-browsers-part-2",slug:"/introduction_to_programming_part_time_evening/javascript-and-web-browsers-part-2/practice_accessing_the_dom",permalink:"/introduction_to_programming_part_time_evening/javascript-and-web-browsers-part-2/practice_accessing_the_dom",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Practice: Accessing the DOM",id:"practice_accessing_the_dom",slug:"practice_accessing_the_dom",hide_table_of_contents:!0,sidebar_position:2,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2e_classwork_practice_accessing_the_DOM.md"},sidebar:"introduction_to_programming_part_time_evening",previous:{title:"Accessing the DOM",permalink:"/introduction_to_programming_part_time_evening/javascript-and-web-browsers-part-2/accessing_the_dom"},next:{title:"JavaScript's Global Object",permalink:"/introduction_to_programming_part_time_evening/javascript-and-web-browsers-part-2/javascript's_global_object"}},l={},p=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code Snippet #1",id:"code-snippet-1",level:3},{value:"Code Snippet #2",id:"code-snippet-2",level:3},{value:"Code",id:"code",level:2},{value:"Cookie Recipe",id:"cookie-recipe",level:3}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Goal:")," Practice accessing the DOM by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"document")," methods we learned about in the previous lesson."),(0,i.kt)("h2",{id:"warm-up"},"Warm Up"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What is an event in computer programming?"),(0,i.kt)("li",{parentName:"ul"},"What is the DOM and how do we access it in our code?"),(0,i.kt)("li",{parentName:"ul"},"Why does variable scope matter?"),(0,i.kt)("li",{parentName:"ul"},"What happens when you don't use ",(0,i.kt)("inlineCode",{parentName:"li"},"let")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"const")," (or ",(0,i.kt)("inlineCode",{parentName:"li"},"var"),") to declare a variable?  Why is that bad?"),(0,i.kt)("li",{parentName:"ul"},'Discuss the knowledge test from the "Variable Scope" lesson with your pair. Does anyone have any confusion? Run through the results you expect for each of the alerts in each of the following code snippets, and test your theories by putting the code into your DevTools console.')),(0,i.kt)("h3",{id:"code-snippet-1"},"Code Snippet #1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'let bunnyName = "Flopsy";\n\nfunction hippityHoppity() {\n  window.alert(bunnyName);\n  bunnyName = "Cottontail";\n}\n\nhippityHoppity();\nwindow.alert(bunnyName);\n')),(0,i.kt)("h3",{id:"code-snippet-2"},"Code Snippet #2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'let bunnyName = "Flopsy";\n\nfunction hippityHoppity() {\n  let bunnyName = "Mopsy";\n  window.alert(bunnyName);\n  bunnyName ="Cottontail";\n}\n\nhippityHoppity();\nwindow.alert(bunnyName);\n')),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"cookie-recipe"},"Cookie Recipe"),(0,i.kt)("p",null,'Clone down the Cookie Recipe HTML and open it in your web browser. Then, use the DevTools console to practice accessing different DOM elements by working through each prompt below. Reference the previous lesson "Accessing the DOM" as needed. You should be able to complete all of the following prompts with just the information in the lesson. '),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Display the entire DOM in your console."),(0,i.kt)("li",{parentName:"ul"},"Access the paragraph element with ",(0,i.kt)("inlineCode",{parentName:"li"},"window.document.querySelector()"),"."),(0,i.kt)("li",{parentName:"ul"},"Access the ",(0,i.kt)("inlineCode",{parentName:"li"},"<em>")," element within the paragraph element (using the correct CSS selector) with ",(0,i.kt)("inlineCode",{parentName:"li"},"window.document.querySelector()"),".")),(0,i.kt)("p",null,"Switch who's driving and observing, and complete the remaining prompts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Display the HTML ",(0,i.kt)("inlineCode",{parentName:"li"},"<body>")," element and all of its contents by accessing the correct ",(0,i.kt)("inlineCode",{parentName:"li"},"window.document")," property."),(0,i.kt)("li",{parentName:"ul"},"Access the H1 tag by the value of its ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," attribute with ",(0,i.kt)("inlineCode",{parentName:"li"},"window.document.getElementById()"),"."),(0,i.kt)("li",{parentName:"ul"},"Access the ",(0,i.kt)("inlineCode",{parentName:"li"},"<ul>")," element by targeting it with its class name (using the correct CSS selector) with ",(0,i.kt)("inlineCode",{parentName:"li"},"window.document.querySelector()"),".")))}d.isMDXComponent=!0}}]);