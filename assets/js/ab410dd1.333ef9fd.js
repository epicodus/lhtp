"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[37571],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||n;return a?o.createElement(h,l(l({ref:t},c),{},{components:a})):o.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<n;p++)l[p]=a[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},17277:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var o=a(87462),r=(a(67294),a(3905));const n={title:"Spread Operator",id:"spread-operator",slug:"spread-operator",hide_table_of_contents:!0,sidebar_position:25,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0i_spread_operator.md"},l=void 0,s={unversionedId:"react-classic/functional-programming-with-javascript/spread-operator",id:"react-classic/functional-programming-with-javascript/spread-operator",title:"Spread Operator",description:"One of the most popular features of ES6 is the spread operator. Spread syntax looks like this: ....",source:"@site/docs/react-classic/2_functional-programming-with-javascript/0i-spread-operator.md",sourceDirName:"react-classic/2_functional-programming-with-javascript",slug:"/react-classic/functional-programming-with-javascript/spread-operator",permalink:"/react-classic/functional-programming-with-javascript/spread-operator",draft:!1,tags:[],version:"current",sidebarPosition:25,frontMatter:{title:"Spread Operator",id:"spread-operator",slug:"spread-operator",hide_table_of_contents:!0,sidebar_position:25,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0i_spread_operator.md"},sidebar:"react-classic",previous:{title:"The Problems of Classical Inheritance",permalink:"/react-classic/functional-programming-with-javascript/the-problems-of-classical-inheritance"},next:{title:"Composition",permalink:"/react-classic/functional-programming-with-javascript/composition"}},i={},p=[{value:"Copying Objects",id:"copying-objects",level:3},{value:"Merging Objects",id:"merging-objects",level:3},{value:"Object.assign()",id:"objectassign",level:3},{value:"Issues with Copying JavaScript Objects",id:"issues-with-copying-javascript-objects",level:3},{value:"Other Uses for the Spread Operator",id:"other-uses-for-the-spread-operator",level:3},{value:"Conclusion",id:"conclusion",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"One of the most popular features of ES6 is the ",(0,r.kt)("strong",{parentName:"p"},"spread operator"),". Spread syntax looks like this: ",(0,r.kt)("inlineCode",{parentName:"p"},"..."),"."),(0,r.kt)("p",null,"There are multiple uses for the spread operator, but we are going to focus on two use cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Making copies of objects;"),(0,r.kt)("li",{parentName:"ul"},"Merging multiple objects together.")),(0,r.kt)("p",null,"At the end of the lesson, we'll also briefly cover the JavaScript method ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.assign()"),". This method operates in a similar fashion to the spread operator. We'll also cover a few other uses of the spread operator as well."),(0,r.kt)("h3",{id:"copying-objects"},"Copying Objects"),(0,r.kt)("p",null,"Copying objects is a very common thing to do in functional programming. We will dive into that more in an upcoming lesson on creating deep clones."),(0,r.kt)("p",null,"Let's take a look at how we can use the spread operator to copy an object. Try this out in the REPL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const myCat = {\n  name: "Murphy",\n  age: 1\n}\n\nconst anotherCat = {...myCat};\n')),(0,r.kt)("p",null,"If we look at the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"anotherCat"),", we will see that it has the same properties as ",(0,r.kt)("inlineCode",{parentName:"p"},"myCat"),"."),(0,r.kt)("p",null,"Let's say we want to make a copy of ",(0,r.kt)("inlineCode",{parentName:"p"},"myCat")," and also update the ",(0,r.kt)("inlineCode",{parentName:"p"},"age")," property in the new object. We can do this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const myCat = {\n  name: "Murphy",\n  age: 1\n}\n\nconst myCatGotOlder = {...myCat, age: 2}\n')),(0,r.kt)("p",null,"In the example above, we create a new object using the spread operator and then specify which properties should be different. If we try the example in the REPL, the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"myCatGotOlder")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"{ name: 'Murphy', age: 2 }"),"."),(0,r.kt)("p",null,"We can also add new properties to the copy of the object as well \u2014 they don't have to be properties that existed on the object being copied. Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const myCat = {\n  name: "Murphy",\n  age: 1\n}\n\nconst myCatGotOlder2 = {...myCat, age: 2, color: "gray and white"}\n')),(0,r.kt)("p",null,"The value of ",(0,r.kt)("inlineCode",{parentName:"p"},"myCatGotOlder2")," will be ",(0,r.kt)("inlineCode",{parentName:"p"},"{ name: 'Murphy', age: 2, color: 'gray and white' }"),"."),(0,r.kt)("h3",{id:"merging-objects"},"Merging Objects"),(0,r.kt)("p",null,"We can also use the spread operator to merge multiple different objects. Let's take a look at an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const flagColor1 = {\n  color1: "green"\n}\n\nconst flagColor2 = {\n  color2: "gold"\n}\n\nconst flagColor3 = {\n  color3: "black"\n}\n\nconst jamaicanFlag = {...flagColor1, ...flagColor2, ...flagColor3}\n')),(0,r.kt)("p",null,"Now if we check the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"jamaicanFlag"),", we'll see that it is ",(0,r.kt)("inlineCode",{parentName:"p"},'{color1: "green", color2: "gold", color3: "black"}'),". All three objects have been merged into one! Be careful, however. If several objects have the same property, then the last object that has that property will override the previous value. For instance, let's say that all three of the objects above just had a ",(0,r.kt)("inlineCode",{parentName:"p"},"color1")," property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const flagColor1 = {\n  color1: "green"\n}\n\nconst flagColor2 = {\n  color1: "gold"\n}\n\nconst flagColor3 = {\n  color1: "black"\n}\n\nconst jamaicanFlag = {...flagColor1, ...flagColor2, ...flagColor3}\n')),(0,r.kt)("p",null,"Now if we type in ",(0,r.kt)("inlineCode",{parentName:"p"},"jamaicanFlag"),", it will return ",(0,r.kt)("inlineCode",{parentName:"p"},'{color1: "black"}'),"."),(0,r.kt)("h3",{id:"objectassign"},"Object.assign()"),(0,r.kt)("p",null,"The spread operator works very similarly to the JavaScript method ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.assign()"),", which is also used to copy and merge objects. You should be familiar with this method as well \u2014 and you may even prefer to use it over the spread operator."),(0,r.kt)("p",null,"For instance, if we wanted to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"jamaicanFlag")," object using the variables above, we'd do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const jamaicanFlag = Object.assign({}, flagColor1, flagColor2, flagColor3);\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Object.assign()")," can take multiple arguments. The first argument is the object that should be copied or merged. If we wish, we can pass in an empty object ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")," as the first argument, which we do in the example above. Then each additional argument is an object that should be merged into the original. We could've also done the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const jamaicanFlag = Object.assign(flagColor1, flagColor2, flagColor3);\n")),(0,r.kt)("p",null,"In this example, we omit the empty object ",(0,r.kt)("inlineCode",{parentName:"p"},"{}"),". However, it is fairly common to see ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.assign()")," with an empty object as the first argument."),(0,r.kt)("h3",{id:"issues-with-copying-javascript-objects"},"Issues with Copying JavaScript Objects"),(0,r.kt)("p",null,"We want to copy objects in functional programming so our code remains immutable. Each time we modify a variable, we are introducting mutability into our application. Copying objects into other constants ensures that each variable is immutable."),(0,r.kt)("p",null,"There's just one problem: these methods create a ",(0,r.kt)("strong",{parentName:"p"},"shallow clone")," of objects. That means that they don't actually create a new object in memory; they are still referencing the original object. In order for our applications to be truly immutable, we need to create a ",(0,r.kt)("strong",{parentName:"p"},"deep clone")," of objects. Unfortunately, JavaScript doesn't have native support for deep clones. Instead, we need to use an awkward combination of methods or an external library to do that. We will cover this in a future lesson."),(0,r.kt)("h3",{id:"other-uses-for-the-spread-operator"},"Other Uses for the Spread Operator"),(0,r.kt)("p",null,"While we will be focused on the use cases above during this course section, the spread operator is useful in other ways as well. Here are two more things we can do with the spread operator:"),(0,r.kt)("p",null,"We can use it to combine arrays:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const array = [1,2];\nconst array2 = [3,4];\nconst array3 = [...array, ...array2];\narray3\n[1, 2, 3, 4]\n")),(0,r.kt)("p",null,"We can use it to pass arguments into functions. The example below will pass all arguments from the array into the function \u2014 ",(0,r.kt)("strong",{parentName:"p"},"as separate arguments, not as an array"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const array = [1,2,3];\nspreadArgs(...array);\n")),(0,r.kt)("h3",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this lesson, we covered copying and merging objects with both the spread operator and ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.assign()"),". These JavaScript techniques are very important and are also commonly used in React."),(0,r.kt)("p",null,"The spread operator also has other uses as well. Check out Mozilla's ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"},"spread syntax documentation")," for more."))}m.isMDXComponent=!0}}]);