"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[93719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"Introduction to RESTful Routing",id:"introduction-to-restful-routing",slug:"introduction-to-restful-routing",hide_table_of_contents:!0,sidebar_position:35,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/2e_introduction_to_restful_routing.md"},i=void 0,s={unversionedId:"c-and-net-part-time-evening/basic-web-applications/introduction-to-restful-routing",id:"c-and-net-part-time-evening/basic-web-applications/introduction-to-restful-routing",title:"Introduction to RESTful Routing",description:"Before we add new routes to our app, we're going to discuss an industry best practice for organizing routes called REST.",source:"@site/docs/c-and-net-part-time-evening/8_basic-web-applications/2e-introduction-to-restful-routing.md",sourceDirName:"c-and-net-part-time-evening/8_basic-web-applications",slug:"/c-and-net-part-time-evening/basic-web-applications/introduction-to-restful-routing",permalink:"/c-and-net-part-time-evening/basic-web-applications/introduction-to-restful-routing",draft:!1,tags:[],version:"current",sidebarPosition:35,frontMatter:{title:"Introduction to RESTful Routing",id:"introduction-to-restful-routing",slug:"introduction-to-restful-routing",hide_table_of_contents:!0,sidebar_position:35,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/2e_introduction_to_restful_routing.md"},sidebar:"c-and-net-part-time-evening",previous:{title:"Finding Objects with Unique IDs",permalink:"/c-and-net-part-time-evening/basic-web-applications/finding-objects-with-unique-ids"},next:{title:"Applying RESTful Routing",permalink:"/c-and-net-part-time-evening/basic-web-applications/applying-restful-routing"}},l={},p=[{value:"What is REST?",id:"what-is-rest",level:2},{value:"REST Conventions",id:"rest-conventions",level:3},{value:"REST Conventions in To Do List",id:"rest-conventions-in-to-do-list",level:3},{value:"What To Do When a Route Does Not Fit RESTful Conventions",id:"what-to-do-when-a-route-does-not-fit-restful-conventions",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Before we add new routes to our app, we're going to discuss an industry best practice for organizing routes called ",(0,r.kt)("strong",{parentName:"p"},"REST"),"."),(0,r.kt)("h2",{id:"what-is-rest"},"What is REST?"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"REST")," stands for ",(0,r.kt)("strong",{parentName:"p"},"Representational State Transfer"),". To follow it in our routes, we use a convention called ",(0,r.kt)("strong",{parentName:"p"},"RESTful Routing"),". RESTful routing is a set of standards used in many different languages to create efficient, reusable routes. It aims to map HTTP methods (GET, POST, PATCH, DELETE) and CRUD actions (Create, Read, Update, Destroy) together in a conventional pattern. This makes it easier for other developers to understand and navigate an application and results in clean, consistent URL paths for users."),(0,r.kt)("p",null,"Essentially, RESTful routing is a naming pattern. It asserts that routes completing certain common actions (like creating, updating, or deleting objects) have names and paths that accurately reflect ",(0,r.kt)("em",{parentName:"p"},"what")," they're doing, with ",(0,r.kt)("em",{parentName:"p"},"which")," CRUD and HTTP verbs, on what ",(0,r.kt)("em",{parentName:"p"},"type")," of object."),(0,r.kt)("h3",{id:"rest-conventions"},"REST Conventions"),(0,r.kt)("p",null,"What does this look like? Here's a table outlining standard RESTful routing conventions:"),(0,r.kt)("img",{src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/intro-to-restful-routing-rest-routes.png",width:"100%"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Everything that reads ",(0,r.kt)("em",{parentName:"p"},"object")," refers to the model used in the application and its routes. For instance, our To Do List works with ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," objects. We would use the term ",(0,r.kt)("em",{parentName:"p"},"items")," wherever we see ",(0,r.kt)("em",{parentName:"p"},"object")," in the table above. A blog application might work with ",(0,r.kt)("inlineCode",{parentName:"p"},"Post")," objects. It would use the term ",(0,r.kt)("em",{parentName:"p"},"posts")," wherever we see ",(0,r.kt)("em",{parentName:"p"},"object")," in the table above.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Route Name")," refers to the name of the route method in the controller.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"URL Path")," refers to the path listed above the route in a route decorator. This will also be the URL a user sees when navigating to this area of the site.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"HTTP Method")," refers to the HTTP method that route will respond to, or be invoked for.   ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Purpose")," details what each route is responsible for.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},":id")," is a placeholder for where a specific object's unique ID will be placed. An example would be the ",(0,r.kt)("inlineCode",{parentName:"p"},"_id"),"s our ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),"s now include. Don't worry about routes with ",(0,r.kt)("inlineCode",{parentName:"p"},":id")," yet. We'll discuss them more soon."))),(0,r.kt)("h3",{id:"rest-conventions-in-to-do-list"},"REST Conventions in To Do List"),(0,r.kt)("p",null,"Here's how these same standards would look applied to our To Do List. ",(0,r.kt)("em",{parentName:"p"},"Routes we haven't created yet are in italics"),":"),(0,r.kt)("img",{src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/intro-to-restful-routing-rest-routes-2.png",width:"100%"}),(0,r.kt)("p",null,"Our existing ",(0,r.kt)("inlineCode",{parentName:"p"},"Index()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Create()")," routes already follow RESTful convention. For example, here's the ",(0,r.kt)("inlineCode",{parentName:"p"},"Index()")," route from ",(0,r.kt)("inlineCode",{parentName:"p"},"ItemsController"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'[HttpGet("/items")]\npublic ActionResult Index()\n{\n  List<Item> allItems = Item.GetAll();\n  return View(allItems);\n}\n')),(0,r.kt)("p",null,"And here's how each element of this route matches RESTful conventions outlined in the table above:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Route Name"),": The route name is ",(0,r.kt)("inlineCode",{parentName:"p"},"Index()"),", per RESTful requirements.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"URL Path"),": We specify the path ",(0,r.kt)("inlineCode",{parentName:"p"},'"/items"')," in our route decorator.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"HTTP Method"),": The route decorator denotes that this route will respond to GET requests by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpGet()")," method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Purpose"),": This route is meant to display a list of all ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),"s."))),(0,r.kt)("p",null,"Our ",(0,r.kt)("inlineCode",{parentName:"p"},"Create()")," route also matches RESTful convention. Our  ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateForm()")," lesson is close. However, we'll change its name from ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateForm()")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"New()")," in the next lesson."),(0,r.kt)("p",null,"Also, notice the table depicts that ",(0,r.kt)("inlineCode",{parentName:"p"},"Update")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Destroy")," routes will use POST requests in MVC due to the fact that ",(0,r.kt)("strong",{parentName:"p"},"HTML5 forms cannot execute DELETE or PATCH requests, only POST.")),(0,r.kt)("h3",{id:"what-to-do-when-a-route-does-not-fit-restful-conventions"},"What To Do When a Route Does Not Fit RESTful Conventions"),(0,r.kt)("p",null,"Sometimes applications include routes that don't fit RESTful conventions. For instance, our To Do List has a route to delete all ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),"s. Websites can also have ",(0,r.kt)("em",{parentName:"p"},"Contact Us")," or ",(0,r.kt)("em",{parentName:"p"},"About Us")," pages that don't use objects. That's normal. We simply try to name all routes clearly and consistently while following REST conventions for routes that apply."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Now that our applications are complex enough to include many interconnected pages, we'll begin using RESTful routing patterns in all future MVC projects. In fact, following RESTful routing conventions will be ",(0,r.kt)("strong",{parentName:"p"},"required")," for the remainder of the course."),(0,r.kt)("p",null,"Also, keep in mind that RESTful routing gets more complicated when we begin passing data between routes. Don't worry about this yet. We'll discuss more complex implementations when we begin passing data between our own routes and views. For now, just focus on learning the information presented here."))}d.isMDXComponent=!0}}]);