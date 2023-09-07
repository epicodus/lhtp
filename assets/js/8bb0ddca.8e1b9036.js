"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[71329],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,m=u["".concat(p,".").concat(d)]||u[d]||h[d]||i;return a?r.createElement(m,o(o({ref:t},s),{},{components:a})):r.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},74561:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={title:"NaN. Bike Index, Cryptocurrency Analytics App, API of Choice (Week-Long Project) - Part 1",id:"bike_index_cryptocurrency_analytics_app_api_of_choice_week_long_project___part_1",slug:"bike_index_cryptocurrency_analytics_app_api_of_choice_week_long_project___part_1",hide_table_of_contents:!0,sidebar_position:1,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/8_asynchrony-and-apis-part-2/3a_classwork_martian_weather_bike_index_two_day_project.md"},o=void 0,l={unversionedId:"intermediate_javascript_part_time/asynchrony-and-apis-part-2/bike_index_cryptocurrency_analytics_app_api_of_choice_week_long_project___part_1",id:"intermediate_javascript_part_time/asynchrony-and-apis-part-2/bike_index_cryptocurrency_analytics_app_api_of_choice_week_long_project___part_1",title:"NaN. Bike Index, Cryptocurrency Analytics App, API of Choice (Week-Long Project) - Part 1",description:"Goal: Practice using all of the tools that we have learned so far to create an app centered around your choice of public JSON APIs which support CORS. As always, make sure you test API calls with Postman first.",source:"@site/docs/intermediate_javascript_part_time/8_asynchrony-and-apis-part-2/3a_classwork_martian_weather_bike_index_two_day_project.md",sourceDirName:"intermediate_javascript_part_time/8_asynchrony-and-apis-part-2",slug:"/intermediate_javascript_part_time/asynchrony-and-apis-part-2/bike_index_cryptocurrency_analytics_app_api_of_choice_week_long_project___part_1",permalink:"/lhtp/intermediate_javascript_part_time/asynchrony-and-apis-part-2/bike_index_cryptocurrency_analytics_app_api_of_choice_week_long_project___part_1",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"NaN. Bike Index, Cryptocurrency Analytics App, API of Choice (Week-Long Project) - Part 1",id:"bike_index_cryptocurrency_analytics_app_api_of_choice_week_long_project___part_1",slug:"bike_index_cryptocurrency_analytics_app_api_of_choice_week_long_project___part_1",hide_table_of_contents:!0,sidebar_position:1,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/8_asynchrony-and-apis-part-2/3a_classwork_martian_weather_bike_index_two_day_project.md"},sidebar:"intermediate_javascript_part_time",previous:{title:"6. Homework: Sprucing Up Your GitHub",permalink:"/lhtp/intermediate_javascript_part_time/asynchrony-and-apis/homework_sprucing_up_your_github"},next:{title:"NaN. Further Exploration: Chaining Promises",permalink:"/lhtp/intermediate_javascript_part_time/asynchrony-and-apis-part-2/further_exploration_chaining_promises"}},p={},c=[{value:"Warm Up \u2014 Part 1",id:"warm-up--part-1",level:2},{value:"Warm Up \u2014 Part 2",id:"warm-up--part-2",level:2},{value:"Code",id:"code",level:2},{value:"Bike Index API",id:"bike-index-api",level:3},{value:"Cryptocurrency Analytics App",id:"cryptocurrency-analytics-app",level:3},{value:"Pick Your Own API",id:"pick-your-own-api",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],s={toc:c},u="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Goal"),": Practice using all of the tools that we have learned so far to create an app centered around your choice of public JSON APIs which support CORS. As always, make sure you test API calls with Postman first."),(0,n.kt)("p",null,"This is a multi-day project, so you'll have time to do the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Experiment with different tools for working with asynchrony, including callbacks, promises, the Fetch API, and async functions"),(0,n.kt)("li",{parentName:"ul"},"Make multiple API calls in the application"),(0,n.kt)("li",{parentName:"ul"},"Separate out logic clearly, including keeping business logic separate from service and UI logic as necessary"),(0,n.kt)("li",{parentName:"ul"},"Write a great README with thorough setup instructions"),(0,n.kt)("li",{parentName:"ul"},"Experiment with chaining promises")),(0,n.kt)("h2",{id:"warm-up--part-1"},"Warm Up \u2014 Part 1"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"This warm up is for your first class session working on this multi-day project.")),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Are there any potential disadvantages to using async functions?"),(0,n.kt)("li",{parentName:"ul"},"What is SOP and CORS? Why is it important for making API calls in our projects?"),(0,n.kt)("li",{parentName:"ul"},"What is your preferred method of making API calls, and why?")),(0,n.kt)("h2",{id:"warm-up--part-2"},"Warm Up \u2014 Part 2"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"This warm up is for your second class session working on this multi-day project.")),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"How does the Fetch API work? "),(0,n.kt)("li",{parentName:"ul"},"What does ",(0,n.kt)("inlineCode",{parentName:"li"},"fetch()")," return?"),(0,n.kt)("li",{parentName:"ul"},"How do async functions work? "),(0,n.kt)("li",{parentName:"ul"},"What does the ",(0,n.kt)("inlineCode",{parentName:"li"},"await")," keyword do?")),(0,n.kt)("h2",{id:"code"},"Code"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Carefully read all of the prompts below and select one to work on.")," You are encouraged to do preliminary research into each API to make your selection."),(0,n.kt)("h3",{id:"bike-index-api"},"Bike Index API"),(0,n.kt)("p",null,"Build an app using the ",(0,n.kt)("a",{parentName:"p",href:"https://bikeindex.org/"},"Bike Index API"),". Your app could list all the bikes that have been registered as stolen in a given location in the past week. Or it could display statistics \u2014 for instance, you could see which manufacturer is most frequently stolen in a given area."),(0,n.kt)("p",null,"To get started, check out ",(0,n.kt)("a",{parentName:"p",href:"https://bikeindex.org/documentation/api_v3"},"the main page of the Bike Index API Docs"),'. When you are ready to set up an API key, scroll down to find the "Your applications" section of "OAuth" \u2014 it\'s from here you can set up an account and get an API key.'),(0,n.kt)("h3",{id:"cryptocurrency-analytics-app"},"Cryptocurrency Analytics App"),(0,n.kt)("p",null,"Build an app using the ",(0,n.kt)("a",{parentName:"p",href:"https://www.coingecko.com/"},"CoinGecko API"),". Take a look at the CoinGecko homepage to get a sense of what you can do \u2014 the homepage is entirely built with the CoinGecko API. CoinGecko also provides ",(0,n.kt)("a",{parentName:"p",href:"https://apiguide.coingecko.com/getting-started/endpoint-demo"},"a helpful resource")," that explains what API endpoints are used to create the different features on the homepage. Here are some specific ideas of what you can do:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Your app can list currencies and their metadata (information like a description and full name, their category, as well as their symbol name). "),(0,n.kt)("li",{parentName:"ul"},"Or, your app could show the price and exchange rates for currencies."),(0,n.kt)("li",{parentName:"ul"},"You could also show the number of trades happening for each currency.")),(0,n.kt)("p",null,"Important to Know:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CoinGecko does not require an API key or account to get started on a basic free plan for hobbyists or devs who are using the API in a practice project. If you want to specifically practice with an API that requires a key, select a different prompt."),(0,n.kt)("li",{parentName:"ul"},'Under the free plan, there is an API call limit of 10 - 50 calls per minute, depending on API "traffic", meaning how many people are using the API at the same time.'),(0,n.kt)("li",{parentName:"ul"},"Since we'll be using the API in practice projects only, we'll need to follow their requirements for attribution, that is, giving credit and linking to CoinGecko in our website. To learn about CoinGecko's requirement for attribution, ",(0,n.kt)("a",{parentName:"li",href:"https://www.coingecko.com/en/branding"},"visit this webpage"),".")),(0,n.kt)("p",null,"Resources:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Start by reviewing the ",(0,n.kt)("a",{parentName:"li",href:"https://apiguide.coingecko.com/getting-started/introduction"},"Official API Documentation"),", which includes references, tutorials, and information on best practices, errors, and rate limits."),(0,n.kt)("li",{parentName:"ul"},"Check out the ",(0,n.kt)("a",{parentName:"li",href:"https://www.coingecko.com/en/api/documentation"},"API explorer")," to test out the various API endpoints. You'll be able to input optional and required parameters and you'll get the actual API output returned to you. The API explorer tool is an alternative to using Postman to test out the API.")),(0,n.kt)("h3",{id:"pick-your-own-api"},"Pick Your Own API"),(0,n.kt)("p",null,"If you decide to use an API that isn't listed here, start with some research. We recommend checking out ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/public-apis/public-apis"},"this comprehensive list of public APIs")," that's organized by type of data and authentication required. However, there are many other online resources about free APIs. Take note of a few things when selecting an API:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make sure that the API has a free tier."),(0,n.kt)("li",{parentName:"ul"},"Make sure to confirm that the API supports CORS and that it returns JSON (unless you want to experiment with a format like XML). "),(0,n.kt)("li",{parentName:"ul"},"We suggest looking for APIs that use an API key. This isn't required, however! It's up to you to decide what's most important for you to practice."),(0,n.kt)("li",{parentName:"ul"},"We recommend that you only pick one API to focus on for the entire time so that you can have an opportunity to really build out your project. ")),(0,n.kt)("p",null,"Otherwise, if you liked the cryptocurrency analytics app prompt, but you want to work with an API that requires an API key, check out ",(0,n.kt)("a",{parentName:"p",href:"https://polygon.io/docs/stocks/getting-started"},"Polygon.io"),". Polygon includes information about stocks as well as crypto. The docs aren't quite as friendly as CoinGecko, but you will still be able to easily work with the API. Take note of a few things:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The free plan for the Polygon.io API has a rate limit of 5 API calls per minute. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://polygon.io/docs/stocks/get_v3_reference_tickers__ticker"},'Metadata, like the company name (not "ticker symbol") and description, only exists for stocks'),".")),(0,n.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Does the application make at least one API call and work as expected?"),(0,n.kt)("li",{parentName:"ul"},"Is application logic fully separated into user interface, service logic, and if necessary, business logic?"),(0,n.kt)("li",{parentName:"ul"},"Does the application include a fully functional development environment, including a ",(0,n.kt)("inlineCode",{parentName:"li"},".env")," file to hide any API keys?"),(0,n.kt)("li",{parentName:"ul"},"Does the application include a README with all setup instructions?")))}h.isMDXComponent=!0}}]);