"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[22706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},84370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"NaN. Practice: Using TDD with Text Analyzer",id:"practice_using_tdd_with_text_analyzer",slug:"practice_using_tdd_with_text_analyzer",hide_table_of_contents:!0,sidebar_position:1,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/6_arrays-and-looping-part-2/2j_classwork_extending_text_analyzer_tdd_practice.md",paginationPrev:null},o=void 0,l={unversionedId:"introduction_to_programming_part_time_evening/arrays-and-looping-part-2/practice_using_tdd_with_text_analyzer",id:"introduction_to_programming_part_time_evening/arrays-and-looping-part-2/practice_using_tdd_with_text_analyzer",title:"NaN. Practice: Using TDD with Text Analyzer",description:"Goal: Continue to build out the text-analyzer application, making sure to practice TDD, good separation of logic, and DRY code. Keep in mind that separating logic and DRYing up code takes a lot of practice, especially at first. Sometimes it's a struggle just to get your code working, let alone keeping it DRY. However, if you apply TDD and separate your logic, you will find the problem solving process easier and you'll also have an easier time fixing bugs.",source:"@site/docs/introduction_to_programming_part_time_evening/6_arrays-and-looping-part-2/2j_classwork_extending_text_analyzer_tdd_practice.md",sourceDirName:"introduction_to_programming_part_time_evening/6_arrays-and-looping-part-2",slug:"/introduction_to_programming_part_time_evening/arrays-and-looping-part-2/practice_using_tdd_with_text_analyzer",permalink:"/lhtp/introduction_to_programming_part_time_evening/arrays-and-looping-part-2/practice_using_tdd_with_text_analyzer",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"NaN. Practice: Using TDD with Text Analyzer",id:"practice_using_tdd_with_text_analyzer",slug:"practice_using_tdd_with_text_analyzer",hide_table_of_contents:!0,sidebar_position:1,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/6_arrays-and-looping-part-2/2j_classwork_extending_text_analyzer_tdd_practice.md",paginationPrev:null},sidebar:"introduction_to_programming_part_time_evening",previous:{title:"5. Homework: Equality Versus Equity",permalink:"/lhtp/introduction_to_programming_part_time_evening/arrays-and-looping/homework_equality_versus_equity"},next:{title:"NaN. Rewriting Git History with Rebase",permalink:"/lhtp/introduction_to_programming_part_time_evening/arrays-and-looping-part-2/rewriting_git_history_with_rebase"}},s={},p=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Extending Text Analyzer Business Logic",id:"extending-text-analyzer-business-logic",level:3},{value:"Extending Text Analyzer User Interface Logic",id:"extending-text-analyzer-user-interface-logic",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Goal:")," Continue to build out the ",(0,a.kt)("inlineCode",{parentName:"p"},"text-analyzer")," application, making sure to practice TDD, good separation of logic, and DRY code. Keep in mind that separating logic and DRYing up code takes a ",(0,a.kt)("em",{parentName:"p"},"lot")," of practice, especially at first. Sometimes it's a struggle just to get your code working, let alone keeping it DRY. However, if you apply TDD and separate your logic, you will find the problem solving process easier and you'll also have an easier time fixing bugs."),(0,a.kt)("h2",{id:"warm-up"},"Warm Up"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What is separation of logic? Why is it important?"),(0,a.kt)("li",{parentName:"ul"},"What does DRY mean? What are some reasons to DRY our code?"),(0,a.kt)("li",{parentName:"ul"},"What information does the ",(0,a.kt)("inlineCode",{parentName:"li"},"index")," parameter for the callback function we pass into ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.prototype.forEach()")," contain?")),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"At this point, you should have followed along with the lessons to complete the Text Analyzer's UI logic. Now it's time to add some more code! Pick either of the prompts below to complete."),(0,a.kt)("h3",{id:"extending-text-analyzer-business-logic"},"Extending Text Analyzer Business Logic"),(0,a.kt)("p",null,"Write a function that returns how many times each word is used in a passage of text. Then, try organizing the output of words from most used to least used. Use Test-Driven Development to create this new functionality. For instance, this string: ",(0,a.kt)("inlineCode",{parentName:"p"},'"Hi there hey yo hi hi yay yo whoa there whoa yay"')," would return:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Most common words:\nhi: 3\nthere: 2\nhey: 1\nyo: 2\nyay: 2\nwhoa: 2\n")),(0,a.kt)("p",null,"If the most common words were ordered from most used to least, the output should look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Most common words:\nhi: 3\nthere: 2\nyo: 2\nyay: 2\nwhoa: 2\nhey: 1\n")),(0,a.kt)("h3",{id:"extending-text-analyzer-user-interface-logic"},"Extending Text Analyzer User Interface Logic"),(0,a.kt)("p",null,'Write a UI function that only bolds the part of the word that matches. For instance, if you are looking for words that match "pen", the ',(0,a.kt)("inlineCode",{parentName:"p"},"boldPassage()")," method should do this: hap",(0,a.kt)("strong",{parentName:"p"},"pen"),", not this: ",(0,a.kt)("strong",{parentName:"p"},"happen"),". Use Test-Driven Development to create this new functionality."))}d.isMDXComponent=!0}}]);