"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[47683],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7896),r=(n(2784),n(30876));const a={title:"Practice: Event Handling with Event Handler Properties",id:"practice-event-handling-with-event-handler-properties",slug:"practice-event-handling-with-event-handler-properties",hide_table_of_contents:!0,sidebar_position:53,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2m_classwork_practice_event_handling_with_event_handler_properties.md"},i=void 0,l={unversionedId:"introduction-to-programming/javascript-and-web-browsers/practice-event-handling-with-event-handler-properties",id:"introduction-to-programming/javascript-and-web-browsers/practice-event-handling-with-event-handler-properties",title:"Practice: Event Handling with Event Handler Properties",description:"Goal: Practice using event handler properties by updating a project from the last course section to handle events.",source:"@site/docs/introduction-to-programming/2_javascript-and-web-browsers/2m-classwork-practice-event-handling-with-event-handler-properties.md",sourceDirName:"introduction-to-programming/2_javascript-and-web-browsers",slug:"/introduction-to-programming/javascript-and-web-browsers/practice-event-handling-with-event-handler-properties",permalink:"/introduction-to-programming/javascript-and-web-browsers/practice-event-handling-with-event-handler-properties",draft:!1,tags:[],version:"current",sidebarPosition:53,frontMatter:{title:"Practice: Event Handling with Event Handler Properties",id:"practice-event-handling-with-event-handler-properties",slug:"practice-event-handling-with-event-handler-properties",hide_table_of_contents:!0,sidebar_position:53,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2m_classwork_practice_event_handling_with_event_handler_properties.md"},sidebar:"introduction-to-programming",previous:{title:"Event Handler Properties in a Project: Using window.onload",permalink:"/introduction-to-programming/javascript-and-web-browsers/event-handler-properties-in-a-project-using-windowonload"},next:{title:"Forms, Hiding and Showing Elements, and the Event Object",permalink:"/introduction-to-programming/javascript-and-web-browsers/forms-hiding-and-showing-elements-and-the-event-object"}},s={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Accessibility Modes on Project of Choice",id:"accessibility-modes-on-project-of-choice",level:3},{value:"Challenging: Kaleidoscope",id:"challenging-kaleidoscope",level:3}],p={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goal:")," Practice using event handler properties by updating a project from the last course section to handle events."),(0,r.kt)("h2",{id:"warm-up"},"Warm Up"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What is a function expression and how is it different from a function declaration?"),(0,r.kt)("li",{parentName:"ul"},"Name two event handler properties that you remember from the previous lessons."),(0,r.kt)("li",{parentName:"ul"},"How are event handler properties categorized?"),(0,r.kt)("li",{parentName:"ul"},"Can different browser structures (",(0,r.kt)("inlineCode",{parentName:"li"},"window"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"document")," or DOM elements) respond to the same event?"),(0,r.kt)("li",{parentName:"ul"},"What does the ",(0,r.kt)("inlineCode",{parentName:"li"},"window.onload")," event handler do?")),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Read through the following two prompts and pick one project to complete. Both prompts will require a little bit of research and if you are having issues with that, ask for help from your teacher or peer. Reference the previous lessons as necessary and challenge yourself by trying to type out the code from memory. "),(0,r.kt)("p",null,"Each prompt below includes a bonus prompt. ",(0,r.kt)("strong",{parentName:"p"},"Before you start on the bonus prompts, take stock of the readings and other classwork that is assigned for the same class session. If you have more readings to do for the session, do not do the bonus prompt.")),(0,r.kt)("h3",{id:"accessibility-modes-on-project-of-choice"},"Accessibility Modes on Project of Choice"),(0,r.kt)("p",null,"For this prompt, you'll extend the functionality of a project you completed in the last course section to add buttons that change the color of the webpage and increase the font size. There's also a bonus prompt. This is what you'll do:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Clone down a project of your choice from the last course section. This project should only have HTML and CSS in it."),(0,r.kt)("li",{parentName:"ul"},"Create a JS file and link to it in your HTML."),(0,r.kt)("li",{parentName:"ul"},"Create two buttons elements that give the user the choice for a light mode or a dark mode on the webpage. We haven't explicitly covered how to implement an HTML button elements, so you'll need to research it. Try using ",(0,r.kt)("a",{parentName:"li",href:"https://www.w3schools.com/tags/tag_button.asp"},"this resource from W3Schools")," or ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button"},"this one from MDN"),"."),(0,r.kt)("li",{parentName:"ul"},"The next step is to write your JS: make sure to include the ",(0,r.kt)("inlineCode",{parentName:"li"},"window.onload")," event handler. Within that event handler, create event handlers for each button that handles changing the text and background color within the document. The easiest way to do this is to target the document's ",(0,r.kt)("inlineCode",{parentName:"li"},"body")," tag, but you can do it however you like."),(0,r.kt)("li",{parentName:"ul"},"Next, create two buttons that give the user the choice between the default font size and an increased font size. You should roughly follow the same steps as above, though you should only have ",(0,r.kt)("strong",{parentName:"li"},"one")," ",(0,r.kt)("inlineCode",{parentName:"li"},"window.onload")," event handler."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bonus prompt:")," add ",(0,r.kt)("inlineCode",{parentName:"li"},"onmouseover")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"onmouseout")," event handlers to every element in the DOM so that when the pointer is over the element, its background color is set to yellow, and when the mouse is not over the element, the background color returns to the default.")),(0,r.kt)("h3",{id:"challenging-kaleidoscope"},"Challenging: Kaleidoscope"),(0,r.kt)("p",null,'For this prompt, you will update a project from the previous course section to react to events. This prompt is called "kaleidoscope", because much like a ',(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Kaleidoscope"},"kaleidoscope"),", we'll have our webpage change the background color of the entire page to a randomly generated color every time our mouse pointer moves. This is what you'll do:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Clone down a project of your choice from the last course section. This project should only have HTML and CSS in it."),(0,r.kt)("li",{parentName:"ul"},"Create a JS file and link to it in your HTML."),(0,r.kt)("li",{parentName:"ul"},"Create a random number generator function. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Hint: you'll need to read about the ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random"},"Math.random() method"),", or research how to do this online."))),(0,r.kt)("li",{parentName:"ul"},"Next, create an event handler for a mouseover event on the body of the HTML. This event handler should update the body's background color with the randomly generated numbers from the random number generator function. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bonus prompts:")," ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create the same mouseover event handler for the text on the page that you did for the background color."),(0,r.kt)("li",{parentName:"ul"},"Create a click event for the document body that calls the ",(0,r.kt)("inlineCode",{parentName:"li"},"window.scrollBy()")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"window.scrollTo()")," methods and moves the Y axis (vertical) of the page to a random location.")))))}h.isMDXComponent=!0}}]);