"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[82982],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7896),o=(n(2784),n(30876));const i={title:"Address Book: User Interface",id:"address-book-user-interface",slug:"address-book-user-interface",hide_table_of_contents:!0,sidebar_position:17,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1b_address_book_user_interface.md"},r=void 0,s={unversionedId:"intermediate-javascript/object-oriented-javascript/address-book-user-interface",id:"intermediate-javascript/object-oriented-javascript/address-book-user-interface",title:"Address Book: User Interface",description:"After following along with the weekend homework, we have a simple address book application that can create contacts and add, delete, and find them in an address book. Now let's start building the UI!",source:"@site/docs/intermediate-javascript/3_object-oriented-javascript/1b-address-book-user-interface.md",sourceDirName:"intermediate-javascript/3_object-oriented-javascript",slug:"/intermediate-javascript/object-oriented-javascript/address-book-user-interface",permalink:"/intermediate-javascript/object-oriented-javascript/address-book-user-interface",draft:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"Address Book: User Interface",id:"address-book-user-interface",slug:"address-book-user-interface",hide_table_of_contents:!0,sidebar_position:17,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1b_address_book_user_interface.md"},sidebar:"intermediate-javascript",previous:{title:"Address Book, Places You've Been, To Do",permalink:"/intermediate-javascript/object-oriented-javascript/address-book-places-you've-been-to-do"},next:{title:"Looping Through Objects and Prototypal Inheritance",permalink:"/intermediate-javascript/object-oriented-javascript/looping-through-objects-and-prototypal-inheritance"}},l={},d=[{value:"Address Book HTML",id:"address-book-html",level:2},{value:"CSS",id:"css",level:2},{value:"JavaScript",id:"javascript",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After following along with the weekend homework, we have a simple address book application that can create contacts and add, delete, and find them in an address book. Now let's start building the UI!"),(0,o.kt)("p",null,"In the process, we'll experiment with adding dynamic elements to the DOM and learn about new concepts like ",(0,o.kt)("strong",{parentName:"p"},"event bubbling")," and ",(0,o.kt)("strong",{parentName:"p"},"event delegation"),". These are more advanced concepts that you won't be expected to apply to this section's independent project. However, you are encouraged to experiment with them, as they'll make you a better coder in the long run."),(0,o.kt)("h2",{id:"address-book-html"},"Address Book HTML"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Let's get the basics of our UI up and running. We'll create an ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," file in the top-level of our directory with the following HTML boilerplate:"),(0,o.kt)("div",{class:"filename"},"index.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <title></title>\n</head>\n<body>\n\n</body>\n</html>\n')),(0,o.kt)("p",null,"Next let's fill in each section. First we'll add links to our ",(0,o.kt)("inlineCode",{parentName:"p"},"<head>")," section:"),(0,o.kt)("div",{class:"filename"},"index.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <link \n    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" \n    rel="stylesheet" \n    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" \n    crossorigin="anonymous">\n  <script src="js/scripts.js"><\/script>\n  <title>Address Book</title>\n</head>\n<body>\n\n</body>\n</html>\n')),(0,o.kt)("p",null,"We've added the following, which should all be review:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A link to the Bootstrap CDN in order to use Bootstrap styles in our project. ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Remember that we don't have to specifically implement Bootstrap's classes or elements to benefit from Bootstrap \u2014 just including Bootstrap's CSS will improve our project's style. "),(0,o.kt)("li",{parentName:"ul"},"Also, remember that you'll need to include a separate CDN in a ",(0,o.kt)("inlineCode",{parentName:"li"},"<script>")," tag for Bootstrap's JS if you want to implement any Bootstrap elements that are interactive. We won't include the script in the Address Book project, but you are welcome to do so in the projects you build in this course section."))),(0,o.kt)("li",{parentName:"ul"},"A link to our local ",(0,o.kt)("inlineCode",{parentName:"li"},"scripts.js")," file containing our JavaScript Logic."),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"<title>")," for our page.")),(0,o.kt)("p",null,"We'll add a CSS style sheet later when we're ready to use it. "),(0,o.kt)("p",null,"Now let's focus on the ",(0,o.kt)("inlineCode",{parentName:"p"},"<body>"),". We'll keep it simple before later adding Bootstrap classes for styling and organization:"),(0,o.kt)("div",{class:"filename"},"index.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'...\n\n<body>\n  <h1>Address Book</h1>\n  <h2>Add a Contact:</h2>\n  <form id="new-contact">\n    <label for="new-first-name">First Name</label>\n    <input type="text" id="new-first-name" name="new-first-name">\n    <label for="new-last-name">Last Name</label>\n    <input type="text" id="new-last-name" name="new-last-name">\n    <label for="new-phone-number">Phone Number</label>\n    <input type="text" id="new-phone-number" name="new-phone-number">\n    <button type="submit">Add</button>\n  </form>\n\n  <h2>Contacts:</h2>\n  <div id="contacts">\n  </div>\n\n  <div id="contact-details" class="hidden">\n    <p>First Name: <span id="first-name"></span></p>\n    <p>Last Name: <span id="last-name"></span></p>\n    <p>Phone Number: <span id="phone-number"></span></p>\n  </div>\n</body>\n\n...\n')),(0,o.kt)("p",null,"Here we have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A form to add new contacts, including fields for first names, last names, and phone numbers. Each field also has a corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"<label>"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A ",(0,o.kt)("inlineCode",{parentName:"p"},"<div>")," element with an id of ",(0,o.kt)("inlineCode",{parentName:"p"},"contacts"),", where we will add a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact"),"s.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A ",(0,o.kt)("inlineCode",{parentName:"p"},"contact-details")," div that will eventually display the details for a specific contact when selected from the list."))),(0,o.kt)("h2",{id:"css"},"CSS"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Next let's add CSS. We'll create a ",(0,o.kt)("inlineCode",{parentName:"p"},"css")," subdirectory with a ",(0,o.kt)("inlineCode",{parentName:"p"},"styles.css")," file inside containing a single rule:"),(0,o.kt)("div",{class:"filename"},"css/styles.css"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".hidden {\n  display: none;\n}\n")),(0,o.kt)("p",null,"This ensures the ",(0,o.kt)("inlineCode",{parentName:"p"},"contact-details")," div is hidden until we display a contact's details. "),(0,o.kt)("h2",{id:"javascript"},"JavaScript"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"After following along with the past few lessons we should already have a ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts.js")," file in a ",(0,o.kt)("inlineCode",{parentName:"p"},"js")," directory that looks like this:"),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// Business Logic for AddressBook ---------\nfunction AddressBook() {\n  this.contacts = {};\n  this.currentId = 0;\n}\n\nAddressBook.prototype.addContact = function(contact) {\n  contact.id = this.assignId();\n  this.contacts[contact.id] = contact;\n};\n\nAddressBook.prototype.assignId = function() {\n  this.currentId += 1;\n  return this.currentId;\n};\n\nAddressBook.prototype.findContact = function(id) {\n  if (this.contacts[id] !== undefined) {\n    return this.contacts[id];\n  }\n  return false;\n};\n\nAddressBook.prototype.deleteContact = function(id) {\n  if (this.contacts[id] === undefined) {\n    return false;\n  }\n  delete this.contacts[id];\n  return true;\n};\n\n// Business Logic for Contacts ---------\nfunction Contact(firstName, lastName, phoneNumber) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n  this.phoneNumber = phoneNumber;\n}\n\nContact.prototype.fullName = function() {\n  return this.firstName + " " + this.lastName;\n};\n')),(0,o.kt)("p",null,"Below this business logic we'll add a new section for user interface logic, denoted by another comment:"),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'...\n\n// User Interface Logic ---------\nlet addressBook = new AddressBook();\n\nfunction handleFormSubmission(event) {\n  event.preventDefault();\n  const inputtedFirstName = document.querySelector("input#new-first-name").value;\n  const inputtedLastName = document.querySelector("input#new-last-name").value;\n  const inputtedPhoneNumber = document.querySelector("input#new-phone-number").value;\n  let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);\n  addressBook.addContact(newContact);\n  console.log(addressBook.contacts);\n}\n\nwindow.addEventListener("load", function (){\n  document.querySelector("form#new-contact").addEventListener("submit", handleFormSubmission);\n});\n')),(0,o.kt)("p",null,"Let's walk through this new code:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook")," object named ",(0,o.kt)("inlineCode",{parentName:"p"},"addressBook"),". This is a global variable because it's declared at the 'top level' of our file. A quick reminder: while we generally want to avoid global variables, we've made an exception here to mimic a database.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"At the bottom of our scripts, we create an event listener for the ",(0,o.kt)("inlineCode",{parentName:"p"},"window"),"'s 'load' event. The callback function we pass into ",(0,o.kt)("inlineCode",{parentName:"p"},"window.addEventListener()")," will be called when our webpage has loaded all resources and is ready to go.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Within the ",(0,o.kt)("inlineCode",{parentName:"p"},"window"),"'s 'load' event listener we create an event listener for the form submission event. When the form is submitted the ",(0,o.kt)("inlineCode",{parentName:"p"},"handleFormSubmission()")," function will be called. Take note that the naming convention to prefix event handler functions with ",(0,o.kt)("inlineCode",{parentName:"p"},"handle")," is very common, but it's not required to follow. The baseline here is to always name your functions descriptively, so that anyone can immediately tell what the function's purpose is in the code.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We then define the function ",(0,o.kt)("inlineCode",{parentName:"p"},"handleFormSubmission()")," above where we call it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," 'load' event listener. In this function we:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Call ",(0,o.kt)("inlineCode",{parentName:"li"},"event.preventDefault()")," to prevent the refresh of the page."),(0,o.kt)("li",{parentName:"ul"},"Gather user-provided input from the form fields for first name, last name, and phone number, and assign them to the variables ",(0,o.kt)("inlineCode",{parentName:"li"},"inputtedFirstName"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"inputtedLastName"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"inputtedPhoneNumber"),"."),(0,o.kt)("li",{parentName:"ul"},"Create a new ",(0,o.kt)("inlineCode",{parentName:"li"},"Contact")," object, passing in this gathered information as arguments, and saving the new ",(0,o.kt)("inlineCode",{parentName:"li"},"Contact")," object in the variable ",(0,o.kt)("inlineCode",{parentName:"li"},"newContact"),"."),(0,o.kt)("li",{parentName:"ul"},"Add the ",(0,o.kt)("inlineCode",{parentName:"li"},"newContact")," to our ",(0,o.kt)("inlineCode",{parentName:"li"},"AddressBook")," using the ",(0,o.kt)("inlineCode",{parentName:"li"},"AddressBook.prototype.addContact()")," method."),(0,o.kt)("li",{parentName:"ul"},"Log the list of ",(0,o.kt)("inlineCode",{parentName:"li"},"Contacts")," in our ",(0,o.kt)("inlineCode",{parentName:"li"},"AddressBook")," to the console, to double-check that the new contact has been added. ")))),(0,o.kt)("p",null,"In the next lesson, we'll add logic for displaying contacts to the webpage."),(0,o.kt)("p",null,"The entire updated ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts.js")," file looks like this:"),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// Business Logic for AddressBook ---------\nfunction AddressBook() {\n  this.contacts = {};\n  this.currentId = 0;\n}\n\nAddressBook.prototype.addContact = function(contact) {\n  contact.id = this.assignId();\n  this.contacts[contact.id] = contact;\n};\n\nAddressBook.prototype.assignId = function() {\n  this.currentId += 1;\n  return this.currentId;\n};\n\nAddressBook.prototype.findContact = function(id) {\n  if (this.contacts[id] !== undefined) {\n    return this.contacts[id];\n  }\n  return false;\n};\n\nAddressBook.prototype.deleteContact = function(id) {\n  if (this.contacts[id] === undefined) {\n    return false;\n  }\n  delete this.contacts[id];\n  return true;\n};\n\n// Business Logic for Contacts ---------\nfunction Contact(firstName, lastName, phoneNumber) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n  this.phoneNumber = phoneNumber;\n}\n\nContact.prototype.fullName = function() {\n  return this.firstName + " " + this.lastName;\n};\n\n// User Interface Logic ---------\nlet addressBook = new AddressBook();\n\nfunction handleFormSubmission(event) {\n  event.preventDefault();\n  const inputtedFirstName = document.querySelector("input#new-first-name").value;\n  const inputtedLastName = document.querySelector("input#new-last-name").value;\n  const inputtedPhoneNumber = document.querySelector("input#new-phone-number").value;\n  let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);\n  addressBook.addContact(newContact);\n  console.log(addressBook.contacts);\n}\n\nwindow.addEventListener("load", function (){\n  document.querySelector("form#new-contact").addEventListener("submit", handleFormSubmission);\n});\n')),(0,o.kt)("p",null,"We can now launch our ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," page in the browser, fill out our form several times, and see a growing list of ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact"),"s logged in the console! The next step will be to actually display our contacts in the DOM. In order to do that, though, we first need to learn how to loop through object properties."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/oop-address-book-v2/tree/5_address_book_user_interface"},(0,o.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for the Address Book"))))}u.isMDXComponent=!0}}]);