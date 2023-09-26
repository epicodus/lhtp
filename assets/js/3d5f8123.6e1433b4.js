"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[1226],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),h=r,f=p["".concat(s,".").concat(h)]||p[h]||m[h]||o;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},43013:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=t(87462),r=(t(67294),t(3905));const o={title:"Closures",id:"closures",slug:"closures",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0f_closures.md"},i=void 0,l={unversionedId:"react-part-time/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/closures",id:"react-part-time/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/closures",title:"Closures",description:"In this lesson, we'll cover another concept central to functional programming: closures.",source:"@site/docs/react-part-time/2_functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/0f-closures.md",sourceDirName:"react-part-time/2_functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78",slug:"/react-part-time/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/closures",permalink:"/react-part-time/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/closures",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Closures",id:"closures",slug:"closures",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0f_closures.md"},sidebar:"react-part-time",previous:{title:"First Class Citizens",permalink:"/react-part-time/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/first-class-citizens"},next:{title:"Currying",permalink:"/react-part-time/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/currying"}},s={},u=[{value:"Closures",id:"closures",level:2}],c={toc:u},p="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this lesson, we'll cover another concept central to functional programming: ",(0,r.kt)("strong",{parentName:"p"},"closures"),"."),(0,r.kt)("p",null,"Closures are a challenging concept at first. However, understanding what they are and how they work is essential to your development as a coder."),(0,r.kt)("p",null,'In fact, closures are so important that prominent JavaScript developer and author Eric Elliott describes the concept as the "$40,000 question." According to Elliott, if a potential employee can\'t answer questions about closures, it could cost them 40k in salary \u2014 or even the job. Check out his post on ',(0,r.kt)("a",{parentName:"p",href:"https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36"},"closures")," for more."),(0,r.kt)("h2",{id:"closures"},"Closures"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"A closure is an inner function that has access to variables from an outer function. In JavaScript, closures are created every time a function is created, at function creation time."),(0,r.kt)("p",null,"Here's an example. We'll create a ",(0,r.kt)("inlineCode",{parentName:"p"},"welcome()")," function with a custom salutation and name. Try putting this example in the console."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function welcome(salutation) {\n  return function(yourName) {\n    return `${salutation}! Nice to meet you, ${yourName}!`\n  }\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"welcome()")," function is the outer function. It takes an argument (a specific salutation) and then returns an anonymous inner function. The inner function also takes an argument: ",(0,r.kt)("inlineCode",{parentName:"p"},"yourName"),"."),(0,r.kt)("p",null,"When the anonymous inner function is called, it will return a string that includes both the ",(0,r.kt)("inlineCode",{parentName:"p"},"salutation")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"yourName"),". In other words, the inner function has access both to the variable declared inside it (",(0,r.kt)("inlineCode",{parentName:"p"},"yourName"),") and the one declared in the outer function (",(0,r.kt)("inlineCode",{parentName:"p"},"salutation"),")."),(0,r.kt)("p",null,"We've now created a closure, but how do we use it? We need to assign it to a variable so it can be used elsewhere:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const heyThere = welcome("Hey there");\n')),(0,r.kt)("p",null,"So what exactly is happening here? We're calling ",(0,r.kt)("inlineCode",{parentName:"p"},'welcome("Hey there");')," and ",(0,r.kt)("em",{parentName:"p"},"returning")," the inner function, which is stored inside the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"heyThere"),". We can see this by checking the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"heyThere")," in the console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function(yourName) {\n  return `${salutation}! Nice to meet you, ${yourName}!`\n}\n")),(0,r.kt)("p",null,"The return value of the outer function is the inner function. In other words, the ",(0,r.kt)("inlineCode",{parentName:"p"},"heyThere")," variable is just ",(0,r.kt)("em",{parentName:"p"},"referencing")," the outer function. To actually call the inner function, we need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"()"),". So let's call the ",(0,r.kt)("inlineCode",{parentName:"p"},"heyThere")," function in the console and see what happens:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'> heyThere()\n"Hey there! Nice to meet you, undefined!"\n')),(0,r.kt)("p",null,"Let's set aside the ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," for a moment. The key takeaway here is that the inner function still has access to ",(0,r.kt)("inlineCode",{parentName:"p"},"salutation"),", which was declared in the outer function. The variable ",(0,r.kt)("inlineCode",{parentName:"p"},"yourName")," is still ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," because the inner function takes ",(0,r.kt)("inlineCode",{parentName:"p"},"yourName")," as an argument, so we need to pass it in."),(0,r.kt)("p",null,"We can pass in a value for ",(0,r.kt)("inlineCode",{parentName:"p"},"yourName")," by passing in an arugment to the ",(0,r.kt)("inlineCode",{parentName:"p"},"heyThere")," function, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> heyThere("Joe")\n"Hey there! Nice to meet you, Joe!"\n')),(0,r.kt)("p",null,"This may not seem very useful, but our original function is very flexible. We can use it with other greetings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'> const spanishGreeting = welcome("Buenos d\xedas!");\n> spanishGreeting("Joe");\n"Buenos d\xedas! Nice to meet you, Joe!"\n')),(0,r.kt)("p",null,"This reusability is a large part of what makes closures so powerful. We will explore this further when we discuss currying in the next lesson."),(0,r.kt)("p",null,"As we can see in the examples above, our inner function has access to variables in both the inner and outer function. Even after the outer function has been called, the inner function continues to have this access. This is where the term closure comes from: the ability of the function to ",(0,r.kt)("em",{parentName:"p"},"close over")," the variables, keeping them in the function's scope. In many languages (C being an example), variables are destroyed as soon as the outer function is completed. As a result, these languages can't use this powerful functionality."),(0,r.kt)("p",null,"Let's look at one more example of a closure. This time, we will create a function that we can reuse to multiply a number by different values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const multiplier = (numberToMultiplyBy) => {\n  return (numberToMultiply) => {\n    return numberToMultiplyBy * numberToMultiply;\n  }\n}\n")),(0,r.kt)("p",null,"Now we can do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const doubler = multiplier(2);\nconst tripler = multiplier(3);\nconst quadrupler = multiplier(4);\n")),(0,r.kt)("p",null,"Once again, let's go into how this works. With ",(0,r.kt)("inlineCode",{parentName:"p"},"doubler"),", we pass in ",(0,r.kt)("inlineCode",{parentName:"p"},"multiplier(2)"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"doubler")," variable now stores a function that looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"(numberToMultiply) => {\n  return 2 * numberToMultiply;\n}\n")),(0,r.kt)("p",null,"You can check this out for yourself in the console. This works because the inner function retains the value of the argument passed into the outer function \u2014 which in turn is stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"doubler")," variable. This inner function will be invoked when we call ",(0,r.kt)("inlineCode",{parentName:"p"},"doubler()"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tripler")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"quadrupler")," work in exactly the same way. The difference is that we are passing in a different argument to the outer function, which is being stored in the inner function."),(0,r.kt)("p",null,"So ",(0,r.kt)("inlineCode",{parentName:"p"},"tripler")," stores the following information: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"(numberToMultiply) => {\n  return 3 * numberToMultiply;\n}\n")),(0,r.kt)("p",null,"Meanwhile, ",(0,r.kt)("inlineCode",{parentName:"p"},"quadrupler")," looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"(numberToMultiply) => {\n  return 4 * numberToMultiply;\n}\n")),(0,r.kt)("p",null,"Closures can be a very confusing concept at first. However, we've actually used closures before. Consider this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function howManyEvenNumbers(userInputArray) {\n  let instances = 0;\n  userInputArray.forEach(function(element) {\n    if (element % 2 === 0) { \n      instances++; // we have access to `instances` thanks to closures\n    }\n  });\n  return instances;\n}\n\nhowManyEvenNumbers([2,3,4,5,6,7]);\n// returns 3\n")),(0,r.kt)("p",null,"The callback passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," is an example of a closure. The inner, anonymous callback function has access to the variables declared in the outer function, ",(0,r.kt)("inlineCode",{parentName:"p"},"howManyEvenNumbers()"),"."),(0,r.kt)("p",null,"If you do get asked about closures in an interview, remember to mention that callbacks are an example of an inner function having access to an outer function's scope. However, not all callbacks are examples of closures. Consider this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const myLogger = () => { \n  console.log(myNum) // we're hoping that `myNum` will be defined\n}\n\nconst myCounter = (functionParam) => {\n   const myNum = 1;\n   functionParam(); // not a closure! Just a callback\n}\n\nmyCounter(myLogger);\n// error! myNum is undefined \n")),(0,r.kt)("p",null,"In this case, since ",(0,r.kt)("inlineCode",{parentName:"p"},"myLogger()")," was not defined inside of ",(0,r.kt)("inlineCode",{parentName:"p"},"myCounter()"),", it doesn't have access to any of the variables declared in ",(0,r.kt)("inlineCode",{parentName:"p"},"myCounter()"),"."),(0,r.kt)("p",null,"Ultimately, closures are a powerful technique in both functional programming and programming in general. In the next lesson, we will see how we can combine closures with currying to create reusable, modular code and ",(0,r.kt)("strong",{parentName:"p"},"function factories"),", which are essentially functions we can use to churn out many other helpful functions."),(0,r.kt)("p",null,"Closures are also commonly used for enclosing private data, a use case we won't be exploring in depth. To learn more, see the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"},"Mozilla documentation on closures"),"."),(0,r.kt)("p",null,"By the way, if you still don't understand closures after reading this lesson, don't worry. We will get more practice working with them over upcoming lessons. This is also one of those concepts that usually doesn't click at first \u2014 there's a reason that this is one of the things that separates junior and midlevel developers!"))}m.isMDXComponent=!0}}]);