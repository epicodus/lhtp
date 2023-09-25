"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[40396],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||o;return r?a.createElement(d,l(l({ref:t},c),{},{components:r})):a.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8466:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"How the Web Works: MVC Pattern",id:"how_the_web_works_mvc_pattern",slug:"how_the_web_works_mvc_pattern",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0g_how_the_web_works_mvc_pattern.md"},l=void 0,i={unversionedId:"c_and_net_classic/basic-web-applications/how_the_web_works_mvc_pattern",id:"c_and_net_classic/basic-web-applications/how_the_web_works_mvc_pattern",title:"How the Web Works: MVC Pattern",description:"In the Introduction to ASP.NET Core MVC lesson, we stated that there were two very important things to know about the ASP.NET Core MVC framework we're using this section:",source:"@site/docs/c_and_net_classic/7_basic-web-applications/0g_how_the_web_works_mvc_pattern.md",sourceDirName:"c_and_net_classic/7_basic-web-applications",slug:"/c_and_net_classic/basic-web-applications/how_the_web_works_mvc_pattern",permalink:"/c_and_net_classic/basic-web-applications/how_the_web_works_mvc_pattern",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"How the Web Works: MVC Pattern",id:"how_the_web_works_mvc_pattern",slug:"how_the_web_works_mvc_pattern",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0g_how_the_web_works_mvc_pattern.md"},sidebar:"c_and_net_classic",previous:{title:"How the Web Works: Server-Side Rendering",permalink:"/c_and_net_classic/basic-web-applications/how_the_web_works_server_side_rendering"},next:{title:"Constructing and Configuring an ASP.NET Core MVC Web App",permalink:"/c_and_net_classic/basic-web-applications/constructing_and_configuring_an_aspnet_core_mvc_web_app"}},s={},p=[{value:"MVC",id:"mvc",level:2},{value:"1. Models",id:"1-models",level:3},{value:"2. Views",id:"2-views",level:3},{value:"3. Controllers",id:"3-controllers",level:3},{value:"MVC Structure",id:"mvc-structure",level:2},{value:"Request/Response Cycle",id:"requestresponse-cycle",level:2},{value:"Other MVC Frameworks",id:"other-mvc-frameworks",level:2},{value:"C#",id:"c",level:4},{value:"Ruby",id:"ruby",level:4},{value:"Python",id:"python",level:4},{value:"JavaScript",id:"javascript",level:4},{value:"Java",id:"java",level:4},{value:"PHP",id:"php",level:4}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In the ",(0,n.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/c-and-net/basic-web-applications/introduction-to-asp-net-core"},(0,n.kt)("em",{parentName:"a"},"Introduction to ASP.NET Core MVC"))," lesson, we stated that there were two ",(0,n.kt)("em",{parentName:"p"},"very")," important things to know about the ASP.NET Core MVC framework we're using this section:"),(0,n.kt)("blockquote",null,(0,n.kt)("ol",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ol"},"It's a ",(0,n.kt)("strong",{parentName:"li"},"server-side")," framework."),(0,n.kt)("li",{parentName:"ol"},"It follows the ",(0,n.kt)("strong",{parentName:"li"},"MVC")," (Model-View-Controller) pattern."))),(0,n.kt)("p",null,"We thoroughly discussed what it means to be ",(0,n.kt)("strong",{parentName:"p"},"server-side")," in the previous lesson. Now let's break down the term ",(0,n.kt)("strong",{parentName:"p"},"MVC")," before we  create our first C# web application together."),(0,n.kt)("h2",{id:"mvc"},"MVC"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"MVC")," in ",(0,n.kt)("em",{parentName:"p"},"ASP.NET MVC")," stands for ",(0,n.kt)("strong",{parentName:"p"},"Model-View-Controller"),". This refers to the three primary elements the framework uses to save, retrieve, manipulate, and display information to users. It's a really common architecture pattern used in frameworks from all languages. As its name suggests, the pattern is composed of three parts:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"A ",(0,n.kt)("strong",{parentName:"p"},"model"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"A ",(0,n.kt)("strong",{parentName:"p"},"view"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"A ",(0,n.kt)("strong",{parentName:"p"},"controller")))),(0,n.kt)("h3",{id:"1-models"},"1. Models"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"model")," represents data. After all, most applications require some sort of data!"),(0,n.kt)("p",null,"For instance, pretend we wanted to create a web version of our Shape Tracker application from last section using ASP.NET Core MVC. It would contain the same general functionality, but with a nifty web interface. As we know, this application saves data about a triangle's three sides and determines the type of triangle that the user has. In our application, these triangles are called ",(0,n.kt)("inlineCode",{parentName:"p"},"Triangle")," objects and a ",(0,n.kt)("inlineCode",{parentName:"p"},"Triangle")," class is used to construct them. "),(0,n.kt)("p",null,"Well, in ASP.NET Core MVC, this ",(0,n.kt)("inlineCode",{parentName:"p"},"Triangle")," class ",(0,n.kt)("em",{parentName:"p"},"is")," actually our model! Why? Because it represents, creates, and shapes the data our application works with."),(0,n.kt)("h3",{id:"2-views"},"2. Views"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"view")," is the part a user sees, or ",(0,n.kt)("em",{parentName:"p"},"views"),". It represents the user interface of the application. The portion visible in the browser. The view typically observes the model and automatically updates it when necessary."),(0,n.kt)("p",null,"For example, our web-enabled version of the To Do List will dynamically display a user's list of ",(0,n.kt)("inlineCode",{parentName:"p"},"Item"),"s in the browser. It will contain both hard-coded HTML and dynamic areas that display different information depending on the current list of ",(0,n.kt)("inlineCode",{parentName:"p"},"Item"),"s in our model."),(0,n.kt)("p",null,"Views are a bit like the ",(0,n.kt)("inlineCode",{parentName:"p"},".html")," files we've used to create web interfaces in the past but with some extra functionality that allows them to update automatically when our model changes. So we give these files the ",(0,n.kt)("inlineCode",{parentName:"p"},".cshtml")," extension instead, which allows us to write C# logic for this alongside our HTML. We'll see exactly what this looks like in an upcoming lesson."),(0,n.kt)("h3",{id:"3-controllers"},"3. Controllers"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"controller")," acts as the bridge between models and views. When the user navigates to a new page, the controller grabs information from the model and tells ASP.NET to add it to the proper view. It is responsible for deciding which view to display with which model."),(0,n.kt)("p",null,"Note that many other MVCs are phasing out controllers in favor of ",(0,n.kt)("strong",{parentName:"p"},"components"),", so be aware that you might see that term if you research MVC architecture."),(0,n.kt)("h2",{id:"mvc-structure"},"MVC Structure"),(0,n.kt)("p",null,"ASP.NET Core MVC makes this very clear by requiring developers to follow a particular convention:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Models are placed in a ",(0,n.kt)("inlineCode",{parentName:"p"},"Models")," folder.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Controllers are placed in a ",(0,n.kt)("inlineCode",{parentName:"p"},"Controllers")," folder.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"And, you guessed it, views are placed in a ",(0,n.kt)("inlineCode",{parentName:"p"},"Views")," folder."))),(0,n.kt)("p",null,"We'll walk through creating this project structure together in the next lesson."),(0,n.kt)("h2",{id:"requestresponse-cycle"},"Request/Response Cycle"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Check out this diagram illustrating how the request/response cycle works in an MVC architecture:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/mvc-request-response-dotnet.png",alt:"MVC request response cycle"})),(0,n.kt)("p",null,"For now, we will use local storage for our apps so you don't need to understand how the model communicates with a database just yet. Instead, just know that the controller calls on the model to retrieve the data needed for the view."),(0,n.kt)("h2",{id:"other-mvc-frameworks"},"Other MVC Frameworks"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Also, remember that many other frameworks use this MVC structure. That means that the basics you learn this section can apply to ",(0,n.kt)("em",{parentName:"p"},"tons")," of other languages and frameworks you may use in the future. Here are just a few (both server-side ",(0,n.kt)("em",{parentName:"p"},"and")," client-side):"),(0,n.kt)("h4",{id:"c"},"C#"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/framework/develop-web-apps-with-aspnet"},"ASP.NET")," (used with the .NET Framework)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-6.0"},"ASP.NET Core")," (used with .NET Core and .NET versions 5.0 and up)")),(0,n.kt)("h4",{id:"ruby"},"Ruby"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://guides.rubyonrails.org/getting_started.html"},"Ruby on Rails"))),(0,n.kt)("h4",{id:"python"},"Python"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.djangoproject.com/"},"Django"))),(0,n.kt)("h4",{id:"javascript"},"JavaScript"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://angular.io/"},"Angular")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://emberjs.com/"},"EmberJS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://knockoutjs.com/"},"Knockout")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://backbonejs.org/"},"Backbone"))),(0,n.kt)("h4",{id:"java"},"Java"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/html/mvc.html"},"Spring MVC"))),(0,n.kt)("h4",{id:"php"},"PHP"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://laravel.com/"},"Laravel")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://li3.me/"},"Lithium"))))}m.isMDXComponent=!0}}]);