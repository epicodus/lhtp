"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[18555],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},27484:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={title:"Web APIs",id:"web_apis",slug:"web_apis",hide_table_of_contents:!0,sidebar_position:30,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_javascript-and-web-browsers/1f_web_apis.md"},i=void 0,s={unversionedId:"introduction_to_programming/javascript-and-web-browsers/web_apis",id:"introduction_to_programming/javascript-and-web-browsers/web_apis",title:"Web APIs",description:"Since being introduced to the window and document objects, as well as the DOM and events, we've stepped away from JavaScript to learn about structures and tools that web browsers make available to web developers. Now is a good time to learn where we can find documentation references on Mozilla Developer Network (MDN) Documentation for these tools.",source:"@site/docs/introduction_to_programming/2_javascript-and-web-browsers/1f_web_apis.md",sourceDirName:"introduction_to_programming/2_javascript-and-web-browsers",slug:"/introduction_to_programming/javascript-and-web-browsers/web_apis",permalink:"/lhtp/introduction_to_programming/javascript-and-web-browsers/web_apis",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Web APIs",id:"web_apis",slug:"web_apis",hide_table_of_contents:!0,sidebar_position:30,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_javascript-and-web-browsers/1f_web_apis.md"},sidebar:"introduction_to_programming",previous:{title:"Accessing Window Properties",permalink:"/lhtp/introduction_to_programming/javascript-and-web-browsers/accessing_window_properties"},next:{title:"Practice: Accessing Window Properties",permalink:"/lhtp/introduction_to_programming/javascript-and-web-browsers/practice_accessing_window_properties"}},l={},c=[{value:"Why We Learn about MDN Documentation",id:"why-we-learn-about-mdn-documentation",level:2},{value:"The DOM, <code>window</code> and <code>document</code> Objects, and Events Are Web APIs",id:"the-dom-window-and-document-objects-and-events-are-web-apis",level:2},{value:"An Example Interface",id:"an-example-interface",level:3},{value:"Specifications &amp; Interfaces",id:"specifications--interfaces",level:3},{value:"Language Choice: Should I call <code>window</code> and <code>document</code> &quot;interfaces&quot; or &quot;objects&quot;?",id:"language-choice-should-i-call-window-and-document-interfaces-or-objects",level:3},{value:"Web APIs Are Not JavaScript",id:"web-apis-are-not-javascript",level:3},{value:"On MDN",id:"on-mdn",level:3},{value:"Summary",id:"summary",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Since being introduced to the ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," objects, as well as the DOM and events, we've stepped away from JavaScript to learn about structures and tools that web browsers make available to web developers. Now is a good time to learn where we can find documentation references on Mozilla Developer Network (MDN) Documentation for these tools. "),(0,a.kt)("p",null,"In this lesson, we'll learn about these topics:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What an Application Programming Interface (API) is."),(0,a.kt)("li",{parentName:"ul"},"What a ",(0,a.kt)("em",{parentName:"li"},"Web")," API is. "),(0,a.kt)("li",{parentName:"ul"},"All about Web API specifications and interfaces."),(0,a.kt)("li",{parentName:"ul"},"Where to learn more about the DOM, the ",(0,a.kt)("inlineCode",{parentName:"li"},"window")," object, and the ",(0,a.kt)("inlineCode",{parentName:"li"},"document")," object on MDN.")),(0,a.kt)("h2",{id:"why-we-learn-about-mdn-documentation"},"Why We Learn about MDN Documentation"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"You don't need to worry about referencing MDN documentation now, however it is important to know how MDN documentation is structured so that you can get better at navigating it and understanding how the technology we work with is structured."),(0,a.kt)("p",null,"Learning how to drive and maintain a car is a good analogy for learning to write code. Once we know the basics, we can start driving without knowing at all how a car's engine works. This is just like being able to access ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," properties or create a string and store it in a variable without fully understanding how browser tools and JavaScript are structured. In fact, it's important to start driving before exploring what's going on under the hood of the car."),(0,a.kt)("p",null,'However, becoming a resourceful developer also involves looking under the hood of the car to understand how each piece of technology works and how it relates to other tech. Exploring MDN documentation enables us to do just that \u2014 look "under the hood" of JavaScript and the browser tools we are learning about!'),(0,a.kt)("p",null,"Take note that we'll periodically pause to revisit the topic of navigating MDN and review the inner structures of the browser tools and JS we work with. So if something does not make sense now, there will be an opportunity to revisit it later. ",(0,a.kt)("strong",{parentName:"p"},"Understanding how browsers are structured is not required to be successful on this section's independent project"),", but it will improve your resourcefulness as a developer and is key to your long term growth. In other words, for the upcoming independent project, we want to see how you drive the car, not what you know about what's going on under the hood."),(0,a.kt)("p",null,"It's normal to feel overwhelmed with a bunch of new information. Talk about what doesn't make sense with your pair and instructor. Remember that learning takes place over time with a lot of repetition and practice. A solid understanding of what's going on \"under the hood\" also requires repetition and practice, and you'll get that by working through multiple course sections, not just this one."),(0,a.kt)("h2",{id:"the-dom-window-and-document-objects-and-events-are-web-apis"},"The DOM, ",(0,a.kt)("inlineCode",{parentName:"h2"},"window")," and ",(0,a.kt)("inlineCode",{parentName:"h2"},"document")," Objects, and Events Are Web APIs"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/webapis-on-mdn.png",alt:"This image shows the References menu on the MDN homepage expanded, and the option for Web APIs highlighted."})),(0,a.kt)("p",null,"The DOM, the ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," object and ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," objects are a part of the structures and tools that web browsers make available to web developers. We call this collection of structures and tools ",(0,a.kt)("strong",{parentName:"p"},"Web APIs"),". Let's break down what this means:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"API")," is the acronym for ",(0,a.kt)("strong",{parentName:"li"},"application programming interface"),". An API is a set of code that lets us interact with more complex software in a simplified and pre-defined way. We'll expand on this definition when we discuss interfaces below."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Web APIs")," are a collection of many APIs that are specifically made for accessing web technologies, like the browser window or the HTML document displayed in our browser window. These APIs are written in JavaScript, and we can use JavaScript to access them, but they are not a part of the JavaScript language."),(0,a.kt)("li",{parentName:"ul"},"Web APIs are made up of ",(0,a.kt)("strong",{parentName:"li"},"specifications")," that describe in detail what each individual API is and does, and ",(0,a.kt)("strong",{parentName:"li"},"interfaces"),", which are different types of objects that make up the actual functionality of Web APIs. ")),(0,a.kt)("h3",{id:"an-example-interface"},"An Example Interface"),(0,a.kt)("p",null,"We use interfaces all of the time. Consider a door knob \u2014 the knob is the interface that we use to open a door. The door knob interface handles abstracting the complex internal hardware of the door latch into a simple and easy to use interface. When we use the door knob, we're triggering the door hardware to do its thing to open the door latch. We don't need to concern ourselves with how the door latch works, we just need to know how to use the simplified interface that is the door knob."),(0,a.kt)("p",null,"Similarly with our web browsers, we don't need to know or understand the source code for our browser window, we just need to learn how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," object. The ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," object is the interface that we can learn to access and use to program our websites to work with the browser's window. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"API")," specifically means that the interface we're working with is for programming applications, and it does the job of letting our program (that we create) talk to another program (for example, the web browser). "),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"Web API")," is even more specific: the API we're working with is specifically for working with the web browser. Later in the program, we'll work also with ",(0,a.kt)("strong",{parentName:"p"},"3rd party APIs")," (created by software companies to access the functionality of their products) and even create our own custom API."),(0,a.kt)("h3",{id:"specifications--interfaces"},"Specifications & Interfaces"),(0,a.kt)("p",null,"Let's look at a helpful example within Web APIs to understand the difference between a specification and an interface:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The DOM is a Web API specification. ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"},"Follow this link to see the specification page for the DOM"),"."),(0,a.kt)("li",{parentName:"ul"},"An interface belonging to the DOM is the ",(0,a.kt)("inlineCode",{parentName:"li"},"document")," object. ")),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"specification")," describes what an API's purpose is, how it is structured, what it can do, and what other technology it interacts with. An ",(0,a.kt)("strong",{parentName:"p"},"interface")," is an object of a specific type that contains a specific set of functionality. We interact with a Web API through its interface(s). "),(0,a.kt)("p",null,"Every API is made up of one or more interfaces. For example, so far we have learned about the ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," interface for the DOM, but the DOM is actually made up of many, many interfaces, and each interface in the DOM describes a discrete bit of functionality. Optionally, check out ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model#dom_interfaces"},"all of the interfaces that belong to the DOM by following this link"),". Don't worry \u2014 we won't be working with all of these interfaces in the program. The idea here is to give you an idea of what's out there, and the tools to explore more on your own."),(0,a.kt)("p",null,"Also, it's common for Web APIs to have ",(0,a.kt)("strong",{parentName:"p"},"entry points"),". For the DOM, the entry point is the ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," object. For the browser window, the entry point is the ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," object. We can access other data (including other interfaces) through these entry points. Like we saw in the last lesson, we can access the ",(0,a.kt)("inlineCode",{parentName:"p"},"location")," object through the ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"> window.location\n")),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"location")," is also an interface! How do we know? Anytime you are working with an interface (like ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"document"),") and the data type of a property's value is an object (like ",(0,a.kt)("inlineCode",{parentName:"p"},"window.location"),"), that object is most likely an interface. To verify you'll need to find the name of the object in ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API#interfaces"},"the Web APIs homepage, where all interfaces are listed"),". If the name of the object is in that list, then it's an interface."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Take note! While all Web API interfaces are objects, not all objects are interfaces:")," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An object is a data type, often defined as a collection of properties. "),(0,a.kt)("li",{parentName:"ul"},"An interface is a special kind of object that exposes (makes available for use) the functionality of an API.")),(0,a.kt)("h3",{id:"language-choice-should-i-call-window-and-document-interfaces-or-objects"},"Language Choice: Should I call ",(0,a.kt)("inlineCode",{parentName:"h3"},"window")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"document"),' "interfaces" or "objects"?'),(0,a.kt)("p",null,"As we just learned, ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," are interfaces within the collection of Web APIs that make browser functionality available to developers to use in their websites. These interfaces, like all Web API interfaces, are objects and we can use JavaScript to access them and manipulate them. "),(0,a.kt)("p",null,"In this lesson and future lessons, we'll continue to call ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," by their data type, \"object\", because we'll be working on accessing object properties and setting the value of those properties. In other words, it's much less important to understand APIs, specifications, and interfaces conceptually, than it is to comfortably access object properties. "),(0,a.kt)("p",null,"Going forward you can choose to call ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"document"),' as "interfaces" or "objects". Both are correct, only "interface" is more specific, and reminds us that we\'re working with a Web API. Anecdotally, it\'s very common online to see developers referring to ',(0,a.kt)("inlineCode",{parentName:"p"},"window")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," as objects, because, well, that's what they are!"),(0,a.kt)("h3",{id:"web-apis-are-not-javascript"},"Web APIs Are Not JavaScript"),(0,a.kt)("p",null,'Keep in mind that Web APIs "sit on top of" JavaScript. That means that we use JavaScript to access and manipulate Web APIs, but they are not a part of the core JavaScript language.'),(0,a.kt)("h3",{id:"on-mdn"},"On MDN"),(0,a.kt)("p",null,"So, on MDN the DOM, the ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," objects, and events are a part of ",(0,a.kt)("strong",{parentName:"p"},"Web APIs"),", the structures and tools that web browsers provide to developers to write code that interacts with browser structures. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("span",{class:"glyphicon glyphicon-link"})," ",(0,a.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window"},(0,a.kt)("inlineCode",{parentName:"a"},"window")))," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("span",{class:"glyphicon glyphicon-link"})," ",(0,a.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document"},(0,a.kt)("inlineCode",{parentName:"a"},"document")))," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("span",{class:"glyphicon glyphicon-link"})," ",(0,a.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction"},"An Introduction to the DOM"))," ")),(0,a.kt)("p",null,"There are many interfaces that make up events, but we won't be going over those now. Instead, we'll review that information and documentation once we begin learning about events."),(0,a.kt)("p",null,"There are many more Web APIs that we won't learn about in this program. You can take a look at them here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("span",{class:"glyphicon glyphicon-link"})," ",(0,a.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/API"},"Web APIs"))," ")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Remember, all of this information is for context-building and you won't be tested on it. We'll revisit this information in coming lessons, and it will help us better understand how to use tools like the ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," object in the applications we build."),(0,a.kt)("p",null,"In this lesson we learned:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The DOM, the ",(0,a.kt)("inlineCode",{parentName:"li"},"window")," object, the ",(0,a.kt)("inlineCode",{parentName:"li"},"document")," object, and events are a part of the structures and tools that web browsers make available to web developers. We call this collection of structures and tools ",(0,a.kt)("strong",{parentName:"li"},"Web APIs"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"API")," is the acronym for ",(0,a.kt)("strong",{parentName:"li"},"application programming interface"),". An API is a set of code that lets us interact with more complex software in a simplified and pre-defined way. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Web APIs")," are a collection of many APIs that are specifically made for accessing web technologies, like our browser window or our HTML document displayed in our browser window. These APIs are written in JavaScript, and we can use JavaScript to access them, but they are not a part of the JavaScript language."),(0,a.kt)("li",{parentName:"ul"},"Web APIs are made up of ",(0,a.kt)("strong",{parentName:"li"},"specifications")," that describe in detail what each individual API is and does, and ",(0,a.kt)("strong",{parentName:"li"},"interfaces"),", which are different types of objects (with properties and methods) that make up the actual functionality of Web APIs. ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"An example specification is the DOM, and an example interface is the ",(0,a.kt)("inlineCode",{parentName:"li"},"document")," object."),(0,a.kt)("li",{parentName:"ul"},"While all Web API interfaces are objects, not all objects are interfaces. An object is a data type, often defined as a collection of properties. An interface is a special kind of object that exposes (makes available for use) the functionality of an API.")))),(0,a.kt)("p",null,"In regards to using the new technical terminology covered in this lesson, you can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"li"},"window")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"document"),' interfaces as "objects" or "interfaces". Going forward in the lessons, we\'ll refer to them as objects.')),(0,a.kt)("p",null,"Please be patient with yourself as you wrap your mind around all of this information and start to use correct technical terminology. You won't be able to remember everything or understand every new concept on the first try. Always do your best and know that you will understand all of this over the course of the program."))}u.isMDXComponent=!0}}]);