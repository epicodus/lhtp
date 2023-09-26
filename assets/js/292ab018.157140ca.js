"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[24459],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Fetch API",id:"fetch-api",slug:"fetch-api",hide_table_of_contents:!0,sidebar_position:24,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/2b_using_fetch.md"},s=void 0,i={unversionedId:"intermediate-javascript-classic/asynchrony-and-apis/fetch-api",id:"intermediate-javascript-classic/asynchrony-and-apis/fetch-api",title:"Fetch API",description:"Now that we have experience creating and using XMLHttpRequest objects to make API calls, let's simplify our code even further. While XMLHttpRequest objects get the job done, there are other methods that use XMLHttpRequest objects under the hood while making our lives easier as developers.",source:"@site/docs/intermediate-javascript-classic/5_asynchrony-and-apis/2b-using-fetch.md",sourceDirName:"intermediate-javascript-classic/5_asynchrony-and-apis",slug:"/intermediate-javascript-classic/asynchrony-and-apis/fetch-api",permalink:"/intermediate-javascript-classic/asynchrony-and-apis/fetch-api",draft:!1,tags:[],version:"current",sidebarPosition:24,frontMatter:{title:"Fetch API",id:"fetch-api",slug:"fetch-api",hide_table_of_contents:!0,sidebar_position:24,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/2b_using_fetch.md"},sidebar:"intermediate-javascript-classic",previous:{title:"SOP and CORS",permalink:"/intermediate-javascript-classic/asynchrony-and-apis/sop-and-cors"},next:{title:"Async and Await",permalink:"/intermediate-javascript-classic/asynchrony-and-apis/async-and-await"}},l={},p=[{value:"Using the Fetch API",id:"using-the-fetch-api",level:2},{value:"Adding <code>fetch()</code> to our OpenWeather API Project",id:"adding-fetch-to-our-openweather-api-project",level:3},{value:"Error Handling",id:"error-handling",level:3},{value:"Handling a Successful Fetch",id:"handling-a-successful-fetch",level:3},{value:"Updating <code>index.js</code>",id:"updating-indexjs",level:3},{value:"Returning More Complex Error Data",id:"returning-more-complex-error-data",level:3},{value:"Indentation and Spacing for Promises",id:"indentation-and-spacing-for-promises",level:3},{value:"Final Thoughts",id:"final-thoughts",level:2}],c={toc:p},h="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now that we have experience creating and using ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," objects to make API calls, let's simplify our code even further. While ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," objects get the job done, there are other methods that use ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," objects under the hood while making our lives easier as developers."),(0,a.kt)("p",null,"In this lesson, we'll focus on ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"the Fetch API"),", a Web API that will allow us to make a basic API call with a single line of code. "),(0,a.kt)("p",null,"Note that the Fetch API is called an API because it provides a simple interface we can use in our applications. Remember, that's all an API is: an application programming interface. It is ",(0,a.kt)("em",{parentName:"p"},"not")," called the Fetch API because it is used to make API calls."),(0,a.kt)("p",null,"Before we get into the details of the Fetch API, we should pause and remind ourselves of a few best practices. Now that we're using a new tool to make API calls, we'll also be using new properties and methods to handle errors and process the API response that won't be the same as with the ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object. This lesson is meant to familiarize you with these new features. However, you should be sure to do your part to use breakpoints, the ",(0,a.kt)("em",{parentName:"p"},"Network")," tab, or Postman to examine the response objects that are returned, and double check your error handling by actually causing errors! Remember to try out these three test cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A bogus input to cause a 404 Not Found"),(0,a.kt)("li",{parentName:"ul"},"A bad API key to get a 401 Unauthorized"),(0,a.kt)("li",{parentName:"ul"},"A bad API request URL to cause a 400 Bad Request")),(0,a.kt)("h2",{id:"using-the-fetch-api"},"Using the Fetch API"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Here's a basic GET request to the OpenWeather API with ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);\n")),(0,a.kt)("p",null,"That's it. "),(0,a.kt)("p",null,"What's special about the ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()")," method is that it returns a promise. In other words, we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()")," instead of manually creating both promises and ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," objects. That is very cool!"),(0,a.kt)("p",null,"Because the ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()")," method returns a promise, we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then()")," to handle the response. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);\n  .then(function(response) {\n    console.log(respones);\n  });\n")),(0,a.kt)("p",null,"This is so much easier, though there will be a bit of a tradeoff when it comes to handling the response."),(0,a.kt)("h3",{id:"adding-fetch-to-our-openweather-api-project"},"Adding ",(0,a.kt)("inlineCode",{parentName:"h3"},"fetch()")," to our OpenWeather API Project"),(0,a.kt)("p",null,"We'll learn how to use the Fetch API by adding it to our OpenWeather API project. Then at the end of the lesson, we'll share the completed code."),(0,a.kt)("p",null,"Let's start by updating our ",(0,a.kt)("inlineCode",{parentName:"p"},"weather-service.js")," file:"),(0,a.kt)("div",{class:"filename"},"src/weather-service.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default class WeatherService {  \n  static getWeather(city) {\n    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`)\n      .then(function(response) {\n        if (!response.ok) {\n          const errorMessage = `${response.status} ${response.statusText}`;\n          throw new Error(errorMessage);\n        } else {\n          return response.json();\n        }\n      })      \n      .catch(function(error) {\n        return error;\n      });\n  }\n}\n")),(0,a.kt)("p",null,"Remember that our function needs to return a promise. Since ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()")," itself returns a promise, we can just return that with the first line ",(0,a.kt)("inlineCode",{parentName:"p"},"return fetch(...);"),"."),(0,a.kt)("p",null,"That's the easy part. "),(0,a.kt)("h3",{id:"error-handling"},"Error Handling"),(0,a.kt)("p",null,"However, there's a bit of a tradeoff when handling the ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()")," response. ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()")," almost never rejects a promise. There has to be a network error, like no internet connection, for the promise to be rejected. That's not very helpful for us, because we need some kind of error handling if the response is not 200 OK. When we used a promise without ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()"),", we were able to reject responses that weren't 200 OK, but now we can't do that without taking some extra steps."),(0,a.kt)("p",null,"For that reason, we're updating our API call logic to include throwing an Error, and catching it! When we throw an error, any ",(0,a.kt)("inlineCode",{parentName:"p"},".catch()")," block will be triggered, and this will in turn trigger a rejection. Here's the code that throws the error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"if (!response.ok) {\n  const errorMessage = `${response.status} ${response.statusText}`;\n  throw new Error(errorMessage);\n}\n")),(0,a.kt)("p",null,"Fortunately, the response object that ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()")," returns includes an ",(0,a.kt)("inlineCode",{parentName:"p"},"ok")," property that we can use to determine whether the API call was successful or not. While the Fetch API uses an ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object under the hood, they don't contain all of the same properties. We highly recommend adding a breakpoint to inspect the fetch ",(0,a.kt)("inlineCode",{parentName:"p"},"response")," object."),(0,a.kt)("p",null,"If the API call has a 200 level status, the ",(0,a.kt)("inlineCode",{parentName:"p"},"ok")," property will be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". If it doesn't, it will be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". So if ",(0,a.kt)("inlineCode",{parentName:"p"},"!response.ok"),", our code will throw an error."),(0,a.kt)("p",null,"We create a custom error message using the fetch response object's ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"statusText")," properties. These two properties are the exact same as the ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest.status")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest.statusText")," properties. Then, we pass our custom error message as the argument to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," constructor."),(0,a.kt)("p",null,"Whenever an error is thrown, control immediately goes to the catch block, just like with ",(0,a.kt)("inlineCode",{parentName:"p"},"try...catch")," blocks. In our catch block, we'll simply return the ",(0,a.kt)("inlineCode",{parentName:"p"},"error"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},".catch(function(error) {\n  return error;\n});\n")),(0,a.kt)("p",null,"Here, the ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," parameter and returned value represents the error object we created earlier:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const errorMessage = `${response.status} ${response.statusText}`;\nthrow new Error(errorMessage);\n")),(0,a.kt)("p",null,"The error object is automatically passed to the catch block when we throw the error."),(0,a.kt)("p",null,"Then, when we return the ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," in our catch block:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},".catch(function(error) {\n  return error;\n});\n")),(0,a.kt)("p",null,"this value becomes available in ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js"),". We'll review the new code in ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," after we talk about the code that handles resolving the fetch request successfully. "),(0,a.kt)("p",null,"Note that it's generally a good idea to include the ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.prototype.catch()")," method when we are working with promises for the purpose of error handling. Even if we don't manually throw an error in our application, it's possible that our code will throw an error anyway, especially if there's a typo or something is broken. You can always return an ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," object from a promise in the exact fashion we use above \u2014 as long as you write code to handle it as well. We'll be covering that in a moment."),(0,a.kt)("h3",{id:"handling-a-successful-fetch"},"Handling a Successful Fetch"),(0,a.kt)("p",null,"We handle a successful API call in the ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," block:"),(0,a.kt)("div",{class:"filename"},"src/weather-service.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`)\n  .then(function(response) {\n    if (!response.ok) {\n      const errorMessage = `${response.status} ${response.statusText}`;\n      throw new Error(errorMessage);\n    } else {\n      return response.json();\n    }\n  })   \n  .catch(....)\n")),(0,a.kt)("p",null,"Specifically, we call ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Response/json"},"the method ",(0,a.kt)("inlineCode",{parentName:"a"},"Response.json()")),". This code is new, and specific to the Fetch API. Let's break this down. "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fetch()")," returns a promise in the form of ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Response"},"a ",(0,a.kt)("inlineCode",{parentName:"a"},"Response")," object"),". It's this ",(0,a.kt)("inlineCode",{parentName:"p"},"Response")," object that contains the properties ",(0,a.kt)("inlineCode",{parentName:"p"},"ok"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"status"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"statusText"),", as well as methods like ",(0,a.kt)("inlineCode",{parentName:"p"},".json()"),". "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Response.json()")," specifically parses the response to JSON. We can't use ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON.parse()")," here, because the API response data is a stream that our code must read and convert to JSON. A stream of data is data that's broken into many small pieces that are processed individually. To learn more about streams, visit ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Streams_API"},"this documentation on MDN"),"."),(0,a.kt)("p",null,"So, when we call ",(0,a.kt)("inlineCode",{parentName:"p"},"response.json()"),", it's processing data that is streaming and being retrieved ",(0,a.kt)("em",{parentName:"p"},"now")," but the data transfer won't be complete until ",(0,a.kt)("em",{parentName:"p"},"later"),". This is more async code! Making the API request by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()")," is the first async operation, then reading the data stream from the response is the second async operation."),(0,a.kt)("p",null,"So our method returns a promise which returns a second promise. Even if the ",(0,a.kt)("inlineCode",{parentName:"p"},"catch")," block is triggered, our method will still return a promise because the return of ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then()")," is itself a promise \u2014 even if we are just running sync code like our error handling."),(0,a.kt)("p",null,"Ultimately, our method will return one of two things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The data of a successful response (ideally), or"),(0,a.kt)("li",{parentName:"ul"},"An error message if the API call goes wrong.")),(0,a.kt)("h3",{id:"updating-indexjs"},"Updating ",(0,a.kt)("inlineCode",{parentName:"h3"},"index.js")),(0,a.kt)("p",null,"Next, we need to update our code in ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js"),". "),(0,a.kt)("div",{class:"filename"},"src/index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import 'bootstrap';\nimport 'bootstrap/dist/css/bootstrap.min.css';\nimport './css/styles.css';\nimport WeatherService from './weather-service.js';\n\n// Business Logic\n\nfunction getWeather(city) {\n  WeatherService.getWeather(city)\n    .then(function(response) {\n      if (response.main) {\n        printElements(response, city);\n      } else {\n        printError(response, city);\n      }\n    });\n}\n\n// UI Logic\n\nfunction printElements(response, city) {\n  document.querySelector('#showResponse').innerText = `The humidity in ${city} is ${response.main.humidity}%.\n  The temperature in Kelvins is ${response.main.temp} degrees.`;\n}\n\nfunction printError(error, city) {\n  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${city}: \n  ${error}.`;\n}\n\nfunction handleFormSubmission(event) {\n  event.preventDefault();\n  const city = document.querySelector('#location').value;\n  document.querySelector('#location').value = null;\n  getWeather(city);\n}\n\nwindow.addEventListener(\"load\", function() {\n  document.querySelector('form').addEventListener(\"submit\", handleFormSubmission);\n});\n")),(0,a.kt)("p",null,"Let's start by looking at the code directly related to the API call itself:"),(0,a.kt)("div",{class:"filename"},"src/index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function getWeather() {\n  WeatherService.getWeather(city)\n    .then(function(response) {\n      if (response.main) {\n        printElements(response, city);\n      } else {\n        printError(response, city);\n      }\n    });\n}\n")),(0,a.kt)("p",null,"We start by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherService.getWeather(city)"),". Since this method returns a promise, we can immediately call ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then()")," below it without saving the returned promise to a variable."),(0,a.kt)("p",null,"Inside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then()"),", we only have one callback function that's meant to be called when the API call resolves. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},".then(function(response) {\n  if (response.main) {\n    printElements(response, city);\n  } else {\n    printError(response, city);\n  }\n});\n")),(0,a.kt)("p",null,"If we wanted to include a function for a rejection, we'd add a second callback function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},".then(function(response) {\n  if (response.main) {\n    printElements(response, city);\n  } else {\n    printError(response, city);\n  }\n}, function(rejection) {\n  // code to handle rejection\n});\n")),(0,a.kt)("p",null,"However, this second callback function would only be triggered if there is a network error, like no internet connection. And, the error that we throw and our catch block in the ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherService.getWeather()")," method will already handle network connection errors, so we don't need another callback function to handle rejections."),(0,a.kt)("p",null,"So, what do we need to do in our callback function? We need to determine if our ",(0,a.kt)("inlineCode",{parentName:"p"},"response")," is the OpenWeather API data or the error, and call either ",(0,a.kt)("inlineCode",{parentName:"p"},"printElements")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"printError"),", depending. There's many ways to configure this; we've opted to use a conditional statement to see if ",(0,a.kt)("inlineCode",{parentName:"p"},"response.main")," is truthy, and if so, call the ",(0,a.kt)("inlineCode",{parentName:"p"},"printElements")," function. Remember that evaluating if a variable is truthy, means seeing if is exists and has any value at all. If it does, we know we're working with the OpenWeather API response data. In all other cases we call ",(0,a.kt)("inlineCode",{parentName:"p"},"printError"),"."),(0,a.kt)("p",null,"Notice that the arguments we pass into both ",(0,a.kt)("inlineCode",{parentName:"p"},"printElements")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"printError")," have changed. Also, how we access that data in each function has changed:"),(0,a.kt)("div",{class:"filename"},"src/index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function printElements(response, city) {\n  document.querySelector('#showResponse').innerText = `The humidity in ${city} is ${response.main.humidity}%.\n  The temperature in Kelvins is ${response.main.temp} degrees.`;\n}\n\nfunction printError(error, city) {\n  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${city}: \n  ${error}.`;\n}\n")),(0,a.kt)("p",null,"That's because we've both simplified our error handling, and our configuration with ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()")," doesn't have the exact same limitations as we had when we used an ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object with a promise. The lesson here is that what tool you choose to work with will impact how you pass data between function calls. "),(0,a.kt)("h3",{id:"returning-more-complex-error-data"},"Returning More Complex Error Data"),(0,a.kt)("p",null,"Notably, for our error message, we're only passing in the ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"statusText")," details that we could get from the Fetch API's ",(0,a.kt)("inlineCode",{parentName:"p"},"Response")," object. Remember this code? "),(0,a.kt)("div",{class:"filename"},"src/weather-service.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"static getWeather(city) {\n  return fetch(...)\n    .then(function(response) {\n      if (!response.ok) {\n        // we created our custom error message here\n        const errorMessage = `${response.status} ${response.statusText}`;\n        throw new Error(errorMessage);\n      } \n      ...\n    })   \n    .catch(....);\n}\n")),(0,a.kt)("p",null,"Well, we can return the OpenWeather API's own custom error messages, too, by taking an extra step. Check out what this looks like:"),(0,a.kt)("div",{class:"filename"},"src/weather-service.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"static getWeather(city) {\n  return fetch(...)\n    .then(function(response) {\n        if (!response.ok) {\n          return response.json()\n            .then(function(apiErrorMessage) {\n              const errorMessage = `${response.status} ${response.statusText}\n              ${apiErrorMessage.message}`;\n              throw new Error(errorMessage);\n            });\n        }\n        ....\n    })   \n    .catch(....);\n}\n")),(0,a.kt)("p",null,"Remember that the API response from OpenWeather, whether it's weather data or an error message, is in a stream. So to access the data, we first need to call ",(0,a.kt)("inlineCode",{parentName:"p"},"Response.json()")," to turn it into JSON. ",(0,a.kt)("inlineCode",{parentName:"p"},"Response.json()")," is async and returns a promise itself, so we call ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then()")," on it, passing in a callback function to handle the response. It's at this point we can craft a custom error message with both the data from the request, like ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"statusText"),", and the API's response. Then, we throw the error. "),(0,a.kt)("p",null,"If your head is spinning, that's a very normal reaction! This additional step adds more complexity and isn't necessary; it's completely option to include error messages from both the Fetch API's ",(0,a.kt)("inlineCode",{parentName:"p"},"Response")," object and the API's own custom error messages. Instead, you can pick just one or the other."),(0,a.kt)("h3",{id:"indentation-and-spacing-for-promises"},"Indentation and Spacing for Promises"),(0,a.kt)("p",null,"Take a look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"getWeather")," function once more, and note the indentation:"),(0,a.kt)("div",{class:"filename"},"src/index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function getWeather() {\n  WeatherService.getWeather(city)\n    .then(function(response) {\n      if (response.main) {\n        printElements(response, city);\n      } else {\n        printError(response, city);\n      }\n    });\n}\n")),(0,a.kt)("p",null,"We put ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then()")," on a new line. We did the same in our static method in ",(0,a.kt)("inlineCode",{parentName:"p"},"weather-service.js")," as well. This spacing is common for readability, especially when chaining multiple promises together. For instance, we might see something like this out in the wild:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Pseudo-code!\n\npromise\n  .then(doSomething)\n  .then(doSomethingElse)\n  .then(doOneLastThing)\n  .catch(takeCareOfThatError)\n")),(0,a.kt)("p",null,"As we can see, putting each ",(0,a.kt)("inlineCode",{parentName:"p"},".then()")," on a newline makes our code easier to read. Finally, the catch block handles errors that occur anywhere inside this chain of promises. We will cover this process further in a future optional lesson on ",(0,a.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/intermediate-javascript/asynchrony-and-apis/further-exploration-chaining-promises"},"chaining promises"),"."),(0,a.kt)("h2",{id:"final-thoughts"},"Final Thoughts"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"While the ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()")," method is very useful, some developers prefer using ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," objects. You may choose to use either on this section's independent project. Ultimately, even if you prefer using ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()"),", it's still important to have a good understanding of ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," objects and promises because ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()")," relies on both."),(0,a.kt)("p",null,"Here's a quick guide to consider which one you might want to use in different situations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"XMLHttpRequest")," objects and promises if you want full control over being able to reject a promise."),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"fetch()")," if you don't want to worry about dealing with ",(0,a.kt)("inlineCode",{parentName:"li"},"XMLHttpRequest")," objects and want any advantages that come with streaming the data instead of waiting for the full response.")),(0,a.kt)("p",null,"Just make sure you get plenty of opportunities to practice both! The more practice you get with different ways of dealing with asynchrony, the stronger you'll be as a coder."),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-6-js-api-call-with-webpack/tree/4_api_call_with_fetch"},(0,a.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for API Project with ",(0,a.kt)("inlineCode",{parentName:"a"},"fetch()")))),(0,a.kt)("p",null,"The above link takes you to the branch called ",(0,a.kt)("inlineCode",{parentName:"p"},"4_api_call_with_fetch"),"."))}u.isMDXComponent=!0}}]);