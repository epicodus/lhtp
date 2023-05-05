"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[900],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"1. Building a Text Analyzer",id:"building_a_text_analyzer",slug:"building_a_text_analyzer",hide_table_of_contents:!0,sidebar_position:23,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-classroom/test-intro/blob/main/3_new_arrays_and_looping/2a_building_a_text_analyzer_app.md"},i=void 0,l={unversionedId:"new_arrays_and_looping/building_a_text_analyzer",id:"new_arrays_and_looping/building_a_text_analyzer",title:"1. Building a Text Analyzer",description:"In this lesson, we'll start building a small application that can analyze a passage of text (such as a paragraph). It will count the total number of words in the passage, the total number of sentences, the number of times a specific word comes up, and so on. These kinds of applications are very helpful in the real world and we use them all the time in word processors such as Word, Google Docs, and Pages.",source:"@site/docs/3_new_arrays_and_looping/2a_building_a_text_analyzer_app.md",sourceDirName:"3_new_arrays_and_looping",slug:"/new_arrays_and_looping/building_a_text_analyzer",permalink:"/lhtp/new_arrays_and_looping/building_a_text_analyzer",draft:!1,tags:[],version:"current",sidebarPosition:23,frontMatter:{title:"1. Building a Text Analyzer",id:"building_a_text_analyzer",slug:"building_a_text_analyzer",hide_table_of_contents:!0,sidebar_position:23,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-classroom/test-intro/blob/main/3_new_arrays_and_looping/2a_building_a_text_analyzer_app.md"},sidebar:"docs",previous:{title:"9. Homework: Equality Versus Equity",permalink:"/lhtp/new_arrays_and_looping/homework_equality_versus_equity"},next:{title:"2. Overview of Test-Driven Development (TDD) with Text Analyzer",permalink:"/lhtp/new_arrays_and_looping/overview_of_test_driven_development_tdd_with_text_analyzer"}},s={},p=[],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this lesson, we'll start building a small application that can analyze a passage of text (such as a paragraph). It will count the total number of words in the passage, the total number of sentences, the number of times a specific word comes up, and so on. These kinds of applications are very helpful in the real world and we use them all the time in word processors such as Word, Google Docs, and Pages."),(0,r.kt)("p",null,"While this application will be small, we'll use it to cover several key concepts this section, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using Test-Driven Development to solve problems by starting small"),(0,r.kt)("li",{parentName:"ul"},"Separation of logic"),(0,r.kt)("li",{parentName:"ul"},"Loops in all their glory"),(0,r.kt)("li",{parentName:"ul"},"Further explorations such as regular expressions (which won't be required for the independent project)")),(0,r.kt)("p",null,"Up until this point, we've mainly done one-off projects \u2014 a quick website to demonstrate a concept or a little practice in the DevTools console. Now, though, we'll be transitioning to more sustained projects that we'll work on over the course of a section \u2014 or even, in some cases \u2014 over multiple sections."),(0,r.kt)("p",null,"But first, we need a plan for our text analyzer application. There are many things to consider, such as how the user interface will work to all the various functions we'll need to write for our business logic. However, thinking about the big picture can get overwhelming fast, especially when we are dealing with complex problems."),(0,r.kt)("p",null,"This is one of those times when the following Lao Tzu quote feels appropriate:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A journey of a thousand miles begins with a single step.")),(0,r.kt)("p",null,"Maybe you've heard this quote a million times but there's a reason it's so used. It really has a lot of truth in it and it's also pretty appropriate for this stage of your time at Epicodus. The journey is a thousand miles and we are taking it one step at a time."),(0,r.kt)("p",null,"It's also very appropriate in terms of getting started on a bigger project \u2014 or even simply trying to solve a big problem in another codebase (which developers have to do a lot). These problems can be very overwhelming so we want to break them down as small as possible."),(0,r.kt)("p",null,"That's where test-driven development (TDD) comes in. Test-driven development means starting small and testing our code each step of the way. TDD leads to robust code and it's a very effective way to break overwhelming problems down into more manageable steps."),(0,r.kt)("p",null,"In the next lesson, we'll learn about TDD and start writing our first tests."))}d.isMDXComponent=!0}}]);