"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[18702],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=i,y=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(y,r(r({ref:t},p),{},{components:n})):a.createElement(y,r({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},87987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const o={title:"Async and Await",id:"async-and-await",slug:"async-and-await",hide_table_of_contents:!0,sidebar_position:27,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/2c_async_and_await.md"},r=void 0,s={unversionedId:"intermediate-javascript-part-time/asynchrony-and-apis/async-and-await",id:"intermediate-javascript-part-time/asynchrony-and-apis/async-and-await",title:"Async and Await",description:"In this lesson, we'll cover async functions, a relatively new JavaScript feature that was added in ES 2017. (Remember that ES6 is ECMAScript 2015.) While you aren't required to use async functions for the independent project, they are a really useful piece of JavaScript functionality and definitely a tool you should know about and be familiar with.",source:"@site/docs/intermediate-javascript-part-time/7_asynchrony-and-apis/2c-async-and-await.md",sourceDirName:"intermediate-javascript-part-time/7_asynchrony-and-apis",slug:"/intermediate-javascript-part-time/asynchrony-and-apis/async-and-await",permalink:"/intermediate-javascript-part-time/asynchrony-and-apis/async-and-await",draft:!1,tags:[],version:"current",sidebarPosition:27,frontMatter:{title:"Async and Await",id:"async-and-await",slug:"async-and-await",hide_table_of_contents:!0,sidebar_position:27,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/2c_async_and_await.md"},sidebar:"intermediate-javascript-part-time",previous:{title:"Fetch API",permalink:"/intermediate-javascript-part-time/asynchrony-and-apis/fetch-api"},next:{title:"Further Exploration: IIFEs",permalink:"/intermediate-javascript-part-time/asynchrony-and-apis/further-exploration-iifes"}},c={},l=[{value:"<code>async</code> Functions",id:"async-functions",level:2},{value:"<code>async</code> and <code>await</code>",id:"async-and-await",level:3},{value:"Adding <code>async</code> and <code>await</code> to our OpenWeather API Project",id:"adding-async-and-await-to-our-openweather-api-project",level:3}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this lesson, we'll cover async functions, a relatively new JavaScript feature that was added in ES 2017. (Remember that ES6 is ECMAScript 2015.) While you aren't required to use async functions for the independent project, they are a really useful piece of JavaScript functionality and definitely a tool you should know about and be familiar with."),(0,i.kt)("p",null,"An async function allows us to write asynchronous code as if it were synchronous. This can make our code more concise. And while promises go very well with API calls, there are plenty of other situations where using async functions will handle asynchronous operations better than a promise will. For example, if we wanted to do a series of five or six things in a row, many but not all of them async, code with promises would be very verbose while async functions would be easier to read and reason about."),(0,i.kt)("p",null,"In fact, even the code from the last lesson chains together two async operations. Throw another API call into the mix that also uses ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch()")," and we are talking about four async operations in a row when we consider the streaming data as well. It's very feasible that we'd do a few synchronous things in between(such as parsing data from the first API call)."),(0,i.kt)("h2",{id:"async-functions"},(0,i.kt)("inlineCode",{parentName:"h2"},"async")," Functions"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Before we update our weather API project to use async functions, let's take a look at an example. We can create an async function with the ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," keyword. Try the following code in the console:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'> async function thisIsAsync() { return "This is async"; }\n> thisIsAsync();\nPromise\xa0{<resolved>: "This is async"}\n')),(0,i.kt)("p",null,"All we did here is add the ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," keyword to a basic function that returns a string. When we call the function, it returns a resolved promise. As this example shows, async functions are using promises under the hood, too!"),(0,i.kt)("h3",{id:"async-and-await"},(0,i.kt)("inlineCode",{parentName:"h3"},"async")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"await")),(0,i.kt)("p",null,"The real power of async functions lies with the ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," keyword. When ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," is used within an async function, our code will stop executing until the line of code that includes ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," is completed. Let's take a look at an example in the context of an API call that uses ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'async function makeApiCall() {\n  const response = await fetch("http://some-api-call.com");\n  const jsonifiedResponse = await response.json();\n  return jsonifiedResponse;\n}\n')),(0,i.kt)("p",null,"We start by adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," keyword to our ",(0,i.kt)("inlineCode",{parentName:"p"},"makeApiCall()")," function. Now we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," keyword as needed inside of the async function to wait for asynchronous actions to complete. "),(0,i.kt)("p",null,"Note that we can't use the ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," keyword outside of an ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," function. If we try to, we'll get the following error: ",(0,i.kt)("inlineCode",{parentName:"p"},"Uncaught SyntaxError: await is only valid in async function"),"."),(0,i.kt)("p",null,"Next, we set the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"response")," variable to be equal to the response of the API call. If we did this without the ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," keyword, ",(0,i.kt)("inlineCode",{parentName:"p"},"response")," would be undefined. That's because the variable is assigned before the async ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch()")," call is complete. "),(0,i.kt)("p",null,"Once we add the ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," keyword, though, the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"response")," won't be assigned until the ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch()")," call is resolved."),(0,i.kt)("p",null,"We also need to ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," the completion of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Response.json()")," method because it's an async operation, too. Once that's done, we're ready to return the final ",(0,i.kt)("inlineCode",{parentName:"p"},"jsonifiedResponse"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," keyword has given us the ability to write asynchronous code as if it were synchronous. This results in very concise code that is easy to read and understand."),(0,i.kt)("h3",{id:"adding-async-and-await-to-our-openweather-api-project"},"Adding ",(0,i.kt)("inlineCode",{parentName:"h3"},"async")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"await")," to our OpenWeather API Project"),(0,i.kt)("p",null,"Now that we've looked at a basic example, let's update our weather application to use ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"await"),"."),(0,i.kt)("p",null,"We'll start by updating our service logic:"),(0,i.kt)("div",{class:"filename"},"src/weather-service.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default class WeatherService {  \n  static async getWeather(city) {\n    try {\n      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);\n      const jsonifiedResponse = await response.json();\n      if (!response.ok) {\n        const errorMessage = `${response.status} ${response.statusText}\n        ${jsonifiedResponse.message}`;\n        throw new Error(errorMessage);\n      }\n      return jsonifiedResponse;\n    } catch(error) {\n      return error;\n    }\n  }\n}\n")),(0,i.kt)("p",null,"First, we update our static ",(0,i.kt)("inlineCode",{parentName:"p"},"getWeather")," method to be async. Next, we need to wrap our code in a ",(0,i.kt)("inlineCode",{parentName:"p"},"try...catch")," block. We use a ",(0,i.kt)("inlineCode",{parentName:"p"},"try...catch")," block to handle errors, because ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," functions don't have the capability of resolving or rejecting the promise it uses under the hood. "),(0,i.kt)("p",null,"Inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"try")," block, we'll make our API call with ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch()")," and then use the ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," keyword to wait for the API call to complete. Then we call ",(0,i.kt)("inlineCode",{parentName:"p"},"reponse.json()"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," this action. We do this next so that we can use the API response for weather data and for its error messages. The rest of the service code has only minor changes to variable names \u2014 we still throw an error if the ",(0,i.kt)("inlineCode",{parentName:"p"},"response")," property isn't ",(0,i.kt)("inlineCode",{parentName:"p"},"ok"),", and if the response property is ",(0,i.kt)("inlineCode",{parentName:"p"},"ok"),', we return the "jsonified" response.'),(0,i.kt)("p",null,"Next, let's take a look at our user interface logic:"),(0,i.kt)("div",{class:"filename"},"src/index.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import 'bootstrap';\nimport 'bootstrap/dist/css/bootstrap.min.css';\nimport './css/styles.css';\nimport WeatherService from './weather-service.js';\n\n// Business Logic\n\nasync function getWeather(city) {\n  const response = await WeatherService.getWeather(city);\n  if (response.main) {\n    printElements(response, city);\n  } else {\n    printError(response, city);\n  }\n}\n\n// UI Logic\n\nfunction printElements(response, city) {\n  document.querySelector('#showResponse').innerText = `The humidity in ${city} is ${response.main.humidity}%.\n  The temperature in Kelvins is ${response.main.temp} degrees.`;\n}\n\nfunction printError(error, city) {\n  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${city}: \n  ${error}.`;\n}\n\nfunction handleFormSubmission(event) {\n  event.preventDefault();\n  const city = document.querySelector('#location').value;\n  document.querySelector('#location').value = null;\n  getWeather(city);\n}\n\nwindow.addEventListener(\"load\", function() {\n  document.querySelector('form').addEventListener(\"submit\", handleFormSubmission);\n});\n")),(0,i.kt)("p",null,"All of the updates we've made are within the ",(0,i.kt)("inlineCode",{parentName:"p"},"getWeather")," function. Now this function is ",(0,i.kt)("inlineCode",{parentName:"p"},"async"),", and inside we ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," the response of the API call."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"async function getWeather(city) {\n  const response = await WeatherService.getWeather(city);\n  if (response.main) {\n    printElements(response, city);\n  } else {\n    printError(response, city);\n  }\n}\n")),(0,i.kt)("p",null,"Then, instead of using ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then()"),", we directly run the ",(0,i.kt)("inlineCode",{parentName:"p"},"response")," variable through a conditional to determine whether to print the weather data or print an error message."),(0,i.kt)("p",null,"And that's it!"),(0,i.kt)("p",null,"Async functions can be a concise and elegant way to write code. However, it's important to think carefully about the code we put inside async functions. We are essentially forcing any code inside an async function to run synchronously. That means any asynchronous actions will block the flow of code until it is complete. If we put too much code inside an async function, we risk overriding JavaScript's non-blocking capabilities, potentially making our code more inefficient. That's not an issue in the code above but it would be if we wrapped our entire application in an async function."),(0,i.kt)("p",null,"You are welcome (but not required) to use async functions for this section's independent project. You are also encouraged to practice writing async functions during the classwork. However, make sure you have a clear understanding of promises first. After all, async functions use promises under the hood. "),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-6-js-api-call-with-webpack/tree/5_fetch_with_async_await"},(0,i.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for API Project with ",(0,i.kt)("inlineCode",{parentName:"a"},"fetch()")))),(0,i.kt)("p",null,"The above link takes you to the branch called ",(0,i.kt)("inlineCode",{parentName:"p"},"5_fetch_with_async_await"),"."))}u.isMDXComponent=!0}}]);