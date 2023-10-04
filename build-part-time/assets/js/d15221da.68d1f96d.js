"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[17765],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(n),u=a,m=h["".concat(p,".").concat(u)]||h[u]||d[u]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[h]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(7896),a=(n(2784),n(30876));const r={title:"Looping Through Objects and Prototypal Inheritance",id:"looping-through-objects-and-prototypal-inheritance",slug:"looping-through-objects-and-prototypal-inheritance",hide_table_of_contents:!0,sidebar_position:18,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1c_looping_through_object_properties.md"},i=void 0,l={unversionedId:"intermediate-javascript/object-oriented-javascript/looping-through-objects-and-prototypal-inheritance",id:"intermediate-javascript/object-oriented-javascript/looping-through-objects-and-prototypal-inheritance",title:"Looping Through Objects and Prototypal Inheritance",description:"In order to display all of the contacts in our application, we're going to need to loop through our address book's contacts. However, since our contacts are all stored in an object, we have to do this differently than we would with looping through an array.",source:"@site/docs/intermediate-javascript/3_object-oriented-javascript/1c-looping-through-object-properties.md",sourceDirName:"intermediate-javascript/3_object-oriented-javascript",slug:"/intermediate-javascript/object-oriented-javascript/looping-through-objects-and-prototypal-inheritance",permalink:"/intermediate-javascript/object-oriented-javascript/looping-through-objects-and-prototypal-inheritance",draft:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"Looping Through Objects and Prototypal Inheritance",id:"looping-through-objects-and-prototypal-inheritance",slug:"looping-through-objects-and-prototypal-inheritance",hide_table_of_contents:!0,sidebar_position:18,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1c_looping_through_object_properties.md"},sidebar:"intermediate-javascript",previous:{title:"Address Book: User Interface",permalink:"/intermediate-javascript/object-oriented-javascript/address-book-user-interface"},next:{title:"Address Book: Adding Interactivity",permalink:"/intermediate-javascript/object-oriented-javascript/address-book-adding-interactivity"}},p={},s=[{value:"Looping Through Objects with <code>Object.keys()</code>",id:"looping-through-objects-with-objectkeys",level:2},{value:"Looping through Objects with <code>for...in</code>",id:"looping-through-objects-with-forin",level:2},{value:"A Review of Prototypes",id:"a-review-of-prototypes",level:3}],c={toc:s},h="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In order to display all of the contacts in our application, we're going to need to loop through our address book's contacts. However, since our contacts are all stored in an object, we have to do this differently than we would with looping through an array."),(0,a.kt)("p",null,"In this lesson, we'll learn exactly how to do that. Then, in the next lesson, we'll apply what we've learned here to actually loop through our contacts."),(0,a.kt)("p",null,"In the process of learning about looping through object properties, we'll also do a deeper dive into prototypal inheritance \u2014 though not too deep!"),(0,a.kt)("h2",{id:"looping-through-objects-with-objectkeys"},"Looping Through Objects with ",(0,a.kt)("inlineCode",{parentName:"h2"},"Object.keys()")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Let's say we have an object that stores information about the mathematician Ada Lovelace in our address book application. (Don't add any of the following code to the address book application \u2014 we are just using this as an example.) We want to take this information and convert it all into a single string which we'll display on our website."),(0,a.kt)("p",null,"Let's take a look at our object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let mathematician = {\n  firstName: "Ada",\n  lastName: "Lovelace",\n  profession: "Mathematician",\n  funFact: "Daughter of Lord Byron",\n  countryOfBirth: "England",\n  yearOfBirth: 1815,\n  yearOfDeath: 1852\n}\n')),(0,a.kt)("p",null,"We ",(0,a.kt)("em",{parentName:"p"},"could")," just display each property individually (such as by doing ",(0,a.kt)("inlineCode",{parentName:"p"},"mathematician.firstName"),") but that becomes less and less feasible the more properties our objects have \u2014 and results in more and more work."),(0,a.kt)("p",null,"So let's turn it into one long string instead. In ",(0,a.kt)("a",{parentName:"p",href:"https://new.learnhowtoprogram.com/intermediate-javascript/object-oriented-javascript/address-book-finding-and-deleting-contacts"},"Address Book: Finding and Deleting Contacts"),", we learned about ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.keys()"),", a method that returns an array of all the keys in an object. We can take advantage of this method to grab the keys in an array and then loop over them:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> const adaKeys = Object.keys(mathematician);\n> let adaString = "";\n> adaKeys.forEach(function(key) {\n  adaString = adaString.concat(key + ": " + mathematician[key] + "\\n"); \n});\n')),(0,a.kt)("p",null,"This isn't too bad \u2014 we create a constant called ",(0,a.kt)("inlineCode",{parentName:"p"},"adaKeys")," that holds an array of the ",(0,a.kt)("inlineCode",{parentName:"p"},"mathematician")," object's keys. Next we initialize an empty string called ",(0,a.kt)("inlineCode",{parentName:"p"},"adaString"),"."),(0,a.kt)("p",null,"Finally, we loop over our array of keys. For each key, we use ",(0,a.kt)("inlineCode",{parentName:"p"},"String.prototype.concat()")," to add a stringified key and value along with a new line after each key-value pair."),(0,a.kt)("p",null,"If we print the values of ",(0,a.kt)("inlineCode",{parentName:"p"},"adaString")," to the DevTools console, we get the following string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"> adaString;\n'firstName: Ada\\nlastName: Lovelace\\nprofession: Mathematician\\nfunFact: Daughter of Lord Byron\\ncountryOfBirth: England\\nyearOfBirth: 1815\\nyearOfDeath: 1852\\n'\n")),(0,a.kt)("p",null,"Something is wrong! I don't see any new lines, only the symbol ",(0,a.kt)("inlineCode",{parentName:"p"},"\\n")," that represents a new line. Well, in order to have the new line symbols be evaluated as new lines, we need them to be processed through a ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log()")," in the DevTools or our HTML."),(0,a.kt)("p",null,"If we log ",(0,a.kt)("inlineCode",{parentName:"p"},"adaString")," to the DevTools console, we get the following string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"> console.log(adaString);\nfirstName: Ada\nlastName: Lovelace\nprofession: Mathematician\nfunFact: Daughter of Lord Byron\ncountryOfBirth: England\nyearOfBirth: 1815\nyearOfDeath: 1852\n")),(0,a.kt)("p",null,"That looks better! And while this output may ",(0,a.kt)("em",{parentName:"p"},"look")," the same as our object, we now have a string. This could be helpful if we wanted to append many different objects to the DOM, especially if they have different keys. There's no need to specify each key in our code. "),(0,a.kt)("p",null,"You might be thinking that the keys above don't look very pretty \u2014 they are formatted like JavaScript variables, not syntactically correct English. Well, our loop could also format the keys, automatically capitalizing the first letter and then using a regular expression to identify capital letters and then add separators so there is a space between each word. Only a little bit of code would be necessary to \"prettify\" this string so we could easily append entire objects to the DOM. We won't demonstrate how to do this in this lesson \u2014 after all, it has nothing to do with looping \u2014 but you may want to experiment with this in your own code!"),(0,a.kt)("p",null,"In general, using ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.keys()")," is a very effective way to loop over properties in JavaScript. In fact, it's generally the best way to do so \u2014 and it's exactly what we'll do in the next lesson."),(0,a.kt)("h2",{id:"looping-through-objects-with-forin"},"Looping through Objects with ",(0,a.kt)("inlineCode",{parentName:"h2"},"for...in")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Now let's take a look at some syntactic sugar that JavaScript provides for looping through objects: the ",(0,a.kt)("inlineCode",{parentName:"p"},"for...in")," loop. ",(0,a.kt)("strong",{parentName:"p"},"Caution:")," There is an important use case where we won't want to use ",(0,a.kt)("inlineCode",{parentName:"p"},"for...in"),", which we will cover in a moment. Using ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.keys()")," will generally be better! Going over this gotcha will give us further insights into prototypal inheritance."),(0,a.kt)("p",null,"Here's an example of a ",(0,a.kt)("inlineCode",{parentName:"p"},"for...in")," loop:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> let adaString = "";\n> for (const key in mathematician) {\n  adaString = adaString.concat(key + ": " + mathematician[key] + "\\n");\n}\n> console.log(adaString);\nfirstName: Ada\nlastName: Lovelace\nprofession: Mathematician\nfunFact: Daughter of Lord Byron\ncountryOfBirth: England\nyearOfBirth: 1815\nyearOfDeath: 1852\n')),(0,a.kt)("p",null,"The only thing we had to change here is the following syntax: ",(0,a.kt)("inlineCode",{parentName:"p"},"for (const key in mathematician)"),". The code inside the curly brackets ",(0,a.kt)("inlineCode",{parentName:"p"},"{ }")," remains the same, and so does the output when we log the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"adaString"),"."),(0,a.kt)("p",null,"As we can see, this is a special kind of ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop. We first specify a variable name \u2014 here we call it ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," but we could call it ",(0,a.kt)("inlineCode",{parentName:"p"},"property")," or something else. Then, we specify the object we are iterating over, which is ",(0,a.kt)("inlineCode",{parentName:"p"},"mathematician"),". In pseudocode, the syntax of the ",(0,a.kt)("inlineCode",{parentName:"p"},"for...in")," loop looks like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"for (const property in object) {\n  // execute code for each property in the object\n}\n")),(0,a.kt)("p",null,"This all seems great, right? Well, now for the gotcha \u2014 and it's a big one. Let's see what happens if we use ",(0,a.kt)("inlineCode",{parentName:"p"},"for...in")," with a contact created using our ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact")," prototype. First, add this code to your DevTools console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> function Contact(firstName, lastName, phoneNumber) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n  this.phoneNumber = phoneNumber;\n}\n> Contact.prototype.fullName = function() {\n  return this.firstName + " " + this.lastName;\n};\n> let newContact = new Contact("Ada", "Lovelace", "111-111-1111");\n')),(0,a.kt)("p",null,"Now try looping over the contact object, looking at each ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> for (const key in newContact) {\n  console.log(newContact[key]);\n}\nAda\nLovelace\n111-111-1111\n\u0192 () {\n  return this.firstName + " " + this.lastName;\n}\n')),(0,a.kt)("p",null,"And what do we get? Well, the first three values make sense \u2014 but why is the following listed as a property?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'\u0192 () {\n  return this.firstName + " " + this.lastName;\n}\n')),(0,a.kt)("p",null,"This is a method that's listed in our ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact")," object! The ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact.prototype.fullName()")," method to be precise. Now is a good time to review prototypes and prototypal inheritance, along with exploring more about ",(0,a.kt)("inlineCode",{parentName:"p"},"for...in")," loops."),(0,a.kt)("h3",{id:"a-review-of-prototypes"},"A Review of Prototypes"),(0,a.kt)("p",null,"Let's take a closer look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"newContact")," object in the console:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week3-branching-looping-arrays/Week-3-2020-images/contact-properties.png",alt:'This object contains a "proto" property which in turn contains the "fullName" function.'})),(0,a.kt)("p",null,"In the above image, we see that in addition to the three properties we created, ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact")," also has a ",(0,a.kt)("inlineCode",{parentName:"p"},"__proto__")," property. If you are following along now in your DevTools console, note that this property may also be labeled as ",(0,a.kt)("inlineCode",{parentName:"p"},"[[Prototype]]")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"__proto__"),". As we learned in a previous lesson, if we want to access an object's prototype, we do so by accessing the ",(0,a.kt)("inlineCode",{parentName:"p"},"__proto__")," property like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"> newContact.__proto__;\nfullName: \u0192 ()\nconstructor: \u0192 Contact(firstName, lastName, phoneNumber)\n[[Prototype]]: Object\n")),(0,a.kt)("p",null,"Both ",(0,a.kt)("inlineCode",{parentName:"p"},"fullName")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"constructor")," are properties of this ",(0,a.kt)("inlineCode",{parentName:"p"},"__proto__")," object. This is how our humble ",(0,a.kt)("inlineCode",{parentName:"p"},"newContact")," object uses prototypal inheritance to get access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact")," constructor and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact.prototype.fullName()")," method."),(0,a.kt)("p",null,"In turn, we can see that ",(0,a.kt)("inlineCode",{parentName:"p"},"__proto__")," ",(0,a.kt)("em",{parentName:"p"},"also")," has a ",(0,a.kt)("inlineCode",{parentName:"p"},"__proto__")," property, which contains the functionality of basic objects in JavaScript. In a previous lesson, we learned that this chain of ",(0,a.kt)("inlineCode",{parentName:"p"},"__proto__")," objects makes ",(0,a.kt)("strong",{parentName:"p"},"prototypal inheritance")," possible in JavaScript. Let's review it now. Say we call this method on our ",(0,a.kt)("inlineCode",{parentName:"p"},"newContact")," object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> newContact.fullName();\n"Ada Lovelace"\n')),(0,a.kt)("p",null,"When we call ",(0,a.kt)("inlineCode",{parentName:"p"},"newContact.fullName()"),", JavaScript will first look at our ",(0,a.kt)("inlineCode",{parentName:"p"},"newContact")," object to see if that method is attached to it. If it's not, it will look in the ",(0,a.kt)("inlineCode",{parentName:"p"},"__proto__")," property to see if the method is there. If it isn't, it will look at that ",(0,a.kt)("inlineCode",{parentName:"p"},"__proto__"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"__proto__")," \u2014 until it finds the method. "),(0,a.kt)("p",null,"And if it doesn't find the method, it will return ",(0,a.kt)("inlineCode",{parentName:"p"},"Uncaught TypeError: [functionName] is not a function")," \u2014 where ",(0,a.kt)("inlineCode",{parentName:"p"},"[functionName]")," is the name of the function it couldn't find."),(0,a.kt)("p",null,"Well, this is the problem with ",(0,a.kt)("inlineCode",{parentName:"p"},"for...in")," \u2014 it doesn't just iterate over properties of an object \u2014 it iterates over all the ",(0,a.kt)("strong",{parentName:"p"},"enumerable")," properties of the object as well as enumerable properties in the prototype chain. (",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties"},"Enumerable")," just means that the property has an internal enumerable flag set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),".)"),(0,a.kt)("p",null,"In the case of our ",(0,a.kt)("inlineCode",{parentName:"p"},"newContact")," object, that means ",(0,a.kt)("inlineCode",{parentName:"p"},"for...in")," also enumerates over the properties of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact")," object type \u2014 specifically ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact.prototype.fullName()"),",  which we do not want!"),(0,a.kt)("p",null,"This is actually a pretty annoying behavior \u2014 and it's too bad that ",(0,a.kt)("inlineCode",{parentName:"p"},"for...in")," loops do this."),(0,a.kt)("p",null,"We can fix the issue by doing the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> let newContact = new Contact("Ada", "Lovelace", "111-111-1111");\n> for (const key in newContact) {\n  if (newContact.hasOwnProperty(key)) {\n    console.log(newContact[key]);\n  }\n}\nAda\nLovelace\n111-111-1111\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.prototype.hasOwnProperty()")," method returns a boolean. If a property belongs directly to an object (as ",(0,a.kt)("inlineCode",{parentName:"p"},"firstName")," belongs to our ",(0,a.kt)("inlineCode",{parentName:"p"},"newContact")," object), it will return ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". If the property doesn't belong to the object (as is the case of ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact.prototype.fullName()"),", which belongs to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact")," object type), it will return ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,"By the way, notice that the method ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.prototype.hasOwnProperty()")," belongs to ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"the  ",(0,a.kt)("inlineCode",{parentName:"a"},"Object")," type")," and not ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"newContact")," for that matter. We can call ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.prototype.hasOwnProperty()")," on ",(0,a.kt)("inlineCode",{parentName:"p"},"newContact"),", because ",(0,a.kt)("inlineCode",{parentName:"p"},"newContact")," has access to this method through prototypal inheritance."),(0,a.kt)("p",null,"For every object in JavaScript, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")," type ends the chain of prototypes. This means that every object in JavaScript inherits functionality from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")," type through prototypal inheritance. In order for ",(0,a.kt)("inlineCode",{parentName:"p"},"newContact")," to access ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.prototype.hasOwnProperty()"),", it has to go to its own ",(0,a.kt)("inlineCode",{parentName:"p"},"__proto__")," property, and then to the ",(0,a.kt)("inlineCode",{parentName:"p"},"__proto__"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"__proto__")," property. The following image shows this, highlighting which properties are returned from which object:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The orange box highlights the properties belonging to ",(0,a.kt)("inlineCode",{parentName:"li"},"newContact;"),"."),(0,a.kt)("li",{parentName:"ul"},"The green box highlights the properties belonging to ",(0,a.kt)("inlineCode",{parentName:"li"},"Contact"),", accessed through ",(0,a.kt)("inlineCode",{parentName:"li"},"newContact.__proto__;"),"."),(0,a.kt)("li",{parentName:"ul"},"The blue box highlights the properties belonging to ",(0,a.kt)("inlineCode",{parentName:"li"},"Object"),", accessed through ",(0,a.kt)("inlineCode",{parentName:"li"},"newContact.__proto__.__proto__;"),"."),(0,a.kt)("li",{parentName:"ul"},"The red underline highlights the ",(0,a.kt)("inlineCode",{parentName:"li"},"Object.prototype.hasOwnProperty()")," method.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/OOP-JS/contact-prototype-chain.png",alt:"This image shows `newContact` expanded in the DevTools console and the two `__proto__` properties that need to be accessed to get to `Object.prototype.hasOwnProperty()`."})),(0,a.kt)("p",null,"Well, so much for the syntactic sugar of a ",(0,a.kt)("inlineCode",{parentName:"p"},"for...in")," loop. While we can verify that properties actually belong to objects, it's probably just better to iterate using ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.keys()")," instead. In fact, the Mozilla documentation mostly recommends ",(0,a.kt)("inlineCode",{parentName:"p"},"for...in")," loops for debugging. Check out the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in"},"documentation on ",(0,a.kt)("inlineCode",{parentName:"a"},"for...in"))," for more information."),(0,a.kt)("p",null,"However, this dive into ",(0,a.kt)("inlineCode",{parentName:"p"},"for...in")," hopefully provides a good reminder about how prototypal inheritance works. If you are feeling especially brave, you might even want to read more about ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"},"Inheritance and the prototype chain"),". At this point, it's enough to have a very basic understanding of how JavaScript objects inherit from other objects."),(0,a.kt)("p",null,"In this lesson, we've learned a few ways to iterate over properties in an object. We've also reviewed how prototypal inheritance works, a key and often very confusing topic for developers. In the next lesson, we'll use what we've learned to actually loop through the contacts in our address book application."))}d.isMDXComponent=!0}}]);