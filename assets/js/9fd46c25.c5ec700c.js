"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[83981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,m=c["".concat(s,".").concat(u)]||c[u]||h[u]||o;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},44516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={title:"Address Book: Event Bubbling, Event Delegation, and the Event Object",id:"address_book_event_bubbling_event_delegation_and_the_event_object",slug:"address_book_event_bubbling_event_delegation_and_the_event_object",hide_table_of_contents:!0,sidebar_position:21,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3_object-oriented-javascript/1e_address_book_intro_to_event_delegation.md"},l=void 0,r={unversionedId:"intermediate_javascript_part_time/object-oriented-javascript/address_book_event_bubbling_event_delegation_and_the_event_object",id:"intermediate_javascript_part_time/object-oriented-javascript/address_book_event_bubbling_event_delegation_and_the_event_object",title:"Address Book: Event Bubbling, Event Delegation, and the Event Object",description:"At this point, we can dynamically add Contacts to our AddressBook and see their names appear in the DOM. However, what if we want to see additional details about each Contact? In this lesson, we'll add functionality so a user can click on a contact to see additional information such as a phone number. This is similar to how an address book in a smartphone might work \u2014 you click on the name to get more information about the contact.",source:"@site/docs/intermediate_javascript_part_time/3_object-oriented-javascript/1e_address_book_intro_to_event_delegation.md",sourceDirName:"intermediate_javascript_part_time/3_object-oriented-javascript",slug:"/intermediate_javascript_part_time/object-oriented-javascript/address_book_event_bubbling_event_delegation_and_the_event_object",permalink:"/lhtp/intermediate_javascript_part_time/object-oriented-javascript/address_book_event_bubbling_event_delegation_and_the_event_object",draft:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"Address Book: Event Bubbling, Event Delegation, and the Event Object",id:"address_book_event_bubbling_event_delegation_and_the_event_object",slug:"address_book_event_bubbling_event_delegation_and_the_event_object",hide_table_of_contents:!0,sidebar_position:21,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3_object-oriented-javascript/1e_address_book_intro_to_event_delegation.md"},sidebar:"intermediate_javascript_part_time",previous:{title:"Address Book, Movie Tickets, Bank Account - Part 1",permalink:"/lhtp/intermediate_javascript_part_time/object-oriented-javascript/address_book_movie_tickets_bank_account___part_1"},next:{title:"Address Book: Delete Functionality and Polish",permalink:"/lhtp/intermediate_javascript_part_time/object-oriented-javascript/address_book_delete_functionality_and_polish"}},s={},p=[{value:"Event Handling Review",id:"event-handling-review",level:2},{value:"Event Bubbling",id:"event-bubbling",level:2},{value:"Event Delegation in Address Book Application",id:"event-delegation-in-address-book-application",level:2},{value:"The <code>Event</code> Object",id:"the-event-object",level:2},{value:"The <code>Event</code> Object is a Web API, a part of the DOM",id:"the-event-object-is-a-web-api-a-part-of-the-dom",level:3},{value:"<code>EventTarget</code> versus <code>Event</code>",id:"eventtarget-versus-event",level:3},{value:"Exploring Events by Logging Them to the Console",id:"exploring-events-by-logging-them-to-the-console",level:3},{value:"Exploring Events with Breakpoints",id:"exploring-events-with-breakpoints",level:3},{value:"Completing <code>displayContactDetails()</code>",id:"completing-displaycontactdetails",level:2},{value:"Resources to Explore on MDN",id:"resources-to-explore-on-mdn",level:3}],d={toc:p},c="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"At this point, we can dynamically add ",(0,i.kt)("inlineCode",{parentName:"p"},"Contact"),"s to our ",(0,i.kt)("inlineCode",{parentName:"p"},"AddressBook")," and see their names appear in the DOM. However, what if we want to see additional details about each ",(0,i.kt)("inlineCode",{parentName:"p"},"Contact"),"? In this lesson, we'll add functionality so a user can click on a contact to see additional information such as a phone number. This is similar to how an address book in a smartphone might work \u2014 you click on the name to get more information about the contact."),(0,i.kt)("p",null,"Our new feature will allow us to hide and show information about a specific contact. To add this functionality, we'll explore two new concepts: ",(0,i.kt)("strong",{parentName:"p"},"event bubbling")," and ",(0,i.kt)("strong",{parentName:"p"},"event delegation"),"."),(0,i.kt)("h2",{id:"event-handling-review"},"Event Handling Review"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"As we've discussed previously, we can use ",(0,i.kt)("strong",{parentName:"p"},"event handlers")," to 'listen' for and react to events in the DOM. That event could be anything from a click to a keystroke to hovering over an element. When an event occurs, it will trigger any event handlers that are listening for that particular event. We've used both event handler properties and event listeners to create event handlers in our scripts."),(0,i.kt)("p",null,"We've mostly waited until the webpage has loaded to create any event handler. In the UI of every application we've created, we've done the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'window.addEventListener("load", function() {\n  // We create event handlers in here.\n});\n')),(0,i.kt)("p",null,"All the code inside the load event listener will run when the webpage has loaded all of its resources, including HTML, JS, CSS, and other files like images. We wait until the webpage has loaded all resources because we can only attach an event handler to a DOM element if the element already exists."),(0,i.kt)("p",null,"However, we're going to have to do things differently when we add contacts. That's because we don't add contacts until ",(0,i.kt)("em",{parentName:"p"},"after")," the webpage has loaded. The code inside of the 'load' event handler will run as soon as the webpage is loaded, attaching additional event handlers as needed \u2014 but we can't add any event handlers to individual contacts because those contacts don't exist in the DOM yet."),(0,i.kt)("p",null,"That's why we'll need a different approach. And this approach is very important to understand if you want to be able to dynamically change things in the DOM when users do things, not just when the document has loaded."),(0,i.kt)("p",null,"Currently, when we create a new contact and display it in the DOM, we include an ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," attribute set to the contact's ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," property. We need to create an event listener that will trigger based on those dynamic IDs. In order to do this, we'll apply two concepts that are a bit more advanced \u2014 perhaps we could even call them ",(0,i.kt)("em",{parentName:"p"},"intermediate")," JavaScript? Specifically, these two concepts are ",(0,i.kt)("strong",{parentName:"p"},"event bubbling")," and ",(0,i.kt)("strong",{parentName:"p"},"event delegation"),". Let's start with event bubbling."),(0,i.kt)("h2",{id:"event-bubbling"},"Event Bubbling"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Let's consider an example that uses an unordered list inside a ",(0,i.kt)("inlineCode",{parentName:"p"},"div"),". This is for demonstration purposes only \u2014 we won't add this code to our address book!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div id="parent-container">\n  <ul id="list">\n    <li id=1>1</li>\n    <li id=2>2</li>\n    <li id=3>3</li>\n  </ul>\n</div>\n')),(0,i.kt)("p",null,"When we click a DOM element, it triggers an event. That event then ",(0,i.kt)("em",{parentName:"p"},"bubbles")," upward. For example, when a user clicks on one of the ",(0,i.kt)("inlineCode",{parentName:"p"},"<li>"),"s in then code above, it triggers a click event. That click event bubbles upward to all the ",(0,i.kt)("inlineCode",{parentName:"p"},"<li>"),"'s parent elements in this order:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"First, any click event handlers on the specific ",(0,i.kt)("inlineCode",{parentName:"p"},"<li>")," are triggered.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Then, any click event handlers on the ",(0,i.kt)("inlineCode",{parentName:"p"},'<ul id="list">'),' are triggered. This is one level "up" from the original ',(0,i.kt)("inlineCode",{parentName:"p"},"<li>"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Finally, any click handlers on the ",(0,i.kt)("inlineCode",{parentName:"p"},'<div id="parent-container">'),' are triggered, because it\'s yet another level "up" from the ',(0,i.kt)("inlineCode",{parentName:"p"},'<ul id="list">')," element.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the ",(0,i.kt)("inlineCode",{parentName:"p"},'<div id="parent-container">')," was wrapped in yet another element, like another div, any event listeners attached to that div would also trigger."))),(0,i.kt)("p",null,"If we were to do something silly like attach an event listener that listens for clicks on the ",(0,i.kt)("inlineCode",{parentName:"p"},"<body>")," element, clicking ",(0,i.kt)("em",{parentName:"p"},"anything")," in the body of the document would eventually trigger that click handler. That's because all the elements inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"<body>")," of the document eventually 'bubble up' to ",(0,i.kt)("inlineCode",{parentName:"p"},"<body>"),"."),(0,i.kt)("p",null,"This process of hopping 'upward' to higher and higher level parent elements is called ",(0,i.kt)("strong",{parentName:"p"},"event bubbling")," or ",(0,i.kt)("strong",{parentName:"p"},"event propagation"),". We ",(0,i.kt)("em",{parentName:"p"},"could")," write handlers for all three of these elements and each would be triggered in the order above. But this can actually create errors for new coders, particularly if they don't mean to trigger an event on a parent element."),(0,i.kt)("h2",{id:"event-delegation-in-address-book-application"},"Event Delegation in Address Book Application"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We can use event bubbling to our advantage in our address book. Remember, we can only attach event handlers to DOM elements that exist. Our ",(0,i.kt)("inlineCode",{parentName:"p"},"<li>")," elements don't exist yet when the DOM is created. However, its parent element ",(0,i.kt)("inlineCode",{parentName:"p"},'<div id="contacts">')," does! This means we can use ",(0,i.kt)("strong",{parentName:"p"},"event delegation")," in tandem with ",(0,i.kt)("strong",{parentName:"p"},"event bubbling")," to solve our problem and display details when a ",(0,i.kt)("inlineCode",{parentName:"p"},"<li>")," is clicked."),(0,i.kt)("p",null,"Specifically, we can attach an event listener to a parent element that will fire for specified child elements. This is called ",(0,i.kt)("strong",{parentName:"p"},"event delegation"),". Let's add a new function to our address book to demonstrate how it works."),(0,i.kt)("p",null,"We'll create a new function called ",(0,i.kt)("inlineCode",{parentName:"p"},"displayContactDetails()")," and we'll add it below our existing ",(0,i.kt)("inlineCode",{parentName:"p"},"listContacts()")," function:"),(0,i.kt)("div",{class:"filename"},"js/scripts.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"...\n\nfunction displayContactDetails() {\n\n}\n\n...\n")),(0,i.kt)("p",null,"We'll then call this function as soon as our webpage has loaded all resources:"),(0,i.kt)("div",{class:"filename"},"js/scripts.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'...\nwindow.addEventListener("load", function (){\n  document.querySelector("form#new-contact").addEventListener("submit", handleFormSubmission);\n  // The line below this one is new!\n  document.querySelector("div#contacts").addEventListener("click", displayContactDetails);   \n});\n')),(0,i.kt)("p",null,"What we've done is attach an event listener to the contacts div. The event listener is listening for click events on the div, which includes a click on anything inside of it."),(0,i.kt)("p",null,"Next, let's add some code to our ",(0,i.kt)("inlineCode",{parentName:"p"},"displayContactDetails()")," function."),(0,i.kt)("div",{class:"filename"},"js/scripts.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'...\n\nfunction displayContactDetails(event) {\n  console.log("The id of this <li> is " + event.target.id + ".");\n}\n\n...\n')),(0,i.kt)("p",null,"First, we make sure to create an ",(0,i.kt)("inlineCode",{parentName:"p"},"event")," parameter so that we can access the ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," object that's passed into the function when the click event is triggered. "),(0,i.kt)("p",null,"Then, we log a message to the console that shows the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," attribute of the list item we clicked. We do this by accessing ",(0,i.kt)("inlineCode",{parentName:"p"},"event.target.id"),", which we'll explore in detail below. For now, know that ",(0,i.kt)("inlineCode",{parentName:"p"},"event.target")," represents the element that the event originated from. In our case, it's our ",(0,i.kt)("inlineCode",{parentName:"p"},"<li>")," element that we click on inside of the contacts div, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," property in ",(0,i.kt)("inlineCode",{parentName:"p"},"event.target.id")," corresponds to the list item's ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," attribute. "),(0,i.kt)("p",null,"If we load our page, populate a few contacts with our form, and click their ",(0,i.kt)("inlineCode",{parentName:"p"},"<li>"),"s, we'll see the id of the clicked ",(0,i.kt)("inlineCode",{parentName:"p"},"<li>")," logged in the console! This is event delegation at work: we've attached the event listener to the parent element (the div), and this event listener is triggering when we click on child elements (any contact list item). "),(0,i.kt)("p",null,"The result of harnessing event delegation in our code is twofold:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We're able to create an event handler that reacts to clicks on elements that don't yet exist in the DOM."),(0,i.kt)("li",{parentName:"ul"},"By accessing ",(0,i.kt)("inlineCode",{parentName:"li"},"event.target"),", we're able to write code based on the data of elements that do not yet exist, and do stuff with that data.")),(0,i.kt)("p",null,"Event delegation is powerful stuff, and not too complicated to put to use in our code! "),(0,i.kt)("p",null,"Before we complete the ",(0,i.kt)("inlineCode",{parentName:"p"},"displayContactDetails()")," function, let's build some context around the ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," object and the ",(0,i.kt)("inlineCode",{parentName:"p"},"event.target")," property. "),(0,i.kt)("h2",{id:"the-event-object"},"The ",(0,i.kt)("inlineCode",{parentName:"h2"},"Event")," Object"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We've worked with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," object before, so let's start with a little review before jumping into exploring ",(0,i.kt)("inlineCode",{parentName:"p"},"event.target"),". Let's borrow some code from the handler function for our form's 'submit' event in the address book project."),(0,i.kt)("div",{class:"filename"},"js/scripts.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function handleFormSubmission(event) {\n  event.preventDefault();\n  ...\n  ...\n}\n")),(0,i.kt)("p",null,"What do we know about the ",(0,i.kt)("inlineCode",{parentName:"p"},"event")," parameter and ",(0,i.kt)("inlineCode",{parentName:"p"},"event.preventDefault()")," so far?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We can add the ",(0,i.kt)("inlineCode",{parentName:"li"},"event")," parameter to access the ",(0,i.kt)("inlineCode",{parentName:"li"},"Event")," object that's automatically created and passed into our event handler function. This happens implicitly, so it's hard to track because we don't see it happen. In this case, we just need to accept that this happens."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"Event")," object that's passed in represents a specific type of event. For our form submission event this ",(0,i.kt)("inlineCode",{parentName:"li"},"Event")," object is specifically a ",(0,i.kt)("inlineCode",{parentName:"li"},"SubmitEvent")," object."),(0,i.kt)("li",{parentName:"ul"},"Every ",(0,i.kt)("inlineCode",{parentName:"li"},"Event")," object has properties that we can access to get information about the event or to perform actions. So far, we've only used the ",(0,i.kt)("inlineCode",{parentName:"li"},"Event")," object to prevent the default action of 'submit' events, which is to refresh the page.  ")),(0,i.kt)("p",null,"Notably, the only way to access the ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," object is through the handler function that's attached to the event handler. No matter what event we're targeting, we can always add an ",(0,i.kt)("inlineCode",{parentName:"p"},"event")," parameter to the handler function to access the details of the event. "),(0,i.kt)("p",null,"With this review, let's dive a little deeper into the ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," object, and explore some valuable tools and resources to help us understand all that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," object has to offer."),(0,i.kt)("h3",{id:"the-event-object-is-a-web-api-a-part-of-the-dom"},"The ",(0,i.kt)("inlineCode",{parentName:"h3"},"Event")," Object is a Web API, a part of the DOM"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," object is another interface that makes up the Document Object Model (DOM). ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Event"},"According to MDN"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," interface represents an event which takes place in the DOM.")),(0,i.kt)("p",null,"Most notably, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," object represents an event generally speaking, and it includes the properties and methods that all events of any type have. One of these methods is ",(0,i.kt)("inlineCode",{parentName:"p"},"preventDefault()"),", which we are familiar with. An example of two ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," properties are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget"},(0,i.kt)("inlineCode",{parentName:"a"},"currentTarget")),": refers to the element to which the event handler has been attached."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/target"},(0,i.kt)("inlineCode",{parentName:"a"},"target")),": identifies the element on which the event occurred.")),(0,i.kt)("p",null,"We will primarily deal with the second property: ",(0,i.kt)("inlineCode",{parentName:"p"},"target"),". "),(0,i.kt)("p",null,"Before we get into that property, there's one more thing to cover: there are multiple object types that are based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," object type; these are the objects that represent specific events, like ",(0,i.kt)("inlineCode",{parentName:"p"},"SubmitEvent")," that we mentioned recently. "),(0,i.kt)("p",null,"Take a moment to visit the following link to see a list of all object types that represent specific events:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Event#interfaces_based_on_event"},"Object Types that are based on the ",(0,i.kt)("inlineCode",{parentName:"a"},"Event")," object."))),(0,i.kt)("p",null,"The process of an object like ",(0,i.kt)("inlineCode",{parentName:"p"},"SubmitEvent")," being based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," object is simply another way of describing inheritance. So, just like we saw in previous course sections where a very specific object type like ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLParagraphElement")," inherits from multiple other object types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HTMLElement")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Element")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Node")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EventTarget"))),(0,i.kt)("p",null,"This same process of inheritance happens for the ",(0,i.kt)("inlineCode",{parentName:"p"},"SubmitEvent")," object. In this case, ",(0,i.kt)("inlineCode",{parentName:"p"},"SubmitEvent")," inherits from one other object type, ",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),". We can confirm this by looking at the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/SubmitEvent"},(0,i.kt)("inlineCode",{parentName:"a"},"SubmitEvent")," object on MDN"),", which contains a graphic that indicates that ",(0,i.kt)("inlineCode",{parentName:"p"},"SubmitEvent")," inherits from ",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Object-Oriented-JavaScript-2020/submit-event-inheritance.png",alt:"This image shows the reference page on MDN for `SubmitEvent` and the graphic that demonstrates how `SubmitEvent` inherits functionality from the `Event` object."})," "),(0,i.kt)("h3",{id:"eventtarget-versus-event"},(0,i.kt)("inlineCode",{parentName:"h3"},"EventTarget")," versus ",(0,i.kt)("inlineCode",{parentName:"h3"},"Event")),(0,i.kt)("p",null,"It's easy to confuse ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"EventTarget"),", so here's a quick clarification:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"Event")," object (and any object types that inherit from ",(0,i.kt)("inlineCode",{parentName:"li"},"Event"),") represents an event that takes place in the DOM."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"EventTarget")," object represents an object that can be the target of an event that we can call event listener methods on. The targets we've worked with are ",(0,i.kt)("inlineCode",{parentName:"li"},"window"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"document"),", and HTML element objects.")),(0,i.kt)("h3",{id:"exploring-events-by-logging-them-to-the-console"},"Exploring Events by Logging Them to the Console"),(0,i.kt)("p",null,"Other than using MDN documentation to explore event object types and their properties, there are a few tools we can use to explore events. The first one involves using a Chrome DevTools utility function to log all events that happen on an object type. Logging events in this way is helpful to visualize how often webpages are firing events, whether or not we have an event handler set up to react to them. Take note that this utility function will not work in other browser, though other browsers' DevTools may have an equivalent utility function."),(0,i.kt)("p",null,"Open your DevTools console and enter in the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"> monitorEvents(window);\n")),(0,i.kt)("p",null,"Then, move your mouse around the webpage. As you do this you'll see an explosion of logged messages to the console. All of these messages represent the events that are fired on the webpage as you move your mouse around the webpage! It's... ",(0,i.kt)("em",{parentName:"p"},"a lot!")," But it also shows us the specific object types for each event, as well as the properties that are populated in those objects. "),(0,i.kt)("p",null,"Take a moment to explore a few of these objects in your own DevTools console."),(0,i.kt)("p",null,"To end this barrage of logged messages, enter this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"> unmonitorEvents(window);\n")),(0,i.kt)("p",null,"We can get more specific in the events that we're logging by passing in different arguments, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'> monitorEvents(document, "click");\n')),(0,i.kt)("p",null,"We could also get a specific HTML element object from the DOM (with ",(0,i.kt)("inlineCode",{parentName:"p"},"document.querySelector()")," or another similar ",(0,i.kt)("inlineCode",{parentName:"p"},"document")," method) and pass that object into the ",(0,i.kt)("inlineCode",{parentName:"p"},"monitorEvents()")," DevTools utility function. "),(0,i.kt)("p",null,"As mentioned earlier, this utility function is primarily helpful to visualize the events that happen in our browser's webpage, including the event object types and the properties they contain. "),(0,i.kt)("p",null,"To learn more about the ",(0,i.kt)("inlineCode",{parentName:"p"},"monitorEvents()")," DevTools utility function, ",(0,i.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/devtools/console/utilities/#monitorEvents-function"},"visit this link"),"."),(0,i.kt)("h3",{id:"exploring-events-with-breakpoints"},"Exploring Events with Breakpoints"),(0,i.kt)("p",null,"A more targeted approach to exploring the events that we are handling in our projects is to use DevTools to explore the event type and its properties. Let's look at an example. "),(0,i.kt)("p",null,"In the following image, I've added a breakpoint after the line ",(0,i.kt)("inlineCode",{parentName:"p"},"event.preventDefault()")," in the Address Book's UI function ",(0,i.kt)("inlineCode",{parentName:"p"},"handleFormSubmission()"),". When I hover over ",(0,i.kt)("inlineCode",{parentName:"p"},"event")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"event.preventDefault()"),", a pop-up box appears with all of the information about the event:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The specific object type, ",(0,i.kt)("inlineCode",{parentName:"li"},"SubmitEvent"),", highlighted in the red square"),(0,i.kt)("li",{parentName:"ul"},"Its properties, including:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"currentTarget"),": this is pointing to the ",(0,i.kt)("inlineCode",{parentName:"li"},"<form>")," element that we attached the 'submit' event listener to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"defaultPrevented"),": this is set to true, indicating that we've called ",(0,i.kt)("inlineCode",{parentName:"li"},"event.preventDefault()")," in our code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"target"),": this is pointing to the ",(0,i.kt)("inlineCode",{parentName:"li"},"<form>")," element, because that is the element that the submit event originated from.")))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Object-Oriented-JavaScript-2020/submit-event-inspected-in-devtools.png",alt:"This image shows the _Sources_ tab opened with a breakpoint added to the Address Book's scripts.js file right below the code `event.preventDefault()` in the `handleFormSubmission()` UI function."})),(0,i.kt)("p",null,"This is by far the easiest way to inspect an event in the context of our code. And since we're using a breakpoint to pause our code mid-execution, this means we can also switch to the DevTools console and explore the variables in scope."),(0,i.kt)("p",null,"The following image above shows a few explorations of the ",(0,i.kt)("inlineCode",{parentName:"p"},"event.target")," property."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Object-Oriented-JavaScript-2020/exporing-event-in-console-when-paused-in-debugger.png",alt:"This shows the results of inputting"})),(0,i.kt)("p",null,"This demonstrates a few things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event.target")," represents the actual HTML element object that the event occurred on. In this case, the ",(0,i.kt)("inlineCode",{parentName:"li"},"<form>")," element."),(0,i.kt)("li",{parentName:"ul"},"Because ",(0,i.kt)("inlineCode",{parentName:"li"},"event.target")," represents the ",(0,i.kt)("inlineCode",{parentName:"li"},"HTMLFormElement"),", we can access the same properties we've learned to access before, like the ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," property with ",(0,i.kt)("inlineCode",{parentName:"li"},"event.target.id;"),". As a few more examples:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"We could access inline styles with ",(0,i.kt)("inlineCode",{parentName:"li"},"event.target.style"),"."),(0,i.kt)("li",{parentName:"ul"},"We could add a new attribute with ",(0,i.kt)("inlineCode",{parentName:"li"},'event.target.setAttribute("class", "test")'),". "))),(0,i.kt)("li",{parentName:"ul"},"We can also access the form inputs via ",(0,i.kt)("inlineCode",{parentName:"li"},"event.target"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"With ",(0,i.kt)("inlineCode",{parentName:"li"},"event.target[0]")," we're accessing the first input element, and then with ",(0,i.kt)("inlineCode",{parentName:"li"},"event.target[0].value"),", we're accessing the first input's value."),(0,i.kt)("li",{parentName:"ul"},"Because we've included a ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," attribute on each input, we can access each input object via the ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," attribute. For example, we've access the value of the first input element with ",(0,i.kt)("inlineCode",{parentName:"li"},'event.target["new-first-name"].value'))))),(0,i.kt)("p",null,"One thing to note is that the structure and contents of ",(0,i.kt)("inlineCode",{parentName:"p"},"event.target")," will vary. The examples we've covered are just a few examples of the information you can access via ",(0,i.kt)("inlineCode",{parentName:"p"},"event.target"),". When writing your own event handlers, the best recommendation we have is to explore the ",(0,i.kt)("inlineCode",{parentName:"p"},"event")," object in the DevTools console to see if you can use any of the information. "),(0,i.kt)("p",null,"For event delegation, the ",(0,i.kt)("inlineCode",{parentName:"p"},"event.target")," property is invaluable, because it lets us access the element that the event occurred on. This allows us to write code using the data of elements that do not yet exist in the DOM. "),(0,i.kt)("h2",{id:"completing-displaycontactdetails"},"Completing ",(0,i.kt)("inlineCode",{parentName:"h2"},"displayContactDetails()")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Alright, we've covered the ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," object, MDN documentation, and tools to explore event objects. Now it's time to complete our ",(0,i.kt)("inlineCode",{parentName:"p"},"displayContactDetails()")," function. This function's purpose is to print the details of a contact object in our HTML. Let's take a look at the HTML we need to target:"),(0,i.kt)("div",{class:"filename"},"index.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div id="contact-details" class="hidden">\n  <h2>Contact Details:</h2>\n  <p>First Name: <span class="first-name"></span></p>\n  <p>Last Name: <span class="last-name"></span></p>\n  <p>Phone Number: <span class="phone-number"></span></p>\n</div>\n')),(0,i.kt)("p",null,"Take note that we don't see this HTML in the DOM because of this code in our CSS:"),(0,i.kt)("div",{class:"filename"},"css/styles.css"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"#contact-details {\n  display: none;\n}\n")),(0,i.kt)("p",null,"Given this, we'll need to make sure that ",(0,i.kt)("inlineCode",{parentName:"p"},"displayContactDetails()")," does a few things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Finds the correct ",(0,i.kt)("inlineCode",{parentName:"li"},"Contact")," object."),(0,i.kt)("li",{parentName:"ul"},"Prints the details of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Contact")," object in the DOM."),(0,i.kt)("li",{parentName:"ul"},"Shows the ",(0,i.kt)("inlineCode",{parentName:"li"},'"#contact-details"')," div. ")),(0,i.kt)("p",null,"Here's the updated ",(0,i.kt)("inlineCode",{parentName:"p"},"displayContactDetails()")," function:"),(0,i.kt)("div",{class:"filename"},"js/scripts.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'...\n\nfunction displayContactDetails(event) {\n  const contact = addressBook.findContact(event.target.id);\n  document.querySelector(".first-name").innerText = contact.firstName;\n  document.querySelector(".last-name").innerText = contact.lastName;\n  document.querySelector(".phone-number").innerText = contact.phoneNumber;\n  document.querySelector("div#contact-details").removeAttribute("class");\n}\n\n...\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We start by utilizing our ",(0,i.kt)("inlineCode",{parentName:"p"},"AddressBook.prototype.findContact()")," method. Remember that we are cheating a bit and that ",(0,i.kt)("inlineCode",{parentName:"p"},"addressBook")," is global in scope, which is why we can use it here.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We access the spans in the DOM to print the contact's first name, last name, and phone number.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Then, we show the hidden ",(0,i.kt)("inlineCode",{parentName:"p"},"#contact-details")," div with the contact's full information. "))),(0,i.kt)("p",null,"Now our application will be working correctly again. We can click on an ",(0,i.kt)("inlineCode",{parentName:"p"},"<li>")," and see that contact's detail info appear in the DOM!"),(0,i.kt)("h3",{id:"resources-to-explore-on-mdn"},"Resources to Explore on MDN"),(0,i.kt)("p",null,"Note we have not covered all topics related to event bubbling: there's also a capturing phase and a target phase. Those topics are not vital to understand now, so we're leaving them to further exploration. To learn more, we recommend the following resources on MDN:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture"},"Event Bubbling and Capture")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation"},"Event Delegation"))),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/oop-address-book-v2/tree/7_event_delegation"},(0,i.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for the Address Book"))))}h.isMDXComponent=!0}}]);