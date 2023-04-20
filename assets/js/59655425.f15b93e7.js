"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[6963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},_=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),_=i,y=u["".concat(l,".").concat(_)]||u[_]||d[_]||a;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=_;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}_.displayName="MDXCreateElement"},3403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={title:"26. PRACTICE: Extending Text Analyzer Business Logic with TDD",id:"practice_extending_text_analyzer_business_logic_with_tdd",slug:"practice_extending_text_analyzer_business_logic_with_tdd",hide_table_of_contents:!0,sidebar_position:27,day:"tuesday",type:"lesson"},o=void 0,s={unversionedId:"new_arrays_and_looping/practice_extending_text_analyzer_business_logic_with_tdd",id:"new_arrays_and_looping/practice_extending_text_analyzer_business_logic_with_tdd",title:"26. PRACTICE: Extending Text Analyzer Business Logic with TDD",description:"Goal: Build out the text-analyzer business logic, making sure to practice TDD.",source:"@site/docs/3_new_arrays_and_looping/2e_ classwork_tdd_with_text_analyzer_business_logic.md",sourceDirName:"3_new_arrays_and_looping",slug:"/new_arrays_and_looping/practice_extending_text_analyzer_business_logic_with_tdd",permalink:"/lhtp/new_arrays_and_looping/practice_extending_text_analyzer_business_logic_with_tdd",draft:!1,tags:[],version:"current",sidebarPosition:27,frontMatter:{title:"26. PRACTICE: Extending Text Analyzer Business Logic with TDD",id:"practice_extending_text_analyzer_business_logic_with_tdd",slug:"practice_extending_text_analyzer_business_logic_with_tdd",hide_table_of_contents:!0,sidebar_position:27,day:"tuesday",type:"lesson"},sidebar:"docs",previous:{title:"25. Text Analyzer with TDD: numberOfOccurrencesInText()",permalink:"/lhtp/new_arrays_and_looping/text_analyzer_with_tdd_numberofoccurrencesintext"},next:{title:"27. Separation of Logic: Adding a UI to Text Analyzer",permalink:"/lhtp/new_arrays_and_looping/separation_of_logic_adding_a_ui_to_text_analyzer"}},l={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Extending Text Analyzer Business Logic",id:"extending-text-analyzer-business-logic",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Goal:")," Build out the ",(0,i.kt)("inlineCode",{parentName:"p"},"text-analyzer")," business logic, making sure to practice TDD."),(0,i.kt)("h2",{id:"warm-up"},"Warm Up"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What is TDD? How can it help us solve problems?"),(0,i.kt)("li",{parentName:"ul"},"Can we write multiple tests for one function?"),(0,i.kt)("li",{parentName:"ul"},"What process do we follow when we use TDD when we are writing business logic? This means to ask: when do we write the test, when do we write the code, and when do we run the test?")),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"At this point, you should've followed along with the lessons to build the business logic for the Text Analyzer application. Complete the prompt below that extends the Text Analyzer business logic."),(0,i.kt)("h3",{id:"extending-text-analyzer-business-logic"},"Extending Text Analyzer Business Logic"),(0,i.kt)("p",null,"Write a function that omits offensive words from a text passage. For the purpose of this application, there are only four offensive words to worry about: ",(0,i.kt)("em",{parentName:"p"},"zoinks"),", ",(0,i.kt)("em",{parentName:"p"},"muppeteer"),", ",(0,i.kt)("em",{parentName:"p"},"biffaroni"),", and ",(0,i.kt)("em",{parentName:"p"},"loopdaloop"),". These words make the investors behind Text Analyzer fly into a rage. We recommend not using ",(0,i.kt)("em",{parentName:"p"},"real")," offensive words because they are, well, offensive! Use TDD to build your function."))}d.isMDXComponent=!0}}]);