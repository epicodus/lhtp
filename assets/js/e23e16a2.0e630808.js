"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[96120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?i.createElement(f,r(r({ref:t},p),{},{components:n})):i.createElement(f,r({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));const o={title:"Building an API Objectives",id:"building_an_api_objectives",slug:"building_an_api_objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0a_backend_apis.md",paginationPrev:null},r=void 0,l={unversionedId:"c_and_net_part_time/building-an-api/building_an_api_objectives",id:"c_and_net_part_time/building-an-api/building_an_api_objectives",title:"Building an API Objectives",description:"In this course section, we'll create our own ASP.NET Core Web API using RESTful principles. We'll use the dotnet new tool to quickly scaffold an API-only application. Our API will serve data about animals from the Cretaceous period, so we'll call our API the Cretaceous Park API.",source:"@site/docs/c_and_net_part_time/16_building-an-api/0a_backend_apis.md",sourceDirName:"c_and_net_part_time/16_building-an-api",slug:"/c_and_net_part_time/building-an-api/building_an_api_objectives",permalink:"/c_and_net_part_time/building-an-api/building_an_api_objectives",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Building an API Objectives",id:"building_an_api_objectives",slug:"building_an_api_objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0a_backend_apis.md",paginationPrev:null},sidebar:"c_and_net_part_time",previous:{title:"Authentication with Identity Independent Project",permalink:"/c_and_net_part_time/authentication-with-identity-part-2/authentication_with_identity_independent_project"},next:{title:"Scaffolding a .NET Application with dotnet new",permalink:"/c_and_net_part_time/building-an-api/scaffolding_a_net_application_with_dotnet_new"}},s={},u=[{value:"Independent Project Objectives",id:"independent-project-objectives",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this course section, we'll create our own ASP.NET Core Web API using RESTful principles. We'll use the ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet new")," tool to quickly scaffold an API-only application. Our API will serve data about animals from the Cretaceous period, so we'll call our API the Cretaceous Park API."),(0,a.kt)("p",null,"Later in the course section, we'll use the ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet new")," tool to scaffold an ASP.NET Core MVC frontend that we'll build out to make API calls to our Cretaceous Park API. "),(0,a.kt)("p",null,"Here are the topics we'll explore:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to use the ",(0,a.kt)("inlineCode",{parentName:"li"},"dotnet new")," scaffolding tool"),(0,a.kt)("li",{parentName:"ul"},"Understanding new features that come default with the templates that ",(0,a.kt)("inlineCode",{parentName:"li"},"dotnet new")," uses to scaffold projects"),(0,a.kt)("li",{parentName:"ul"},"Understanding the differences between an ASP.NET Core Web API and an ASP.NET Core MVC Web App"),(0,a.kt)("li",{parentName:"ul"},"Building an API that includes full CRUD functionality"),(0,a.kt)("li",{parentName:"ul"},"Using query strings to create search and filter functionality in our API"),(0,a.kt)("li",{parentName:"ul"},"Returning API responses with the correct HTTP status code"),(0,a.kt)("li",{parentName:"ul"},"How to seed database data"),(0,a.kt)("li",{parentName:"ul"},"How to scaffold API controllers and add model validation to an API"),(0,a.kt)("li",{parentName:"ul"},"How to use Swagger UI documentation that comes with the ASP.NET Core Web API template"),(0,a.kt)("li",{parentName:"ul"},"How to make API calls via Postman"),(0,a.kt)("li",{parentName:"ul"},"Documenting your API endpoints"),(0,a.kt)("li",{parentName:"ul"},"Making API calls from an ASP.NET Core MVC application ")),(0,a.kt)("p",null,"You're also be tasked with doing further exploration:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Authenticating API users with JSON Web Tokens"),(0,a.kt)("li",{parentName:"ul"},"Versioning your API"),(0,a.kt)("li",{parentName:"ul"},"Paging your API responses"),(0,a.kt)("li",{parentName:"ul"},"Enabling CORS in your API")),(0,a.kt)("p",null,"With this being the last section of new material for the C# and .NET course, one of our main goals for this section is to foster growth in your ability to independently learn and troubleshoot. This means the further exploration will be exactly that: ",(0,a.kt)("em",{parentName:"p"},"exploration"),". Once you begin active development in the industry, there will not always be step-by-step guides for exact implementation of concepts that fit neatly into your projects. It is critical that you have the opportunity to get experience in diving into documentation, modifying code snippets you find online to fit your needs, looking up error messages you receive, and solving problems with patience and trial-and-error. "),(0,a.kt)("p",null,"In this section, we will reaffirm a point from the student handbook: "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Our best advice is to not think of Epicodus as a place to learn Ruby, React, C#, JavaScript, or some other language or tool. Instead, think of it as a place to learn how to learn.")," ")),(0,a.kt)("p",null,"Although teachers ",(0,a.kt)("em",{parentName:"p"},"may")," be willing to talk broadly about these further exploration concepts with you, do not expect any teacher guidance on these principles. It may be frustrating in the moment to feel like you are on your own in finding these answers, but it's the best preparation we can give you for the world waiting for you after Epicodus. This course section is an opportunity to differentiate yourself through your unique implementations of these concepts. "),(0,a.kt)("p",null,"This sentiment will be repeated in the actual lesson introducing these further explorations. Remember to be patient with yourself, be confident in yourself, and be proud of yourself when you figure out how to use these tools!"),(0,a.kt)("h2",{id:"independent-project-objectives"},"Independent Project Objectives"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"At the end of this section, you will complete an independent project. Your code will be reviewed for the following objectives:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Application includes CRUD functionality and successfully returns responses to API calls."),(0,a.kt)("li",{parentName:"ul"},"README thoroughly describes all endpoints along with parameters that can be used."),(0,a.kt)("li",{parentName:"ul"},"Application includes a best effort at implementing at least one of the further exploration objectives: authentication, versioning, pagination, or CORS."),(0,a.kt)("li",{parentName:"ul"},"README includes specific documentation on further exploration: what it is and how to use it."),(0,a.kt)("li",{parentName:"ul"},"Build files and sensitive information are included in ",(0,a.kt)("inlineCode",{parentName:"li"},".gitignore")," file and is not to be tracked by Git, and includes instructions on how to create the ",(0,a.kt)("inlineCode",{parentName:"li"},"appsettings.json")," and set up the project."),(0,a.kt)("li",{parentName:"ul"},"Project is in a polished, portfolio-quality state."),(0,a.kt)("li",{parentName:"ul"},"The prompt\u2019s required functionality and baseline project requirements are in place by the deadline.")))}d.isMDXComponent=!0}}]);