"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[63256],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"Making API Calls with JavaScript",id:"making_api_calls_with_javascript",slug:"making_api_calls_with_javascript",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/5_asynchrony-and-apis/0g_making_api_calls_with_javascript.md"},i=void 0,s={unversionedId:"intermediate_javascript/asynchrony-and-apis/making_api_calls_with_javascript",id:"intermediate_javascript/asynchrony-and-apis/making_api_calls_with_javascript",title:"Making API Calls with JavaScript",description:"Over the last several lessons, we've learned quite a bit about API calls to third-party APIs. We've learned what they are and how to make an API call using Postman. We also took a more in-depth look at working with and parsing JSON. The skills we've covered so far are applicable for working with APIs no matter what programming language you use. Whether you are writing in Ruby, JavaScript, C#, or another language, there are tools for making and receiving requests and then parsing JSON or any other type of data the API returns.",source:"@site/docs/intermediate_javascript/5_asynchrony-and-apis/0g_making_api_calls_with_javascript.md",sourceDirName:"intermediate_javascript/5_asynchrony-and-apis",slug:"/intermediate_javascript/asynchrony-and-apis/making_api_calls_with_javascript",permalink:"/lhtp/intermediate_javascript/asynchrony-and-apis/making_api_calls_with_javascript",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Making API Calls with JavaScript",id:"making_api_calls_with_javascript",slug:"making_api_calls_with_javascript",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/5_asynchrony-and-apis/0g_making_api_calls_with_javascript.md"},sidebar:"intermediate_javascript",previous:{title:"Parsing JSON",permalink:"/lhtp/intermediate_javascript/asynchrony-and-apis/parsing_json"},next:{title:"Protecting API Keys",permalink:"/lhtp/intermediate_javascript/asynchrony-and-apis/protecting_api_keys"}},l={},p=[{value:"Making an API Call in JavaScript",id:"making-an-api-call-in-javascript",level:2},{value:"More About XHR Objects",id:"more-about-xhr-objects",level:2},{value:"<code>readyState</code>",id:"readystate",level:3},{value:"Summary",id:"summary",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Over the last several lessons, we've learned quite a bit about API calls to third-party APIs. We've learned what they are and how to make an API call using Postman. We also took a more in-depth look at working with and parsing JSON. The skills we've covered so far are applicable for working with APIs no matter what programming language you use. Whether you are writing in Ruby, JavaScript, C#, or another language, there are tools for making and receiving requests and then parsing JSON or any other type of data the API returns."),(0,o.kt)("p",null,"Now we are ready to build out a JavaScript application that will make an API call. There are many different ways to make an API call, ranging from using Web APIs to JavaScript libraries like jQuery (",(0,o.kt)("a",{parentName:"p",href:"https://jquery.com/"},"a library for DOM manipulation and traversal"),"). There are also many JavaScript tools for handling asynchrony that vastly simplify making API calls. In this lesson, we'll learn how to use the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"},(0,o.kt)("inlineCode",{parentName:"a"},"XMLHttpRequest")," object (a Web API)")," to make an API call. Then in the two lessons that follow, we'll add error handling and learn how to manage our API key."),(0,o.kt)("p",null,"In later lessons, we will rewrite our code to make our API call in different ways. In the process, we'll also learn different tools for working with asynchronous code. After all, APIs ",(0,o.kt)("em",{parentName:"p"},"are")," asynchronous. While we will only be learning how to apply async tools to API calls in this section, the async tools we learn can also be used for other asynchronous JavaScript operations as well."),(0,o.kt)("p",null,"However, we're not quite ready to jump off the async deep end just yet. We're going to start by learning how to make an API call the old-fashioned way with an ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object. Why? The old-fashioned way of making an API call is what all other tools are built on top of, like ",(0,o.kt)("a",{parentName:"p",href:"https://api.jquery.com/jquery.ajax/"},"jQuery's AJAX")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"Fetch API (another Web API)"),". In this course section, we'll learn how to use the Fetch API, but not jQuery's AJAX. "),(0,o.kt)("p",null,"So while you may not be using ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," for this section's independent project (you can if you want!), you will have a better understanding of how tools like Fetch work when we actually use them later in this section."),(0,o.kt)("h2",{id:"making-an-api-call-in-javascript"},"Making an API Call in JavaScript"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We will not include all the code for building out a complete webpack environment in this lesson. However, we'll share a repository at the end of this 3-part walkthrough with all of the code to make an API call in a fully functioning webpack environment. If you decide to code along with these next three lessons, make sure to include a webpack environment. "),(0,o.kt)("p",null,"The next lesson covers how to protect your API key, so if you are coding along with this lesson, do not make any commits or push to a remote repository until you've completed the next lesson!"),(0,o.kt)("p",null,"Note that because we aren't testing, we don't need a ",(0,o.kt)("inlineCode",{parentName:"p"},"__tests__")," directory. For now, we also don't need a ",(0,o.kt)("inlineCode",{parentName:"p"},"js")," directory. All of our JS code in this lesson will be in ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," \u2014 the same naming convention we've been using with webpack projects. So for this walkthrough, we really just need to look at two files: ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js"),"."),(0,o.kt)("p",null,"Let's start with the HTML:"),(0,o.kt)("div",{class:"filename"},"src/index.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<html lang="en-US">\n<head>\n  <title>Weather</title>\n</head>\n<body>\n  <div class="container">\n    <h1>Get Weather Conditions From Anywhere!</h1>\n    <p>To get the current weather conditions for a location, please enter the city name or the city and state separated by a comma. Here are three examples:</p>\n    <pre>\n      Portland\n      Atlanta, Georgia\n      cairo\n    </pre>\n    <form>\n      <label for="location">Enter a location:</label>\n      <input id="location" type="text" name="location">\n      <button type="submit" class="btn-success" id="weatherLocation">Get Current Temperature and Humidity</button>\n    </form>\n    <p id="showResponse"></p>\n  </div>\n</body>\n</html>\n')),(0,o.kt)("p",null,"We have instructions and a simple input for a location. We also have a P tag for showing the API response, which will be the temperature and the humidity, or an error message."),(0,o.kt)("p",null,"To style our HTML, we're using two Bootstrap classes: ",(0,o.kt)("inlineCode",{parentName:"p"},"container")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"btn-success"),"."),(0,o.kt)("p",null,"Now let's look at the code for the API call:"),(0,o.kt)("div",{class:"filename"},"src/index.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import 'bootstrap';\nimport 'bootstrap/dist/css/bootstrap.min.css';\nimport './css/styles.css';\n\n// Business Logic\n\nfunction getWeather(city) {\n  let request = new XMLHttpRequest();\n  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[YOUR-API-KEY-HERE]`;\n  \n  request.addEventListener(\"loadend\", function() {\n    const response = JSON.parse(this.responseText);\n    if (this.status === 200) {\n      printElements(response, city);\n    }\n  });\n\n  request.open(\"GET\", url, true);\n  request.send();\n}\n\n// UI Logic\n\nfunction printElements(apiResponse, city) {\n  document.querySelector('#showResponse').innerText = `The humidity in ${city} is ${apiResponse.main.humidity}%.\n  The temperature in Kelvins is ${apiResponse.main.temp} degrees.`;\n}\n\nfunction handleFormSubmission(event) {\n  event.preventDefault();\n  const city = document.querySelector('#location').value;\n  document.querySelector('#location').value = null;\n  getWeather(city);\n}\n\nwindow.addEventListener(\"load\", function() {\n  document.querySelector('form').addEventListener(\"submit\", handleFormSubmission);\n});\n")),(0,o.kt)("p",null,"Our JS is separated between business logic and user interface logic. All of the code should look familiar to you, except for the code inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"getWeather")," function. "),(0,o.kt)("p",null,"Let's review all of the JavaScript by the order in which it runs. Starting at the bottom, we have two very familiar event listeners:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'window.addEventListener("load", function() {\n  document.querySelector(\'form\').addEventListener("submit", handleFormSubmission);\n});\n')),(0,o.kt)("p",null,"For the form 'submit' event listener, we pass in the function ",(0,o.kt)("inlineCode",{parentName:"p"},"handleFormSubmission")," as a callback, to be called when the form is submitted. Remember that ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Callback_function"},"a callback function")," is a function that's passed into another function as an argument, to be used at a later time."),(0,o.kt)("p",null,"Next, in the ",(0,o.kt)("inlineCode",{parentName:"p"},"handleFormSubmission")," function we do a few things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We prevent the default behavior of the form submission."),(0,o.kt)("li",{parentName:"ul"},"We get the value from the form input and save it in a variable called ",(0,o.kt)("inlineCode",{parentName:"li"},"city")),(0,o.kt)("li",{parentName:"ul"},"Then we call the function ",(0,o.kt)("inlineCode",{parentName:"li"},"getWeather")," with the ",(0,o.kt)("inlineCode",{parentName:"li"},"city")," as an argument; ",(0,o.kt)("inlineCode",{parentName:"li"},"getWeather")," will handle making our API call to get the current weather data for the user-inputted city.")),(0,o.kt)("div",{class:"filename"},"src/index.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function handleFormSubmission(event) {\n  event.preventDefault();\n  const city = document.querySelector('#location').value;\n  document.querySelector('#location').value = null;\n  getWeather(city);\n}\n")),(0,o.kt)("p",null,"The function ",(0,o.kt)("inlineCode",{parentName:"p"},"getWeather")," contains new and unfamiliar code. Take note that it is a part of our Business Logic, because it doesn't access or alter the DOM. Let's review this new code:"),(0,o.kt)("div",{class:"filename"},"src/index.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function getWeather(city) {\n  let request = new XMLHttpRequest();\n  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[YOUR-API-KEY-HERE]`;\n  \n  request.addEventListener("loadend", function() {\n    const response = JSON.parse(this.responseText);\n    if (this.status === 200) {\n      printElements(response, city);\n    }\n  });\n\n  request.open("GET", url, true);\n  request.send();\n}\n')),(0,o.kt)("p",null,"This is the code that handles creating our API call: making a request, sending it, and handling the response. We'll break down this new code line by line. "),(0,o.kt)("p",null,"First, we use the constructor of the ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object (XHR for short) to create a new instance of it; we save this instance in a variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"request"),":"),(0,o.kt)("div",{class:"filename"},"src/index.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let request = new XMLHttpRequest();\n")),(0,o.kt)("p",null,"The name ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," is a bit misleading. These objects are used to interact with servers \u2014 exactly what we want to do with API calls. They are ",(0,o.kt)("em",{parentName:"p"},"not")," specific to XML requests. As we mentioned before, XML is one relatively common data format that APIs use to send data. However, JSON is much more common these days, and ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," objects can be used with JSON and other types of data as well, not just XML."),(0,o.kt)("p",null,"Next, we save the URL for our API call in a variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"url"),":"),(0,o.kt)("div",{class:"filename"},"src/index.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[YOUR-API-KEY-HERE]`;\n")),(0,o.kt)("p",null,"Our URL string is a template literal with an embedded expression ",(0,o.kt)("inlineCode",{parentName:"p"},"${city}"),", so the value the user inputs into the form is passed directly into our URL string via our ",(0,o.kt)("inlineCode",{parentName:"p"},"city")," variable."),(0,o.kt)("p",null,"Saving the request URL in a variable isn't necessary, but it makes our code a bit easier to read. Why? We'll use this ",(0,o.kt)("inlineCode",{parentName:"p"},"url")," as one of three arguments passed into the following method later on: ",(0,o.kt)("inlineCode",{parentName:"p"},'request.open("GET", url, true);'),". If we directly include the URL as the second argument, it makes our code a bit harder to read, like so: ",(0,o.kt)("inlineCode",{parentName:"p"},'request.open("GET", http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[YOUR-API-KEY-HERE], true);'),"."),(0,o.kt)("p",null,"Note that you'll need to put your own API key in ",(0,o.kt)("inlineCode",{parentName:"p"},"[YOUR-API-KEY-HERE]")," for the code to work correctly. If you are coding along with this lesson, go ahead and add your API key now, but do not commit your code until you learn how to protect your API key in the next lesson."),(0,o.kt)("p",null,"Next, we set up an event listener that listens for when our API call is complete:"),(0,o.kt)("div",{class:"filename"},"src/index.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'request.addEventListener("loadend", function() {\n  const response = JSON.parse(this.responseText);\n  if (this.status === 200) {\n    printElements(response, city);\n  }\n});\n')),(0,o.kt)("p",null,"To do this, we set up an event listener for the ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object's event called ",(0,o.kt)("inlineCode",{parentName:"p"},'"loadend"'),".  The ",(0,o.kt)("inlineCode",{parentName:"p"},'"loadend"')," event will fire when a request (API call) has been completed, whether or not it was successful. "),(0,o.kt)("p",null,"Just like with other event listeners, the second argument is the callback function that will run when the corresponding event happens. So, when our API call is finished, this callback function will run:"),(0,o.kt)("div",{class:"filename"},"src/index.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function() {\n  const response = JSON.parse(this.responseText);\n  if (this.status === 200) {\n    printElements(response, city);\n  }\n}\n")),(0,o.kt)("p",null,"This callback function does three things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Parse the API response"),(0,o.kt)("li",{parentName:"ul"},"Check if the API call was successful"),(0,o.kt)("li",{parentName:"ul"},"And if it was, call a function to print the data we received from the API")),(0,o.kt)("p",null,"Let's run through each line of this callback function individually. First, we run the following line of code:"),(0,o.kt)("div",{class:"filename"},"src/index.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const response = JSON.parse(this.responseText);\n")),(0,o.kt)("p",null,"Starting with ",(0,o.kt)("inlineCode",{parentName:"p"},"this.responseText"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," represents our ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," object, and ",(0,o.kt)("inlineCode",{parentName:"p"},"responseText")," is a property of ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," objects that contains the information sent from the API. This could be the weather data or an error message. Either way, the ",(0,o.kt)("inlineCode",{parentName:"p"},"responseText")," property is automatically populated once a response is received from an API server."),(0,o.kt)("p",null,"We parse ",(0,o.kt)("inlineCode",{parentName:"p"},"this.responseText")," with JavaScript's built-in ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"},(0,o.kt)("inlineCode",{parentName:"a"},"JSON.parse()"))," method. This ensures that the data is properly formatted as JSON data. Otherwise, our code won't recognize the data as JSON and we'll get an error when we try to use dot notation to get data from it. The ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.parse()")," method is essential for working with APIs. As we mentioned in a previous lesson, other programming languages also have methods for parsing JSON."),(0,o.kt)("p",null,"Next, we use branching to determine if the HTTP status code of the API response is equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"200"),"."),(0,o.kt)("div",{class:"filename"},"src/index.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"if (this.status === 200) {\n  printElements(response, city);\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"status")," is also a property of ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," objects, and its job is to log the HTTP status code of the API call response."),(0,o.kt)("p",null,"Why does ",(0,o.kt)("inlineCode",{parentName:"p"},"this.status === 200")," need to be part of our conditional? Well, the ",(0,o.kt)("inlineCode",{parentName:"p"},'"loadend"')," event fires when the API call is complete, but it doesn't take into account whether the API call was successful or returned an error. In the last lesson, we learned that a 200 response indicates a successful API call. So, this conditional states that the API call must be successful before our code processes that data."),(0,o.kt)("p",null,"If our API call is successful, we call the ",(0,o.kt)("inlineCode",{parentName:"p"},"printElements")," function to handle printing the API response data to the webpage."),(0,o.kt)("div",{class:"filename"},"src/index.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"printElements(response, city);\n")),(0,o.kt)("p",null,"We need to be sure to pass in the ",(0,o.kt)("inlineCode",{parentName:"p"},"response")," from the API, as well as the user-inputted ",(0,o.kt)("inlineCode",{parentName:"p"},"city")," so that our ",(0,o.kt)("inlineCode",{parentName:"p"},"printElements")," can handle displaying all of that information. "),(0,o.kt)("p",null,"Now let's take a look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"printElements")," function:"),(0,o.kt)("div",{class:"filename"},"src/index.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function printElements(apiResponse, city) {\n  document.querySelector('#showResponse').innerText = `The humidity in ${city} is ${apiResponse.main.humidity}%.\n  The temperature in Kelvins is ${apiResponse.main.temp} degrees.`;\n}\n")),(0,o.kt)("p",null,"As we can see, the ",(0,o.kt)("inlineCode",{parentName:"p"},"printElements")," function prints the weather data to our webpage. Here, too, we use template literals to add variables directly to strings. "),(0,o.kt)("p",null,"To access the weather data, we access properties within the ",(0,o.kt)("inlineCode",{parentName:"p"},"apiResponse")," parameter, which represents the response object from the API. "),(0,o.kt)("p",null,"Take note that how the data is structured in the API response object always varies from API to API. That's why it's so important to test API calls in Postman and practice parsing JSON and accessing the data you want."),(0,o.kt)("p",null,"Let's return to the ",(0,o.kt)("inlineCode",{parentName:"p"},"getWeather")," function, because we're not done covering the code inside of it! Let's take another look at the entire function:"),(0,o.kt)("div",{class:"filename"},"src/index.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function getWeather(city) {\n  let request = new XMLHttpRequest();\n  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[YOUR-API-KEY-HERE]`;\n  \n  request.addEventListener("loadend", function() {\n    const response = JSON.parse(this.responseText);\n    if (this.status === 200) {\n      printElements(response, city);\n    }\n  });\n\n  // We\'ve covered everything except for the two lines below!\n  request.open("GET", url, true);\n  request.send();\n}\n')),(0,o.kt)("p",null,"By the time we've arrived at the last two lines of code in the ",(0,o.kt)("inlineCode",{parentName:"p"},"getWeather")," function, we've done a few things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We've created a new ",(0,o.kt)("inlineCode",{parentName:"li"},"XMLHttpRequest")," object saved in the ",(0,o.kt)("inlineCode",{parentName:"li"},"request")," variable."),(0,o.kt)("li",{parentName:"ul"},"We've created our request URL with the city data and API key."),(0,o.kt)("li",{parentName:"ul"},"We've created an event listener for the ",(0,o.kt)("inlineCode",{parentName:"li"},'"loadend"')," event to fire when the API call has finished in order to process the API's response.")),(0,o.kt)("p",null,"But we haven't actually sent our request yet! Well, that's what these last two lines of code do: they open and send the request."),(0,o.kt)("div",{class:"filename"},"src/index.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},' request.open("GET", url, true);\n request.send();\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest.open()")," method takes three arguments: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The method of the request (in this case ",(0,o.kt)("inlineCode",{parentName:"li"},"GET"),")"),(0,o.kt)("li",{parentName:"ol"},"The request URL (which we stored in a variable called ",(0,o.kt)("inlineCode",{parentName:"li"},"url"),")"),(0,o.kt)("li",{parentName:"ol"},"A boolean for whether the request should be asynchronous or not. ")),(0,o.kt)("p",null,"We always want the request to be async, because we don't want the browser to freeze up for our users! For the API calls we make in this section, these three arguments will almost always be the same \u2014 the only exception will be if you make a ",(0,o.kt)("inlineCode",{parentName:"p"},'"POST"')," or other type of request instead of ",(0,o.kt)("inlineCode",{parentName:"p"},'"GET"'),", though it's not expected that you will in this course section."),(0,o.kt)("p",null,"Once we've opened the request, we send it. It's at this point that we wait for the API to return a response. Once it does, our callback function attached to the ",(0,o.kt)("inlineCode",{parentName:"p"},'"loadend"')," event will run. Then, if our API call is successful, our ",(0,o.kt)("inlineCode",{parentName:"p"},"printElements()")," function will be run."),(0,o.kt)("h2",{id:"more-about-xhr-objects"},"More About XHR Objects"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Let's go into a bit more detail about ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," objects. We can see exactly what properties an ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object has by adding a breakpoint inside our conditional and then running the code in the browser. (You don't need to do this right now \u2014 it's fine to just look at the image below \u2014 but we recommend taking a closer look at an ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object at some point.)"),(0,o.kt)("div",{class:"filename"},"src/index.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'  request.addEventListener("loadend", function() {\n    debugger;\n    const response = JSON.parse(this.responseText);\n    if (this.status === 200) {\n      printElements(response, city);\n    }\n  });\n')),(0,o.kt)("p",null,"Adding a breakpoint from the ",(0,o.kt)("em",{parentName:"p"},"Sources")," tab is better than adding a ",(0,o.kt)("inlineCode",{parentName:"p"},"debugger;")," statement; the code snippet above just shows where the breakpoint should go."),(0,o.kt)("p",null,"When we're paused in the debugger, we can then go to the DevTools console and examine ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> this;\nXMLHttpRequest\xa0{readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: \u0192,\xa0\u2026}\n")),(0,o.kt)("p",null,"If we expand the ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object in the DevTools console, it will look something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/xml-http-response-object-CROPPED.png",alt:"This image shows the properties of an XMLHttpRequest object. It has a lot of properties."})),(0,o.kt)("p",null,"We cropped this image \u2014 there's much more listed for both the ",(0,o.kt)("inlineCode",{parentName:"p"},"response")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"responseText")," properties. As you can see, an ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object has a lot of functionality. You don't need to worry about most of these properties right now. However, there are a few that will be helpful during this section:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"responseText"),": We've already discussed this one. It includes the text of the API response. However, you won't be able to access the data inside this property with ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors"},"object property accessors")," until you parse it with ",(0,o.kt)("inlineCode",{parentName:"li"},"JSON.parse()"),".  (There's also a ",(0,o.kt)("inlineCode",{parentName:"li"},"response")," property which has the same data, but this data may not be a string. ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#properties"},"To optionally learn more, visit the docs"),".)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"status"),": The status is the HTTP status code of the API response. A 200 means it was successful. There are many other codes such as 404 not found and so on. We will use the ",(0,o.kt)("inlineCode",{parentName:"li"},"status")," in a future lesson."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"statusText"),': We\'ll see here that it\'s "OK". That\'s standard with a 200 status code. It means we are good to go! However, if something went wrong, this is where we might get a more detailed error message such as "not found" or "not authorized."')),(0,o.kt)("h3",{id:"readystate"},(0,o.kt)("inlineCode",{parentName:"h3"},"readyState")),(0,o.kt)("p",null,"If we look inside of an ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object, we'll also see a property called ",(0,o.kt)("inlineCode",{parentName:"p"},"readyState"),". In the above image, ",(0,o.kt)("inlineCode",{parentName:"p"},"readyState")," is is set to 4. While we won't use the ",(0,o.kt)("inlineCode",{parentName:"p"},"readyState")," property, understanding it can help us better understand ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," objects. "),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"readyState")," property is always set to a number, and each number represents a different state that our ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object can be in. "),(0,o.kt)("p",null,"Check out the image below from ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState"},"MDN's reference on ",(0,o.kt)("inlineCode",{parentName:"a"},"XMLHttpRequest.readyState")),". As we can see, ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest"),' objects have five states they can be in. (Take note that an "',(0,o.kt)("inlineCode",{parentName:"p"},"XMHttpRequest"),' client" is simply an instance of that object type.)'),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Async-and-APIs-2020/xml-http-request-obj-states.png"},"This table shows the states, 0 through 4, that an ",(0,o.kt)("inlineCode",{parentName:"a"},"XMLHttpRequest")," object can be in")),(0,o.kt)("p",null,"Each state describes a step in the process of making an API call using the ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest"),' object. Once we get to 4, "DONE", we know that the API call has been completed.'),(0,o.kt)("p",null,"To visualize the change in ",(0,o.kt)("inlineCode",{parentName:"p"},"readyState")," as we make an API call in our weather app, we can set up an event listener for the ",(0,o.kt)("inlineCode",{parentName:"p"},'"readystatechange"')," event, and log ",(0,o.kt)("inlineCode",{parentName:"p"},"this.readState")," inside of it."),(0,o.kt)("div",{class:"filename"},"src/index.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function getWeather(city) {\n  let request = new XMLHttpRequest();\n  ...\n  request.addEventListener("readystatechange", function() {\n    console.log(this.readyState);\n  });\n} \n')),(0,o.kt)("p",null,"Doing so is completely optional, and we won't include this event listener in the example repo."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In this lesson we learned how to create an API call using an ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object, and how to parse the API response into JSON so that we can access the data. We handled making the asynchronous request using the ",(0,o.kt)("inlineCode",{parentName:"p"},'"loadend"')," event listener that fires when the API call has completed (with or without error). "),(0,o.kt)("p",null,"Up next, we'll learn how to protect our API key(s), then we'll add error handling to our OpenWeather app."))}d.isMDXComponent=!0}}]);