"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[23812],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(67294);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,s=function(e,t){if(null==e)return{};var o,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var i=r.createContext({}),p=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,s=e.mdxType,n=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(o),u=s,m=h["".concat(i,".").concat(u)]||h[u]||d[u]||n;return o?r.createElement(m,a(a({ref:t},c),{},{components:o})):r.createElement(m,a({ref:t},c))}));function m(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=o.length,a=new Array(n);a[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[h]="string"==typeof e?e:s,a[1]=l;for(var p=2;p<n;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},31862:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=o(87462),s=(o(67294),o(3905));const n={title:"How the Web Works: Developer Tools",id:"how_the_web_works_developer_tools",slug:"how_the_web_works_developer_tools",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0d_how_the_web_works_developer_tools.md"},a=void 0,l={unversionedId:"c_and_net_part_time/basic-web-applications/how_the_web_works_developer_tools",id:"c_and_net_part_time/basic-web-applications/how_the_web_works_developer_tools",title:"How the Web Works: Developer Tools",description:"As web developers, we often need to look at the requests and responses that come and go from client and server and back. In this lesson, we are going to look at the Developer Tools in Chrome that offer a peek into the requests and responses in the browser.",source:"@site/docs/c_and_net_part_time/8_basic-web-applications/0d_how_the_web_works_developer_tools.md",sourceDirName:"c_and_net_part_time/8_basic-web-applications",slug:"/c_and_net_part_time/basic-web-applications/how_the_web_works_developer_tools",permalink:"/c_and_net_part_time/basic-web-applications/how_the_web_works_developer_tools",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How the Web Works: Developer Tools",id:"how_the_web_works_developer_tools",slug:"how_the_web_works_developer_tools",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0d_how_the_web_works_developer_tools.md"},sidebar:"c_and_net_part_time",previous:{title:"How the Web Works: Uniform Resource Locator",permalink:"/c_and_net_part_time/basic-web-applications/how_the_web_works_uniform_resource_locator"},next:{title:"Introduction to ASP.NET Core",permalink:"/c_and_net_part_time/basic-web-applications/introduction_to_aspnet_core"}},i={},p=[{value:"Chrome Developer Tools",id:"chrome-developer-tools",level:2},{value:"Accessing Developer Tools",id:"accessing-developer-tools",level:2},{value:"Viewing HTTP Requests and Responses",id:"viewing-http-requests-and-responses",level:3},{value:"Request Details",id:"request-details",level:3},{value:"Response Details",id:"response-details",level:3}],c={toc:p},h="wrapper";function d(e){let{components:t,...o}=e;return(0,s.kt)(h,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"As web developers, we often need to look at the requests and responses that come and go from client and server and back. In this lesson, we are going to look at the Developer Tools in Chrome that offer a peek into the requests and responses in the browser."),(0,s.kt)("h2",{id:"chrome-developer-tools"},"Chrome Developer Tools"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"The Chrome browser is the preferred browser for many web developers because it offers tools that make developing easier. We've already used these developer tools a ton in Intro to Programming. Primarily to log content to the JavaScript console and debug broken websites. Let's explore how these tools can also allow us to observe the request-response conversation between our browser client and outside web servers."),(0,s.kt)("h2",{id:"accessing-developer-tools"},"Accessing Developer Tools"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"As you may recall, we access Chrome's developer tools by clicking the ",(0,s.kt)("em",{parentName:"p"},"View")," option in the toolbar, then selecting ",(0,s.kt)("em",{parentName:"p"},"Developer > Developer Tools"),"."),(0,s.kt)("p",null,"Alternatively, keyboard shortcuts are ",(0,s.kt)("em",{parentName:"p"},"Command + Option + J")," on Mac and ",(0,s.kt)("em",{parentName:"p"},"Ctrl + Shift + I")," on PC. On Epicodus classroom machines the shortcut is ",(0,s.kt)("em",{parentName:"p"},"[Windows]"," + Alt + J"),"."),(0,s.kt)("h3",{id:"viewing-http-requests-and-responses"},"Viewing HTTP Requests and Responses"),(0,s.kt)("p",null,"The Developer Tools pane will open on the side or bottom of our browser window. To see HTTP requests and responses for pages we visit, we can select the ",(0,s.kt)("em",{parentName:"p"},"Network")," tab (the fourth tab from the left) on the top toolbar of the pane."),(0,s.kt)("p",null,"While located in the ",(0,s.kt)("em",{parentName:"p"},"Network")," area of the Chrome developer tools, we'll navigate to this URL on Learn How to Program:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"https://www.learnhowtoprogram.com/tracks\n")),(0,s.kt)("p",null,"We'll see the following appear in the ",(0,s.kt)("em",{parentName:"p"},"Network")," area:"),(0,s.kt)("img",{alt:"Developer Tools Network Tab",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/SHARED/how-the-web-works/developer-tools-screenshot-1.png",width:"100%"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Each of these lines represents a request made from our client to the LearnHowToProgram server.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The first request in this list is for the ",(0,s.kt)("inlineCode",{parentName:"p"},"tracks")," resource. We see it was successful because there is a status of ",(0,s.kt)("inlineCode",{parentName:"p"},"200"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The ",(0,s.kt)("inlineCode",{parentName:"p"},"type")," of resource is ",(0,s.kt)("inlineCode",{parentName:"p"},"document")," (in this case an HTML document). As you may imagine, there are still more resources necessary to display this page beyond the HTML document. For each additional resource (stylesheet, script, image files, etc) required in the HTML, the client makes a new request and the server will return a new response. We can see other ",(0,s.kt)("inlineCode",{parentName:"p"},"Type"),"s listed in this pane, like ",(0,s.kt)("inlineCode",{parentName:"p"},"script"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"font"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"stylesheet"),"."))),(0,s.kt)("h3",{id:"request-details"},"Request Details"),(0,s.kt)("p",null,"When we click on a request we can see more details about it. In the ",(0,s.kt)("em",{parentName:"p"},"General")," section we see the IP address for the server and the URL sent in the request, among other things:"),(0,s.kt)("img",{src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/SHARED/how-the-web-works/developer-tools-screenshot-2.png",width:"100%"}),(0,s.kt)("p",null,"Under ",(0,s.kt)("em",{parentName:"p"},"Request Headers")," we can see the headers, including several previously noted in the ",(0,s.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/c-and-net/basic-web-applications/how-the-web-works-uniform-resource-locator"},"URL")," lesson: the host name (a subcomponent of ",(0,s.kt)("inlineCode",{parentName:"p"},"authority"),"), path, scheme, etc:"),(0,s.kt)("img",{src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/SHARED/how-the-web-works/developer-tools-screenshot-3.png",width:"100%"}),(0,s.kt)("h3",{id:"response-details"},"Response Details"),(0,s.kt)("p",null,"We can also see response details for the ",(0,s.kt)("inlineCode",{parentName:"p"},"tracks")," request in the ",(0,s.kt)("em",{parentName:"p"},"Response Headers")," section:"),(0,s.kt)("img",{alt:"Dev Tools Response Headers",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/SHARED/how-the-web-works/developer-tools-screenshot-4.png",width:"100%"}),(0,s.kt)("p",null,"We see that the ",(0,s.kt)("em",{parentName:"p"},"Status Code")," shows a ",(0,s.kt)("inlineCode",{parentName:"p"},"200"),". This means that the server completed the successful processing of the request. We can also see the content type, date, etc. returned in the response message."),(0,s.kt)("p",null,"To see the raw response that also includes the response body, click the ",(0,s.kt)("em",{parentName:"p"},"Response")," tab to the right of ",(0,s.kt)("em",{parentName:"p"},"Headers"),":"),(0,s.kt)("img",{alt:"Dev Tools Response Body",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/SHARED/how-the-web-works/developer-tools-screenshot-5.png",width:"100%"}),(0,s.kt)("p",null,"And check it out! There's all the HTML for the page!"),(0,s.kt)("p",null,"Notice also the lower left of the window states that a total of 15 requests were made to load this ",(0,s.kt)("inlineCode",{parentName:"p"},"/tracks")," area of the site. So when we arrive on the Tracks page for Learn How To Program the HTTP request-response cycle includes 15 unique requests with 15 unique responses."),(0,s.kt)("p",null,"Visit several sites with the Developer Tools and see if you can analyze the request-response details behind the final display that you see in your browser window."))}d.isMDXComponent=!0}}]);