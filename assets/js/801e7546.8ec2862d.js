"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[32477],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={title:"6. Constructor and Prototype Methods",id:"constructor_and_prototype_methods",slug:"constructor_and_prototype_methods",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3_object-oriented-javascript/0f_address_book_constructor_and_prototype_methods.md"},i=void 0,s={unversionedId:"intermediate_javascript_part_time_evening/object-oriented-javascript/constructor_and_prototype_methods",id:"intermediate_javascript_part_time_evening/object-oriented-javascript/constructor_and_prototype_methods",title:"6. Constructor and Prototype Methods",description:"Now that we have an understanding of JavaScript objects, constructors, and prototypes, let's put them to work! In the next few lessons, we'll build an address book app to store contact info for our friends.",source:"@site/docs/intermediate_javascript_part_time_evening/3_object-oriented-javascript/0f_address_book_constructor_and_prototype_methods.md",sourceDirName:"intermediate_javascript_part_time_evening/3_object-oriented-javascript",slug:"/intermediate_javascript_part_time_evening/object-oriented-javascript/constructor_and_prototype_methods",permalink:"/lhtp/intermediate_javascript_part_time_evening/object-oriented-javascript/constructor_and_prototype_methods",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"6. Constructor and Prototype Methods",id:"constructor_and_prototype_methods",slug:"constructor_and_prototype_methods",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3_object-oriented-javascript/0f_address_book_constructor_and_prototype_methods.md"},sidebar:"intermediate_javascript_part_time_evening",previous:{title:"5. Constructors and Prototypes",permalink:"/lhtp/intermediate_javascript_part_time_evening/object-oriented-javascript/constructors_and_prototypes"},next:{title:"7. Accessing Code From Different Branches",permalink:"/lhtp/intermediate_javascript_part_time_evening/object-oriented-javascript/accessing_code_from_different_branches"}},c={},l=[{value:"Project Setup",id:"project-setup",level:2},{value:"Adding the <code>Contact</code> Constructor",id:"adding-the-contact-constructor",level:2},{value:"Adding a method to the <code>Contact</code> Prototype",id:"adding-a-method-to-the-contact-prototype",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now that we have an understanding of JavaScript objects, constructors, and prototypes, let's put them to work! In the next few lessons, we'll build an address book app to store contact info for our friends. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Take note that you do not have to code along with these lessons"),", but you can if you want to. The first classwork of this section will prompt you to recreate this project.  "),(0,a.kt)("p",null,"Since each contact will have multiple properties, we will use ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact")," objects to encapsulate their data. And because all ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact"),"s should have the same combination of properties (name, phone number, etc.) we'll create a constructor that can quickly craft many different ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact")," objects with this same structure."),(0,a.kt)("p",null,"We'll focus only on the business logic for now. Then we'll build code for the user interface together in upcoming lessons.   "),(0,a.kt)("h2",{id:"project-setup"},"Project Setup"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"First, let's create a project directory called ",(0,a.kt)("inlineCode",{parentName:"p"},"address-book"),". It will contain a ",(0,a.kt)("inlineCode",{parentName:"p"},"js")," subdirectory to house JavaScript logic, with a single JavaScript file called ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts.js")," inside. Like all projects, we'll also include a ",(0,a.kt)("inlineCode",{parentName:"p"},"README.md"),"."),(0,a.kt)("p",null,"Our project structure should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"address-book\n\u251c\u2500\u2500 js\n\u2502\xa0\xa0 \u2514\u2500\u2500 scripts.js\n\u2514\u2500\u2500 README.md\n")),(0,a.kt)("p",null,"Again, we'll wait to add user interface logic (that is, the HTML and JavaScript that creates the user-facing portion of the app) until after we've written our business logic."),(0,a.kt)("h2",{id:"adding-the-contact-constructor"},"Adding the ",(0,a.kt)("inlineCode",{parentName:"h2"},"Contact")," Constructor"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We'll start by building a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact")," constructor in ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts.js"),":"),(0,a.kt)("div",{class:"filename"},"js/scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function Contact(firstName, lastName, phoneNumber) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n  this.phoneNumber = phoneNumber;\n}\n")),(0,a.kt)("p",null,"Let's test this code in the DevTools console! Open the DevTools console on any webpage, and then copy/paste the constructor above into the console. Then, recreate our instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact")," by running the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> let testContact = new Contact("Ada", "Lovelace", "808-555-1111");\n')),(0,a.kt)("p",null,"If we check the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"testContact")," (by typing ",(0,a.kt)("inlineCode",{parentName:"p"},"testContact;")," into the console, and hitting ",(0,a.kt)("em",{parentName:"p"},"Enter"),"), we'll see the following response appear:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'> testContact;\nContact\xa0{firstName: "Ada", lastName: "Lovelace", phoneNumber: "503-555-1111"}\n')),(0,a.kt)("p",null,"This means that we've successfully created a ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact")," object type with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact")," constructor function, and we've used it to create one ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact")," instance."),(0,a.kt)("h2",{id:"adding-a-method-to-the-contact-prototype"},"Adding a method to the ",(0,a.kt)("inlineCode",{parentName:"h2"},"Contact")," Prototype"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Next, let's create a simple prototype method to call on ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact")," objects. Let's say we want a ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact.prototype.fullName()")," method to return the contact's first and last name concatenated together."),(0,a.kt)("p",null,"We can define a new prototype method in our ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts.js")," file like this:"),(0,a.kt)("div",{class:"filename"},"js/scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'function Contact(firstName, lastName, phoneNumber) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n  this.phoneNumber = phoneNumber;\n}\n\nContact.prototype.fullName = function() {\n  return this.firstName + " " + this.lastName;\n};\n')),(0,a.kt)("p",null,"By the way, if you still have any confusion about semicolons, let's go over this again one more time because the example above illustrates the difference with defining functions. In the first example, we begin with the ",(0,a.kt)("inlineCode",{parentName:"p"},"function")," keyword. Functions don't have semicolons after the closing curly brace."),(0,a.kt)("p",null,"However, in the second function, we are assigning a function expression to a property of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact.prototype"),". It's like assigning a value to a variable. That means we add a semicolon to the end."),(0,a.kt)("p",null,"It's all a bit arbitrary, really, since JavaScript doesn't really care. As we mentioned in the Introduction to Programming course, the JavaScript interpreter will automatically insert semicolons where needed so our machines can properly read our code. However, the interpreter isn't perfect and there are some fairly obscure situations where JavaScript can get things wrong. Beginners can definitely run into these situations and it's difficult to debug if you don't know what's happening. That's why we are adding semicolons instead of having JavaScript do it automatically \u2014 because it's hard for beginners to know those weird situations when JavaScript won't do it automatically for us. "),(0,a.kt)("p",null,"By the way, many companies (one example is Airbnb) require semicolons in their consistency standards while many others don't. While we require semicolons and consistency at Epicodus, you may not be using semicolons at a future job."),(0,a.kt)("p",null,"We can copy/paste the contents of ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts.js")," into the DevTools console again and create another sample ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact")," by invoking our constructor with the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javaScript"},'> let testContact = new Contact("Ada", "Lovelace", "503-555-1111");\n')),(0,a.kt)("p",null,"After that, we can call our new method in the console like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'> testContact.fullName();\n"Ada Lovelace"\n')),(0,a.kt)("p",null,"And as we can see, it returns the object's ",(0,a.kt)("inlineCode",{parentName:"p"},"firstName")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"lastName")," properties concatenated together. Now any existing or future ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact")," instances will have access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact.prototype.fullName()")," method."),(0,a.kt)("p",null,"Now that we've created a constructor for ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact")," and a simple prototype method that can be called on ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact")," instances, let's move on to constructing the address book itself."),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/oop-address-book-v2/tree/1_address_book_constructor_and_prototype_methods"},(0,a.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for the Address Book"))))}u.isMDXComponent=!0}}]);