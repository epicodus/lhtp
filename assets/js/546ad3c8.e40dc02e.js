"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[81275],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),m=o,k=p["".concat(l,".").concat(m)]||p[m]||h[m]||i;return a?n.createElement(k,r(r({ref:t},c),{},{components:a})):n.createElement(k,r({ref:t},c))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},30676:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const i={title:"9. Address Book: Objects Within Objects",id:"address_book_objects_within_objects",slug:"address_book_objects_within_objects",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3_object-oriented-javascript/0i_address_book_objects_within_objects.md"},r=void 0,s={unversionedId:"intermediate_javascript_part_time_evening/object-oriented-javascript/address_book_objects_within_objects",id:"intermediate_javascript_part_time_evening/object-oriented-javascript/address_book_objects_within_objects",title:"9. Address Book: Objects Within Objects",description:"In a real world application, we'd save our address book's Contacts in a database. However, we aren't working with databases yet. Instead, we'll create a mock database (a fake database) and store its data inside a global variable.",source:"@site/docs/intermediate_javascript_part_time_evening/3_object-oriented-javascript/0i_address_book_objects_within_objects.md",sourceDirName:"intermediate_javascript_part_time_evening/3_object-oriented-javascript",slug:"/intermediate_javascript_part_time_evening/object-oriented-javascript/address_book_objects_within_objects",permalink:"/lhtp/intermediate_javascript_part_time_evening/object-oriented-javascript/address_book_objects_within_objects",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"9. Address Book: Objects Within Objects",id:"address_book_objects_within_objects",slug:"address_book_objects_within_objects",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3_object-oriented-javascript/0i_address_book_objects_within_objects.md"},sidebar:"intermediate_javascript_part_time_evening",previous:{title:"8. Objects Within Objects",permalink:"/lhtp/intermediate_javascript_part_time_evening/object-oriented-javascript/objects_within_objects"},next:{title:"10. Address Book: Unique IDs",permalink:"/lhtp/intermediate_javascript_part_time_evening/object-oriented-javascript/address_book_unique_ids"}},l={},d=[{value:"<code>AddressBook</code> Constructor",id:"addressbook-constructor",level:2},{value:"Adding a Method to the <code>AddressBook</code> Prototype",id:"adding-a-method-to-the-addressbook-prototype",level:2},{value:"Adding <code>Contact</code>s to the <code>AddressBook</code>",id:"adding-contacts-to-the-addressbook",level:3},{value:"Viewing <code>Contact</code>s in the <code>AddressBook</code>",id:"viewing-contacts-in-the-addressbook",level:3}],c={toc:d},p="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In a real world application, we'd save our address book's ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact"),"s in a database. However, we aren't working with databases yet. Instead, we'll create a mock database (a fake database) and store its data inside a global variable."),(0,o.kt)("p",null,"As we discussed in ",(0,o.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/javascript-and-web-browsers/variable-scope"},"Variable Scope"),", we want to avoid global variables wherever possible. So why are we going to use one here?"),(0,o.kt)("p",null,"Well, one of the biggest problems with global variables is that they never fall out of scope \u2014 and their values persist throughout an application. Generally, this is a recipe for bugs. However, we ",(0,o.kt)("em",{parentName:"p"},"want")," the values in a database to persist and be available all throughout an application. What is the point of a database if we can't retrieve data from it? That's why we're using a global variable here \u2014 to better imitate what a database actually does."),(0,o.kt)("p",null,"Take note that a mock database wouldn't actually be useful in the real world so we wouldn't use a global variable like this in a real world application, either. At this point, you might wonder why we don't just jump into using databases then. Well, they're pretty complicated! For now, we will stay focused on core JavaScript concepts. It will still be a while before we start working with actual databases."),(0,o.kt)("p",null,"Also, just because we are using a global variable to mock a database doesn't mean you should start adding global variables throughout your code. For the next several sections, here is a guideline: if your variable is meant to represent a potential database, a global variable is fine. Otherwise, avoid them if possible. Most of the projects we do throughout Intermediate JavaScript will ",(0,o.kt)("em",{parentName:"p"},"not")," need to mock a database, so think very carefully about whether or not you need to add this functionality as you build your projects."),(0,o.kt)("h2",{id:"addressbook-constructor"},(0,o.kt)("inlineCode",{parentName:"h2"},"AddressBook")," Constructor"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Much like our ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact"),"s, our ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook")," will be a JavaScript object. But instead of containing properties like ",(0,o.kt)("inlineCode",{parentName:"p"},"firstName")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"lastName"),", it will contain a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," objects, similar to how the previous lesson depicted objects being saved within other objects."),(0,o.kt)("p",null,"To do this we'll need an ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook")," constructor. Let's add the following new constructor to the top of ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts.js"),":"),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'function AddressBook() {\n  this.contacts = {};\n}\n\nfunction Contact(firstName, lastName, phoneNumber) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n  this.phoneNumber = phoneNumber;\n}\n\nContact.prototype.fullName = function() {\n  return this.firstName + " " + this.lastName;\n};\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook")," objects contain a single property: An empty object called ",(0,o.kt)("inlineCode",{parentName:"p"},"contacts"),". This is where we'll store entries in our address book. Each entry will be a ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," object. As we can see, we'll be storing objects within an object \u2014 all of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," objects will be stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"contacts")," property, an object within the ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook")," object. "),(0,o.kt)("p",null,"If we wanted to, we could build out our application to have many instances of ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook"),"s, each with their own ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact"),"s. We could also include an ",(0,o.kt)("inlineCode",{parentName:"p"},"owner")," property that gives information about the owner of the ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook"),". Or, we could add a ",(0,o.kt)("inlineCode",{parentName:"p"},"lastModified")," timestamp that tells us when the ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook")," was last modified. However, we will keep this simple with just one ",(0,o.kt)("inlineCode",{parentName:"p"},"contacts")," property and one instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook"),"."),(0,o.kt)("p",null,"We'll also add comments showing where ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," logic will go in ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts.js"),". This will make it easier to follow along with the lessons."),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// Business Logic for AddressBook ---------\nfunction AddressBook() {\n  this.contacts = {};\n}\n\n// Business Logic for Contacts ---------\nfunction Contact(firstName, lastName, phoneNumber) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n  this.phoneNumber = phoneNumber;\n}\n\nContact.prototype.fullName = function() {\n  return this.firstName + " " + this.lastName;\n};\n')),(0,o.kt)("h2",{id:"adding-a-method-to-the-addressbook-prototype"},"Adding a Method to the ",(0,o.kt)("inlineCode",{parentName:"h2"},"AddressBook")," Prototype"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook"),"s can only do one thing right now: store a list of contacts in key-value pairs. Let's define a few prototypes for our ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook")," objects to give them more functionality."),(0,o.kt)("h3",{id:"adding-contacts-to-the-addressbook"},"Adding ",(0,o.kt)("inlineCode",{parentName:"h3"},"Contact"),"s to the ",(0,o.kt)("inlineCode",{parentName:"h3"},"AddressBook")),(0,o.kt)("p",null,"We'll create a prototype method to add new ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact"),"s to an ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook"),". This will go right below the ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook")," constructor:"),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// Business Logic for AddressBook ---------\nfunction AddressBook() {\n  this.contacts = {};\n}\n\nAddressBook.prototype.addContact = function(contact) {\n  this.contacts[contact.firstName] = contact;\n};\n\n// Business Logic for Contacts ---------\nfunction Contact(firstName, lastName, phoneNumber) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n  this.phoneNumber = phoneNumber;\n}\n\nContact.prototype.fullName = function() {\n  return this.firstName + " " + this.lastName;\n};\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Our new ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook.prototype.addContact()")," method takes a ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," object as an argument. We can tell because the parameter is named ",(0,o.kt)("inlineCode",{parentName:"p"},"contact"),", which indicates that the method expects a ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," object.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"this.contacts")," is the address book property where we're storing all of our ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," objects. ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," represents the instance of the address book, so when we write ",(0,o.kt)("inlineCode",{parentName:"p"},"this.contacts"),", it means we're accessing the ",(0,o.kt)("inlineCode",{parentName:"p"},"contacts")," property of the address book instance. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"With ",(0,o.kt)("inlineCode",{parentName:"p"},"this.contacts[contact.firstName] = contact;"),",  we are creating a new key in the address book's ",(0,o.kt)("inlineCode",{parentName:"p"},"contacts")," property, ",(0,o.kt)("em",{parentName:"p"},"and")," assigning it a value: "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The key ",(0,o.kt)("inlineCode",{parentName:"li"},"contact.firstName")," will be set to the contact's first name. Here we need to use bracket notation to create the key, because ",(0,o.kt)("inlineCode",{parentName:"li"},"contact.firstName")," is a variable. "),(0,o.kt)("li",{parentName:"ul"},"The value we assign to the new key with ",(0,o.kt)("inlineCode",{parentName:"li"},"= contact;")," is the ",(0,o.kt)("inlineCode",{parentName:"li"},"Contact")," object that we pass into the method. "),(0,o.kt)("li",{parentName:"ul"},"Generally, a contact in a real database will have a unique ID to locate it. Soon, we'll refactor our code to do this. For now, we're using the ",(0,o.kt)("inlineCode",{parentName:"li"},"Contact")," object's ",(0,o.kt)("inlineCode",{parentName:"li"},"firstName")," property as an ID. ")))),(0,o.kt)("p",null,"That's all it takes for us to add a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," object to our ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook"),"!"),(0,o.kt)("p",null,"Let's try it out. We can copy/paste the contents of ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts.js")," into the DevTools console, and enter each of the following five lines:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'> let addressBook = new AddressBook();\n> let contact = new Contact("Ada", "Lovelace", "503-555-0100");\n> let contact2 = new Contact("Grace", "Hopper", "503-555-0199");\n> addressBook.addContact(contact);\n> addressBook.addContact(contact2);\n')),(0,o.kt)("p",null,"Let's walk through what each of these lines is doing:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"We create an ",(0,o.kt)("inlineCode",{parentName:"li"},"AddressBook")," object."),(0,o.kt)("li",{parentName:"ol"},"We create a new ",(0,o.kt)("inlineCode",{parentName:"li"},"Contact")," object with a ",(0,o.kt)("inlineCode",{parentName:"li"},"firstName")," of ",(0,o.kt)("inlineCode",{parentName:"li"},'"Ada"'),", saved to the variable name ",(0,o.kt)("inlineCode",{parentName:"li"},"contact"),"."),(0,o.kt)("li",{parentName:"ol"},"We create another new ",(0,o.kt)("inlineCode",{parentName:"li"},"Contact")," object, this time with a ",(0,o.kt)("inlineCode",{parentName:"li"},"firstName")," of ",(0,o.kt)("inlineCode",{parentName:"li"},'"Grace"'),", saved to the variable name ",(0,o.kt)("inlineCode",{parentName:"li"},"contact2"),"."),(0,o.kt)("li",{parentName:"ol"},"We add the first ",(0,o.kt)("inlineCode",{parentName:"li"},"Contact")," object to our ",(0,o.kt)("inlineCode",{parentName:"li"},"AddressBook"),", using our new ",(0,o.kt)("inlineCode",{parentName:"li"},"AddressBook.prototype.addContact()")," method."),(0,o.kt)("li",{parentName:"ol"},"We add the second ",(0,o.kt)("inlineCode",{parentName:"li"},"Contact")," object to the ",(0,o.kt)("inlineCode",{parentName:"li"},"AddressBook")," using the same new method.  ")),(0,o.kt)("h3",{id:"viewing-contacts-in-the-addressbook"},"Viewing ",(0,o.kt)("inlineCode",{parentName:"h3"},"Contact"),"s in the ",(0,o.kt)("inlineCode",{parentName:"h3"},"AddressBook")),(0,o.kt)("p",null,"If we then run the following in the console, we can see the contents of our ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"> addressBook;\nAddressBook\xa0{contacts: {\u2026}}\n")),(0,o.kt)("p",null,"We can see that the ",(0,o.kt)("inlineCode",{parentName:"p"},"addressBook")," is an object that contains another object called ",(0,o.kt)("inlineCode",{parentName:"p"},"contacts"),". To access these contacts, we can do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> addressBook.contacts;\n{Ada: Contact, Grace: Contact}\n")),(0,o.kt)("p",null,"Both of our contacts are there! But how do we access them? Well, each object has a key. The first one has a key of ",(0,o.kt)("inlineCode",{parentName:"p"},"Ada")," while the second has a key of ",(0,o.kt)("inlineCode",{parentName:"p"},"Grace"),". So we can access them like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> addressBook.contacts["Ada"];\nContact\xa0{firstName: "Ada", lastName: "Lovelace", phoneNumber: "503-555-0100"}\n')),(0,o.kt)("p",null,"We can do the same for ",(0,o.kt)("inlineCode",{parentName:"p"},'addressBook.contacts["Grace"]'),"."),(0,o.kt)("p",null,"Note that we ",(0,o.kt)("strong",{parentName:"p"},"cannot")," do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> addressBook.contacts[Ada];\n")),(0,o.kt)("p",null,"We'll get the following error if we do:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Uncaught ReferenceError: Ada is not defined\n")),(0,o.kt)("p",null,"This is because JavaScript is reading this as a variable, not a string \u2014 and we haven't defined an ",(0,o.kt)("inlineCode",{parentName:"p"},"Ada")," variable. Instead, if the key is a string, we need to write it as a string."),(0,o.kt)("p",null,"If we wanted to get even more specific information about Ada \u2014 for instance, her phone number \u2014 we can do so like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> addressBook.contacts["Ada"].phoneNumber;\n"503-555-0100"\n')),(0,o.kt)("p",null,"We just need to identify the property we want the value of \u2014 in this case, it's the ",(0,o.kt)("inlineCode",{parentName:"p"},"phoneNumber")," property. Sometimes objects can be very deeply nested. No matter how deeply nested an object or property is, we can keep drilling down further until we retrieve it. We will cover this further in a future lesson."),(0,o.kt)("p",null,"In the next lesson, we'll add a property to help us assign IDs to each contact."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/oop-address-book-v2/tree/2_objects_within_objects"},(0,o.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for the Address Book"))))}h.isMDXComponent=!0}}]);