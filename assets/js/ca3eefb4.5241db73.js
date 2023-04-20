"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[2982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),y=a,g=d["".concat(s,".").concat(y)]||d[y]||u[y]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"10. PRACTICE: Using TDD with Text Analyzer",id:"practice_using_tdd_with_text_analyzer",slug:"practice_using_tdd_with_text_analyzer",hide_table_of_contents:!0,sidebar_position:32,day:"tuesday",type:"exercise"},i=void 0,l={unversionedId:"new_arrays_and_looping/practice_using_tdd_with_text_analyzer",id:"new_arrays_and_looping/practice_using_tdd_with_text_analyzer",title:"10. PRACTICE: Using TDD with Text Analyzer",description:"Goal: Continue to build out the text-analyzer application, making sure to practice TDD, good separation of logic, and DRY code. Keep in mind that separating logic and DRYing up code takes a lot of practice, especially at first. Sometimes it's a struggle just to get your code working, let alone keeping it DRY. However, if you apply TDD and separate your logic, you will find the problem solving process easier and you'll also have an easier time fixing bugs.",source:"@site/docs/3_new_arrays_and_looping/2j_classwork_extending_text_analyzer_tdd_practice.md",sourceDirName:"3_new_arrays_and_looping",slug:"/new_arrays_and_looping/practice_using_tdd_with_text_analyzer",permalink:"/lhtp/new_arrays_and_looping/practice_using_tdd_with_text_analyzer",draft:!1,tags:[],version:"current",sidebarPosition:32,frontMatter:{title:"10. PRACTICE: Using TDD with Text Analyzer",id:"practice_using_tdd_with_text_analyzer",slug:"practice_using_tdd_with_text_analyzer",hide_table_of_contents:!0,sidebar_position:32,day:"tuesday",type:"exercise"},sidebar:"docs",previous:{title:"9. DRYing Code and Completing the Text Analyzer UI",permalink:"/lhtp/new_arrays_and_looping/drying_code_and_completing_the_text_analyzer_ui"},next:{title:"1. Rewriting Git History with Rebase",permalink:"/lhtp/new_arrays_and_looping/rewriting_git_history_with_rebase"}},s={},p=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Extending Text Analyzer Business Logic",id:"extending-text-analyzer-business-logic",level:3},{value:"Extending Text Analyzer User Interface Logic",id:"extending-text-analyzer-user-interface-logic",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Goal:")," Continue to build out the ",(0,a.kt)("inlineCode",{parentName:"p"},"text-analyzer")," application, making sure to practice TDD, good separation of logic, and DRY code. Keep in mind that separating logic and DRYing up code takes a ",(0,a.kt)("em",{parentName:"p"},"lot")," of practice, especially at first. Sometimes it's a struggle just to get your code working, let alone keeping it DRY. However, if you apply TDD and separate your logic, you will find the problem solving process easier and you'll also have an easier time fixing bugs."),(0,a.kt)("h2",{id:"warm-up"},"Warm Up"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What is separation of logic? Why is it important?"),(0,a.kt)("li",{parentName:"ul"},"What does DRY mean? What are some reasons to DRY our code?"),(0,a.kt)("li",{parentName:"ul"},"What information does the ",(0,a.kt)("inlineCode",{parentName:"li"},"index")," parameter for the callback function we pass into ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.prototype.forEach()")," contain?")),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"At this point, you should have followed along with the lessons to complete the Text Analyzer's UI logic. Now it's time to add some more code! Pick either of the prompts below to complete."),(0,a.kt)("h3",{id:"extending-text-analyzer-business-logic"},"Extending Text Analyzer Business Logic"),(0,a.kt)("p",null,"Write a function that returns how many times each word is used in a passage of text. Then, try organizing the output of words from most used to least used. Use Test-Driven Development to create this new functionality. For instance, this string: ",(0,a.kt)("inlineCode",{parentName:"p"},'"Hi there hey yo hi hi yay yo whoa there whoa yay"')," would return:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Most common words:\nhi: 3\nthere: 2\nhey: 1\nyo: 2\nyay: 2\nwhoa: 2\n")),(0,a.kt)("p",null,"If the most common words were ordered from most used to least, the output should look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Most common words:\nhi: 3\nthere: 2\nyo: 2\nyay: 2\nwhoa: 2\nhey: 1\n")),(0,a.kt)("h3",{id:"extending-text-analyzer-user-interface-logic"},"Extending Text Analyzer User Interface Logic"),(0,a.kt)("p",null,'Write a UI function that only bolds the part of the word that matches. For instance, if you are looking for words that match "pen", the ',(0,a.kt)("inlineCode",{parentName:"p"},"boldPassage()")," method should do this: hap",(0,a.kt)("strong",{parentName:"p"},"pen"),", not this: ",(0,a.kt)("strong",{parentName:"p"},"happen"),". Use Test-Driven Development to create this new functionality."))}u.isMDXComponent=!0}}]);