"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[31740],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>w});var s=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=s.createContext({}),c=function(e){var t=s.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,w=d["".concat(l,".").concat(u)]||d[u]||h[u]||a;return r?s.createElement(w,o(o({ref:t},p),{},{components:r})):s.createElement(w,o({ref:t},p))}));function w(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,r)}u.displayName="MDXCreateElement"},48886:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=r(87462),n=(r(67294),r(3905));const a={title:"How the Web Works: Clients and Servers",id:"how_the_web_works_clients_and_servers",slug:"how_the_web_works_clients_and_servers",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/8_basic-web-applications/0b_how_the_web_works_clients_and_servers.md"},o=void 0,i={unversionedId:"c_and_net_part_time_evening/basic-web-applications/how_the_web_works_clients_and_servers",id:"c_and_net_part_time_evening/basic-web-applications/how_the_web_works_clients_and_servers",title:"How the Web Works: Clients and Servers",description:"You're about to learn your first web framework! But before we begin we'll address several concepts that apply to the internet in general. A series of lessons this section, all prefixed with How the Web Works, will walk through the basic concepts that create the Internet, and allow users to visit sites like those we're about to create. This will provide context to understand how our websites will function, both in our code and behind-the-scenes.",source:"@site/docs/c_and_net_part_time_evening/8_basic-web-applications/0b_how_the_web_works_clients_and_servers.md",sourceDirName:"c_and_net_part_time_evening/8_basic-web-applications",slug:"/c_and_net_part_time_evening/basic-web-applications/how_the_web_works_clients_and_servers",permalink:"/lhtp/c_and_net_part_time_evening/basic-web-applications/how_the_web_works_clients_and_servers",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How the Web Works: Clients and Servers",id:"how_the_web_works_clients_and_servers",slug:"how_the_web_works_clients_and_servers",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/8_basic-web-applications/0b_how_the_web_works_clients_and_servers.md"},sidebar:"c_and_net_part_time_evening",previous:{title:"Basic Web Applications Objectives",permalink:"/lhtp/c_and_net_part_time_evening/basic-web-applications/basic_web_applications_objectives"},next:{title:"How the Web Works: Uniform Resource Locator",permalink:"/lhtp/c_and_net_part_time_evening/basic-web-applications/how_the_web_works_uniform_resource_locator"}},l={},c=[{value:"Internet Protocol (IP) Addresses",id:"internet-protocol-ip-addresses",level:2},{value:"Requests",id:"requests",level:2},{value:"Request Message",id:"request-message",level:3},{value:"Locating a Server&#39;s IP Address",id:"locating-a-servers-ip-address",level:3},{value:"Contacting the Server",id:"contacting-the-server",level:3},{value:"Responses",id:"responses",level:2},{value:"Other Client Types",id:"other-client-types",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,s.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You're about to learn your first web framework! But before we begin we'll address several concepts that apply to the internet in general. A series of lessons this section, all prefixed with ",(0,n.kt)("em",{parentName:"p"},"How the Web Works"),", will walk through the basic concepts that create the Internet, and allow users to visit sites like those we're about to create. This will provide context to understand how our websites will function, both in our code and behind-the-scenes."),(0,n.kt)("p",null,"This first lesson will walk through the process by which our computers or devices locate, communicate with, and load websites and other resources."),(0,n.kt)("h2",{id:"internet-protocol-ip-addresses"},"Internet Protocol (IP) Addresses"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"First let's discuss ",(0,n.kt)("em",{parentName:"p"},"the Internet"),". When we use the term ",(0,n.kt)("strong",{parentName:"p"},"Internet"),", we're referring to millions of networks that are connected to allow devices (computers, laptops, phones, etc.) to communicate and access web content."),(0,n.kt)("p",null,"Similar to the address of your home, devices connected to the Internet have a unique address too. It's called an ",(0,n.kt)("strong",{parentName:"p"},"Internet Protocol Address"),", or ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IP_address"},(0,n.kt)("strong",{parentName:"a"},"IP Address"))," for short. This address is assigned by an ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Internet_service_provider"},(0,n.kt)("strong",{parentName:"a"},"Internet Service Provider (ISP)"))," (e.g. Comcast, CenturyLink, Verizon). Servers for websites also have IP addresses."),(0,n.kt)("p",null,"IP addresses are represented by four groups of three numbers separated by periods:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"198.185.159.145\n")),(0,n.kt)("p",null,"Sometimes there's an extra number after an IP address, separated from others by a colon ",(0,n.kt)("inlineCode",{parentName:"p"},":")," like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"198.185.159.145:43\n")),(0,n.kt)("p",null,"This additional number is a port number. A ",(0,n.kt)("strong",{parentName:"p"},"port number")," is like a home address having an additional mailbox or apartment number appended to the end. It indicates an even more specific location that information travels to at that address."),(0,n.kt)("h2",{id:"requests"},"Requests"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"We've covered two addresses so far: Device IP addresses, and website server IP addresses. Next we'll explore how these two addresses interact when we visit a website on an internet-connected device."),(0,n.kt)("p",null,"To access a website we make a ",(0,n.kt)("strong",{parentName:"p"},"request")," from a ",(0,n.kt)("strong",{parentName:"p"},"client"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("strong",{parentName:"p"},"client")," is usually a web browser, like Chrome, Firefox, Safari, etc., but can be anything that facilitates our interaction with the web.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A ",(0,n.kt)("strong",{parentName:"p"},"request")," generally consists of entering a web address in a browser's URL bar, clicking a link, or submitting a form; essentially just anything that triggers us navigating to a new location on the web."))),(0,n.kt)("h3",{id:"request-message"},"Request Message"),(0,n.kt)("p",null,"When we create a request, the client constructs a special message. Among other things, this message includes the web address we are sending a request to. (For example, when we click a link to visit ",(0,n.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/courses"},"this area of the website"),", the web address ",(0,n.kt)("inlineCode",{parentName:"p"},"https://www.learnhowtoprogram.com/courses")," is included.)"),(0,n.kt)("p",null,"This message is formatted using a strict set of rules, or protocol, called ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol"},"Hypertext Transfer Protocol (HTTP)")," Continuing with the postal mail example, ",(0,n.kt)("strong",{parentName:"p"},"Hypertext Transfer Protocol"),", ",(0,n.kt)("strong",{parentName:"p"},"HTTP")," for short, is similar to formatting rules for addressing paper envelopes. We can't write an address ",(0,n.kt)("em",{parentName:"p"},"anywhere")," on an envelope, or format it however we please. The postal service outlines distinct protocol for what information is required (street address, city, state, zip), how it's formatted, and where it's written on the envelope. Deviation from this protocol results in letters not reaching their destinations."),(0,n.kt)("p",null,"HTTP has similar standards. In order for the client to reach its destination, HTTP requires certain information be present and formatted in a specific manner. (Don't worry about ",(0,n.kt)("em",{parentName:"p"},"how")," it must be formatted quite yet, we'll explore that in a later lesson on HTTP Requests.)"),(0,n.kt)("h3",{id:"locating-a-servers-ip-address"},"Locating a Server's IP Address"),(0,n.kt)("p",null,"After this message is constructed following HTTP protocol, it leaves the client, and the ISP collects that page's corresponding content from the server it resides in."),(0,n.kt)("p",null,"But before the server can be located, its IP address must be identified using the web address URL provided in the client's request message. This is the job of ",(0,n.kt)("strong",{parentName:"p"},"Domain Naming System")," (",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain_Name_System"},"DNS"),") servers."),(0,n.kt)("p",null,"There are hundreds of DNS servers that house databases to resolve web addresses to IP addresses. In our example, a DNS server matches ",(0,n.kt)("inlineCode",{parentName:"p"},"https://www.learnhowtoprogram.com/courses")," to the IP address ",(0,n.kt)("inlineCode",{parentName:"p"},"104.28.25.13:443"),". Our request message is then sent to that specific IP address, the server containing the ",(0,n.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com"},"Learn How To Program website"),"."),(0,n.kt)("h3",{id:"contacting-the-server"},"Contacting the Server"),(0,n.kt)("p",null,"The web server receives the message. Based on its contents, the server determines which ",(0,n.kt)("strong",{parentName:"p"},"resource")," is being requested or interacted with. For example, a request to view ",(0,n.kt)("inlineCode",{parentName:"p"},"https://www.learnhowtoprogram.com/courses")," will gather the resources necessary to display our main ",(0,n.kt)("em",{parentName:"p"},"Courses")," page. This resource is an HTML document. Depending on the specific site and its content, other resources like images, stylesheets, scripts and videos be gathered too."),(0,n.kt)("h2",{id:"responses"},"Responses"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Once this content is collected, a ",(0,n.kt)("strong",{parentName:"p"},"response")," is sent from the website's server back to the client. This response contains all those resources necessary to load the page. The client interprets this response and the page is displayed in the browser window."),(0,n.kt)("p",null,"Then, when we interact with the site again by clicking a link or navigating to a different area, the whole process repeats!"),(0,n.kt)("p",null,"This process we've just discussed can also be visualized in the following diagram:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/SHARED/web-clients-and-servers/Web+Clients+and+Servers+Diagram.png",alt:"Client-Server Process"})),(0,n.kt)("h2",{id:"other-client-types"},"Other Client Types"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"One more important note: We're probably most familiar with making web requests through a browser. But ",(0,n.kt)("em",{parentName:"p"},"any")," program can actually be a client! For instance, installed programs that automatically check for/downloads updates, apps running on a tablet, even a web server making a request to another web server. They all use the same HTTP protocol!"))}h.isMDXComponent=!0}}]);