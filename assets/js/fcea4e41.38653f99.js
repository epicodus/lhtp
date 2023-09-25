"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[24787],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),d=p(n),c=o,m=d["".concat(l,".").concat(c)]||d[c]||u[c]||a;return n?r.createElement(m,s(s({ref:t},h),{},{components:n})):r.createElement(m,s({ref:t},h))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},82079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"4. Request-Response Loop and HTTP Methods with ASP.NET Core MVC",id:"request_response_loop_and_http_methods_with_aspnet_core_mvc",slug:"request_response_loop_and_http_methods_with_aspnet_core_mvc",hide_table_of_contents:!0,sidebar_position:25,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/7_basic-web-applications/1d_request_response_loop_and_http_methods_with_asp_net_mvc.md"},s=void 0,i={unversionedId:"c_and_net_classic/basic-web-applications/request_response_loop_and_http_methods_with_aspnet_core_mvc",id:"c_and_net_classic/basic-web-applications/request_response_loop_and_http_methods_with_aspnet_core_mvc",title:"4. Request-Response Loop and HTTP Methods with ASP.NET Core MVC",description:"In the How the Web Works series of lessons from the weekend homework, we learned how websites and applications communicate with users' clients to display their content in the browser. We discussed clients and servers, uniform resource locators (URLs), server-side MVC patterns, and the request-response loop.",source:"@site/docs/c_and_net_classic/7_basic-web-applications/1d_request_response_loop_and_http_methods_with_asp_net_mvc.md",sourceDirName:"c_and_net_classic/7_basic-web-applications",slug:"/c_and_net_classic/basic-web-applications/request_response_loop_and_http_methods_with_aspnet_core_mvc",permalink:"/lhtp/c_and_net_classic/basic-web-applications/request_response_loop_and_http_methods_with_aspnet_core_mvc",draft:!1,tags:[],version:"current",sidebarPosition:25,frontMatter:{title:"4. Request-Response Loop and HTTP Methods with ASP.NET Core MVC",id:"request_response_loop_and_http_methods_with_aspnet_core_mvc",slug:"request_response_loop_and_http_methods_with_aspnet_core_mvc",hide_table_of_contents:!0,sidebar_position:25,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/7_basic-web-applications/1d_request_response_loop_and_http_methods_with_asp_net_mvc.md"},sidebar:"c_and_net_classic",previous:{title:"3. To Do List with MVC Forms",permalink:"/lhtp/c_and_net_classic/basic-web-applications/to_do_list_with_mvc_forms"},next:{title:"5. Lists and Redirects in a Controller",permalink:"/lhtp/c_and_net_classic/basic-web-applications/lists_and_redirects_in_a_controller"}},l={},p=[{value:"1. Generating a Request",id:"1-generating-a-request",level:2},{value:"HTTP Methods",id:"http-methods",level:3},{value:"GET Requests",id:"get-requests",level:4},{value:"POST Requests",id:"post-requests",level:4},{value:"Path",id:"path",level:3},{value:"Headers",id:"headers",level:3},{value:"Body",id:"body",level:3},{value:"Viewing Requests",id:"viewing-requests",level:3},{value:"2. Routing in MVC Controllers",id:"2-routing-in-mvc-controllers",level:2},{value:"Route Decorator Syntax",id:"route-decorator-syntax",level:3},{value:"3. Returning a Response",id:"3-returning-a-response",level:2},{value:"Status",id:"status",level:3},{value:"Headers",id:"headers-1",level:3},{value:"Body",id:"body-1",level:3},{value:"4. Rendering the Page",id:"4-rendering-the-page",level:2},{value:"Repository Reference",id:"repository-reference",level:3}],h={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the ",(0,o.kt)("em",{parentName:"p"},"How the Web Works")," series of lessons from the weekend homework, we learned how websites and applications communicate with users' clients to display their content in the browser. We discussed clients and servers, uniform resource locators (URLs), server-side MVC patterns, and the request-response loop."),(0,o.kt)("p",null,"Now that we've created several applications that handle HTTP requests and responses through controller routes, let's dive deeper. This lesson will review the general request-response loop we learned earlier this section and also discuss new ",(0,o.kt)("strong",{parentName:"p"},"HTTP methods")," that will shed light on how MVC routes work. ",(0,o.kt)("strong",{parentName:"p"},"Concepts discussed here are essential to understanding the more advanced routing we'll learn later in this section, so follow along carefully and revisit this lesson as necessary.")),(0,o.kt)("p",null,"First, let's walk through the request-response loop we learned about previously, discussing in greater detail how it works with ASP.NET Core MVC applications."),(0,o.kt)("h2",{id:"1-generating-a-request"},"1. Generating a Request"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"To access a page on a website, including one made with ASP.NET MVC, the user either types in the site's URL, clicks a link, or submits a form. The client makes a request to the server that hosts the site. As we learned earlier this section, this request follows strict formatting rules called ",(0,o.kt)("strong",{parentName:"p"},"HTTP"),", or ",(0,o.kt)("strong",{parentName:"p"},"Hypertext Transfer Protocol"),". Specifically, HTTP requests from the client include four elements that will be sent to the server:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Method"),(0,o.kt)("li",{parentName:"ul"},"Path"),(0,o.kt)("li",{parentName:"ul"},"Headers"),(0,o.kt)("li",{parentName:"ul"},"Body")),(0,o.kt)("h3",{id:"http-methods"},"HTTP Methods"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"HTTP methods"),", also known as ",(0,o.kt)("strong",{parentName:"p"},"verbs"),", indicate the type of action the client is requesting the server to complete. The most common HTTP methods are ",(0,o.kt)("strong",{parentName:"p"},"GET")," and ",(0,o.kt)("strong",{parentName:"p"},"POST"),"."),(0,o.kt)("h4",{id:"get-requests"},"GET Requests"),(0,o.kt)("p",null,"Requests with GET methods ",(0,o.kt)("em",{parentName:"p"},"retrieve")," resources from the server. For example, when we navigate to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/courses"},"Learn How to Program Courses page")," the client requests the resource at the URL ",(0,o.kt)("inlineCode",{parentName:"p"},"https://www.learnhowtoprogram.com/courses"),". The server locates the content corresponding to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/courses")," URL path and sends it back to the client in a response. Our client essentially went out and ",(0,o.kt)("em",{parentName:"p"},"got")," the necessary resources to render a page."),(0,o.kt)("h4",{id:"post-requests"},"POST Requests"),(0,o.kt)("p",null,"Unlike GET requests, POST requests actually aim to ",(0,o.kt)("em",{parentName:"p"},"change something")," on the website's server. This includes adding, updating or deleting items."),(0,o.kt)("p",null,"For instance, when we like a friend's photo on social media, our client is sending a POST request because we're ",(0,o.kt)("em",{parentName:"p"},"changing")," something on that site's server. We're both increasing the total number of likes recorded on that photo and adding our username to the list of those that like the picture."),(0,o.kt)("p",null,"In the last lesson, we added this attribute to our To Do List form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'method="post"\n')),(0,o.kt)("p",null,"We did this because we wanted to ",(0,o.kt)("em",{parentName:"p"},"add")," an ",(0,o.kt)("inlineCode",{parentName:"p"},"Item"),"."),(0,o.kt)("h3",{id:"path"},"Path"),(0,o.kt)("p",null,"In addition to an HTTP method, the client's request to the server also includes a path. The ",(0,o.kt)("strong",{parentName:"p"},"path")," identifies the web resource that should be retrieved (GET) or acted on (POST). In the example ",(0,o.kt)("inlineCode",{parentName:"p"},"https://www.learnhowtoprogram.com/courses")," the resource ",(0,o.kt)("inlineCode",{parentName:"p"},"/courses")," is known as the path."),(0,o.kt)("p",null,"If we were visiting the form in our To Do List application, ",(0,o.kt)("inlineCode",{parentName:"p"},"/items/new")," is the path."),(0,o.kt)("h3",{id:"headers"},"Headers"),(0,o.kt)("p",null,"Headers are also part of the request message protocol. They provide the server with more information about the client, the server and the request. Here are some examples of header fields included in a request message:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Host"),":  This is the host or domain name of the server. Examples include ",(0,o.kt)("inlineCode",{parentName:"li"},"www.learnhowtoprogram.com")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:5001"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"User-agent"),":  This is the software acting on behalf of the user to make the request. In our example, this would be our browser, whether it's Chrome, Firefox, or something else."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Accept-language"),": This includes the human languages that are acceptable for the response.")),(0,o.kt)("p",null,"There's no need to worry about headers too much yet. But for a list of all available request headers, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_header_fields"},(0,o.kt)("em",{parentName:"a"},"HTTP Headers")," Wikipedia article"),"."),(0,o.kt)("h3",{id:"body"},"Body"),(0,o.kt)("p",null,"HTTP Requests also include a body. The ",(0,o.kt)("strong",{parentName:"p"},"body")," contains any data (beyond the URL and headers) that must be transmitted to the server.  "),(0,o.kt)("p",null,"For example, when a user submits the form in our To Do List, the resulting POST request needs to include the specific information they typed in the form so the server can store this information as a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," and later print it to our list. This data is delivered to the server in the body of the request."),(0,o.kt)("h3",{id:"viewing-requests"},"Viewing Requests"),(0,o.kt)("p",null,"Remember, we can view HTTP requests and responses right in Chrome's developer tools:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Launch the To Do List application using ",(0,o.kt)("inlineCode",{parentName:"li"},"$ dotnet run"),"."),(0,o.kt)("li",{parentName:"ul"},"Visit the app at ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:5000")," and open developer tools (",(0,o.kt)("em",{parentName:"li"},"Command + Option + J")," on Mac or ",(0,o.kt)("em",{parentName:"li"},"Ctrl + Shift + I")," on PC)."),(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("em",{parentName:"li"},"Network")," tab (fourth from the left) on the top toolbar of the developer tool pane."),(0,o.kt)("li",{parentName:"ul"},"The second-from-top toolbar contains a checkbox titled ",(0,o.kt)("em",{parentName:"li"},"Preserve log"),". Select this box."),(0,o.kt)("li",{parentName:"ul"},"Keeping this ",(0,o.kt)("em",{parentName:"li"},"Network")," area open, hit the ",(0,o.kt)("em",{parentName:"li"},"Add a new item")," link on our site's homepage. We should see a new request logged in the developer's tools. We can click this request to see details, including its URL, the GET HTTP request method it used, its headers, and more:")),(0,o.kt)("img",{src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/Week+two/request-response-loop-and-http-methods-screenshot-2.png",width:"100%"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Then we can fill out and submit our form to see yet another request. This time we see it's a POST request. If we scroll down, we can view its response headers and form data included in the request body:")),(0,o.kt)("img",{src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/Week+two/request-response-loop-and-http-methods-screenshot-2.png",width:"100%"}),(0,o.kt)("h2",{id:"2-routing-in-mvc-controllers"},"2. Routing in MVC Controllers"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"After the client sends a request, the server receives it. The HTTP method and path are matched to a route in the controller."),(0,o.kt)("p",null,"The controller is then responsible for bringing view data and class methods together. In our MVC applications, route decorators state the path that corresponds to each:"),(0,o.kt)("div",{class:"filename"},"HomeController.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n  [Route("/")]\n  ...\n\n  [Route("/items/new")]\n  ...\n\n  [Route("/items")]\n  ...\n\n...\n')),(0,o.kt)("p",null,"For example, users can click a link on our homepage to see a form. When they click on this link, a request is created and sent to our application's server. That request includes the path ",(0,o.kt)("inlineCode",{parentName:"p"},'"/items/new"'),"."),(0,o.kt)("p",null,"Our application server can identify what resource should be retrieved and sent back in its response by matching this path to the route in our controller that has the same path specified in the route decorator. It then executes that route's code."),(0,o.kt)("h3",{id:"route-decorator-syntax"},"Route Decorator Syntax"),(0,o.kt)("p",null,"So far, we have used the syntax ",(0,o.kt)("inlineCode",{parentName:"p"},'[Route("route-name")]')," to declare paths for each route in our controller. Now that we know what ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," indicate, we'll begin using a different, more specific annotation for defining the routes for methods. We'll use ",(0,o.kt)("inlineCode",{parentName:"p"},'[HttpGet("route-name")]')," for ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," methods and ",(0,o.kt)("inlineCode",{parentName:"p"},'[HttpPost("route-name")]')," for ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," methods."),(0,o.kt)("p",null,"Our updated ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeController.cs")," looks like this:"),(0,o.kt)("div",{class:"filename"},"HomeController.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Mvc;\nusing ToDoList.Models;\n\nnamespace ToDoList.Controllers\n{\n  public class HomeController : Controller\n  {\n\n    [HttpGet("/")]\n    public ActionResult Index()\n    {\n      Item starterItem = new Item("Add first item to To Do List");\n      return View(starterItem);\n    }\n\n    [HttpGet("/items/new")]\n    public ActionResult CreateForm()\n    {\n      return View();\n    }\n\n    [HttpPost("/items")]\n    public ActionResult Create(string description)\n    {\n      Item myItem = new Item(description);\n      return View("Index", myItem);\n    }\n\n  }\n}\n')),(0,o.kt)("h2",{id:"3-returning-a-response"},"3. Returning a Response"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"After the client creates and sends a request and our server matches the path in this request to the correct route, our server then returns an ",(0,o.kt)("strong",{parentName:"p"},"HTTP Response")," back to the client. Like our requests, this response is also formatted following special HTTP protocol. It consists of three primary elements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Status"),(0,o.kt)("li",{parentName:"ul"},"Headers"),(0,o.kt)("li",{parentName:"ul"},"Body")),(0,o.kt)("h3",{id:"status"},"Status"),(0,o.kt)("p",null,"The first line of a response message is a status code and reason phrase. (An example is ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK"),", which is shown in the picture above.) The ",(0,o.kt)("strong",{parentName:"p"},"HTTP status code")," is a three-digit number that indicates how the request was processed (or not). Each is accompanied by a brief, human-readable description."),(0,o.kt)("p",null,"Below is a list of the five status code classes determined by the first digit of the code, and their most common codes. You don't have to memorize these; simply get an idea of what's out there, and refer back as necessary. (And, to see a complete list, visit ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Response_codes"},"HTTP Status Codes"),".)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Informational"),": Status codes beginning with ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," indicate the request was received. This class of code is rarely used."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Success"),": Status codes beginning with ",(0,o.kt)("inlineCode",{parentName:"li"},"2")," indicate the request was received and handled successfully. These are very common. For example:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"200"),":  OK"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"201"),":  Created")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Redirection"),": Status codes beginning with ",(0,o.kt)("inlineCode",{parentName:"li"},"3")," indicate that additional action is required to complete processing the request. For example:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"301"),":  Moved permanently"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"302"),":  Moved temporarily")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Client Errors"),": Status codes beginning with ",(0,o.kt)("inlineCode",{parentName:"li"},"4")," indicate that something was wrong about the request. Some of the most common include:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"400"),":  Bad Request (the request used invalid syntax)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"401"),":  Unauthorized (you have to log in)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"403"),":  Forbidden (you're logged in, but not allowed to make this request)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"404"),":  Not Found"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"422"),":  Unprocessable (the request had valid syntax but the instructions it contained were invalid)")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Server Errors"),": Status codes beginning with ",(0,o.kt)("inlineCode",{parentName:"li"},"5")," indicate that something went wrong on the server side, such as a bug in the code or a server that went down. For example:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"500"),":  Internal Server Error (usually a bug in the server code)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"502"),":  Bad Gateway (the server sent the request to another server and got an invalid response)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"503"),":  Service Unavailable (the server is overloaded or down for maintenance)")),(0,o.kt)("h3",{id:"headers-1"},"Headers"),(0,o.kt)("p",null,"Like request headers, response headers include additional protocol providing more details about the HTTP response. Some examples of response header fields include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Server"),": The name of the server where the response is coming from."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Content-Language"),": The human language(s) of the content."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Content-Length"),":  How long the response body is in 8-bit bytes.")),(0,o.kt)("p",null,"For a list of all possible response headers, visit ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_header_fields"},"this article on Wikipedia"),"."),(0,o.kt)("h3",{id:"body-1"},"Body"),(0,o.kt)("p",null,"The response body includes all of the content for the resource requested. It's often referred to as the ",(0,o.kt)("strong",{parentName:"p"},"payload"),". When we issue a GET request for the ",(0,o.kt)("inlineCode",{parentName:"p"},"/items/new")," path of our To Do List, we expect the body to include an HTML document with the form we created to make new ",(0,o.kt)("inlineCode",{parentName:"p"},"Item"),"s."),(0,o.kt)("p",null,"The last line of code in a controller route indicates the resource that should be returned in the body of the response. In the case of our application, the resource is a view."),(0,o.kt)("h2",{id:"4-rendering-the-page"},"4. Rendering the Page"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"When the browser receives the response from the server, it then renders the HTML into a viewable format for the user. The whole process begins again as the user actions trigger additional requests for the server to manage."),(0,o.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,o.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-2-to-do-list-csharp-net6/tree/2_forms_and_http_methods"},(0,o.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for To Do List: 2","_","forms","_","and","_","http","_","methods"))))}u.isMDXComponent=!0}}]);