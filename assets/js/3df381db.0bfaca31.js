"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[48429],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(v,a(a({ref:t},p),{},{components:n})):r.createElement(v,a({ref:t},p))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={title:"Practice: Event Listeners",id:"practice-event-listeners",slug:"practice-event-listeners",hide_table_of_contents:!0,sidebar_position:66,day:"wednesday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3l_classwork_practice_with_event_listeners.md"},a=void 0,s={unversionedId:"introduction-to-programming-classic/javascript-and-web-browsers/practice-event-listeners",id:"introduction-to-programming-classic/javascript-and-web-browsers/practice-event-listeners",title:"Practice: Event Listeners",description:"Goal",source:"@site/docs/introduction-to-programming-classic/2_javascript-and-web-browsers/3l-classwork-practice-with-event-listeners.md",sourceDirName:"introduction-to-programming-classic/2_javascript-and-web-browsers",slug:"/introduction-to-programming-classic/javascript-and-web-browsers/practice-event-listeners",permalink:"/introduction-to-programming-classic/javascript-and-web-browsers/practice-event-listeners",draft:!1,tags:[],version:"current",sidebarPosition:66,frontMatter:{title:"Practice: Event Listeners",id:"practice-event-listeners",slug:"practice-event-listeners",hide_table_of_contents:!0,sidebar_position:66,day:"wednesday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3l_classwork_practice_with_event_listeners.md"},sidebar:"introduction-to-programming-classic",previous:{title:"Removing Event Listeners",permalink:"/introduction-to-programming-classic/javascript-and-web-browsers/removing-event-listeners"},next:{title:"Understanding Web APIs: Event Handling",permalink:"/introduction-to-programming-classic/javascript-and-web-browsers/understanding-web-apis-event-handling"}},l={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"(Previous) Project of Choice",id:"previous-project-of-choice",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Goal:"),"  In the three lessons on event handling with event listeners, we learned about:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using the ",(0,i.kt)("inlineCode",{parentName:"li"},"addEventListener()")," method to register event listeners."),(0,i.kt)("li",{parentName:"ul"},"Using the ",(0,i.kt)("inlineCode",{parentName:"li"},"removeEventListener()")," to remove event listeners, and the use cases for this method."),(0,i.kt)("li",{parentName:"ul"},"The benefits of using event listeners over event handler properties."),(0,i.kt)("li",{parentName:"ul"},"How to use function declarations with event listeners, and how they improve code reusability."),(0,i.kt)("li",{parentName:"ul"},"Callback functions.")),(0,i.kt)("p",null,"Practice using the event listeners by completing the exercise below."),(0,i.kt)("h2",{id:"warm-up"},"Warm Up"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Describe the differences between event listeners and event handler properties. "),(0,i.kt)("li",{parentName:"ul"},"Why is using event listeners the preferred way to handle events? "),(0,i.kt)("li",{parentName:"ul"},"What is the benefit of using a function declaration or a function expression that is stored in a variable in our event handlers?"),(0,i.kt)("li",{parentName:"ul"},"Why is code organization important? What should we consider when we're thinking about different ways to organize our code."),(0,i.kt)("li",{parentName:"ul"},"What is a callback function? "),(0,i.kt)("li",{parentName:"ul"},"Will we successfully remove the event listener in the following code? Why or why not?")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'function processFormValues() {\n  // code\n}\n\nlet form = document.querySelector("form"); \n\nform.addEventListener("submit", function() {\n  processFormValues();\n});\n\nform.removeEventListener("submit", function() {\n  processFormValues();\n});  \n')),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"This classwork is meant to be short and targeted on practicing event listener syntax. There will be more practice opportunities to use event listeners in upcoming classwork."),(0,i.kt)("h3",{id:"previous-project-of-choice"},"(Previous) Project of Choice"),(0,i.kt)("p",null,"Pick a previous project that implements two or three event handler properties and refactor each one to use an event listener and a function declaration instead. After verifying that all of the event listeners are set up properly, refactor your code to remove each event listener after it has run once. "),(0,i.kt)("p",null,"Every person in your coding pair/group should refactor one event handler property to use an event listener, so pick a project that has enough event handlers for every person in your group, or create a new event listener if there aren't enough for everyone to reactor one."))}d.isMDXComponent=!0}}]);