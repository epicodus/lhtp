"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[71542],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>k});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(o),m=n,k=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return o?a.createElement(k,i(i({ref:t},d),{},{components:o})):a.createElement(k,i({ref:t},d))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=o[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},57142:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=o(87462),n=(o(67294),o(3905));const r={title:"Address Book, Movie Tickets, Bank Account",id:"address_book_movie_tickets_bank_account",slug:"address_book_movie_tickets_bank_account",hide_table_of_contents:!0,sidebar_position:24,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3_object-oriented-javascript/2a_classwork_address_book_movie_tickets_bank_account.md"},i=void 0,s={unversionedId:"intermediate_javascript_classic/object-oriented-javascript/address_book_movie_tickets_bank_account",id:"intermediate_javascript_classic/object-oriented-javascript/address_book_movie_tickets_bank_account",title:"Address Book, Movie Tickets, Bank Account",description:"Goal: The goal for this class session is to continue to practice creating objects using constructors and prototypes, and to connect those objects to a user interface.",source:"@site/docs/intermediate_javascript_classic/3_object-oriented-javascript/2a_classwork_address_book_movie_tickets_bank_account.md",sourceDirName:"intermediate_javascript_classic/3_object-oriented-javascript",slug:"/intermediate_javascript_classic/object-oriented-javascript/address_book_movie_tickets_bank_account",permalink:"/lhtp/intermediate_javascript_classic/object-oriented-javascript/address_book_movie_tickets_bank_account",draft:!1,tags:[],version:"current",sidebarPosition:24,frontMatter:{title:"Address Book, Movie Tickets, Bank Account",id:"address_book_movie_tickets_bank_account",slug:"address_book_movie_tickets_bank_account",hide_table_of_contents:!0,sidebar_position:24,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3_object-oriented-javascript/2a_classwork_address_book_movie_tickets_bank_account.md"},sidebar:"intermediate_javascript_classic",previous:{title:"Imposter Syndrome",permalink:"/lhtp/intermediate_javascript_classic/object-oriented-javascript/imposter_syndrome"},next:{title:"Introduction to the Node Object",permalink:"/lhtp/intermediate_javascript_classic/object-oriented-javascript/introduction_to_the_node_object"}},c={},l=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Address Book",id:"address-book",level:3},{value:"Movie Tickets",id:"movie-tickets",level:3},{value:"Bank Account",id:"bank-account",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Goal"),": The goal for this class session is to continue to practice creating objects using constructors and prototypes, and to connect those objects to a user interface."),(0,n.kt)("h2",{id:"warm-up"},"Warm Up"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When would you use a constructor, and when would you use a prototype? What functionality do they offer?"),(0,n.kt)("li",{parentName:"ul"},"What is the design principle 'separation of concerns'? What benefits does it offer?"),(0,n.kt)("li",{parentName:"ul"},"What is event delegation and how do we use it?")),(0,n.kt)("h2",{id:"code"},"Code"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"First complete the Address Book project, and then select either the Movie Tickets or Bank Account project to complete."),(0,n.kt)("h3",{id:"address-book"},"Address Book"),(0,n.kt)("p",null,"Follow along with the Address Book lessons to add the new concepts discussed in the homework. Complete these items for it too:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add functionality to record and display a contact's email address."),(0,n.kt)("li",{parentName:"ul"},"Add functionality to record and display a contact's physical address."),(0,n.kt)("li",{parentName:"ul"},"Then, add functionality that allows a user to record ",(0,n.kt)("em",{parentName:"li"},"multiple")," addresses (email or physical) for a single ",(0,n.kt)("inlineCode",{parentName:"li"},"Contact"),', and what type each address is (ie: "work", "personal", etc.) ',(0,n.kt)("em",{parentName:"li"},"(Hint: ",(0,n.kt)("inlineCode",{parentName:"em"},"Address")," will need to be an object with multiple properties saved within the ",(0,n.kt)("inlineCode",{parentName:"em"},"Contact")," object.)")," ")),(0,n.kt)("p",null,"If you wish, work on this too:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add support for ",(0,n.kt)("em",{parentName:"li"},"multiple")," ",(0,n.kt)("inlineCode",{parentName:"li"},"AddressBook"),"s, each with their own unique set of ",(0,n.kt)("inlineCode",{parentName:"li"},"Contact"),"s. (For instance, you could have ",(0,n.kt)("em",{parentName:"li"},"School"),", ",(0,n.kt)("em",{parentName:"li"},"Personal"),", and ",(0,n.kt)("em",{parentName:"li"},"Work")," address books to organize different types of friends, co-workers, and  acquaintances.)")),(0,n.kt)("h3",{id:"movie-tickets"},"Movie Tickets"),(0,n.kt)("p",null,'Create a webpage where a user can select the name of a movie, the time of day that they would like to see the movie and their age. The webpage should let them know how much their movie ticket will cost, based on those three factors. Consider that non-"first-release" movies, matinee, and senior tickets tend to be cheaper than the regular priced ticket.'),(0,n.kt)("p",null,"Your constructor and prototype could be called ",(0,n.kt)("inlineCode",{parentName:"p"},"Ticket")," and you can come up with the formula for determining how the price is calculated depending on the input from the user."),(0,n.kt)("p",null,"Start by completing your business logic, and then move onto your user interface logic. Use test-driven development to complete your business logic and add your pseudocode tests to your project's README.md. After every passing test, make sure to commit your code."),(0,n.kt)("h3",{id:"bank-account"},"Bank Account"),(0,n.kt)("p",null,"Use constructor functions and prototypes to create a webpage where a user can create a single bank account with an initial deposit amount. Then allow the user to make withdrawals and deposits, and see the balance of the account."),(0,n.kt)("p",null,"Start by completing your business logic, and then move onto your user interface logic. Use test-driven development to complete your business logic and add your pseudocode tests to your project's README.md. After every passing test, make sure to commit your code."),(0,n.kt)("p",null,"Remember to create a ",(0,n.kt)("inlineCode",{parentName:"p"},"BankAccount")," constructor and a prototype that includes methods for deposit and withdrawal and any other properties needed. Here is an example wireframe to help you visualize the app:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week4-oo/bank-assignment-wireframe.png",alt:"A mock up of the bank account webpage"})),(0,n.kt)("p",null,"Your project is not required to look like this; this is only an example."),(0,n.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Does the web app work as expected?"),(0,n.kt)("li",{parentName:"ul"},"Is business logic and user interface logic kept separate?"),(0,n.kt)("li",{parentName:"ul"},"Were constructors and prototypes used to create new objects?")))}u.isMDXComponent=!0}}]);