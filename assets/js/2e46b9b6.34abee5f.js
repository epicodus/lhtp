"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[78574],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>m});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),c=p(o),d=n,m=c["".concat(l,".").concat(d)]||c[d]||u[d]||r;return o?a.createElement(m,s(s({ref:t},h),{},{components:o})):a.createElement(m,s({ref:t},h))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<r;p++)s[p]=o[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},96311:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=o(87462),n=(o(67294),o(3905));const r={title:"7. SOP and CORS",id:"sop_and_cors",slug:"sop_and_cors",hide_table_of_contents:!0,sidebar_position:22,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/5_asynchrony-and-apis/1g_cors.md"},s=void 0,i={unversionedId:"intermediate_javascript/asynchrony-and-apis/sop_and_cors",id:"intermediate_javascript/asynchrony-and-apis/sop_and_cors",title:"7. SOP and CORS",description:"We don't talk about web application security much at Epicodus because it's beyond the scope of what we teach. However, there is one important topic we need to cover briefly now that we are working with API calls.",source:"@site/docs/intermediate_javascript/5_asynchrony-and-apis/1g_cors.md",sourceDirName:"intermediate_javascript/5_asynchrony-and-apis",slug:"/intermediate_javascript/asynchrony-and-apis/sop_and_cors",permalink:"/lhtp/intermediate_javascript/asynchrony-and-apis/sop_and_cors",draft:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{title:"7. SOP and CORS",id:"sop_and_cors",slug:"sop_and_cors",hide_table_of_contents:!0,sidebar_position:22,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/5_asynchrony-and-apis/1g_cors.md"},sidebar:"intermediate_javascript",previous:{title:"6. Separating Promise Logic",permalink:"/lhtp/intermediate_javascript/asynchrony-and-apis/separating_promise_logic"},next:{title:"8. Fetch API",permalink:"/lhtp/intermediate_javascript/asynchrony-and-apis/fetch_api"}},l={},p=[{value:"Same-Origin Policy",id:"same-origin-policy",level:2},{value:"Cross-Origin Resource Sharing",id:"cross-origin-resource-sharing",level:2},{value:"SOP Applies to Certain Web APIs",id:"sop-applies-to-certain-web-apis",level:2},{value:"Working with APIs That Don&#39;t Allow CORS",id:"working-with-apis-that-dont-allow-cors",level:2}],h={toc:p},c="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We don't talk about web application security much at Epicodus because it's beyond the scope of what we teach. However, there is one important topic we need to cover briefly now that we are working with API calls."),(0,n.kt)("h2",{id:"same-origin-policy"},"Same-Origin Policy"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Browsers use ",(0,n.kt)("strong",{parentName:"p"},"same-origin policy (SOP)")," to prevent cross-site scripting attacks. A ",(0,n.kt)("a",{parentName:"p",href:"https://owasp.org/www-community/attacks/xss/"},"cross-site scripting attack")," is when a malicious user attempts to access another site via the browser. This generally involves injecting malicious scripts into a web application in an attempt to gain access, get data, or sabotage a site."),(0,n.kt)("p",null,"Same-origin policy means that a request can only be made from one URL to another if the receiver and the sender have the same ",(0,n.kt)("strong",{parentName:"p"},"protocol"),", ",(0,n.kt)("strong",{parentName:"p"},"host"),", and ",(0,n.kt)("strong",{parentName:"p"},"port"),"."),(0,n.kt)("p",null,"Here's a quick example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://thisisthehost.com/somepage"},"https://thisisthehost.com/somepage"))),(0,n.kt)("p",null,"In the URL above, ",(0,n.kt)("inlineCode",{parentName:"p"},"https")," is the ",(0,n.kt)("strong",{parentName:"p"},"protocol")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"thisisthehost.com")," is the ",(0,n.kt)("strong",{parentName:"p"},"host"),". There is no ",(0,n.kt)("strong",{parentName:"p"},"port"),", and generally there won't be when we are navigating between pages, but a port would look something like this ",(0,n.kt)("inlineCode",{parentName:"p"},":8080")," and would come right after the host."),(0,n.kt)("p",null,"Let's say that the following URL wants to make a request of the URL above:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://thisisthehost.com/someotherpage"},"https://thisisthehost.com/someotherpage"))),(0,n.kt)("p",null,"That would be entirely fine. The protocol and host are the same. The only thing different is the ",(0,n.kt)("strong",{parentName:"p"},"path"),", which is ",(0,n.kt)("inlineCode",{parentName:"p"},"someotherpage")," instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"somepage"),", and SOP does not care about the path being different. "),(0,n.kt)("p",null,"How about the following URL?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://somebodysuspicious.com"},"http://somebodysuspicious.com"))),(0,n.kt)("p",null,"Well, the host name should give it away, but this is a different origin for two reasons. There's a different protocol (",(0,n.kt)("inlineCode",{parentName:"p"},"http")," instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"https"),") ",(0,n.kt)("em",{parentName:"p"},"and")," there's a different host: ",(0,n.kt)("inlineCode",{parentName:"p"},"somebodysuspicious.com"),". Because of SOP, a browser will not allow this URL to make a request to ",(0,n.kt)("inlineCode",{parentName:"p"},"https://thisisthehost.com/somepage"),". "),(0,n.kt)("p",null,"How about this URL?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://thisisthehost.com/someotherpage"},"http://thisisthehost.com/someotherpage"))),(0,n.kt)("p",null,"This request will also fail. Even though the host name is the same, the ",(0,n.kt)("inlineCode",{parentName:"p"},"http")," protocol is different."),(0,n.kt)("p",null,"So why is this important when it comes to making API calls?"),(0,n.kt)("p",null,"Well, our applications are entirely client-side, which means that all the code we are running is running in the browser. This means that SOP applies to all of our applications."),(0,n.kt)("p",null,"But wait a minute... How have we been able to make API calls to the OpenWeather API then? How about other APIs we are working with like Giphy?"),(0,n.kt)("p",null,"Well, these APIs have enabled a feature called ",(0,n.kt)("strong",{parentName:"p"},"cross-origin resource sharing")," or ",(0,n.kt)("strong",{parentName:"p"},"CORS")," for short. The name is pretty self-explanatory. It's a mechanism that allows resources to be shared across different origins. "),(0,n.kt)("h2",{id:"cross-origin-resource-sharing"},"Cross-Origin Resource Sharing"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"It's not really necessary to know the ins and outs of how cross-origin resource sharing works, but on the most basic level, it means attaching a few extra headers to requests and responses. That all happens behind the scenes so we don't need to worry about it."),(0,n.kt)("p",null,"What matters for us is that the APIs we work with must have CORS enabled if we want to work with them. If an API doesn't have CORS, we can't make API calls from a browser application."),(0,n.kt)("p",null,"For that reason, if you want to build a client-side application that makes API calls, you need to do some research first and make sure that CORS is allowed. It's not enough to make sure an API call works from Postman. In fact, that doesn't tell us anything about whether it works from the browser! ",(0,n.kt)("strong",{parentName:"p"},"Postman isn't making calls from the browser so the rules of SOP don't apply.")),(0,n.kt)("p",null,"If you try to make a request from the browser to an API call that doesn't allow CORS, you'll get the following error in the console:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Access to fetch at 'https://othersite.com' from origin 'https://mysite.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.")),(0,n.kt)("p",null,"Note that the names of the sites will be different depending on the URL you are trying to access and the one you are working with."),(0,n.kt)("h2",{id:"sop-applies-to-certain-web-apis"},"SOP Applies to Certain Web APIs"),(0,n.kt)("hr",null),(0,n.kt)("p",null,'We\'ve talked about the Same Origin Policy (SOP) with regards to making API calls, but this policy is in place for any request for resources from a browser. This includes requests that happen implicitly by certain Web APIs that provide live-updated data. When a Web API provides live updated data, it means that the Web API is making regular calls (or "requests") to our application to have the most up-to-date data. '),(0,n.kt)("p",null,"We saw an example of a Web API that provides live-updated data in the optional lesson on how to access our project's stylesheets via the CSS Object Model (CSSOM). The Web API that provides live-updated data is ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/cssRules"},"the ",(0,n.kt)("inlineCode",{parentName:"a"},"CSSStyleSheet.cssRules")," property"),', which provides a "live" list of all CSS rules in a given stylesheet.'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Async-and-APIs-2020/live-list-for-cssRules.png",alt:'This shows the reference page on MDN for the `CSSStyleSheet.cssRules`, with an added highlight and arrow pointing to "live" in the description.'})),(0,n.kt)("p",null,"If you did not read the lesson ",(0,n.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/lessons/optional-accessing-stylesheets-in-the-cssom"},"Optional: Accessing Stylesheets in the CSSOM"),", don't worry. We don't need to know how the CSSOM works (or about its object types) in order to understand the implication of live data. So, let's continue. "),(0,n.kt)("p",null,"Anytime a Web API provides live data, the Web API does so by making regular requests to get updated information. This means if we don't serve our project from localhost, we'll run into errors. "),(0,n.kt)("p",null,"That's because SOP will fail a request to a project that's opened in the browser, but not served. When we open a project in the browser, like by dragging and dropping our ",(0,n.kt)("inlineCode",{parentName:"p"},"index.html")," into the browser, the URL will look something like this: ",(0,n.kt)("inlineCode",{parentName:"p"},"file:///C:/Users/staff/Desktop/oop-address-book-v2/index.html"),". A URL that starts with ",(0,n.kt)("inlineCode",{parentName:"p"},"file:///")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"C:/Users/...")," indicates that we've simply opened a local file in the browser from a Windows computer, and we're not serving the project with a web server. Notably, there's no domain, protocol, or port in the URL, which makes any request to this location automatically fail under SOP."),(0,n.kt)("p",null,"Remember, according to SOP a request from a browser needs to have a protocol, domain, and port, and whatever resource returned from the request also needs to have that same and matching information. If not, there needs to be a CORS policy in place. However, setting up a CORS policy is not the solution here, since the issue is caused by there being no protocol, domain, or port at all! Adding CORS would do nothing. "),(0,n.kt)("p",null,"Instead, for any Web API that returns live data (and is therefore making regular requests to ensure that data is up-to-date), we need to make sure we're serving our project for the Web API to be able to function. It's as easy as that! Again, there's o need for CORS."),(0,n.kt)("h2",{id:"working-with-apis-that-dont-allow-cors"},"Working with APIs That Don't Allow CORS"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Let's say you ",(0,n.kt)("em",{parentName:"p"},"really")," want to work with an API that doesn't allow CORS. Is there any way around this restriction? Well, there are several options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Make the API call server-side instead of client-side.")," If you are continuing on to Ruby/Rails or C#/.NET, you'll learn how to make API calls server-side. Wait until then to work with an API that doesn't allow CORS."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Build a proxy.")," This is well beyond the scope of the course and we don't recommend it unless you want a challenge. But you can use Node or another option to build a proxy server to allow requests to servers that don't allow CORS. This option is only listed to demonstrate that it's hard to do a workaround the right way! To learn more about proxy servers, visit ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling"},"this MDN documentation"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Use a Chrome extension to alter the header.")," Finally, there are several Chrome extensions you can use to work around CORS including the ",(0,n.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc?hl=en-US"},"Moesif Origin & CORS Changer extension")," or ",(0,n.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en"},"Allow CORS: Access-Control-Allow-Origin extension"),". They work by changing the header on your requests. They are easy to install and work well, but ",(0,n.kt)("em",{parentName:"li"},"only")," on the local machine where the Chrome extension is installed. So while they will work fine for a learning project, they aren't good solutions for anything you might eventually want to deploy \u2014 or for a portfolio project you'd want to share or send to a potential employer. While you could technically add instructions for installing the extension in your README, that's just not going to look very professional.")),(0,n.kt)("p",null,"So while you are welcome to use one of these extensions, just keep that fact in mind. We are still early in the program so you may not plan to turn learning projects into portfolio projects. That being said, we still recommend you pick APIs that allow CORS."))}u.isMDXComponent=!0}}]);