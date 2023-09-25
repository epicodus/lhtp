"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[37476],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,u=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(u,i(i({ref:t},h),{},{components:n})):a.createElement(u,i({ref:t},h))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Understanding Web APIs: Event Handling",id:"understanding_web_apis_event_handling",slug:"understanding_web_apis_event_handling",hide_table_of_contents:!0,sidebar_position:67,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_javascript-and-web-browsers/4a_understanding_web_APIs_event_handling.md"},i=void 0,l={unversionedId:"introduction_to_programming/javascript-and-web-browsers/understanding_web_apis_event_handling",id:"introduction_to_programming/javascript-and-web-browsers/understanding_web_apis_event_handling",title:"Understanding Web APIs: Event Handling",description:"Let's continue to learn how to navigate Mozilla Developer Network (MDN) documentation and where to find more information about the Web APIs we learn about in this section. In this lesson, we'll learn about where to find more information about event handling and the Web API interfaces (object types) that contain the functionality for event handling.",source:"@site/docs/introduction_to_programming/2_javascript-and-web-browsers/4a_understanding_web_APIs_event_handling.md",sourceDirName:"introduction_to_programming/2_javascript-and-web-browsers",slug:"/introduction_to_programming/javascript-and-web-browsers/understanding_web_apis_event_handling",permalink:"/lhtp/introduction_to_programming/javascript-and-web-browsers/understanding_web_apis_event_handling",draft:!1,tags:[],version:"current",sidebarPosition:67,frontMatter:{title:"Understanding Web APIs: Event Handling",id:"understanding_web_apis_event_handling",slug:"understanding_web_apis_event_handling",hide_table_of_contents:!0,sidebar_position:67,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_javascript-and-web-browsers/4a_understanding_web_APIs_event_handling.md"},sidebar:"introduction_to_programming",previous:{title:"Practice: Event Listeners",permalink:"/lhtp/introduction_to_programming/javascript-and-web-browsers/practice_event_listeners"},next:{title:"Form Input Types",permalink:"/lhtp/introduction_to_programming/javascript-and-web-browsers/form_input_types"}},s={},p=[{value:"The <code>Event</code> Object",id:"the-event-object",level:2},{value:"Object Types that Inherit Functionality from <code>Event</code>",id:"object-types-that-inherit-functionality-from-event",level:2},{value:"The <code>EventTarget</code> Object",id:"the-eventtarget-object",level:2},{value:"More to Explore on MDN!",id:"more-to-explore-on-mdn",level:3}],h={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Let's continue to learn how to navigate Mozilla Developer Network (MDN) documentation and where to find more information about the Web APIs we learn about in this section. In this lesson, we'll learn about where to find more information about event handling and the Web API interfaces (object types) that contain the functionality for event handling. "),(0,r.kt)("p",null,"We won't cover ",(0,r.kt)("em",{parentName:"p"},"all")," the relevant object types for events \u2014 there's just too many out there! In this lesson we'll focus on just 3 topics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Event")," object."),(0,r.kt)("li",{parentName:"ul"},"Object types that inherit from the ",(0,r.kt)("inlineCode",{parentName:"li"},"Event")," Object."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"EventTarget")," object.")),(0,r.kt)("p",null,'Finally, note that we\'ll review this information in future lessons. So if anything is not "clicking" now, there will be a chance to understand this information again. '),(0,r.kt)("h2",{id:"the-event-object"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"Event")," Object"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Quite simply, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Event")," object represents an event that takes place in the DOM, like a form submission, scroll on a webpage, or click of a button. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Event")," object type is a generic object type, and there are many other object types that inherit functionality from ",(0,r.kt)("inlineCode",{parentName:"p"},"Event"),". This means that the ",(0,r.kt)("inlineCode",{parentName:"p"},"Event")," object contains functionality that's common to all events. "),(0,r.kt)("p",null,"We're familiar with one method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Event")," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.preventDefault();\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," is an actual object \u2014 a variable that contains the data about the actual event that just happened. We only use ",(0,r.kt)("inlineCode",{parentName:"p"},"event.preventDefault();")," to prevent the default action of a form submission event, which is to refresh the page. If you want a review about the ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," variable and ",(0,r.kt)("inlineCode",{parentName:"p"},"event.preventDefault();")," visit the lesson ",(0,r.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/javascript-and-web-browsers/forms-hiding-and-showing-elements-and-the-event-object"},"Forms, Hiding and Showing Elements, and the ",(0,r.kt)("inlineCode",{parentName:"a"},"Event")," Object"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Event")," object type contains other helpful properties that can give us more information about the event that just occurred. Another commonly used property of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Event")," object is ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/target"},"the ",(0,r.kt)("inlineCode",{parentName:"a"},"target")," property"),", which returns the element on which the event occurred. We use it like this: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event.target\n")),(0,r.kt)("p",null,"So if the event we're dealing with is a form submission, ",(0,r.kt)("inlineCode",{parentName:"p"},"event.target")," would return the ",(0,r.kt)("inlineCode",{parentName:"p"},"<form>")," HTML element."),(0,r.kt)("p",null,"To explore other properties and methods from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Event")," object, visit its documentation on MDN:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Event"},"The ",(0,r.kt)("inlineCode",{parentName:"a"},"Event")," Interface"))),(0,r.kt)("h2",{id:"object-types-that-inherit-functionality-from-event"},"Object Types that Inherit Functionality from ",(0,r.kt)("inlineCode",{parentName:"h2"},"Event")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"As noted above, there are many object types that inherit from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Event")," object type. For example, when a form submission event happens, this event is represented by an object type called ",(0,r.kt)("inlineCode",{parentName:"p"},"SubmitEvent"),". Take a look at the following image of the homepage of the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/SubmitEvent"},(0,r.kt)("inlineCode",{parentName:"a"},"SubmitEvent")),":"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Object-Oriented-JavaScript-2020/submit-event-inheritance.png",alt:"This is an image of the top of the MDN `SubmitEvent` documentation, which includes a diagram indicating that `SubmitEvent` inherits from `Event`."})),(0,r.kt)("p",null,"The diagram in the above image communicates the chain of inheritance: ",(0,r.kt)("inlineCode",{parentName:"p"},"SubmitEvent")," inherits from ",(0,r.kt)("inlineCode",{parentName:"p"},"Event"),". This is just another example of two Web API interfaces that share functionality through inheritance. Many Web APIs do this and it's something to keep in mind as you use documentation online. If you want a more in depth review of inheritance, ",(0,r.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/javascript-and-web-browsers/understanding-web-apis-interfaces-object-types-and-inheritance"},"visit this lesson"),"."),(0,r.kt)("p",null,"As far as exploring the various object types that represent specific events, like ",(0,r.kt)("inlineCode",{parentName:"p"},"SubmitEvent"),", there's two good resources out there:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Events"},"MDN's documentation on events, where (most) events are listed by type and by its association with other interfaces.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Event#interfaces_based_on_event"},"A section of the MDN docs on the ",(0,r.kt)("inlineCode",{parentName:"a"},"Event")," objects that list object types that inherit from ",(0,r.kt)("inlineCode",{parentName:"a"},"Event"),"."))),(0,r.kt)("h2",{id:"the-eventtarget-object"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"EventTarget")," Object"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The last object type we'll learn about is the ",(0,r.kt)("inlineCode",{parentName:"p"},"EventTarget")," object. ",(0,r.kt)("inlineCode",{parentName:"p"},"EventTarget")," represents any object in our web browser that can be the target of an event. That includes ",(0,r.kt)("inlineCode",{parentName:"p"},"window"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"document"),", any element within the DOM, and more! All of these objects have access to the functionality within the ",(0,r.kt)("inlineCode",{parentName:"p"},"EventTarget")," object type because they ",(0,r.kt)("em",{parentName:"p"},"inherit")," this functionality."),(0,r.kt)("p",null,"More specifically, ",(0,r.kt)("inlineCode",{parentName:"p"},"EventTarget")," contains all of the methods that are used to set up ",(0,r.kt)("strong",{parentName:"p"},"event listeners"),". In total ",(0,r.kt)("inlineCode",{parentName:"p"},"EventTarget")," has three methods, two of which we'll work with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"},(0,r.kt)("inlineCode",{parentName:"a"},"EventTarget.addEventListener()"))," which registers an event handler on the target of the event."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener"},(0,r.kt)("inlineCode",{parentName:"a"},"EventTarget.removeEventListener()"))," which removes an event listener from the target of the event."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent"},(0,r.kt)("inlineCode",{parentName:"a"},"EventTarget.dispatchEvent()"))," which triggers an event to happen on the target of the event. We won't use this method in the program. ")),(0,r.kt)("p",null,"Each method has its own reference page that describes more information about use cases, syntax, and special considerations. To explore more about the ",(0,r.kt)("inlineCode",{parentName:"p"},"EventTarget")," object, visit the MDN documentation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget"},(0,r.kt)("inlineCode",{parentName:"a"},"EventTarget")," on MDN"))),(0,r.kt)("h3",{id:"more-to-explore-on-mdn"},"More to Explore on MDN!"),(0,r.kt)("p",null,"There are other benefits of using event listeners that are beyond the scope of what we're learning in this section. Optionally, visit ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"},"the docs on the ",(0,r.kt)("inlineCode",{parentName:"a"},"addEventListener()")," method")," if you want to take a deep dive to learn more. "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"addEventListener()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"removeEventListener()")," methods also have additional and optional parameters that you can explore in the docs. Some have to do with event bubbling and capturing, which we have not covered yet, so as always, don't worry about understanding everything in the reference."))}c.isMDXComponent=!0}}]);