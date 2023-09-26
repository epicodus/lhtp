"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[16199],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>u});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(o),d=n,u=h["".concat(l,".").concat(d)]||h[d]||m[d]||r;return o?a.createElement(u,i(i({ref:t},c),{},{components:o})):a.createElement(u,i({ref:t},c))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<r;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},38027:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=o(87462),n=(o(67294),o(3905));const r={title:"The Basics of Prototypes",id:"the-basics-of-prototypes",slug:"the-basics-of-prototypes",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0c_what_is_a_prototype.md"},i=void 0,s={unversionedId:"introduction-to-programming-part-time/arrays-and-looping/the-basics-of-prototypes",id:"introduction-to-programming-part-time/arrays-and-looping/the-basics-of-prototypes",title:"The Basics of Prototypes",description:"When we look at Mozilla's documentation for JavaScript methods, we'll often see the term prototype. We first learned about the term \"prototype\" in the last course section when we learned how to use MDN documentation for JavaScript. Since we'll be learning how to use new methods on JavaScript arrays, now's a good time to review what prototype means.",source:"@site/docs/introduction-to-programming-part-time/5_arrays-and-looping/0c-what-is-a-prototype.md",sourceDirName:"introduction-to-programming-part-time/5_arrays-and-looping",slug:"/introduction-to-programming-part-time/arrays-and-looping/the-basics-of-prototypes",permalink:"/introduction-to-programming-part-time/arrays-and-looping/the-basics-of-prototypes",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"The Basics of Prototypes",id:"the-basics-of-prototypes",slug:"the-basics-of-prototypes",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0c_what_is_a_prototype.md"},sidebar:"introduction-to-programming-part-time",previous:{title:"Additional Pair Programming Tips",permalink:"/introduction-to-programming-part-time/arrays-and-looping/additional-pair-programming-tips"},next:{title:"Static versus Instance with Built-In JS Objects",permalink:"/introduction-to-programming-part-time/arrays-and-looping/static-versus-instance-with-built-in-js-objects"}},l={},p=[{value:"What We Know So Far About Prototypes",id:"what-we-know-so-far-about-prototypes",level:2},{value:"The Basics of Prototypes",id:"the-basics-of-prototypes",level:2},{value:"All Objects Have Access to Prototypes",id:"all-objects-have-access-to-prototypes",level:3},{value:"Examples",id:"examples",level:3},{value:"A Common Error",id:"a-common-error",level:3},{value:"More on MDN",id:"more-on-mdn",level:3}],c={toc:p},h="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(h,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"When we look at Mozilla's documentation for JavaScript methods, we'll often see the term ",(0,n.kt)("strong",{parentName:"p"},"prototype"),'. We first learned about the term "prototype" in the last course section when we learned ',(0,n.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/javascript-and-web-browsers/using-mdn-documentation-for-javascript"},"how to use MDN documentation for JavaScript"),". Since we'll be learning how to use new methods on JavaScript arrays, now's a good time to review what prototype means. "),(0,n.kt)("h2",{id:"what-we-know-so-far-about-prototypes"},"What We Know So Far About Prototypes"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Let's review what we learned in the last course section:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Remember, methods always belong to a specific data type, so it's important for us to always name the data type that a method belongs to, like in the example above. On MDN and elsewhere, the official syntax for the name of any JavaScript method is the following:")),(0,n.kt)("blockquote",null,(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// This is not real code! This is just to highlight the official syntax for naming methods!\ndataType.prototype.methodName()\n"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"What's important about this syntax is that it always includes the data type that the method belongs to. Let's apply this syntax to the string methods we've learned about so far:")),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"String.prototype.toUpperCase()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"String.prototype.toLowerCase()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"String.prototype.concat()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"String.prototype.charAt()")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"And to the number methods we've learned about:")),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Number.prototype.toString()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Number.prototype.toFixed()")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"So what does the term ",(0,n.kt)("inlineCode",{parentName:"p"},"prototype")," mean? For now, all we need to know is when we see ",(0,n.kt)("inlineCode",{parentName:"p"},"prototype")," in the name of a method, it indicates that we're referencing a built-in (JavaScript-created) method that belongs to a specific object type, and any instance of that object type. In other words, we're not actually using (calling) the method \u2014 we're just referencing it by its official name. ")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For example, with ",(0,n.kt)("inlineCode",{parentName:"p"},"String.prototype.concat()"),", we're referencing the ",(0,n.kt)("inlineCode",{parentName:"p"},"concat")," method belonging to strings only. We're also indicating that this exact method belongs to all strings, meaning that ",(0,n.kt)("inlineCode",{parentName:"p"},"String.prototype.concat()")," can be called on any string.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Going forward, we'll use the ",(0,n.kt)("inlineCode",{parentName:"strong"},"dataType.prototype.methodName()")," syntax when we're referencing JavaScript methods in order to clearly indicate which data type the method belongs to.")," ")),(0,n.kt)("p",null,"All of the above remains true, however it doesn't describe what a prototype really is in JavaScript. So, let's discuss exactly that! This will be a general overview \u2014 we'll also cover prototypes in greater depth in the next section on object-oriented JavaScript."),(0,n.kt)("h2",{id:"the-basics-of-prototypes"},"The Basics of Prototypes"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"According to the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes"},"Mozilla documentation on object prototypes"),":"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Prototypes are the mechanism by which JavaScript objects inherit features from one another.")),(0,n.kt)("p",null,"This is really the key thing we need to know for now. Prototypes are just a way for an object to inherit functionality from another object in JavaScript. "),(0,n.kt)("h3",{id:"all-objects-have-access-to-prototypes"},"All Objects Have Access to Prototypes"),(0,n.kt)("p",null,"In the ",(0,n.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/javascript-and-web-browsers/javascript-data-types"},"JavaScript Data Types")," lesson in the last section, we discussed how everything is either a primitive or an object. We've worked with just about all of the primitive types (other than symbols and bigint), including strings, numbers, and booleans. Since everything that isn't a primitive is an object, that means things like functions (and arrays!) are also a type of object. "),(0,n.kt)("p",null,"We also learned that JavaScript implicitly turns certain primitives into objects. Why? In order to give them more complex functionality, including the ability to have properties and methods. The ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Primitive#primitive_wrapper_objects_in_javascript"},'"Primitive" reference page')," on MDN describes this:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Except for ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined"),", all primitive values have object equivalents that wrap around the primitive values.")),(0,n.kt)("p",null,"You don't ever need to worry about understanding JavaScript's process of creating wrapper objects since it's fairly esoteric, but the point here is just to clarify that we work with objects all of the time in JavaScript, and these objects all have access to prototypes, the mechanism that allows objects to inherit functionality from another object."),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Prototypes is still an abstract concept, so let's look at examples to better understand prototypes. Let's use the DevTools console to create three different strings:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'> const myName = "Remy";\n> const myFavFlower = "Petunias";\n> const myFavColor = "Green";\n')),(0,n.kt)("p",null,"Now let's call the ",(0,n.kt)("inlineCode",{parentName:"p"},"String.prototype.toUpperCase()")," method on each of these strings:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'> myName.toUpperCase();\n"REMY"\n> myFavFlower.toUpperCase();\n"PETUNIAS"\n> myFavColor.toUpperCase();\n"GREEN"\n')),(0,n.kt)("p",null,"As we may expect, all of our strings have been uppercased. So what's so special about this? Well, we can call ",(0,n.kt)("inlineCode",{parentName:"p"},"toUpperCase")," on any (and every) string thanks to prototypes. "),(0,n.kt)("p",null,"A better question to ask is: how does each string know how to uppercase itself? Well, they have to be taught somehow. Just as a baby inherits certain traits when it is born, JavaScript objects inherit methods and properties when they are created. They do so through ",(0,n.kt)("strong",{parentName:"p"},"prototypal inheritance"),", a concept that can be confusing even to more experienced developers. For that reason, it's not necessary to dig into it too deeply right now."),(0,n.kt)("p",null,"The big advantage of this naming convention for methods is that we can clearly distinguish which object a method belongs to. This allows for multiple methods of the same name to exist in JavaScript. Be careful, though! Even though two methods share the same name ",(0,n.kt)("inlineCode",{parentName:"p"},"concat"),", they are not the same!"),(0,n.kt)("p",null,"For instance, if we look up JavaScript's ",(0,n.kt)("inlineCode",{parentName:"p"},"concat")," method on MDN, we'll actually discover that there are two different ",(0,n.kt)("inlineCode",{parentName:"p"},"concat")," methods:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat"},(0,n.kt)("inlineCode",{parentName:"a"},"String.prototype.concat()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat"},(0,n.kt)("inlineCode",{parentName:"a"},"Array.prototype.concat()")))),(0,n.kt)("p",null,"When we refer to ",(0,n.kt)("inlineCode",{parentName:"p"},"String.prototype.concat()"),", we are referring to a ",(0,n.kt)("inlineCode",{parentName:"p"},"concat()")," method that all strings inherit. When we say ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.concat()"),", we are referring to a ",(0,n.kt)("inlineCode",{parentName:"p"},"concat()")," method that all arrays inherit. Even though these methods have the same name, they are actually different methods. Sure, they do essentially the same thing: they put things together. When called on strings, they put two strings together. When called on arrays, they put two arrays together. However, we can only call one on strings and the other on arrays. Fortunately our browser's JavaScript interpreter sorts this all out for us! We just need to do our best to make sure that we're calling the right method on the right object."),(0,n.kt)("p",null,"So let's reiterate what we do need to know. We'll see ",(0,n.kt)("inlineCode",{parentName:"p"},"prototype")," in a JS method name when we are looking at documentation, like ",(0,n.kt)("inlineCode",{parentName:"p"},"String.prototype.concat()"),". We'll also continue to use this same syntax when naming JS methods in the curriculum, which will help us differentiate methods that have the same name. When we see a method like ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.concat()")," this indicates to us that the ",(0,n.kt)("inlineCode",{parentName:"p"},"concat")," method in question can be applied to any and all arrays. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Web APIs, like ",(0,n.kt)("inlineCode",{parentName:"p"},"document"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Element"),", and others also use prototypal inheritance, but we don't need to worry about that now. Methods belonging to Web API objects don't follow the naming convention ",(0,n.kt)("inlineCode",{parentName:"p"},"dataType.prototype.methodName()")," where ",(0,n.kt)("inlineCode",{parentName:"p"},"dataType")," is the name of the object and ",(0,n.kt)("inlineCode",{parentName:"p"},"methodName")," is the name of the method. As an example, we ",(0,n.kt)("strong",{parentName:"p"},"do not")," list the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute"},(0,n.kt)("inlineCode",{parentName:"a"},"Element.removeAttribute()"))," method as ",(0,n.kt)("inlineCode",{parentName:"p"},"Element.prototype.removeAttribute()"),"."),(0,n.kt)("h3",{id:"a-common-error"},"A Common Error"),(0,n.kt)("p",null,"Check out the following image that shows a common error message:s ",(0,n.kt)("inlineCode",{parentName:"p"},"Uncaught TypeError: {name of method in code} is not a function"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week3-branching-looping-arrays/error-method-does-not-exist.png",alt:'This image shows the error in response to entering `"Red".join(" and Blue.")` into the DevTools console.'})),(0,n.kt)("p",null,"If you get a ",(0,n.kt)("inlineCode",{parentName:"p"},"TypeError")," error message similar to the above example, this usually means the object you are calling the method on doesn't have a definition for that method. In other words, you've called a method that doesn't exist for that object type. In the example, I've called the ",(0,n.kt)("inlineCode",{parentName:"p"},"join")," method on a string, but this method actually belongs to arrays: ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.join()"),".  "),(0,n.kt)("h3",{id:"more-on-mdn"},"More on MDN"),(0,n.kt)("p",null,"If you ",(0,n.kt)("em",{parentName:"p"},"really")," have to look into prototypal inheritance more to get a grasp on all of this, see the Mozilla documentation on ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes"},"Object prototypes"),". This is an advanced topic \u2014 and at this point, we recommend steering clear of it. Many experienced developers find it confusing, too."))}m.isMDXComponent=!0}}]);