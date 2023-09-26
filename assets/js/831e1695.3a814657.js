"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[74526],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Practice: Using TDD with Text Analyzer",id:"practice-using-tdd-with-text-analyzer",slug:"practice-using-tdd-with-text-analyzer",hide_table_of_contents:!0,sidebar_position:1,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2j_classwork_extending_text_analyzer_tdd_practice.md",paginationPrev:null},i=void 0,l={unversionedId:"introduction-to-programming-part-time/arrays-and-looping-part-2/practice-using-tdd-with-text-analyzer",id:"introduction-to-programming-part-time/arrays-and-looping-part-2/practice-using-tdd-with-text-analyzer",title:"Practice: Using TDD with Text Analyzer",description:"Goal: Continue to build out the text-analyzer application, making sure to practice TDD, good separation of logic, and DRY code. Keep in mind that separating logic and DRYing up code takes a lot of practice, especially at first. Sometimes it's a struggle just to get your code working, let alone keeping it DRY. However, if you apply TDD and separate your logic, you will find the problem solving process easier and you'll also have an easier time fixing bugs.",source:"@site/docs/introduction-to-programming-part-time/6_arrays-and-looping-part-2/2j-classwork-extending-text-analyzer-tdd-practice.md",sourceDirName:"introduction-to-programming-part-time/6_arrays-and-looping-part-2",slug:"/introduction-to-programming-part-time/arrays-and-looping-part-2/practice-using-tdd-with-text-analyzer",permalink:"/introduction-to-programming-part-time/arrays-and-looping-part-2/practice-using-tdd-with-text-analyzer",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Practice: Using TDD with Text Analyzer",id:"practice-using-tdd-with-text-analyzer",slug:"practice-using-tdd-with-text-analyzer",hide_table_of_contents:!0,sidebar_position:1,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2j_classwork_extending_text_analyzer_tdd_practice.md",paginationPrev:null},sidebar:"introduction-to-programming-part-time",previous:{title:"Homework: Equality Versus Equity",permalink:"/introduction-to-programming-part-time/arrays-and-looping/homework-equality-versus-equity"},next:{title:"Rewriting Git History with Rebase",permalink:"/introduction-to-programming-part-time/arrays-and-looping-part-2/rewriting-git-history-with-rebase"}},s={},p=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Extending Text Analyzer Business Logic",id:"extending-text-analyzer-business-logic",level:3},{value:"Extending Text Analyzer User Interface Logic",id:"extending-text-analyzer-user-interface-logic",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Goal:")," Continue to build out the ",(0,o.kt)("inlineCode",{parentName:"p"},"text-analyzer")," application, making sure to practice TDD, good separation of logic, and DRY code. Keep in mind that separating logic and DRYing up code takes a ",(0,o.kt)("em",{parentName:"p"},"lot")," of practice, especially at first. Sometimes it's a struggle just to get your code working, let alone keeping it DRY. However, if you apply TDD and separate your logic, you will find the problem solving process easier and you'll also have an easier time fixing bugs."),(0,o.kt)("h2",{id:"warm-up"},"Warm Up"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What is separation of logic? Why is it important?"),(0,o.kt)("li",{parentName:"ul"},"What does DRY mean? What are some reasons to DRY our code?"),(0,o.kt)("li",{parentName:"ul"},"What information does the ",(0,o.kt)("inlineCode",{parentName:"li"},"index")," parameter for the callback function we pass into ",(0,o.kt)("inlineCode",{parentName:"li"},"Array.prototype.forEach()")," contain?")),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"At this point, you should have followed along with the lessons to complete the Text Analyzer's UI logic. Now it's time to add some more code! Pick either of the prompts below to complete."),(0,o.kt)("h3",{id:"extending-text-analyzer-business-logic"},"Extending Text Analyzer Business Logic"),(0,o.kt)("p",null,"Write a function that returns how many times each word is used in a passage of text. Then, try organizing the output of words from most used to least used. Use Test-Driven Development to create this new functionality. For instance, this string: ",(0,o.kt)("inlineCode",{parentName:"p"},'"Hi there hey yo hi hi yay yo whoa there whoa yay"')," would return:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Most common words:\nhi: 3\nthere: 2\nhey: 1\nyo: 2\nyay: 2\nwhoa: 2\n")),(0,o.kt)("p",null,"If the most common words were ordered from most used to least, the output should look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Most common words:\nhi: 3\nthere: 2\nyo: 2\nyay: 2\nwhoa: 2\nhey: 1\n")),(0,o.kt)("h3",{id:"extending-text-analyzer-user-interface-logic"},"Extending Text Analyzer User Interface Logic"),(0,o.kt)("p",null,'Write a UI function that only bolds the part of the word that matches. For instance, if you are looking for words that match "pen", the ',(0,o.kt)("inlineCode",{parentName:"p"},"boldPassage()")," method should do this: hap",(0,o.kt)("strong",{parentName:"p"},"pen"),", not this: ",(0,o.kt)("strong",{parentName:"p"},"happen"),". Use Test-Driven Development to create this new functionality."))}d.isMDXComponent=!0}}]);