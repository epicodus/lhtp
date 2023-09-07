"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[40828],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>w});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=o,w=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(w,r(r({ref:t},p),{},{components:a})):n.createElement(w,r({ref:t},p))}));function w(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},57229:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const i={title:"NaN. JavaScript's Global Object",id:"javascript's_global_object",slug:"javascript's_global_object",hide_table_of_contents:!0,sidebar_position:3,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4_javascript-and-web-browsers-part-2/2f_global_js_scope_is_represented_by_a_global_object.md"},r=void 0,l={unversionedId:"introduction_to_programming_part_time/javascript-and-web-browsers-part-2/javascript's_global_object",id:"introduction_to_programming_part_time/javascript-and-web-browsers-part-2/javascript's_global_object",title:"NaN. JavaScript's Global Object",description:"In this lesson, we're going to revisit the topic of scope and learn something new about global scope in JavaScript: it is represented by a global object. For JavaScript that's run in the browser, its global object is set to the window object. We'll start with a review of global and local scope, and then move onto new information.",source:"@site/docs/introduction_to_programming_part_time/4_javascript-and-web-browsers-part-2/2f_global_js_scope_is_represented_by_a_global_object.md",sourceDirName:"introduction_to_programming_part_time/4_javascript-and-web-browsers-part-2",slug:"/introduction_to_programming_part_time/javascript-and-web-browsers-part-2/javascript's_global_object",permalink:"/lhtp/introduction_to_programming_part_time/javascript-and-web-browsers-part-2/javascript's_global_object",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"NaN. JavaScript's Global Object",id:"javascript's_global_object",slug:"javascript's_global_object",hide_table_of_contents:!0,sidebar_position:3,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4_javascript-and-web-browsers-part-2/2f_global_js_scope_is_represented_by_a_global_object.md"},sidebar:"introduction_to_programming_part_time",previous:{title:"NaN. Practice: Accessing the DOM",permalink:"/lhtp/introduction_to_programming_part_time/javascript-and-web-browsers-part-2/practice_accessing_the_dom"},next:{title:"NaN. Accessing HTML Element Attributes and Properties in the DOM",permalink:"/lhtp/introduction_to_programming_part_time/javascript-and-web-browsers-part-2/accessing_html_element_attributes_and_properties_in_the_dom"}},s={},c=[{value:"Review: Global and Local Scope",id:"review-global-and-local-scope",level:2},{value:"JavaScript Global Scope Is Represented by a Global Object",id:"javascript-global-scope-is-represented-by-a-global-object",level:2},{value:"The Global Object for JavaScript Changes Based on Its Execution Context",id:"the-global-object-for-javascript-changes-based-on-its-execution-context",level:3},{value:"You Don&#39;t Need to Include <code>window</code> to Access Its Properties",id:"you-dont-need-to-include-window-to-access-its-properties",level:3},{value:"Only Variables Declared with <code>var</code> Are Added to the Global Object",id:"only-variables-declared-with-var-are-added-to-the-global-object",level:3},{value:"It&#39;s Possible to Override <code>window</code> Properties",id:"its-possible-to-override-window-properties",level:3},{value:"Summary",id:"summary",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson, we're going to revisit the topic of scope and learn something new about global scope in JavaScript: it is represented by a global object. For JavaScript that's run in the browser, its global object is set to the ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," object. We'll start with a review of global and local scope, and then move onto new information."),(0,o.kt)("h2",{id:"review-global-and-local-scope"},"Review: Global and Local Scope"),(0,o.kt)("hr",null),(0,o.kt)("p",null,'In the "Variable Scope" lesson, we learned that where a variable is declared in our code determines the access we have to it. This is called ',(0,o.kt)("strong",{parentName:"p"},"scope"),". If a variable is declared inside of a function, that variable is ",(0,o.kt)("strong",{parentName:"p"},"locally scoped")," to the function and we only have access to it within the function. Because of this, if we want to access any variable declared in a function, ",(0,o.kt)("em",{parentName:"p"},"outside")," of that function, we need to use a ",(0,o.kt)("inlineCode",{parentName:"p"},"return")," statement. "),(0,o.kt)("p",null,"Check out the following code snippet for an example of local scope. If we run this in our DevTools console, our second alert will cause this error: ",(0,o.kt)("inlineCode",{parentName:"p"},"Uncaught ReferenceError: result is not defined"),". This is because the ",(0,o.kt)("inlineCode",{parentName:"p"},"result")," variable was declared within the ",(0,o.kt)("inlineCode",{parentName:"p"},"add()")," function and not returned from the function. In other words, ",(0,o.kt)("inlineCode",{parentName:"p"},"result")," is locally scoped within the ",(0,o.kt)("inlineCode",{parentName:"p"},"add()")," function and we can't access it outside of it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function add() {         // function declaration\n  const result = 1 + 3;  // locally scoped variable declaration (result)\n  window.alert(result);  // the value of the 'result' variable is successfully alerted as 4\n}\n\nadd();                   // function call\nwindow.alert(result);    // alerting the value of the 'result' variable causes an error\n")),(0,o.kt)("p",null,"Just as noted above, because the ",(0,o.kt)("inlineCode",{parentName:"p"},"result")," variable is not returned from the ",(0,o.kt)("inlineCode",{parentName:"p"},"add()")," function, we can't access it at the global scope."),(0,o.kt)("p",null,"On the other hand, a ",(0,o.kt)("strong",{parentName:"p"},"globally scoped")," variable is one that is declared at the top level of our script file or our DevTools console. When we give a variable a global scope, it becomes available everywhere in our code. Check out the following code snippet that demonstrates this. In this example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"result")," variable is declared outside of the ",(0,o.kt)("inlineCode",{parentName:"p"},"add()")," function and at the top level of our scripts at the global scope."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const result = 1 + 3;    // globally scoped variable declaration (result)\n\nfunction add() {         // function declaration\n  window.alert(result);  // the value of the 'result' variable is successfully alerted as 4\n}\n\nadd();                   // function call\nwindow.alert(result);    // the value of the 'result' variable is successfully alerted as 4\n")),(0,o.kt)("p",null,"As we can see in the above example, because the ",(0,o.kt)("inlineCode",{parentName:"p"},"result")," variable is declared at the global scope, we can access it anywhere in the global scope, or in the local scope of functions declarations."),(0,o.kt)("p",null,'Scope can be a tricky concept to wrap your head around as a newcomer to computer programming. It\'s important to understand that scope gives developers control over which code our variables and functions can access or "talk to". Just like with the example of the feisty golden retriever named Max, we only wanted Max to be able to access the den that we\'ve "Max-proofed" and not the rest of the house. Scope allows us to do exactly that in our code \u2014 control the access our code has to other code in our program. '),(0,o.kt)("p",null,"Ultimately, scope helps our code be less buggy and more organized. Global and local scope are two foundational categories within scope, and over the course of the program we'll learn more about scope. Next up, we'll learn that global scope is represented by a global object in JavaScript."),(0,o.kt)("h2",{id:"javascript-global-scope-is-represented-by-a-global-object"},"JavaScript Global Scope Is Represented by a Global Object"),(0,o.kt)("hr",null),(0,o.kt)("p",null,'In JavaScript, the global scope is by definition always available. We know this because when we declare a variable or function in the global scope, we can access it from anywhere in our code. However, "scope" so far has been more of a concept. How is global scope represented in actual code? Let\'s first look at local scope.'),(0,o.kt)("p",null,"With local scope, we can see that it's created every time we declare a function. In other words, local scope is inside of any function we declare:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// global scope\n\nfunction add() {\n  // local scope\n}\n\n// global scope\n\nfunction subtract() {\n  // local scope that is completely separate \n  // from the add() function's local scope\n}\n\n// global scope\n")),(0,o.kt)("p",null,"With global scope, it's a bit trickier to see represented in code. So far, we know that declaring a variable or function at the top level of our script file or DevTools console makes that variable or function globally scoped. Well, in JavaScript the global scope is represented in code by a global object. The ",(0,o.kt)("strong",{parentName:"p"},"global object")," is just an object that is always available and accessible in our script file or DevTools console. This means that when we create a function or variable at the global scope, it gets added to the global object as a property! Let's see exactly how this works. "),(0,o.kt)("h3",{id:"the-global-object-for-javascript-changes-based-on-its-execution-context"},"The Global Object for JavaScript Changes Based on Its Execution Context"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For JavaScript code that's run in a web browser, the global object (the global scope) is set to the ",(0,o.kt)("inlineCode",{parentName:"strong"},"window")," object.")," Yes \u2014 the very same ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," object that we've been working with to run our alerts and prompts. Let's work through an example. When you input this code in your DevTools console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> function add() {\n  return 1 + 3;\n}\n")),(0,o.kt)("p",null,"We can call it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> add();\n4\n")),(0,o.kt)("p",null,"Or, we can call it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> window.add();\n4\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"window.add()")," is the exact same function as ",(0,o.kt)("inlineCode",{parentName:"p"},"add()"),". This demonstrates how the functions we declare at the global scope in our code get added to the JavaScript's global object. "),(0,o.kt)("p",null,"Keep in mind that it's only when we run JavaScript in our web browsers that JavaScript's global object is set to the browser's ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," object. If we run JavaScript on a server, the global object is set to an object called ",(0,o.kt)("inlineCode",{parentName:"p"},"global"),", but we won't spend time learning about this object. The technical way to describe this behavior is that JavaScript's global object depends on its execution context. An ",(0,o.kt)("strong",{parentName:"p"},"execution context")," is the location where our code is being run. For example, are we running our JavaScript in the browser? If so, then the browser is our execution context, and as we learned recently, JavaScript's global object is set to the ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," object. Or, are we running JavaScript in a server, and not in a browser? We won't worry about this second case now. The main take-away is this: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"JavaScript's global scope is represented by a global object that changes based on its execution context. "),(0,o.kt)("li",{parentName:"ul"},"A global object is just an object that is always available and accessible."),(0,o.kt)("li",{parentName:"ul"},"The execution context of our JS code corresponds to where we're running the code (in browser or in a server).")),(0,o.kt)("p",null,"You may be asking yourself why is JavaScript's global scope represented by an object? Well, just like browsers create the DOM to represent our HTML, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," object to represent our current browsing context, JavaScript needs a way to represent global scope in code so that we can write code to interact with it."),(0,o.kt)("p",null,"In fact, all of JavaScript's global built-in functions are properties of JavaScript's global object. Let's look at an example. Do you remember JavaScript's global built-in functions for parsing numbers? Theses ones:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> const myNumber = parseInt("3");\n> myNumber;\n3\n> const myPi = parseFloat("3.14");\n> myPi;\n3.14\n')),(0,o.kt)("p",null,"When we're running our JS in the browser, these global built-in JavaScript functions can be re-written and called as ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," object methods, and the functionality is the exact same:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> const myNumber = window.parseInt("3");\n> myNumber;\n3\n> const myPi = window.parseFloat("3.14");\n> myPi;\n3.14\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note \u2014 there's no reason to use ",(0,o.kt)("inlineCode",{parentName:"strong"},"window.parseInt()")," instead of ",(0,o.kt)("inlineCode",{parentName:"strong"},"parseInt()")," in your projects.")," The point of these examples is to show you how JavaScript's global built-in functions (like ",(0,o.kt)("inlineCode",{parentName:"p"},"parseInt()"),") and the functions we create at the global scope (like ",(0,o.kt)("inlineCode",{parentName:"p"},"add()"),") are added to JavaScript's global object, which in the case of JavaScript run in the browser is set to the ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," object. "),(0,o.kt)("p",null,"At this point, it should be relatively clear that JavaScript has a global object that represents the global scope of our script files or the DevTools JavaScript console. Next, we'll cover more details about the global object and we'll explain a change in the way we'll write certain code:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Only variables declared at the global scope with ",(0,o.kt)("inlineCode",{parentName:"li"},"var")," are added to JavaScript's global object."),(0,o.kt)("li",{parentName:"ul"},"It's possible to accidentally (or purposefully) override ",(0,o.kt)("inlineCode",{parentName:"li"},"window")," properties."),(0,o.kt)("li",{parentName:"ul"},"We'll use a shortcut for JavaScript run in the browser, which is to NOT call on the ",(0,o.kt)("inlineCode",{parentName:"li"},"window")," object to access its properties.")),(0,o.kt)("h3",{id:"you-dont-need-to-include-window-to-access-its-properties"},"You Don't Need to Include ",(0,o.kt)("inlineCode",{parentName:"h3"},"window")," to Access Its Properties"),(0,o.kt)("p",null,"Let's look at another example. Try putting this into your DevTools console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> window.alert(\"I'm using the window object's alert method!\");\n")),(0,o.kt)("p",null,"And then input this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> alert(\"I'm STILL using the window object's alert method!\");\n")),(0,o.kt)("p",null,"Writing ",(0,o.kt)("inlineCode",{parentName:"p"},"window.alert()")," is the same as writing ",(0,o.kt)("inlineCode",{parentName:"p"},"alert()"),"! This is because the ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," object is the global object \u2014 it is the execution context of our code in the browser, and by default it's always available and accessible. To use an analogy, the global object for JavaScript is like an aquarium fish tank. The JavaScript functions we create are the aquarium fish, rocks, plants, and sand, and the fish tank is the default context that supports the existence of the fish, plants, etc. \u2014 it's always available and accessible."),(0,o.kt)("p",null,"Using another analogy, the global object in JavaScript is pretty similar to an omniscient narrator that knows everything about the characters, their motives, and the events in a book. As the global object, the ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," object knows about all of the code \u2014 the HTML, the JS, the CSS, and other browser Web APIs. Because the global object is the default context, we don't have to directly call on the ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," object to access it's properties."),(0,o.kt)("p",null,"If this is confusing to you, that's to be expected. A good starting point is to just accept that this is how JavaScript and web browsers are structured and it helps both technologies  interact with each other."),(0,o.kt)("p",null,"The big takeaway here is that we don't ever have to explicitly access the ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," object to first access its properties \u2014 we can just call directly on the property names. This means that all of these ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," properties that we've learned about:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"window.innerHeight;\nwindow.innerWidth;\nwindow.open();\nwindow.location.reload();\nwindow.location.host;\nwindow.location.href;\nwindow.alert();\nwindow.prompt();\nwindow.confirm();\nwindow.document;\nwindow.document.body;\nwindow.document.head;\nwindow.document.getElementById();\nwindow.document.querySelectory();\n")),(0,o.kt)("p",null,"Can all be written without first accessing the ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," object, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"innerHeight;\ninnerWidth;\nopen();\nlocation.reload();\nlocation.host;\nlocation.href;\nalert();\nprompt();\nconfirm();\ndocument;\ndocument.body;\ndocument.head;\ndocument.getElementById();\ndocument.querySelectory();\n")),(0,o.kt)("p",null,"In fact, ",(0,o.kt)("strong",{parentName:"p"},"it's convention to not reference the ",(0,o.kt)("inlineCode",{parentName:"strong"},"window")," object explicitly"),". Developers just don't want to type out the extra ",(0,o.kt)("inlineCode",{parentName:"p"},"window.")," when they don't have to. However, when you are just learning to code, this can cause a lot of confusion \u2014 you may think that ",(0,o.kt)("inlineCode",{parentName:"p"},"alert()")," is a function when in fact it is a ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," object method. Now that we know the ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," object is the global object for JavaScript that's run in the browser, we'll be able to see ",(0,o.kt)("inlineCode",{parentName:"p"},"alert()")," and know that it's a ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," object method."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Going forward in LHTP lessons, we won't always explicitly include ",(0,o.kt)("inlineCode",{parentName:"strong"},"window")," when we want to access ",(0,o.kt)("inlineCode",{parentName:"strong"},"window")," properties"),", however, anytime it's important to know how a new object (like ",(0,o.kt)("inlineCode",{parentName:"p"},"document")," or a global built-in JavaScript function) is connected to the ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," object we'll make that clear. Shifting to this new convention will take a bit of time to get used to, but we'll have lots of practice and you'll be given reminders. "),(0,o.kt)("p",null,"Also, when we see code like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> alert(\"I'm STILL using the window object's alert method!\");\n")),(0,o.kt)("p",null,"It's completely fine to say \"this is the ",(0,o.kt)("inlineCode",{parentName:"p"},"alert()")," function\". Many places online do this. Why? Well, it's because in the code ",(0,o.kt)("inlineCode",{parentName:"p"},"alert()")," is being called as a function.  "),(0,o.kt)("p",null,"If you prefer to type out ",(0,o.kt)("inlineCode",{parentName:"p"},"window.alert()")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"alert()")," to call on this method, that is completely acceptable. The same goes for every other example we've covered in this lesson \u2014 do what's most comfortable for you and best for your learning. ",(0,o.kt)("strong",{parentName:"p"},"In any independent project, it is your choice whether or not to omit ",(0,o.kt)("inlineCode",{parentName:"strong"},"window")," when you are accessing a property of it.")),(0,o.kt)("h3",{id:"only-variables-declared-with-var-are-added-to-the-global-object"},"Only Variables Declared with ",(0,o.kt)("inlineCode",{parentName:"h3"},"var")," Are Added to the Global Object"),(0,o.kt)("p",null,"Any variable declared with ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," at the global scope of your scripts (or DevTools console) are not added to the global object. They still have global scope in your scripts/console and can be accessed anywhere, even within the local scope of a function. However, only variables declared with ",(0,o.kt)("inlineCode",{parentName:"p"},"var")," are actually added to the global object."),(0,o.kt)("h3",{id:"its-possible-to-override-window-properties"},"It's Possible to Override ",(0,o.kt)("inlineCode",{parentName:"h3"},"window")," Properties"),(0,o.kt)("p",null,"If we write a function with the same name as a ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," method, it will overwrite the ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," method. Check out this example, and try it out in your DevTools console if you like."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> window.alert\n\u0192 alert() { [native code] }\n> function alert() {\n  return "Howdy! I\'ve overwritten window.alert().";\n}\nundefined\n> window.alert\n\u0192 alert() {\n  return "Howdy! I\'ve overwritten window.alert().";\n}\n')),(0,o.kt)("p",null,"We've entered three commands sequentially in the above code snippet:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First, we accessed the value of the ",(0,o.kt)("inlineCode",{parentName:"li"},"window.alert")," property. We receive ",(0,o.kt)("inlineCode",{parentName:"li"},"\u0192 alert() { [native code] }")," as the return value of the ",(0,o.kt)("inlineCode",{parentName:"li"},"window.alert")," property. Here we can see that alert is a built-in (",(0,o.kt)("inlineCode",{parentName:"li"},"[native code]"),") function (",(0,o.kt)("inlineCode",{parentName:"li"},"\u0192"),"). Since it belongs to the ",(0,o.kt)("inlineCode",{parentName:"li"},"window")," object, we know this function is actually a method.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you are wondering why we didn't enter in ",(0,o.kt)("inlineCode",{parentName:"li"},"window.alert()")," with parens, this is because we did not want to call the method to execute its code. Instead, we want to know the definition of the method, so instead we input ",(0,o.kt)("inlineCode",{parentName:"li"},"window.alert")," to access the value of the window's ",(0,o.kt)("inlineCode",{parentName:"li"},"alert")," property."))),(0,o.kt)("li",{parentName:"ul"},"Second, we declared a new function called ",(0,o.kt)("inlineCode",{parentName:"li"},"alert()"),". In this function, we simply return the string ",(0,o.kt)("inlineCode",{parentName:"li"},'"Howdy! I\'ve overwritten window.alert()."'),"."),(0,o.kt)("li",{parentName:"ul"},"Third, we access the value of the ",(0,o.kt)("inlineCode",{parentName:"li"},"window.alert")," property again. Here, we're confirming that the definition of the window's alert method has actually changed, and indeed it has! We receive the code of our new ",(0,o.kt)("inlineCode",{parentName:"li"},"alert()")," function instead of the original definition. ")),(0,o.kt)("p",null,"The same goes for other ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," properties. We can easily overwrite those if we are declaring variables of the same name at the global scope with ",(0,o.kt)("inlineCode",{parentName:"p"},"var"),". This issue can easily be avoided if we stick to using ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"const"),", which is expected in all of your projects."),(0,o.kt)("p",null,"The takeaway here is just to be aware that you can accidentally overwrite ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," properties. "),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In this lesson, we learned more about JavaScript's global scope:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"JavaScript's global scope is represented by a global object that changes based on its execution context. "),(0,o.kt)("li",{parentName:"ul"},"A global object is just an object that is always available and accessible."),(0,o.kt)("li",{parentName:"ul"},"The execution context of our JS code is where we're running the code (for example, in a web browser or in a server)."),(0,o.kt)("li",{parentName:"ul"},"For JavaScript run in the browser, the global object is set to the ",(0,o.kt)("inlineCode",{parentName:"li"},"window")," object."),(0,o.kt)("li",{parentName:"ul"},"All globally scoped built-in or custom JS functions are added to the global object. In our projects, that means these functions are added to the ",(0,o.kt)("inlineCode",{parentName:"li"},"window")," object.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"However, only globally scoped variables declared with ",(0,o.kt)("inlineCode",{parentName:"li"},"var")," are added to the global object."),(0,o.kt)("li",{parentName:"ul"},"We also need to be careful not to accidentally override ",(0,o.kt)("inlineCode",{parentName:"li"},"window")," properties."))),(0,o.kt)("li",{parentName:"ul"},"Because the ",(0,o.kt)("inlineCode",{parentName:"li"},"window")," object is the global object for our JS, we don't have to explicitly reference the ",(0,o.kt)("inlineCode",{parentName:"li"},"window")," object to access its properties. For example, ",(0,o.kt)("inlineCode",{parentName:"li"},"window.document")," can be written just as ",(0,o.kt)("inlineCode",{parentName:"li"},"document"),", and this is the conventional way of doing things.")))}u.isMDXComponent=!0}}]);