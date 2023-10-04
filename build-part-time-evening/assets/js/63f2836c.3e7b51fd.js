"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[92444],{30876:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var o=a(2784);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?o.createElement(h,i(i({ref:t},p),{},{components:a})):o.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},99536:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=a(7896),n=(a(2784),a(30876));const r={title:"Further Exploration: Local Storage",id:"further-exploration-local-storage",slug:"further-exploration-local-storage",hide_table_of_contents:!0,sidebar_position:4,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3d_further_exploration_local_storage.md"},i=void 0,l={unversionedId:"intermediate-javascript/object-oriented-javascript-part-2/further-exploration-local-storage",id:"intermediate-javascript/object-oriented-javascript-part-2/further-exploration-local-storage",title:"Further Exploration: Local Storage",description:"This lesson is a further exploration. That means it's optional \u2014 and the content here is not required for the independent project.",source:"@site/docs/intermediate-javascript/4_object-oriented-javascript-part-2/3d-further-exploration-local-storage.md",sourceDirName:"intermediate-javascript/4_object-oriented-javascript-part-2",slug:"/intermediate-javascript/object-oriented-javascript-part-2/further-exploration-local-storage",permalink:"/intermediate-javascript/object-oriented-javascript-part-2/further-exploration-local-storage",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Further Exploration: Local Storage",id:"further-exploration-local-storage",slug:"further-exploration-local-storage",hide_table_of_contents:!0,sidebar_position:4,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3d_further_exploration_local_storage.md"},sidebar:"intermediate-javascript",previous:{title:"Switch Cases",permalink:"/intermediate-javascript/object-oriented-javascript-part-2/switch-cases"},next:{title:"Further Exploration: Aliases",permalink:"/intermediate-javascript/object-oriented-javascript-part-2/further-exploration-aliases"}},s={},c=[{value:"Using Local Storage for Persistence",id:"using-local-storage-for-persistence",level:2},{value:"Adding, Getting and Removing Items",id:"adding-getting-and-removing-items",level:3},{value:"Using Local Storage with Objects",id:"using-local-storage-with-objects",level:3},{value:"More to Explore on MDN",id:"more-to-explore-on-mdn",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This lesson is a ",(0,n.kt)("strong",{parentName:"p"},"further exploration"),". That means it's optional \u2014 and the content here is not required for the independent project."),(0,n.kt)("h2",{id:"using-local-storage-for-persistence"},"Using Local Storage for Persistence"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Currently, all of our data is being stored in a global variable. When we refresh the page, all our variables are cleared. That means our data gets cleared, too. This is frustrating, especially since we will need to refresh our page constantly as we update our code."),(0,n.kt)("p",null,"While we're not ready to use databases yet, we do have another solution for temporary persistence called ",(0,n.kt)("strong",{parentName:"p"},"local storage"),". Local storage allows us to store some data in the browser. This data will persist even when we reload our page \u2014 in fact, it will persist until we clear our browser's cache or specifically do something to clear local storage!"),(0,n.kt)("p",null,"Local storage is one part of the Web Storage API, which is a part of the larger collection of browser Web APIs like ",(0,n.kt)("inlineCode",{parentName:"p"},"document"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"window"),", and others. In fact, we access local storage through the ",(0,n.kt)("inlineCode",{parentName:"p"},"window")," object."),(0,n.kt)("p",null,"Local storage is a little bit like a ",(0,n.kt)("strong",{parentName:"p"},"cookie")," but there are some key differences. Most of us are familiar with cookies. They are little bits of data stored in our browser. Whenever our browser navigates to a website, servers can read these cookies. Cookies are often innocuous but they can be annoying, too \u2014 they are a way for servers to track our website activity and behaviors."),(0,n.kt)("p",null,"Local storage is different. It can only be read client-side \u2014 by our browser. Servers can not see what's in our local storage. Local storage also has considerably more space than a cookie."),(0,n.kt)("p",null,"We can store our mock database in local storage. Note that this has very limited utility \u2014 local storage is limited to just one domain on one machine, so if you opened the project on another machine, the data stored on the first machine would not be there."),(0,n.kt)("p",null,"However, local storage is a nice way to achieve temporary persistence in our projects \u2014 at least until we start using databases. It also has many real-world uses as well. It can save certain information about our preferences, for instance, that the server does not need to see. Try navigating to a few different sites you use regularly and check the ",(0,n.kt)("inlineCode",{parentName:"p"},"window.localStorage")," property."),(0,n.kt)("p",null,"Let's take a look at how we can use local storage in our own applications. Once we've learned the basics, we'll see how we can use it to store our address book."),(0,n.kt)("h3",{id:"adding-getting-and-removing-items"},"Adding, Getting and Removing Items"),(0,n.kt)("p",null,"Open the DevTools console in Chrome and type in ",(0,n.kt)("inlineCode",{parentName:"p"},"window.localStorage"),". You'll see an object and it may even have key-value pairs in it. Just like with the ",(0,n.kt)("inlineCode",{parentName:"p"},"document")," object, we can also access ",(0,n.kt)("inlineCode",{parentName:"p"},"localStorage")," directly without first accessing the ",(0,n.kt)("inlineCode",{parentName:"p"},"window")," object. Which syntax to use in order to access local storage is up to personal preference. "),(0,n.kt)("p",null,"In the following code snippet, the local storage is currently empty:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"> window.localStorage;\nStorage\xa0{length: 0}\n> localStorage;\nStorage\xa0{length: 0}\n")),(0,n.kt)("p",null,"Local storage can only hold key-value pairs of strings. We can add a key-value pair like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'> localStorage.setItem("name", "Jasmine");\n> localStorage;\nStorage\xa0{ name: "Jasmine", length: 1}\n')),(0,n.kt)("p",null,"We can use ",(0,n.kt)("inlineCode",{parentName:"p"},"localStorage.setItem()")," to add a key-value pair. Then, when we check the value of ",(0,n.kt)("inlineCode",{parentName:"p"},"localStorage"),", we'll see our new key-value pair. Note that we'll also see a ",(0,n.kt)("inlineCode",{parentName:"p"},"length")," property. This is the number of items in local storage for that particular domain. So if we navigate from ",(0,n.kt)("a",{parentName:"p",href:"http://www.someimaginarysite111.com"},"www.someimaginarysite111.com")," (one domain) to ",(0,n.kt)("a",{parentName:"p",href:"http://www.someotherimaginarysite222.com"},"www.someotherimaginarysite222.com")," (a different domain), the second site will have a different local storage object."),(0,n.kt)("p",null,"To actually retrieve an item, we can do this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'> localStorage.getItem("name");\n"Jasmine"\n')),(0,n.kt)("p",null,"We can remove an item by doing the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'> localStorage.removeItem("name");\n')),(0,n.kt)("p",null,"Note that we don't need to remove an item first to add another one. We can just call ",(0,n.kt)("inlineCode",{parentName:"p"},"localStorage.setItem()")," to override a key-value pair that has the same key."),(0,n.kt)("p",null,"Finally, if we wanted to clear all the items in local storage for our particular domain, we'd use:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"> localStorage.clear();\n")),(0,n.kt)("h3",{id:"using-local-storage-with-objects"},"Using Local Storage with Objects"),(0,n.kt)("p",null,"Local storage has a pretty big limitation in terms of our address book. It's only for storing strings, not objects!"),(0,n.kt)("p",null,"However, we can work around that. JavaScript provides methods to turn objects into strings and vice versa."),(0,n.kt)("p",null,"Here's how we can turn an object into a string. Open the DevTools console and add the following code. We'll start by using our ",(0,n.kt)("inlineCode",{parentName:"p"},"Contact")," constructor and create a test contact."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'> function Contact(firstName, lastName, phoneNumber) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n  this.phoneNumber = phoneNumber;\n}\n> const testContact = new Contact("Ada", "Lovelace", "808-555-1111");\n')),(0,n.kt)("p",null,"Next, we can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"JSON.stringify()")," method to turn our object into a string. We've very briefly discussed JSON in previous lessons \u2014 it's short for JavaScript Object Notation and it just means storing data in JavaScript objects. So we've already been working with JSON quite a bit!"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"> const stringifiedContact = JSON.stringify(testContact);\n> localStorage.setItem('contact', stringifiedContact);\n")),(0,n.kt)("p",null,"If we check ",(0,n.kt)("inlineCode",{parentName:"p"},"localStorage"),", we'll see the value associated with the key ",(0,n.kt)("inlineCode",{parentName:"p"},"contact")," is the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'> localStorage.getItem(\'contact\');\n"{"firstName":"Ada","lastName":"Lovelace","phoneNumber":"808-555-1111"}"\n')),(0,n.kt)("p",null,"Now let's say we want to retrieve this information and work with it as an object again. We can do so with ",(0,n.kt)("inlineCode",{parentName:"p"},"JSON.parse()"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'> const contactString = localStorage.getItem(\'contact\');\n> const contactObject = JSON.parse(contactString);\n> contactObject;\n{firstName: "Ada", lastName: "Lovelace", phoneNumber: "808-555-1111"}\n')),(0,n.kt)("p",null,"As we can see, the value of ",(0,n.kt)("inlineCode",{parentName:"p"},"contactObject")," is now an object again. However, be careful. A very important piece of information has been lost in this whole translation process. Can you see what it is?"),(0,n.kt)("p",null,"Well, ",(0,n.kt)("inlineCode",{parentName:"p"},"contactObject")," is no longer an object of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Contact")," type. It's just a basic JavaScript object of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Object")," type. That means none of the prototypal methods specific to ",(0,n.kt)("inlineCode",{parentName:"p"},"Contact")," objects can be used with a contact retrieved from local storage."),(0,n.kt)("p",null,"Once again, there are ways around this. For instance, it might make sense to create a method that translates these basic objects back into ",(0,n.kt)("inlineCode",{parentName:"p"},"Contact")," objects."),(0,n.kt)("p",null,"However, we are going to leave the next steps for intrepid explorers that would like to check out local storage on their own. You can try updating the address book application or another application you're working on to use local storage \u2014 or you could try using local storage for another project in the next few sections of Intermediate JavaScript. Once again, this is completely optional \u2014 and there are more important JavaScript concepts to focus on over local storage right now. That being said, if you're feeling comfortable with the material and need more challenges, check it out."),(0,n.kt)("h3",{id:"more-to-explore-on-mdn"},"More to Explore on MDN"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"localStorage")," is a part of the Web Storage API. This API has another storage option called ",(0,n.kt)("inlineCode",{parentName:"p"},"sessionStorage")," that saves data just for the duration that a web browser is open. Once closed, the data is erased. To learn more, visit MDN:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API"},"Web Storage API")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},(0,n.kt)("inlineCode",{parentName:"a"},"localStorage"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"},(0,n.kt)("inlineCode",{parentName:"a"},"sessionStorage"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON"},(0,n.kt)("inlineCode",{parentName:"a"},"JSON")))))}u.isMDXComponent=!0}}]);