"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[88833],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(a),u=o,d=h["".concat(l,".").concat(u)]||h[u]||m[u]||r;return a?n.createElement(d,s(s({ref:t},c),{},{components:a})):n.createElement(d,s({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},54869:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={title:"Testing API Calls with Postman",id:"testing_api_calls_with_postman",slug:"testing_api_calls_with_postman",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0e_testing_api_calls_with_postman.md"},s=void 0,i={unversionedId:"intermediate_javascript_classic/asynchrony-and-apis/testing_api_calls_with_postman",id:"intermediate_javascript_classic/asynchrony-and-apis/testing_api_calls_with_postman",title:"Testing API Calls with Postman",description:"In the last lesson, we walked through the process of signing up for a developer account for the OpenWeather API and then getting an API key. We learned some general pointers for walking through API documentation and we even made an API call in the browser. In this lesson, we'll learn how to use a tool called Postman to test our API calls.",source:"@site/docs/intermediate_javascript_classic/5_asynchrony-and-apis/0e_testing_api_calls_with_postman.md",sourceDirName:"intermediate_javascript_classic/5_asynchrony-and-apis",slug:"/intermediate_javascript_classic/asynchrony-and-apis/testing_api_calls_with_postman",permalink:"/intermediate_javascript_classic/asynchrony-and-apis/testing_api_calls_with_postman",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Testing API Calls with Postman",id:"testing_api_calls_with_postman",slug:"testing_api_calls_with_postman",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0e_testing_api_calls_with_postman.md"},sidebar:"intermediate_javascript_classic",previous:{title:"API Documentation and Keys",permalink:"/intermediate_javascript_classic/asynchrony-and-apis/api_documentation_and_keys"},next:{title:"Parsing JSON",permalink:"/intermediate_javascript_classic/asynchrony-and-apis/parsing_json"}},l={},p=[{value:"Installing Postman",id:"installing-postman",level:2},{value:"Using Postman",id:"using-postman",level:2},{value:"Always Test your APIs",id:"always-test-your-apis",level:3}],c={toc:p},h="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the last lesson, we walked through the process of signing up for a developer account for the OpenWeather API and then getting an API key. We learned some general pointers for walking through API documentation and we even made an API call in the browser. In this lesson, we'll learn how to use a tool called Postman to test our API calls."),(0,o.kt)("h2",{id:"installing-postman"},"Installing Postman"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Technically, we could test all of our API calls in the browser. However, Postman is a much better tool for testing API calls and it includes many features that make testing APIs a more visual and inviting process.  "),(0,o.kt)("p",null,"To download the Postman app on your personal machine, go to ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/downloads/"},"the Postman downloads page"),", and select the correct download for your operating system. "),(0,o.kt)("p",null,"Finish your installation process and then open Postman. While Postman has a lot of nice features, we'll only use the most basic ones here."),(0,o.kt)("h2",{id:"using-postman"},"Using Postman"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"To make an API call, we need to create a new request. There's two ways to do this: you can open a new tab or select ",(0,o.kt)("em",{parentName:"p"},"Create a request")," from the overview tab. In the following image these options are highlighted by a red circle. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Async-and-APIs-2020/postman-history-tab.png",alt:"This shows the Postman overview tab with the options to create a new request highlighted in red circles."})),(0,o.kt)("p",null,"Next, we need to type in our query into the URL bar. "),(0,o.kt)("p",null,"The default type of API call is a GET request (the request type is just to the left of the URL bar). You will probably only be making GET requests during this section, but if you need to make a POST or other type of request, this is where you'd update the query to reflect that."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Async-and-APIs-2020/basic-postman-query-2022.gif",alt:"In this GIF, we type in the query we want and then send it."})),(0,o.kt)("p",null,"In the GIF above, we paste in the query we want. The ",(0,o.kt)("em",{parentName:"p"},"Params")," tab is open and the parameters of the API call are automatically populated if the URL includes any parameters. "),(0,o.kt)("p",null,"Let's take a closer look at our query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://api.openweathermap.org/data/2.5/weather?q=Portland&appid=xxxx\n")),(0,o.kt)("p",null,"The format of this URL is exactly the same as the URL format of a webpage after we submit a form. There is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The protocol ",(0,o.kt)("inlineCode",{parentName:"li"},"https")),(0,o.kt)("li",{parentName:"ul"},"The domain and path ",(0,o.kt)("inlineCode",{parentName:"li"},"api.openweathermap.org/data/2.5/weather")," "),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"?")," to denote it's a query. "),(0,o.kt)("li",{parentName:"ul"},"Then finally, the parameters ",(0,o.kt)("inlineCode",{parentName:"li"},"q")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"appid"),"; each parameter has a value and is separated by an ",(0,o.kt)("inlineCode",{parentName:"li"},"&")," symbol: ",(0,o.kt)("inlineCode",{parentName:"li"},"q=Portland&appid=xxxx")," ")),(0,o.kt)("p",null,"This is a very common format, though the names of the query parameters themselves will vary between APIs."),(0,o.kt)("p",null,"As we can see, Postman makes it very easy to see our parameters, and also to update them if need be. We can update the parameters (or add more) either in the URL itself or by changing/adding key value pairs in the ",(0,o.kt)("em",{parentName:"p"},"Params")," tab. The latter is a better idea because then we won't accidentally break the rest of the URL in the process."),(0,o.kt)("p",null,"Once we're ready to make our API call, we click the ",(0,o.kt)("em",{parentName:"p"},"Send")," button."),(0,o.kt)("p",null,"We intentionally put in a bogus API key here but we still get an informative response from the API. We'll see that response in the bottom tab of Postman."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Async-and-APIs-2020/postman-response-tab.gif",alt:"JSON response plus information about response code."})),(0,o.kt)("p",null,"Every API response comes with a ",(0,o.kt)("strong",{parentName:"p"},"response code"),". If all goes well, we'll get a ",(0,o.kt)("em",{parentName:"p"},"200 OK"),". A 200 code means the query was successful. In this case, though, we get a ",(0,o.kt)("em",{parentName:"p"},"401")," code, which means the query was unauthorized. The message tells us exactly why: \"Invalid API key.\" That's to be expected. We intentionally didn't put in a valid key. We can hover over the response code in the upper right corner to see what it means. Postman also has tabs so we can look at the response in different ways \u2014 but as you can see from the GIF, the ",(0,o.kt)("em",{parentName:"p"},"Pretty")," option is the best way to go."),(0,o.kt)("p",null,"One other really nice thing about Postman is the ",(0,o.kt)("em",{parentName:"p"},"History")," tab in the left-hand pane, which is highlighted in red in the image below. Just as our browser keeps a history of pages we've visited, making it easy to visit them again, Postman does the same. "),(0,o.kt)("p",null,"We can also open a new tab (above the URL bar) if we want to be able to toggle between testing multiple requests at once."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Async-and-APIs-2020/postman-history-tab.png",alt:"This highlights the _History_ tab in a red rectangle."})),(0,o.kt)("p",null,"We've just scratched the surface of what Postman can do, but this functionality is likely all you'll need for making and testing API calls while you're a student at Epicodus. Feel free to explore Postman further \u2014 the ",(0,o.kt)("a",{parentName:"p",href:"https://learning.postman.com/docs/getting-started/introduction/"},"documentation")," is extensive."),(0,o.kt)("h3",{id:"always-test-your-apis"},"Always Test your APIs"),(0,o.kt)("p",null,"Whenever you want to integrate an API call in your code, ",(0,o.kt)("strong",{parentName:"p"},"always")," test it in Postman first. There are several reasons why this is important:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the API endpoint doesn't work, you can verify that ",(0,o.kt)("em",{parentName:"li"},"before")," wasting your time building code based on it. Most API endpoints ",(0,o.kt)("em",{parentName:"li"},"will")," work, but if you're working with an API that might be outdated or has weak documentation, you might find that some endpoints aren't working correctly."),(0,o.kt)("li",{parentName:"ul"},"More likely, and more importantly, you want to make sure that you've correctly formatted the API call before you integrate it into your code. That way, if it's not working correctly in your code, you know that your code is the problem, ",(0,o.kt)("em",{parentName:"li"},"not")," the API call. If you don't test the call first, you may have a hard time distinguishing whether the problem is coming from your code or the API query itself.")),(0,o.kt)("p",null,"At this point, we are ",(0,o.kt)("em",{parentName:"p"},"almost")," ready to start building out a JavaScript application. Before we do, though, let's take a closer look at the JSON format \u2014 and how to pull data from it."))}m.isMDXComponent=!0}}]);