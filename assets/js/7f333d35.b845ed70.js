"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[4641],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>k});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(o),m=r,k=p["".concat(c,".").concat(m)]||p[m]||u[m]||n;return o?a.createElement(k,i(i({ref:t},d),{},{components:o})):a.createElement(k,i({ref:t},d))}));function k(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<n;l++)i[l]=o[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},75266:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var a=o(87462),r=(o(67294),o(3905));const n={title:"Address Book, Movie Tickets, Bank Account - Part 1",id:"address_book_movie_tickets_bank_account___part_1",slug:"address_book_movie_tickets_bank_account___part_1",hide_table_of_contents:!0,sidebar_position:20,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3_object-oriented-javascript/2a_classwork_address_book_movie_tickets_bank_account.md"},i=void 0,s={unversionedId:"intermediate_javascript_part_time/object-oriented-javascript/address_book_movie_tickets_bank_account___part_1",id:"intermediate_javascript_part_time/object-oriented-javascript/address_book_movie_tickets_bank_account___part_1",title:"Address Book, Movie Tickets, Bank Account - Part 1",description:"Goal: The goal for this class session is to continue to practice creating objects using constructors and prototypes, and to connect those objects to a user interface.",source:"@site/docs/intermediate_javascript_part_time/3_object-oriented-javascript/2a_classwork_address_book_movie_tickets_bank_account.md",sourceDirName:"intermediate_javascript_part_time/3_object-oriented-javascript",slug:"/intermediate_javascript_part_time/object-oriented-javascript/address_book_movie_tickets_bank_account___part_1",permalink:"/lhtp/intermediate_javascript_part_time/object-oriented-javascript/address_book_movie_tickets_bank_account___part_1",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Address Book, Movie Tickets, Bank Account - Part 1",id:"address_book_movie_tickets_bank_account___part_1",slug:"address_book_movie_tickets_bank_account___part_1",hide_table_of_contents:!0,sidebar_position:20,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3_object-oriented-javascript/2a_classwork_address_book_movie_tickets_bank_account.md"},sidebar:"intermediate_javascript_part_time",previous:{title:"Prior Course Section Survey",permalink:"/lhtp/intermediate_javascript_part_time/object-oriented-javascript/prior_course_section_survey"},next:{title:"Address Book: Event Bubbling, Event Delegation, and the Event Object",permalink:"/lhtp/intermediate_javascript_part_time/object-oriented-javascript/address_book_event_bubbling_event_delegation_and_the_event_object"}},c={},l=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Address Book",id:"address-book",level:3},{value:"Movie Tickets",id:"movie-tickets",level:3},{value:"Bank Account",id:"bank-account",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goal"),": The goal for this class session is to continue to practice creating objects using constructors and prototypes, and to connect those objects to a user interface."),(0,r.kt)("h2",{id:"warm-up"},"Warm Up"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When would you use a constructor, and when would you use a prototype? What functionality do they offer?"),(0,r.kt)("li",{parentName:"ul"},"What is the design principle 'separation of concerns'? What benefits does it offer?"),(0,r.kt)("li",{parentName:"ul"},"What is event delegation and how do we use it?")),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"First complete the Address Book project, and then select either the Movie Tickets or Bank Account project to complete."),(0,r.kt)("h3",{id:"address-book"},"Address Book"),(0,r.kt)("p",null,"Follow along with the Address Book lessons to add the new concepts discussed in the homework. Complete these items for it too:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add functionality to record and display a contact's email address."),(0,r.kt)("li",{parentName:"ul"},"Add functionality to record and display a contact's physical address."),(0,r.kt)("li",{parentName:"ul"},"Then, add functionality that allows a user to record ",(0,r.kt)("em",{parentName:"li"},"multiple")," addresses (email or physical) for a single ",(0,r.kt)("inlineCode",{parentName:"li"},"Contact"),', and what type each address is (ie: "work", "personal", etc.) ',(0,r.kt)("em",{parentName:"li"},"(Hint: ",(0,r.kt)("inlineCode",{parentName:"em"},"Address")," will need to be an object with multiple properties saved within the ",(0,r.kt)("inlineCode",{parentName:"em"},"Contact")," object.)")," ")),(0,r.kt)("p",null,"If you wish, work on this too:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add support for ",(0,r.kt)("em",{parentName:"li"},"multiple")," ",(0,r.kt)("inlineCode",{parentName:"li"},"AddressBook"),"s, each with their own unique set of ",(0,r.kt)("inlineCode",{parentName:"li"},"Contact"),"s. (For instance, you could have ",(0,r.kt)("em",{parentName:"li"},"School"),", ",(0,r.kt)("em",{parentName:"li"},"Personal"),", and ",(0,r.kt)("em",{parentName:"li"},"Work")," address books to organize different types of friends, co-workers, and  acquaintances.)")),(0,r.kt)("h3",{id:"movie-tickets"},"Movie Tickets"),(0,r.kt)("p",null,'Create a webpage where a user can select the name of a movie, the time of day that they would like to see the movie and their age. The webpage should let them know how much their movie ticket will cost, based on those three factors. Consider that non-"first-release" movies, matinee, and senior tickets tend to be cheaper than the regular priced ticket.'),(0,r.kt)("p",null,"Your constructor and prototype could be called ",(0,r.kt)("inlineCode",{parentName:"p"},"Ticket")," and you can come up with the formula for determining how the price is calculated depending on the input from the user."),(0,r.kt)("p",null,"Start by completing your business logic, and then move onto your user interface logic. Use test-driven development to complete your business logic and add your pseudocode tests to your project's README.md. After every passing test, make sure to commit your code."),(0,r.kt)("h3",{id:"bank-account"},"Bank Account"),(0,r.kt)("p",null,"Use constructor functions and prototypes to create a webpage where a user can create a single bank account with an initial deposit amount. Then allow the user to make withdrawals and deposits, and see the balance of the account."),(0,r.kt)("p",null,"Start by completing your business logic, and then move onto your user interface logic. Use test-driven development to complete your business logic and add your pseudocode tests to your project's README.md. After every passing test, make sure to commit your code."),(0,r.kt)("p",null,"Remember to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"BankAccount")," constructor and a prototype that includes methods for deposit and withdrawal and any other properties needed. Here is an example wireframe to help you visualize the app:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week4-oo/bank-assignment-wireframe.png",alt:"A mock up of the bank account webpage"})),(0,r.kt)("p",null,"Your project is not required to look like this; this is only an example."),(0,r.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Does the web app work as expected?"),(0,r.kt)("li",{parentName:"ul"},"Is business logic and user interface logic kept separate?"),(0,r.kt)("li",{parentName:"ul"},"Were constructors and prototypes used to create new objects?")))}u.isMDXComponent=!0}}]);