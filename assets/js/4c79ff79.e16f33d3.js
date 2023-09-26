"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[20903],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,u=d["".concat(l,".").concat(m)]||d[m]||h[m]||r;return a?n.createElement(u,s(s({ref:t},p),{},{components:a})):n.createElement(u,s({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},72566:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={title:"Static Methods and Properties",id:"static-methods-and-properties",slug:"static-methods-and-properties",hide_table_of_contents:!0,sidebar_position:20,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1e_static_methods_and_properties.md"},s=void 0,i={unversionedId:"intermediate-javascript-classic/asynchrony-and-apis/static-methods-and-properties",id:"intermediate-javascript-classic/asynchrony-and-apis/static-methods-and-properties",title:"Static Methods and Properties",description:"All of the custom methods we've written up to this point have been instance methods. In this lesson, we'll learn how to write a static method which can be called directly on an object type. We'll also learn how to create static properties.",source:"@site/docs/intermediate-javascript-classic/5_asynchrony-and-apis/1e-static-methods-and-properties.md",sourceDirName:"intermediate-javascript-classic/5_asynchrony-and-apis",slug:"/intermediate-javascript-classic/asynchrony-and-apis/static-methods-and-properties",permalink:"/intermediate-javascript-classic/asynchrony-and-apis/static-methods-and-properties",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Static Methods and Properties",id:"static-methods-and-properties",slug:"static-methods-and-properties",hide_table_of_contents:!0,sidebar_position:20,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1e_static_methods_and_properties.md"},sidebar:"intermediate-javascript-classic",previous:{title:"Promises with API Calls",permalink:"/intermediate-javascript-classic/asynchrony-and-apis/promises-with-api-calls"},next:{title:"Separating Promise Logic",permalink:"/intermediate-javascript-classic/asynchrony-and-apis/separating-promise-logic"}},l={},c=[{value:"Writing a Static Method",id:"writing-a-static-method",level:2},{value:"Static Properties",id:"static-properties",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All of the custom methods we've written up to this point have been ",(0,o.kt)("strong",{parentName:"p"},"instance methods"),". In this lesson, we'll learn how to write a ",(0,o.kt)("strong",{parentName:"p"},"static method")," which can be called directly on an object type. We'll also learn how to create ",(0,o.kt)("strong",{parentName:"p"},"static properties"),"."),(0,o.kt)("p",null,'Before proceeding, keep in mind that "object type" and "class" are interchangeable terms in JavaScript. Also, in many languages "static methods" are also called "class methods". All that said, always keep in mind that JavaScript only uses classes as syntactic sugar, which sits on top of the original object-creation syntax, using object literals, constructor functions, and prototype methods.'),(0,o.kt)("p",null,'We have already been introduced to the concepts of instance and static, both in lessons and via the instance and static methods we have implemented in our code, however we\'ll still review exactly what "instance" and "static" means, and work through some examples.'),(0,o.kt)("h2",{id:"writing-a-static-method"},"Writing a Static Method"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We'll use a ",(0,o.kt)("inlineCode",{parentName:"p"},"Car")," class to demonstrate how to write a static method. Here is what is in our class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'class Car {\n  constructor(make, model) {\n    this.make = make, \n    this.model = model\n  }\n\n  drive() {\n    return "Vvrrrooooom!"\n  }\n}\n')),(0,o.kt)("p",null,"First, let's take a look at an example of an instance method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const car = new Car("pontiac", "aztec");\ncar.drive();\n"Vvrrrooooom!"\n')),(0,o.kt)("p",null,"We first have to create an instance of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Car")," before we can drive it. Because the method is called on a single instance of a car (and not all cars), it is an ",(0,o.kt)("strong",{parentName:"p"},"instance")," method."),(0,o.kt)("p",null,"A static method, on the other hand, is called on the class itself. What if we wanted to sort a factory full of cars by color? Well, we can't call that on one car. We need to call it on ",(0,o.kt)("em",{parentName:"p"},"all")," of the cars, which means we'd need a static method. We can define a static method in a class like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class Car {\n  ...\n\n  static sort(color) {\n    // Code for method here.\n  }\n}\n")),(0,o.kt)("p",null,"As we can see, all we need to do is add the ",(0,o.kt)("inlineCode",{parentName:"p"},"static")," keyword."),(0,o.kt)("p",null,"Then, when we want to call the method, we can call it directly on the class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'Car.sort("red");\n')),(0,o.kt)("p",null,"C#/.NET and Ruby/Rails students will learn a lot more about instance versus static/class methods in their backend courses."),(0,o.kt)("p",null,"But what do static methods have to do with the code we are writing to make API calls? Well, it would be nice to encapsulate our API logic in its own ES6 class. ",(0,o.kt)("strong",{parentName:"p"},"Encapsulation")," is the process of storing information inside a class to keep it separate from other logic in our application. It helps us keep our code more modular and organized. That means we can make our code better by creating a class to hold our API logic. "),(0,o.kt)("p",null,"However, it doesn't make much sense to have an instance of the class before we make our API call. It's not just extra code \u2014 there's just no need to create an instance instead of just calling our method on the class itself. This will become apparent when we refactor our code in the next lesson."),(0,o.kt)("p",null,"By the way, you've already worked with static methods, even if you haven't realized it. For instance, whenever you call a",(0,o.kt)("inlineCode",{parentName:"p"},"Math")," class method, you are using a static method. In fact, the code we used to generate a random number a few lessons ago uses two static methods: ",(0,o.kt)("inlineCode",{parentName:"p"},"Math.random()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Math.floor()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Math.floor(Math.random() * Math.floor(2));\n")),(0,o.kt)("p",null,"Also, the code we use to parse an API's response is a static method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON")," object type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"JSON.parse(apiResponse);\n")),(0,o.kt)("p",null,"We also briefly discussed the ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise.all()")," method a few lessons ago \u2014 this is also a static method. A key thing to note about documentation regarding static methods is that they don't use the ",(0,o.kt)("inlineCode",{parentName:"p"},"prototype")," keyword so it would be incorrect to say ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise.prototype.all()"),". Static methods aren't automatically inherited, unlike prototypal methods. (However, we can use ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"extends")," keyword")," to ensure that static methods are inherited but that's beyond the scope of this lesson.)"),(0,o.kt)("h2",{id:"static-properties"},"Static Properties"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We can also have static properties as well. That just means that we attach properties to the class itself, not an instance of the class. For instance, we could do something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'Car.colors = ["red", "green", "blue"];\n')),(0,o.kt)("p",null,"The class itself now has a ",(0,o.kt)("inlineCode",{parentName:"p"},"colors")," property with a list of all the colors a car might be. "),(0,o.kt)("p",null,"If we wanted to declare the ",(0,o.kt)("inlineCode",{parentName:"p"},"colors")," property in our class, we'd also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"static")," keyword:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'class Car {\n  constructor(make, model) {\n    this.make = make, \n    this.model = model\n  }\n\n  static colors = ["red", "green", "blue"];\n\n  drive() {\n    return "Vvrrrooooom!"\n  }\n}\n')),(0,o.kt)("p",null,"You probably won't need to use ",(0,o.kt)("strong",{parentName:"p"},"static properties")," in any of your projects (and they aren't required for any independent projects), but it's still good to know they exist. You will, however, be required to use a ",(0,o.kt)("strong",{parentName:"p"},"static method")," for this section's independent project."))}h.isMDXComponent=!0}}]);