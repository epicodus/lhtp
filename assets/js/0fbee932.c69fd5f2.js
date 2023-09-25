"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[57200],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=a,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Further Exploration: Chaining Promises",id:"further_exploration_chaining_promises",slug:"further_exploration_chaining_promises",hide_table_of_contents:!0,sidebar_position:28,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3b_further_exploration_chaining_promises.md"},i=void 0,s={unversionedId:"intermediate_javascript_classic/asynchrony-and-apis/further_exploration_chaining_promises",id:"intermediate_javascript_classic/asynchrony-and-apis/further_exploration_chaining_promises",title:"Further Exploration: Chaining Promises",description:"Note: This lesson is a further exploration. You will not be expected to chain promises together for this section's independent project. However, we recommend that you follow along with this lesson closely because you'll learn more about coding best practices including using services, handling errors, and other things we can do to clean up our code.",source:"@site/docs/intermediate_javascript_classic/5_asynchrony-and-apis/3b_further_exploration_chaining_promises.md",sourceDirName:"intermediate_javascript_classic/5_asynchrony-and-apis",slug:"/intermediate_javascript_classic/asynchrony-and-apis/further_exploration_chaining_promises",permalink:"/intermediate_javascript_classic/asynchrony-and-apis/further_exploration_chaining_promises",draft:!1,tags:[],version:"current",sidebarPosition:28,frontMatter:{title:"Further Exploration: Chaining Promises",id:"further_exploration_chaining_promises",slug:"further_exploration_chaining_promises",hide_table_of_contents:!0,sidebar_position:28,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3b_further_exploration_chaining_promises.md"},sidebar:"intermediate_javascript_classic",previous:{title:"Bike Index, Cryptocurrency Analytics App, API of Choice (Two-Day Project) - Part 1",permalink:"/intermediate_javascript_classic/asynchrony-and-apis/bike_index_cryptocurrency_analytics_app_api_of_choice_two_day_project___part_1"},next:{title:"Pull Requests and Submitting Great Work",permalink:"/intermediate_javascript_classic/asynchrony-and-apis/pull_requests_and_submitting_great_work"}},l={},c=[{value:"Chaining Promises with Multiple API Calls",id:"chaining-promises-with-multiple-api-calls",level:2},{value:"Adding <code>giphy-service.js</code>",id:"adding-giphy-servicejs",level:3},{value:"Updating <code>weather-service.js</code>",id:"updating-weather-servicejs",level:3},{value:"Chaining Promises in <code>index.js</code>",id:"chaining-promises-in-indexjs",level:3},{value:"Error Handling",id:"error-handling",level:3},{value:"Successful Calls",id:"successful-calls",level:3},{value:"HTML",id:"html",level:3}],p={toc:c},h="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," This lesson is a further exploration. You will not be expected to chain promises together for this section's independent project. However, we recommend that you follow along with this lesson closely because you'll learn more about coding best practices including using services, handling errors, and other things we can do to clean up our code."),(0,a.kt)("p",null,"In this lesson, we'll update our weather API project to chain together multiple promises. We've already chained together two promises with the Fetch API, but let's take it to another level by first making an API call to the OpenWeather API, waiting on the results of that call, and ",(0,a.kt)("em",{parentName:"p"},"then")," using the result of that call to make a second API call to the Giphy API."),(0,a.kt)("p",null,"Processing data through multiple APIs is a real world use case and this is a great opportunity to practice chaining promises as well. In the process, we'll also have a chance to look at error handling for a more complex example, too."),(0,a.kt)("h2",{id:"chaining-promises-with-multiple-api-calls"},"Chaining Promises with Multiple API Calls"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We'll refactor our OpenWeather API project starting from branch ",(0,a.kt)("inlineCode",{parentName:"p"},"4_api_call_with_fetch"),", which just uses the Fetch API, but not ",(0,a.kt)("inlineCode",{parentName:"p"},"async")," functions."),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-6-js-api-call-with-webpack/tree/4_api_call_with_fetch"},(0,a.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for API Project with ",(0,a.kt)("inlineCode",{parentName:"a"},"fetch()")))),(0,a.kt)("p",null,"Our updated application will display a weather description for the user and then show the user a GIF based on that description. There will be a lot of changes to the code, including a lot of refactoring."),(0,a.kt)("p",null,"We already have code for our ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherService"),", so what should we do for our Giphy code? Do you think it would be better to create a separate service in a different file called ",(0,a.kt)("inlineCode",{parentName:"p"},"GiphyService")," or would it be better to turn ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherService")," into ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiService")," and put all the API calls in there?"),(0,a.kt)("p",null,"Think about it for a moment... and think about why you arrived at your choice. You will have to make decisions about separating code ",(0,a.kt)("em",{parentName:"p"},"all of the time"),". Sometimes there will be a right or a wrong approach. And sometimes both approaches will have their advantages and disadvantages. But regardless of the case, you should always be prepared to think through how you structure your code."),(0,a.kt)("p",null,"If you think the best approach is two separate services, you are correct! The Giphy API and the OpenWeather API do two separate things. We want to keep our code separate and modular. We might even want to use each of these APIs elsewhere in our application in ways that have nothing to do with each other. "),(0,a.kt)("p",null,"Also, there is a trend in programming towards ",(0,a.kt)("strong",{parentName:"p"},"microservices"),". This is a software design pattern where applications are built around lots of smaller services that communicate with each other. In contrast, there's the ",(0,a.kt)("strong",{parentName:"p"},"monolithic")," approach which can have lots and lots of closely entangled code \u2014 which means that when things break, they really break. "),(0,a.kt)("p",null,"Microservices allow code to be loosely coupled, which means every service isn't too dependent on other code. By separating out our API calls in two different services, they are fully decoupled and don't know about each other. If there's an error in one of our services, it won't break the other service (though it will certainly break any code that does depend on the broken service)."),(0,a.kt)("h3",{id:"adding-giphy-servicejs"},"Adding ",(0,a.kt)("inlineCode",{parentName:"h3"},"giphy-service.js")),(0,a.kt)("p",null,"Let's create a separate directory in ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"services")," and add both our ",(0,a.kt)("inlineCode",{parentName:"p"},"weather-service.js")," file and a new ",(0,a.kt)("inlineCode",{parentName:"p"},"giphy-service.js")," file. VSCode should automatically offer to update the paths in any import statements that use ",(0,a.kt)("inlineCode",{parentName:"p"},"weather-service.js")," in your application. Click ",(0,a.kt)("em",{parentName:"p"},"yes")," to do so or manually update the paths as needed."),(0,a.kt)("p",null,"Here's the code for our new ",(0,a.kt)("inlineCode",{parentName:"p"},"GiphyService"),". It will be very similar to code we've written previously for using the Fetch API with promises:"),(0,a.kt)("div",{class:"filename"},"src/services/giphy-service.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default class GiphyService {  \n  static async getGif(query) {\n    return fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${process.env.GIPHY_API_KEY}&limit=5`)\n      .then(function(response) {\n        if (!response.ok) {\n          const errorMessage = `${response.status} ${response.statusText}`;\n          throw new Error(errorMessage);\n        }\n        return response.json();\n      })\n      .catch(function(error) {\n        return error;\n      });\n  }\n}\n")),(0,a.kt)("p",null,"Most of this code should look familiar but there are a couple of important things to note. First, we use a generic parameter called ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," in our static method. We could use this API call ",(0,a.kt)("em",{parentName:"p"},"anywhere")," in our application for things other than weather, so we don't want to call it something constricting like ",(0,a.kt)("inlineCode",{parentName:"p"},"currentWeather"),"."),(0,a.kt)("p",null,"Next, we name our environmental variable ",(0,a.kt)("inlineCode",{parentName:"p"},"GIPHY_API_KEY"),". We'll also update the environmental variable name for the OpenWeather API to ",(0,a.kt)("inlineCode",{parentName:"p"},"OPEN_WEATHER_API_KEY"),". Now that we are working with multiple APIs in our application, we need to make sure the names for each are descriptive. Make sure to update your ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file accordingly."),(0,a.kt)("h3",{id:"updating-weather-servicejs"},"Updating ",(0,a.kt)("inlineCode",{parentName:"h3"},"weather-service.js")),(0,a.kt)("p",null,"Let's make sure that we update the name of the environmental variable in our ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherService")," as well:"),(0,a.kt)("div",{class:"filename"},"src/services/weather-service.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default class WeatherService {  \n  static getWeather(city) {\n    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_API_KEY}`)\n      .then(function(response) {\n        if (!response.ok) {\n          const errorMessage = `${response.status} ${response.statusText}`;\n          throw new Error(errorMessage);\n        } else {\n          return response.json();\n        }\n      })      \n      .catch(function(error) {\n        return error;\n      });\n  }\n}\n")),(0,a.kt)("p",null,"So now we have two services. Each returns either a promise that will resolve with API data ",(0,a.kt)("em",{parentName:"p"},"or"),", if something goes wrong, an ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," object."),(0,a.kt)("h3",{id:"chaining-promises-in-indexjs"},"Chaining Promises in ",(0,a.kt)("inlineCode",{parentName:"h3"},"index.js")),(0,a.kt)("p",null,"Now we are ready to update ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," to handle our promises and chain them together. There will be quite a few updates to this file, including some refactoring of exiting code. We'll also be making some updates to HTML classes in ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," and our updated UI methods will reflect that."),(0,a.kt)("div",{class:"filename"},"src/index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Import statements updated to reflect new paths and also import GiphyService.\nimport 'bootstrap';\nimport 'bootstrap/dist/css/bootstrap.min.css';\nimport './css/styles.css';\nimport WeatherService from './services/weather-service.js';\nimport GiphyService from './services/giphy-service.js';\n\n// Business Logic\n\n// we update the name of this function\nfunction getAPIData(city) {\n  WeatherService.getWeather(city)\n    .then(function(weatherResponse) {\n      if (weatherResponse instanceof Error) {\n        const errorMessage = `there was a problem accessing the weather data from OpenWeather API for ${city}: \n        ${weatherResponse.message}`;\n        throw new Error(errorMessage);\n      } \n      const description = weatherResponse.weather[0].description;\n      printWeather(description, city);\n      return GiphyService.getGif(description);\n    })\n    .then(function(giphyResponse) {\n      if (giphyResponse instanceof Error) {\n        const errorMessage = `there was a problem accessing the gif data from Giphy API: \n        ${giphyResponse.message}.`;\n        throw new Error(errorMessage);\n      } \n      displayGif(giphyResponse, city);\n    })\n    .catch(function(error) {\n      printError(error);\n    });\n}\n\n// UI Logic\n\n// the parameter has changed for this function, as \n// has the message it prints to the DOM\nfunction printWeather(description, city) {\n  document.querySelector('#weather-description').innerText = `The weather in ${city} is ${description}.`;\n}\n\n// printError() is now much more simple, since we handle\n// creating the error message in the getAPIData() function\nfunction printError(error) {\n  document.querySelector('#error').innerText = error;\n}\n\n// we have a new function that displays the gif\nfunction displayGif(response, city) {\n  const url = response.data[0].images.downsized.url;\n  const img = document.createElement(\"img\");\n  img.src = url;\n  img.alt = `${city} weather`;\n  document.querySelector(\"#gif\").append(img);\n}\n\n// we have a new function that clear previous results.\nfunction clearResults() {\n  document.querySelector(\"#gif\").innerText = null;\n  document.querySelector('#error').innerText = null;\n  document.querySelector('#weather-description').innerText = null;\n}\n\nfunction handleFormSubmission(event) {\n  event.preventDefault();\n  // we call our new function (below) to clear previous results\n  clearResults();\n  const city = document.querySelector('#location').value;\n  document.querySelector('#location').value = null;\n  // we update the name of the function that makes the API call\n  getAPIData(city);\n}\n\nwindow.addEventListener(\"load\", function() {\n  document.querySelector('form').addEventListener(\"submit\", handleFormSubmission);\n});\n")),(0,a.kt)("p",null,"Let's start by focusing on the most important code in our new ",(0,a.kt)("inlineCode",{parentName:"p"},"getAPIData")," function. In the process, we'll also explain our new UI functions as well. "),(0,a.kt)("div",{class:"filename"},"src/index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function getAPIData(city) {\n  WeatherService.getWeather(city)\n    .then(function(weatherResponse) {\n      if (weatherResponse instanceof Error) {\n        const errorMessage = `there was a problem accessing the weather data from OpenWeather API for ${city}: \n        ${weatherResponse.message}`;\n        throw new Error(errorMessage);\n      } \n      const description = weatherResponse.weather[0].description;\n      printWeather(description, city);\n      return GiphyService.getGif(description);\n    })\n    .then(function(giphyResponse) {\n      if (giphyResponse instanceof Error) {\n        const errorMessage = `there was a problem accessing the gif data from Giphy API: \n        ${giphyResponse.message}.`;\n        throw new Error(errorMessage);\n      } \n      displayGif(giphyResponse, city);\n    })\n    .catch(function(error) {\n      printError(error);\n    });\n}\n")),(0,a.kt)("p",null,"We start by calling our ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherService")," static method. Because this returns a promise, we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then()")," with it. In fact, we chain two ",(0,a.kt)("inlineCode",{parentName:"p"},".then()")," methods, and then a ",(0,a.kt)("inlineCode",{parentName:"p"},".catch()"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The first ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise.prototype.then()")," to handle the response from the fetch to OpenWeather, and initiating the next API call to Giphy."),(0,a.kt)("li",{parentName:"ul"},"The second ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise.prototype.then()")," to handle the response from the fetch to Giphy."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise.prototype.catch()")," to handle any errors that occur from OpenWeather, Giphy, or a network error.")),(0,a.kt)("p",null,"Let's first discuss the new error handling."),(0,a.kt)("h3",{id:"error-handling"},"Error Handling"),(0,a.kt)("p",null,"If there's an error processing our API call in the static method (",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherService.getWeather()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"GifService.getGif"),") and ",(0,a.kt)("inlineCode",{parentName:"p"},"response.ok")," is set to false, we'll throw an error, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.prototype.catch()")," block will return that error to ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," so that we can eventually display it to the UI. While we could just directly display the error message to the UI in our API call service logic, that would be bad separation of logic."),(0,a.kt)("p",null,"Then, back in ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," in our first ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then()"),", we can check to see if an error has been returned to us with the following conditional:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"if (weatherResponse instanceof Error) {\n  // do something with error\n}\n")),(0,a.kt)("p",null,"As we discussed in ",(0,a.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/intermediate-javascript/asynchrony-and-apis/javascript-exception-handling-with-try-catch"},"JavaScript Exception Handling with ",(0,a.kt)("inlineCode",{parentName:"a"},"try...catch")),", ",(0,a.kt)("inlineCode",{parentName:"p"},"instanceof")," is actually an operator and it's very helpful for checking to see whether or not something is a certain type of object. "),(0,a.kt)("p",null,"In this case, if ",(0,a.kt)("inlineCode",{parentName:"p"},"weatherResponse")," is an instance of an ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," object, we need to throw another error. This one will revert control to the ",(0,a.kt)("em",{parentName:"p"},"nearest")," catch block, which actually comes at the end of our chained promise. That catch block will call a ",(0,a.kt)("inlineCode",{parentName:"p"},"printError()")," function which will display an error for the user."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},".catch(function(error) {\n  printError(error);\n});\n")),(0,a.kt)("p",null,"So here's what happens when the API call doesn't return a 200 response:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In our static API call method, control switches over to a conditional which then throws an error."),(0,a.kt)("li",{parentName:"ul"},"The catch block in our static method catches the error, then returns an ",(0,a.kt)("inlineCode",{parentName:"li"},"Error")," object from the method."),(0,a.kt)("li",{parentName:"ul"},"When the static method is complete, control switches over to the next ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise.prototype.then()"),", the first one in the ",(0,a.kt)("inlineCode",{parentName:"li"},"getAPIData")," function in ",(0,a.kt)("inlineCode",{parentName:"li"},"index.js"),". The method checks if ",(0,a.kt)("inlineCode",{parentName:"li"},"weatherResponse")," is an instance of an ",(0,a.kt)("inlineCode",{parentName:"li"},"Error")," object. Since it is, we throw ",(0,a.kt)("em",{parentName:"li"},"another")," error which will then switch control to the catch block of our chained promises in the ",(0,a.kt)("inlineCode",{parentName:"li"},"getAPIData")," function and pass along the error message."),(0,a.kt)("li",{parentName:"ul"},"Finally, the catch block will call the ",(0,a.kt)("inlineCode",{parentName:"li"},"printError()")," function, which handles printing the error message to the webpage.")),(0,a.kt)("p",null,"If it seems like we are throwing this error all over the place, we are. But that's common in coding \u2014 think about a time when you've made an error in a JavaScript application that uses webpack. The application will fail to compile and there will be a ",(0,a.kt)("strong",{parentName:"p"},"stack trace"),". It's often not just one error, but an entire cascade of errors that the first one triggers."),(0,a.kt)("p",null,"In this particular application, there are several advantages to the approach we're taking here. "),(0,a.kt)("p",null,"First, we wouldn't want to call ",(0,a.kt)("inlineCode",{parentName:"p"},"printError()")," in our API call services. Printing errors has to do with our UI and services shouldn't know or care about our UI. On the other hand, it makes complete sense for our service to either return data or throw an error. We could use this service anywhere in any application and handle the error as needed. For instance, if we were also using this service in a backend Node application, we wouldn't want to display an error to a user \u2014 instead, we might print the error message to a server error log."),(0,a.kt)("p",null,"Here's another big advantage: the chained promises in ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," are handling multiple API calls and we can use the same catch block to handle errors from either. We just need to have a slightly different error message so the user can see exactly what went wrong. In the case of the Weather API response, the message is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"there was a problem accessing the weather data from OpenWeather API for ${city}: ${weatherResponse.message}\n")),(0,a.kt)("p",null,"In the case of the Giphy response, that message is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"there was a problem accessing the gif data from Giphy API: ${giphyResponse.message}.\n")),(0,a.kt)("p",null,"If you want to see these error messages for yourself when you read the code, cause an error, like inputting a non-existent city."),(0,a.kt)("p",null,"So now we've set up our error handling so that messages related to the UI are in the correct place \u2014 and we can use the same catch block for errors related to both API calls, keeping our code DRY."),(0,a.kt)("h3",{id:"successful-calls"},"Successful Calls"),(0,a.kt)("p",null,"Now let's take a look at what will happen if all goes well with our OpenWeather API call:"),(0,a.kt)("div",{class:"filename"},"src/index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function getAPIData(city) {\n  WeatherService.getWeather(city)\n    .then(function(weatherResponse) {\n      ...\n\n      const description = weatherResponse.weather[0].description;\n      printWeather(description, city);\n      return GiphyService.getGif(description);\n    })\n    ...\n}\n")),(0,a.kt)("p",null,"First we parse the ",(0,a.kt)("inlineCode",{parentName:"p"},"description")," property from the response data. Then we call the ",(0,a.kt)("inlineCode",{parentName:"p"},"printWeather")," function to print the weather description for the user-inputted city. Why do it here instead of later? Well, there's no reason for users to wait until the Giphy API call is resolved for them to get ",(0,a.kt)("em",{parentName:"p"},"some")," data. That's a huge advantage of asynchronous code and something you'll see often online \u2014 sites like Facebook and Twitter will give you some data ",(0,a.kt)("em",{parentName:"p"},"now")," even as they are loading more data to show you ",(0,a.kt)("em",{parentName:"p"},"later"),". We don't want to wait for everything to load all at once. Also, if the Giphy API call were to fail, we'd still get data from the OpenWeather API."),(0,a.kt)("p",null,"Now for the ",(0,a.kt)("em",{parentName:"p"},"big")," gotcha that trips students up. ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then()")," is a method. We know that, right? Well, the basic rule about JavaScript methods and functions is that you always need to return something or else their return will be ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),". This applies to ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then()"),", too, which is why we return the next API call to Giphy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"return GiphyService.getGif(description);\n")),(0,a.kt)("p",null,"Because the syntax of chaining promises together looks confusing at first, it can be really easy to forget to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"return"),". ",(0,a.kt)("strong",{parentName:"p"},"You ",(0,a.kt)("em",{parentName:"strong"},"must")," return a value from ",(0,a.kt)("inlineCode",{parentName:"strong"},"Promise.prototype.then()")," if you want to chain another promise to it.")),(0,a.kt)("p",null,"When we make the API call to Giphy, it goes through the same process as the API call to OpenWeather:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If there's an error, our code will go through the same process as it does with the OpenWeather API. "),(0,a.kt)("li",{parentName:"ul"},"If the call is successful, we'll call the ",(0,a.kt)("inlineCode",{parentName:"li"},"displayGif")," function. ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function getAPIData(city) {\n  WeatherService.getWeather(city)\n    .then(function(weatherResponse) {\n      ...\n    })\n    .then(function(giphyResponse) {\n      if (giphyResponse instanceof Error) {\n        const errorMessage = `there was a problem accessing the gif data from Giphy API: \n        ${giphyResponse.message}.`;\n        throw new Error(errorMessage);\n      } \n      displayGif(giphyResponse, city);\n    })\n    ...\n}\n")),(0,a.kt)("p",null,"We don't need to return anything from the second ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then()")," method because there are no further promises chained to it. "),(0,a.kt)("p",null,"In fact, this final method just has ",(0,a.kt)("strong",{parentName:"p"},"side effects"),". A method or function that alters something elsewhere in the code (instead of or in addition to returning a value) is said to have side effects. Side effects are common with functions related to the UI \u2014 though when it comes to business logic, they should be avoided, just like we did in our API service logic."),(0,a.kt)("p",null,"And that's it for the code. The most complex change is the error handling. And while it can seem daunting at first, if you think carefully about keeping code separate and using callbacks to make the code more modular, it's not so bad. We'll run into a lot more trouble (and generally bad code) if we just throw a lot of code inside ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then()")," without extracting as much as possible into separate functions."),(0,a.kt)("h3",{id:"html"},"HTML"),(0,a.kt)("p",null,"One last thing: we've updated the HTML as well. There's really nothing to say about it other than the fact that we had to add some HTML tags and adjust come ids to account for handling GIFs:"),(0,a.kt)("div",{class:"filename"},"src/index.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<html lang="en-US">\n<head>\n  <title>Weather</title>\n</head>\n<body>\n  <div class="container">\n    <h1>Get Weather Conditions From Anywhere!</h1>\n    <p>To get the current description of the weather conditions for a location, please enter the city name or the city and state separated by a comma. Here are three examples:</p>\n    <pre>\n      Portland\n      Atlanta, Georgia\n      cairo\n    </pre>\n    <p>We will also show you a gif that corresponds to the weather\'s description.</p>\n    <form>\n      <label for="location">Enter a location:</label>\n      <input id="location" type="text" name="location">\n      <button type="submit" class="btn-success" id="weatherLocation">Get Current Temperature and Humidity</button>\n    </form>\n    <p id="weather-description"></p>\n    <p id="error"></p>\n    <div id="gif"></div>\n  </div>\n</body>\n</html>\n')),(0,a.kt)("p",null,"And that's all of our updated code. Even though this lesson is optional and chaining promises isn't required for the independent project, we highly recommend trying to chain promises in your code. Doing so will give you a better understanding of promises, error handling, and other important JavaScript concepts."),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-6-js-api-call-with-webpack/tree/6_chained_promises"},(0,a.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for API Project with Chained Promises"))),(0,a.kt)("p",null,"The above link takes you to the branch called ",(0,a.kt)("inlineCode",{parentName:"p"},"6_chained_promises"),"."))}d.isMDXComponent=!0}}]);