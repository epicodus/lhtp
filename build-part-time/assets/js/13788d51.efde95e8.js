"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[68524],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(2784);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=s,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},50942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7896),s=(n(2784),n(30876));const a={title:"Promises with API Calls",id:"promises-with-api-calls",slug:"promises-with-api-calls",hide_table_of_contents:!0,sidebar_position:20,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1d_promises_with_api_calls.md"},o=void 0,i={unversionedId:"intermediate-javascript/asynchrony-and-apis/promises-with-api-calls",id:"intermediate-javascript/asynchrony-and-apis/promises-with-api-calls",title:"Promises with API Calls",description:"Now that we've learned about promises, we're ready to update our weather API code to use one. We will be using the same code that we used during the weekend homework \u2014 we'll only need to make changes in one file to incorporate promises in our project. Click the following link to get the code up to this point. Take note that this links to a branch called 1xhrapi_call, the default branch of this repo:",source:"@site/docs/intermediate-javascript/7_asynchrony-and-apis/1d-promises-with-api-calls.md",sourceDirName:"intermediate-javascript/7_asynchrony-and-apis",slug:"/intermediate-javascript/asynchrony-and-apis/promises-with-api-calls",permalink:"/intermediate-javascript/asynchrony-and-apis/promises-with-api-calls",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Promises with API Calls",id:"promises-with-api-calls",slug:"promises-with-api-calls",hide_table_of_contents:!0,sidebar_position:20,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1d_promises_with_api_calls.md"},sidebar:"intermediate-javascript",previous:{title:"Introduction to Promises",permalink:"/intermediate-javascript/asynchrony-and-apis/introduction-to-promises"},next:{title:"Static Methods and Properties",permalink:"/intermediate-javascript/asynchrony-and-apis/static-methods-and-properties"}},l={},p=[{value:"Using a Promise with an API Call",id:"using-a-promise-with-an-api-call",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Now that we've learned about promises, we're ready to update our weather API code to use one. We will be using the same code that we used during the weekend homework \u2014 we'll only need to make changes in one file to incorporate promises in our project. Click the following link to get the code up to this point. Take note that this links to a branch called ",(0,s.kt)("inlineCode",{parentName:"p"},"1_xhr_api_call"),", the default branch of this repo:"),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-6-js-api-call-with-webpack"},(0,s.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for Project"))),(0,s.kt)("h2",{id:"using-a-promise-with-an-api-call"},"Using a Promise with an API Call"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"The only file we'll need to update is ",(0,s.kt)("inlineCode",{parentName:"p"},"index.js"),". We'll start by providing the code, and then we'll walk through the changes."),(0,s.kt)("div",{class:"filename"},"src/index.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import 'bootstrap';\nimport 'bootstrap/dist/css/bootstrap.min.css';\nimport './css/styles.css';\n\n// Business Logic\n\nfunction getWeather(city) {\n  let promise = new Promise(function(resolve, reject) {\n    let request = new XMLHttpRequest();\n    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;\n    request.addEventListener(\"loadend\", function() {\n      const response = JSON.parse(this.responseText);\n      if (this.status === 200) {\n        resolve([response, city]);\n      } else {\n        reject([this, response, city]);\n      }\n    });\n    request.open(\"GET\", url, true);\n    request.send();\n  });\n\n  promise.then(function(response) {\n    printElements(response);\n  }, function(errorMessage) {\n    printError(errorMessage);\n  });\n}\n\n// UI Logic\n\nfunction printElements(results) {\n  document.querySelector('#showResponse').innerText = `The humidity in ${results[1]} is ${results[0].main.humidity}%.\n  The temperature in Kelvins is ${results[0].main.temp} degrees.`;\n}\n\nfunction printError(error) {\n  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;\n}\n\nfunction handleFormSubmission(event) {\n  event.preventDefault();\n  const city = document.querySelector('#location').value;\n  document.querySelector('#location').value = null;\n  getWeather(city);\n}\n\nwindow.addEventListener(\"load\", function() {\n  document.querySelector('form').addEventListener(\"submit\", handleFormSubmission);\n});\n")),(0,s.kt)("p",null,"Now let's break out the new code:"),(0,s.kt)("div",{class:"filename"},"src/index.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'function getWeather(city) {\n  let promise = new Promise(function(resolve, reject) {\n    let request = new XMLHttpRequest();\n    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;\n    request.addEventListener("loadend", function() {\n      const response = JSON.parse(this.responseText);\n      if (this.status === 200) {\n        resolve([response, city]);\n      } else {\n        reject([this, response, city]);\n      }\n    });\n    request.open("GET", url, true);\n    request.send();\n  });\n\n  promise.then(function(response) {\n    printElements(response);\n  }, function(errorMessage) {\n    printError(errorMessage);\n  });\n}\n')),(0,s.kt)("p",null,"In the ",(0,s.kt)("inlineCode",{parentName:"p"},"getWeather")," function, we now take our previous code that creates and sends an ",(0,s.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object and wrap it in a promise:"),(0,s.kt)("div",{class:"filename"},"src/index.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'let promise = new Promise(function(resolve, reject) {\n  let request = new XMLHttpRequest();\n  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;\n  request.addEventListener("loadend", function() {\n    const response = JSON.parse(this.responseText);\n    if (this.status === 200) {\n      resolve([response, city]);\n    } else {\n      reject([this, response, city]);\n    }\n  });\n  request.open("GET", url, true);\n  request.send();\n});\n')),(0,s.kt)("p",null,"As we learned in the last lesson, we need to determine when a promise is resolved or rejected:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// We use resolve() and reject() to determine whether a promise should be resolved or rejected.\n\nlet promise = new Promise(function(resolve, reject) {\n  resolve( // do this on resolution );\n  reject( // do this on rejection );\n});\n")),(0,s.kt)("p",null,"Our updated code already has a conditional so we just have to call ",(0,s.kt)("inlineCode",{parentName:"p"},"resolve()")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"reject()")," inside of the conditional. You may notice a few additional changes, which we'll discuss further below."),(0,s.kt)("div",{class:"filename"},"src/index.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'function getWeather() {\n  let promise = new Promise(function(resolve, reject) {\n    ...\n\n    request.addEventListener("loadend", function() {\n      const response = JSON.parse(this.responseText);\n      if (this.status === 200) {\n        resolve([response, city]);\n      } else {\n        reject([this, response, city]);\n      }\n    });\n  });\n\n  ...\n}\n\n')),(0,s.kt)("p",null,"Both ",(0,s.kt)("inlineCode",{parentName:"p"},"resolve()")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"reject()")," can take only one argument, which means our previous code that uses two and three arguments with the ",(0,s.kt)("inlineCode",{parentName:"p"},"printElements")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"printError")," functions no longer works. "),(0,s.kt)("p",null,"Here's our previous code:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"if (this.status === 200) {\n  printElements(response, city);\n} else {\n  printError(this, response, city);\n}\n")),(0,s.kt)("p",null,"There are a lot of ways that you can resolve this issue. We've opted to add each original argument to an array, and pass the array in as the single argument:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"if (this.status === 200) {\n  resolve([response, city]);\n} else {\n  reject([this, response, city]);\n}\n")),(0,s.kt)("p",null,"Take note that we don't have to pass in an array with 2 \u2013 3 pieces of data. It all depends on what we decide is valuable data to have when we resolve or reject the API call. For example, we could structure our resolve and reject function calls like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"if (this.status === 200) {\n  resolve(response);\n} else {\n  reject(this);\n}\n")),(0,s.kt)("p",null,"If we use the above code, when we resolve our API call (it came back successfully), we only pass in the APi response, and not the user-inputted data. Then, when we reject our API call (something went wrong), we only pass in the ",(0,s.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object (represented by ",(0,s.kt)("inlineCode",{parentName:"p"},"this"),"), so that we can print the ",(0,s.kt)("inlineCode",{parentName:"p"},"status")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"statusText"),". "),(0,s.kt)("p",null,"For the sake of trying something new, we'll continue with passing in arrays to both ",(0,s.kt)("inlineCode",{parentName:"p"},"resolve()")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"reject()"),", in order to present more data to the user."),(0,s.kt)("p",null,"This means that we'll also have to update our two UI functions that handle printing the results to the webpage to have just one parameter, and treat that parameter as the array it now is. Here's the updated code:"),(0,s.kt)("div",{class:"filename"},"src/index.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// UI Logic\n\nfunction printElements(data) {\n  document.querySelector('#showResponse').innerText = `The humidity in ${data[1]} is ${data[0].main.humidity}%.\n  The temperature in Kelvins is ${data[0].main.temp} degrees.`;\n}\n\nfunction printError(error) {\n  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;\n}\n")),(0,s.kt)("p",null,"But we haven't even called those functions yet! We need to look to our ",(0,s.kt)("inlineCode",{parentName:"p"},"promise.then(...)")," method call to find those function calls:"),(0,s.kt)("div",{class:"filename"},"src/index.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"function getWeather() {\n  let promise = new Promise(function(resolve, reject) {\n    ...\n  });\n\n  promise.then(function(weatherDataArray) {\n    printElements(weatherDataArray);\n  }, function(errorArray) {\n    printError(errorArray);\n  });\n}\n")),(0,s.kt)("p",null,"In the last lesson, we discussed how ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then()")," takes two arguments. Both are callback functions. The first argument is a function that should run if the promise is resolved. As we can see, this function calls ",(0,s.kt)("inlineCode",{parentName:"p"},"printElements"),", passing in the ",(0,s.kt)("inlineCode",{parentName:"p"},"weatherDataArray"),"."),(0,s.kt)("p",null,"The second argument is a function that handles a rejected promise. In this case, we call ",(0,s.kt)("inlineCode",{parentName:"p"},"printError"),", passing in the ",(0,s.kt)("inlineCode",{parentName:"p"},"errorArray")," with error information. "),(0,s.kt)("p",null,"As we can see, it didn't take much work at all to incorporate a promise in our code. They're really nice to work with \u2014 and they can make working with complex async code much easier."),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-6-js-api-call-with-webpack/tree/2_xhr_api_call_with_promises"},(0,s.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for API Project with Promises"))),(0,s.kt)("p",null,"The above link takes you to the branch called ",(0,s.kt)("inlineCode",{parentName:"p"},"2_xhr_api_call_with_promises"),"."))}d.isMDXComponent=!0}}]);