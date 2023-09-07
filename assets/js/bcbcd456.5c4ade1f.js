"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[92991],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=h(a),d=o,m=p["".concat(l,".").concat(d)]||p[d]||c[d]||i;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var h=2;h<i;h++)r[h]=a[h];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},97547:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var n=a(87462),o=(a(67294),a(3905));const i={title:"4. API Documentation and Keys",id:"api_documentation_and_keys",slug:"api_documentation_and_keys",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/5_asynchrony-and-apis/0d_api_documentation_and_keys.md"},r=void 0,s={unversionedId:"intermediate_javascript/asynchrony-and-apis/api_documentation_and_keys",id:"intermediate_javascript/asynchrony-and-apis/api_documentation_and_keys",title:"4. API Documentation and Keys",description:"Just like we covered in the previous lesson, there are many different APIs we can incorporate into our applications. These range from APIs provided by Twitter and YouTube to APIs for the weather forecast, sports scores, and movie databases. For instance, if you wanted information about movies in your application, you could try the IMDB or Rotten Tomatoes API.",source:"@site/docs/intermediate_javascript/5_asynchrony-and-apis/0d_api_documentation_and_keys.md",sourceDirName:"intermediate_javascript/5_asynchrony-and-apis",slug:"/intermediate_javascript/asynchrony-and-apis/api_documentation_and_keys",permalink:"/lhtp/intermediate_javascript/asynchrony-and-apis/api_documentation_and_keys",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"4. API Documentation and Keys",id:"api_documentation_and_keys",slug:"api_documentation_and_keys",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/5_asynchrony-and-apis/0d_api_documentation_and_keys.md"},sidebar:"intermediate_javascript",previous:{title:"3. Introduction to APIs",permalink:"/lhtp/intermediate_javascript/asynchrony-and-apis/introduction_to_apis"},next:{title:"5. Testing API Calls with Postman",permalink:"/lhtp/intermediate_javascript/asynchrony-and-apis/testing_api_calls_with_postman"}},l={},h=[{value:"API Keys",id:"api-keys",level:2},{value:"Working with API Documentation",id:"working-with-api-documentation",level:2},{value:"Getting Started with the OpenWeather API",id:"getting-started-with-the-openweather-api",level:3},{value:"API Limits",id:"api-limits",level:3},{value:"Documentation on Endpoints",id:"documentation-on-endpoints",level:3},{value:"Making an API Call",id:"making-an-api-call",level:3},{value:"Vetting an API",id:"vetting-an-api",level:2},{value:"Summary",id:"summary",level:2}],u={toc:h},p="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Just like we covered in the previous lesson, there are many different APIs we can incorporate into our applications. These range from APIs provided by Twitter and YouTube to APIs for the weather forecast, sports scores, and movie databases. For instance, if you wanted information about movies in your application, you could try the IMDB or Rotten Tomatoes API. "),(0,o.kt)("p",null,"While the specifications for each API will be different, there's a couple things that most APIs will have in common: documentation and API keys. We'll cover both of these topics in this lesson, and use the OpenWeather API as an example."),(0,o.kt)("h2",{id:"api-keys"},"API Keys"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Some APIs are free while others are premium, though many premium APIs have free tiers. A good place to start is verifying if the API is accessible and at what cost."),(0,o.kt)("p",null,"In most cases, you'll need to create a developer account with the API you wish to use and then get an API key. An ",(0,o.kt)("strong",{parentName:"p"},"API key")," is like a password and should always be protected \u2014 otherwise, someone else can access (and use) your API account."),(0,o.kt)("p",null,"The APIs that we'll use during this section use token-based authentication. In our case, that's just a fancy way of saying that we need to attach our API key to every call we make to that server. The API server will check our token (the API key) and verify whether we can have access to the information we are asking for. This verification process is known as ",(0,o.kt)("strong",{parentName:"p"},"authentication"),". We take advantage of authentication all the time, like when we log into our email, Epicenter, or any other accounts we have online."),(0,o.kt)("p",null,"Some APIs use tokens that expire every 24 hours. That means we need to get a new token every day. Other sites use a more complex authentication process known as OAuth. OAuth is beyond the scope of what we cover, but it's good to know it exists. We'll focus on sites that provide an API key that doesn't expire."),(0,o.kt)("p",null,"One such site is ",(0,o.kt)("a",{parentName:"p",href:"https://openweathermap.org/"},"OpenWeather"),", which provides information about weather conditions around the world. Its API has both free and premium tiers. We'll use the free tier which will still allow us to make plenty of API calls."),(0,o.kt)("h2",{id:"working-with-api-documentation"},"Working with API Documentation"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Many APIs have extensive documentation, but not always. When you're getting started with a new API, look for a guide, API page, or quick start page either in the navbar or on the splash page (the \"introductory\" page of a site). It's also good to briefly review the contents of the documentation to what it covers, and locate important information like pricing and how to get started."),(0,o.kt)("p",null,"For the OpenWeather API, we can find information about signing up for an account and getting an API key at the ",(0,o.kt)("a",{parentName:"p",href:"https://openweathermap.org/guide"},"OpenWeather API guide"),". "),(0,o.kt)("h3",{id:"getting-started-with-the-openweather-api"},"Getting Started with the OpenWeather API"),(0,o.kt)("p",null,"To get an API key for OpenWeather, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Sign up for an account, and sign in."),(0,o.kt)("li",{parentName:"ol"},"Once you are signed in, click on the ",(0,o.kt)("em",{parentName:"li"},"API keys")," tab."),(0,o.kt)("li",{parentName:"ol"},"Locate the API key called ",(0,o.kt)("em",{parentName:"li"},"Default"),". You'll use this key in every request you make to the OpenWeather API.")),(0,o.kt)("p",null,"Take note that you can generate a new key with a unique name instead of using ",(0,o.kt)("em",{parentName:"p"},"Default"),". Generally, you'd only need multiple keys if you are using the API in multiple locations (such as on different sites) and you want to keep track of the API usage in each location."),(0,o.kt)("p",null,"Keep the information about your key handy since we'll be using it in the next lesson to make our first API call."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Async-and-APIs-2020/api-key-open-weather.png",alt:"Click on the API keys tab to access your API keys."})),(0,o.kt)("h3",{id:"api-limits"},"API Limits"),(0,o.kt)("p",null,"Also, note the message just above our API key information:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"You can generate as many API keys as needed for your subscription. We accumulate the total load from all of them.\n")),(0,o.kt)("p",null,"The total load is the number of API calls we make. Almost all APIs limit the number of calls we make, especially for free tiers. We can usually see the limits by going to a page that lists different membership tiers (in this case, by clicking on the ",(0,o.kt)("em",{parentName:"p"},"Billing Plans")," tab) or by looking more closely at the documentation."),(0,o.kt)("p",null,"Limits on API calls can be monthly, weekly, daily, and even by the minute. In the case of the OpenWeather API, the free tier is one million calls per month \u2014 we don't have to worry about hitting that limit any time soon! However, other APIs you might work with may have introductory free plans that much more severely limit the number of API calls you can make, so you should always check the limits before you decide to interface with an API in your application."),(0,o.kt)("h3",{id:"documentation-on-endpoints"},"Documentation on Endpoints"),(0,o.kt)("p",null,"A well-documented API will have information about all of its ",(0,o.kt)("strong",{parentName:"p"},"endpoints"),". An endpoint is just a specific URL we can query for information. In the case of the OpenWeather API, there's a ",(0,o.kt)("em",{parentName:"p"},"lot")," of information we can query. Working with APIs is just one more example of how important it is to get really used to working with documentation. In a future job, you may well have to dig deep into existing API documentation to find the exact API endpoint that you're looking for."),(0,o.kt)("p",null,"In our case, we want current weather conditions. This could be useful for a wide range of sites. Let's say, for instance, that we're working on a site that displays local parks. Wouldn't it be nice if a user could see the local forecast for that park on the same page?"),(0,o.kt)("p",null,"We can click on the ",(0,o.kt)("em",{parentName:"p"},"API")," tab to get information about all the endpoints OpenWeather provides, or navigate to ",(0,o.kt)("a",{parentName:"p",href:"https://openweathermap.org/api"},"this webpage"),". If you scroll down on this page, you'll find a section called ",(0,o.kt)("em",{parentName:"p"},"Current & Forecast weather data collection"),". In this section, we'll find an API called ",(0,o.kt)("em",{parentName:"p"},"Current Weather Data"),", which is exactly what we need. You'll also see a button called ",(0,o.kt)("em",{parentName:"p"},"API Docs"),". Go ahead and click that and it will take you to ",(0,o.kt)("a",{parentName:"p",href:"https://openweathermap.org/current"},"the documentation on the Current Weather Data API"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Async-and-APIs-2020/open-weather-current-weather-data-option.png",alt:"This shows the APIs tab on OpenWeatherMap.org. We've scrolled down on this page to find the _Current Weather Data_ API. This also highlights the _API Docs_ button that we'll want to click to get to the documentation for the _Current Weather Data_ API."})),(0,o.kt)("p",null,"In the documentation for the Current Weather Data API, we'll see that we can search the current weather by a range of different search parameters including city name, longitude and latitude, or zip code. We'll go with city name for now."),(0,o.kt)("p",null,"Well documented APIs provide example URLs and OpenWeather is no different. We'll use the option that also includes a state code so OpenWeather knows we mean Portland, Oregon, not another Portland. Here's the example URL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"api.openweathermap.org/data/2.5/weather?q={city name},{state}&appid={your api key}\n")),(0,o.kt)("p",null,"We can update this to include the specific information we want:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"api.openweathermap.org/data/2.5/weather?q=portland,oregon&appid=[YOUR-API-KEY]\n")),(0,o.kt)("p",null,"Note that your API key needs to go in place of ",(0,o.kt)("inlineCode",{parentName:"p"},"[YOUR-API-KEY]"),". You should not add any syntax around your API key such as square or curly brackets. Brackets are included above for emphasis only."),(0,o.kt)("h3",{id:"making-an-api-call"},"Making an API Call"),(0,o.kt)("p",null,"Next, take that URL and enter it in the browser search bar. We'll see the following:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Async-and-APIs-2020/open-weather-json-for-pdx.png",alt:"Current weather conditions in JSON format."})),(0,o.kt)("p",null,"As we can see, we can actually make our API call right in the browser! The response we receive is in ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON"},"JSON (JavaScript Object Notation)"),", a format we are already familiar with. But why is the format in JSON if our API call itself has nothing to do with JavaScript?"),(0,o.kt)("p",null,"Well, the whole point of an API is to allow different applications to communicate with each other even if the applications use completely different programming languages. For that reason, many APIs use a more universal format to communicate with each other. JSON is the most common while XML is another less common format. Because XML is less common, we won't be covering it in this course, but if you do end up working with XML data, there is plenty of documentation online to help you."),(0,o.kt)("p",null,"Most languages, including Ruby, C#, and others, have methods to parse JSON. So while JSON is written in the same syntax as JavaScript objects, it's not really JavaScript. It's just written in that notation. The great news about this is that we are already pretty familiar with the notation that most APIs use!"),(0,o.kt)("h2",{id:"vetting-an-api"},"Vetting an API"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"During the classwork for this section, you'll have an opportunity to pick your own APIs to work with. As we've outlined in this lesson, you'll need to do a little research to determine whether it's the right API to work with. When you find an API that you want to work with, make sure to answer the following questions before proceeding:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Is the API well-documented? If not, ",(0,o.kt)("strong",{parentName:"li"},"that's a bad sign"),". It may be hard to work with as a result \u2014 and poor documentation can be a sign of a poorly-built API."),(0,o.kt)("li",{parentName:"ul"},"Is there a free tier? If so, how many API calls can you make on this tier? Is it enough for your project?"),(0,o.kt)("li",{parentName:"ul"},"Does the API provide the data you need for your project? You might find yourself building an application around what the API ",(0,o.kt)("em",{parentName:"li"},"does")," offer \u2014 but you may also want to build an application that needs specific data. In that case, make sure that the API's endpoints provide the data you need."),(0,o.kt)("li",{parentName:"ul"},"What kind of authentication does the API use? An API key (token-based authentication) is best for now. Steer clear of OAuth unless you want a challenge."),(0,o.kt)("li",{parentName:"ul"},"Does the API allow CORS? We'll discuss CORS in a ",(0,o.kt)("a",{parentName:"li",href:"https://www.learnhowtoprogram.com/intermediate-javascript/asynchrony-and-apis/sop-and-cors"},"future lesson"),". If it does allow CORS, you're good to go. If it doesn't, you should use a different API.")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In this lesson, we've walked through the process of setting up a developer account and getting an API key from OpenWeather. In the process, we've also talked about some general points for reading through API documentation. Remember to always take the time to review an API's documentation before working with it to verify that it meets your needs."),(0,o.kt)("p",null,"At this point, we're ready to start trying out API calls in Postman!"))}c.isMDXComponent=!0}}]);