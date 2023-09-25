"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[46861],{3905:(e,t,o)=>{o.d(t,{Zo:()=>w,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},w=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,w=s(e,["components","mdxType","originalType","parentName"]),u=c(o),p=a,h=u["".concat(l,".").concat(p)]||u[p]||d[p]||r;return o?n.createElement(h,i(i({ref:t},w),{},{components:o})):n.createElement(h,i({ref:t},w))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},60913:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=o(87462),a=(o(67294),o(3905));const r={title:"How Web Browsers Work",id:"how_web_browsers_work",slug:"how_web_browsers_work",hide_table_of_contents:!0,sidebar_position:29,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1d_how_web_browsers_work.md"},i=void 0,s={unversionedId:"introduction_to_programming_part_time/javascript-and-web-browsers/how_web_browsers_work",id:"introduction_to_programming_part_time/javascript-and-web-browsers/how_web_browsers_work",title:"How Web Browsers Work",description:"There are many standard structures in place that define how the internet works and how websites get loaded into our browsers. Throughout the program, we'll incrementally learn about these subjects, and this lesson is one of our first opportunities.",source:"@site/docs/introduction_to_programming_part_time/3_javascript-and-web-browsers/1d_how_web_browsers_work.md",sourceDirName:"introduction_to_programming_part_time/3_javascript-and-web-browsers",slug:"/introduction_to_programming_part_time/javascript-and-web-browsers/how_web_browsers_work",permalink:"/introduction_to_programming_part_time/javascript-and-web-browsers/how_web_browsers_work",draft:!1,tags:[],version:"current",sidebarPosition:29,frontMatter:{title:"How Web Browsers Work",id:"how_web_browsers_work",slug:"how_web_browsers_work",hide_table_of_contents:!0,sidebar_position:29,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1d_how_web_browsers_work.md"},sidebar:"introduction_to_programming_part_time",previous:{title:"Practice: Writing Functions",permalink:"/introduction_to_programming_part_time/javascript-and-web-browsers/practice_writing_functions"},next:{title:"Accessing Window Properties",permalink:"/introduction_to_programming_part_time/javascript-and-web-browsers/accessing_window_properties"}},l={},c=[{value:"Browsers Manage All of Our Interactions on the Web",id:"browsers-manage-all-of-our-interactions-on-the-web",level:2},{value:"Web APIs",id:"web-apis",level:3},{value:"Our Web Browser Is Accessed Through the <code>window</code> Object",id:"our-web-browser-is-accessed-through-the-window-object",level:3},{value:"Our HTML Document Is Accessed Through the HTML Document Object Model (DOM)",id:"our-html-document-is-accessed-through-the-html-document-object-model-dom",level:3},{value:"Events",id:"events",level:3},{value:"Summary",id:"summary",level:2}],w={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},w,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are many standard structures in place that define how the internet works and how websites get loaded into our browsers. Throughout the program, we'll incrementally learn about these subjects, and this lesson is one of our first opportunities. "),(0,a.kt)("p",null,"The goal of this lesson is to build context around how web browsers are structured so that we are prepared to build interactive websites with JavaScript and built-in web browser structures and tools. As such, this lesson is really meant to be a conceptual introduction to tools we will apply in future lessons. If any new concept in this lesson doesn't make sense to you, know that we will be revisiting all of them."),(0,a.kt)("h2",{id:"browsers-manage-all-of-our-interactions-on-the-web"},"Browsers Manage All of Our Interactions on the Web"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"It's helpful to start out by reminding ourselves of something we probably take for granted: web browsers handle the entire process of displaying websites to us. What's in this process? There are a lot of steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Providing a way for us to navigate to websites"),": a browser window with an address bar to input URLs so we can request to view a website."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fetching website resources"),": getting the source code and other files for the website we are navigating to."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Processing website resources"),": parsing the source code and combining it into the cohesive website that we see in our browser."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Displaying the website on our computer screen"),": the technical process of actually rendering a website in our browser window.")),(0,a.kt)("p",null,"This process of populating a webpage in our browser is fascinating and quite complex! The above steps are generalized and can each be broken down into more steps that each draw on various web technologies. "),(0,a.kt)("p",null,"The process of populating a web page is also a standardized process, which makes it so that everyone \u2014 different browser companies, web developers, and people \u2014 can access the internet and its websites by following the same standard process, no matter which browser or internet provider you are using."),(0,a.kt)("p",null,"We don't need to worry about understanding this process in detail, but what we do need to recognize is that web browsers manage all web interactivity. So, if we want to build a website that is interactive, we need to learn how to access and use web browser structures and tools. "),(0,a.kt)("h3",{id:"web-apis"},"Web APIs"),(0,a.kt)("p",null,"The web browser tools and structures that are made available to developers are just a collection of many different objects that are built-in to the browser. These tools are collectively called Web Application Programming Interfaces, or ",(0,a.kt)("strong",{parentName:"p"},"Web APIs"),", which we'll learn more about in an upcoming lesson."),(0,a.kt)("p",null,"Notably, Web APIs are not a part of the JavaScript programming language. Instead, they sit on top of JavaScript; this means that they look like JavaScript and we can use JavaScript to access and use these tools. However, Web APIs are not a part of the core JavaScript programming language."),(0,a.kt)("p",null,"Differentiating between Web APIs and JavaScript can be confusing at first, but we have a series of lessons in this and future course sections that work on differentiating the two by exploring where all of these tools are located within ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/"},"Mozilla Developer Network (MDN) documentation"),". So remember that this is a conceptual introduction to web browser tools. If you find anything confusing or unclear in this lesson, know that we'll be revisiting all of this information in upcoming lessons."),(0,a.kt)("p",null,"Up next in this lesson, we'll learn about 3 important browser structures that enable developers to interact with the browser window, our HTML document, and events (like a mouse click). In a future course section, we'll discuss the browser structure that enables us to interact with our CSS \u2014 so don't worry about that now!"),(0,a.kt)("h3",{id:"our-web-browser-is-accessed-through-the-window-object"},"Our Web Browser Is Accessed Through the ",(0,a.kt)("inlineCode",{parentName:"h3"},"window")," Object"),(0,a.kt)("p",null,"A browser window or tab is represented by ",(0,a.kt)("strong",{parentName:"p"},"the ",(0,a.kt)("inlineCode",{parentName:"strong"},"window")," object"),". Every browser automatically creates a new ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," object every time we open a new window or tab. In other words, the ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," object represents our current browsing context and lets us access it with JavaScript. So, if we navigate to a new tab, there will be a separate ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," object for that tab. "),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," is a global variable that's built-in to our browsers and always available. For example, you could open up your DevTools console now and input ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," and see the details of the current browsing context."),(0,a.kt)("p",null,"Just like with JavaScript objects, the ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," object has properties that describe what a browser ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," is and does. For example, we can access ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," properties to find this information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The URL of the website we are on."),(0,a.kt)("li",{parentName:"ul"},"The height and width of our browser window in pixels."),(0,a.kt)("li",{parentName:"ul"},"The language that our browser is using.")),(0,a.kt)("p",null,"And we can call on ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," methods to interact with our browser window:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go backwards and forwards in our browser history."),(0,a.kt)("li",{parentName:"ul"},"Refresh the page."),(0,a.kt)("li",{parentName:"ul"},"Open a new browser window.")),(0,a.kt)("p",null,"This is a very short list of examples. The ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," object offers a lot of functionality, and we'll learn more soon. For now, understand that the ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," object is a representation of a browser window or tab, and all of the information related to our current browsing context."),(0,a.kt)("h3",{id:"our-html-document-is-accessed-through-the-html-document-object-model-dom"},"Our HTML Document Is Accessed Through the HTML Document Object Model (DOM)"),(0,a.kt)("p",null,"When the browser displays our website's HTML, it takes the HTML source code and turns into a HTML ",(0,a.kt)("strong",{parentName:"p"},"Document Object Model (DOM)"),". In fact when we see our HTML in the browser, what we're actually looking at is the HTML Document Object Model, and not our source code. "),(0,a.kt)("p",null,"At its most basic, we can understand the DOM as a series of related objects. All of these objects in the DOM are organized hierarchically so they accurately represent the structure, content, and markup of our HTML source code. In other words, anything that's in our HTML source code \u2014 an element, an attribute of an element, text \u2014 is turned into an object in the DOM."),(0,a.kt)("p",null,"The browser creates a Document Object Model representation of our HTML so that our HTML can be manipulated with a scripting language like JavaScript. For example, we can use JavaScript to access the DOM to add or remove HTML elements. Manipulating the DOM doesn't change the HTML source code \u2014 it only changes the DOM that's displayed in the browser window. Without the DOM, JavaScript would have no way of knowing about or interacting with our websites!"),(0,a.kt)("p",null,"Similar to the browser's ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," object, the DOM has an object called ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," that represents, well, the DOM! If we want to change anything in the DOM, we'd do so by accessing the ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," object. Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," is also a global variable that's built-in to our browsers and always available. "),(0,a.kt)("p",null,"Just like with JavaScript objects, the ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," object has properties that describe what a ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," is and does. Since we know that the ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," object represents the HTML DOM, we'll be able to access ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," properties to do all sort of things related to the DOM:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Change, add, or remove an HTML element's attribute. "),(0,a.kt)("li",{parentName:"ul"},"Get all HTML elements that match a search query, like all ",(0,a.kt)("inlineCode",{parentName:"li"},"<p>")," tags. "),(0,a.kt)("li",{parentName:"ul"},"Add and remove HTML elements."),(0,a.kt)("li",{parentName:"ul"},"Show and hide HTML elements.")),(0,a.kt)("p",null,"This is just a short list of examples! We can manipulate our website's HTML in many ways, thanks to the DOM."),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)("p",null,"In computer programming an ",(0,a.kt)("strong",{parentName:"p"},"event")," is any action or occurrence that software can recognize. An event can be triggered by a human, like a mouse click, or by something that our program creates, like an error. When we write our programs to be interactive, we write our programs to react to events!"),(0,a.kt)("p",null,"So far we've created ",(0,a.kt)("strong",{parentName:"p"},"static")," webpages with HTML and CSS. The most interactive feature we've used are HTML anchor tags to create hyperlinks that take us to other webpages. It's interactive, because we can click it and the webpage reacts by navigating to another webpage. However that's pretty limited \u2014 our webpages haven't included buttons that we can click, forms that we can submit, or other interactive features. Because of this, our webpages are considered static."),(0,a.kt)("p",null,"When we write code that reacts to events, our webpages go from static to interactive. Consider an online website that hosts a game like ",(0,a.kt)("a",{parentName:"p",href:"https://www.mathsisfun.com/games/tic-tac-toe.html"},"Tic Tac Toe"),". We play the game with mouse clicks: every time a player is ready to place their X or O on the game board, they must click on a square on the webpage. To make this Tic Tac Toe game functional, we need to have code that is able to recognize the click event and do something in response."),(0,a.kt)("p",null,"We call this process ",(0,a.kt)("strong",{parentName:"p"},"event handling"),". The click is the event and how we handle the click event corresponds to how our code is set up to react to the event. In this course, we'll learn how to use JavaScript and web browser tools to handle events. Using Tic Tac Toe as an example, we can write code that listens for a click event on the game board that will trigger a JavaScript function to update the board with an X or an O. "),(0,a.kt)("p",null,"In web development, events arise from user interaction with specific browser structures \u2014 like scrolling in a browser window or clicking on an HTML element. Each event has a name, like 'click' or 'scroll', and belongs to a specific type of object, like ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," (our website's HTML) or ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," (our browser window or tab). This enables developers to easily write code that targets specific events."),(0,a.kt)("p",null,"We'll learn more about event handling soon, for now just keep in mind that events are occurrences that our websites can recognize and we can write JavaScript to react to."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We covered a lot of new concepts in this lesson! By now, we should have a basic conceptual understanding about how the web browser handles creating both the ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," objects when we navigate to a webpage. Developers write the source code (the HTML, CSS, and JavaScript), and the browser handles parsing it (including creating the ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," objects) and displaying it to users. "),(0,a.kt)("p",null,"If anything we've covered is unclear, know that this lesson is only meant to be a conceptual introduction to these concepts and tools. We will be reviewing and applying all of these concepts in upcoming lessons, so you will come to understand them all soon. "),(0,a.kt)("p",null,"These are the main points that we covered in this lesson:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Web browsers manage interactivity on the web \u2014 they provide the tools that web developers can learn to use to make their own websites interactive."),(0,a.kt)("li",{parentName:"ul"},"These browser tools are called Web APIs; they are separate from the JavaScript language, but we do use JavaScript to interact with them."),(0,a.kt)("li",{parentName:"ul"},"We can access and manipulate the browser window (or browsing context) via the ",(0,a.kt)("inlineCode",{parentName:"li"},"window")," object."),(0,a.kt)("li",{parentName:"ul"},"We can access and manipulate our HTML document via the DOM, which is accessed via the ",(0,a.kt)("inlineCode",{parentName:"li"},"document")," object. "),(0,a.kt)("li",{parentName:"ul"},"Just like with JavaScript objects, the ",(0,a.kt)("inlineCode",{parentName:"li"},"window")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"document")," objects have properties that describe what they are and can do. "),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"window")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"document")," variables are global, which means they are always available."),(0,a.kt)("li",{parentName:"ul"},"Making an interactive website means writing code that reacts to events."),(0,a.kt)("li",{parentName:"ul"},"Events in computer programming are any occurrence that a program can recognize and react to, like a mouse click or a form submission."),(0,a.kt)("li",{parentName:"ul"},"Events belong to specific browser structures, like the ",(0,a.kt)("inlineCode",{parentName:"li"},"window")," object and ",(0,a.kt)("inlineCode",{parentName:"li"},"document")," object. In other words, there are browser window events, and there are HTML document events.")))}d.isMDXComponent=!0}}]);