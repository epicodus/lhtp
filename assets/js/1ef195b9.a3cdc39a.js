"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[3967],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return t?i.createElement(m,r(r({ref:n},p),{},{components:t})):i.createElement(m,r({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},63022:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=t(87462),o=(t(67294),t(3905));const a={title:"Further Exploration: IIFEs",id:"further_exploration_iifes",slug:"further_exploration_iifes",hide_table_of_contents:!0,sidebar_position:26,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/2d_further_exploration_iifes.md"},r=void 0,s={unversionedId:"intermediate_javascript_classic/asynchrony-and-apis/further_exploration_iifes",id:"intermediate_javascript_classic/asynchrony-and-apis/further_exploration_iifes",title:"Further Exploration: IIFEs",description:"This lesson is optional further exploration. You can skip it entirely if you want. We'll use a more advanced technique called an IIFE to refactor the code we wrote in the last lesson.",source:"@site/docs/intermediate_javascript_classic/5_asynchrony-and-apis/2d_further_exploration_iifes.md",sourceDirName:"intermediate_javascript_classic/5_asynchrony-and-apis",slug:"/intermediate_javascript_classic/asynchrony-and-apis/further_exploration_iifes",permalink:"/intermediate_javascript_classic/asynchrony-and-apis/further_exploration_iifes",draft:!1,tags:[],version:"current",sidebarPosition:26,frontMatter:{title:"Further Exploration: IIFEs",id:"further_exploration_iifes",slug:"further_exploration_iifes",hide_table_of_contents:!0,sidebar_position:26,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/2d_further_exploration_iifes.md"},sidebar:"intermediate_javascript_classic",previous:{title:"Async and Await",permalink:"/intermediate_javascript_classic/asynchrony-and-apis/async_and_await"},next:{title:"Journal #6 Discussion",permalink:"/intermediate_javascript_classic/asynchrony-and-apis/journal_6_discussion"}},l={},c=[{value:"Immediately-Invoked Function Expressions",id:"immediately-invoked-function-expressions",level:2},{value:"IFFE Syntax",id:"iffe-syntax",level:3},{value:"Benefits of IIFEs",id:"benefits-of-iifes",level:3}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This lesson is ",(0,o.kt)("strong",{parentName:"p"},"optional further exploration"),". You can skip it entirely if you want. We'll use a more advanced technique called an IIFE to refactor the code we wrote in the last lesson. "),(0,o.kt)("h2",{id:"immediately-invoked-function-expressions"},"Immediately-Invoked Function Expressions"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"An IIFE is an Immediately-Invoked Function Expression. IIFEs definitely have their use cases (there's more on this below) but they really aren't necessary for beginners or even intermediate developers to know about. However, you may run into them in the wild, so it can be helpful to get some exposure now. "),(0,o.kt)("p",null,"So, to get familiar with how we can use an IIFE, let's turn our async ",(0,o.kt)("inlineCode",{parentName:"p"},"getWeather")," function into an IIFE that's a part of our ",(0,o.kt)("inlineCode",{parentName:"p"},"handleFormSubmission"),". This is what our ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," file will look like:"),(0,o.kt)("div",{class:"filename"},"src/index.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import 'bootstrap';\nimport 'bootstrap/dist/css/bootstrap.min.css';\nimport './css/styles.css';\nimport WeatherService from './weather-service.js';\n\n// UI Logic\n\nfunction handleFormSubmission(event) {\n  event.preventDefault();\n  const city = document.querySelector('#location').value;\n  document.querySelector('#location').value = null;\n  (async function() {\n    const response = await WeatherService.getWeather(city);\n    if (response.main) {\n      printElements(response, city);\n    } else {\n      printError(response, city);\n    }\n  })();  \n}\n\nfunction printElements(response, city) {\n  document.querySelector('#showResponse').innerText = `The humidity in ${city} is ${response.main.humidity}%.\n  The temperature in Kelvins is ${response.main.temp} degrees.`;\n}\n\nfunction printError(error, city) {\n  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${city}: \n  ${error}.`;\n}\n\nwindow.addEventListener(\"load\", function() {\n  document.querySelector('form').addEventListener(\"submit\", handleFormSubmission);\n});\n")),(0,o.kt)("p",null,"As noted, we've removed the ",(0,o.kt)("inlineCode",{parentName:"p"},"getWeather")," function, and now we have an IIFE inside of ",(0,o.kt)("inlineCode",{parentName:"p"},"handleFormSubmission")," that does the same thing as the ",(0,o.kt)("inlineCode",{parentName:"p"},"getWeather")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function handleFormSubmission() {\n  ...\n\n  (async function() {\n    const response = await WeatherService.getWeather(city);\n    if (response.main) {\n      printElements(response, city);\n    } else {\n      printError(response, city);\n    }\n  })();  \n}\n")),(0,o.kt)("h3",{id:"iffe-syntax"},"IFFE Syntax"),(0,o.kt)("p",null,"So what exactly is going on here? And what's with the weird additional parens? Well, that's the syntax for an IIFE \u2014 a function that's immediately invoked. Here's the syntax in a nutshell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Pseudocode example!\n\n(function() {\n  // A function to be invoked immediately.\n})();\n")),(0,o.kt)("p",null,"The key thing here is that we wrap the function itself in ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping"},"grouping parentheses")," and then we also have a closing parens at the end of the IIFE:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The parentheses around the function are so the JavaScript compiler doesn't throw an error. "),(0,o.kt)("li",{parentName:"ul"},"The parens at the end invoke the function just like we'd invoke any named function. ")),(0,o.kt)("p",null,"We can even use a named function for an IIFE:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Pseudocode!\n\n(function thisIsImmediatelyInvoked() {\n  // A function to be invoked immediately.\n})();\n")),(0,o.kt)("h3",{id:"benefits-of-iifes"},"Benefits of IIFEs"),(0,o.kt)("p",null,"Updating our code in ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," to use an IIFE changed the way our code was structured, but it wasn't necessarily an improvement. So, the question remains, why use an IIFE? "),(0,o.kt)("p",null,"Well, the biggest benefit of IIFEs is data privacy. Any variables or data in an IIFE are scoped to it and aren't available elsewhere. If we don't use an IIFE, those variables will be available in other scopes, perhaps even the global scope, which isn't good."),(0,o.kt)("p",null,"Let's quickly demonstrate:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> (function() {\n  const secret = "This is a secret!"\n})();\n> secret;\nVM126:4 Uncaught ReferenceError: secret is not defined\n')),(0,o.kt)("p",null,"If we run this in the DevTools console, we'll get a ",(0,o.kt)("inlineCode",{parentName:"p"},"secret is not defined")," error. As we know, it's very important to scope our code. For instance, think about the projects we did before we implemented JavaScript. We might have something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function doSomething() {\n  // This function will do something.\n}\n\nwindow.onload = function() {\n  doSomething();\n};\n")),(0,o.kt)("p",null,"Well, that ",(0,o.kt)("inlineCode",{parentName:"p"},"doSomething()")," function is available globally \u2014 we could even access it by typing in ",(0,o.kt)("inlineCode",{parentName:"p"},"window.doSomething")," in the DevTools console when we run our project."),(0,o.kt)("p",null,"So traditionally, it was common to use an IIFE to wrap the code in the user interface source code like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"(function() {\n  \n  function doSomething() {\n    // This function will do something.\n  }\n\n  window.onload = function() {\n    doSomething();\n  };\n})();\n")),(0,o.kt)("p",null,"This way, the ",(0,o.kt)("inlineCode",{parentName:"p"},"doSomething()")," function will no longer be in the global scope (or accessible via the ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," object). It would just be available within the scope of the IIFE, which is where we want it."),(0,o.kt)("p",null,"Fortunately, webpack solves this problem for us, too, and doesn't allow code to leak into the global scope, so you won't see an IIFE used in this way with webpack. They can still be a useful tool for scoping code, though, and they can make an async function look a little bit cleaner."),(0,o.kt)("p",null,"The example repository hasn't been updated to include this code because it's optional. However, if you are interested in working with IIFEs, we recommend trying them out when you are writing async functions. For more information on the use cases for IIFEs, ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/IIFE"},"visit the MDN documentation on IIFEs"),"."))}d.isMDXComponent=!0}}]);