"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[20917],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=a.createContext({}),d=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(r.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,h=p["".concat(r,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const i={title:"6. Address Book: Delete Functionality and Polish",id:"address_book_delete_functionality_and_polish",slug:"address_book_delete_functionality_and_polish",hide_table_of_contents:!0,sidebar_position:22,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3_object-oriented-javascript/1f_address_book_delete_functionality_and_polish.md"},l=void 0,s={unversionedId:"intermediate_javascript_classic/object-oriented-javascript/address_book_delete_functionality_and_polish",id:"intermediate_javascript_classic/object-oriented-javascript/address_book_delete_functionality_and_polish",title:"6. Address Book: Delete Functionality and Polish",description:"In this lesson, we'll add a user interface for our Address Book's delete functionality. We'll need to add a delete button to our HTML, an event listener for the new button, as well as a user interface function to handle actually calling AddressBook.prototype.deleteContact() to delete the contact.",source:"@site/docs/intermediate_javascript_classic/3_object-oriented-javascript/1f_address_book_delete_functionality_and_polish.md",sourceDirName:"intermediate_javascript_classic/3_object-oriented-javascript",slug:"/intermediate_javascript_classic/object-oriented-javascript/address_book_delete_functionality_and_polish",permalink:"/lhtp/intermediate_javascript_classic/object-oriented-javascript/address_book_delete_functionality_and_polish",draft:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{title:"6. Address Book: Delete Functionality and Polish",id:"address_book_delete_functionality_and_polish",slug:"address_book_delete_functionality_and_polish",hide_table_of_contents:!0,sidebar_position:22,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3_object-oriented-javascript/1f_address_book_delete_functionality_and_polish.md"},sidebar:"intermediate_javascript_classic",previous:{title:"5. Address Book: Event Bubbling, Event Delegation, and the Event Object",permalink:"/lhtp/intermediate_javascript_classic/object-oriented-javascript/address_book_event_bubbling_event_delegation_and_the_event_object"},next:{title:"7. Journal #4 Discussion",permalink:"/lhtp/intermediate_javascript_classic/object-oriented-javascript/journal_4_discussion"}},r={},d=[{value:"Delete Functionality",id:"delete-functionality",level:2},{value:"More Improvements",id:"more-improvements",level:2},{value:"Bootstrap Styles",id:"bootstrap-styles",level:3},{value:"Empty Form Fields",id:"empty-form-fields",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson, we'll add a user interface for our Address Book's delete functionality. We'll need to add a delete button to our HTML, an event listener for the new button, as well as a user interface function to handle actually calling ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook.prototype.deleteContact()")," to delete the contact."),(0,o.kt)("p",null,"At the end of this lesson, we'll also add some bootstrap classes that will make our Address Book application look more polished."),(0,o.kt)("h2",{id:"delete-functionality"},"Delete Functionality"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"First, let's add a button to our HTML. We'll add this button to our contact details section. This will allow us to connect delete functionality to a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," object."),(0,o.kt)("div",{class:"filename"},"index.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div id="contact-details" class="hidden">\n  <h2>Contact Details:</h2>\n  <p>First Name: <span class="first-name"></span></p>\n  <p>Last Name: <span class="last-name"></span></p>\n  <p>Phone Number: <span class="phone-number"></span></p>\n  <button class="delete" type="button">Delete</button>\n</div>\n')),(0,o.kt)("p",null,"Next, let's turn to our scripts. First, we'll create a new event listener attached to our delete button that listens for a 'click' event. Then we'll create the beginning of a handler function called ",(0,o.kt)("inlineCode",{parentName:"p"},"handleDelete()"),"."),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'...\n\nfunction handleDelete(event) {\n  \n}\n\n...\n\nwindow.addEventListener("load", function (){\n  document.querySelector("form#new-contact").addEventListener("submit", handleFormSubmission);\n  document.querySelector("div#contacts").addEventListener("click", displayContactDetails);\n  // The line below this one is new!\n  document.querySelector("button.delete").addEventListener("click", handleDelete);\n});\n')),(0,o.kt)("p",null,"Next, we'll need to create the actual delete functionality. Our functionality relies on the ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook.prototype.deleteContact()")," method, which takes a ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," object id as an argument. This means that our button will need access to the id of the current contact that's being displayed. "),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"displayContactDetails()")," function already has access to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," object's details, so let's update that function to also update our new delete button with an ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," attribute set to the id of the contact."),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function displayContactDetails(event) {\n  const contact = addressBook.findContact(event.target.id);\n  document.querySelector(".first-name").innerText = contact.firstName;\n  document.querySelector(".last-name").innerText = contact.lastName;\n  document.querySelector(".phone-number").innerText = contact.phoneNumber;\n  // The line below this one is new!\n  document.querySelector("button.delete").setAttribute("id", contact.id);\n  document.querySelector("div#contact-details").removeAttribute("class");\n}\n')),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},'document.querySelector("button.delete").setAttribute("id", contact.id);'),", we are accessing our delete button and then giving it an ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," attribute set to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," object's id. We'll do this every time we display the details of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," object, so our button will always have the value of the currently displayed ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact"),"."),(0,o.kt)("p",null,"Now it's time to add code to the ",(0,o.kt)("inlineCode",{parentName:"p"},"handleDelete()")," function:"),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function handleDelete(event) {\n  addressBook.deleteContact(event.target.id);\n  document.querySelector("button.delete").removeAttribute("id");\n  document.querySelector("div#contact-details").setAttribute("class", "hidden");\n  listContacts(addressBook);\n}\n')),(0,o.kt)("p",null,"Let's break down this new code line by line:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"First we call ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook.prototype.deleteContact()")," to delete the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," object. Since ",(0,o.kt)("inlineCode",{parentName:"p"},"addressBook")," is a global variable, we can call on it from within the ",(0,o.kt)("inlineCode",{parentName:"p"},"handleDelete()")," function. Remember that we're using the global ",(0,o.kt)("inlineCode",{parentName:"p"},"addressBook")," variable as a mock database and that we typically should avoid global variables.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Then, we remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," attribute from the delete button, thereby resetting it. This line of code is actually optional, because any time we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Element.setAttribute()")," method to create an ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," for an element, it will overwrite the existing id attribute, if there is one. This means that when we call ",(0,o.kt)("inlineCode",{parentName:"p"},"Element.setAttribute()")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"displayContactDetails()")," function, it will overwrite the existing ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," attribute. Whether or not we include this line of code depends on  the needs of our application. It may turn out to be better to ensure that our ",(0,o.kt)("inlineCode",{parentName:"p"},"handleDelete()")," function clears the id for the delete button so it can't be incorrectly used elsewhere.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the next line of code, we are hiding the contact details div once more.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Finally, we call the ",(0,o.kt)("inlineCode",{parentName:"p"},"listContacts")," function again to refresh the list of contacts, this time without the contact that we've deleted."))),(0,o.kt)("h2",{id:"more-improvements"},"More Improvements"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Our address book is now fully functional. Let's add a few more user experience improvements before wrapping up."),(0,o.kt)("h3",{id:"bootstrap-styles"},"Bootstrap Styles"),(0,o.kt)("p",null,"First, let's utilize Bootstrap classes to add styling and a more organized layout to our page."),(0,o.kt)("div",{class:"filename"},"index.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n  <link \n    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" \n    rel="stylesheet" \n    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" \n    crossorigin="anonymous">\n    <link href="css/styles.css" rel="stylesheet" type="text/css">\n    <script src="js/scripts.js"><\/script>\n    <title>Address Book</title>\n  </head>\n  <body>\n    <div class="container">\n      <h1>Address Book</h1>\n      <div class="row">\n        <div class="col-md-6">\n          <hr />\n          <h2>Add a Contact:</h2>\n          <form id="new-contact">\n            <div class="form-group">\n              <label for="new-first-name">First Name</label>\n              <input type="text"  class="form-control" id="new-first-name" name="new-first-name">\n            </div>\n            <div class="form-group">\n              <label for="new-last-name">Last Name</label>\n              <input type="text"  class="form-control" id="new-last-name" name="new-last-name">\n            </div>\n            <div class="form-group">\n              <label for="new-phone-number">Phone Number</label>\n              <input type="text"  class="form-control" id="new-phone-number" name="new-phone-number">\n            </div>\n            <button type="submit" class="btn-primary">Add</button>\n          </form>\n          <hr />\n          <h2>Contacts:</h2>\n          <div id="contacts">\n          </div>\n        </div>\n        <div class="col-md-6">\n          <div id="contact-details" class="hidden">\n            <h2>Contact Details:</h2>\n            <p>First Name: <span class="first-name"></span></p>\n            <p>Last Name: <span class="last-name"></span></p>\n            <p>Phone Number: <span class="phone-number"></span></p>\n            <button class="btn-primary delete" type="button">Delete</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </body>\n</html>\n')),(0,o.kt)("p",null,"Now our webpage will look a little nicer!"),(0,o.kt)("h3",{id:"empty-form-fields"},"Empty Form Fields"),(0,o.kt)("p",null,"Let's also make sure to empty out our form fields after submission:"),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'...\n\nfunction handleFormSubmission(event) {\n  event.preventDefault();\n  const inputtedFirstName = document.querySelector("input#new-first-name").value;\n  const inputtedLastName = document.querySelector("input#new-last-name").value;\n  const inputtedPhoneNumber = document.querySelector("input#new-phone-number").value;\n  let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);\n  addressBook.addContact(newContact);\n  listContacts(addressBook);\n  document.querySelector("input#new-first-name").value = null;\n  document.querySelector("input#new-last-name").value = null;\n  document.querySelector("input#new-phone-number").value = null;\n}\n\n...\n')),(0,o.kt)("p",null,"If you want to see all the updated code, check the branch in the repository below."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/oop-address-book-v2/tree/8_adding_delete_functionality_and_polish"},(0,o.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for the Address Book"))))}u.isMDXComponent=!0}}]);