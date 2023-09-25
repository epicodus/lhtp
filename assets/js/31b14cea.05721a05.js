"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[5353],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=o,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return a?n.createElement(m,r(r({ref:t},h),{},{components:a})):n.createElement(m,r({ref:t},h))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6069:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const i={title:"4. The Problems of Classical Inheritance",id:"the_problems_of_classical_inheritance",slug:"the_problems_of_classical_inheritance",hide_table_of_contents:!0,sidebar_position:24,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2_functional-programming-with-javascript/0h_the_problems_of_classical_inheritance.md"},r=void 0,s={unversionedId:"react/functional-programming-with-javascript/the_problems_of_classical_inheritance",id:"react/functional-programming-with-javascript/the_problems_of_classical_inheritance",title:"4. The Problems of Classical Inheritance",description:"In Intermediate JavaScript, we learned about the concept of inheritance. We explored this concept further in both Ruby/Rails and C#/.NET. A quick refresher: inheritance is when a child object gains the functionality of a parent object. In the case of classical inheritance, that functionality is passed down through classes. For instance, objects from a Cat class could inherit from a Mammal class and so on. In the case of JavaScript, that functionality is passed down via prototypal inheritance, though we have the syntactic sugar of classes with ES6.",source:"@site/docs/react/2_functional-programming-with-javascript/0h_the_problems_of_classical_inheritance.md",sourceDirName:"react/2_functional-programming-with-javascript",slug:"/react/functional-programming-with-javascript/the_problems_of_classical_inheritance",permalink:"/lhtp/react/functional-programming-with-javascript/the_problems_of_classical_inheritance",draft:!1,tags:[],version:"current",sidebarPosition:24,frontMatter:{title:"4. The Problems of Classical Inheritance",id:"the_problems_of_classical_inheritance",slug:"the_problems_of_classical_inheritance",hide_table_of_contents:!0,sidebar_position:24,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2_functional-programming-with-javascript/0h_the_problems_of_classical_inheritance.md"},sidebar:"react",previous:{title:"3. Whiteboard Practice: Recursion",permalink:"/lhtp/react/functional-programming-with-javascript/whiteboard_practice_recursion"},next:{title:"5. Spread Operator",permalink:"/lhtp/react/functional-programming-with-javascript/spread_operator"}},l={},c=[],h={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In Intermediate JavaScript, we learned about the concept of ",(0,o.kt)("strong",{parentName:"p"},"inheritance"),". We explored this concept further in both Ruby/Rails and C#/.NET. A quick refresher: inheritance is when a child object gains the functionality of a parent object. In the case of classical inheritance, that functionality is passed down through classes. For instance, objects from a ",(0,o.kt)("inlineCode",{parentName:"p"},"Cat")," class could inherit from a ",(0,o.kt)("inlineCode",{parentName:"p"},"Mammal")," class and so on. In the case of JavaScript, that functionality is passed down via prototypal inheritance, though we have the syntactic sugar of classes with ES6."),(0,o.kt)("p",null,"There are some issues with inheritance, however. One big issue is that it doesn't always make sense for an object to inherit all the functionality of another kind of object. This is more of an issue with classical inheritance, since prototypal inheritance can be targeted to individual objects and not just classes. As our codebases get more complex, we could end up in a situation where we're stuck giving objects all kinds of functionality that they don't need \u2014 and some of that unneeded functionality could lead to bugs as well as code that's hard to understand. Joe Armstrong, the creator of the functional language Erlang, has the perfect quote for this issue: \"You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.\""),(0,o.kt)("p",null,"There are several other issues with classical inheritance. Imagine you're building an application that characterizes the behavior of various mammals. For that reason, you decide to start with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Mammal")," class and to add various methods that should presumably apply to all mammals. As your application begins to grow, however, not all the methods apply to all of the mammals inheriting from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Mammal")," class. After all, there's a lot of variance in the animal kingdom \u2014 and by the time you need to add a ",(0,o.kt)("inlineCode",{parentName:"p"},"Platypus")," class, the entire application is in desperate need of a refactor. If only the ",(0,o.kt)("inlineCode",{parentName:"p"},"Reptile")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Bird")," classes allow for egg-laying methods, how would that method be incorporated into ",(0,o.kt)("inlineCode",{parentName:"p"},"Platypus"),"? Not only is a ",(0,o.kt)("inlineCode",{parentName:"p"},"Platypus")," neither type of animal, but it's already inheriting from another class, anyway."),(0,o.kt)("p",null,"The problem here is that classical inheritance forces us to add functionality up front that may cause us problems further down the road. We should always aim to make our code as flexible as possible. After all, we never know what our application will need as it gets bigger and scales up. Unfortunately, classical inheritance isn't very flexible."),(0,o.kt)("p",null,"This is because inheritance ",(0,o.kt)("strong",{parentName:"p"},"tightly couples")," classes and their objects. A piece of code is tightly coupled to another piece of code when they are reliant on each other for functionality. That means if something breaks or needs to be changed in one piece of the code, it will likely also break or need to be changed in another piece of code. This becomes increasingly problematic as an application gets larger and more and more things become reliant on a single piece of code."),(0,o.kt)("p",null,"For that reason, we should always endeavor to keep our code ",(0,o.kt)("strong",{parentName:"p"},"loosely coupled"),". Loosely coupled code isn't overly reliant on another piece of code to work. While two pieces of code may be related, they can work independently of each other. Pure functions are a good example of this \u2014 they take a value and return a value and don't really care about the rest of the application."),(0,o.kt)("p",null,"We'll discuss functional solutions to the problem of classical inheritance soon. While you should know what classical inheritance is and how to use it, it's also important to be aware that it can cause problems because it results in tightly coupled, less flexible code."))}u.isMDXComponent=!0}}]);