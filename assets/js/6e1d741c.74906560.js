"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[21019],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(r),u=s,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[h]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},25185:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(87462),s=(r(67294),r(3905));const a={title:"How the Web Works: Server-Side Rendering",id:"how_the_web_works_server_side_rendering",slug:"how_the_web_works_server_side_rendering",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0f_how_the_web_works_server-side_rendering.md"},i=void 0,o={unversionedId:"c_and_net_classic/basic-web-applications/how_the_web_works_server_side_rendering",id:"c_and_net_classic/basic-web-applications/how_the_web_works_server_side_rendering",title:"How the Web Works: Server-Side Rendering",description:"We just mentioned that the ASP.NET Core MVC framework we'll use is something called a server-side MVC. This is a type of design pattern that tons of different web frameworks in different languages follow. So, before we begin writing our first C# web apps, let's learn more about what it means to be server-side.",source:"@site/docs/c_and_net_classic/7_basic-web-applications/0f_how_the_web_works_server-side_rendering.md",sourceDirName:"c_and_net_classic/7_basic-web-applications",slug:"/c_and_net_classic/basic-web-applications/how_the_web_works_server_side_rendering",permalink:"/c_and_net_classic/basic-web-applications/how_the_web_works_server_side_rendering",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"How the Web Works: Server-Side Rendering",id:"how_the_web_works_server_side_rendering",slug:"how_the_web_works_server_side_rendering",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0f_how_the_web_works_server-side_rendering.md"},sidebar:"c_and_net_classic",previous:{title:"Introduction to ASP.NET Core",permalink:"/c_and_net_classic/basic-web-applications/introduction_to_aspnet_core"},next:{title:"How the Web Works: MVC Pattern",permalink:"/c_and_net_classic/basic-web-applications/how_the_web_works_mvc_pattern"}},l={},p=[{value:"Server-Side MVCs",id:"server-side-mvcs",level:2},{value:"Clients &amp; Servers",id:"clients--servers",level:2},{value:"Client-Side Applications",id:"client-side-applications",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p},h="wrapper";function d(e){let{components:t,...r}=e;return(0,s.kt)(h,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"We just mentioned that the ASP.NET Core MVC framework we'll use is something called a ",(0,s.kt)("strong",{parentName:"p"},"server-side MVC"),". This is a type of design pattern that ",(0,s.kt)("em",{parentName:"p"},"tons")," of different web frameworks in different languages follow. So, before we begin writing our first C# web apps, let's learn more about what it means to be ",(0,s.kt)("strong",{parentName:"p"},"server-side"),"."),(0,s.kt)("p",null,"After that, the next lesson will detail what an ",(0,s.kt)("strong",{parentName:"p"},"MVC")," is, before we finally begin constructing our first ASP.NET Core MVC web app together."),(0,s.kt)("h2",{id:"server-side-mvcs"},"Server-Side MVCs"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"ASP.NET Core MVC is a server-side MVC framework. In a ",(0,s.kt)("strong",{parentName:"p"},"server-side")," application the client's request to view a page depends on the server delivering the correct content for that specific page (HTML, CSS, files, etc.) to the client. The client then renders this content for the user."),(0,s.kt)("p",null,"Before we can discuss what server-side means, we must first understand the difference between a client and a server. We covered this in the ",(0,s.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/c-and-net/basic-web-applications/how-the-web-works-clients-and-servers"},(0,s.kt)("em",{parentName:"a"},"How the Web Works: Clients and Servers"))," lesson; but let's quickly review."),(0,s.kt)("h2",{id:"clients--servers"},"Clients & Servers"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"A ",(0,s.kt)("strong",{parentName:"p"},"client")," is usually a web browser, like Chrome, but can be anything that facilitates interaction with the web. A ",(0,s.kt)("strong",{parentName:"p"},"server")," is a machine that contains resources (like web pages and files). When a ",(0,s.kt)("strong",{parentName:"p"},"client")," requests those resources it provides them in an HTTP ",(0,s.kt)("strong",{parentName:"p"},"response")," to the client's ",(0,s.kt)("strong",{parentName:"p"},"request"),". For example, here's what happens when we visit Epicodus' website in our browser:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"We type ",(0,s.kt)("inlineCode",{parentName:"p"},"http://www.epicodus.com")," into the URL bar and hit ",(0,s.kt)("em",{parentName:"p"},"Enter"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The client (our browser) constructs a ",(0,s.kt)("strong",{parentName:"p"},"request")," formatted with ",(0,s.kt)("strong",{parentName:"p"},"HTTP protocol")," to the server Epicodus' site is hosted on.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"A ",(0,s.kt)("strong",{parentName:"p"},"DNS server")," locates the IP address of Epicodus' server by ",(0,s.kt)("strong",{parentName:"p"},"resolving")," the ",(0,s.kt)("inlineCode",{parentName:"p"},"http://www.epicodus.com")," URL.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The client's request is sent to this IP address.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The server receives the request. It constructs and sends a ",(0,s.kt)("strong",{parentName:"p"},"response"),", also formatted following HTTP protocol, containing the resources necessary for that specific page.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The client receives the response and uses the included resources to render the page.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"As we continue navigating the site, our client begins a sort of discussion with the server. Each time a new page is visited, the client must send ",(0,s.kt)("em",{parentName:"p"},"another")," request to the server for information for ",(0,s.kt)("em",{parentName:"p"},"that specific")," area of the site. And, unless something goes wrong, the server continues to respond with new content. This ongoing conversation is called a ",(0,s.kt)("strong",{parentName:"p"},"request-response loop.")))),(0,s.kt)("p",null,"(If any of this feels unclear, we recommend revisiting and reviewing the ",(0,s.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/c-and-net/basic-web-applications/how-the-web-works-clients-and-servers"},(0,s.kt)("em",{parentName:"a"},"How the Web Works: Clients and Servers"))," lesson before advancing.)"),(0,s.kt)("p",null,"This process is considered ",(0,s.kt)("strong",{parentName:"p"},"server-side")," because the server is responsible for sending required content for the specific page a user attempts to view. The server is also continually contacted as the user navigates the page, in that ",(0,s.kt)("strong",{parentName:"p"},"request-response loop"),"."),(0,s.kt)("h2",{id:"client-side-applications"},"Client-Side Applications"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"We specify that frameworks like ASP.NET Core are server-side because not all frameworks follow this same pattern. So it's important to denote which do, and which don't. You see, other types of applications are considered to be ",(0,s.kt)("strong",{parentName:"p"},"client-side"),". These rely on the web client to  locate resources for and render specific pages of a site, instead of contacting the server each time a user wants to see a new page."),(0,s.kt)("p",null,"How does this work? Pretend we have a site at ",(0,s.kt)("em",{parentName:"p"},(0,s.kt)("a",{parentName:"em",href:"http://www.fancyclientsidesite.com/"},"www.fancyclientsidesite.com/")),". It's built with a client-side tool instead of a server-side framework like ASP.NET Core MVC. Here's what happens when we visit and interact with it:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"We visit the site by entering its URL (or clicking a link) in our client.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The client constructs an HTTP-formatted request to the site's server to retrieve the necessary resources to render it.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"A DNS server locates the IP address of the site's server by resolving its ",(0,s.kt)("inlineCode",{parentName:"p"},"www.fancyclientsidesite.com/")," URL.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The client's request is sent to the specific IP address.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The server receives the request. It constructs and sends an HTTP-formatted response. But the response ",(0,s.kt)("strong",{parentName:"p"},"doesn't")," contain the resources necessary for that specific page. It actually sends ",(0,s.kt)("strong",{parentName:"p"},"one big file containing ",(0,s.kt)("em",{parentName:"strong"},"all")," resources and code for ",(0,s.kt)("em",{parentName:"strong"},"all")," pages in ",(0,s.kt)("em",{parentName:"strong"},"the entire site"),"!"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"When we later navigate to a different area (say, ",(0,s.kt)("em",{parentName:"p"},(0,s.kt)("a",{parentName:"em",href:"http://www.fancyclientsidesite.com/about-me"},"www.fancyclientsidesite.com/about-me")),") ",(0,s.kt)("strong",{parentName:"p"},"the client doesn't send another request to the server!")," It doesn't begin that request-response loop 'conversation'. Instead, the client is responsible for locating the new page's resources/content in the big response the server sent the first time. This response contains ",(0,s.kt)("em",{parentName:"p"},"everything")," necessary for the ",(0,s.kt)("em",{parentName:"p"},"entire")," site. So the client locates content for the specific area the user is requesting to view within the big giant response, and renders it."))),(0,s.kt)("h2",{id:"conclusion"},"Conclusion"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"So what does this mean for us? Let's summarize:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"When users navigate ",(0,s.kt)("strong",{parentName:"p"},"server-side")," applications, the client enters into a 'back-and-forth' conversation with the server, known as a ",(0,s.kt)("strong",{parentName:"p"},"request-response loop"),". Each new area a user navigates to results in a new request to the server.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"In ",(0,s.kt)("strong",{parentName:"p"},"client-side")," applications, the server is generally only contacted once. ",(0,s.kt)("em",{parentName:"p"},"All")," content for the ",(0,s.kt)("em",{parentName:"p"},"entire")," website is provided. When users navigate to new areas, the client has to find resources for that new page in the single big response, instead of contacting the server again.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"ASP.NET Core MVC is a server-side framework.")," It ",(0,s.kt)("em",{parentName:"p"},"will")," make a series of requests to the server in a request-response loop. A new request for each page or area the user navigates to. This is very, very important to remember, as it will affect how we construct our applications.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"But we'll also learn more about client-side architecture in our level three class when we study React. Like many JavaScript-powered website tools, React is client-side! This means we'll have plenty of experience with ",(0,s.kt)("em",{parentName:"p"},"both")," major web design paradigms before graduation."))),(0,s.kt)("p",null,"In the next lesson we'll explore what an ",(0,s.kt)("strong",{parentName:"p"},"MVC")," is, and how it influences how we'll create our sites with ASP.NET Core MVC. Then we'll finally build our first C# web application together. Stay tuned!"))}d.isMDXComponent=!0}}]);