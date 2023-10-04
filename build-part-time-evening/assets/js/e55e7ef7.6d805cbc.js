"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[68953],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=p(n),u=a,m=h["".concat(s,".").concat(u)]||h[u]||c[u]||r;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7896),a=(n(2784),n(30876));const r={title:"Event Handling with Event Handler Properties",id:"event-handling-with-event-handler-properties",slug:"event-handling-with-event-handler-properties",hide_table_of_contents:!0,sidebar_position:8,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2k_event_handling_with_event_handler_properties.md"},i=void 0,l={unversionedId:"introduction-to-programming/javascript-and-web-browsers-part-2/event-handling-with-event-handler-properties",id:"introduction-to-programming/javascript-and-web-browsers-part-2/event-handling-with-event-handler-properties",title:"Event Handling with Event Handler Properties",description:"So far, we've made our webpages interactive with window methods:",source:"@site/docs/introduction-to-programming/4_javascript-and-web-browsers-part-2/2k-event-handling-with-event-handler-properties.md",sourceDirName:"introduction-to-programming/4_javascript-and-web-browsers-part-2",slug:"/introduction-to-programming/javascript-and-web-browsers-part-2/event-handling-with-event-handler-properties",permalink:"/introduction-to-programming/javascript-and-web-browsers-part-2/event-handling-with-event-handler-properties",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Event Handling with Event Handler Properties",id:"event-handling-with-event-handler-properties",slug:"event-handling-with-event-handler-properties",hide_table_of_contents:!0,sidebar_position:8,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2k_event_handling_with_event_handler_properties.md"},sidebar:"introduction-to-programming",previous:{title:"Function Expressions",permalink:"/introduction-to-programming/javascript-and-web-browsers-part-2/function-expressions"},next:{title:"Event Handler Properties in a Project: Using window.onload",permalink:"/introduction-to-programming/javascript-and-web-browsers-part-2/event-handler-properties-in-a-project-using-windowonload"}},s={},p=[{value:"Review: Events and Event Handling",id:"review-events-and-event-handling",level:2},{value:"Event Handling with Event Handler Properties",id:"event-handling-with-event-handler-properties",level:2},{value:"Rewriting or Removing an Event Handler",id:"rewriting-or-removing-an-event-handler",level:3},{value:"Property Naming Conventions",id:"property-naming-conventions",level:3},{value:"Events Are Categorized by Type and by the Object it Belongs To",id:"events-are-categorized-by-type-and-by-the-object-it-belongs-to",level:3},{value:"Keyboard Events: <code>onkeydown</code> and <code>onkeyup</code>",id:"keyboard-events-onkeydown-and-onkeyup",level:2},{value:"Outmoded: Inline HTML Event Handler Attributes",id:"outmoded-inline-html-event-handler-attributes",level:2},{value:"Don&#39;t Use HTML Event Handler Attributes",id:"dont-use-html-event-handler-attributes",level:3},{value:"Summary",id:"summary",level:2}],d={toc:p},h="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"So far, we've made our webpages interactive with ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"window.alert()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"window.prompt()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"window.confirm()"))),(0,a.kt)("p",null,"However, these methods are not commonly used for user interaction, and as we learned they are associated with hacky websites and malware. Now that we are equipped with a working understanding of the ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," object and how to access and manipulate HTML elements, we're going to start exploring event handling. "),(0,a.kt)("p",null,"There are two methods of event handling that we will learn in this course section: event handler properties and event listeners. In this lesson, we'll learn how to handle events with ",(0,a.kt)("strong",{parentName:"p"},"event handler properties"),". As we'll soon learn, these are also commonly called ",(0,a.kt)("strong",{parentName:"p"},"onevent properties"),". "),(0,a.kt)("p",null,"Let's start with a review."),(0,a.kt)("h2",{id:"review-events-and-event-handling"},"Review: Events and Event Handling"),(0,a.kt)("hr",null),(0,a.kt)("p",null,'We were first introduced to events in the lesson called "How Web Browsers Work." In computer programming an ',(0,a.kt)("strong",{parentName:"p"},"event")," is any action or occurrence that software can recognize. An event can be triggered by a human, like a mouse click, or by something that our program creates, like an error. When we write our programs to be interactive, we write our programs to react to events!"),(0,a.kt)("p",null,"In web development, events arise from user interaction with specific browser structures \u2014 like scrolling in a browser window or clicking on an HTML element. Each event has a name, like 'click' or 'scroll', and belongs to a specific object, like ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," (our HTML) or ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," (our browser window or tab). This enables developers to easily write code that targets specific events."),(0,a.kt)("p",null,"When developers write JavaScript to react to an event, we call this process ",(0,a.kt)("strong",{parentName:"p"},"event handling"),". As an example, consider an online website that hosts a game like ",(0,a.kt)("a",{parentName:"p",href:"https://www.mathsisfun.com/games/tic-tac-toe.html"},"Tic Tac Toe"),". We play the game with mouse clicks: every time a player is ready to place their X or O on the game board, they must click on a square on the webpage. To make this Tic Tac Toe game functional, we need to have code that is able to listen for the click event and do something in response, like call on a JavaScript function to update the game board with an X or an O."),(0,a.kt)("p",null,"Next up, we'll learn how to handle a click event on HTML elements."),(0,a.kt)("h2",{id:"event-handling-with-event-handler-properties"},"Event Handling with Event Handler Properties"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"To handle a click event on an HTML element, we'll use an event handler property. An ",(0,a.kt)("strong",{parentName:"p"},"event handler property")," is a built-in property of an object (a Web API) that represents an event. Our ",(0,a.kt)("inlineCode",{parentName:"p"},"window"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"document"),", and HTML elements all have built-in event handler properties. "),(0,a.kt)("p",null,'Event handler properties "listen" for an event on the object that it is attached to. When the event happens, the event handler property runs some code as a reaction. As developers, we get to decide what the reaction is.'),(0,a.kt)("p",null,"Let's look at an example to demystify this new concept. We'll continue to use the cookie recipe example in this lesson. If you want to code along with this lesson (which is optional) then open up your cookie recipe project in your browser and open the DevTools console as well."),(0,a.kt)("p",null,"Here's our HTML for the H1 element:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<h1 id="specialHeader">Best Chocolate Chip Cookies</h1>\n')),(0,a.kt)("p",null,"Here's the JS for adding an event handler property for a click event. Since we're using the angle bracket ",(0,a.kt)("inlineCode",{parentName:"p"},">")," in the following code snippet, it means we're entering the following code into our DevTools console."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> let h1 = document.querySelector("h1");\n> h1.onclick = function() {\n  window.alert("I am a heading element.");\n};\n')),(0,a.kt)("p",null,'With the above code, we\'ve made our program respond with an alert with the message "I am a heading element." every time we click on the H1 element "Best Chocolate Chip Cookies". Let\'s break down this new code. '),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"onclick")," is our event handler property. It belongs to our ",(0,a.kt)("inlineCode",{parentName:"p"},"h1")," variable which is an ",(0,a.kt)("inlineCode",{parentName:"p"},"HTMLHeadingElement")," object. All event handler properties follow the following syntax (in pseudocode):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"target.eventHandler = function\n")),(0,a.kt)("p",null,"Let's explain each part of the syntax:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"target")," is the HTML element, ",(0,a.kt)("inlineCode",{parentName:"li"},"document"),", or ",(0,a.kt)("inlineCode",{parentName:"li"},"window")," object that we're attaching an event handler to. In our examples the ",(0,a.kt)("inlineCode",{parentName:"li"},"h1")," variable representing an ",(0,a.kt)("inlineCode",{parentName:"li"},"HTMLHeadingElement")," object is what we're targeting."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eventHandler")," is the name of the event handler property that we're accessing on the target. In our example, the event handler property is ",(0,a.kt)("inlineCode",{parentName:"li"},"onclick"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"function")," is the value that we set for the event handler property. It is always set to a function. Every time the event happens, the function will be called and the code inside of it will be run. In our example, we used an anonymous function expression as the value of our ",(0,a.kt)("inlineCode",{parentName:"li"},"onclick")," event handler:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'h1.onclick = function() {\n  window.alert("I am a heading element.");\n};\n')),(0,a.kt)("p",null,"Now, every time someone clicks on the H1 element in the DOM, the anonymous function expression will be called and the code inside of it will be run, causing an alert to pop up."),(0,a.kt)("p",null,"We always set the value of an event handler property to a function. Why? Well, event handler properties are expected to be assigned to a function. They have an internal mechanism that knows to call the function when the event happens. We can also manually call on our event handler properties like this and it will trigger the ",(0,a.kt)("inlineCode",{parentName:"p"},"onclick")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"> h1.onclick();\n")),(0,a.kt)("p",null,"Pretend that an alert pops up after we input this into our DevTools console (or, try it out now in your own Cookie Recipe project). Even though we can do this, it's not a common practice."),(0,a.kt)("h3",{id:"rewriting-or-removing-an-event-handler"},"Rewriting or Removing an Event Handler"),(0,a.kt)("p",null,"If messed up our original ",(0,a.kt)("inlineCode",{parentName:"p"},"h1.onclick")," event handler in the DevTools console, something like this: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> h1.onclick = function() {\n  window.alert("I m a hding element."); // with typos in the message\n};\n')),(0,a.kt)("p",null,"We can easily fix it by reassigning ",(0,a.kt)("inlineCode",{parentName:"p"},"h1.onclick")," to a new function expression. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> h1.onclick = function() {\n  window.alert("I am a heading element."); // the typos are fixed!\n};\n')),(0,a.kt)("p",null,"Doing this replaces the previous function, just like with reassigning the value of a JavaScript variable. "),(0,a.kt)("p",null,"We can remove an event handler by reassigning the value of the property to ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", which ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"},"intentionally represents an absence of a value"),". Using ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," thereby gives the event handler no value, and stops the event handler from reacting to the event."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"> h1.onclick = null;\n")),(0,a.kt)("p",null,"One reason to remove an event handler is when you only want to react to an event once, or only a select number of times. When we learn about event handling with event listeners later in this course section, we'll review other reasons to remove event handlers. "),(0,a.kt)("h3",{id:"property-naming-conventions"},"Property Naming Conventions"),(0,a.kt)("p",null,"The name of the ",(0,a.kt)("inlineCode",{parentName:"p"},"onclick"),' property suggests that we\'re saying to our program, "on a click event, do X", where "X" is how we want the click event to be handled. For this reason, these event handler properties are also called ',(0,a.kt)("strong",{parentName:"p"},"onevent properties"),'. The name "onevent property" conveniently reminds us of the naming convention for these event handler properties: on + name of event. For example, consider these two additional onevent properties that we can set for our H1 element:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// the oncopy property lets us respond to when \n// all or part of the H1 element has been copied.\n> h1.oncopy = function() {\n  window.alert("The heading element has been copied.");\n};\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// the onmouseover property lets us respond to when \n// a mouse has hovered over the H1 element. \n> h1.onmouseover = function() {\n  window.alert("The mouse has hovered over the heading element.");\n};\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"oncopy")," property lets us respond to when all or part of the H1 element has been copied, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"onmouseover")," property lets us respond to when a mouse has hovered over the H1 element. As we can see, the names of these properties follow the intuitive naming convention of on + name of event."),(0,a.kt)("h3",{id:"events-are-categorized-by-type-and-by-the-object-it-belongs-to"},"Events Are Categorized by Type and by the Object it Belongs To"),(0,a.kt)("p",null,'Events are categorized in two ways. First, events are grouped into categories that we call "event types". For example, the ',(0,a.kt)("inlineCode",{parentName:"p"},"onclick")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"onmouseover")," events are a part of Mouse Events. The ",(0,a.kt)("inlineCode",{parentName:"p"},"oncopy")," event is a part of Clipboard Events. Typically for every event type, there's multiple events. For example, Clipboard Events also include cut and paste events. For a full list of event types, ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Events#event_index"},"visit this reference page on MDN"),". In the next lesson, we'll explore this reference page more in depth."),(0,a.kt)("p",null,"Second, events are also categorized as belonging to an object. This is really important! Events don't exist by themselves \u2014 they always happen on or to something. For example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The screen resize event happens to the window."),(0,a.kt)("li",{parentName:"ul"},"The copy event happens on the HTML element.")),(0,a.kt)("p",null,"Connecting events to objects enables different objects to respond to the same event. For example, we could have an ",(0,a.kt)("inlineCode",{parentName:"p"},"onmouseover")," event set up for every HTML element in the DOM, and each ",(0,a.kt)("inlineCode",{parentName:"p"},"onmouseoever")," event could trigger an entirely different function to execute. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> let h1 = document.querySelector("h1");\n> h1.onmouseover = function() {\n  window.alert("I am a heading element.");\n};\n> let p = document.querySelector("p");\n> p.onmouseover = function() {\n  document.querySelector("p>em").innerText = "Don\'t be surprised";\n};\n> let img = document.querySelector("img");\n> img.onmouseover = function() {\n  img.style.height = "700px";\n};\n')),(0,a.kt)("p",null,"In this example, we can see that we've set 3 different elements in the DOM to react to the same ",(0,a.kt)("inlineCode",{parentName:"p"},"onmouseover")," event \u2014 however, each reaction is distinct. The gif below shows the results of adding the above event handlers to the cookie recipe."),(0,a.kt)("p",null,"Optionally, open your cookie recipe project and type in the above code into your DevTools console to try it out. Make sure to remove the ",(0,a.kt)("inlineCode",{parentName:"p"},">")," angle brackets, as those will throw an error. The angle brackets are just to denote that the code is meant for the DevTools console. We encourage you to type out your code instead of copy/pasting so that you can develop your typing ability and muscle memory. "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/mouseover-events.gif",alt:"This gif shows the above example in the cookie recipe that targets mouse events making the paragraph, image, and H1 elements change."})),(0,a.kt)("h2",{id:"keyboard-events-onkeydown-and-onkeyup"},"Keyboard Events: ",(0,a.kt)("inlineCode",{parentName:"h2"},"onkeydown")," and ",(0,a.kt)("inlineCode",{parentName:"h2"},"onkeyup")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Let's look at two keyboard events: ",(0,a.kt)("inlineCode",{parentName:"p"},"onkeydown")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"onkeyup"),". We'll update our cookie recipe to react to these events by changing the background and text color of the document body. So what do these keyboard events target?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onkeydown")," enables our program to react when a keyboard key is pressed down. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onkeyup")," enables our program to react when a keyboard key is let go after it has been pressed.")),(0,a.kt)("p",null,"We'll continue to input code into our DevTools console for our Cookie Recipe project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> let body = document.body;\n> body.onkeydown = function() {\n  body.style.backgroundColor = "black";\n  body.style.color = "white";\n};\n> body.onkeyup = function() {\n  body.style.backgroundColor = "white";\n  body.style.color = "black";\n};\n')),(0,a.kt)("p",null,"Notice that we're using the ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," object property called ",(0,a.kt)("inlineCode",{parentName:"p"},"body")," to target the HTML body element: ",(0,a.kt)("inlineCode",{parentName:"p"},"let body = document.body;"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," object has these special properties for both the ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<body>")," tags. We could also do this instead:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> let body = document.querySelector("body");\n')),(0,a.kt)("p",null,"Next, we create two different reactions to the body element's ",(0,a.kt)("inlineCode",{parentName:"p"},"onkeydown")," event and ",(0,a.kt)("inlineCode",{parentName:"p"},"onkeyup")," event: when we press a key, we set the background color to black and the text color to white, and when we let a key go we set the reverse values for each style property. When we type on our body (even though there's nowhere to type), we should see the colors of our HTML text and background change! If you are trying this out, make sure to click back into the webpage before you start pressing on your keys. "),(0,a.kt)("p",null,"The gif below demonstrates the results of this new code. The code is input into the DevTool console on the right, then the cursor clicks back into the webpage, then some keys are pressed down and let go."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/keyboard-events.gif",alt:"This gif shows the above example in the cookie recipe that targets keyboard events making the background and text color change."})),(0,a.kt)("h2",{id:"outmoded-inline-html-event-handler-attributes"},"Outmoded: Inline HTML Event Handler Attributes"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"As you explore and research event handler properties, you'll come across using inline HTML attributes to handle events. These look remarkably similar to event handler properties, only they are HTML attributes that are added directly inline to our HTML. Here's an example of two event handlers added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<body>")," tag in our cookie recipe:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <title> Best Chocolate Chip Cookies </title>\n    <link rel="stylesheet" href="css/styles.css" type="text/css">\n  </head>\n  <body onkeydown="keyDown()" onkeyup="document.body.style.backgroundColor=\'white\';document.body.style.color=\'black\'">\n    <h1 id="specialHeader">Best Chocolate Chip Cookies</h1>\n    <img src="https://static01.nyt.com/images/2022/02/12/dining/JT-Chocolate-Chip-Cookies/JT-Chocolate-Chip-Cookies-articleLarge.jpg" alt="An image of a cookie"/>\n\n    ... \n\n    <script>\n      function keyDown() { \n        document.body.style.backgroundColor = \'black\';\n        document.body.style.color = \'white\'; \n      }\n    <\/script>\n  </body>\n</html>\n')),(0,a.kt)("p",null,"Note \u2014 the ",(0,a.kt)("inlineCode",{parentName:"p"},"...")," represents additional HTML that we are abbreviating in this code snippet. Here's the event handler attributes separated out: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<body onkeydown=\"keyDown()\" onkeyup=\"document.body.style.backgroundColor='white';document.body.style.color='black'\">\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  function keyDown() { \n    document.body.style.backgroundColor = 'black';\n    document.body.style.color = 'white'; \n  }\n<\/script>\n")),(0,a.kt)("p",null,"The above example shows us two ways that we can set up an inline HTML event handler attribute:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"With ",(0,a.kt)("inlineCode",{parentName:"li"},"onkeydown"),", we're setting the value of that attribute to a function call ",(0,a.kt)("inlineCode",{parentName:"li"},"keyDown()")," which is defined within the ",(0,a.kt)("inlineCode",{parentName:"li"},"<script>")," tags at the bottom of our HTML body. Anything between the ",(0,a.kt)("inlineCode",{parentName:"li"},"<script>")," tag does not get printed to the DOM. Instead, the code gets read and processed as JavaScript. Indeed, we can write any JavaScript within the ",(0,a.kt)("inlineCode",{parentName:"li"},"<script>")," tags. ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Take note:")," it's less common to use the ",(0,a.kt)("inlineCode",{parentName:"li"},"<script>")," tags to write JavaScript in our HTML file. It's considered best practice to write our JavaScript in separate files. Doing so makes our code easier to read and maintain because we're separating our concerns: HTML is in our ",(0,a.kt)("inlineCode",{parentName:"li"},".html")," files, and JS is in our ",(0,a.kt)("inlineCode",{parentName:"li"},".js")," files."))),(0,a.kt)("li",{parentName:"ul"},"With ",(0,a.kt)("inlineCode",{parentName:"li"},"onkeyup"),", we're writing JS commands directly within the quotes as the value of the ",(0,a.kt)("inlineCode",{parentName:"li"},"onkeyup")," attribute. Notice that there are two commands that are separated by a semi colon ",(0,a.kt)("inlineCode",{parentName:"li"},";"),". This method of assigning a value for an HTML event handler attribute is less favorable because it's considered hard to read.")),(0,a.kt)("h3",{id:"dont-use-html-event-handler-attributes"},"Don't Use HTML Event Handler Attributes"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"This method of handling events with inline HTML event attributes is outmoded and you shouldn't use them.")," It's important to be aware that they exist so you can recognize them in examples from online resources, and know to avoid them. "),(0,a.kt)("p",null,"Why are these considered outmoded and bad practice?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Developers should always try to separate their JavaScript from their HTML. When we combine them it makes both harder to read and understand. Code that's harder to understand is code that is harder to maintain and debug. It's a best practice to keep JavaScript in a separate file that's connected to the HTML via the ",(0,a.kt)("inlineCode",{parentName:"li"},"<script>")," tag."),(0,a.kt)("li",{parentName:"ol"},'What if we had a long webpage with a long form on it with a series of 10 "save" buttons. Each save button does the same thing \u2014 it saves all form fields. If we wanted to target a click event on all of those buttons to save the forms, we\'d need to add an ',(0,a.kt)("inlineCode",{parentName:"li"},"onclick")," event handler attribute to each button in our HTML. Conversely, with an event handler property we can target all button elements at once with a single ",(0,a.kt)("inlineCode",{parentName:"li"},"onclick")," event handler property that saves the forms. In this example, using inline event handler attributes would bloat our HTML, while using event handler properties would separate our code (HTML from JS) and thereby make it easier to understand and maintain.")),(0,a.kt)("p",null,"There's an equivalent event handler property for every inline HTML event handler attribute, so there should be no reason to use HTML event handler attributes."),(0,a.kt)("p",null,"To read more about HTML event handler attributes see ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#inline_event_handlers_%E2%80%94_dont_use_these"},"this resource on MDN"),"."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In this lesson we learned about event handler properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'These properties are also called "onevent" properties because they follow the naming convention on + event name.'),(0,a.kt)("li",{parentName:"ul"},"We set the value of an event handler property to a function. Any time the event is triggered, the function will be called. We can put whatever code we want to have run into the function. "),(0,a.kt)("li",{parentName:"ul"},'Event handler properties belong to Web API objects (also called "interfaces"), like ',(0,a.kt)("inlineCode",{parentName:"li"},"Element"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"HTMLElement"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"document"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"window"),". This lesson covered events that targeted the HTML body, paragraph, H1, and image elements."),(0,a.kt)("li",{parentName:"ul"},"Event handler properties are grouped by type, and often an event type is made up of many events. For example:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Keyboard events are an event type."),(0,a.kt)("li",{parentName:"ul"},"Keyboard events are made up of three events: ",(0,a.kt)("inlineCode",{parentName:"li"},"onkeypress"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"onkeyup"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"onkeydown"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Never use inline HTML event handler attributes."))),(0,a.kt)("p",null,"In the next lesson, we'll learn how to use event handler properties in a project. Then we'll practice using event handler properties. In upcoming lessons, we'll use this new skill to make more complicated applications that take user input via forms."))}c.isMDXComponent=!0}}]);