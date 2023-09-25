"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[88761],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=i,v=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(v,a(a({ref:t},p),{},{components:r})):n.createElement(v,a({ref:t},p))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59107:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={title:"Practice: Event Listeners",id:"practice_event_listeners",slug:"practice_event_listeners",hide_table_of_contents:!0,sidebar_position:23,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3l_classwork_practice_with_event_listeners.md"},a=void 0,s={unversionedId:"introduction_to_programming_part_time_evening/javascript-and-web-browsers-part-2/practice_event_listeners",id:"introduction_to_programming_part_time_evening/javascript-and-web-browsers-part-2/practice_event_listeners",title:"Practice: Event Listeners",description:"Goal",source:"@site/docs/introduction_to_programming_part_time_evening/4_javascript-and-web-browsers-part-2/3l_classwork_practice_with_event_listeners.md",sourceDirName:"introduction_to_programming_part_time_evening/4_javascript-and-web-browsers-part-2",slug:"/introduction_to_programming_part_time_evening/javascript-and-web-browsers-part-2/practice_event_listeners",permalink:"/introduction_to_programming_part_time_evening/javascript-and-web-browsers-part-2/practice_event_listeners",draft:!1,tags:[],version:"current",sidebarPosition:23,frontMatter:{title:"Practice: Event Listeners",id:"practice_event_listeners",slug:"practice_event_listeners",hide_table_of_contents:!0,sidebar_position:23,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3l_classwork_practice_with_event_listeners.md"},sidebar:"introduction_to_programming_part_time_evening",previous:{title:"Homework: Removing Event Listeners",permalink:"/introduction_to_programming_part_time_evening/javascript-and-web-browsers-part-2/homework_removing_event_listeners"},next:{title:"Form Input Types",permalink:"/introduction_to_programming_part_time_evening/javascript-and-web-browsers-part-2/form_input_types"}},l={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"(Previous) Project of Choice",id:"previous-project-of-choice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Goal:"),"  In the three lessons on event handling with event listeners, we learned about:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using the ",(0,i.kt)("inlineCode",{parentName:"li"},"addEventListener()")," method to register event listeners."),(0,i.kt)("li",{parentName:"ul"},"Using the ",(0,i.kt)("inlineCode",{parentName:"li"},"removeEventListener()")," to remove event listeners, and the use cases for this method."),(0,i.kt)("li",{parentName:"ul"},"The benefits of using event listeners over event handler properties."),(0,i.kt)("li",{parentName:"ul"},"How to use function declarations with event listeners, and how they improve code reusability."),(0,i.kt)("li",{parentName:"ul"},"Callback functions.")),(0,i.kt)("p",null,"Practice using the event listeners by completing the exercise below."),(0,i.kt)("h2",{id:"warm-up"},"Warm Up"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Describe the differences between event listeners and event handler properties. "),(0,i.kt)("li",{parentName:"ul"},"Why is using event listeners the preferred way to handle events? "),(0,i.kt)("li",{parentName:"ul"},"What is the benefit of using a function declaration or a function expression that is stored in a variable in our event handlers?"),(0,i.kt)("li",{parentName:"ul"},"Why is code organization important? What should we consider when we're thinking about different ways to organize our code."),(0,i.kt)("li",{parentName:"ul"},"What is a callback function? "),(0,i.kt)("li",{parentName:"ul"},"Will we successfully remove the event listener in the following code? Why or why not?")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'function processFormValues() {\n  // code\n}\n\nlet form = document.querySelector("form"); \n\nform.addEventListener("submit", function() {\n  processFormValues();\n});\n\nform.removeEventListener("submit", function() {\n  processFormValues();\n});  \n')),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"This classwork is meant to be short and targeted on practicing event listener syntax. There will be more practice opportunities to use event listeners in upcoming classwork."),(0,i.kt)("h3",{id:"previous-project-of-choice"},"(Previous) Project of Choice"),(0,i.kt)("p",null,"Pick a previous project that implements two or three event handler properties and refactor each one to use an event listener and a function declaration instead. After verifying that all of the event listeners are set up properly, refactor your code to remove each event listener after it has run once. "),(0,i.kt)("p",null,"Every person in your coding pair/group should refactor one event handler property to use an event listener, so pick a project that has enough event handlers for every person in your group, or create a new event listener if there aren't enough for everyone to reactor one."))}m.isMDXComponent=!0}}]);