"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[90994],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),h=s,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},36994:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(87462),s=(a(67294),a(3905));const r={title:"ES6 Classes",id:"es6_classes",slug:"es6_classes",hide_table_of_contents:!0,sidebar_position:37,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/2c_es6_classes.md"},i=void 0,o={unversionedId:"intermediate_javascript_classic/test-driven-development-and-environments-with-javascript/es6_classes",id:"intermediate_javascript_classic/test-driven-development-and-environments-with-javascript/es6_classes",title:"ES6 Classes",description:"We've already covered ES6 support for modules, which are implemented with import and export. In this lesson, we'll go over ES6's native support for classes. Classes make JavaScript more accessible and easier to read from an object-oriented (OO) perspective. However, they don't fundamentally change the way JavaScript works.",source:"@site/docs/intermediate_javascript_classic/4_test-driven-development-and-environments-with-javascript/2c_es6_classes.md",sourceDirName:"intermediate_javascript_classic/4_test-driven-development-and-environments-with-javascript",slug:"/intermediate_javascript_classic/test-driven-development-and-environments-with-javascript/es6_classes",permalink:"/intermediate_javascript_classic/test-driven-development-and-environments-with-javascript/es6_classes",draft:!1,tags:[],version:"current",sidebarPosition:37,frontMatter:{title:"ES6 Classes",id:"es6_classes",slug:"es6_classes",hide_table_of_contents:!0,sidebar_position:37,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/2c_es6_classes.md"},sidebar:"intermediate_javascript_classic",previous:{title:"Introduction to ES6",permalink:"/intermediate_javascript_classic/test-driven-development-and-environments-with-javascript/introduction_to_es6"},next:{title:"ES6 Arrow Notation",permalink:"/intermediate_javascript_classic/test-driven-development-and-environments-with-javascript/es6_arrow_notation"}},l={},c=[{value:"<code>class</code> Syntax",id:"class-syntax",level:2},{value:"Inheritance in JavaScript",id:"inheritance-in-javascript",level:2},{value:"Using Variables in ES6 Classes",id:"using-variables-in-es6-classes",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,s.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"We've already covered ES6 support for modules, which are implemented with ",(0,s.kt)("inlineCode",{parentName:"p"},"import")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"export"),". In this lesson, we'll go over ES6's native support for classes. Classes make JavaScript more accessible and easier to read from an object-oriented (OO) perspective. However, they don't fundamentally change the way JavaScript works."),(0,s.kt)("h2",{id:"class-syntax"},(0,s.kt)("inlineCode",{parentName:"h2"},"class")," Syntax"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Classes are a cornerstone of many OO languages, including Ruby, Java, and C#, but JavaScript didn't include support for classes until ES6. A class is used to define an object type. So far, we've used constructor functions to define object types, and added functionality to those objects via prototype methods. Using ",(0,s.kt)("inlineCode",{parentName:"p"},"class")," syntax will do the exact same thing, just with different syntax."),(0,s.kt)("p",null,"Let's look at how we can refactor our ",(0,s.kt)("inlineCode",{parentName:"p"},"Triangle")," object to use ",(0,s.kt)("inlineCode",{parentName:"p"},"class")," syntax. To do this, we'll reference the business logic for ",(0,s.kt)("inlineCode",{parentName:"p"},"triangle.js")," in our Shape Tracker project:"),(0,s.kt)("div",{class:"filename"},"src/triangle.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"function Triangle(side1, side2, side3) {\n  this.side1 = side1;\n  this.side2 = side2;\n  this.side3 = side3;\n}\n\nTriangle.prototype.checkType = function() {\n  ...\n};\n")),(0,s.kt)("p",null,"Here we create a ",(0,s.kt)("inlineCode",{parentName:"p"},"Triangle")," constructor and then a prototype method for that constructor. Let's update this code to use ",(0,s.kt)("inlineCode",{parentName:"p"},"class")," syntax."),(0,s.kt)("div",{class:"filename"},"src/triangle.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"class Triangle {\n  constructor(side1, side2, side3) {\n    this.side1 = side1;\n    this.side2 = side2;\n    this.side3 = side3;\n  }\n\n  checkType() {\n    //Function body goes here.\n  }    \n}\n")),(0,s.kt)("p",null,"Our ",(0,s.kt)("inlineCode",{parentName:"p"},"class Triangle")," now contains both the ",(0,s.kt)("inlineCode",{parentName:"p"},"Triangle")," constructor and all its prototype methods. The ",(0,s.kt)("inlineCode",{parentName:"p"},"Triangle()")," constructor function now uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"constructor()")," function, and we no longer need to specify the object type and ",(0,s.kt)("inlineCode",{parentName:"p"},"prototype")," when we declare the ",(0,s.kt)("inlineCode",{parentName:"p"},"checkType()")," method. "),(0,s.kt)("p",null,"This code looks very similar to how we might construct a class in other OO languages such as Ruby and C#."),(0,s.kt)("p",null,"However, it's important to remember that JavaScript classes are syntactic sugar. ",(0,s.kt)("strong",{parentName:"p"},"Syntactic sugar")," is a term developers use for added functionality in a programming language that makes it easier to write and read."),(0,s.kt)("p",null,"JavaScript classes are syntactic sugar because they don't operate in the same way that classes do in other OO languages such as Ruby. The biggest difference is that JavaScript doesn't directly use ",(0,s.kt)("strong",{parentName:"p"},"classical inheritance")," where classes inherit functionality from other classes. Instead, JavaScript uses what's commonly referred to as ",(0,s.kt)("strong",{parentName:"p"},"prototypal inheritance"),", where object types inherit from other object types through a prototype object."),(0,s.kt)("h2",{id:"inheritance-in-javascript"},"Inheritance in JavaScript"),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Classical inheritance")," simply means that one class inherits from another class. While classical inheritance has its advantages, it has one major disadvantage: when one class inherits from another, it inherits ",(0,s.kt)("em",{parentName:"p"},"everything"),". The coder Joe Armstrong explains this problem with an apt metaphor: "),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"You wanted a banana, but what you got was a gorilla holding the banana and the entire jungle.")),(0,s.kt)("p",null,"With ",(0,s.kt)("strong",{parentName:"p"},"prototypal inheritance"),", objects inherit from other objects through a prototype object. The prototype object is saved in the ",(0,s.kt)("inlineCode",{parentName:"p"},"__proto__")," property on any JavaScript object, and it contains the functionality that it's inheriting from another object. Prototypal inheritance is an advanced topic beyond the scope of this lesson, but what's important in comparison to classical inheritance is that the scope of prototypal inheritance is more limited. In other words, if you want a banana, you'll just get a banana."),(0,s.kt)("p",null,"The new ES6 ",(0,s.kt)("inlineCode",{parentName:"p"},"class")," syntax fakes classical inheritance by building it on top of prototypal inheritance. In other words, we can use this functionality to have one class inherit from another. To draw this connection, we use the ",(0,s.kt)("inlineCode",{parentName:"p"},"extends")," keyword:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"class Shape {\n  ...\n}\n\nclass Triangle extends Shape {\n  ...\n}\n")),(0,s.kt)("p",null,"You won't be expected to create one class that inherits from another for any code review, but you're welcome to explore inheritance further in your multi-day project. "),(0,s.kt)("p",null,"However, you will be expected to use ",(0,s.kt)("inlineCode",{parentName:"p"},"class")," syntax to create object types for the upcoming code review."),(0,s.kt)("h2",{id:"using-variables-in-es6-classes"},"Using Variables in ES6 Classes"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"There is one important thing to note about ES6 ",(0,s.kt)("inlineCode",{parentName:"p"},"class")," syntax. Variables cannot be scoped to the class itself. The following will not work:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"class Triangle {\n  let variableScopedToClass = 0;\n}\n")),(0,s.kt)("p",null,"Scoping a variable inside a class (regardless of whether using ",(0,s.kt)("inlineCode",{parentName:"p"},"var"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"let")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"const"),") will result in the following error: ",(0,s.kt)("inlineCode",{parentName:"p"},"Parsing error: Unexpected token"),". It's not a very helpful error, which is why we mention it here. Students coming from other languages (such as C# or Ruby) may expect that JS will also have class variables, but that is not the case."),(0,s.kt)("p",null,"Instead, variables should always be scoped to methods inside the class (including the constructor). For instance, this is fine:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"class Triangle {\n  \n  constructor() {\n    this.variableScopedToConstructor = 0;\n  }\n\n  checkType() {\n    let variableScopedToMethod = 0;\n  }    \n}\n")),(0,s.kt)("p",null,"The people behind ES6 made a conscious choice not to include class variables. The reasons for this are beyond the scope of this lesson; for now, it's enough to say that class variables simply don't fit JavaScript's prototypal inheritance model. In any case, variables should be scoped as tightly as possible as a best practice, so avoiding class variables (and global variables) is always a good idea."),(0,s.kt)("p",null,"While ES6's implementation of classes is mostly syntactic sugar, utilizing classes can make your code cleaner, more organized, and easier to read!"))}u.isMDXComponent=!0}}]);