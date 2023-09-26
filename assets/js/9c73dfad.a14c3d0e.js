"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[37886],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[p]="string"==typeof e?e:o,s[1]=r;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const i={title:"Address Book: Adding Interactivity",id:"address-book-adding-interactivity",slug:"address-book-adding-interactivity",hide_table_of_contents:!0,sidebar_position:19,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1d_address_book_adding_interactivity.md"},s=void 0,r={unversionedId:"intermediate-javascript-part-time/object-oriented-javascript/address-book-adding-interactivity",id:"intermediate-javascript-part-time/object-oriented-javascript/address-book-adding-interactivity",title:"Address Book: Adding Interactivity",description:"Now that we know how to loop through an object's keys (properties), let's update our user interface code so we can display all of the Contacts on our site.",source:"@site/docs/intermediate-javascript-part-time/3_object-oriented-javascript/1d-address-book-adding-interactivity.md",sourceDirName:"intermediate-javascript-part-time/3_object-oriented-javascript",slug:"/intermediate-javascript-part-time/object-oriented-javascript/address-book-adding-interactivity",permalink:"/intermediate-javascript-part-time/object-oriented-javascript/address-book-adding-interactivity",draft:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"Address Book: Adding Interactivity",id:"address-book-adding-interactivity",slug:"address-book-adding-interactivity",hide_table_of_contents:!0,sidebar_position:19,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1d_address_book_adding_interactivity.md"},sidebar:"intermediate-javascript-part-time",previous:{title:"Looping Through Objects and Prototypal Inheritance",permalink:"/intermediate-javascript-part-time/object-oriented-javascript/looping-through-objects-and-prototypal-inheritance"},next:{title:"Journal #4 Discussion",permalink:"/intermediate-javascript-part-time/object-oriented-javascript/journal-4-discussion"}},c={},l=[{value:"Displaying Dynamic <code>Contact</code> Data",id:"displaying-dynamic-contact-data",level:2},{value:"A Best Practice: Limiting How Many Times We Update the DOM",id:"a-best-practice-limiting-how-many-times-we-update-the-dom",level:3},{value:"Calling the <code>listContacts()</code> Function",id:"calling-the-listcontacts-function",level:3},{value:"Best Practices Review",id:"best-practices-review",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now that we know how to loop through an object's keys (properties), let's update our user interface code so we can display all of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact"),"s on our site."),(0,o.kt)("h2",{id:"displaying-dynamic-contact-data"},"Displaying Dynamic ",(0,o.kt)("inlineCode",{parentName:"h2"},"Contact")," Data"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We'll start by writing an empty ",(0,o.kt)("inlineCode",{parentName:"p"},"listContacts()")," function below our global variable but above our ",(0,o.kt)("inlineCode",{parentName:"p"},"handleFormSubmission()")," function:"),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'...\n\n// User Interface Logic ---------\nlet addressBook = new AddressBook();\n\nfunction listContacts(addressBookToDisplay) {\n\n}\n\nfunction handleFormSubmission(event) {\n  event.preventDefault();\n  const inputtedFirstName = document.querySelector("input#new-first-name").value;\n  const inputtedLastName = document.querySelector("input#new-last-name").value;\n  const inputtedPhoneNumber = document.querySelector("input#new-phone-number").value;\n  let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);\n  addressBook.addContact(newContact);\n  console.log(addressBook);\n}\n\nwindow.addEventListener("load", function (){\n  document.querySelector("form#new-contact").addEventListener("submit", handleFormSubmission);\n});\n')),(0,o.kt)("p",null,"As the function name states, this method will handle listing our contacts on the webpage. It takes an ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook")," object as an argument. Also notice that we're creating a new function to handle displaying contacts in the DOM instead of adding onto our existing functions. This is a best practice. By separating our code into different functions distinct purposes, our code is cleaner, easier to read, and easier to debug and refactor. "),(0,o.kt)("p",null,"Now let's actually write the code that goes in this method. We'll apply a new best practice along the way:"),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'...\n\nfunction listContacts(addressBookToDisplay) {\n  let contactsDiv = document.querySelector("div#contacts");\n  contactsDiv.innerText =  null;\n  const ul = document.createElement("ul");\n  Object.keys(addressBookToDisplay.contacts).forEach(function(key) {\n    const contact = addressBookToDisplay.findContact(key);\n    const li = document.createElement("li");\n    li.append(contact.fullName());\n    li.setAttribute("id", contact.id);\n    ul.append(li);\n  });\n  contactsDiv.append(ul);\n}\n\n...\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"First we save the div that will contain our contacts in a variables called ",(0,o.kt)("inlineCode",{parentName:"p"},"contactsDiv"),". ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Next, we create clear the ",(0,o.kt)("inlineCode",{parentName:"p"},"innerText")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"contactsDiv"),". This clears our list of contacts ",(0,o.kt)("em",{parentName:"p"},"before")," we populate it. We need to do this because our code is set up to loop through all contacts and print each one, not just newly added contacts. So, this ensures that the user can submit the form to create a new contact over and over and no duplicate contacts will be listed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Next, we create an empty unordered list element. During each iteration of the loop, we'll add new list items to this unordered list.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Then, we use ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.keys()")," to get all the keys from ",(0,o.kt)("inlineCode",{parentName:"p"},"addressBookToDisplay.contacts")," so we can iterate through them. Remember, ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.keys()")," returns an array, so we can call any array method on the returned value.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Then, we use ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," to loop through the object keys. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In our loop, we do a few things to populate our unordered list with list items for each contact in our address book:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"We grab a ",(0,o.kt)("inlineCode",{parentName:"li"},"contact")," object by using our ",(0,o.kt)("inlineCode",{parentName:"li"},"AddressBook.prototype.findContact()")," method. "),(0,o.kt)("li",{parentName:"ul"},"We create a new list item element for the contact. The text of the list item is set to the contact's full name, and we add an ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," attribute that is equal to the contact's ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," property. "),(0,o.kt)("li",{parentName:"ul"},"Then we add the newly created list item to the unordered list."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"After the loop is finished and our unordered list is populated, we update the DOM by appending the unordered list to the ",(0,o.kt)("inlineCode",{parentName:"p"},"contactsDiv")," element. "))),(0,o.kt)("p",null,"Take note that it is very important that each contact list item is being created with an ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," attribute matching the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," property. We can later retrieve the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," attribute to use with our ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook.prototype.findContact()")," method to locate an entire ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," object. If we didn't attach this information to the list element, our application would have no way to easily get the ID."),(0,o.kt)("h3",{id:"a-best-practice-limiting-how-many-times-we-update-the-dom"},"A Best Practice: Limiting How Many Times We Update the DOM"),(0,o.kt)("p",null,"One thing to note in the design of the ",(0,o.kt)("inlineCode",{parentName:"p"},"listContacts()")," function is that we purposefully wrote our code to update the DOM just once. Querying the DOM takes time, whether we're simply accessing elements from it, or adding and removing elements. It's a best practice to design your code to access the DOM only when it's needed. "),(0,o.kt)("p",null,"To understand this, let's look at a different design for the ",(0,o.kt)("inlineCode",{parentName:"p"},"listContacts()")," function that is not as efficient as the one we currently have. In this alternate design, we don't use a div in our HTML to locate our contacts. Instead, we directly use a UL tag like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'...\n    <h2>Contacts:</h2>\n    <ul id="contacts">\n    </ul>\n...\n')),(0,o.kt)("p",null,"With this, we can update our ",(0,o.kt)("inlineCode",{parentName:"p"},"listContacts()")," function to look like the following. Notably this alternative version of ",(0,o.kt)("inlineCode",{parentName:"p"},"listContacts()")," takes fewer lines of code to achieve the same functionality:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function listContacts(addressBookToDisplay) {\n  let contactsList = document.querySelector("ul#contacts");\n  Object.keys(addressBookToDisplay.contacts).forEach(function(key) {\n    const contact = addressBookToDisplay.findContact(key);\n    const li = document.createElement("li");\n    li.append(contact.fullName());\n    li.setAttribute("id", contact.id);\n    contactsList.append(li);\n  });\n}\n')),(0,o.kt)("p",null,"So what's different? Well, in each iteration of the loop we still create a list item that's set to the name of the contact. We also continue to add the contact to the unordered list. But now that unordered list is located in the DOM and not an element that we've newly created in our scripts. This means that every iteration of the loop we are querying the DOM to add a new list item to it. "),(0,o.kt)("p",null,"Now let's say that our address book has one hundred contacts. This means that ",(0,o.kt)("inlineCode",{parentName:"p"},"listContacts()")," will query the DOM 100 times. That can really slow down the webpage, especially if there are many users on our address book application with lots of address books and contacts."),(0,o.kt)("p",null,"Now contrast that to the current setup of ",(0,o.kt)("inlineCode",{parentName:"p"},"listContacts()"),":"),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function listContacts(addressBookToDisplay) {\n  let contactsDiv = document.querySelector("div#contacts");\n  contactsDiv.innerText =  null;\n  const ul = document.createElement("ul");\n  Object.keys(addressBookToDisplay.contacts).forEach(function(key) {\n    const contact = addressBookToDisplay.findContact(key);\n    const li = document.createElement("li");\n    li.append(contact.fullName());\n    li.setAttribute("id", contact.id);\n    ul.append(li);\n  });\n  contactsDiv.append(ul);\n}\n')),(0,o.kt)("p",null,"There's more lines of code, but this code is way more efficient because we only update the DOM with our list of contacts once, after it is completely populated and ready to go. So whether we have one contact or 100 contacts, we still only update the DOM a single time with the populated list of contacts. "),(0,o.kt)("p",null,"Limiting how many times you query the DOM is a best practice that you should work towards. That said, don't worry about getting it right 100% of the time, just start considering this when you are designing your UI logic."),(0,o.kt)("h3",{id:"calling-the-listcontacts-function"},"Calling the ",(0,o.kt)("inlineCode",{parentName:"h3"},"listContacts()")," Function"),(0,o.kt)("p",null,"Let's call this new ",(0,o.kt)("inlineCode",{parentName:"p"},"listContacts")," function whenever we add a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact"),". All we have to do is remove our ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log()")," and replace it with this new function."),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'...\nfunction handleFormSubmission(event) {\n  event.preventDefault();\n  const inputtedFirstName = document.querySelector("input#new-first-name").value;\n  const inputtedLastName = document.querySelector("input#new-last-name").value;\n  const inputtedPhoneNumber = document.querySelector("input#new-phone-number").value;\n  let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);\n  addressBook.addContact(newContact);\n  listContacts(addressBook);  // <--- This is the new line!\n}\n\nwindow.addEventListener("load", function (){\n  document.querySelector("form#new-contact").addEventListener("submit", handleFormSubmission);\n});\n')),(0,o.kt)("p",null,"Now each time we add a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact"),", the page will update and add the contact's first and last names to the list of contacts. Try it out for yourself in the browser."),(0,o.kt)("p",null,"If we open Chrome Developer Tools and inspect elements on the page (right-click and then select ",(0,o.kt)("em",{parentName:"p"},"Inspect"),") we'll see each ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"<li>")," entry has a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," corresponding to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," object's automatically-assigned ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," property. The GIF below demonstrates this:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Object-Oriented-JavaScript-2020/dynamic-id-in-dom.gif",alt:"In the image, we can see that both of the contacts created have an ID."})),(0,o.kt)("p",null,"While this ID isn't doing anything yet, we'll soon be adding functionality so that we can click on a contact and get additional information based on its ID."),(0,o.kt)("p",null,"After following along, our updated ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts.js")," file looks like this:"),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// Business Logic for AddressBook ---------\nfunction AddressBook() {\n  this.contacts = {};\n  this.currentId = 0;\n}\n\nAddressBook.prototype.addContact = function(contact) {\n  contact.id = this.assignId();\n  this.contacts[contact.id] = contact;\n};\n\nAddressBook.prototype.assignId = function() {\n  this.currentId += 1;\n  return this.currentId;\n};\n\nAddressBook.prototype.findContact = function(id) {\n  if (this.contacts[id] !== undefined) {\n    return this.contacts[id];\n  }\n  return false;\n};\n\nAddressBook.prototype.deleteContact = function(id) {\n  if (this.contacts[id] === undefined) {\n    return false;\n  }\n  delete this.contacts[id];\n  return true;\n};\n\n// Business Logic for Contacts ---------\nfunction Contact(firstName, lastName, phoneNumber) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n  this.phoneNumber = phoneNumber;\n}\n\nContact.prototype.fullName = function() {\n  return this.firstName + " " + this.lastName;\n};\n\n// User Interface Logic ---------\nlet addressBook = new AddressBook();\n\nfunction listContacts(addressBookToDisplay) {\n  let contactsDiv = document.querySelector("div#contacts");\n  contactsDiv.innerText =  null;\n  const ul = document.createElement("ul");\n  Object.keys(addressBookToDisplay.contacts).forEach(function(key) {\n    const contact = addressBookToDisplay.findContact(key);\n    const li = document.createElement("li");\n    li.append(contact.fullName());\n    li.setAttribute("id", contact.id);\n    ul.append(li);\n  });\n  contactsDiv.append(ul);\n}\n\nfunction handleFormSubmission(event) {\n  event.preventDefault();\n  const inputtedFirstName = document.querySelector("input#new-first-name").value;\n  const inputtedLastName = document.querySelector("input#new-last-name").value;\n  const inputtedPhoneNumber = document.querySelector("input#new-phone-number").value;\n  let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);\n  addressBook.addContact(newContact);\n  listContacts(addressBook);\n}\n\nwindow.addEventListener("load", function (){\n  document.querySelector("form#new-contact").addEventListener("submit", handleFormSubmission);\n});\n')),(0,o.kt)("h2",{id:"best-practices-review"},"Best Practices Review"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Let's recap some of the best practices we just used:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"We created a ",(0,o.kt)("strong",{parentName:"p"},"separate UI function")," instead of adding the code to an existing function, like our ",(0,o.kt)("inlineCode",{parentName:"p"},"handleFormSubmission()")," function. This allows us to focus on writing one function at a time, and helps keep code modular.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"We create a list of all elements we want to append to the DOM, and add them ",(0,o.kt)("strong",{parentName:"p"},"all at once")," instead of one a time. This is faster and more efficient. "))),(0,o.kt)("p",null,"You aren't expected to master these best practices just yet, but you should consider them and practice integrating them in your code throughout the course. These kinds of details separate beginning coders from more experienced ones."),(0,o.kt)("p",null,"In addition to these best practices, we also applied our new knowledge of looping through object keys."),(0,o.kt)("p",null,"In the next lesson, we'll add UI functions that will allow us to display the detailed information of an individual contact onscreen."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/oop-address-book-v2/tree/6_adding_interactivity"},(0,o.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for the Address Book"))))}u.isMDXComponent=!0}}]);