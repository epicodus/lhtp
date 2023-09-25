"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[60570],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"NaN. Separating Promise Logic",id:"separating_promise_logic",slug:"separating_promise_logic",hide_table_of_contents:!0,sidebar_position:21,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/7_asynchrony-and-apis/1f_separating_promise_logic.md"},o=void 0,s={unversionedId:"intermediate_javascript_part_time_evening/asynchrony-and-apis/separating_promise_logic",id:"intermediate_javascript_part_time_evening/asynchrony-and-apis/separating_promise_logic",title:"NaN. Separating Promise Logic",description:"Now that we've learned about static methods, let's refactor our weather API application to use one. In the process, we'll separate our API call business logic into a separate file.",source:"@site/docs/intermediate_javascript_part_time_evening/7_asynchrony-and-apis/1f_separating_promise_logic.md",sourceDirName:"intermediate_javascript_part_time_evening/7_asynchrony-and-apis",slug:"/intermediate_javascript_part_time_evening/asynchrony-and-apis/separating_promise_logic",permalink:"/lhtp/intermediate_javascript_part_time_evening/asynchrony-and-apis/separating_promise_logic",draft:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"NaN. Separating Promise Logic",id:"separating_promise_logic",slug:"separating_promise_logic",hide_table_of_contents:!0,sidebar_position:21,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/7_asynchrony-and-apis/1f_separating_promise_logic.md"},sidebar:"intermediate_javascript_part_time_evening",previous:{title:"NaN. Static Methods and Properties",permalink:"/lhtp/intermediate_javascript_part_time_evening/asynchrony-and-apis/static_methods_and_properties"},next:{title:"NaN. SOP and CORS",permalink:"/lhtp/intermediate_javascript_part_time_evening/asynchrony-and-apis/sop_and_cors"}},l={},c=[{value:"An Alternate Organization of <code>index.js</code>",id:"an-alternate-organization-of-indexjs",level:2},{value:"Summary",id:"summary",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now that we've learned about static methods, let's refactor our weather API application to use one. In the process, we'll separate our API call business logic into a separate file."),(0,a.kt)("p",null,"Here's the code so far on the branch called ",(0,a.kt)("inlineCode",{parentName:"p"},"2_xhr_api_call_with_promises"),":"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-6-js-api-call-with-webpack/tree/2_xhr_api_call_with_promises"},(0,a.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for API Project with Promises"))),(0,a.kt)("p",null,"We'll just add one additional file to hold our API logic. We'll call this file ",(0,a.kt)("inlineCode",{parentName:"p"},"weather-service.js")," and the file will hold a class called ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherService"),". "),(0,a.kt)("p",null,"Why are we using the term ",(0,a.kt)("strong",{parentName:"p"},"service")," here? A service is a piece of reusable code that can be shared across an application. In this case, we are separating out our API call so we can make this code available wherever it's needed. In a very large application, we might need to include our service in many different places. That isn't the case here, but using this design pattern will make our application more scalable."),(0,a.kt)("p",null,"Let's take a look at the code in this file:"),(0,a.kt)("div",{class:"filename"},"src/weather-service.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'export default class WeatherService {  \n  static getWeather(city) {\n    return new Promise(function(resolve, reject) {\n      let request = new XMLHttpRequest();\n      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;\n      request.addEventListener("loadend", function() {\n        const response = JSON.parse(this.responseText);\n        if (this.status === 200) {\n          resolve([response, city]);\n        } else {\n          reject([this, response, city]);\n        }\n      });\n      request.open("GET", url, true);\n      request.send();\n    });\n  }\n}\n')),(0,a.kt)("p",null,"We ",(0,a.kt)("inlineCode",{parentName:"p"},"export")," a ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," class because we will only be exporting ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherService"),". We also don't include a constructor, however we can still instantiate a new WeatherService instance if we needed to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const myWeatherService = new WeatherService();\n")),(0,a.kt)("p",null,"Next, we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"static")," keyword to define a static method called ",(0,a.kt)("inlineCode",{parentName:"p"},"getWeather()")," which takes a ",(0,a.kt)("inlineCode",{parentName:"p"},"city")," as a parameter."),(0,a.kt)("p",null,"The code inside this static method is almost exactly the same as it was before. The only difference is that we need to ",(0,a.kt)("em",{parentName:"p"},"return")," our promise. There's no need to save the promise in a variable. So, ",(0,a.kt)("inlineCode",{parentName:"p"},"getWeather")," is just a method that returns a promise object. "),(0,a.kt)("p",null,"The big gotcha that we see for many students trying to separate out logic is that they forget the ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," keyword. As we know, functions need to return something or they will be ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),". We've seen many situations where students thought they were getting ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," in their code because they weren't handling asynchrony properly \u2014 but the real reason was because a function didn't return anything!"),(0,a.kt)("p",null,"Now let's take a look at the updated code for ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js"),":"),(0,a.kt)("div",{class:"filename"},"src/index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import 'bootstrap';\nimport 'bootstrap/dist/css/bootstrap.min.css';\nimport './css/styles.css';\nimport WeatherService from './weather-service.js'\n\n// Business Logic\n\nfunction getWeather(city) {\n  let promise = WeatherService.getWeather(city);\n  promise.then(function(weatherDataArray) {\n    printElements(weatherDataArray);\n  }, function(errorArray) {\n    printError(errorArray);\n  });\n}\n\n// UI Logic\n\nfunction printElements(data) {\n  document.querySelector('#showResponse').innerText = `The humidity in ${data[1]} is ${data[0].main.humidity}%.\n  The temperature in Kelvins is ${data[0].main.temp} degrees.`;\n}\n\nfunction printError(error) {\n  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;\n}\n\nfunction handleFormSubmission(event) {\n  event.preventDefault();\n  const city = document.querySelector('#location').value;\n  document.querySelector('#location').value = null;\n  getWeather(city);\n}\n\nwindow.addEventListener(\"load\", function() {\n  document.querySelector('form').addEventListener(\"submit\", handleFormSubmission);\n});\n")),(0,a.kt)("p",null,"First we need to make sure to import our ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherService"),". We make our API call by doing the following:"),(0,a.kt)("div",{class:"filename"},"src/index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function getWeather(city) {\n  let promise = WeatherService.getWeather(city);\n  promise.then(function(weatherDataArray) {\n    printElements(weatherDataArray);\n  }, function(errorArray) {\n    printError(errorArray);\n  });\n}\n")),(0,a.kt)("p",null,"It should be really clear why our static ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherService.getWeather()")," method needs to return a promise \u2014 otherwise, the ",(0,a.kt)("inlineCode",{parentName:"p"},"promise")," variable would be undefined when we use it."),(0,a.kt)("p",null,"Because the variable holds a promise, we can call ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then()")," on it."),(0,a.kt)("h2",{id:"an-alternate-organization-of-indexjs"},"An Alternate Organization of ",(0,a.kt)("inlineCode",{parentName:"h2"},"index.js")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Consider the following alternate organization of our logic in ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js"),". This is just as acceptable as the initial solution, and could be considered more favorable since there's fewer lines of code without sacrificing good separation of logic and readability. "),(0,a.kt)("p",null,"How you decide to organize the code in your own applications will depend on the functionality: how you need to process the data involved and how many API calls you need to make. Regardless of how you choose to organize your code, your business logic and UI logic should remain clearly separated. "),(0,a.kt)("div",{class:"filename"},"src/index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import 'bootstrap';\nimport 'bootstrap/dist/css/bootstrap.min.css';\nimport './css/styles.css';\nimport WeatherService from './weather-service.js'\n\n// UI Logic\n\nfunction handleFormSubmission(event) {\n  event.preventDefault();\n  const city = document.querySelector('#location').value;\n  document.querySelector('#location').value = null;\n  let promise = WeatherService.getWeather(city);\n  promise.then(function(weatherDataArray) {\n    printElements(weatherDataArray);\n  }, function(errorArray) {\n    printError(errorArray);\n  });\n}\n\nfunction printElements(data) {\n  document.querySelector('#showResponse').innerText = `The humidity in ${data[1]} is ${data[0].main.humidity}%.\n  The temperature in Kelvins is ${data[0].main.temp} degrees.`;\n}\n\nfunction printError(error) {\n  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;\n}\n\nwindow.addEventListener(\"load\", function() {\n  document.querySelector('form').addEventListener(\"submit\", handleFormSubmission);\n});\n")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In this lesson, we've made some minor changes to our code that make a big difference in terms of separating logic and keeping our code concise and clean. You'll be expected to separate code related to API calls into its own file for this section's independent project."),(0,a.kt)("p",null,"Here's the project with separated logic on the branch called ",(0,a.kt)("inlineCode",{parentName:"p"},"3_separate_logic_with_xhr_and_promises"),":"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-6-js-api-call-with-webpack/tree/3_separate_logic_with_xhr_and_promises"},(0,a.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for API Project with Promises"))))}u.isMDXComponent=!0}}]);