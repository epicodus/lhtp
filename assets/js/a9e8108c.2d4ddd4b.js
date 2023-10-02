"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[3667],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},35939:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const i={title:"Another Look at JavaScript Objects",id:"another-look-at-javascript-objects",slug:"another-look-at-javascript-objects",hide_table_of_contents:!0,sidebar_position:24,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0u_javascript_objects.md"},r=void 0,s={unversionedId:"introduction-to-programming-part-time/javascript-and-web-browsers/another-look-at-javascript-objects",id:"introduction-to-programming-part-time/javascript-and-web-browsers/another-look-at-javascript-objects",title:"Another Look at JavaScript Objects",description:"Let's take another look at JavaScript objects. Doing so will help us better understand JavaScript primitives and methods. This review will also help us understand how powerful objects are as a data structure, both in JavaScript and in the web browser tools we will begin to use soon, and prime us to use built-in objects. The goal of this lesson is to simply understand how important objects are.",source:"@site/docs/introduction-to-programming-part-time/3_javascript-and-web-browsers/0u-javascript-objects.md",sourceDirName:"introduction-to-programming-part-time/3_javascript-and-web-browsers",slug:"/introduction-to-programming-part-time/javascript-and-web-browsers/another-look-at-javascript-objects",permalink:"/introduction-to-programming-part-time/javascript-and-web-browsers/another-look-at-javascript-objects",draft:!1,tags:[],version:"current",sidebarPosition:24,frontMatter:{title:"Another Look at JavaScript Objects",id:"another-look-at-javascript-objects",slug:"another-look-at-javascript-objects",hide_table_of_contents:!0,sidebar_position:24,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0u_javascript_objects.md"},sidebar:"introduction-to-programming-part-time",previous:{title:"Data Types: Detection, Conversion, and Review",permalink:"/introduction-to-programming-part-time/javascript-and-web-browsers/data-types-detection-conversion-and-review"},next:{title:"Review of JavaScript Conventions",permalink:"/introduction-to-programming-part-time/javascript-and-web-browsers/review-of-javascript-conventions"}},l={},c=[{value:"Another Look at Objects",id:"another-look-at-objects",level:2},{value:"Comparing Primitives and Objects",id:"comparing-primitives-and-objects",level:3},{value:"JavaScript Object Syntax",id:"javascript-object-syntax",level:3},{value:"The Benefits of Using Objects",id:"the-benefits-of-using-objects",level:3},{value:"JavaScript Turns (Some) Primitives into Objects",id:"javascript-turns-some-primitives-into-objects",level:3},{value:"Documentation on Built-In Objects",id:"documentation-on-built-in-objects",level:3},{value:"Summary",id:"summary",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Let's take another look at JavaScript objects. Doing so will help us better understand JavaScript primitives and methods. This review will also help us understand how powerful objects are as a data structure, both in JavaScript and in the web browser tools we will begin to use soon, and prime us to use built-in objects. The goal of this lesson is to simply understand how important objects are."),(0,o.kt)("p",null,"Note that this lesson will show you how to create an object, but only as a demonstration of the structure of objects and their properties. You will never be required to create your own objects in your code until we get to the course section dedicated to object-oriented JavaScript. "),(0,o.kt)("h2",{id:"another-look-at-objects"},"Another Look at Objects"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"When ",(0,o.kt)("a",{parentName:"p",href:"https://new.learnhowtoprogram.com/introduction-to-programming/javascript-and-web-browsers/javascript-data-types"},"we first talked about objects")," we introduced these as containers for related data, data that can be ",(0,o.kt)("em",{parentName:"p"},"any")," JavaScript data type. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In JavaScript, we use objects to represent things and concepts \u2014 like animals, political parties, and computers. A JavaScript ",(0,o.kt)("strong",{parentName:"p"},"object")," is simply a container for related data. We can describe an object by listing its data and functionality, the same as describing a computer by listing its features and what it can do.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"More generally speaking, this definition of an object is true across computer programming languages. As we'll learn later in this section, our web browsers use objects to represent things like the browser window and the webpages that we create with HTML and CSS. ")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"JavaScript objects can hold multiple types of data and they can be assigned many different types of functionality. The data describes what an object is, and the functionality describes what an object can do. This is in contrast to JavaScript primitives which only represent one piece and type of data. Also, primitives don't ",(0,o.kt)("em",{parentName:"p"},"do")," anything, meaning we can't give them actions to perform. ")),(0,o.kt)("p",null,"We also used a few examples to understand objects. Let's revisit the cat example. In this example we explained that a cat can be described by listing its features and what it can do. We learned that this information is exactly what we would include in the object representation of the cat: data about its features and functionality to perform actions. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Let's consider another example object: a cat. We can describe what a cat is by itemizing different aspects about it. A cat has:")),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"eyes and other organs"),(0,o.kt)("li",{parentName:"ul"},"colors in its coat"),(0,o.kt)("li",{parentName:"ul"},"a name"),(0,o.kt)("li",{parentName:"ul"},"a personality"),(0,o.kt)("li",{parentName:"ul"},"age"),(0,o.kt)("li",{parentName:"ul"},"favorite activities"),(0,o.kt)("li",{parentName:"ul"},"perhaps a family and friends?"),(0,o.kt)("li",{parentName:"ul"},"how about enemies or prey?"))),(0,o.kt)("p",null,"A cat object's data can also describe what a cat can do:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"And what can a cat do? A cat can:")),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"purr"),(0,o.kt)("li",{parentName:"ul"},"scratch up the furniture"),(0,o.kt)("li",{parentName:"ul"},"eat"),(0,o.kt)("li",{parentName:"ul"},"meow"),(0,o.kt)("li",{parentName:"ul"},"hunt"),(0,o.kt)("li",{parentName:"ul"},"jump, and certainly more!"))),(0,o.kt)("p",null,"To describe a cat's colors, name, age, etc., we use JavaScript primitives: numbers, strings, booleans, and more. To describe what a cat can do, we use methods (because methods are a type of function that belongs to a specific data type, including objects)."),(0,o.kt)("p",null,"Even though we have not seen a JavaScript object written in code, we should be able to tell that objects are really powerful tools in JavaScript that bundle related data in one package. "),(0,o.kt)("h3",{id:"comparing-primitives-and-objects"},"Comparing Primitives and Objects"),(0,o.kt)("p",null,"It's helpful to compare JavaScript objects with JavaScript primitives. Notably, JavaScript primitives can only represent a single type and piece of data. JavaScript primitives can't do anything, and they can't contain multiple data types. A primitive can only represent the singular primitive type that it is, like a string, a number, or a boolean."),(0,o.kt)("p",null,"Conversely, JavaScript objects can hold many pieces of data of many different data types. We can also give objects functionality, called methods. Together, these pieces of data describe the object: what it is and what it can do."),(0,o.kt)("h3",{id:"javascript-object-syntax"},"JavaScript Object Syntax"),(0,o.kt)("p",null,"To make the distinctions between JavaScript primitives and objects clear, let's look at a coded example of an object. Before we dive into it, remember that we'll be covering objects in depth in a dedicated course section. That means there's a lot to learn about objects, and right now, we're only covering the basics. The goal of showing you a coded object is to make the conceptual more concrete. Note that you do not have to try out the following examples in the browser DevTools console, but you can if you want to. "),(0,o.kt)("p",null,"It's also helpful to have a reminder here that you don't need to know everything about how JavaScript works in order to use JavaScript. In this section, we won't create or use custom JavaScript objects, but we will be interacting with built-in objects a lot!"),(0,o.kt)("p",null,"So, here's our cat, in object form, with some different data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let cat = {\n  name: "Waffles", \n  age: 13,\n  likesTunaFish: true,\n  likesComputerProgramming: false,\n  talk: function() {\n    return "meow!";\n  }\n}\n')),(0,o.kt)("p",null,'In the object above, our cat\'s name is "Waffles" and its age is 13. Waffles the cat likes tuna fish, but does not like to program computers. Waffles can also talk, saying "meow!". '),(0,o.kt)("p",null,"Here's a look at object syntax in pseudocode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// this is pseudocode!\nlet nameOfObjectType = { \n  propertyName: value,\n  secondPropertyName: otherValue,\n  thirdPropertyName: yetAnotherValue\n}\n")),(0,o.kt)("p",null,"Let's use the pseudocode syntax above to break down the parts of our cat object. Compare it to the code snippet below. Here, we create a variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"cat")," and use the assignment operator ",(0,o.kt)("inlineCode",{parentName:"p"},"=")," to set the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"cat")," variable equal to an object. The object is denoted by the curly brackets ",(0,o.kt)("inlineCode",{parentName:"p"},"{ }"),". All of the ",(0,o.kt)("inlineCode",{parentName:"p"},"cat")," object's data is defined within the two curly brackets ",(0,o.kt)("inlineCode",{parentName:"p"},"{ }"),". We're naming our object ",(0,o.kt)("inlineCode",{parentName:"p"},"cat"),", because we want to create an object type that represents a cat."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let cat = {\n  // all data about our object goes here.\n}\n")),(0,o.kt)("p",null,"The cat's data is defined through ",(0,o.kt)("strong",{parentName:"p"},"properties")," and ",(0,o.kt)("strong",{parentName:"p"},"values"),". A property is a variable that belongs to an object. We define a property and its value with this syntax: ",(0,o.kt)("inlineCode",{parentName:"p"},"propertyName: value"),". Because of this, ",(0,o.kt)("strong",{parentName:"p"},"JavaScript objects are defined as a collection of properties"),". Let's look at the first property of our cat object to understand this new syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'name: "Waffles"\n')),(0,o.kt)("p",null,"Here we have a property called ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," that's set to a value of ",(0,o.kt)("inlineCode",{parentName:"p"},'"Waffles"'),", of the string type. This property of our cat object is describing our cat's name which is Waffles.  "),(0,o.kt)("p",null,"In our cat object we have 5 properties: ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"age"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"likesTunaFish"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"likeComputerProgramming"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"talk"),". All of these properties describe different features of our cat, and they are all assigned values of different data types: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'name: "Waffles",                 // "name" property is a string\nage: 13,                         // "age" property is a number \nlikesTunaFish: true,             // "likesTunaFish" property is a boolean\nlikesComputerProgramming: false, // "likesComputerProgramming" property is a boolean\ntalk: function() {               // "talk" property is a method\n  return "meow!";\n}\n')),(0,o.kt)("p",null,"Note ",(0,o.kt)("inlineCode",{parentName:"p"},"talk")," is a method of the cat object, and not a function. The function declaration syntax ",(0,o.kt)("inlineCode",{parentName:"p"},"function() { }")," is used to create methods. We know ",(0,o.kt)("inlineCode",{parentName:"p"},"talk")," is a method in this context because it belongs to the ",(0,o.kt)("inlineCode",{parentName:"p"},"cat")," object, and doesn't exist outside of it. Remember, methods always belong to some data type, which includes objects. Don't worry if this distinction is not clear \u2014 we will practice with this more soon!"),(0,o.kt)("p",null,"Here's how we interact with our cat object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> cat.name;\n"Waffles"\n> cat.likesTunaFish;\ntrue\n> cat.talk();\n"meow!"\n')),(0,o.kt)("p",null,"When we write ",(0,o.kt)("inlineCode",{parentName:"p"},"cat.name"),", we're telling JavaScript to look in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cat")," object and access the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," property and return the value ",(0,o.kt)("inlineCode",{parentName:"p"},'"Waffles"'),". When we write ",(0,o.kt)("inlineCode",{parentName:"p"},"cat.name"),", we're using ",(0,o.kt)("strong",{parentName:"p"},"dot notation")," to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"cat")," object, by including a dot ",(0,o.kt)("inlineCode",{parentName:"p"},".")," after the name of the object."),(0,o.kt)("p",null,"For ",(0,o.kt)("inlineCode",{parentName:"p"},"cat.talk()"),", this can be a bit more confusing for folks who are new to JavaScript. What we're doing here is asking JavaScript to look in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cat")," object and access the ",(0,o.kt)("inlineCode",{parentName:"p"},"talk")," property; since the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"talk")," is set to a function that means we can call on it. So, we add parentheses to call ",(0,o.kt)("inlineCode",{parentName:"p"},"cat.talk()")," and execute the functionality. Note, ",(0,o.kt)("inlineCode",{parentName:"p"},"talk")," is a method of the cat object, and not a function. We can't call ",(0,o.kt)("inlineCode",{parentName:"p"},"talk()")," on its own, we always have to call it on the cat object, like ",(0,o.kt)("inlineCode",{parentName:"p"},"cat.talk()"),". This is just like calling a string method on a string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> "Hello, Waffles!".toUpperCase();\n"HELLO, WAFFLES!"\n')),(0,o.kt)("p",null,"If anything we've covered so far doesn't make complete sense, that's okay. The goal of reviewing JavaScript object syntax is to make our conceptual discussion about JavaScript objects more concrete. We don't actually need to understand how to use objects right now. However, you should understand these takeaways: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Objects represent things and concepts, like cats, grocery bags, and shopping carts. "),(0,o.kt)("li",{parentName:"ul"},"Objects bundle separate pieces of data into one package."),(0,o.kt)("li",{parentName:"ul"},"Data is separated and saved into properties that have values; this is why objects are considered to be collections of properties."),(0,o.kt)("li",{parentName:"ul"},"Objects can hold many pieces of data of any data type."),(0,o.kt)("li",{parentName:"ul"},"Objects describe both what something is and what it can do.")),(0,o.kt)("h3",{id:"the-benefits-of-using-objects"},"The Benefits of Using Objects"),(0,o.kt)("p",null,"It's worth considering how else we could represent our cat and all of its data. Given what we know about JavaScript, the best option for us is a string:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"\"The cat's name is 'Waffles'. The cat's age is 13. The cat likes tuna fish. The cat does not like to program computers. The cat says 'meow!'.\"")," "),(0,o.kt)("p",null,"However, when we use a string to describe all of this data, we are more limited. For example, if we needed to change Waffle's age because of a recent birthday, we'd have to rewrite our entire string:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"\"The cat's name is 'Waffles'. The cat's age is 14. The cat likes tuna fish. The cat does not like to program computers. The cat says 'meow!'.\"")," "),(0,o.kt)("p",null,"When we itemize our cat into many different data types in one cat object, we're packaging related data in one bundle, but we're maintaining the flexibility to work with different data types. This is the power of objects in action."),(0,o.kt)("p",null,"If we want to update Waffles's age, we could do the following (if you try this, you need to input the original cat object in your console):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> cat.age += 1;\n> cat.age;\n14\n")),(0,o.kt)("p",null,"Or if we want to make a string that introduces Waffles, we could do this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> "The cat\'s name is \'" + cat.name + "\'. The cat\'s age is " + cat.age.toString() + ".";\n')),(0,o.kt)("h3",{id:"javascript-turns-some-primitives-into-objects"},"JavaScript Turns (Some) Primitives into Objects"),(0,o.kt)("p",null,"Because objects are so powerful, JavaScript actually turns some primitives into objects. Why? In order to give them more complex functionality. Let's read a section from the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Primitive#primitive_wrapper_objects_in_javascript"},'"Primitive" reference page on MDN')," that describes this:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Except for ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),", all primitive values have object equivalents that wrap around the primitive values:")),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"String")," for the string primitive."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Number")," for the number primitive."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BigInt")," for the bigint primitive."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Boolean")," for the boolean primitive."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Symbol")," for the symbol primitive."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The wrapper's valueOf() method returns the primitive value.")),(0,o.kt)("p",null,"To understand this, let's use the string primitive as an example. What this means is that every time we write a string like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> "hello world"\n"hello world"\n')),(0,o.kt)("p",null,"Behind-the-scenes, JavaScript turns the string into an object, and not just any object, but a ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," object that represents strings only. There's no indication of JavaScript turning primitives into objects, it just happens. Also, the primitive value of the string doesn't disappear, it becomes a part of the object! If we want to access the primitive value of the string, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"valueOf")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> "hello world".valueOf();\n"hello world"\n')),(0,o.kt)("p",null,"However, this method is not particularly useful to us. JavaScript does use that method internally, but that's not important to know about now."),(0,o.kt)("p",null,"Do you remember when we said that JavaScript primitives can't have functionality like methods? This means that primitives can't ",(0,o.kt)("em",{parentName:"p"},"do")," anything, they just exist as the primitive they represent, like the number ",(0,o.kt)("inlineCode",{parentName:"p"},"4")," or the boolean ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". Thanks to JavaScript turning (some) primitives into objects, JavaScript can assign them functionality like built-in methods. This is why we can call methods on strings:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> "Methods belong to objects".toUpperCase();\n"METHODS BELONG TO OBJECTS"\n')),(0,o.kt)("p",null,"Now, do you remember when we discussed that methods always belong to some data type? By this we mean that ",(0,o.kt)("inlineCode",{parentName:"p"},"String.prototype.toUpperCase()")," belongs to strings only, and ",(0,o.kt)("inlineCode",{parentName:"p"},"Number.prototype.toFixed()")," belongs to numbers only. Well it's more accurate to say that ",(0,o.kt)("strong",{parentName:"p"},"methods always belong to some object type"),". This is because primitives can't have functionality like methods. MDN really drives this home on its glossary page for ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Primitive"},"Primitives"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods. ")),(0,o.kt)("h3",{id:"documentation-on-built-in-objects"},"Documentation on Built-In Objects"),(0,o.kt)("p",null,"MDN has excellent documentation on all built-in JavaScript objects. In the coming sections, we'll learn about new objects, including their features and methods."),(0,o.kt)("p",null,"For now, take a look at the MDN page on Standard Built-In Objects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("span",{class:"glyphicon glyphicon-link"})," ",(0,o.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects"},"Standard built-in objects")))),(0,o.kt)("p",null,"MDN has organized these objects into different categories. Don't worry about understanding everything that's on the page, but scroll through the page and find these objects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'String \u2014 categorized as "text processing"'),(0,o.kt)("li",{parentName:"ul"},'Number \u2014 categorized as "numbers and dates"'),(0,o.kt)("li",{parentName:"ul"},'Boolean \u2014 categorized as "fundamental objects"')),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In this lesson, we learned that objects are more complex and powerful than primitives. Like we saw in the cat object example: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Objects are containers that hold one or more pieces of related data."),(0,o.kt)("li",{parentName:"ul"},"The data is saved in properties. "),(0,o.kt)("li",{parentName:"ul"},"The data can be of any data type. ")),(0,o.kt)("p",null,"Conversely, primitives can only represent a singular piece of data and type."),(0,o.kt)("p",null,"We also learned that primitives don't have methods. Instead, methods belong to objects. We always have to call the method on the object it belongs to. In other words, when a function belongs to an object, we call it a method."),(0,o.kt)("p",null,"JavaScript strings, numbers, and booleans are implicitly turned into objects when we use them. JavaScript does this so that it can give these data types more complex and built-in functionality, like methods. This is also why we are able to call built-in methods on strings, numbers, and booleans \u2014 it's because they are primitives that have been turned into objects!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Going forward, we won't worry about distinguishing between the primitive or the object of data types like strings, booleans, and numbers. It's not important.")," However, knowing the difference between primitives and objects helps us better understand how JavaScript is structured and how to use MDN documentation. "),(0,o.kt)("p",null,"Finally, it's worth reiterating that we don't need to remember how to create an object! Instead we want to know what objects are and what they can do. Soon, we'll learn about more built-in objects and how to make use of them in our code."))}d.isMDXComponent=!0}}]);