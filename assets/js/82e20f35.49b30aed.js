"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[28817],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Building a Text Analyzer",id:"building_a_text_analyzer",slug:"building_a_text_analyzer",hide_table_of_contents:!0,sidebar_position:22,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2a_building_a_text_analyzer_app.md"},i=void 0,l={unversionedId:"introduction_to_programming_part_time_evening/arrays-and-looping/building_a_text_analyzer",id:"introduction_to_programming_part_time_evening/arrays-and-looping/building_a_text_analyzer",title:"Building a Text Analyzer",description:"In this lesson, we'll start building a small application that can analyze a passage of text (such as a paragraph). It will count the total number of words in the passage, the total number of sentences, the number of times a specific word comes up, and so on. These kinds of applications are very helpful in the real world and we use them all the time in word processors such as Word, Google Docs, and Pages.",source:"@site/docs/introduction_to_programming_part_time_evening/5_arrays-and-looping/2a_building_a_text_analyzer_app.md",sourceDirName:"introduction_to_programming_part_time_evening/5_arrays-and-looping",slug:"/introduction_to_programming_part_time_evening/arrays-and-looping/building_a_text_analyzer",permalink:"/introduction_to_programming_part_time_evening/arrays-and-looping/building_a_text_analyzer",draft:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{title:"Building a Text Analyzer",id:"building_a_text_analyzer",slug:"building_a_text_analyzer",hide_table_of_contents:!0,sidebar_position:22,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2a_building_a_text_analyzer_app.md"},sidebar:"introduction_to_programming_part_time_evening",previous:{title:"Prior Course Section Survey",permalink:"/introduction_to_programming_part_time_evening/arrays-and-looping/prior_course_section_survey"},next:{title:"Overview of Test-Driven Development (TDD) with Text Analyzer",permalink:"/introduction_to_programming_part_time_evening/arrays-and-looping/overview_of_test_driven_development_tdd_with_text_analyzer"}},s={},p=[],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson, we'll start building a small application that can analyze a passage of text (such as a paragraph). It will count the total number of words in the passage, the total number of sentences, the number of times a specific word comes up, and so on. These kinds of applications are very helpful in the real world and we use them all the time in word processors such as Word, Google Docs, and Pages."),(0,o.kt)("p",null,"While this application will be small, we'll use it to cover several key concepts this section, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using Test-Driven Development to solve problems by starting small"),(0,o.kt)("li",{parentName:"ul"},"Separation of logic"),(0,o.kt)("li",{parentName:"ul"},"Loops in all their glory"),(0,o.kt)("li",{parentName:"ul"},"Further explorations such as regular expressions (which won't be required for the independent project)")),(0,o.kt)("p",null,"Up until this point, we've mainly done one-off projects \u2014 a quick website to demonstrate a concept or a little practice in the DevTools console. Now, though, we'll be transitioning to more sustained projects that we'll work on over the course of a section \u2014 or even, in some cases \u2014 over multiple sections."),(0,o.kt)("p",null,"But first, we need a plan for our text analyzer application. There are many things to consider, such as how the user interface will work to all the various functions we'll need to write for our business logic. However, thinking about the big picture can get overwhelming fast, especially when we are dealing with complex problems."),(0,o.kt)("p",null,"This is one of those times when the following Lao Tzu quote feels appropriate:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A journey of a thousand miles begins with a single step.")),(0,o.kt)("p",null,"Maybe you've heard this quote a million times but there's a reason it's so used. It really has a lot of truth in it and it's also pretty appropriate for this stage of your time at Epicodus. The journey is a thousand miles and we are taking it one step at a time."),(0,o.kt)("p",null,"It's also very appropriate in terms of getting started on a bigger project \u2014 or even simply trying to solve a big problem in another codebase (which developers have to do a lot). These problems can be very overwhelming so we want to break them down as small as possible."),(0,o.kt)("p",null,"That's where test-driven development (TDD) comes in. Test-driven development means starting small and testing our code each step of the way. TDD leads to robust code and it's a very effective way to break overwhelming problems down into more manageable steps."),(0,o.kt)("p",null,"In the next lesson, we'll learn about TDD and start writing our first tests."))}d.isMDXComponent=!0}}]);